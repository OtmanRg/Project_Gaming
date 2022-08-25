import {Component, OnInit} from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

import {CartService} from '../../../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products!: Food;
  config: any;
  searchField!: string;

  constructor(private cartService: CartService, private foodService : FoodService) {
    this.config = {
      itemsPerPage: 6,
      currentPage: 1
    };
  }

  ngOnInit(): void {
    this.getProducts();
  }

  pageChanged(event: any) {
    this.config.currentPage = event;
  }

  getProducts() {
    this.foodService.getAll()
  }
}
