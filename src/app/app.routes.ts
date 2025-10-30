import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard';
import { ClientesComponent } from './components/clientes/clientes';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
