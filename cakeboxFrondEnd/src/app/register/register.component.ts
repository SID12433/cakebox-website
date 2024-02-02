import { Component } from '@angular/core';
import { CakeboxService } from '../services/cakebox.service';
import{Router} from '@angular/router'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private service:CakeboxService,private route:Router){
  }

  regForm=new FormGroup({
    username:new FormControl("",Validators.required),
    email:new FormControl("",Validators.required),
    address:new FormControl("",Validators.required),
    phone:new FormControl("",Validators.required),
    password:new FormControl("",Validators.required),
  })

  register(){
    if(this.regForm.valid){
      let data=this.regForm.value
      // console.log(data) 
      this.service.signUp(data).subscribe(data=>{
        this.route.navigateByUrl("login")
      })
      
    }
  }

}
