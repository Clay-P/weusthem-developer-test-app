import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NgModule } from '@angular/core';



@Component({
  selector: 'app-add-new-contact',
  templateUrl: './add-new-contact.page.html',
  styleUrls: ['./add-new-contact.page.scss'],
})
export class AddNewContactPage implements OnInit {

  contacts = []

  firstName
  lastName
  email
  phone
  profilePicture

  contactObject = {}

  constructor(public modalCtrl:ModalController) { }

  ngOnInit() {
  }

  async addContact(){
    this.contactObject = ({firstName:this.firstName, lastName:this.lastName, 
                          email:this.email, phone:this.phone, 
                          profilePicture:this.profilePicture})

    this.dismiss()
  }

  async dismiss() {
    await this.modalCtrl.dismiss()
  }

}
