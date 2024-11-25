import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
form:any;
  constructor(private http:HttpClient, private router:Router){}
  ngOnInit(){
    this.form= new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
    // console.log(this.form);
  }

  onSubmit(){
    this.http.post(`http://localhost:3000/signin`,this.form.value).subscribe((data) => {
      localStorage.setItem('user', JSON.stringify(data));
      
      alert("Đăng nhập thành công");
      this.router.navigate(['/admin/products'])
    })
  }
}

// Angular Router Guard