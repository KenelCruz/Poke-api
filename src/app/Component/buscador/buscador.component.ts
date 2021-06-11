import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { from } from 'rxjs';
import { PokeI } from '../../Models/Pokeinterface';
import { ApiServiceService } from '../../Services/api-service.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
})
export class BuscadorComponent implements OnInit {
  Pokemones: any[] = [];
  filtro_value: any;
  Nombre_Poke: any;
  MostrarDatos: boolean = false;
  p: number = 1;

  constructor(
    private ApiServiceService: ApiServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.Buscar();
    this.search.valueChanges.subscribe((value) => (this.filtro_value = value));

    do{
      this.MostrarDatos = false;
    }while(this.filtro_value = "")
  }

  search = new FormControl('');

  public  Ocultar(){



  }

  public Buscar() {
    this.ApiServiceService.getPokemons().subscribe((resp) => {
      this.Pokemones = resp.results;
    });
  }

  public detalle(name: any) {
    this.router.navigate(['Detalles', name]);
  }
}
