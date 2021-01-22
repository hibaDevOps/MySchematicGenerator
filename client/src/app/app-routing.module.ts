import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { ServicesSizeComponent } from './components/services-size/services-size.component';
import { AddServicesSizeComponent} from './components/add-services-size/add-services-size.component';
import { HomeComponent } from './components/home/home.component';
import { EditServicesValueComponent } from './components/edit-services-value/edit-services-value.component';
import { ServicesComponent } from './components/services/services.component';
import { AddServiceComponent } from './components/add-service/add-service.component';
import {EditServiceComponent} from './components/edit-service/edit-service.component';
import { PipeListComponent } from './components/pipe/pipe-list/pipe-list.component';
import { AddPipeComponent } from './components/pipe/add-pipe/add-pipe.component';
import { EditPipeComponent } from './components/pipe/edit-pipe/edit-pipe.component';
import { PipeServicesComponent} from './components/pipe/pipe-services/pipe-services.component';
import { ServicesComponentComponent} from './components/services-component/services-component/services-component.component';
import { AddServicesComponentComponent} from './components/services-component/add-services-component/add-services-component.component';
import { EditServicesComponentComponent} from './components/services-component/edit-services-component/edit-services-component.component';
import { ProjectListsComponent} from './components/projects/project-lists/project-lists.component';
import { AddProjectsComponent} from './components/projects/add-projects/add-projects.component';
import { EditProjectsComponent} from './components/projects/edit-projects/edit-projects.component';
import {AddProjectRevisionsComponent} from './components/project-revisions/add-project-revisions/add-project-revisions.component';
import {EditProjectRevisionsComponent} from './components/project-revisions/edit-project-revisions/edit-project-revisions.component';
import {ProjectRevisionsComponent} from './components/project-revisions/project-revisions/project-revisions.component';
import {ProjectObjectsComponent} from './components/project-objects/project-objects/project-objects.component';
import {AddProjectObjectsComponent} from './components/project-objects/add-project-objects/add-project-objects.component';
import {EditProjectObjectsComponent} from './components/project-objects/edit-project-objects/edit-project-objects.component'
import { EditProjectSheetsComponent } from './components/project-sheets/edit-project-sheets/edit-project-sheets.component';
import { ProjectSheetsComponent } from './components/project-sheets/project-sheets/project-sheets.component';
import { AddProjectSheetsComponent } from './components/project-sheets/add-project-sheets/add-project-sheets.component';
import { EditProjectNotesComponent } from './components/project-notes/edit-project-notes/edit-project-notes.component';
import { ProjectNotesComponent } from './components/project-notes/project-notes/project-notes.component';
import { AddProjectNotesComponent } from './components/project-notes/add-project-notes/add-project-notes.component';
import { EditProjectMechComponent } from './components/project-mech/edit-project-mech/edit-project-mech.component';
import { ProjectMechComponent } from './components/project-mech/project-mech/project-mech.component';
import { AddProjectMechComponent } from './components/project-mech/add-project-mech/add-project-mech.component';
import {ProjectRegisterSheetComponent} from './components/project-register-sheet/project-register-sheet/project-register-sheet.component';
import { GeneratePdfComponent } from './components/projects/generate-pdf/generate-pdf.component';
import {ManageComponent} from './components/billing/manage/manage.component';
import {CreatesubscriptionComponent} from './components/billing/createsubscription/createsubscription.component'; 
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import { ProjectServiceDataComponent } from './components/project-service-data/project-service-data.component'; 
import { UploadTemplatesComponent } from './components/upload-templates/upload-templates/upload-templates.component' 
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';
import {ChangePasswordComponent} from './components/change-password/change-password.component';
import {InviteUsersComponent} from './components/invite-users/invite-users.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'add-student', component: AddStudentComponent },
  { path: 'edit-services-value/:id', component: EditServicesValueComponent },
  { path: 'service/edit-service/:id', component: EditServiceComponent },
  { path: 'edit-student/:id', component: EditStudentComponent },
  { path: 'students-list', component: StudentsListComponent },
  { path: 'get-all-services-size',component: ServicesSizeComponent},
  { path:  'add-services-size',component: AddServicesSizeComponent},
  { path:  'services/getAll',component: ServicesComponent},
  { path: 'service/add-service',component:AddServiceComponent},
  { path:  'pipes/getAll',component: PipeListComponent},
  { path:  'pipe/add-pipe',component: AddPipeComponent},
  { path: 'pipe/edit-pipe/:id', component: EditPipeComponent },
  { path: 'pipe/pipe-services',component:PipeServicesComponent},
  { path: 'component/getAll',component:ServicesComponentComponent},
  { path:  'component/add-component',component: AddServicesComponentComponent},
  { path: 'component/edit-component/:id', component: EditServicesComponentComponent },
  { path: 'project/getAll', component: ProjectListsComponent },
  { path: 'project/add-project', component: AddProjectsComponent },
  { path: 'project/edit-project/:id', component: EditProjectsComponent },
  { path: 'project_rev/getAll', component: ProjectRevisionsComponent},
  { path: 'project_rev/add-project_rev', component: AddProjectRevisionsComponent},
  { path: 'project_rev/edit-project_rev/:id/:id1', component: EditProjectRevisionsComponent},
  { path: 'project_rev/getAll/:id', component: ProjectRevisionsComponent},
  { path: 'project_rev/add-project_rev/:id', component: AddProjectRevisionsComponent},
  { path: 'project_obj/edit-project_obj/:id/:id1', component: EditProjectObjectsComponent},
  { path: 'project_obj/getAll/:id', component: ProjectObjectsComponent},
  { path: 'project_obj/add-project_obj/:id', component: AddProjectObjectsComponent},
  { path: 'project_sheet/edit-project_sheet/:id/:id1', component: EditProjectSheetsComponent},
  //{ path: 'project_sheet/getAll/:id', component: ProjectSheetsComponent},
  { path: 'project_sheet/add-project_sheet/:id', component: AddProjectSheetsComponent},
  { path: 'project_notes/edit-project_notes/:id/:id1', component: EditProjectNotesComponent},
  { path: 'project_notes/getAll/:id', component: ProjectNotesComponent},
  { path: 'project_notes/add-project_notes/:id', component: AddProjectNotesComponent},
  { path: 'project_mech/edit-project_mech/:id/:id1', component: EditProjectMechComponent},
  { path: 'project_mech/getAll/:id', component: ProjectMechComponent},
  { path: 'project_mech/add-project_mech/:id', component: AddProjectMechComponent},
  { path: 'project_sheet/getAll/:id', component: ProjectRegisterSheetComponent},
  { path: 'generate-pdf/:id', component: GeneratePdfComponent},
  { path: 'billing/manage',component:ManageComponent},
  { path: 'billing/create-subscription',component: CreatesubscriptionComponent}, 
  { path: 'user/register',component:RegisterComponent},
  {path: 'login',component:LoginComponent}, 
  { path: 'project-service-data/getAll/:id', component: ProjectServiceDataComponent}, 
  { path: 'upload_templates', component: UploadTemplatesComponent}, 
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'change-password', component: ChangePasswordComponent},
  {path: 'invite-user', component: InviteUsersComponent}




  






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }