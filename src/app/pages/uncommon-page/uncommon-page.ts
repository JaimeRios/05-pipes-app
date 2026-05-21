import { Component, signal } from '@angular/core';
import { Card } from "../../components/card/card";
import { I18nSelectPipe } from '@angular/common';

const client1 = {
  name: 'Jaime',
  gender: 'male',
  age: 39,
  address: 'Medellin, Colombia'
}

const client2 = {
  name: 'Mayumi',
  gender: 'female',
  age: 33,
  address: 'Tokyo, Japan'
}

@Component({
  selector: 'app-uncommon-page',
  imports: [Card, I18nSelectPipe],
  templateUrl: './uncommon-page.html',
})
export default class UncommonPage {

  //i18n Select
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  }

  changeClient(){
    if(this.client() == client1){
      this.client.set(client2)
      return;
    }

    this.client.set(client1);
  }

}
