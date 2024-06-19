import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllConversationsComponent } from './components/all-conversations/all-conversations.component';
import { TeamComponent } from './components/team/team.component';
import { UnAttendedComponent } from './components/un-attended/un-attended.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AllConversationsComponent,
    TeamComponent,
    UnAttendedComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    SharedModule,
    FormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
  ],
})
export class ChatsModule { }
