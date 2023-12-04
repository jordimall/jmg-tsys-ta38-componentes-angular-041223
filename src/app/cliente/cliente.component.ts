import { Component } from '@angular/core';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css',
})
export class ClienteComponent {
  clientes: Cliente[] = [];
  constructor() {}
}
