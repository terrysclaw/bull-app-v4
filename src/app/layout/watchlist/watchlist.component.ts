import { Component, OnInit } from '@angular/core';

export class Ticker {
  symbol: string;
  name: string;
}

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css'],
})
export class WatchlistComponent implements OnInit {
  public tickers: Ticker[] = [
		{'symbol': '110000', 'name': 'HSI'},
		{'symbol': '110010', 'name': 'HHI'},
		{'symbol': '110041', 'name': 'VHSI'},
		{'symbol': '1299', 'name': 'AIA'},
		{'symbol': '700', 'name': 'QQ'},
		{'symbol': '2840', 'name': 'SPDR 金 ETF'},
	];

	ts = new Date().getTime();

	constructor() { }

	ngOnInit() {
	  setInterval(() => { this.ts = new Date().getTime(); }, 1000 * 60 * 1);
	}

}
