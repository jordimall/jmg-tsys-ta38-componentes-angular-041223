import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../../models/cliente';

@Component({
  selector: 'app-new-cliente',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-cliente.component.html',
  styleUrl: './new-cliente.component.css',
})
export class NewClienteComponent {
  public nombre: string = '';
  public cif: string = '';
  public direccion: string = '';
  public grupo: string = '';

  @Output() addCliente = new EventEmitter();

  public guardar = (): void => {
    if (
      this.validarFormulario(this.nombre) &&
      this.validarFormulario(this.cif) &&
      this.validarFormulario(this.direccion)
    ) {
      this.addCliente.emit(
        new Cliente(this.nombre, this.cif, this.direccion, this.grupo)
      );
      this.nombre = '';
      this.cif = '';
      this.direccion = '';
      this.grupo = '';
    } else {
      alert('Debes introducir un nombre, un CIF y una dirección');
    }
  };

  private validarFormulario = (valor: string): boolean => {
    return valor != '';
  };
}
