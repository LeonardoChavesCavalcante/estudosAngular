import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '',redirectTo:'cadastro', pathMatch: 'full'}
];
export const routing = RouterModule.forRoot(routes);


