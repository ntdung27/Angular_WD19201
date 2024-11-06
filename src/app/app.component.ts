import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './product.service';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  products:any= [];
  constructor(private http: HttpClient){}
  ngOnInit(){
    this.http.get('http://localhost:3000/products').subscribe((data) => {
      this.products = data;
    })
  }
  removeItem(id:any){
    if(confirm('Are you sure?')){
      this.http.delete('http://localhost:3000/products/'+id).subscribe((data) => {
        this.products = this.products.filter((item:any) => item.id != id)
      })
    }
  }


  // constructor(private productService: ProductService){}
  // ngOnInit(){
  //   this.productService.getProducts().subscribe((data)=>{
  //     console.log(data);
  //   })
  // }
}

/*
  Xoá
  B1: tạo button xoá
  B2: bắt sự kiện click cho button xoá
  B3: khi bắt sự kiện click sẽ gọi ra hàm để thực hiện chức năng
  B4: call api và xoá
  B5: refresh data
*/ 
