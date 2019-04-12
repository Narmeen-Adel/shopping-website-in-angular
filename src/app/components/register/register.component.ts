import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators  } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  users:any[]=[ ];
  constructor(private router:Router) { }

  loginForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(5),Validators.pattern('^[a-zA-Z]+$')]),
    email: new FormControl('',[Validators.required,Validators.email,]),
    password: new FormControl('',[Validators.required,Validators.minLength(8)]),

  });

  ngOnInit() {
    this.users=localStorage.getItem('users')? JSON.parse(localStorage.getItem('users')):[];
     
  }
  
  onSubmit(form){

    if(this.loginForm.valid){
      
      let user ={name :this.loginForm.value.name,
                   password :this.loginForm.value.password,
                   email :this.loginForm.value.email};
      let i= this.users.findIndex(i=>i['email'] ===this.loginForm.value.email)
            console.log(i,"kkkkk");  
            if(i!==-1) {
              return alert("this email is found ");
            } else{ 
            this.users.push(user);
            localStorage.setItem('users',JSON.stringify(this.users));
            this.navigateTo("/home");
            }
       }
  }
  navigateTo(path:string){
    this.router.navigate([path])
  }

  }


