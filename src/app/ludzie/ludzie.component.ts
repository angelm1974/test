import { MOILUDZIE } from '../makieta-ludzie';
import { Component, OnInit } from '@angular/core';
// import { Czlowiek } from '../czlowiek';

@Component({
  selector: 'app-ludzie',
  templateUrl: './ludzie.component.html',
  styleUrls: ['./ludzie.component.css']
})
export class LudzieComponent implements OnInit {

  moiludzie = MOILUDZIE;
  czas = new Date();
  constructor() { }

  ngOnInit(): void {
  }


}
