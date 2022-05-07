import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  userForm: FormGroup;
  listData: any;

  constructor(private fb:FormBuilder) {

    this.listData = [];

    this.userForm = this.fb.group({
      name:['', Validators.required],
      address:['', Validators.required],
      concactNo:['', Validators.required],
      gender:['', Validators.required],
    })
  }

  public addItem() : void{
    this.listData.push(this.userForm.value);
    this.userForm.reset();

  }

  removeItem(element: any){
    this.listData.forEach((value: any,index: any) => {
      if (value == element)
        this.listData.splice(index,1);
    });
  }

  reset(){
    this.userForm.reset();
  }

  ngOnInit(): void {
  }

}
