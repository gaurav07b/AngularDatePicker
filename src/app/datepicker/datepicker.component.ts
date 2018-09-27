import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material';
import { FetchempService } from '../fetchemp.service';

interface Employee {
  id: number;
  name: string;
  joinDate: Date;
  contact: string;
  details: string;
}

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
})

export class DatepickerComponent implements OnInit {

  myForm: FormGroup;
  displayedColumns: string[] = ['id', 'Name', 'DOJ', 'Contact', 'Additional Info'];
  dataSource = null;
  constructor(private fb: FormBuilder, private service: FetchempService) { }

  ngOnInit() {

    const datePick = [, [Validators.required]];

    this.myForm = this.fb.group({
      date1: datePick,
      date2: datePick,
    });

  }

  fetchEmp() {
    // console.log(this.myForm.value.date1._d);
    this.service.getEmployee().subscribe((val: Employee[]) => {
      // console.log(new Date(val[0].joinDate), this.myForm.value.date1._d);
      this.dataSource = val.filter(ele =>
        new Date(ele.joinDate) > this.myForm.value.date1._d && new Date(ele.joinDate) < this.myForm.value.date2._d);
    });
  }

}
