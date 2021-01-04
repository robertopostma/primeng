import { map } from "rxjs/operators"; 

import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Car } from '../domain/car';
import { IBudgetRegel } from "../interfaces/IBudgetregel";

@Injectable()
export class CarService {
    
    constructor(private http: HttpClient) {}
    
    getCars() {
        return this.http
          .get<{data: Car[];}>('assets/data/cars-small.json')
          .pipe(map(res => <Car[]> res.data));
    }

    getBudgetTotalen(){
        return this.http
        .get<{data: IBudgetRegel[]}>('assets/data/totalen.json')
        .pipe(map(res => <IBudgetRegel[]> res.data));

    }


    getBudgetInkomsten(){
        return this.http
        .get<{data: IBudgetRegel[]}>('assets/data/inkomsten.json')
        .pipe(map(res => <IBudgetRegel[]> res.data));

    }


    getBudgetUitgaven(){
        return this.http
        .get<{data: IBudgetRegel[]}>('assets/data/uitgaven.json')
        .pipe(map(res => <IBudgetRegel[]> res.data));

    }
}
