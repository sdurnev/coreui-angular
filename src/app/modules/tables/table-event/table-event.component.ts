import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-table-event',
  templateUrl: './table-event.component.html',
  styleUrls: ['./table-event.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TableEventComponent implements OnInit {

  source: any =
    {
      localData: this.generateData(),
      dataType: 'array',
      dataFields:
        [
          {name: 'firstname', type: 'string'},
          {name: 'lastname', type: 'string'},
          {name: 'productname', type: 'string'},
          {name: 'quantity', type: 'number'},
          {name: 'price', type: 'number'},
          {name: 'total', type: 'number'}
        ]
    };

  getWidth(): any {
    if (document.body.offsetWidth < 1200) {
      return '100%';
    }
    return 780;
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);
  columns: any[] =
    [
      {text: 'Name', dataField: 'firstname', width: 100},
      {text: 'Last Name', dataField: 'lastname', width: 100},
      {text: 'Product', editable: false, dataField: 'productname', width: 180},
      {text: 'Quantity', dataField: 'quantity', width: 80, cellsAlign: 'right', align: 'right'},
      {text: 'Unit Price', dataField: 'price', width: 90, cellsAlign: 'right', align: 'right', cellsFormat: 'c2'},
      {text: 'Total', dataField: 'total', cellsAlign: 'right', align: 'right', cellsFormat: 'c2'}
    ];

  generateData(): any[] {
    let data = [];
    let firstNames =
      [
        'Andrew', 'Nancy', 'Shelley', 'Regina', 'Yoshi', 'Antoni', 'Mayumi', 'Ian', 'Peter', 'Lars', 'Petra', 'Martin', 'Sven', 'Elio', 'Beate', 'Cheryl', 'Michael', 'Guylene'
      ];
    let lastNames =
      [
        'Fuller', 'Davolio', 'Burke', 'Murphy', 'Nagase', 'Saavedra', 'Ohno', 'Devling', 'Wilson', 'Peterson', 'Winkler', 'Bein', 'Petersen', 'Rossi', 'Vileid', 'Saylor', 'Bjorn', 'Nodier'
      ];
    let productNames =
      [
        'Black Tea', 'Green Tea', 'Caffe Espresso', 'Doubleshot Espresso', 'Caffe Latte', 'White Chocolate Mocha', 'Cramel Latte', 'Caffe Americano', 'Cappuccino', 'Espresso Truffle', 'Espresso con Panna', 'Peppermint Mocha Twist'
      ];
    let priceValues =
      [
        '2.25', '1.5', '3.0', '3.3', '4.5', '3.6', '3.8', '2.5', '5.0', '1.75', '3.25', '4.0'
      ];
    for (let i = 0; i < 200; i++) {
      let row = {};
      let productindex = Math.floor(Math.random() * productNames.length);
      let price = parseFloat(priceValues[productindex]);
      let quantity = 1 + Math.round(Math.random() * 10);
      // @ts-ignore
      row['firstname'] = firstNames[Math.floor(Math.random() * firstNames.length)];
      // @ts-ignore
      row['lastname'] = lastNames[Math.floor(Math.random() * lastNames.length)];
      // @ts-ignore
      row['productname'] = productNames[productindex];
      // @ts-ignore
      row['price'] = price;
      // @ts-ignore
      row['quantity'] = quantity;
      // @ts-ignore
      row['total'] = price * quantity;
      data[i] = row;
    }
    return data;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

  }

}