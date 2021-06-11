import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {PokeI} from '../Models/Pokeinterface';
import {DetallesI} from '../Models/Detallesinterface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
URL_API = 'https://localhost:44365/api/Pokemon';

  constructor(private http: HttpClient) { }

public getPokemons() {
    return this.http.get<PokeI>(this.URL_API);
  }

  public getunpokemon(name: any){
 let dereccion = this.URL_API + '/'+ name;
 return this.http.get<DetallesI>(dereccion);
  }
}
