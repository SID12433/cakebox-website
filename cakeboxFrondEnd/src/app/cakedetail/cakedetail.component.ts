import { Component, OnInit } from '@angular/core';
import { CakeboxService } from '../services/cakebox.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cakedetail',
  templateUrl: './cakedetail.component.html',
  styleUrls: ['./cakedetail.component.css']
})
export class CakedetailComponent implements OnInit{
  cakeid:any
  cake:any
  constructor(private service:CakeboxService,private route:ActivatedRoute,private router:Router){

  }

  ngOnInit(): void {
      this.cakeid=this.route.snapshot.params["id"]
      this.service.getCakeDetail(this.cakeid).subscribe(data=>this.cake=data)
  }

  addtocart(id:number){
    console.log("add to cart works");
    console.log(id);
    this.service.addtoCart(id).subscribe(data=>this.router.navigateByUrl("/cakelist"))
    
  }







}
