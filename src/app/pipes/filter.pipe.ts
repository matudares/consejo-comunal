import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg ==="" || arg.length< 3) return value;
    const resultadoComunidad = [];
    for(const comunidad of value ){
      if(comunidad.text.toLowerCase().indexOf(arg.toLowerCase()) >-1){
        console.log('Yes');
        resultadoComunidad.push(comunidad);
        
      }
    }
    return resultadoComunidad;
  }

}
