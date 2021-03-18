import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-name-set',
  templateUrl: './class-name-set.component.html',
  styleUrls: ['./class-name-set.component.css']
})
export class ClassNameSetComponent implements OnInit {

  clsname = 'one';
  clsname2 = 'two';
  constructor() { }

  ngOnInit(): void {
  }

}
