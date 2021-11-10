import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { LiensComponent } from './liens/liens.component';
import {ProduitState} from '../shared/states/produit-state';
import { AdresseState } from 'src/shared/states/adresse-state';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  {
    path: 'produits',
    loadChildren: () =>
      import('./produits/produits.module').then((m) => m.ProduitsModule),
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LiensComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgxsModule.forRoot([ProduitState]),
    NgxsModule.forRoot([AdresseState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
