import { Component, OnInit } from '@angular/core';
import { ProductDetailService } from './product-detail.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'light-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: object[];
  id: string;

  constructor(
    private productDetailService: ProductDetailService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.productDetailService.getProduct(this.id)
    .subscribe(productDetail => {
      this.product = productDetail;
      console.log(this.product);
    });
  }

}
