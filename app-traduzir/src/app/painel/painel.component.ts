import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrl: './painel.component.css'
})

export class PainelComponent {

  public frases: Frase[] = FRASES
  public instrucao = 'Traduza a frase'
  public resposta!: string; 

  public rodada: number = 0
  public rodadaFrase: Frase
 
  public progresso: number = 0

  constructor(){
    this.rodadaFrase = this.frases[this.rodada]
    console.log(this.rodadaFrase)
  }
  
  ngOnInit() {
    
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
    console.log(this.resposta)
  }

  public verificarResposta(): void {
    if (this.rodadaFrase.frasePtBr.trim().toLowerCase() === this.resposta.trim().toLowerCase()) {
      alert('Está certo');
      console.log(this.rodadaFrase.frasePtBr);
      this.rodada++;
      this.progresso += (100 / this.frases.length);
      
      // Verifica se a rodada não é maior que o comprimento da frase
      if (this.rodada < this.frases.length) {
        this.rodadaFrase = this.frases[this.rodada];
        console.log(this.rodadaFrase);
      } else {
        alert('Você completou o jogo!');
        // Aqui você pode reiniciar a rodada ou fazer outra ação, se necessário.
      }
    } else {
      alert('Está errado');
      console.log(this.rodadaFrase);
    }
  }
  

}
