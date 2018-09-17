import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuotedetailsComponent } from './quotedetails/quotedetails.component';
import { QuoteformComponent } from './quoteform/quoteform.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuotedetailsComponent,
    QuoteformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
