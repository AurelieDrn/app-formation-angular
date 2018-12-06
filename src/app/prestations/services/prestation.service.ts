import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
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

  constructor(private afs: AngularFirestore) {
    // this.collection = fakePrestations;
    this.itemsCollection = afs.collection<Prestation>("prestations");
    this._collection$ = this.itemsCollection.valueChanges().pipe(
      // Syntaxe courte
      // map(data => data.map(doc => new Prestation(doc)))
      // data : tableau json
      map(data => {
        return data.map(doc => {
          return new Prestation(doc);
        });
      }),
    );
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
    // return this.http.post('urlapi/addprestation', item);
  }

  update(item: Prestation, state?: State): Promise<any> {
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

  public delete(item: Prestation): Promise<any> {
    return this.itemsCollection
      .doc(item.id)
      .delete()
      .catch(e => {
        console.log(e);
      });
    // return this.http.delete(`urlapi/prestations/delete/${item.id}`);
  }

  getPrestation(id: string): Observable<Prestation> {
    return this.itemsCollection.doc<Prestation>(id).valueChanges();
    // return this.http.get(`urlapi/prestations/get/${id}`);
  }
}
