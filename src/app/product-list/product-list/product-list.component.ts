import { Component, OnInit } from '@angular/core';
import { ProductListService } from './product-list.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'light-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
    products: object[];

    constructor(private productListService: ProductListService) { }

    ngOnInit() {
        this.productListService.getProducts()
        .subscribe(products => {
            this.products = products;
        });
    }

}
