import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  formIsActive: boolean = false;
  items: FirebaseListObservable<any[]>;

  constructor(private ps: ProductService, private db: AngularFireDatabase) {
    this.items = db.list('/items');
  }

  showForm(): void {
    this.formIsActive = true;
  }

  hideForm(): void {
    this.formIsActive = false;
  }

  
}
