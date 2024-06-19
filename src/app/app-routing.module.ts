import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './chats/components/main/main.component';
import { AllConversationsComponent } from './chats/components/all-conversations/all-conversations.component';
import { TeamComponent } from './chats/components/team/team.component';
import { UnAttendedComponent } from './chats/components/un-attended/un-attended.component';

const routes: Routes = [
  { path: '', redirectTo: 'chats', pathMatch: 'full' },
  {
    path: 'chats',
    component: MainComponent,
    children: [
      { path: 'all', component: AllConversationsComponent },
      { path: 'team', component: TeamComponent },
      { path: 'un-attended', component: UnAttendedComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
