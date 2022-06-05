import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {FormControl, FormGroup} from "@angular/forms";


@Injectable({
  providedIn: "root"
})
export class OrdersService {
  constructor(private firestore: AngularFirestore) {}

  form = new FormGroup({
    customerName: new FormControl(""),
    orderNumber: new FormControl(""),
    coffeeOrder: new FormControl(""),
    completed: new FormControl(false)
  });

  //Firestore CRUD actions example
  createCoffeeOrder(data: unknown) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("coffeeOrders")
        .add(data)
        .then(res => {}, err => reject(err));
    });
  }

  updateCoffeeOrder(data: { payload: { doc: { id: string | undefined; }; }; }) {
    return this.firestore
      .collection("coffeeOrders")
      .doc(data.payload.doc.id)
      .set({ completed: true }, { merge: true });
  }

  getCoffeeOrders() {
    return this.firestore.collection("coffeeOrders").snapshotChanges();
  }

  deleteCoffeeOrder(data: { payload: { doc: { id: string | undefined; }; }; }) {
    return this.firestore
      .collection("coffeeOrders")
      .doc(data.payload.doc.id)
      .delete();
  }

}
