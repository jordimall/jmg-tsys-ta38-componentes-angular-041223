export class Cliente {
  private nombre: string;
  private cif: string;
  private direccion: string;
  private grupo: string | unknown;

  constructor(
    nombre: string,
    cif: string,
    direccion: string,
    grupo: string | unknown
  ) {
    this.nombre = nombre;
    this.cif = cif;
    this.direccion = direccion;
    this.grupo = grupo;
  }
}
