import { Component, OnInit } from '@angular/core';
import { Iproduct } from './components/models/Iproduct';
import { ProductService } from './services/products.service';
import { Observable, tap } from 'rxjs';
import { Call } from '@angular/compiler';
import {ErrorService} from "./services/error.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor (
    private productService:ProductService,

){

  }

  loading = false
  title = 'app-store'
  products$: Observable<Iproduct[]>

  ngOnInit(): void {
    this.loading = true
    this.products$ = this.productService.getAll().pipe(
      tap(()=>{
        this.loading=false
      }),

    )
    }

  }

