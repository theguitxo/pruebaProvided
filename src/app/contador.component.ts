import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ServicioService } from "./services/servicio.service";

@Component({
  selector: 'contador-component',
  template: `
    <div style="margin: 1em 0">
      <span>Valor servicio: </span><span>{{ valor }}</span>
    </div>
    <div>
      <button (click)="incrementar()">Incrementar</button>&nbsp;<button (click)="decrementar()">Decrementar</button>
    </div>`
})
export class ContadorComponent implements OnInit, OnDestroy {
  public valor = 0;
  private subs: Subscription;

  constructor(
    private servicioService: ServicioService
  ) {}

  ngOnInit(): void {
    this.subs = this.servicioService.valor$.subscribe(valor => this.valor = valor);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  incrementar(): void {
    this.servicioService.incrementar();
  }

  decrementar(): void {
    this.servicioService.decrementar();
  }
}
