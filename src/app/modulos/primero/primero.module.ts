import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared.module";
import { PrimeroComponent } from "./primero.component";

const routes: Routes = [
  {
    path: '',
    component: PrimeroComponent,
  }
];

@NgModule({
  declarations: [
    PrimeroComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    PrimeroComponent,
  ]
})
export class PrimeroModule {}
