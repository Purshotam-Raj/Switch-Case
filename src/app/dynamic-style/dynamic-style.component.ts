import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-style',
  templateUrl: './dynamic-style.component.html',
  styleUrls: ['./dynamic-style.component.css']
})
export class DynamicStyleComponent implements OnInit {

  constructor() { }
  colorval = 'blue';
  bgcolor = '#ddd';

  ngOnInit(): void {
  }

}
