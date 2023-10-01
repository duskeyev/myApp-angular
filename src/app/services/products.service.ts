import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable, delay, catchError, throwError} from "rxjs";
import { Iproduct } from "../components/models/Iproduct";
import {ErrorService} from "./error.service";

@Injectable({providedIn: 'root'})
export class ProductService   {
    constructor(
      private httpClient: HttpClient,
      private errorService:ErrorService) {

     }

    getAll():Observable<Iproduct[]>{
        return this.httpClient.get<Iproduct[]>('https://fakestoresapi.com/products',{
            params: new HttpParams().append('limit',9)
        }).pipe(
          delay(100),
          catchError(this.errorHandler.bind(this))


        )
    }

    errorHandler(error:HttpErrorResponse){
      this.errorService.handle(error.message)
      return throwError(()=>error.message)
    }
}
