import { Component, OnInit } from '@angular/core';
// import { RestService } from './rest.service';
// import { Students } from './students';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'library-management';
  // constructor(private rs : RestService){}

  columns=["Id","Name","Phone","Semester"];

  // std=Students[]=[];
ngOnInit(): void {
  // this.rs.getUsers().subscribe(
    // (response)=>
    // {
    //   this.std=response;
    // }.
    // (error)=>
    // {
    //   console.log("Error Occured: "+error);
    // }
  // )
}


}
