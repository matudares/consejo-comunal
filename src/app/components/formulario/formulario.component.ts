import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import {consejoComunal} from '../../consejo-comunal';
import { ServidorService } from 'src/app/services/servidor.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Input()
  @Output() agregarComunidad: EventEmitter<consejoComunal> = new EventEmitter;
  text!: string;
  id: number | undefined;
  form!: FormGroup;


  onSubmit(){
    if(!this.text){
      alert('Por favor rellene los campos')
      return
    }

    
    const nuevaComunidad = {
      id: this.id,
      text: this.text
    }
    this.agregarComunidad.emit(nuevaComunidad)

    
    this.id=0;
    this.text = '';

    
  }

  constructor(private ServidorService: ServidorService

  ) {

   }

  ngOnInit(): void {
  }



}


/*
  form!: FormGroup;
  private formulario(){

    this.form = this.formBuilder.group({
      id: [''],
      text: ['',[Validators.required]]
    });

    /*this.form.valueChanges
    .pipe(
      debounceTime(500)
    )
    .subscribe(value =>{
      console.log(value);
      //COMUNIDAD.push(value);
      //console.log(COMUNIDAD);
      
    });
    
  } 

  guardar(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const value = this.form.value;
      console.log(value);
    }
    
  }
*/