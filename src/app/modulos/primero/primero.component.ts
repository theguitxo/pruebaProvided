import { Component } from "@angular/core";

@Component({
  selector: 'primero-component',
  template: `
    <div style="margin: 1em">
      <div>Primero Component</div>
      <contador-component></contador-component>
    </div>
  `
})
export class PrimeroComponent {}
