import { Injectable } from '@angular/core';
// muestra el estado de la api por consola
@Injectable({
  providedIn: 'root'
})

export class DemoService {

  constructor() { }

  async infoApi() {
    const res = await fetch(`https://dog.ceo/api/breeds/list/all`, // url
          { method: 'GET' // metodo que quiero hacer.Por defecto, es GET, por lo que en este caso podria ir sin el method. 
          })
    
    const json = await res.json() // variable donde guarda la informacion que traes de la API
    
    console.log(res) // muestra el estado de la api por consola
    console.log(json) // muestra lo que trae la api por consola
    
    return res;
    }

    // Seguir viendo el archivo pages/contacts-list/contact-list.component.ts
}


