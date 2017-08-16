import { Quote } from '../data/quote.interface';
export class QuotesService {
  private favouriteQuote: Quote[] = [];

  addQuoteToFavourites(quote: Quote) {
    this.favouriteQuote.push(quote);
    console.log(this.favouriteQuote);
  }

  removeQuoteFromFavouries(quote: Quote) {
    const position = this.favouriteQuote.findIndex((quoteEl: Quote) => {
      return quoteEl.id === quote.id;
    });
    this.favouriteQuote.splice(position, 1);
  }

  getFavouriteQuotes() {
    return this.favouriteQuote.slice();                       // Pass copy of the reference
  }
}
