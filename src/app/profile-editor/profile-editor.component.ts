import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css'],
})
export class ProfileEditorComponent implements OnInit {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName : [''],
    address  : this.fb.group({
      street: [''],
      city  : [''],
      state : [''],
      zip   : [''],
    }),
  });

  response: object = {};

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    this.response = this.profileForm.value;
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street',
      },
    });
  }
}
