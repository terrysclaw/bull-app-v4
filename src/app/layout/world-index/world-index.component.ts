import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

export class Index {
  region: string;
  code: string;
  name: string;
  symbol: string;
  price: number;
  change: number;
  time: string;
}


@Component({
  selector: 'app-world-index',
  templateUrl: './world-index.component.html',
  styleUrls: ['./world-index.component.css'],
})
export class WorldIndexComponent implements OnInit {
	public indexes: Index[] = [
		{'region': 'HK', 'code': 'HSI', 'name': '恒生指數', 'symbol': 'INDEXHANGSENG:HSI', 'price': 0, 'change': 0, 'time': ''},
		{'region': 'HK', 'code': 'HSCEI', 'name': '中國企業指數', 'symbol': 'INDEXHANGSENG:HSCEI', 'price': 0, 'change': 0, 'time': ''},
		{'region': 'HK', 'code': 'HSCCI', 'name': '香港中資企業指數', 'symbol': 'INDEXHANGSENG:HSCCI', 'price': 0, 'change': 0, 'time': ''},
	
		{'region': 'CHINA', 'code': '000001', 'name': '上證綜合指數', 'symbol': 'SHA:000001', 'price': 0, 'change': 0, 'time': ''},
		{'region': 'CHINA', 'code': '000300', 'name': '滬深300指數', 'symbol': 'SHA:000300', 'price': 0, 'change': 0, 'time': ''},
		{'region': 'CHINA', 'code': '399001', 'name': '深證綜合指數', 'symbol': 'SHE:399001', 'price': 0, 'change': 0, 'time': ''},
	
		{'region': 'US', 'code': '.DJI', 'name': '杜瓊斯指數', 'symbol': 'INDEXDJX:.DJI', 'price': 0, 'change': 0, 'time': ''},
		{'region': 'US', 'code': '.INX', 'name': '標準普爾 500 指數', 'symbol': 'INDEXSP:.INX', 'price': 0, 'change': 0, 'time': ''},
		{'region': 'US', 'code': '.IXIC', 'name': '納斯達克指數', 'symbol': 'INDEXNASDAQ:.IXIC', 'price': 0, 'change': 0, 'time': ''},
	
		{'region': 'EU', 'code': 'UKX', 'name': '富時 100 指數', 'symbol': 'INDEXFTSE:UKX', 'price': 0, 'change': 0, 'time': ''},
		{'region': 'EU', 'code': 'DAX', 'name': '德國 DAX 指數', 'symbol': 'INDEXDB:DAX', 'price': 0, 'change': 0, 'time': ''},
		{'region': 'EU', 'code': 'PX1', 'name': '法國 CAC 40 指數', 'symbol': 'INDEXEURO:PX1', 'price': 0, 'change': 0, 'time': ''},
	
		{'region': 'ASIA', 'code': 'NI225', 'name': '東京日經指數', 'symbol': 'INDEXNIKKEI:NI225', 'price': 0, 'change': 0, 'time': ''},
		{'region': 'ASIA', 'code': 'TAIEX', 'name': '台灣加權指數', 'symbol': 'TPE:TAIEX', 'price': 0, 'change': 0, 'time': ''},
		{'region': 'ASIA', 'code': 'KOSPI', 'name': '韓國綜合股價指數', 'symbol': 'KRX:KOSPI', 'price': 0, 'change': 0, 'time': ''},
	];
	
	ts = new Date().getTime();
	
	constructor(private http: Http) {
		
	}

	ngOnInit() {
		this.google();
		setInterval(() => { this.google(); }, 1000 * 60 * 1);
	}
	
	google() {
		this.http.get('//www.bull.com.hk/api/google.php')
		  .map(response => response.json())
		  .subscribe(res => {
			for(var i=0; i<res.length; i++){
				for(var j=0; j < this.indexes.length; j++){
					if(this.indexes[j].symbol === res[i].e + ':' + res[i].t){
						this.indexes[j].price = parseFloat(res[i].l.replace(',', ''));
						this.indexes[j].change = parseFloat(res[i].c);
						this.indexes[j].time = res[i].ltt;
					}
				}
			}
		});
			
		
		this.ts = new Date().getTime(); 
	}

}
