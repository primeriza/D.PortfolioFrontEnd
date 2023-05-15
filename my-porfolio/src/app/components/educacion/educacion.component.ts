import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent  {
education:any;
constructor(private datosPorfolio:PorfolioService){}


ngOnInit(): void {
  this.datosPorfolio.obtenerDatos().subscribe(data =>{
    console.log(data);
    this.education=data;
  });

}

}




