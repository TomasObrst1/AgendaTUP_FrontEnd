import { Component, OnInit } from '@angular/core';
import { DemoService } from 'src/app/core/interfaces/services/demo.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})

export class ContactsListComponent implements OnInit {

  // el demo service lo trae de services/demo.service.ts
  constructor(
   private demo: DemoService // constructor service
  ) { }

  getDataFromDemo() {
    this.demo.infoApi() // funcion infoAPI creada del service
  }

  // Seguir viendo ./contacts-list.component.html

  ngOnInit(): void { }
}
