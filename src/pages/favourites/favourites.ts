import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { QuotesService } from '../../services/quotes';
import { Quote } from '../../data/quote.interface';
import { QuotePage } from '../quote/quote';

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
              private modalCtrl: ModalController) {}

  ionViewWillEnter() {
    this.quotes = this.quoteService.getFavouriteQuotes();
  }

  onViewQuote(selectedQuote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, selectedQuote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {

    });
  }


}
