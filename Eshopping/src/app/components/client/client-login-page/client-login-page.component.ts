import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { EshoppingService } from '../../service/eshopping.service';

@Component({
  selector: 'app-client-login-page',
  templateUrl: './client-login-page.component.html',
  styleUrls: ['./client-login-page.component.scss']
})
export class ClientLoginPageComponent implements OnInit {

  email: string = "";
  password: string = "";

  constructor(
    private router: Router,
    private eservice:EshoppingService

  ) { }

  ngOnInit(): void {
  }
  signIn(): void {
    const pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!pattern.test(this.email)) {
      alert("Email is not valid.");
      return;
    }
    if (this.password === '') {
      alert("Password should not be blank");
      return;
    }
    const body = {
      "emailID": this.email,
      "password": this.password
    }
    console.log("=======>",body);
    this.eservice.clientSignIn(body).pipe(take(1)).subscribe((res :any) => {
      console.log("*****",res);
      if(res && res?.customerId){
       // alert("Login sucessful");
        this.eservice.storeClientAuthorization(res?.customerId);
        this.router.navigate(['/client/home']);

      }
    }, err =>{
      console.log("Error  ",err);
      alert("Something going wrong in login!!pl try again");
    })

  }
}
