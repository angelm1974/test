import { Component, OnInit } from '@angular/core';
import { Czlowiek } from '../czlowiek';

@Component({
  selector: 'app-ludzie',
  templateUrl: './ludzie.component.html',
  styleUrls: ['./ludzie.component.css']
})
export class LudzieComponent implements OnInit {

  czlowiek: Czlowiek = {
    id: 1,
    nazwisko: 'Maciarewicz Antoni',
    data_ur: new Date('1948-08-03'),
    opis: 'Działacz opozycji demokratycznej w Polskiej Rzeczypospolitej Ludowej w latach 1968–1989, współzałożyciel Komitetu Obrony Robotników i Komitetu Samoobrony Społecznej „KOR”. Poseł na Sejm RP I, III, IV, VI, VII, VIII i IX kadencji (1991–1993, 1997–2005, od 2007). W latach 1991–1992 minister spraw wewnętrznych, w 2006 i w 2007 podsekretarz stanu w Ministerstwie Obrony Narodowej, w latach 2006–2007 szef Służby Kontrwywiadu ',
    zdjecie: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Informal_meeting_of_defence_ministers_%28FAC%29._Arrivals_Antoni_Macierewicz_%28cropped%29.png/640px-Informal_meeting_of_defence_ministers_%28FAC%29._Arrivals_Antoni_Macierewicz_%28cropped%29.png'
  };
  czas = new Date();
  constructor() { }

  ngOnInit(): void {
  }


}
