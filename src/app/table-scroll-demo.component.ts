import { Component, OnInit } from '@angular/core';
import { Car } from './domain/car';
import { CarService } from './services/carservice';

@Component({
    selector: 'table-scroll-demo',
    templateUrl: './table-scroll-demo.component.html',
    styles: ['.bgYellow { background-color:yellow}'],
    providers: [CarService]
})
export class TableScrollDemo implements OnInit {

    cars: Car[];//without problem
    carsSmall: Car[];// problem
    frozenCols: any[];
    scrollableCols: any[];




    constructor(private carService: CarService) { }

    ngOnInit() {

        //without problem...
        this.carService.getCars().subscribe(cars => this.cars = cars);
        this.carService.getCarsSmall().subscribe(cars => this.carsSmall = cars);

        this.scrollableCols = [
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];

        this.frozenCols = [
            { field: 'vin', header: 'Vin' },
        ];



    }


}
