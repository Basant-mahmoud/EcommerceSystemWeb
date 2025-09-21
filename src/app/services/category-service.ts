import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ICategory} from '../Modules/icategory';
import {API_URL} from '../constants/api_urls';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient ) {
  }
  getCategories():Observable<ICategory[]>{
    return this.http.get<ICategory[]>(API_URL.GetCategories);
  }
}
