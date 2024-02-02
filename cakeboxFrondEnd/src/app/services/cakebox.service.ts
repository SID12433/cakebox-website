import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CakeboxService {

  constructor(private http:HttpClient) { }


  signUp(data:any){
    return this.http.post("http://127.0.0.1:8000/api/register/",data)
  }

  getToken(data:any){
    return this.http.post("http://127.0.0.1:8000/api/token/",data)
  }

  getAllCakes(){
    if("token" in localStorage){
      let token:any=localStorage.getItem("token")
      let headers=new HttpHeaders({
          "Authorization": token,
          "Content-Type": "application/json"
      })
      return this.http.get("http://127.0.0.1:8000/api/cakes/",{headers})
    }
    else{
      return new Observable()
    }
  }

  getCakeDetail(id:number){
    if("token" in localStorage){
      let token:any=localStorage.getItem("token")
      let headers=new HttpHeaders({
          "Authorization": token,
          "Content-Type": "application/json"
      })
      return this.http.get(`http://127.0.0.1:8000/api/cakes/${id}/`,{headers})
    }
    else{
      return new Observable()
    }
  }



  addtoCart(id:number){
    if("token" in localStorage){
      let token:any=localStorage.getItem("token")
      let headers=new HttpHeaders({
          "Authorization": token,
          "Content-Type": "application/json"
      })
      return this.http.post(`http://127.0.0.1:8000/api/cakes/${id}/cart_add/`,{headers})
    }
    else{
      return new Observable()
    }
  }

  getCart(){
    if("token" in localStorage){
      let token:any=localStorage.getItem("token")
      let headers=new HttpHeaders({
          "Authorization": token,
          "Content-Type": "application/json"
      })
      return this.http.get("http://127.0.0.1:8000/api/carts/",{headers})
    }
    else{
      return new Observable()
    }
  }


}
