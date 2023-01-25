export class Alumno {
  private _nombre: string;
  private _apellido: string;
  private _edad: number;
  private _estaInscripto: boolean;
  private _estaCursando: boolean;

  constructor(
    nombre: string,
    apellido: string,
    edad: number,
    estaInscripto: boolean,
    estaCursando: boolean
  ) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
    this._estaInscripto = estaInscripto;
    this._estaCursando = estaCursando;
  }

  get nombre(): string {
    return this._nombre;
  }

  set nombre(value: string) {
    this._nombre = value;
  }

  get apellido(): string {
    return this._apellido;
  }

  set apellido(value: string) {
    this._apellido = value;
  }

  get edad(): number {
    return this._edad;
  }

  set edad(value: number) {
    this._edad = value;
  }

  get estaInscripto(): boolean {
    return this._estaInscripto;
  }

  set estaInscripto(value: boolean) {
    this._estaInscripto = value;
  }

  get estaCursando(): boolean {
    return this._estaCursando;
  }

  set estaCursando(value: boolean) {
    this._estaCursando = value;
  }
}
