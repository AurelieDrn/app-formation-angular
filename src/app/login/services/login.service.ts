import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { User } from "src/app/shared/models/user";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  private _users$: Observable<User[]>;
  private itemsCollection: AngularFirestoreCollection<User>;
  public currentUser: Observable<User>;

  constructor(private afs: AngularFirestore, private http: HttpClient) {
    // this.collection = fakePrestations;
    this.itemsCollection = afs.collection<User>("User");
    this._users$ = this.itemsCollection.valueChanges().pipe(
      // Syntaxe courte
      // map(data => data.map(doc => new Prestation(doc)))
      // data : tableau json
      map(data => {
        if (data.length > 0) {
          return data.map(doc => {
            return new User(doc);
          });
        }
        return null;
      }),
    );
  }

  // get collection
  public get users$(): Observable<User[]> {
    return this._users$;
  }

  // set collection
  public set users$(users: Observable<User[]>) {
    this._users$ = users;
  }

  public login(username, pw): Observable<User> {
    const user: User = new User({ login: username, password: pw });
    let user$: Observable<User> = of(user);

    this.itemsCollection
      .doc<User>(username)
      .valueChanges()
      .subscribe(data => {
        if (data) {
          if (data.password === pw) {
            // On enregistre les détails de l'utilisateur connecté dans le local storage
            localStorage.setItem(
              "currentUser",
              JSON.stringify(new User({ login: username, password: pw })),
            );
            user.token = "token";
            user$ = of(user);
          }
        }
      });
    return user$;
  }
}
