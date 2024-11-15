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
  
}

/*
  Xoá
  B1: tạo button xoá
  B2: bắt sự kiện click cho button xoá
  B3: khi bắt sự kiện click sẽ gọi ra hàm để thực hiện chức năng
  B4: call api và xoá
  B5: refresh data
*/ 
