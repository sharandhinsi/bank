import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bankscreen',
  templateUrl: './bankscreen.component.html',
  styleUrls: ['./bankscreen.component.css']
})
export class BankscreenComponent implements OnInit {
  list={}
  bank

  constructor(public http:HttpClient) { }
  ngOnInit() {
  }
  search(t)
  {
    this.http.get('https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI').subscribe(data=>{this.list=data})
  }
  search1(t)
  {
    this.http.get('https://vast-shore-74260.herokuapp.com/banks?city=DELHI').subscribe(data=>{this.list=data})
  }
  search2(t)
  {
    this.http.get('https://vast-shore-74260.herokuapp.com/banks?city=KOLKATA').subscribe(data=>{this.list=data})
  }
  search3(t)
  {
    this.http.get('https://vast-shore-74260.herokuapp.com/banks?city=BANGALORE').subscribe(data=>{this.list=data})
  }
  search4(t)
  {
    this.http.get('https://vast-shore-74260.herokuapp.com/banks?city=CUTTACK').subscribe(data=>{this.list=data})
  }

}
