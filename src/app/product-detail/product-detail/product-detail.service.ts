import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class ProductDetailService {
    baseUrl = environment.baseUrl;

    constructor(private http: HttpClient) {}

    getProduct(id: string): Observable<object[]> {
        return this.http.get<object[]>(this.baseUrl + `/reviews/${id}`);
    }
}