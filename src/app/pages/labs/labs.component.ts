import { Component } from '@angular/core';
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

  name = 'Sergio';
  age = 25;
  disabled = true;
  img = 'https://fydn.imgix.net/m%2Fgen%2Fart-print-std-portrait-p1%2F2675dd31-71e9-4f19-95fc-f487a9effab7.jpg?auto=format%2Ccompress&q=75'

  person = {
    name: 'Sergio',
    age: 25,
    img: 'https://fydn.imgix.net/m%2Fgen%2Fart-print-std-portrait-p1%2F2675dd31-71e9-4f19-95fc-f487a9effab7.jpg?auto=format%2Ccompress&q=75'
  };

}
