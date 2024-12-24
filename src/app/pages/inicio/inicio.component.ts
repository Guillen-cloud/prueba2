import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: false,
  
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  nombre: string = 'MiNombre ejemplo';
  nombre2: string = 'MiNombre2 Ejemplo2';
  lenguajes: string[] = ['C#', 'Java', 'Python', 'typescript', 'Javascript'];
  PI: number = Math.PI;
  porcentaje: number = 0.235;
  salario: number = 1234.5;
  fecha: Date = new Date();
  activar: boolean = true;
  idioma: string = 'es';
  videoUrl: string = 'https://www.youtube.com/embed/q_ZM8uPT3us';

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('llego la data');
    }, 4500);
  });

  persona = {
    nombre: 'Ricardo',
    Paterno: 'Guillen',
    edad: 0,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  }
  
  
}
