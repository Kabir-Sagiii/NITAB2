import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators,FormBuilder} from '@angular/forms'
import {HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
   submitted:boolean = false
   userData:any ={}

    // formReg = new FormGroup({
    //  name:new FormControl('',Validators.required),
    //  password: new FormControl('',Validators.required)

    // })

    formReg = this.fb.group({
      name:['',[Validators.required,Validators.minLength(5)]],
      password:['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
      email:['',[Validators.required,Validators.email]]
    })

    resetValues(){
      this.formReg.reset({
        name:'NIT',
        
      })
    }

    partialUpdate() {
      this.formReg.patchValue({
        name:"Riyan"
      })
    }

      setValues(){
        this.formReg.setValue({
          name:"csdjkbcdjksbc",
          password:"12345"
          
        })
      }

    getFormData(){
      this.submitted = true
       console.log(this.formReg.value.name)
       console.log(this.formReg.value.password)
       console.log(this.formReg.value.email)
       this.userData = {
         "name":this.formReg.value.name,
         "password":this.formReg.value.password,
         "email":this.formReg.value.email
       }
         
         this.http.post("http://localhost:8008/insertdata",this.userData).subscribe((res)=>{
              console.log(res)
         })
      

    }



  constructor(private fb:FormBuilder,private http:HttpClient) { }

  ngOnInit(): void {
  }

}
