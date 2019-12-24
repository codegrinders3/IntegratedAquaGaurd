import { Component } from '@angular/core';
import { Customer } from './data/customer';
import { TryService } from './services/tryservice.service';
import { of } from 'rxjs';
import { FormBuilder, FormGroup, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'new-aqua-try';
  addButton: boolean = false;
  customers: Customer[];
  customer: Customer;
  testOutputString: string;
  columns:string[] = ["Customer Name", "Phone Number", "Customer Address", "Date of Work", "Technician Name"]; 

  form: FormGroup;
  addNewForm: FormGroup;
  orders = [];
  search = '';
  
  total = 0;

  constructor(private formBuilder: FormBuilder, public tryService: TryService) {
      this.form = this.formBuilder.group({
        search: new FormControl(''),
        orders: ['']
    });

    this.addNewForm = this.formBuilder.group({
      customerName: new FormControl(''),
      phoneNumber: new FormControl(''),
      address: new FormControl(''),
      modelName: new FormControl(''),
      dateOfWork: new FormControl(''),
      monthOfWork: new FormControl(''),
      technicianName: new FormControl(''),
      ccv: new FormControl(''),
      sedimentalFilter: new FormControl(''),
      carbonFilter: new FormControl(''),
      roMembrane: new FormControl(''),
      multilayer: new FormControl(''),
      ppSpun: new FormControl(''),
      pump: new FormControl(''),
      sv: new FormControl(''),
      smps: new FormControl(''),
      vvLamp: new FormControl(''),
      service: new FormControl(''),
      isAmc: new FormControl(''),
      amcDate: new FormControl(''),
      amcRenewed: new FormControl('')
    });

    // ...........................async orders
    of(this.getOrders()).subscribe(orders => {
      this.orders = orders;
      this.form.controls.orders.patchValue(this.orders[0].id);
    });
  }

  ngOnInit() {
    this.getAllCustomers();
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

  onSubmit() {
    if (this.form.value.search){
      this.tryService.getAllCustomers2(this.form.value.orders, this.form.value.search).subscribe((data:[]) => {
        this.customers = data;
      })
    }
  }

  onReset() {
    this.ngOnInit();
  }

  getAllCustomers(): void {
    this.tryService.getAllCustomers().subscribe((data: []) => {
      this.customers = data;  
    });
  } 

  toggleButton(): void {
      this.addButton = !this.addButton; 
    }

  addNewRecord(): void{
    this.customer = new Customer(
                      this.addNewForm.get('customerName').value,
                      this.addNewForm.get('phoneNumber').value,
                      this.addNewForm.get('address').value,
                      this.addNewForm.get('modelName').value,
                      this.addNewForm.get('dateOfWork').value,
                      this.addNewForm.get('monthOfWork').value,
                      this.addNewForm.get('technicianName').value,
                      this.addNewForm.get('ccv').value,
                      this.addNewForm.get('sedimentalFilter').value,
                      this.addNewForm.get('carbonFilter').value,
                      this.addNewForm.get('roMembrane').value,
                      this.addNewForm.get('multilayer').value,
                      this.addNewForm.get('ppSpun').value,
                      this.addNewForm.get('pump').value,
                      this.addNewForm.get('sv').value,
                      this.addNewForm.get('smps').value,
                      this.addNewForm.get('vvLamp').value,
                      this.addNewForm.get('service').value,
                      this.addNewForm.get('isAmc').value,
                      this.addNewForm.get('amcDate').value,
                      this.addNewForm.get('amcRenewed').value
                    ) 
    this.tryService.addCustomer(JSON.stringify(this.customer)).subscribe((data: []) => {
      console.log(data); 
    });
    this.toggleButton();
  }
}
