import { FormComponent } from './components/form/form.component';
import { TesteServiceComponent } from './components/teste-service/teste-service.component';
import { InteracaoComponenteComponent } from './components/interacao-componente/interacao-componente.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { NgifNgforNgswitchComponent } from './components/ngif-ngfor-ngswitch/ngif-ngfor-ngswitch.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'ng',
    component: NgifNgforNgswitchComponent
  },
  {
    path: 'event-binding',
    component: EventBindingComponent
  },
  {
    path: 'two-way-binding',
    component: TwoWayBindingComponent
  },
  {
    path: 'pipes',
    component: PipesComponent
  },
  {
    path: 'inter-comp',
    component: InteracaoComponenteComponent
  },
  {
    path: 'service',
    component: TesteServiceComponent
  },
  {
    path: 'form',
    component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
