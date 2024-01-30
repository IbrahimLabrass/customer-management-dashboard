import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: any[] = [];
  selectedCustomer: any = {};

  isEditing: boolean = false;
  filteredCustomers: any[] = [];
  filterText = '';
  sortBy = 'name';
  sortDirection = 'asc';
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.loadCustomers();
    this.applyFilter();
    this.applySorting();
  }

  loadCustomers() {
    this.customerService.getCustomers().subscribe(data => {
      this.customers = data;
      this.applyFilter();

    });
  }

  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id).subscribe(() => {
      this.loadCustomers();
      this.clearSelectedCustomer();
    });
  }

  editCustomer(customer: any) {
    this.selectedCustomer = { ...customer };
    this.isEditing = true;
  }

  clearSelectedCustomer() {
    this.selectedCustomer = {};
    this.isEditing = false;
  }

  updateCustomer() {
    if (this.selectedCustomer.id) {
      this.customerService.updateCustomer(this.selectedCustomer.id, this.selectedCustomer).subscribe(() => {
        this.loadCustomers();
        this.clearSelectedCustomer();
      });
    }
  }

       addCustomer(newCustomer: any) {
  newCustomer.name = newCustomer.name || '';
  newCustomer.email = newCustomer.email || '';
  newCustomer.contactNumber = newCustomer.contactNumber || '';

  this.customerService.addCustomer(newCustomer).subscribe(() => {
    this.loadCustomers();
    this.clearSelectedCustomer();
  });
}

// Add filtering and sorting capabilities to the customer list.

applyFilter() {
  this.filteredCustomers = this.customers.filter((customer) =>
    customer.name.toLowerCase().includes(this.filterText.toLowerCase())
  );
}

applySorting() {
  this.filteredCustomers.sort((a, b) => {
    const aValue = a[this.sortBy].toLowerCase();
    const bValue = b[this.sortBy].toLowerCase();

    if (this.sortDirection === 'asc') {
      return aValue.localeCompare(bValue);
    } else {
      return bValue.localeCompare(aValue);
    }
  });
}

}
