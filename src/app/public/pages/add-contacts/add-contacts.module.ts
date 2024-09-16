import { NgModule } from '@angular/core';

//Modulos
import { CommonModule } from '@angular/common';
import { AddContactsRoutingModule } from './add-contacts-routing.module';
import { FormsModule } from '@angular/forms';  //Agregue el componente de formularios par angular

//Componentes
import { AddContactsComponent } from './add-contacts.component';
import { ContactAddComponent } from '../../components/contact-add/contact-add.component';

@NgModule({
  declarations: [
    AddContactsComponent,
    ContactAddComponent
  ],
  imports: [
    CommonModule,
    AddContactsRoutingModule,
    FormsModule
    
    
  ]
})
export class AddContactsModule { }

