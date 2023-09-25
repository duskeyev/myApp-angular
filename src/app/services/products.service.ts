import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, delay } from "rxjs";
import { Iproduct } from "../components/models/Iproduct";

@Injectable({providedIn: 'root'})
export class ProductService   {
    constructor(private httpClient: HttpClient) {

     }
   
    getAll():Observable<Iproduct[]>{
        return this.httpClient.get<Iproduct[]>('https://fakestoreapi.com/products',{
            params: new HttpParams().append('limit',9)
        })
    } 
}
