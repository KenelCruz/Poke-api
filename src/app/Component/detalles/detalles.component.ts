import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';
import { from } from 'rxjs';
import { PokeI } from 'src/app/Models/Pokeinterface';
import {ApiServiceService} from '../../Services/api-service.service'
@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  constructor(
    private activerouter: ActivatedRoute,
    private router: Router,
    private ApiServiceService: ApiServiceService
  ) { }

  datospokemon: any;
  experienciapokemon: any;
  movimientospokemon: any;
  Smovimientospokemon: any;
  Nombre_Pokemon: any;

  detallesForm = new FormGroup({
    nombre: new FormControl(''),
    Primer_movimiento: new FormControl(''),
    Segundo_Movimiento: new FormControl(''),
    Experciencia_base: new FormControl(''),
  });









  ngOnInit(): void {
    let pokename = this.activerouter.snapshot.paramMap.get('name');
  this.ApiServiceService.getunpokemon(pokename).subscribe((res:any)=>{

    this.datospokemon = res.name;
    this.experienciapokemon = res.base_experience;
    this.movimientospokemon = res["moves"][0].move.name;
    this.Smovimientospokemon = res["moves"][1].move.name;



    this.detallesForm.setValue({
      nombre: this.datospokemon,
      Primer_movimiento: this.movimientospokemon,
      Segundo_Movimiento: this.Smovimientospokemon,
      Experciencia_base: this.experienciapokemon,
    });

  });

  }

  public exportar(){
    let DATA: any = document.getElementById('htmlData');

    html2canvas(DATA).then(canvas => {

    let fileWidth = 208;
    let fileHeight = canvas.height * fileWidth / canvas.width;

    const FILEURI = canvas.toDataURL('image/png')
    let PDF = new jsPDF('p', 'mm', 'a4');
    let position = 20;
    PDF.addImage(FILEURI, 'PNG', 10, position, fileWidth, fileHeight)

    PDF.save(this.datospokemon + ".pdf");
});



  }

  public Atras(){
    this.router.navigate(['Buscador']);
  }

}
