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

}
