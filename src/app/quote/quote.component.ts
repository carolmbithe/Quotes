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
    new Quote(0,"Dare to be the best","Maryln","Carol",new Date(2018,3,14),0,0),
    new Quote(1,"All things are possible","Gael","red",new Date(2018,3,14),0,0),
  ]

  delete(isDone,index){
    if (isDone){
      this.quotes.splice(index,1);
              }
          }

  addQuote(quote) {
    let quoteLength=this.quotes.length;
    quote.id=quoteLength + 1;
    // quote.createdTime = (quote.createdTime)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit() {
  }

}
