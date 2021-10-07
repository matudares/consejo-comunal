import { Component, OnInit } from '@angular/core';
import {consejoComunal} from '../../consejo-comunal'
import { ServidorService } from 'src/app/services/servidor.service';

//Para usar el servicio se debe agregar como proveedor en el constructor
@Component({
  selector: 'app-main-ui',
  templateUrl: './main-ui.component.html',
  styleUrls: ['./main-ui.component.css']
})
export class MainUiComponent implements OnInit {
  filtroComunidad="";
  comunidad: consejoComunal[] = [];
  columnasAMostrar: String[] =['text'];

  borrar(comunidad: consejoComunal){
    console.log('Metodo borrar');
    var confirmacion = confirm('Desea borrar este objeto?');

    if(confirmacion ===true){
      this.servidorService.getConsejoComunal().subscribe(() => this.comunidad =this.comunidad.filter(valor => valor.id! !== comunidad.id));
      console.log('borrado exitoso');
    }
  }

  editar(comunidad: consejoComunal){
    console.log('Edicion exitosa');
    var edicion = prompt('Por favor ingrese el nuevo valor');
    
    if (edicion){
      comunidad.text = edicion;
      this.servidorService.getConsejoComunal().subscribe(() => comunidad.text)
      console.log(comunidad);    
    }
    
  }

  constructor(private servidorService: ServidorService) { 
  }

  ngOnInit(): void {
    this.servidorService.getConsejoComunal().subscribe((comunidad) => this.comunidad =comunidad);
  }
  
  agregar(comunidad: consejoComunal){
    console.log(comunidad);

    this.servidorService.getConsejoComunal().subscribe(() => (this.comunidad.push(comunidad)));
    console.log(this.comunidad);
    
  }
}
