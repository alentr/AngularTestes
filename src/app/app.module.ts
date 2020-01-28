import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { PanelModule } from 'primeng/panel';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import {CalendarModule } from 'primeng/calendar';
import {InputMaskModule} from 'primeng/inputmask';
import {RatingModule} from 'primeng/rating';

import { NgifNgforNgswitchComponent } from './components/ngif-ngfor-ngswitch/ngif-ngfor-ngswitch.component';
import { TesteServiceComponent } from './components/teste-service/teste-service.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { InteracaoComponenteComponent } from './components/interacao-componente/interacao-componente.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { FuncionarioService } from './services/funcionario.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { ComponentFilhoComponent } from './components/component-filho/component-filho.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    InteracaoComponenteComponent,
    PipesComponent,
    TesteServiceComponent,
    NgifNgforNgswitchComponent,
    MenuComponent,
    HomeComponent,
    ComponentFilhoComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MenubarModule,
    ButtonModule,
    InputTextModule,
    ToastModule,
    PanelModule,
    MessageModule,
    MessagesModule,
    InputTextareaModule,
    DropdownModule,
    ReactiveFormsModule,
    CalendarModule,
    InputMaskModule,
    RatingModule
  ],
  providers: [FuncionarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
