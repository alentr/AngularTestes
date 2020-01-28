import { NgifNgforNgswitchComponent } from './components/ngif-ngfor-ngswitch/ngif-ngfor-ngswitch.component';
import { TesteServiceComponent } from './components/teste-service/teste-service.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { InteracaoComponenteComponent } from './components/interacao-componente/interacao-componente.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { FuncionarioService } from './services/funcionario.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MenubarModule} from 'primeng/menubar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    InteracaoComponenteComponent,
    PipesComponent,
    TesteServiceComponent,
    NgifNgforNgswitchComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MenubarModule
  ],
  providers: [FuncionarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
