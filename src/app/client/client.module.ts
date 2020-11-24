import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
  
import { ClientListComponent } from './client-list/client-list.component';
import { ClientCreatorComponent } from './client-creator/client-creator.component';
import { ClientEditorComponent } from './client-editor/client-editor.component';


@NgModule({
  declarations: [ClientListComponent, ClientCreatorComponent, ClientEditorComponent],
  imports: [
    CommonModule,
    FormsModule
  ], 
  exports: [
    ClientListComponent,
    ClientCreatorComponent,
    ClientEditorComponent
  ]
})
export class ClientModule { }
