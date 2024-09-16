import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/core/interfaces/contacts';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-contact-list-list',
  templateUrl: './contact-list-list.component.html',
  styleUrls: ['./contact-list-list.component.scss'],
})
export class ContactListListComponent implements OnInit {

  iconoEditar = faEdit
  iconoEliminar = faTrashCan

  contactos: Contacto[] = [
    {
      imagen: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
      nombre: 'Andris',
      apellido: 'Branche',
      celular: '182-933-6611',
      email: 'abranche0@gnu.org',
    },
    {
      imagen: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
      nombre: 'Kellia',
      apellido: 'Andrat',
      celular: '541-646-6707',
      email: 'kandrat1@friendfeed.com',
    },
    {
      imagen: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
      nombre: 'Sibelle',
      apellido: 'Darlasson',
      celular: '939-334-0143',
      email: 'sdarlasson2@hc360.com',
    },
    {
      imagen: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
      nombre: 'Nolan',
      apellido: 'Kemmish',
      celular: '919-263-6365',
      email: 'nkemmish3@wp.com',
    },
    {
      imagen: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
      nombre: 'Fina',
      apellido: 'Galley',
      celular: '918-140-7930',
      email: 'fgalley4@google.fr',
    },
    {
      imagen: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
      nombre: 'Byrann',
      apellido: 'Lowthian',
      celular: '468-650-8061',
      email: 'blowthian5@liveinternet.ru',
    },
    {
      imagen: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
      nombre: 'Garvey',
      apellido: 'Latchmore',
      celular: '915-304-3669',
      email: 'glatchmore6@princeton.edu',
    },
    {
      imagen: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
      nombre: 'Stephani',
      apellido: 'Onslow',
      celular: '424-308-0944',
      email: 'sonslow7@timesonline.co.uk',
    },
    {
      imagen: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
      nombre: 'Spike',
      apellido: 'Hanselmann',
      celular: '869-295-5452',
      email: 'shanselmann8@admin.ch',
    },
    {
      imagen: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
      nombre: 'Myrta',
      apellido: 'Winborn',
      celular: '778-853-4028',
      email: 'mwinborn9@auda.org.au',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
