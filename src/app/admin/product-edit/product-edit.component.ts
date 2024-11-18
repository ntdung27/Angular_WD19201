import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent {
form:any;
  constructor(private http:HttpClient, private router:Router, private activeRoute:ActivatedRoute){}
  ngOnInit(){
    this.form= new FormGroup({
      name: new FormControl(''),
      price: new FormControl(0),
      description: new FormControl('')
    });

    // const id = this.activeRoute.snapshot.params['id']
    const {id} = this.activeRoute.snapshot.params
    this.http.get(`http://localhost:3000/products/${id}`).subscribe((data) => {
      this.form.patchValue(data)
    })
    
    
  }

  onSubmit(){
    // console.log(this.form.value);
    const {id} = this.activeRoute.snapshot.params
    this.http.put(`http://localhost:3000/products/${id}`, this.form.value).subscribe()
    
    console.log("Ban da cap nhat thanh cong");
    
  }
}

/*
  B1: Tạo formGroup
  B2: Tạo formControl
  B3: Binding formControl và formGroup với formControlName và formGroup
  B4: lấy id trên url
  B5: call api lấy ra sản phẩm dựa vào id lấy được trên đường dẫn
  B6: hiển thị dữ liệu lấy được lên form
  B7: khi submit form thì lấy dữ liệu từ form và gửi lên server
*/ 