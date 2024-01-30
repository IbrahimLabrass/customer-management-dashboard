import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent {
  @Input() customer: any;
  @Output() save = new EventEmitter<any>();

  onSubmit(form: NgForm) {
    console.log('Form Submitted:', form.value);
    if (form.valid) {
      this.save.emit(form.value);
      form.resetForm();
    }
}
}
