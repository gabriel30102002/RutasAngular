// src/app/app.routes.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExternalRedirectComponent } from './external-redirect/external-redirect.component';

const routes: Routes = [
  { path: 'external', component: ExternalRedirectComponent },
  { path: '**', redirectTo: '/external', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export { routes }; // Exporta `routes` para que pueda ser importado en otros archivos
