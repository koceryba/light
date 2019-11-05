import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/_models/product';

@Component({
  selector: 'light-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() public product: Product;

  constructor() { }

  ngOnInit() {
  }

}
