import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewContactPage } from '../add-new-contact/add-new-contact.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  contacts = []

  constructor(public modalCtrl:ModalController) { }

  async addNewContact() {
    const modal = await this.modalCtrl.create({
      component : AddNewContactPage
    })

    modal.onDidDismiss().then(newContactObj => {
      console.log(newContactObj.data);
      this.contacts.push(newContactObj.data)
    })

    return await modal.present()
  }

  delete(key) {
    this.contacts.splice(key,1)
  }



}
