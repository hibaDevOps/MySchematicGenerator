import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {DatePipe} from '@angular/common';


/* Angular 8 components */
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { ServicesSizeComponent } from './components/services-size/services-size.component';
import { AddServicesSizeComponent } from './components/add-services-size/add-services-size.component';
import { HomeComponent } from './components/home/home.component';
import { EditServicesValueComponent } from './components/edit-services-value/edit-services-value.component';
import { ServicesComponent } from './components/services/services.component';
import { AddServiceComponent} from './components/add-service/add-service.component';
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
import {EditProjectObjectsComponent} from './components/project-objects/edit-project-objects/edit-project-objects.component';
import {ProjectSheetsComponent} from './components/project-sheets/project-sheets/project-sheets.component';
import {AddProjectSheetsComponent} from './components/project-sheets/add-project-sheets/add-project-sheets.component';
import {EditProjectSheetsComponent} from './components/project-sheets/edit-project-sheets/edit-project-sheets.component';
import { ProjectNotesComponent} from './components/project-notes/project-notes/project-notes.component';
import {AddProjectNotesComponent} from './components/project-notes/add-project-notes/add-project-notes.component';
import {EditProjectNotesComponent} from './components/project-notes/edit-project-notes/edit-project-notes.component';
import {ProjectMechComponent} from './components/project-mech/project-mech/project-mech.component';
import {AddProjectMechComponent} from './components/project-mech/add-project-mech/add-project-mech.component';
import {EditProjectMechComponent} from './components/project-mech/edit-project-mech/edit-project-mech.component';
import {ProjectRegisterSheetComponent} from './components/project-register-sheet/project-register-sheet/project-register-sheet.component';
import { GrdFilterPipe } from './_helpers/grd-filter';
import {ManageComponent} from './components/billing/manage/manage.component';
import {CreatesubscriptionComponent} from './components/billing/createsubscription/createsubscription.component';
/* Angular material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
//import { FileSaverModule } from 'ngx-filesaver';

/* Angular 8 http service */
import { HttpClientModule } from '@angular/common/http';

/* Angular 8 CRUD services */
import { ApiService } from './shared/api.service';
import { MessageService } from './shared/messageService';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';


/* Reactive form services in Angular 8 */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GeneratePdfComponent } from './components/projects/generate-pdf/generate-pdf.component';
import {  RxReactiveFormsModule } from "@rxweb/reactive-form-validators";
import { ProjectServiceDataComponent } from './components/project-service-data/project-service-data.component';
import { UploadTemplatesComponent } from './components/upload-templates/upload-templates/upload-templates.component'

/* User Authentication */
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {ChangePasswordComponent} from './components/change-password/change-password.component';
import {InviteUsersComponent} from './components/invite-users/invite-users.component';

/* angular service */


@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    EditStudentComponent,
    StudentsListComponent,
    ServicesSizeComponent,
    AddServicesSizeComponent,
    HomeComponent,
    EditServicesValueComponent,
    ServicesComponent,
    AddServiceComponent,
    EditServiceComponent,
    PipeListComponent,
    AddPipeComponent,
    EditPipeComponent,
    PipeServicesComponent,
    ServicesComponentComponent,
    EditServicesComponentComponent,
    AddServicesComponentComponent,
    ProjectListsComponent,
    AddProjectsComponent,
    EditProjectsComponent,
    AddProjectRevisionsComponent,
    EditProjectRevisionsComponent,
    ProjectRevisionsComponent,
    ProjectObjectsComponent,
    AddProjectObjectsComponent,
    EditProjectObjectsComponent,
    ProjectSheetsComponent,
    AddProjectSheetsComponent,
    EditProjectSheetsComponent,
    ProjectNotesComponent,
    AddProjectNotesComponent,
    EditProjectNotesComponent,
    ProjectMechComponent,
    AddProjectMechComponent,
    EditProjectMechComponent,
    ProjectRegisterSheetComponent,
    GeneratePdfComponent    ,
    GrdFilterPipe, 
    ManageComponent, 
    CreatesubscriptionComponent,
    LoginComponent,
    RegisterComponent,
    ProjectServiceDataComponent  ,
    CreatesubscriptionComponent ,
    ProjectServiceDataComponent,
    UploadTemplatesComponent  ,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    InviteUsersComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    //FileSaverModule,
    ReactiveFormsModule,
    FormsModule,
    Ng4LoadingSpinnerModule.forRoot(),
    NgxPaginationModule,
    RxReactiveFormsModule,


  ],
  providers: [ApiService, MessageService,DatePipe 
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }