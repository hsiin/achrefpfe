import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  patient : any
  constructor(private location : Location) { }

  ngOnInit(): void {
    let pat = localStorage.getItem('pat')
    if(pat){

      this.patient = JSON.parse(pat)
    }


  }

  onBack(){
    this.location.back()
  }

}
