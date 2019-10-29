import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  myForm: FormGroup;
  
  constructor(private fb:FormBuilder) {}

  //Se lanza despues de que se cargan todos los componentes de html
  ngOnInit(){
    this.myForm = this.fb.group({
      rfc: ["", Validators.compose([Validators.required, Validators.minLength(13), Validators.pattern('[A-Z,Ñ,&]{3,4}[0-9]{2}[0-1][0-9][0-3][0-9][A-Z,0-9]?[A-Z,0-9]?[0-9,A-Z]?')])],
      name: ["", Validators.compose([Validators.required, Validators.minLength(10)])],  //["Valor inicial del input", ]
      email: ["", Validators.compose([Validators.required, Validators.maxLength(320), Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      genero: ["", Validators.required],
      curp: ["", Validators.compose([Validators.required, Validators.minLength(18), Validators.pattern('[A-Z][A,E,I,O,U,X][A-Z]{2}[0-9]{2}[0-1][0-9][0-3][0-9][M,H][A-Z]{2}[B,C,D,F,G,H,J,K,L,M,N,Ñ,P,Q,R,S,T,V,W,X,Y,Z]{3}[0-9,A-Z][0-9]')])]
    });
  }

}
