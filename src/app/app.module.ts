import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientesModule } from './clientes/clientes.module';
import { OrdenesModule } from'./ordenes/ordenes.module';


import { MenuComponent } from './menu/menu.component';
import { CurrentOptionComponent } from'./current-option/current-option.component';
import { IndexComponent } from'./clientes/index/index.component';
import { AddComponent as OrderAddComponent} from'./ordenes/add/add.component';

import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from'@angular/platform-browser/animations';

import {
  
  
  MdAutocompleteModule,
  
  
  MdButtonModule,
  
  
  MdButtonToggleModule,
  
  
  MdCardModule,
  
  
  MdCheckboxModule,
  
  
  MdChipsModule,
  
  
  MdCoreModule,
  
  
  MdDatepickerModule,
  
  
  MdDialogModule,
  
  
  MdExpansionModule,
  
  
  MdGridListModule,
  
  
  MdIconModule,
  
  
  MdInputModule,
  
  
  MdListModule,
  
  
  MdMenuModule,
  
  
  MdNativeDateModule,
  
  
  MdPaginatorModule,
  
  
  MdProgressBarModule,
  
  
  MdProgressSpinnerModule,
  
  
  MdRadioModule,
  
  
  MdRippleModule,
  
  
  MdSelectModule,
  
  
  MdSidenavModule,
  
  
  MdSliderModule,
  
  
  MdSlideToggleModule,
  
  
  MdSnackBarModule,
  
  
  MdSortModule,
  
  
  MdTableModule,
  
  
  MdTabsModule,
  
  
  MdToolbarModule,
  
  
  MdTooltipModule,
  
  } from '@angular/material';

const appRoutes:Routes =[
  { path: "clientes/index", component:IndexComponent},
  { path: "ordenes/add", component:OrderAddComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CurrentOptionComponent,
    
  ],
  imports: [
    BrowserModule,
    ClientesModule,
    OrdenesModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,    
    MdToolbarModule,
    MdTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
