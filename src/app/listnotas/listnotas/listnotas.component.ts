import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-listnotas',
  templateUrl: './listnotas.component.html',
  styleUrls: ['./listnotas.component.css']
})
export class ListnotasComponent implements OnInit {



  notasform:FormGroup;
  lstNotas:Array<any>=[];
  errodesc:boolean=false;
  errorname:boolean=false;
  constructor(private _fb: FormBuilder) {
    this.notasform=this._fb.group({
      name: ["",Validators.required],
      descripcion:["",Validators.required]
    })
    this.cargarArreglo();
   }

  ngOnInit(): void {
    
  }

 
  
  on_submit(value) {
    console.log(this.notasform.get('descripcion'));
    console.log(this.notasform)
    console.log(value);
    let nota={nombre:"", descripcion:"", fecha: new Date()}
    nota.nombre=value.name;
    nota.descripcion=value.descripcion;
    if(nota.descripcion!="" && nota.descripcion!=null){
      this.errodesc=false;
      if(nota.nombre!="" && nota.nombre!=null){
        this.errorname=false;
        this.lstNotas.push(nota);
        this.guardarArreglo();
        this.notasform.reset();
        console.log(this.lstNotas);
      }else{
        this.errorname=true;
      }

    }else{
      this.errodesc=true;
    }
    

    
  }

  guardarArreglo(){
    localStorage.setItem('notas', JSON.stringify(this.lstNotas));
  }
  
  cargarArreglo(){
      if (localStorage.getItem('notas') ){
        this.lstNotas = JSON.parse(localStorage.getItem('notas'));
      }else{
        this.lstNotas = [];
    }
  }

remove()
{
  this.lstNotas=[];
  this.guardarArreglo();
}
}
