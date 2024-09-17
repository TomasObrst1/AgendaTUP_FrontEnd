import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactBlockComponent } from '../../components/contact-block/contact-block.component';

const routes: Routes = [{
  path: "",
  component: ContactBlockComponent 
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsBlockRoutingModule { }
