import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "any"
})
export class ServicioService {
  private valor = 0;
  private valorSubject: BehaviorSubject<number> = new BehaviorSubject(this.valor);

  get valor$(): Observable<number> {
    return this.valorSubject.asObservable();
  }

  incrementar(): void {
    this.valor++;
    this.valorSubject.next(this.valor);
  }

  decrementar(): void {
    this.valor--;
    this.valorSubject.next(this.valor);
  }
}
