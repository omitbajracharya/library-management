import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibrarianComponent } from './librarian/librarian.component';



@NgModule({
  declarations: [LibrarianComponent],
  imports: [
    CommonModule
  ],
  exports:[LibrarianComponent]

})
export class LibraryModule { }
