export class State {

  private _stateID: number;
  private _stateName: string;
  private _IsOperative: number;
  private _location;
  private _stateCode: string;

  get stateID(): number {
    return this._stateID;
  }

  set stateID(value: number) {
    this._stateID = value;
  }

  get stateName(): string {
    return this._stateName;
  }

  set stateName(value: string) {
    this._stateName = value;
  }

  get IsOperative(): number {
    return this._IsOperative;
  }

  set IsOperative(value: number) {
    this._IsOperative = value;
  }


  get location() {
    return this._location;
  }

  set location(value) {
    this._location = value;
  }

  get stateCode(): string {
    return this._stateCode;
  }

  set stateCode(value: string) {
    this._stateCode = value;
  }
}
