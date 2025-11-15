import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // 👈 IMPORTANTE

@Component({
  selector: 'app-menu-lateral',
  standalone: true,
  imports: [RouterModule], // 👈 adiciona o RouterModule aqui
  templateUrl: './menu-lateral.html',
  styleUrls: ['./menu-lateral.css']
})
export class MenuLateralComponent {
  mostrarTitulo = true;
}
