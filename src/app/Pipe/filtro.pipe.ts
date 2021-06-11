import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(lista: any[], texto: any): any {
    if(!texto) return lista;

    return lista.filter(poke => poke.name.toUpperCase().includes(texto.toUpperCase()))
  }

}
