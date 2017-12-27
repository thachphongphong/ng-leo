import { Component } from '@angular/core';
import * as enLocale from 'date-fns/locale/en';
import { DatepickerOptions } from 'ng2-datepicker';
import { PopoverConfig } from 'ngx-bootstrap/popover/popover.config';
import { PopoverContainerComponent } from 'ngx-bootstrap/popover/popover-container.component';
import { PopoverDirective } from 'ngx-bootstrap/popover/popover.directive';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})

export class ReservationComponent {

  datepickerModelFrom: Date;
  datepickerModelTo: Date;
  options: DatepickerOptions = {
    locale: enLocale
  };

  constructor() {
    this.datepickerModelFrom = new Date();
    this.datepickerModelTo = new Date();
    this.datepickerModelTo.setDate(this.datepickerModelFrom.getDate() + 1);
    
  }
 
  ngOnInit() {
  }

  status: { isopen: boolean } = { isopen: false };
 
  toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }
 
  change(value: boolean): void {
    this.status.isopen = value;
  }
  
}

