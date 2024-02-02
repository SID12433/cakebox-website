import { Component, OnInit } from '@angular/core';
import { CakeboxService } from '../services/cakebox.service';

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css']
})
export class CartlistComponent implements OnInit{

  carts:any
  constructor(private service:CakeboxService){}

  ngOnInit(): void {
      this.service.getCart().subscribe(data=>this.carts=data)
  }

}
