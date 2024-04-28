import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from './components/main/main.component';
import { Home2Component } from './home2/home2.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SchemesFormComponent } from './components/schemes-form/schemes-form.component';
import { ChatComponent } from './components/chat/chat.component';
import { SchemeschatComponent } from './components/schemeschat/schemeschat.component';
import { SchemeaddComponent } from './components/schemeadd/schemeadd.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'main',
    component:MainComponent
  },

  {
    path:'',
    component:Home2Component
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'schemesform',
    component:SchemesFormComponent
  },
  {
    path:'chat',
    component:ChatComponent
  },{
    path:'schemeschat',
    component:SchemeschatComponent
  },
  {
    path:'schemeadd',
    component:SchemeaddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
