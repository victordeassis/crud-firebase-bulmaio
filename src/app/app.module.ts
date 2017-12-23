import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { PricingPlansTableComponent } from './pricing-plans-table/pricing-plans-table.component';
import { ProductFormComponent } from './product-form/product-form.component';

import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    PricingPlansTableComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
