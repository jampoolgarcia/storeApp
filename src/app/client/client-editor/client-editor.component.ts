import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientOperationsService } from '../client-operations.service';

@Component({
  selector: 'app-client-editor',
  templateUrl: './client-editor.component.html',
  styleUrls: ['./client-editor.component.css']
})
export class ClientEditorComponent implements OnInit {

  client = {
    _id: null,
    name: null,
    age: null,
    balance: null,
    company: null,
    phone: null
  }

  data = []

  constructor(private routes: ActivatedRoute, private clientOperatorService: ClientOperationsService) { }

  ngOnInit(): void {
    
    this.loadClient();
    this.LoadClientListData();
    
  }

  LoadClientListData(){
    this.data = this.clientOperatorService.getClientListData();
  }

  loadClient(){

    let id = this.getUrlParameter("clientId");
    
    let client = this.clientOperatorService.getClient(id);

    this.client = {
      _id: id,
      name: client.name,
      age: client.age,
      balance: client.balance,
      company: client.company,
      phone: client.phone
    }

  }

  getUrlParameter = (clientId: string) => {
    return this.routes.snapshot.paramMap.get(clientId);
  }

  updateClient(){
      if(this.client._id != null){
        this.clientOperatorService.updateClient(this.client);
      }
  }

}
