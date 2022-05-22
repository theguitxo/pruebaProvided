import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared.module";
import { SegundoComponent } from "./segundo.component";

const routes: Routes = [
  {
    path: '',
    component: SegundoComponent,
  }
];

@NgModule({
  declarations: [
    SegundoComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    SegundoComponent,
  ],
})
export class SegundoModule {}
