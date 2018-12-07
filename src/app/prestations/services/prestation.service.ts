import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { Observable, Subject, BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";
import { State } from "src/app/shared/enums/state.enum";
import { Prestation } from "src/app/shared/models/prestation";

@Injectable({
  providedIn: "root",
})
export class PrestationService {
  private itemsCollection: AngularFirestoreCollection<Prestation>;
  // Observable qui, lorsqu'on y souscrit, on retourne un observable qui est un tableau de Prestation
  private _collection$: Observable<Prestation[]>;
  public presta$: BehaviorSubject<Prestation> = new BehaviorSubject(null);

  constructor(private afs: AngularFirestore, private http: HttpClient) {
    // this.collection = fakePrestations;
    this.itemsCollection = afs.collection<Prestation>("prestations");
    this._collection$ = this.itemsCollection.valueChanges().pipe(
      // Syntaxe courte
      // map(data => data.map(doc => new Prestation(doc)))
      // data : tableau json
      map(data => {
        if (data.length > 0) {
          this.presta$.next(new Prestation(data[0]));
          return data.map(doc => {
            return new Prestation(doc);
          });
        }
        this.presta$.next(null);
        return null;
      }),
    );
    // this.collection$ = this.http.get(`${URL_API}/prestations`).pipe(
    //  map(data => data.map(doc => new Prestation(doc)))
    // );
  }

  // get collection
  public get collection$(): Observable<Prestation[]> {
    return this._collection$;
  }

  // set collection
  public set collection$(col: Observable<Prestation[]>) {
    this._collection$ = col;
  }

  // add presta
  add(item: Prestation): Promise<any> {
    // créer un id car form.value crée sans l'id
    const id = this.afs.createId();
    // recréer un objet complet à partir de l'id et de tous les attributs de l'item
    const prestation = { id, ...item };
    return this.itemsCollection
      .doc(id)
      .set(prestation)
      .catch(e => {
        console.log(e);
      });
    // return this.http.post(`${URL_API}/prestations/`, item);
  }

  update(item: Prestation, state?: State): Promise<any> {
    // recréer un nouveau objet
    let presta = { ...item };
    if (state) {
      presta.state = state;
    }

    return this.itemsCollection
      .doc(presta.id)
      .update(presta)
      .catch(e => {
        console.log(e);
      });
    // return this.http.patch(`${URL_API}/prestations/${item.id}`, presta);
  }

  public delete(item: Prestation): Promise<any> {
    return this.itemsCollection
      .doc(item.id)
      .delete()
      .catch(e => {
        console.log(e);
      });
    // return this.http.delete(`${URL_API}/prestations/delete/${item.id}`);
  }

  getPrestation(id: string): Observable<Prestation> {
    return this.itemsCollection.doc<Prestation>(id).valueChanges();
    // return this.http.get(`${URL_API}/prestations/${id}`);
  }
}
