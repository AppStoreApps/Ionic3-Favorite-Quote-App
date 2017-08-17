import { Component } from '@angular/core';
import { IonicPage, MenuController, ModalController } from 'ionic-angular';
import { QuotesService } from '../../services/quotes';
import { Quote } from '../../data/quote.interface';
import { QuotePage } from '../quote/quote';
import {SettingsService} from "../../services/settings";

/**
 * Generated class for the FavouritesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {

  quotes: Quote[];
  constructor(private quoteService: QuotesService,
              private settingsService: SettingsService,
              private modalCtrl: ModalController){}

  ionViewWillEnter() {
    this.quotes = this.quoteService.getFavouriteQuotes();
  }

  onViewQuote(selectedQuote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, selectedQuote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if (remove) {
        this.onRemoveFromFavourites(selectedQuote);
      }
    });
  }

  onRemoveFromFavourites(selectedQuote: Quote) {
    this.quoteService.removeQuoteFromFavouries(selectedQuote);
    // this.quotes = this.quoteService.getFavouriteQuotes();
    // Alternative approach to remove single quote from this.quotes array
    const position = this.quotes.findIndex((quoteEl: Quote) => {
      return quoteEl.id === selectedQuote.id;
    });
    this.quotes.splice(position, 1);
  }

  getBackground() {
    return this.settingsService.isAltBackground() ? 'altQuoteBackground': 'quoteBackground';
  }

  isAltBackground() {
    return this.settingsService.isAltBackground();
  }

}
