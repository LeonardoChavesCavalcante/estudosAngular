import { RouterModule } from '@angular/router';
import { MeuCadastroComponent } from './meu-cadastro.component';

export const routing = RouterModule.forChild([
  {path: 'cadastro', component: MeuCadastroComponent}
]);

