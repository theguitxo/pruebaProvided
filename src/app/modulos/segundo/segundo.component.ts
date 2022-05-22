import { Component } from "@angular/core";

@Component({
  selector: 'segundo-component',
  template: `
    <div style="margin: 1em">
      <div>Segundo Component</div>
      <contador-component></contador-component>
    </div>
  `
})
export class SegundoComponent {}
