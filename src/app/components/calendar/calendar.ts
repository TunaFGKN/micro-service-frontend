import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
  selector: 'app-calendar',
  imports: [FormsModule, DatePickerModule],
  templateUrl: './calendar.html',
  styleUrl: './calendar.scss'
})
export class Calendar {
 today: Date = new Date();
}
