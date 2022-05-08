import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Traning } from '../models/Traning';

@Injectable({
  providedIn: 'root'
})
export class TraningService {

collectionName = 'Traning';

constructor(private afs: AngularFirestore) { }

// CRUD (Create, Read, Update, Delete)

create(traning: Traning) {
  traning.id=this.afs.createId();
  return this.afs.collection<Traning>(this.collectionName).doc(traning.id).set(traning);
}

getAll() {
  return this.afs.collection<Traning>(this.collectionName).valueChanges();
}

getById(id: string) {
  return this.afs.collection<Traning>(this.collectionName).doc(id).valueChanges();
}

update(traning: Traning) {
  return this.afs.collection<Traning>(this.collectionName).doc(traning.id!).set(traning);
}

delete(id: string) {
  return this.afs.collection<Traning>(this.collectionName).doc(id).delete();
}

}
