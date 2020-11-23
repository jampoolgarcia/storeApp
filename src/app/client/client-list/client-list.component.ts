import { Component, OnInit } from '@angular/core';
import { ClientOperationsService } from '../client-operations.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clientListData = []

  constructor(private _clientService: ClientOperationsService) { }

  ngOnInit(): void {
    this.LoadClientListData();
  }


  LoadClientListData(){
    this.clientListData = this._clientService.getClientListData();
  }
}
