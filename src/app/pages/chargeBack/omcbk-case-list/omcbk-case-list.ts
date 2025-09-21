import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-omcbk-case-list',
  imports: [ MatTableModule, MatMenuModule, MatIconModule, MatButtonModule, FormsModule, MatRadioModule],
  templateUrl: './omcbk-case-list.html',
  styleUrl: './omcbk-case-list.css'
})

export class OmcbkCaseList {
  selectedSet = 'set1';
  displayedColumns: string[] = ['actions', 'position', 'name', 'weight', 'symbol'];
  set1: PeriodicElement[] = ELEMENT_DATA_1;
  set2: PeriodicElement[] = ELEMENT_DATA_2;

  dataSource = this.set1;
  clickedRows = new Set<PeriodicElement>();

  onFilterChange() {
    this.dataSource = this.selectedSet === 'set1' ? this.set1 : this.set2;
  }

  viewRecord(row: PeriodicElement) {
    alert('View: ' + row.name);
  }

  editRecord(row: PeriodicElement) {
    alert('Edit: ' + row.name);
  }

  deleteRecord(row: PeriodicElement) {
    const index = this.dataSource.indexOf(row);
    if (index >= 0) {
      this.dataSource.splice(index, 1);
      this.dataSource = [...this.dataSource]; // refresh table
    }
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA_1: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

const ELEMENT_DATA_2: PeriodicElement[] = [
    {position: 1, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
    {position: 2, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
    {position: 3, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
];