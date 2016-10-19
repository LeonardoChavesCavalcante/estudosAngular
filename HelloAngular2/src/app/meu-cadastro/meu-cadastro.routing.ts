import { RouterModule } from '@angular/router';
import { MeuCadastroComponent } from './meu-cadastro.component';
import { MeuCadastroDetalheComponent } from './meu-cadastro-detalhe/meu-cadastro-detalhe.component';

export const routing = RouterModule.forChild([
  {path: 'cadastro', component: MeuCadastroComponent},
  {path: 'detalhe', component:MeuCadastroDetalheComponent}
]);

