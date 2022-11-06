import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Location } from '@angular/common';
import { PatientsService } from '../services/patients.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  // radioValue: any
  radioValue = 'A';
  validateForm!: UntypedFormGroup;
  constructor(private fb: UntypedFormBuilder, private location: Location, private patientsService : PatientsService , private router : Router) {}
  onBack() {
    this.location.back();
  }
  submitForm(): void {
    this.patientsService.addPatients(this.validateForm.value).subscribe(() =>{
      this.router.navigate(['/patients'])
    })
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      roomNum: [null, [Validators.required]],
    });
  }
}
