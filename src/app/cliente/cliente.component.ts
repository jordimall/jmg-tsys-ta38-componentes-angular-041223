import { Component } from '@angular/core';
import { Cliente } from '../models/cliente';
import { NewClienteComponent } from './new-cliente/new-cliente.component';
import { ShowAllClienteComponent } from "./show-all-cliente/show-all-cliente.component";

@Component({
    selector: 'app-cliente',
    standalone: true,
    templateUrl: './cliente.component.html',
    styleUrl: './cliente.component.css',
    imports: [NewClienteComponent, ShowAllClienteComponent]
})
export class ClienteComponent {
  clientes: Cliente[] = [];
  constructor() {}

  adjuntarCliente = (cliente: Cliente): void => {
    this.clientes.push(cliente);
  };
}
