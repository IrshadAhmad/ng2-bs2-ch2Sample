import {Component} from 'angular2/core';
import {Alert} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'home',
  templateUrl: './components/home/home.html',
  styleUrls: ['./components/home/home.css'],
  directives: [Alert]
})
export class HomeCmp {
	public alerts: string[] = [];
	public types = ['success', 'info', 'warning', 'danger'];
	addAlert() {
		let i = this.alerts.length;
		this.alerts.push(this.types[i]);
	}
}
