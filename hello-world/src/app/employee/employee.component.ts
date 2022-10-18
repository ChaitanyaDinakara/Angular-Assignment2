import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
import {FormGroup , FormControl} from '@angular/forms';
export class Name1Component {
  detailsform = new FormGroup({
    name : new FormControl(''),
    id : new FormControl(''),
    age : new FormControl(''),
    address : new FormGroup({
      city : new FormControl(''),
      country : new FormControl('')
    })
  })
  Submit(){
    console.log(this.detailsform.value);
  }
}
