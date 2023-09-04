import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  @Input()
  gameCover:string =""
  @Input()
  gameLabel:string=''
  @Input()
  gameType:string="Digital PS4 PS5"   
  @Input()
  gamePrice:string="R$ 199,99"

  constructor(){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}