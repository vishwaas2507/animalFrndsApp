import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'anml-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  @Input() clients: any;
  @Output() selectRow = new EventEmitter<any>(); 

  constructor() { 
  }

  ngOnInit(): void {
  }

  selectClient(client: any){
    this.selectRow.emit(client);
  }
}
