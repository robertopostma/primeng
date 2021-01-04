import { Component, OnInit } from '@angular/core';
import { IBudgetRegel } from '../interfaces/IBudgetregel';
import { CarService } from '../services/carservice';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
  providers:[CarService]
})
export class BudgetComponent implements OnInit {
  totalen: Array<IBudgetRegel> = [];
  inkomsten: Array<IBudgetRegel> = [];
  uitgaven: Array<IBudgetRegel> = [];


  frozenCols: any = [];
  scrollableCols: any = [];
  allCols: any = [];


  constructor(private carService: CarService) { }

  ngOnInit() {


    this.frozenCols = [{ 'header': 'Categorie', 'field': 'categorienaam' }];
    this.scrollableCols = [
      { 'header': 'Jan', 'field': 'January' },
      { 'header': 'Feb', 'field': 'February' },
      { 'header': 'Mrt', 'field': 'March' },
      { 'header': 'Apr', 'field': 'April' },
      { 'header': 'Mei', 'field': 'May' },
      { 'header': 'Jun', 'field': 'June' },
      { 'header': 'Jul', 'field': 'July' },
      { 'header': 'Aug', 'field': 'August' },
      { 'header': 'Sep', 'field': 'September' },
      { 'header': 'Okt', 'field': 'October' },
      { 'header': 'Nov', 'field': 'November' },
      { 'header': 'Dec', 'field': 'December' },
    ];

    //samenvoeging frozen en scrollable columns
    this.allCols = this.frozenCols.concat(this.scrollableCols);

    //ophalen van de data in aparte method
    this.refreshOverview();

  }

  refreshOverview() {
    this.carService.getBudgetTotalen()
      .subscribe(
        a => {
          a.forEach(a => {
            this.totalen.push(
              {
                January: a.January,
                February: a.February,
                March: a.March,
                April: a.April,
                May: a.May,
                June: a.June,
                July: a.July,
                August: a.August,
                September: a.September,
                October: a.October,
                November: a.November,
                December: a.December,
                BudgetYear: '-1',
                Display: '',
                Total: -1,
                categorienaam: a.categorienaam,
                categorienummer: -1,
                isinkomsten: a.isinkomsten
              }

            );
          });
        }

      ); 

      this.carService.getBudgetInkomsten()
      .subscribe(
        a => {
          a.forEach(a => {
            this.inkomsten.push(
              {
                January: a.January,
                February: a.February,
                March: a.March,
                April: a.April,
                May: a.May,
                June: a.June,
                July: a.July,
                August: a.August,
                September: a.September,
                October: a.October,
                November: a.November,
                December: a.December,
                BudgetYear: '-1',
                Display: '',
                Total: -1,
                categorienaam: a.categorienaam,
                categorienummer: -1,
                isinkomsten: a.isinkomsten
              }

            );
          });
        }

      ); 

      this.carService.getBudgetUitgaven()
      .subscribe(
        a => {
          a.forEach(a => {
            this.uitgaven.push(
              {
                January: a.January,
                February: a.February,
                March: a.March,
                April: a.April,
                May: a.May,
                June: a.June,
                July: a.July,
                August: a.August,
                September: a.September,
                October: a.October,
                November: a.November,
                December: a.December,
                BudgetYear: '-1',
                Display: '',
                Total: -1,
                categorienaam: a.categorienaam,
                categorienummer: -1,
                isinkomsten: a.isinkomsten
              }

            );
          });
        }

      ); 
  }
}
