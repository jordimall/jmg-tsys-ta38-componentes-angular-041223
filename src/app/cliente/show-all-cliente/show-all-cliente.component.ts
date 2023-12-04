import { Component, Input } from '@angular/core';
import { Cliente } from '../../models/cliente';

@Component({
  selector: 'app-show-all-cliente',
  standalone: true,
  imports: [],
  templateUrl: './show-all-cliente.component.html',
  styleUrl: './show-all-cliente.component.css',
})
export class ShowAllClienteComponent {
  @Input() listClientes: any | Cliente;
}
