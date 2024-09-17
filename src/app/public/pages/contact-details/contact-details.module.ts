import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactDetailsRoutingModule } from './contact-details-routing.module';
import { ContactDetailsComponent } from './contact-details.component';

import { ContactDetailComponent } from '../../components/contact-detail/contact-detail.component';

@NgModule({
  declarations: [
    ContactDetailsComponent,
    ContactDetailComponent,
  ],
  imports: [
    CommonModule,
    ContactDetailsRoutingModule
  ]
})
export class ContactDetailsModule { }
