import { Component } from '@angular/core';
import { Customer } from './data/customer';
import { TryService } from './services/tryservice.service';
import { first } from 'rxjs/operators';
import { of } from 'rxjs';
import { FormBuilder, FormGroup, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'new-aqua-try';
  customers: Customer[];
  testOutputString: string;
  columns:string[] = ["Customer Name", "Phone Number", "Customer Address", "Date of Work", "Technician Name"]; 

  form: FormGroup;
  orders = [];
  search = '';

  constructor(private formBuilder: FormBuilder, public tryService: TryService) {
      this.form = this.formBuilder.group({
        search: new FormControl(''),
        orders: ['']
    });

    // ...........................async orders
    of(this.getOrders()).subscribe(orders => {
      this.orders = orders;
      this.form.controls.orders.patchValue(this.orders[0].id);
    });
  }

  ngOnInit() {
    this.getAllCustomers();
    //this.getCustomersBySearch();
  }

  getOrders() {
    return [
      { id: 'name', name: 'Name' },
      { id: 'phonenumber', name: 'Phone' },
      { id: 'address', name: 'Address' },
      { id: 'date', name: 'Date of work' },
      { id: 'technicianname', name: 'Technician name' }
    ];
  }

  submit() {
    console.log(this.form.value.orders);
    this.tryService.getTest(this.form.value.orders, this.form.value.search).subscribe((data: []) => {
      this.customers = data;
      console.log('j = ' + JSON.stringify(this.customers));
    });
  }

  getAllCustomers(): void {
    this.tryService.getAllCustomers().subscribe((data: []) => {
      this.customers = data;
    });
    } 
}
