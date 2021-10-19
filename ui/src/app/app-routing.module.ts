import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteExampleComponent } from './route-example/route-example.component';



const routes: Routes = [
{
  path: 'play',
  component: RouteExampleComponent,
  data: { technology: 'Play' }
},
{
  path: 'angular',
  component: RouteExampleComponent,
  data: { technology: 'Angular' }
},
{
  path: '**',
  redirectTo: '/play',
  pathMatch: 'full'
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
