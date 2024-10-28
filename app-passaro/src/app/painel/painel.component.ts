import { Component, EventEmitter, Output, OnDestroy } from '@angular/core';
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
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase: Frase = this.frases[0]
 
  public progresso: number = 0

  public tentativas: number = 3

 @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor(){
    this.atualizaRodada()
   
  }
  
  ngOnInit() {
    
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
 
  }

  public verificarResposta(): void {
    if (this.rodadaFrase.frasePtBr.trim().toLowerCase() === this.resposta.trim().toLowerCase()) {
      this.rodada++;
      this.progresso = this.progresso + (100 / this.frases.length);
      if (this.rodada === 4) {
       this.encerrarJogo.emit('Vitoria')
      } 
      this.atualizaRodada()
    } else {
      this.tentativas--
      this.resposta = ''
      if(this.tentativas === -1){
        this.encerrarJogo.emit('Derrota')
      }
    }
  }
  
  public atualizaRodada() : void {
    this.rodadaFrase = this.frases[this.rodada]
     this.resposta = ''
  }

}
