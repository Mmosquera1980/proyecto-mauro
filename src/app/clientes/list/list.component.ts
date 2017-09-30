import { Component, OnInit } from '@angular/core';
import { Clientes } from '../clientes';
import { ClienteServiceService } from '../cliente-service.service';


@Component({
  selector: 'clientes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private clienteServiceService:ClienteServiceService) { }

  ngOnInit(){

  }

}
