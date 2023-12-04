export class Cliente {
  private nombre: string;
  private cif: string;
  private direccion: string;
  private grupo: string;

  constructor(nombre: string, cif: string, direccion: string, grupo: string) {
    this.nombre = nombre;
    this.cif = cif;
    this.direccion = direccion;
    this.grupo = grupo;
  }

  public getNombre = (): string => {
    return this.nombre;
  };

  public getCif = (): string => {
    return this.cif;
  };

  public getDireccion = (): string => {
    return this.direccion;
  };

  public getGrupo = (): string => {
    return this.grupo;
  };
}
