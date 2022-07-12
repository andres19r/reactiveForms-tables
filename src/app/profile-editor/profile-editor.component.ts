import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css'],
})
export class ProfileEditorComponent implements OnInit {
  profileForm: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName : [''],
    address  : this.fb.group({
      street: [''],
      city  : [''],
      state : [''],
      zip   : [''],
    }),
    aliases  : this.fb.array([
      this.fb.control(''),
    ]),
  });

  response: object = {};

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.response = this.profileForm.value;
    console.log(this.profileForm.value)
  }

  updateProfile(): void {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street',
      },
    });
  }

  get aliases(): FormArray {
    return this.profileForm.get('aliases') as FormArray
  }

  addAlias(): void {
    this.aliases.push(this.fb.control(''))
  }
}
