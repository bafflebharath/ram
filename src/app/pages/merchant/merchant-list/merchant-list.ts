import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-merchant-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  templateUrl: './merchant-list.html',
  styleUrl: './merchant-list.css'
})
export class MerchantList {
  displayedColumns: string[] = [ 'actions', 'id', 'name', 'createdDate', 'status'];

  merchants: Merchant[] = [];
  filteredMerchants: Merchant[] = [];
  pagedMerchants: Merchant[] = [];

  // filters
  nameFilter: string = '';
  fromDate: string = '';
  toDate: string = '';

  // pagination
  pageSize = 10;
  pageIndex = 0;
  length = 0;

  constructor() {
    this.generateMockMerchants();
    this.applyFilters();
  }

  generateMockMerchants() {
    const statuses = ['Active', 'Inactive', 'Pending'];
    for (let i = 1; i <= 100; i++) {
      this.merchants.push({
        id: i,
        name: `Merchant ${i}`,
        createdDate: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1),
        status: statuses[Math.floor(Math.random() * statuses.length)]
      });
    }
  }

  applyFilters() {
    this.filteredMerchants = this.merchants.filter(m => {
      const matchName = !this.nameFilter || m.name.toLowerCase().includes(this.nameFilter.toLowerCase());

      const matchDate =
        (!this.fromDate || new Date(m.createdDate) >= new Date(this.fromDate)) &&
        (!this.toDate || new Date(m.createdDate) <= new Date(this.toDate));

      return matchName && matchDate;
    });

    this.length = this.filteredMerchants.length;
    this.updatePagedData();
  }

  updatePagedData() {
    const start = this.pageIndex * this.pageSize;
    const end = start + this.pageSize;
    this.pagedMerchants = this.filteredMerchants.slice(start, end);
  }

  handlePageEvent(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePagedData();
  }

  viewMerchant(merchant: Merchant) {
    alert(`View Merchant: ${merchant.name}`);
  }

  editMerchant(merchant: Merchant) {
    alert(`Edit Merchant: ${merchant.name}`);
  }

  deleteMerchant(merchant: Merchant) {
    this.merchants = this.merchants.filter(m => m.id !== merchant.id);
    this.applyFilters();
  }
}

export interface Merchant {
  id: number;
  name: string;
  createdDate: Date;
  status: string;
}
