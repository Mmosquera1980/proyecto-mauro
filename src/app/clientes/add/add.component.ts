import { Component, OnInit } from '@angular/core';
import { Clientes } from '../clientes';
import { ClienteServiceService } from '../cliente-service.service';


@Component({
  selector: 'clientes-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  cliente:Clientes;

  constructor(private clienteServiceService:ClienteServiceService) { }

  ngOnInit() {
    this.cliente = new Clientes();
    
  }

  onNewClick(){
    this.cliente=new Clientes();
  }
  onSaveClick(){
    alert("Se ha guardado " + this.cliente.name);
    this.clienteServiceService.clientesList.push(this.cliente);
  }

}
