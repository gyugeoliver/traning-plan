import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Traning } from 'src/app/shared/models/Traning';
import { TraningService } from 'src/app/shared/services/traning.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  traningForm: FormGroup;
  listData: any;

  /*  
  signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    name: new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl('')
    })
  });
  */
  constructor(
      private traningService: TraningService ,
      private fb: FormBuilder
  ) {

    this.traningForm = this.fb.group({
      date:['', Validators.required],
      name:['', Validators.required],
      repetition:['', Validators.required],
      repetition2:['', Validators.required],
    })
  }

  onSubmit() {

      const traning: Traning = {
        date: this.traningForm.get('date')?.value,
        name: this.traningForm.get('name')?.value,
        repetition: this.traningForm.get('repetition')?.value,
        repetition2: this.traningForm.get('repetition2')?.value,
      }

      this.traningService.create(traning).then(_ => {
        console.log('User added successfully.');
      }).catch(error => {
        console.error(error);
      })

    console.log(traning);
  }


  removeItem(element: any){
    this.listData.forEach((value: any,index: any) => {
      if (value == element)
        this.listData.splice(index,1);
    });
  }


  reset(){
    this.traningForm.reset();
  }

  ngOnInit(): void {
  }

}
