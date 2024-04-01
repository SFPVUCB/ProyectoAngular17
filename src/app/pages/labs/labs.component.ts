import { Component, signal } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent
{
  welcome = 'Bienvenido a mi primera aplicacion angular';
  tasks = [
    'task1',
    'task2',
    'task3',
  ];

  name = signal('Sergio') ;
  age = 25;
  disabled = true;
  img = 'https://fydn.imgix.net/m%2Fgen%2Fart-print-std-portrait-p1%2F2675dd31-71e9-4f19-95fc-f487a9effab7.jpg?auto=format%2Ccompress&q=75'

  person = {
    name: 'Sergio',
    age: 25,
    img: 'https://fydn.imgix.net/m%2Fgen%2Fart-print-std-portrait-p1%2F2675dd31-71e9-4f19-95fc-f487a9effab7.jpg?auto=format%2Ccompress&q=75'
  };

  // le ponemos nombre a la funcion para manejar el click
  clickHandler()
  {
    alert('Hola Sergio');
  }
  // creacion una funcion para activar el doble click
  clickHandler2()
  {
    alert('Hola Fernando');
  }
  // funcion para crear click derecho
  clickDerecho(event : MouseEvent)
  {
    event.preventDefault();
    alert('Click Derecho');

  }
  //
  changeHandler(event : Event)
  {
    //event.target nos permite acceder al elemento que desencadeno el evento
    const input = event.target as HTMLInputElement;
    //esto nos sirve para obtener el valor del input
    const newValue = input.value;
    //En esta linea estamos modificando el valor de la señal name
    this.name.set(newValue);

  }
  keydownHandler(event : KeyboardEvent)
  {

    const input = event.target as HTMLInputElement;
    console.log(input.value);

  }

}
