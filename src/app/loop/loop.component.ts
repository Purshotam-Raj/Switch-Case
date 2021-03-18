import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loop',
  templateUrl: './loop.component.html',
  styleUrls: ['./loop.component.css']
})
export class LoopComponent implements OnInit {

  constructor() { }
  num: number=0;
  users =[
    {userId:10, userName:'Purshotam Raj'},
    {userId:11, userName:'Sushant Sundi'},
    {userId:12, userName:'Vivek Singh'},
    {userId:13, userName:'Suman Bharti'},
    {userId:14, userName:'Mohit Kumar'},
    {userId:15, userName:'Vishwaranjan Kumar'}
  ];
  

  ngOnInit(): void {
  }

}
