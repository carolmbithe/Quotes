import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  title = 'QUOTE';

  quotes = [
    new Quote(1,"Dare to be the best","Maryln","Carol"),
    new Quote(1,"Dare to be the best","Maryln","Carol"),
  ]

  delete(isDone,index){
    if (isDone){
      this.quotes.splice(index,1);
              }
          }

  addNewQuote(quote) {
    let quoteLength=this.quotes.length;
    quote.id=quoteLength + 1;
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit() {
  }

}
