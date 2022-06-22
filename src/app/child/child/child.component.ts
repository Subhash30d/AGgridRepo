import { Component, Input, OnInit , Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  childData: string = "Data from child component" 
  @Output() childStringdata : EventEmitter<string> = new EventEmitter()
  @Input() message_head_child:any;
  @Input() message_child:any;
  
  

  constructor() { }

  ngOnInit(): void {
    
  }
  

}
