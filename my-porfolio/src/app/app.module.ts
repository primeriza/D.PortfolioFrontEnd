import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { HabilidadesDyBComponent } from './components/habilidades-dy-b/habilidades-dy-b.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { AppRoutingModule } from './app-routing.module';
import { NuevaNavBarComponent } from './components/nueva-nav-bar/nueva-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HeaderComponent,
    AcercadeComponent,
    EducacionComponent,
    ExperienciaComponent,
    HabilidadesDyBComponent,
    ProyectosComponent,
    NuevaNavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
