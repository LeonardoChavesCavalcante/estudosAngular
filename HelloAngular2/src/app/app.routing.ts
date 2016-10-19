import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { MeuCabecalhoComponent } from "./meu-cabecalho/meu-cabecalho.component";

const routes: Routes = [
  {path: '', component:MeuCabecalhoComponent}

];
export const routing = RouterModule.forRoot(routes);


