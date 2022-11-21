import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'anml-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent implements OnInit {

  @Input() clientInfo: any;
  @Output() navigateTo = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  navigateToRoute(path: string){
    this.navigateTo.emit(path);
  }
}
