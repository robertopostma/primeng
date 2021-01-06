import {Component, OnInit} from '@angular/core';
import { Car } from './domain/car';
import { CarService} from './services/carservice';

@Component({
  selector:    'table-scroll-demo',
  templateUrl: './table-scroll-demo.component.html',
  providers:   [CarService]
})
export class TableScrollDemo implements OnInit {

    cars: Car[];

    frozenCols: any[];

    scrollableCols: any[];

    constructor(private carService: CarService) { }

    ngOnInit() {
        this.carService.getCars().subscribe(cars => this.cars = cars);

        this.scrollableCols = [
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'brand', header: 'Brand' },
            { field: 'brand', header: 'Brand' },
            { field: 'brand', header: 'Brand' },
            { field: 'brand', header: 'Brand' },
            { field: 'brand', header: 'Brand' },
            { field: 'brand', header: 'Brand' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];

        this.frozenCols = [
            { field: 'vin', header: 'Vin' },
        ];
    }
}
