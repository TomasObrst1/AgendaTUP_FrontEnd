import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./public/pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: "contacts",
    loadChildren: () => import('./public/pages/contacts-list/contacts-list.module').then(m => m.ContactsListModule)
  },
  {
    path: "addContact",
    loadChildren: () => import('./public/pages/add-contacts/add-contacts.module').then(m => m.AddContactsModule) 
  },
  {
    path: "detalleContacto",
    loadChildren: () => import('./public/pages/contact-details/contact-details.module').then(m => m.ContactDetailsModule)
  },
  {
    path: "contactBlock",
    loadChildren: () => import('./public/pages/contacts-block/contacts-block.module').then(m => m.ContactsBlockModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      useHash: false,
      scrollPositionRestoration: "enabled"
    })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
