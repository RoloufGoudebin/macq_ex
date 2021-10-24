import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component"
import { SigninComponent } from './login/signin/signin.component';
import { IsSignedInGuard } from './is-signed-in.guard';
import { SignUpComponent } from './login/sign-up/sign-up.component';



const routes: Routes = [
{
  path: '',
  component: HomeComponent,
  canActivate: [
    IsSignedInGuard
  ],
  pathMatch: 'full'
},
{
  path: 'login',
  component: SigninComponent,
},
{
  path: 'signup',
  component: SignUpComponent,
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
