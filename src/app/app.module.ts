import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio.component';

const routes: Routes = [
  {
    path: 'primero',
    loadChildren: () => import('./modulos/primero/primero.module').then(m => m.PrimeroModule)
  },
  {
    path: 'segundo',
    loadChildren: () => import('./modulos/segundo/segundo.module').then(m => m.SegundoModule)
  },
  {
    path: '',
    component: InicioComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
