import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {NavbarComponent} from '../app/Component/navbar/navbar.component'
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule, routinComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiServiceService } from './Services/api-service.service';
import { from } from 'rxjs';
import { FiltroPipe } from './Pipe/filtro.pipe';
import { DetallesComponent } from './Component/detalles/detalles.component';


@NgModule({
  declarations: [
    AppComponent,
    routinComponents,
    NavbarComponent,
    FiltroPipe,
    DetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule

  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
