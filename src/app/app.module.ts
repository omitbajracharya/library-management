import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibrarianComponent } from './library/librarian/librarian.component';
import { StudentsComponent } from './students/students.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { DashpageComponent } from './dashpage/dashpage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { LibraryModule } from './library/library.module';

@NgModule({
  declarations: [
    AppComponent,
    LibrarianComponent,
    StudentsComponent,
    NavbarComponent,
    DashpageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    // LibraryModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
