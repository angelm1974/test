import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ludzie',
  templateUrl: './ludzie.component.html',
  styleUrls: ['./ludzie.component.css']
})
export class LudzieComponent implements OnInit {

  czlowiek = "Antoni M.";
  constructor() { }

  ngOnInit(): void {
  }


}
