import { Component } from '@angular/core';
import { Cliente } from '../models/cliente';
import { NewClienteComponent } from './new-cliente/new-cliente.component';

@Component({
  selector: 'app-cliente',
  standalone: true,
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css',
  imports: [NewClienteComponent],
})
export class ClienteComponent {
  clientes: Cliente[] = [];
  constructor() {}

  adjuntarCliente = (cliente: Cliente): void => {
    this.clientes.push(cliente);
  };
}
