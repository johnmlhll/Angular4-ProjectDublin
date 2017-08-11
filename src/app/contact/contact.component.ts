import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//emum for contact list type
export enum ContactType {
  'Start',
  'Select-One',
  'Information-Request',
  'Suggestion',
  'Customer-Service-Request',
  'Quotation-Request',
  'Complaint',
  'Urgent-Callback-Request'
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  //form property declarations
  rForm: FormGroup;
  post: any;
  keys: any[]; //for enum

  //variable declarations
  contactType = ContactType; //for enum - assignment from above nested enum class
  contactName:string = '';
  firstName:string = '';
  lastName:string = '';
  email:string = '';
  contactNumber:string = '';
  comment:string = '';
  //alert message declarations and initialisations
  alertFirstName:string = "*First name field must be between 3 and 30 characters long";
  alertLastName:string = "*Last name field must be between 4 and 30 characters long";
  alertEmail:string = "*Email field must be between then 6 and 50 characters long e.g. john@example.com";
  alertContactNumber:string = "*Contact Number must be between 8 and 20 characters long";
  alertComment:string = "*Comment field must be between 6 and 1800 characters long";

  //use Constructor to specify form validation
  constructor(private formBuilder:FormBuilder) {
    //enum first then string fields
    this.keys = Object.keys(this.contactType).filter(Number);
    //string fields
    this.rForm = formBuilder.group({
      'selectEnum':[],
      'firstName':[null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])],
      'lastName':[null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(30)])],
      'email':[null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      'contactNumber':[null, Validators.compose([Validators.minLength(7), Validators.maxLength(20)])],
      'comment':[null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(1800)])],
      'validate':''
    });
  }
  //OnInit() implementation for the min validation field tick. This allows the user to redefine the validation rules.
  ngOnInit() {
    this.rForm.get('validate').valueChanges.subscribe(
      (validate) => {
        if(validate == '1') {
          this.rForm.get('firstName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(300)]);
          this.rForm.get('lastName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(300)]);
          this.rForm.get('email').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(300)]);
          this.rForm.get('contactNumber').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(300)]);
          this.rForm.get('comment').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(1800)]);
          //update the alerts when 3 char min is switched on
          this.alertFirstName = "*First name field must be at least 3 characters long";
          this.alertLastName = "*Last name field must be at least 3 characters long";
          this.alertEmail = "*Email field must be at least 3 characters long e.g. john@example.com";
          this.alertContactNumber = "*Contact Number field must be at least 3 characters long";
          this.alertComment = "*Comment field must be at least 3 characters long";
        }
        this.rForm.get('firstName').updateValueAndValidity();
        this.rForm.get('lastName').updateValueAndValidity();
        this.rForm.get('email').updateValueAndValidity();
        this.rForm.get('contactNumber').updateValueAndValidity();
        this.rForm.get('comment').updateValueAndValidity();
        this.rForm.get('contactType').updateValueAndValidity();
      }
    );
  }
  //method to post submitted contact form (here is where the back end service call is made to db)
  addPost(post) {
    this.contactName = this.contactType[this.rForm.get('selectEnum').value]; //gets selected enum value from dropdown
    post.contactName = this.contactName; //binds enum to post 'data' object in native javascript (receiver=sender) !.ts
    this.firstName = post.firstName; //binds the data in firstName posted from the form to this.firstName
    this.lastName = post.lastName;
    this.email = post.email;
    this.contactNumber = post.contactNumber;
    this.comment = post.comment;
    //>>db service call would go here to store data persistently using "post" object or "this" variables
  }
}
