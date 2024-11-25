import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
form:any;
  constructor(private http:HttpClient, private router:Router){}
  ngOnInit(){
    this.form= new FormGroup({
      username: new FormControl('',[Validators.required,Validators.minLength(3)]),
      email: new FormControl(''),
      password: new FormControl('')
    });
    console.log(this.form);
  }

  onSubmit(){
    this.http.post(`http://localhost:3000/signup`,this.form.value).subscribe(() => {
      alert("Đăng ký thành công. Vui lòng đăng nhập");
      this.router.navigate(['/signin'])
    })
  }
}
