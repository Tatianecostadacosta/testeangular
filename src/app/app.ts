import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // 👈 IMPORTANTE
import { filter } from 'rxjs/operators';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,       // 👈 resolve o erro do *ngIf
    RouterOutlet,       // 👈 permite o <router-outlet>
    MenuLateralComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  mostrarTitulo = true;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.mostrarTitulo = event.url === '/dashboard';
      });
  }
}
