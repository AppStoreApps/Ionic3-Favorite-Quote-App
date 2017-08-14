import { Component, OnInit } from '@angular/core';
import { Quote } from "../../data/quote.interface";
import quotes from '../../data/quotes';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
  quoteCollections: {category: string, quotes: Quote[], icon: string}[];

  ngOnInit() {
    this.quoteCollections = quotes;
  }
}
