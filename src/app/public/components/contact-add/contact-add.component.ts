import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.scss']
})
export class ContactAddComponent implements OnInit {

  usuarios  = {

    nombre : "",
    apellido : "",
    celular :"",
    telefono : "",
    email :"",
    cumple:""
  }

  constructor() { }
  
  ngOnInit(): void {
  }

  guardar(forma: NgForm){

    if (forma.invalid) {
      Object.values(forma.controls).forEach(control =>{
        
        control.markAsTouched();
      })

      return;
      
    }

    console.log(forma.value);

  }

}
