class State {
  last: any;
  state: any;
  time: number;
  justSetState: boolean;
  first: boolean;
  constructor(state: any) {
    this.set(state);
  }

  set(state: any) {
    this.last = this.state;
    this.state = state;
    this.time = 0;
    this.justSetState = true;
    this.first = true;
  }

  get() {
    return this.state;
  }

  update(dt: number) {
    this.first = this.justSetState;
    this.time += this.first ? 0 : dt;
    this.justSetState = false;
  }

  is(state: any) {
    return this.state === state;
  }

  isIn(...states: any) {
    return states.some((s: any) => this.is(s));
  }
}

export default State;
