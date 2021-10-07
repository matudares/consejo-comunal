import { Injectable } from '@angular/core';

import { Observable, of } from  'rxjs';
import {consejoComunal} from '../consejo-comunal'
import { COMUNIDAD } from '../datos-simulados';

@Injectable({
  providedIn: 'root'
})
export class ServidorService {

  constructor() { }

  getConsejoComunal(): Observable< consejoComunal[]>{
    //Para retornar un observable directamente
    const Comunidad = of(COMUNIDAD)
    return Comunidad;
  }

}
