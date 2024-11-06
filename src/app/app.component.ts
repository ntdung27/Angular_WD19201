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

  // for(let product of products){
  //   console.log(product);
    
  // }
  // constructor(private productService: ProductService){}
  // ngOnInit(){
  //   this.productService.getProducts().subscribe((data)=>{
  //     console.log(data);
  //   })
  // }
}
