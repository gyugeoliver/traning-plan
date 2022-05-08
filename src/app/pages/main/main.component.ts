import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';
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
      serial:['', Validators.required],
      repetition:['', Validators.required],
    })
  }

  onSubmit() {
      if(this.traningForm.invalid){
        return;
      }
      const traning: Traning = {
        date: this.traningForm.get('date')?.value,
        name: this.traningForm.get('name')?.value,
        serial: this.traningForm.get('serial')?.value,
        repetition: this.traningForm.get('repetition')?.value,
      }

      this.traningService.create(traning).then(_ => {
        console.log('User added successfully.');
        this.data();
      }).catch(error => {
        console.error(error);
      })

      this.reset();
  }

  removeItem(element: Traning){
    this.traningService.delete(element.id!);
    this.data();
  }

  reset(){
    this.traningForm.reset();
  }

  data(){
    this.traningService.getAll().pipe(first()).subscribe(data=>{this.listData=data});
  }


  ngOnInit(): void {
    this.data();
  }

}
