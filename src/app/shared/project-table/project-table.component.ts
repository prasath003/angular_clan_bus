import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

export interface TableElement {
  userName: string;
  mobileNo: string;
  bookId: any;
  bookName: any;
  id: number;
}

@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.scss']
})


export class ProjectTableComponent implements OnInit {
  displayedColumns: string[] = ['position_1', 'position_2', 'position_3', 'position_4', 'position_5', 'position_6', 'position_7' , 'position_8' ];
  displayColumnsTitle: any;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  dataSource: any;
  @Input() tabledata: any;
  @Input() titleData: any;

  constructor() {

  }

  ngOnInit() {
    console.log('tableData', this.tabledata);
    this.dataSource = new MatTableDataSource<TableElement>(this.tabledata);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  cancel(bookDetails) {
    console.log(bookDetails);
    // Make put call in books and put call in users for update
  }

}
