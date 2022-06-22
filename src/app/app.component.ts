import { Component , OnInit} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from './shared/apiservice.service';
import { filter, map, Observable, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit{
  gridApiActive: any;
  searchText:any
  constructor(private api:ApiserviceService,private fb: FormBuilder){}
  
  columnDefs=[
    {headerName: 'Id', field:'id',sortable: true, filter:true},
    {headerName: 'Email', field:'email',sortable: true, filter:true},
    {headerName: 'First Name', field:'first_name',sortable: true, filter:true},
    {headerName: 'Last Name', field:'last_name',sortable: true, filter:true},
    
    ];

    rowData =[]

  ngOnInit(): void {
this.getdata();
  }
    
  onGidReady1(params: any){
    this.gridApiActive=params.api
     //this.rowData=responseget.data
  }

  onFilterBoxChanged(){
    this.gridApiActive.setQuickFilter(this.searchText)
  }


  getdata(){
    this.api.getuserdata().subscribe((responseget: any) => {
      console.log("Get Response for url: " )
      console.log(responseget)
      console.log(responseget.data)
      this.rowData=responseget.data
    })
  }
    
  
  }
