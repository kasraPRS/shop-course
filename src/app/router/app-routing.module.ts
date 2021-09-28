import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AllRoutes } from './routes';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(
    private router: Router
  ) {
    router.resetConfig(AllRoutes.routes);
  }
}
