import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './components/banner/banner.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { HabilidadesDyBComponent } from './components/habilidades-dy-b/habilidades-dy-b.component';
import { HeaderComponent } from './components/header/header.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { NuevaNavBarComponent } from './components/nueva-nav-bar/nueva-nav-bar.component';

const routes: Routes = [
  { path: 'banner', component: BannerComponent  },
  { path: 'acercade', component: AcercadeComponent  },
  { path: 'educacion ', component: EducacionComponent  },
  { path: 'experiencia', component: ExperienciaComponent },
  { path: 'habilidadesDyB', component: HabilidadesDyBComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'proyectos', component: ProyectosComponent },
  {path:'nueva-nav-bar', component: NuevaNavBarComponent}
          ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
