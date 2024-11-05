import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private productService: ProductService){}
  ngOnInit(){
    this.productService.getProducts().subscribe((data)=>{
      console.log(data);
      
    })
  }
}
