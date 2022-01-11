import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as data from './student-data.json';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements AfterViewInit {
  studentData: any = (data as any).default;
  dataSource = new MatTableDataSource(this.studentData);
  displayedColumns: string[] = Object.keys(this.studentData.length ? this.studentData[0] : '')
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}