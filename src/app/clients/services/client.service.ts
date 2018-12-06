import { Injectable } from "@angular/core";
import { StateClient } from "src/app/shared/enums/state-client.enum";
import { Client } from "src/app/shared/models/client";
import { fakeClients } from "./fake-clients";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ClientService {
  private itemsCollection: AngularFirestoreCollection<Client>;
  // Observable qui, lorsqu'on y souscrit, on retourne un observable qui est un tableau de Prestation
  private _collection$: Observable<Client[]>;

  constructor(private afs: AngularFirestore) {
    // this.collection = fakePrestations;
    this.itemsCollection = afs.collection<Client>("clients");
    this._collection$ = this.itemsCollection.valueChanges().pipe(
      // Syntaxe courte
      // map(data => data.map(doc => new Prestation(doc)))
      // data : tableau json
      map(data => {
        return data.map(doc => {
          return new Client(doc);
        });
      }),
    );
  }

  // get collection
  public get collection$(): Observable<Client[]> {
    return this._collection$;
  }

  // set collection
  public set collection$(col: Observable<Client[]>) {
    this._collection$ = col;
  }

  // add presta
  add(item: Client): Promise<any> {
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
    // return this.http.post('urlapi/addprestation', item);
  }

  update(item: Client, state?: StateClient): Promise<any> {
    // recréer un nouveau objet
    const presta = { ...item };
    if (state) {
      presta.state = state;
    }
    return this.itemsCollection
      .doc(item.id)
      .update(presta)
      .catch(e => {
        console.log(e);
      });
    // return this.http.patch('urlapi/prestationupdate/'+item.id, presta);
  }

  public delete(item: Client): Promise<any> {
    return this.itemsCollection
      .doc(item.id)
      .delete()
      .catch(e => {
        console.log(e);
      });
    // return this.http.delete(`urlapi/prestations/delete/${item.id}`);
  }

  getPrestation(id: string): Observable<Client> {
    return this.itemsCollection.doc<Client>(id).valueChanges();
    // return this.http.get(`urlapi/prestations/get/${id}`);
  }
}
