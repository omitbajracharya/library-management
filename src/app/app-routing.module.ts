import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibrarianComponent } from './library/librarian/librarian.component';
import { StudentsComponent } from './students/students.component';
import { DashpageComponent } from './dashpage/dashpage.component';
import { NotFoundComponent} from './not-found/not-found.component';
const routes: Routes = [
  {path: 'librarian-component', component: LibrarianComponent},
  {path: 'students-component', component: StudentsComponent},
  // {path:'',redirectTo:'/dashpage',pathMatch:'full'},
  {path:'',component:DashpageComponent},
  {path:'dash-component',component:DashpageComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
