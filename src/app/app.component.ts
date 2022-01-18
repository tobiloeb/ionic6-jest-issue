import {Component, OnInit} from '@angular/core';
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ionic6-angular-jest-test';

  constructor(private alertController: AlertController) {
  }

  ngOnInit() {
    this.alertController.create({mode: "ios"}).then(alert => alert.present());
  }
}
