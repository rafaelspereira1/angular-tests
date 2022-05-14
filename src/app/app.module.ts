import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TestComponent } from './test/test.component';
import { Teste01Component } from './teste01/teste01.component';
import { CursosModule } from './cursos/cursos.module';

@NgModule({
  declarations: [AppComponent, TestComponent, Teste01Component],
  imports: [BrowserModule, AppRoutingModule, CursosModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
