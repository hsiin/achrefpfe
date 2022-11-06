import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { PatientsService } from './services/patients.service';
@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
})
export class PatientsComponent implements OnInit {
  data: Array<any> = [];
  constructor(
    private location: Location,
    private router: Router,
    private patientsService: PatientsService
  ) {}

  ngOnInit(): void {
    this.getall()
  }
  getall(){
    this.patientsService.getPatients().subscribe((res: any) => {
      this.data = res;
    });
  }
  detail(item : any) {
    localStorage.setItem('pat' , JSON.stringify(item))
    this.router.navigate(['detail']);
  }
  add(): void {
    this.router.navigate(['add']);
  }
  onBack() {
    this.location.back();
  }

  delete(data : any){
    this.patientsService.delete(data).subscribe((res) => {
      console.log(res);
      this.getall()

    })
  }
}
