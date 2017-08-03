import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-hsi-constituent',
  templateUrl: './hsi-constituent.component.html',
  styleUrls: ['./hsi-constituent.component.css']
})
export class HsiConstituentComponent implements OnInit {

	ts = new Date().getTime();
  
	constructor(private http: Http) {
	}

	ngOnInit() {
		this.aastock();
		setInterval(() => { this.aastock(); }, 1000 * 60 * 1);
	}

	aastock() {
		this.ts = new Date().getTime(); 
	}
}
