import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ importa aqui

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [FormsModule], // ✅ adiciona aqui
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.css']
})
export class ClientesComponent {
  nome: string = '';
  endereco: string = '';
  numero: string = '';
  bairro: string = '';
  cidade: string = '';
  cep: string = '';
  cpf: string = '';
  identidade: string = '';
  telefone: string = '';
  email: string = '';
  estadoCivil: string = '';

  // ✅ lista de clientes
  clientes: any[] = [];

  cadastrar() {
    const novoCliente = {
      nome: this.nome,
      endereco: this.endereco,
      numero: this.numero,
      bairro: this.bairro,
      cidade: this.cidade,
      cep: this.cep,
      cpf: this.cpf,
      identidade: this.identidade,
      telefone: this.telefone,
      email: this.email,
      estadoCivil: this.estadoCivil
    };

    // adiciona à lista
    this.clientes.push(novoCliente);

    console.log('Cliente cadastrado:', novoCliente);

    // limpa o formulário
    this.nome = '';
    this.endereco = '';
    this.numero = '';
    this.bairro = '';
    this.cidade = '';
    this.cep = '';
    this.cpf = '';
    this.identidade = '';
    this.telefone = '';
    this.email = '';
    this.estadoCivil = '';
  }
}
