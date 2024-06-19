import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { PopupComponent } from './components/popup/popup.component';
import { OverlayModule } from "@angular/cdk/overlay";
import { BrowserModule } from '@angular/platform-browser';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    PopupComponent,
    EmptyStateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    OverlayModule,
    BrowserModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    PopupComponent,
    EmptyStateComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
  ],
})
export class SharedModule { }
