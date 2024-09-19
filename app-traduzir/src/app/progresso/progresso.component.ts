import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrl: './progresso.component.css'
})
export class ProgressoComponent implements OnInit {

  public progresso: number = 25
  constructor(){}

  ngOnInit(): void {
    
  }

}
