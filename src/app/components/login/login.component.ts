import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,Validators} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 users:{}[]
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email,]),
    password: new FormControl('',[Validators.required,Validators.minLength(8)]),
  });


  constructor(private router:Router) { }

  onSubmit(){
    if(this.loginForm.valid){
       let  i=this.users.findIndex(i=>i['email'] === this.loginForm.value.email);
       if(i!==-1){
         console.log(this.users[i]["password"]);
         if(this.users[i]["password"] ===this.loginForm.value.password){
           localStorage.setItem("current_user ",this.users[i][name]);
            return this.navigateTo("/home");
         }else{
           return alert("password is wrong ");
         }
       } else{
        return alert("that email not found ");

       }
       
    }
  }
  navigateTo(path:string){
      this.router.navigate([path]);
  }


  ngOnInit() {
    this.users=localStorage.getItem('users')?JSON.parse(localStorage.getItem('users')):[];
  }

}
