import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  userForm: FormGroup;

  constructor(private fb:FormBuilder) {
    this.userForm = this.fb.group({
      name:['', Validators.required],
      address:['', Validators.required],
      concactNo:['', Validators.required],
      gender:['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

}
