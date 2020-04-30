import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit(): void {    
  } 

  generalInfo = new FormGroup({
    foundingYear: new FormControl(''),
    industry: new FormControl(''),
    size: new FormControl(''),
  });

  legalInfo = new FormGroup({
    practiceNum: new FormControl(''),
    turnover: new FormControl(''),
    trustNum: new FormControl(''),
    NPONum: new FormControl(''),
    PAYENum: new FormControl('')
  });

  contactInfo= new FormGroup({
    website: new FormControl(''),
    faxNum: new FormControl(''),
  });

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

  foundingYear: string;
  industry: string;
  size: string;
  practiceNum: string;
  turnover: string;
  trustNum: string;
  NPONum: string;
  PAYENum: string;
  website: string;
  faxNum: string;

  submitGeneral(){
    this.foundingYear = this.generalInfo.controls['foundingYear'].value;
    this.industry = this.generalInfo.controls['industry'].value;
    this.size = this.generalInfo.controls['size'].value;    
  }

  submitLegal(){
    this.practiceNum = this.legalInfo.controls['practiceNum'].value;
    this.turnover = this.legalInfo.controls['turnover'].value;
    this.trustNum = this.legalInfo.controls['trustNum'].value;
    this.NPONum = this.legalInfo.controls['NPONum'].value;
    this.PAYENum = this.legalInfo.controls['PAYENum'].value;
  }

  submitContact(){
    this.website = this.contactInfo.controls['website'].value;
    this.faxNum = this.contactInfo.controls['faxNum'].value;
  }


  onClickMe(){
    this.submitGeneral();
    this.submitLegal();
    this.submitContact();    
  }

  onDone(){
    this.router.navigateByUrl('/goodbye');
  }
 

}
