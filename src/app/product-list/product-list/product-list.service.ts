import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class ProductListService {
    baseUrl = environment.baseUrl;

    constructor(private http: HttpClient) {}

    getProducts(): Observable<object[]> {
        return this.http.get<object[]>(this.baseUrl + `/products/`);
    }
}