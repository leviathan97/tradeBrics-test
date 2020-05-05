import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { Business } from '../business.model';
import { Builder } from 'protractor';

interface Industry{
  value: string;
}

interface Size{
  value: string;
}

interface Turnover{
  value: string;
}

@Component({
  selector: 'app-business-info',
  templateUrl: './business-info.component.html',
  styleUrls: ['./business-info.component.scss']
})


export class BusinessInfoComponent implements OnInit {

  constructor(private router: Router) { 
    
  }

  businessForm = new FormGroup({
    foundingYear: new FormControl(),
    industry: new FormControl(),
    size: new FormControl(),
    practiceNum: new FormControl(),
    turnover: new FormControl(),
    trustNum: new FormControl(),
    NPONum: new FormControl(),
    PAYENum: new FormControl(),
    website:  new FormControl(),
    faxNum: new FormControl()
  });

  ngOnInit(): void {        
  }

  
  industries: Industry[] = [
    {value: 'Education'},
    {value: 'Engineering'},
    {value: 'Finance'}
  ];

  sizes: Size[] = [
    {value: 'Small'},
    {value: 'Medium'},
    {value: 'Large'}
  ];

  turnovers: Turnover[] = [
    {value: '>R499 999'},
    {value: 'R500 000 - R999 999'},
    {value: 'R1 000 000 - R1 499 999'},
    {value: '<R1 500 000'}
  ];

  business: Business;

  onSubmit(){
    this.business = new Business(this.businessForm.controls['foundingYear'].value,
    this.businessForm.controls['industry'].value,
    this.businessForm.controls['size'].value,
    this.businessForm.controls['practiceNum'].value,
    this.businessForm.controls['turnover'].value,
    this.businessForm.controls['trustNum'].value,
    this.businessForm.controls['NPONum'].value,
    this.businessForm.controls['PAYENum'].value,
    this.businessForm.controls['website'].value,
    this.businessForm.controls['faxNum'].value);  
  }


  



  
  
    
  


}
