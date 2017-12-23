import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  formIsOnline: boolean = true;

  constructor(private ps: ProductService) {
    
   }

  ngOnInit() {
  }

}
