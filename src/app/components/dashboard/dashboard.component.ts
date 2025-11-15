import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // Dados usados tanto nos cards quanto no gráfico
  dados = [
    { nome: 'Clientes', valor: 120 },
    { nome: 'Produtos', valor: 150 },
    { nome: 'Estoque', valor: 80 },
    { nome: 'Fornecedores', valor: 60 }
  ];

  constructor() {}

  ngOnInit(): void {
    this.criarGrafico();
  }

  criarGrafico() {
    const ctx = document.getElementById('meuGrafico') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: this.dados.map(d => d.nome),
        datasets: [{
          data: this.dados.map(d => d.valor),
          backgroundColor: ['#6a0dad', '#008000', '#800000', '#ffa500'], // Roxo, Verde, Marrom, Laranja
          borderColor: '#fff',
          borderWidth: 2
        }]
      },
      options: {
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: '#333',
              font: { size: 13 }
            }
          },
          title: {
            display: true,
            text: 'Gráfico de Cadastro Geral',
            font: { size: 14 }
          }
        }
      }
    });
  }
}
