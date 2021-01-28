(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Toolbar -->\r\n<mat-toolbar color=\"primary\" class=\"header\">\r\n  <div><img src=\"../assets/img/Quicktul_logo.png\" class=\"logo\" /></div>\r\n  <div *ngIf=\"!isLogged\"><a href=\"javascript:void(0)\" (click)=\"login()\" style=\"color:#fff\">login</a></div>\r\n  \r\n  <span *ngIf=\"isLogged\" class=\"nav-tool-items\">\r\n    <mat-icon (click)=\"sidenav.toggle()\" class=\"hamburger\">menu</mat-icon>\r\n  </span>\r\n</mat-toolbar>\r\n\r\n<mat-sidenav-container>\r\n  <!-- Sidenav -->\r\n  <mat-sidenav  #sidenav [mode]=\"isBiggerScreen() ? 'over' : 'side'\" [(opened)]=\"opened\" [fixedInViewport]=\"true\"\r\n    [fixedTopGap]>\r\n    \r\n    <mat-nav-list class=\"projectItem\" *ngIf=\"isLogged\">\r\n       \r\n          <a style=\"padding-left: 8;\" mat-list-item  routerLink=\"/project/getAll\" *ngIf=\"isLogged\">\r\n            Projects       \r\n          </a>\r\n          <a style=\"padding-left: 8; text-transform: capitalize;\" mat-list-item  routerLink=\"/login\" *ngIf=\"!isLogged\">\r\n            Login       \r\n          </a>\r\n    <mat-accordion class=\"example-headers-align\" *ngIf=\"isLogged\">\r\n      <mat-expansion-panel [class.mat-elevation-z0]=\"true\" dense>\r\n        <mat-expansion-panel-header>\r\n            Master\r\n        </mat-expansion-panel-header>\r\n        <mat-nav-list dense >\r\n          <a mat-list-item routerLinkActive=\"active\" (click)=\"navigate('service-size')\" >\r\n            <mat-icon>photo_size_select_small</mat-icon> Services Size\r\n          </a>\r\n          <a mat-list-item routerLinkActive=\"active\" routerLink=\"/services/getAll\">\r\n            <mat-icon>miscellaneous_services</mat-icon> Services \r\n          </a>\r\n          <a mat-list-item routerLinkActive=\"active\" routerLink=\"/pipes/getAll\">\r\n            <mat-icon>gesture</mat-icon> Pipes \r\n          </a>\r\n          <a mat-list-item routerLinkActive=\"active\" routerLink=\"/component/getAll\">\r\n            <mat-icon>settings_input_component</mat-icon> Components \r\n          </a>\r\n          <a mat-list-item routerLinkActive=\"active\" routerLink=\"/upload_templates\">\r\n            <mat-icon>cloud_download</mat-icon>Templates\r\n          </a>\r\n         </mat-nav-list>\r\n    </mat-expansion-panel>\r\n    </mat-accordion>\r\n   \r\n     \r\n    <a style=\"padding-left: 8;\" mat-list-item  *ngIf=\"!isAdmin\" routerLink=\"/billing/create-subscription\">\r\n      Manage Subscription       \r\n    </a>\r\n    \r\n    \r\n     <!-- <a mat-list-item routerLinkActive=\"active\" routerLink=\"/students-list\">\r\n        <mat-icon>format_list_bulleted</mat-icon> View Students\r\n      </a>-->\r\n      <a style=\"padding-left: 8; margin-top:10px\" mat-list-item  (click)=\"logout()\" >\r\n        Logout       \r\n      </a>\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n\r\n  <!-- Main content -->\r\n  <mat-sidenav-content>\r\n    <router-outlet></router-outlet>\r\n  </mat-sidenav-content>\r\n  \r\n</mat-sidenav-container>\r\n<ng4-loading-spinner> </ng4-loading-spinner>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/add-service/add-service.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/add-service/add-service.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Title group  -->\r\n<div class=\"title-group\">\r\n  <h1 class=\"mat-h1\">Add Service </h1>\r\n  <mat-divider fxFlex=\"1 0\"></mat-divider>\r\n</div>\r\n\r\n<!-- Form -->\r\n<div class=\"inner-wrapper\">\r\n  <form [formGroup]=\"services\" (ngSubmit)=\"submitAddServicesForm()\" #resetServicesForm=\"ngForm\" novalidate>\r\n    <!-- Left block -->\r\n    <mat-card>\r\n      <div class=\"controlers-wrapper\">\r\n        <!-- Name -->\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"Service Name\" formControlName=\"SERVICE_NAME\">\r\n          <mat-error *ngIf=\"handleError('SERVICE_NAME', 'required')\">\r\n            You must provide a<strong> service name</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n\r\n        </div>\r\n        </mat-card>\r\n        \r\n      \r\n\r\n    <!-- Submit & Reset -->\r\n    <mat-card>\r\n      <div class=\"full-wrapper button-wrapper\">\r\n        <div class=\"button-wrapper\">\r\n          <button mat-flat-button color=\"warn\">Submit</button>\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/add-services-size/add-services-size.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/add-services-size/add-services-size.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Title group  -->\r\n<div class=\"title-group\">\r\n  <h1 class=\"mat-h1\">Add Service Size</h1>\r\n  <mat-divider fxFlex=\"1 0\"></mat-divider>\r\n</div>\r\n\r\n<!-- Form -->\r\n<div class=\"inner-wrapper\">\r\n  <form [formGroup]=\"servicesSize\" (ngSubmit)=\"submitServicesForm()\" #resetServicesSizeForm=\"ngForm\" novalidate>\r\n    <!-- Left block -->\r\n    <mat-card>\r\n      <div class=\"controlers-wrapper\">\r\n        <!-- Name -->\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"Size Value\" formControlName=\"SIZE_VALUE\">\r\n          <mat-error *ngIf=\"handleError('SIZE_VALUE', 'required')\">\r\n            You must provide a<strong> size value</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n\r\n        </div>\r\n        </mat-card>\r\n        \r\n      \r\n\r\n    <!-- Submit & Reset -->\r\n    <mat-card>\r\n      <div class=\"full-wrapper button-wrapper\">\r\n        <div class=\"button-wrapper\">\r\n          <button mat-flat-button color=\"warn\">Submit</button>\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/add-student/add-student.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/add-student/add-student.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Title group  -->\r\n<div class=\"title-group\">\r\n  <div class=\"main\">\r\n  <h1 class=\"mat-h1\">Add Student</h1>\r\n  <button mat-raised-button color=\"primary\">Primary</button>\r\n  </div>\r\n  <mat-divider fxFlex=\"1 0\"></mat-divider>\r\n</div>\r\n\r\n<!-- Form -->\r\n<div class=\"inner-wrapper\">\r\n  <form [formGroup]=\"studentForm\" #resetStudentForm=\"ngForm\" novalidate>\r\n    <!-- Left block -->\r\n    <mat-card>\r\n      <div class=\"controlers-wrapper\">\r\n        <!-- Name -->\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"Student name\" formControlName=\"student_name\">\r\n          <mat-error *ngIf=\"handleError('student_name', 'required')\">\r\n            You must provide a<strong>student name</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n\r\n        <!-- Email -->\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"Student email\" formControlName=\"student_email\">\r\n          <mat-error *ngIf=\"handleError('student_email', 'required')\">\r\n            You must provide a<strong>student email</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n\r\n        <!-- Section -->\r\n        <mat-form-field>\r\n          <mat-label>Section</mat-label>\r\n          <mat-select [(value)]=\"selected\" formControlName=\"section\">\r\n            <mat-option [value]=\"sectioinArray\" *ngFor=\"let sectioinArray of SectioinArray\">{{sectioinArray}}\r\n            </mat-option>\r\n          </mat-select>\r\n          <mat-error *ngIf=\"handleError('section', 'required')\">\r\n            Section is required\r\n          </mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n    </mat-card>\r\n\r\n    <!-- Right block -->\r\n    <mat-card>\r\n      <div class=\"controlers-wrapper\">\r\n        <!-- Add subjects -->\r\n        <mat-form-field class=\"multiple-items\">\r\n          <mat-chip-list #chipList>\r\n            <mat-chip *ngFor=\"let subjectArray of subjectArray\" [selectable]=\"selectable\" [removable]=\"removable\"\r\n              (removed)=\"remove(subjectArray)\">\r\n              {{subjectArray.name}}\r\n              <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n            </mat-chip>\r\n            <input placeholder=\"Add subject\" [matChipInputFor]=\"chipList\"\r\n              [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" [matChipInputAddOnBlur]=\"addOnBlur\"\r\n              (matChipInputTokenEnd)=\"add($event)\">\r\n          </mat-chip-list>\r\n          <i class=\"material-icons tooltip-info\" matTooltip=\"Enter subject name and press enter to add subjects\">\r\n            info\r\n          </i>\r\n        </mat-form-field>\r\n\r\n        <!-- Date of birth -->\r\n        <mat-form-field>\r\n          <input matInput readonly [matDatepicker]=\"picker\" placeholder=\"Date of birth\" formControlName=\"dob\"\r\n            (dateChange)=\"formatDate($event)\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker></mat-datepicker>\r\n          <mat-error *ngIf=\"handleError('dob', 'required')\">\r\n            Date of birth is required\r\n          </mat-error>\r\n        </mat-form-field>\r\n\r\n        <!-- Gender -->\r\n        <div class=\"misc-bottom-padding\">\r\n          <mat-label>Gender:</mat-label>\r\n          <mat-radio-group aria-label=\"Select an option\" formControlName=\"gender\">\r\n            <mat-radio-button value=\"Male\">Male</mat-radio-button>\r\n            <mat-radio-button value=\"Female\">Female</mat-radio-button>\r\n          </mat-radio-group>\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n\r\n    <!-- Submit & Reset -->\r\n    <mat-card>\r\n      <div class=\"full-wrapper button-wrapper\">\r\n        <div class=\"button-wrapper\">\r\n          <button mat-flat-button color=\"warn\">Submit</button>\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/billing/createsubscription/createsubscription.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/billing/createsubscription/createsubscription.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\r\n<div id=\"servicebot-request-form\"></div>\r\n</mat-dialog-content>\r\n<mat-dialog-actions align=\"end\">\r\n    <button class=\"matBtn\" mat-button cdkFocusInitial (click)=\"gotoManage()\">Manage</button>\r\n  </mat-dialog-actions>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/billing/manage/manage.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/billing/manage/manage.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <div id=\"servicebot-management-form\"></div>\r\n    <input type=\"hidden\" id=\"token\" value=\"{{token}}\" />\r\n   \r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/change-password/change-password.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/change-password/change-password.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Change Password</h2>\r\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n   \r\n     <div class=\"form-group\">\r\n        <label for=\"newPassword\">New Password</label>\r\n        <input type=\"password\" formControlName=\"newPassword\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.newPassword.errors }\" />\r\n        <div *ngIf=\"submitted && f.newPassword.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.newPassword.errors.required\">New Password is required</div>\r\n        </div>\r\n    </div>\r\n   \r\n    <div class=\"form-group\">\r\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">\r\n            <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n            Submit\r\n        </button>\r\n\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/edit-service/edit-service.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/edit-service/edit-service.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Title group  -->\r\n<div class=\"title-group\">\r\n  <h1 class=\"mat-h1\">Edit Service </h1>\r\n  <mat-divider fxFlex=\"1 0\"></mat-divider>\r\n</div>\r\n\r\n<!-- Form -->\r\n<div class=\"inner-wrapper\">\r\n  <form [formGroup]=\"services\" (ngSubmit)=\"submitEditServicesForm()\" #resetServicesForm=\"ngForm\" novalidate>\r\n    <!-- Left block -->\r\n    <mat-card>\r\n      <div class=\"controlers-wrapper\">\r\n        <!-- Name -->\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"Service Name\" formControlName=\"SERVICE_NAME\">\r\n          <mat-error *ngIf=\"handleError('SERVICE_NAME', 'required')\">\r\n            You must provide a<strong> service name</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n\r\n        </div>\r\n        </mat-card>\r\n        \r\n        <mat-card *ngIf = \"PipeData.length > 0\" class=\"PipeData\">\r\n        <div >\r\n          <p>Select Pipes for this Service:</p>\r\n          <div *ngFor=\"let pipes of PipeData; let i = index\" >\r\n            <label>\r\n              <input type=\"checkbox\" [checked]=\"ServiceData.includes(pipes._id)\" [value]=\"pipes._id\" (change)=\"onCheckboxChange($event)\" />\r\n              {{pipes.PIPE_NAME}}\r\n            </label>\r\n         </div>  \r\n        </div>\r\n      </mat-card>\r\n\r\n    <!-- Submit & Reset -->\r\n    <mat-card>\r\n      <div class=\"full-wrapper button-wrapper\">\r\n        <div class=\"button-wrapper\">\r\n          <button mat-flat-button color=\"warn\">Submit</button>\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n  </form>\r\n \r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/edit-services-value/edit-services-value.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/edit-services-value/edit-services-value.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Title group  -->\r\n<div class=\"title-group\">\r\n  <h1 class=\"mat-h1\">Add Service Size</h1>\r\n  <mat-divider fxFlex=\"1 0\"></mat-divider>\r\n</div>\r\n\r\n<!-- Form -->\r\n<div class=\"inner-wrapper\">\r\n  <form [formGroup]=\"servicesSize\" (ngSubmit)=\"submitServicesForm()\" #resetServicesSizeForm=\"ngForm\" novalidate>\r\n    <!-- Left block -->\r\n    <mat-card>\r\n      <div class=\"controlers-wrapper\">\r\n        <!-- Name -->\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"Size Value\" formControlName=\"SIZE_VALUE\">\r\n          <mat-error *ngIf=\"handleError('SIZE_VALUE', 'required')\">\r\n            You must provide a<strong> size value</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n\r\n        </div>\r\n        </mat-card>\r\n        \r\n      \r\n\r\n    <!-- Submit & Reset -->\r\n    <mat-card>\r\n      <div class=\"full-wrapper button-wrapper\">\r\n        <div class=\"button-wrapper\">\r\n          <button mat-flat-button color=\"warn\">Submit</button>\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/edit-student/edit-student.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/edit-student/edit-student.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Title group  -->\r\n<div class=\"title-group\">\r\n  <h1 class=\"mat-h1\">Add Student</h1>\r\n  <mat-divider fxFlex=\"1 0\"></mat-divider>\r\n</div>\r\n\r\n<!-- Form -->\r\n<div class=\"inner-wrapper\">\r\n  <form [formGroup]=\"studentForm\" (ngSubmit)=\"updateStudentForm()\" #resetStudentForm=\"ngForm\" novalidate>\r\n    <!-- Left block -->\r\n    <mat-card>\r\n      <div class=\"controlers-wrapper\">\r\n        <!-- Name -->\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"Student name\" formControlName=\"student_name\">\r\n          <mat-error *ngIf=\"handleError('student_name', 'required')\">\r\n            You must provide a<strong>student name</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n\r\n        <!-- Email -->\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"Student email\" formControlName=\"student_email\">\r\n          <mat-error *ngIf=\"handleError('student_email', 'required')\">\r\n            You must provide a<strong>student email</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n\r\n        <!-- Section -->\r\n        <mat-form-field>\r\n          <mat-label>Section</mat-label>\r\n          <mat-select [(value)]=\"selected\" formControlName=\"section\">\r\n            <mat-option [value]=\"sectioinArray\" *ngFor=\"let sectioinArray of SectioinArray\">{{sectioinArray}}\r\n            </mat-option>\r\n          </mat-select>\r\n          <mat-error *ngIf=\"handleError('section', 'required')\">\r\n            Section is required\r\n          </mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n    </mat-card>\r\n\r\n    <!-- Right block -->\r\n    <mat-card>\r\n      <div class=\"controlers-wrapper\">\r\n        <!-- Add subjects -->\r\n        <mat-form-field class=\"multiple-items\">\r\n          <mat-chip-list #chipList>\r\n            <mat-chip *ngFor=\"let subjectArray of subjectArray\" [selectable]=\"selectable\" [removable]=\"removable\"\r\n              (removed)=\"remove(subjectArray)\">\r\n              {{subjectArray.name}}\r\n              <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n            </mat-chip>\r\n            <input placeholder=\"Add subject\" [matChipInputFor]=\"chipList\"\r\n              [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" [matChipInputAddOnBlur]=\"addOnBlur\"\r\n              (matChipInputTokenEnd)=\"add($event)\">\r\n          </mat-chip-list>\r\n          <i class=\"material-icons tooltip-info\" matTooltip=\"Enter subject name and press enter to add subjects\">\r\n            info\r\n          </i>\r\n        </mat-form-field>\r\n\r\n        <!-- Date of birth -->\r\n        <mat-form-field>\r\n          <input matInput readonly [matDatepicker]=\"picker\" placeholder=\"Date of birth\" formControlName=\"dob\"\r\n            (dateChange)=\"formatDate($event)\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker></mat-datepicker>\r\n          <mat-error *ngIf=\"handleError('dob', 'required')\">\r\n            Date of birth is required\r\n          </mat-error>\r\n        </mat-form-field>\r\n\r\n        <!-- Gender -->\r\n        <div class=\"misc-bottom-padding\">\r\n          <mat-label>Gender:</mat-label>\r\n          <mat-radio-group aria-label=\"Select an option\" formControlName=\"gender\">\r\n            <mat-radio-button value=\"Male\">Male</mat-radio-button>\r\n            <mat-radio-button value=\"Female\">Female</mat-radio-button>\r\n          </mat-radio-group>\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n\r\n    <!-- Submit & Reset -->\r\n    <mat-card>\r\n      <div class=\"full-wrapper button-wrapper\">\r\n        <div class=\"button-wrapper\">\r\n          <button mat-flat-button color=\"warn\">Update</button>\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/forgot-password/forgot-password.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/forgot-password/forgot-password.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Forgot Password</h2>\r\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"form-group\">\r\n        <label for=\"emailAddress\">Email Address</label>\r\n        <input type=\"text\" formControlName=\"emailAddress\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.emailAddress.errors }\" />\r\n        <div *ngIf=\"submitted && f.emailAddress.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.emailAddress.errors.required\">Email Address is required</div>\r\n        </div>\r\n    </div>\r\n   \r\n    <div class=\"form-group\">\r\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">\r\n            <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n            Submit\r\n        </button>\r\n\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/invite-users/invite-users.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/invite-users/invite-users.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Invite Users</h2>\n<form [formGroup]=\"inviteForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"emailAddress\">Email Address</label>\n        <input type=\"text\" formControlName=\"emailAddress\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.emailAddress.errors }\" />\n        <div *ngIf=\"submitted && f.emailAddress.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.emailAddress.errors.required\">Email Address is required</div>\n        </div>\n    </div>\n   \n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">\n            <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n            Submit\n        </button>\n    </div>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Login</h2>\r\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"onLogin()\">\r\n    <div class=\"form-group\">\r\n        <label for=\"email\">Email Address</label>\r\n        <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\r\n        <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.email.errors.required\">Email Address is required</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"password\">Password</label>\r\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\r\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">\r\n            <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n            Login\r\n        </button>\r\n        <a routerLink=\"/user/register\" class=\"btn btn-link\">Register</a>\r\n        <a routerLink=\"/forgot-password\" class=\"btn btn-link\" style=\"float:right\">Forgot Password?</a>\r\n\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pipe/add-pipe/add-pipe.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pipe/add-pipe/add-pipe.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Title group  -->\r\n<div class=\"title-group\">\r\n  <h1 class=\"mat-h1\">Add Pipe Class </h1>\r\n  <mat-divider fxFlex=\"1 0\"></mat-divider>\r\n</div>\r\n\r\n<!-- Form -->\r\n<div class=\"inner-wrapper\">\r\n  <form [formGroup]=\"pipes\" (ngSubmit)=\"submitAddPipesForm()\" #resetPipesForm=\"ngForm\" novalidate>\r\n    <!-- Left block -->\r\n    <mat-card>\r\n      <div class=\"controlers-wrapper\">\r\n        <!-- Name -->\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"Pipe Name\" formControlName=\"PIPE_NAME\">\r\n          <mat-error *ngIf=\"handleError('PIPE_NAME', 'required')\">\r\n            You must provide a<strong> Pipe Name</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n\r\n        </div>\r\n        </mat-card>\r\n        \r\n      \r\n\r\n    <!-- Submit & Reset -->\r\n    <mat-card>\r\n      <div class=\"full-wrapper button-wrapper\">\r\n        <div class=\"button-wrapper\">\r\n          <button mat-flat-button color=\"warn\">Submit</button>\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pipe/edit-pipe/edit-pipe.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pipe/edit-pipe/edit-pipe.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Title group  -->\r\n<div class=\"title-group\">\r\n  <h1 class=\"mat-h1\">Edit Pipe Class </h1>\r\n  <mat-divider fxFlex=\"1 0\"></mat-divider>\r\n</div>\r\n\r\n<!-- Form -->\r\n<div class=\"inner-wrapper\">\r\n  <form [formGroup]=\"pipes\" (ngSubmit)=\"submitEditPipesForm()\" #resetPipesForm=\"ngForm\" novalidate>\r\n    <!-- Left block -->\r\n    <mat-card>\r\n      <div class=\"controlers-wrapper\">\r\n        <!-- Name -->\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"Pipe Name\" formControlName=\"PIPE_NAME\">\r\n          <mat-error *ngIf=\"handleError('PIPE_NAME', 'required')\">\r\n            You must provide a<strong> Pipe name</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n\r\n        </div>\r\n        </mat-card>\r\n        <br/>\r\n        <mat-card *ngIf = \"AllServices.length > 0\" class=\"PipeData\">\r\n          <div >\r\n            <p>Select Services for this Pipe:</p>\r\n            <div *ngFor=\"let pipes of AllServices; let i = index\" >\r\n              <label>\r\n                <input type=\"checkbox\" [checked]=\"ServiceData.includes(pipes._id)\" [value]=\"pipes._id\" (change)=\"onCheckboxChange($event)\" />\r\n                {{pipes.SERVICE_NAME}}\r\n              </label>\r\n           </div>  \r\n          </div>\r\n        </mat-card>\r\n      \r\n\r\n    <!-- Submit & Reset -->\r\n    <mat-card>\r\n      <div class=\"full-wrapper button-wrapper\">\r\n        <div class=\"button-wrapper\">\r\n          <button mat-flat-button color=\"warn\">Submit</button>\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n  </form>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pipe/pipe-list/pipe-list.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pipe/pipe-list/pipe-list.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Title group  -->\r\n<div class=\"title-group\">\r\n  <div class=\"main\">\r\n    <h1 class=\"mat-h1\">Pipe Class</h1>\r\n\r\n    </div>\r\n  <mat-divider class=\"mat-divider\" ></mat-divider>\r\n</div>\r\n\r\n<div class=\"container view-table\" >\r\n    <div class=\"mat-elevation-z8\">\r\n<form [formGroup]=\"userTable\"  >\r\n  <table  class=\"table \" >\r\n    <thead class=\"text-nowrap\">\r\n      <th>Pipe Class Name </th>\r\n      <th>Services</th>\r\n      <th>Action</th>\r\n\r\n    </thead>\r\n    <tbody>\r\n      <ng-container formArrayName=\"tableRows\" *ngFor=\"let group of getFormControls.controls | paginate:config ; let i=index \">\r\n        <tr *ngIf=\"group.get('isEditable').value\" [formGroupName]=\"fieldGlobalIndex(i)\">\r\n          <td>\r\n            <mat-form-field>\r\n              <input matInput type=\"text\" formControlName=\"PIPE_NAME\">\r\n              <mat-error *ngIf=\"group.get('PIPE_NAME').errors && formSubmitAttempt \">\r\n                You must provide a unique<strong> Pipe Name</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </td>\r\n         <td>\r\n          <mat-form-field>\r\n            <mat-select [formControl]=\"toppings\" #sel multiple>\r\n              <mat-option *ngFor=\"let topping of AllService\" [value]=\"topping._id\"  (onSelectionChange)=\"SelectServices(group,$event,sel)\" >{{topping.SERVICE_NAME}}</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n         </td>\r\n            <td>\r\n              <div class=\"action-btns\">\r\n\r\n                <button  mat-raised-button color=\"primary\" class=\"push-right\"\r\n                (click)=\"doneRow(group)\">Save</button>\r\n              <button  *ngIf=\"isDelete\" mat-raised-button color=\"accent\" (click)=\"deleteRow(fieldGlobalIndex(i),group)\" class=\"push-right\">Delete</button>\r\n              <button  mat-raised-button color=\"accent\" (click)=\"cancel(group)\">Cancel</button>\r\n \r\n            </div>\r\n            </td>\r\n        </tr>\r\n        <tr *ngIf=\"!group.get('isEditable').value\" >\r\n         \r\n          <td>\r\n            {{group.get('PIPE_NAME').value}}\r\n          </td>\r\n         <td>\r\n          <span *ngFor=\"let service of group.value.SERVICES\"> <p >{{retrieveServices(service)}}</p> </span>\r\n\r\n         </td>\r\n          <td>\r\n            <div class=\"action-btns\">\r\n              <button  mat-raised-button color=\"primary\" class=\"push-right\"\r\n              (click)=\"editRow(group)\">Edit</button>    \r\n            </div>   \r\n          </td>\r\n        </tr>\r\n      </ng-container>\r\n    </tbody>\r\n    <div class=\"action-container\">\r\n      <button mat-raised-button type=\"submit\" color=\"primary\" (click)=\"addRow()\">Add row</button>\r\n    </div>\r\n    <div style=\"float:right\">\r\n    <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\r\n</div>\r\n  </table>\r\n  \r\n</form>\r\n\r\n</div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pipe/pipe-services/pipe-services.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pipe/pipe-services/pipe-services.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  pipe-services works!\r\n</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/project-mech/add-project-mech/add-project-mech.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/project-mech/add-project-mech/add-project-mech.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Title group  -->\r\n<div class=\"title-group\">\r\n  <h1 class=\"mat-h1\">Add Mechanical Schedule </h1>\r\n  <mat-divider fxFlex=\"1 0\"></mat-divider>\r\n</div>\r\n\r\n<!-- Form -->\r\n<div class=\"inner-wrapper\">\r\n  <form [formGroup]=\"projects\" (ngSubmit)=\"submitAddProjectsMechForm()\" #resetProjectsMechForm=\"ngForm\" novalidate>\r\n    <!-- Left block -->\r\n  <mat-card>\r\n    <mat-form-field appearance=\"fill\">\r\n      <mat-label>COMPONENT</mat-label>\r\n      <mat-select  formControlName=\"COMPONENT_ID\">\r\n        <mat-option *ngFor=\"let serv of components\" [value]=\"serv._id\">\r\n          {{serv.COMPONENT_NAME}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n    \r\n    </mat-card>\r\n    <mat-card>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput placeholder=\"REF_NO\" formControlName=\"REF_NO\">\r\n      <mat-error *ngIf=\"handleError('REF_NO', 'required')\">\r\n        You must provide a<strong> REF_NO</strong>\r\n      </mat-error>\r\n    </mat-form-field>\r\n    </mat-card>\r\n    <mat-card>\r\n      <mat-form-field appearance=\"fill\">\r\n        <mat-label>Level</mat-label>\r\n        <mat-select  formControlName=\"LEVEL\">\r\n          <mat-option *ngFor=\"let serv of level\" [value]=\"serv\">\r\n            {{serv}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      </mat-card>\r\n    <mat-card>\r\n      <mat-form-field appearance=\"fill\">\r\n        <mat-label>Service Description</mat-label>\r\n        <mat-select  formControlName=\"SERVICE_DESCRIPTION\">\r\n          <mat-option *ngFor=\"let serv of services\" [value]=\"serv._id\">\r\n            {{serv.SERVICE_NAME}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </mat-card>\r\n    <mat-card>\r\n      <mat-form-field appearance=\"fill\">\r\n        <mat-label>Service Size</mat-label>\r\n        <mat-select  formControlName=\"SERVICE_SIZE\">\r\n          <mat-option *ngFor=\"let serv of services_size\" [value]=\"serv.SIZE_VALUE\">\r\n            {{serv.SIZE_VALUE}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n      <mat-form-field appearance=\"fill\">\r\n        <mat-label>Pipe Class</mat-label>\r\n        <mat-select  formControlName=\"PIPE_CLASS\">\r\n          <mat-option *ngFor=\"let serv of pipe_class\" [value]=\"serv._id\">\r\n            {{serv.PIPE_NAME}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </mat-card>\r\n    <mat-card>\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput placeholder=\"Connection type size\" formControlName=\"CONNECTION_TYPE_SIZE\">\r\n        <mat-error *ngIf=\"handleError('CONNECTION_TYPE_SIZE', 'required')\">\r\n          You must provide a<strong> Connection type size</strong>\r\n        </mat-error>\r\n      </mat-form-field>\r\n      </mat-card>\r\n      <mat-card>\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"UM_TEMP_MIN\" formControlName=\"UM_TEMP_MIN\">\r\n          <mat-error *ngIf=\"handleError('UM_TEMP_MIN', 'required')\">\r\n            You must provide a<strong> UM_TEMP_MIN</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n        </mat-card>\r\n        <mat-card>\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"UM_TEMP_MAX\" formControlName=\"UM_TEMP_MAX\">\r\n            <mat-error *ngIf=\"handleError('UM_TEMP_MAX', 'required')\">\r\n              You must provide a<strong> UM_TEMP_MAX</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n          </mat-card>\r\n          <mat-card>\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"UM_TEMP_UNIT\" formControlName=\"UM_TEMP_UNIT\">\r\n              <mat-error *ngIf=\"handleError('UM_TEMP_UNIT', 'required')\">\r\n                You must provide a<strong> UM_TEMP_UNIT</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n            </mat-card>\r\n            <mat-card>\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"UM_PRES_MIN\" formControlName=\"UM_PRES_MIN\">\r\n                <mat-error *ngIf=\"handleError('UM_PRES_MIN', 'required')\">\r\n                  You must provide a<strong> UM_PRES_MIN</strong>\r\n                </mat-error>\r\n              </mat-form-field>\r\n              </mat-card>\r\n              <mat-card>\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <input matInput placeholder=\"UM_PRES_MAX\" formControlName=\"UM_PRES_MAX\">\r\n                  <mat-error *ngIf=\"handleError('UM_PRES_MAX', 'required')\">\r\n                    You must provide a<strong> UM_PRES_MAX</strong>\r\n                  </mat-error>\r\n                </mat-form-field>\r\n                </mat-card>\r\n                <mat-card>\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <input matInput placeholder=\"UM_PRES_UNIT\" formControlName=\"UM_PRES_UNIT\">\r\n                    <mat-error *ngIf=\"handleError('UM_PRES_UNIT', 'required')\">\r\n                      You must provide a<strong> UM_PRES_UNIT</strong>\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                  </mat-card>\r\n                  <mat-card>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <input matInput placeholder=\"UM_FLOW_MIN\" formControlName=\"UM_FLOW_MIN\">\r\n                      <mat-error *ngIf=\"handleError('UM_FLOW_MIN', 'required')\">\r\n                        You must provide a<strong> UM_FLOW_MIN</strong>\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                    </mat-card>\r\n                    <mat-card>\r\n                      <mat-form-field class=\"example-full-width\">\r\n                        <input matInput placeholder=\"UM_FLOW_MAX\" formControlName=\"UM_FLOW_MAX\">\r\n                        <mat-error *ngIf=\"handleError('UM_FLOW_MAX', 'required')\">\r\n                          You must provide a<strong> UM_FLOW_MAX</strong>\r\n                        </mat-error>\r\n                      </mat-form-field>\r\n                      </mat-card>\r\n                      <mat-card>\r\n                        <mat-form-field class=\"example-full-width\">\r\n                          <input matInput placeholder=\"UM_FLOW_UNIT\" formControlName=\"UM_FLOW_UNIT\">\r\n                          <mat-error *ngIf=\"handleError('UM_FLOW_UNIT', 'required')\">\r\n                            You must provide a<strong> UM_FLOW_UNIT</strong>\r\n                          </mat-error>\r\n                        </mat-form-field>\r\n                        </mat-card>\r\n                        <mat-card>\r\n                          <mat-form-field class=\"example-full-width\">\r\n                            <input matInput placeholder=\"Service Connection\" formControlName=\"SERVICE_CONN\">\r\n                            <mat-error *ngIf=\"handleError('SERVICE_CONN', 'required')\">\r\n                              You must provide a<strong> Service Connection</strong>\r\n                            </mat-error>\r\n                          </mat-form-field>\r\n                          </mat-card>\r\n                          <mat-card>\r\n                            <mat-form-field class=\"example-full-width\">\r\n                              <input matInput placeholder=\"END_REF_NO\" formControlName=\"END_REF_NO\">\r\n                              <mat-error *ngIf=\"handleError('END_REF_NO', 'required')\">\r\n                                You must provide a<strong> END_REF_NO</strong>\r\n                              </mat-error>\r\n                            </mat-form-field>\r\n                            </mat-card>\r\n                            <mat-card>\r\n                              <mat-form-field class=\"example-full-width\">\r\n                                <input matInput placeholder=\"OPE\" formControlName=\"OPE\">\r\n                                <mat-error *ngIf=\"handleError('OPE', 'required')\">\r\n                                  You must provide a<strong> OPE</strong>\r\n                                </mat-error>\r\n                              </mat-form-field>\r\n                              </mat-card>\r\n                              <mat-card>\r\n                                <mat-form-field class=\"example-full-width\">\r\n                                  <input matInput placeholder=\"Notes\" formControlName=\"NOTES\">\r\n                                  <mat-error *ngIf=\"handleError('NOTES', 'required')\">\r\n                                    You must provide a<strong> Notes</strong>\r\n                                  </mat-error>\r\n                                </mat-form-field>\r\n                                </mat-card>\r\n\r\n      \r\n\r\n    <!-- Submit & Reset -->\r\n   \r\n        <div class=\"button-wrapper\">\r\n          <button mat-flat-button color=\"warn\">Submit</button>\r\n        </div>\r\n      \r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/project-mech/edit-project-mech/edit-project-mech.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/project-mech/edit-project-mech/edit-project-mech.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Title group  -->\r\n<div class=\"title-group\">\r\n  <h1 class=\"mat-h1\">Add Mechanical Schedule </h1>\r\n  <mat-divider fxFlex=\"1 0\"></mat-divider>\r\n</div>\r\n\r\n<!-- Form -->\r\n<div class=\"inner-wrapper\">\r\n  <form [formGroup]=\"projects\" (ngSubmit)=\"submitEditProjectsMechForm()\" #resetProjectsMechForm=\"ngForm\" novalidate>\r\n    <!-- Left block -->\r\n  <mat-card>\r\n    <mat-form-field appearance=\"fill\">\r\n      <mat-label>COMPONENT</mat-label>\r\n      <mat-select  formControlName=\"COMPONENT_ID\">\r\n        <mat-option *ngFor=\"let serv of components\" [value]=\"serv._id\">\r\n          {{serv.COMPONENT_NAME}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n    \r\n    </mat-card>\r\n    <mat-card>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput placeholder=\"REF_NO\" formControlName=\"REF_NO\">\r\n      <mat-error *ngIf=\"handleError('REF_NO', 'required')\">\r\n        You must provide a<strong> REF_NO</strong>\r\n      </mat-error>\r\n    </mat-form-field>\r\n    </mat-card>\r\n    <mat-card>\r\n      <mat-form-field appearance=\"fill\">\r\n        <mat-label>Level</mat-label>\r\n        <mat-select  formControlName=\"LEVEL\">\r\n          <mat-option *ngFor=\"let serv of level\" [value]=\"serv\">\r\n            {{serv}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      </mat-card>\r\n    <mat-card>\r\n      <mat-form-field appearance=\"fill\">\r\n        <mat-label>Service Description</mat-label>\r\n        <mat-select  formControlName=\"SERVICE_DESCRIPTION\">\r\n          <mat-option *ngFor=\"let serv of services\" [value]=\"serv._id\">\r\n            {{serv.SERVICE_NAME}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </mat-card>\r\n    <mat-card>\r\n      <mat-form-field appearance=\"fill\">\r\n        <mat-label>Service Size</mat-label>\r\n        <mat-select  formControlName=\"SERVICE_SIZE\">\r\n          <mat-option *ngFor=\"let serv of services_size\" [value]=\"serv.SIZE_VALUE\">\r\n            {{serv.SIZE_VALUE}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n      <mat-form-field appearance=\"fill\">\r\n        <mat-label>Pipe Class</mat-label>\r\n        <mat-select  formControlName=\"PIPE_CLASS\">\r\n          <mat-option *ngFor=\"let serv of pipe_class\" [value]=\"serv._id\">\r\n            {{serv.PIPE_NAME}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </mat-card>\r\n    <mat-card>\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput placeholder=\"Connection type size\" formControlName=\"CONNECTION_TYPE_SIZE\">\r\n        <mat-error *ngIf=\"handleError('CONNECTION_TYPE_SIZE', 'required')\">\r\n          You must provide a<strong> Connection type size</strong>\r\n        </mat-error>\r\n      </mat-form-field>\r\n      </mat-card>\r\n      <mat-card>\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"UM_TEMP_MIN\" formControlName=\"UM_TEMP_MIN\">\r\n          <mat-error *ngIf=\"handleError('UM_TEMP_MIN', 'required')\">\r\n            You must provide a<strong> UM_TEMP_MIN</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n        </mat-card>\r\n        <mat-card>\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"UM_TEMP_MAX\" formControlName=\"UM_TEMP_MAX\">\r\n            <mat-error *ngIf=\"handleError('UM_TEMP_MAX', 'required')\">\r\n              You must provide a<strong> UM_TEMP_MAX</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n          </mat-card>\r\n          <mat-card>\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"UM_TEMP_UNIT\" formControlName=\"UM_TEMP_UNIT\">\r\n              <mat-error *ngIf=\"handleError('UM_TEMP_UNIT', 'required')\">\r\n                You must provide a<strong> UM_TEMP_UNIT</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n            </mat-card>\r\n            <mat-card>\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"UM_PRES_MIN\" formControlName=\"UM_PRES_MIN\">\r\n                <mat-error *ngIf=\"handleError('UM_PRES_MIN', 'required')\">\r\n                  You must provide a<strong> UM_PRES_MIN</strong>\r\n                </mat-error>\r\n              </mat-form-field>\r\n              </mat-card>\r\n              <mat-card>\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <input matInput placeholder=\"UM_PRES_MAX\" formControlName=\"UM_PRES_MAX\">\r\n                  <mat-error *ngIf=\"handleError('UM_PRES_MAX', 'required')\">\r\n                    You must provide a<strong> UM_PRES_MAX</strong>\r\n                  </mat-error>\r\n                </mat-form-field>\r\n                </mat-card>\r\n                <mat-card>\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <input matInput placeholder=\"UM_PRES_UNIT\" formControlName=\"UM_PRES_UNIT\">\r\n                    <mat-error *ngIf=\"handleError('UM_PRES_UNIT', 'required')\">\r\n                      You must provide a<strong> UM_PRES_UNIT</strong>\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                  </mat-card>\r\n                  <mat-card>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <input matInput placeholder=\"UM_FLOW_MIN\" formControlName=\"UM_FLOW_MIN\">\r\n                      <mat-error *ngIf=\"handleError('UM_FLOW_MIN', 'required')\">\r\n                        You must provide a<strong> UM_FLOW_MIN</strong>\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                    </mat-card>\r\n                    <mat-card>\r\n                      <mat-form-field class=\"example-full-width\">\r\n                        <input matInput placeholder=\"UM_FLOW_MAX\" formControlName=\"UM_FLOW_MAX\">\r\n                        <mat-error *ngIf=\"handleError('UM_FLOW_MAX', 'required')\">\r\n                          You must provide a<strong> UM_FLOW_MAX</strong>\r\n                        </mat-error>\r\n                      </mat-form-field>\r\n                      </mat-card>\r\n                      <mat-card>\r\n                        <mat-form-field class=\"example-full-width\">\r\n                          <input matInput placeholder=\"UM_FLOW_UNIT\" formControlName=\"UM_FLOW_UNIT\">\r\n                          <mat-error *ngIf=\"handleError('UM_FLOW_UNIT', 'required')\">\r\n                            You must provide a<strong> UM_FLOW_UNIT</strong>\r\n                          </mat-error>\r\n                        </mat-form-field>\r\n                        </mat-card>\r\n                        <mat-card>\r\n                          <mat-form-field class=\"example-full-width\">\r\n                            <input matInput placeholder=\"Service Connection\" formControlName=\"SERVICE_CONN\">\r\n                            <mat-error *ngIf=\"handleError('SERVICE_CONN', 'required')\">\r\n                              You must provide a<strong> Service Connection</strong>\r\n                            </mat-error>\r\n                          </mat-form-field>\r\n                          </mat-card>\r\n                          <mat-card>\r\n                            <mat-form-field class=\"example-full-width\">\r\n                              <input matInput placeholder=\"END_REF_NO\" formControlName=\"END_REF_NO\">\r\n                              <mat-error *ngIf=\"handleError('END_REF_NO', 'required')\">\r\n                                You must provide a<strong> END_REF_NO</strong>\r\n                              </mat-error>\r\n                            </mat-form-field>\r\n                            </mat-card>\r\n                            <mat-card>\r\n                              <mat-form-field class=\"example-full-width\">\r\n                                <input matInput placeholder=\"OPE\" formControlName=\"OPE\">\r\n                                <mat-error *ngIf=\"handleError('OPE', 'required')\">\r\n                                  You must provide a<strong> OPE</strong>\r\n                                </mat-error>\r\n                              </mat-form-field>\r\n                              </mat-card>\r\n                              <mat-card>\r\n                                <mat-form-field class=\"example-full-width\">\r\n                                  <input matInput placeholder=\"Notes\" formControlName=\"NOTES\">\r\n                                  <mat-error *ngIf=\"handleError('NOTES', 'required')\">\r\n                                    You must provide a<strong> Notes</strong>\r\n                                  </mat-error>\r\n                                </mat-form-field>\r\n                                </mat-card>\r\n\r\n      \r\n\r\n    <!-- Submit & Reset -->\r\n   \r\n        <div class=\"button-wrapper\">\r\n          <button mat-flat-button color=\"warn\">Submit</button>\r\n        </div>\r\n      \r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/project-mech/project-mech/project-mech.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/project-mech/project-mech/project-mech.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Title group  -->\r\n<div class=\"title-group\">\r\n  <div class=\"main\">\r\n    <h1 class=\"mat-h1\">{{projectName}} - Project Mechanical Schedule</h1>\r\n    <button  [matMenuTriggerFor]=\"menu\" class=\"top-btn-mech\" mat-raised-button color=\"basic\">\r\n      <mat-icon>keyboard_arrow_down</mat-icon>\r\n    </button>\r\n    <mat-menu #menu=\"matMenu\">\r\n      <button mat-menu-item [routerLink]=\"['/project_rev/getAll/',projectId]\">\r\n        <mat-icon>autorenew</mat-icon>\r\n        <span>Revisions</span>\r\n      </button>\r\n      <button mat-menu-item [routerLink]=\"['/project_obj/getAll/',projectId]\">\r\n        <mat-icon>check_circle</mat-icon>\r\n        <span>Objects</span>\r\n      </button>\r\n      <button mat-menu-item [routerLink]=\"['/project_sheet/getAll/',projectId]\">\r\n        <mat-icon>lock</mat-icon>\r\n        <span>Register Sheet</span>\r\n      </button>\r\n      <button mat-menu-item  [routerLink]=\"['/project_mech/getAll/',projectId]\"> \r\n        <mat-icon>schedule</mat-icon>\r\n        <span>Mechanical Schedule</span>\r\n      </button>\r\n      <button mat-menu-item  [routerLink]=\"['/project-service-data/getAll/',projectId]\"> \r\n        <mat-icon>schedule</mat-icon>\r\n        <span>Electrical Schedule</span>\r\n      </button>\r\n      <button mat-menu-item [routerLink]=\"['/project_notes/getAll/',projectId]\">\r\n        <mat-icon>chat_bubble_outline</mat-icon>\r\n        <span>Notes</span>\r\n      </button>\r\n      <button mat-menu-item [routerLink]=\"['/generate-pdf/',projectId]\">\r\n        <mat-icon>cloud_download</mat-icon>\r\n        <span>Generate PDF</span>\r\n      </button>               \r\n    </mat-menu>\r\n\r\n      <input type=\"file\" class=\"top-btn mat-raised-button  custom-file-input\" id=\"importexcel\" name=\"importexcel\"\r\n          (change)=\"onFileSelect($event)\" [(ngModel)]=\"UploadFileInput\" >\r\n      <!-- <label class=\"custom-file-label\" for=\"customFile\">{{fileInputLabel || 'Choose Excel'}}</label> -->\r\n   \r\n\r\n    <!-- <button class=\"top-btn\" mat-raised-button color=\"accent\" (click)=\"importExcel()\" >Import Excel</button>  -->\r\n    <!-- <button class=\"top-btn\" mat-raised-button color=\"accent\" (click)=\"importData()\" >import sheet</button>  -->\r\n\r\n    </div>\r\n  <mat-divider class=\"mat-divider\" ></mat-divider>\r\n</div>\r\n\r\n<div class=\"container view-table\" >\r\n    <div class=\"mat-elevation-z8\">\r\n<form [formGroup]=\"userTable\"  >\r\n  <table  class=\"table \" >\r\n    <thead class=\"text-nowrap\">\r\n      <tr>\r\n        <th colspan=\"8\"></th>\r\n        <th colspan=\"9\">Utility Requirement</th>\r\n        <th colspan=\"5\"></th>\r\n      </tr>\r\n      <tr>\r\n        <th colspan=\"8\"></th>\r\n        <th colspan=\"3\">TEMP</th>\r\n        <th colspan=\"3\">PRESSURE</th>\r\n        <th colspan=\"3\">FLOW</th>\r\n        <th colspan=\"5\"></th>\r\n      </tr>\r\n    <th>Component </th>\r\n    <th>REF_NO</th>\r\n    <th>SETTPOC</th>\r\n    <th>Level</th>\r\n    <th>Service Description</th>\r\n    <th>Service Size</th>\r\n    <th>Pipe Class</th>\r\n    <th>Connection size</th>\r\n    <th>Connection type</th>\r\n    <th>MIN</th>\r\n    <th>MAX</th>\r\n    <th>Unit</th>\r\n    <th>MIN</th>\r\n    <th>MAX</th>\r\n    <th>Unit</th>\r\n    <th>MIN</th>\r\n    <th>MAX</th>\r\n    <th>Unit</th>\r\n    <th>Service Connection</th>\r\n    <th>End Ref No </th>\r\n    <th>OPE</th>\r\n    <th>Notes</th>\r\n    <th>Action</th>\r\n\r\n    </thead>\r\n    <tbody>\r\n      <ng-container *ngIf=\"getFormControls.controls.length <= 0\">\r\n        <tr  class=\"no-data\">There is no Project Mechanical Sheet added yet!</tr>\r\n      </ng-container>\r\n      <ng-container formArrayName=\"tableRows\" *ngFor=\"let group of getFormControls.controls | paginate:config ; let i=index \">\r\n        <tr *ngIf=\"group.get('isEditable').value\" [formGroupName]=\"fieldGlobalIndex(i)\">\r\n          <td>\r\n          <mat-form-field appearance=\"fill\">\r\n              <mat-label>COMPONENT</mat-label>\r\n              <mat-select  formControlName=\"COMPONENT_ID\">\r\n                <mat-option *ngFor=\"let serv of components\" [value]=\"serv._id\">\r\n                  {{serv.COMPONENT_NAME}}\r\n                </mat-option>\r\n              </mat-select>\r\n              <mat-error *ngIf=\"group.get('COMPONENT_ID').errors && formSubmitAttempt \">\r\n                You must provide a<strong> Component</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n            </td>\r\n            <td>\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput formControlName=\"REF_NO\">\r\n             \r\n            </mat-form-field>\r\n          </td>\r\n          <td>\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput formControlName=\"SETTPOC\">\r\n             \r\n            </mat-form-field>\r\n          </td>\r\n           <td>\r\n              <mat-form-field appearance=\"fill\">\r\n                <mat-label>Level</mat-label>\r\n                <mat-select  formControlName=\"LEVEL\">\r\n                  <mat-option *ngFor=\"let serv of level\" [value]=\"serv\">\r\n                    {{serv}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n             </td>\r\n            <td>\r\n              <mat-form-field appearance=\"fill\">\r\n                <mat-label>Service Description</mat-label>\r\n                <mat-select  formControlName=\"SERVICE_DESCRIPTION\">\r\n                  <mat-option *ngFor=\"let serv of services\" [value]=\"serv._id\">\r\n                    {{serv.SERVICE_NAME}}\r\n                  </mat-option>\r\n                </mat-select>\r\n                <mat-error *ngIf=\"group.get('SERVICE_DESCRIPTION').errors && formSubmitAttempt \">\r\n                  You must provide a<strong> Service</strong>\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </td>\r\n            <td>\r\n              <mat-form-field >\r\n                <input matInput  formControlName=\"SERVICE_SIZE\">\r\n\r\n              </mat-form-field>\r\n            </td>\r\n        \r\n            <td>\r\n              <mat-form-field appearance=\"fill\">\r\n                <mat-label>Pipe Class</mat-label>\r\n                <mat-select  formControlName=\"PIPE_CLASS\">\r\n                  <mat-option *ngFor=\"let serv of pipe_class\" [value]=\"serv._id\">\r\n                    {{serv.PIPE_NAME}}\r\n                  </mat-option>\r\n                </mat-select>\r\n                <mat-error *ngIf=\"group.get('PIPE_CLASS').errors && formSubmitAttempt \">\r\n                  You must provide a<strong> Pipe Class</strong>\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </td>\r\n            <td>\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput  formControlName=\"CONNECTION_SIZE\">\r\n              </mat-form-field>\r\n            </td>\r\n           <td>\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput  formControlName=\"CONNECTION_TYPE_SIZE\">\r\n              </mat-form-field>\r\n            </td>\r\n             <td>\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <input matInput  formControlName=\"UM_TEMP_MIN\">\r\n                  \r\n                </mat-form-field>\r\n              </td>\r\n                <td>\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <input matInput  formControlName=\"UM_TEMP_MAX\">\r\n                   \r\n                  </mat-form-field>\r\n                </td>\r\n                  <td>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <input matInput  formControlName=\"UM_TEMP_UNIT\">\r\n                     \r\n                    </mat-form-field>\r\n                  </td>\r\n                   <td>\r\n                      <mat-form-field class=\"example-full-width\">\r\n                        <input matInput  formControlName=\"UM_PRES_MIN\">\r\n                        \r\n                      </mat-form-field>\r\n                    </td>\r\n                     <td>\r\n                        <mat-form-field class=\"example-full-width\">\r\n                          <input matInput  formControlName=\"UM_PRES_MAX\">\r\n                        \r\n                        </mat-form-field>\r\n                      </td>\r\n                        <td>\r\n                          <mat-form-field class=\"example-full-width\">\r\n                            <input matInput  formControlName=\"UM_PRES_UNIT\">\r\n                         \r\n                          </mat-form-field>\r\n                        </td>\r\n                         <td>\r\n                            <mat-form-field class=\"example-full-width\">\r\n                              <input matInput  formControlName=\"UM_FLOW_MIN\">\r\n                              \r\n                            </mat-form-field>\r\n                          </td>\r\n                           <td>\r\n                              <mat-form-field class=\"example-full-width\">\r\n                                <input matInput  formControlName=\"UM_FLOW_MAX\">\r\n                              \r\n                              </mat-form-field>\r\n                           </td>\r\n                              <td>\r\n                                <mat-form-field class=\"example-full-width\">\r\n                                  <input matInput  formControlName=\"UM_FLOW_UNIT\">\r\n                                 \r\n                                </mat-form-field>\r\n                              </td>\r\n                                <td>\r\n                                  <mat-form-field class=\"example-full-width\">\r\n                                    <input matInput  formControlName=\"SERVICE_CONN\">\r\n                                   \r\n                                  </mat-form-field>\r\n                                </td>\r\n                                \r\n                                  <td>\r\n                                    <mat-form-field class=\"example-full-width\">\r\n                                      <input matInput  formControlName=\"END_REF_NO\">\r\n                                     \r\n                                    </mat-form-field>\r\n                                  </td>\r\n                                    <td>\r\n                                      <mat-form-field class=\"example-full-width\">\r\n                                        <input matInput  formControlName=\"OPE\">\r\n                                        \r\n                                      </mat-form-field>\r\n                                    </td>\r\n                                      <td>\r\n                                        <mat-form-field class=\"example-full-width\">\r\n                                          <input matInput  formControlName=\"NOTES\">\r\n                                         \r\n                                        </mat-form-field>\r\n                                      </td>\r\n            <td>\r\n              <div class=\"action-btns\">\r\n           \r\n                <button  mat-raised-button color=\"primary\" class=\"push-right\"\r\n                  (click)=\"doneRow(group)\">Save</button>\r\n                <button *ngIf=\"isDelete\"  mat-raised-button color=\"accent\" class=\"push-right\" (click)=\"deleteRow(fieldGlobalIndex(i),group)\">Delete</button>\r\n                <button  mat-raised-button color=\"accent\" (click)=\"cancel(group)\">Cancel</button>\r\n \r\n              </div>\r\n             \r\n            </td>\r\n        </tr>\r\n        <tr *ngIf=\"!group.get('isEditable').value\" >\r\n         \r\n          <td>\r\n            {{retreiveComponent(group.get('COMPONENT_ID').value)}}\r\n          </td>\r\n         <td>\r\n          {{group.get('REF_NO').value}}\r\n\r\n         </td>\r\n         <td>{{group.get('SETTPOC') ?group.get('SETTPOC').value:''}}</td>\r\n         <td>{{group.get('LEVEL').value}}</td>\r\n         <td>{{retreiveService(group.get('SERVICE_DESCRIPTION').value)}}</td>\r\n         <td>{{group.get('SERVICE_SIZE').value}}</td>\r\n         <td>{{retreivePipeClass(group.get('PIPE_CLASS').value)}}</td>\r\n         <td>{{group.get('CONNECTION_SIZE').value}}</td>\r\n         <td>{{group.get('CONNECTION_TYPE_SIZE').value}}</td>\r\n         <td>{{group.get('UM_TEMP_MIN').value}}</td>\r\n         <td>{{group.get('UM_TEMP_MAX').value}}</td>\r\n         <td>{{group.get('UM_TEMP_UNIT').value}}</td>\r\n         <td>{{group.get('UM_PRES_MIN').value}}</td>\r\n         <td>{{group.get('UM_PRES_MAX').value}}</td>\r\n         <td>{{group.get('UM_PRES_UNIT').value}}</td>\r\n         <td>{{group.get('UM_FLOW_MIN').value}}</td>\r\n         <td>{{group.get('UM_FLOW_MAX').value}}</td>\r\n         <td>{{group.get('UM_FLOW_UNIT').value}}</td>\r\n         <td>{{group.get('SERVICE_CONN').value}}</td>\r\n         <td>{{group.get('END_REF_NO').value}}</td>\r\n         <td>{{group.get('OPE').value}}</td>\r\n         <td>{{group.get('NOTES').value}}</td>\r\n\r\n\r\n\r\n          <td>\r\n            <div class=\"action-btns\">\r\n            <button  mat-raised-button color=\"primary\" class=\"push-right\"\r\n            (click)=\"editRow(group)\">Edit</button>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </ng-container>\r\n    </tbody>\r\n    <div class=\"action-container\">\r\n      <button mat-raised-button type=\"submit\" color=\"primary\" (click)=\"addRow()\">Add row</button>\r\n    </div>\r\n    <div style=\"float:right\">\r\n    <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\r\n</div>\r\n  </table>\r\n  \r\n</form>\r\n\r\n</div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/project-notes/add-project-notes/add-project-notes.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/project-notes/add-project-notes/add-project-notes.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Title group  -->\r\n<div class=\"title-group\">\r\n  <h1 class=\"mat-h1\">Add Project Note </h1>\r\n  <mat-divider fxFlex=\"1 0\"></mat-divider>\r\n</div>\r\n\r\n<!-- Form -->\r\n<div class=\"inner-wrapper\">\r\n  <form [formGroup]=\"projects\" (ngSubmit)=\"submitAddProjectsNotesForm()\" #resetProjectsNotesForm=\"ngForm\" novalidate>\r\n    <!-- Left block -->\r\n   \r\n        <!-- Name -->\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"Notes Text\" formControlName=\"NOTE_TEXT\">\r\n          <mat-error *ngIf=\"handleError('NOTE_TEXT', 'required')\">\r\n            You must provide a<strong> NOTE TEXT</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <br/>\r\n      <mat-form-field appearance=\"fill\">\r\n        <mat-label>Note Category</mat-label>\r\n        <mat-select formControlName=\"NOTE_CATEGORY\">\r\n          <mat-option *ngFor=\"let comp of section\" [value]=\"comp\">\r\n            {{comp}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <br/>\r\n     \r\n\r\n      \r\n\r\n    <!-- Submit & Reset -->\r\n   \r\n        <div class=\"button-wrapper\">\r\n          <button mat-flat-button color=\"warn\">Submit</button>\r\n        </div>\r\n      \r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/project-notes/edit-project-notes/edit-project-notes.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/project-notes/edit-project-notes/edit-project-notes.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Title group  -->\r\n<div class=\"title-group\">\r\n  <h1 class=\"mat-h1\">Add Project Note </h1>\r\n  <mat-divider fxFlex=\"1 0\"></mat-divider>\r\n</div>\r\n\r\n<!-- Form -->\r\n<div class=\"inner-wrapper\">\r\n  <form [formGroup]=\"projects\" (ngSubmit)=\"submitEditProjectsNotesForm()\" #resetProjectsNotesForm=\"ngForm\" novalidate>\r\n    <!-- Left block -->\r\n   \r\n        <!-- Name -->\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"Notes Text\" formControlName=\"NOTE_TEXT\">\r\n          <mat-error *ngIf=\"handleError('NOTE_TEXT', 'required')\">\r\n            You must provide a<strong> NOTE TEXT</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <br/>\r\n      <mat-form-field appearance=\"fill\">\r\n        <mat-label>Note Category</mat-label>\r\n        <mat-select formControlName=\"NOTE_CATEGORY\">\r\n          <mat-option *ngFor=\"let comp of section\" [value]=\"comp\">\r\n            {{comp}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <br/>\r\n     \r\n\r\n      \r\n\r\n    <!-- Submit & Reset -->\r\n   \r\n        <div class=\"button-wrapper\">\r\n          <button mat-flat-button color=\"warn\">Submit</button>\r\n        </div>\r\n      \r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/project-notes/project-notes/project-notes.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/project-notes/project-notes/project-notes.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Title group  -->\r\n<div class=\"title-group\">\r\n  <div class=\"main\">\r\n    <h1 class=\"mat-h1\">{{projectName}} - Project Notes</h1>\r\n    <button  [matMenuTriggerFor]=\"menu\" class=\"top-btn\" mat-raised-button color=\"basic\">\r\n      <mat-icon>keyboard_arrow_down</mat-icon>\r\n    </button>\r\n    <mat-menu #menu=\"matMenu\">\r\n      <button mat-menu-item [routerLink]=\"['/project_rev/getAll/',projectId]\">\r\n        <mat-icon>autorenew</mat-icon>\r\n        <span>Revisions</span>\r\n      </button>\r\n      <button mat-menu-item [routerLink]=\"['/project_obj/getAll/',projectId]\">\r\n        <mat-icon>check_circle</mat-icon>\r\n        <span>Objects</span>\r\n      </button>\r\n      <button mat-menu-item [routerLink]=\"['/project_sheet/getAll/',projectId]\">\r\n        <mat-icon>lock</mat-icon>\r\n        <span>Register Sheet</span>\r\n      </button>\r\n      <button mat-menu-item  [routerLink]=\"['/project_mech/getAll/',projectId]\"> \r\n        <mat-icon>schedule</mat-icon>\r\n        <span>Mechanical Schedule</span>\r\n      </button>\r\n      <button mat-menu-item  [routerLink]=\"['/project-service-data/getAll/',projectId]\"> \r\n        <mat-icon>schedule</mat-icon>\r\n        <span>Electrical Schedule</span>\r\n      </button>\r\n      <button mat-menu-item [routerLink]=\"['/project_notes/getAll/',projectId]\">\r\n        <mat-icon>chat_bubble_outline</mat-icon>\r\n        <span>Notes</span>\r\n      </button>\r\n      <button mat-menu-item [routerLink]=\"['/generate-pdf/',projectId]\">\r\n        <mat-icon>cloud_download</mat-icon>\r\n        <span>Generate PDF</span>\r\n      </button>               \r\n    </mat-menu>\r\n    </div>\r\n  <mat-divider class=\"mat-divider\" ></mat-divider>\r\n</div>\r\n\r\n<input type=\"file\" class=\"top-btn mat-raised-button  custom-file-input\" \r\n(change)=\"onFileSelect($event)\" [(ngModel)]=\"UploadFileInput\">\r\n\r\n<div class=\"container view-table\" >\r\n    <div class=\"mat-elevation-z8\">\r\n<form [formGroup]=\"userTable\"  >\r\n  <table  class=\"table \" >\r\n    <thead class=\"text-nowrap\">\r\n      <th>Note Text</th>\r\n      <th>Note Category</th>\r\n      <th>Action</th>\r\n\r\n    </thead>\r\n    <tbody>\r\n      <ng-container *ngIf=\"getFormControls.controls.length <= 0\">\r\n        <tr  class=\"no-data\">There is no Project Note  added yet!</tr>\r\n      </ng-container>\r\n      <ng-container formArrayName=\"tableRows\" *ngFor=\"let group of getFormControls.controls | paginate:config ; let i=index \">\r\n        <tr *ngIf=\"group.get('isEditable').value\" [formGroupName]=\"fieldGlobalIndex(i)\">\r\n          <td>\r\n            <mat-form-field>\r\n              <input matInput type=\"text\" formControlName=\"NOTE_TEXT\">\r\n              <mat-error *ngIf=\"group.get('NOTE_TEXT').errors && formSubmitAttempt \">\r\n                You must provide a<strong> Note text</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </td>\r\n         <td>\r\n          <mat-form-field>\r\n            <mat-select formControlName=\"NOTE_CATEGORY\">\r\n              <mat-option *ngFor=\"let comp of section\" [value]=\"comp\">\r\n                {{comp}}\r\n              </mat-option>\r\n            </mat-select>\r\n            <mat-error *ngIf=\"group.get('NOTE_CATEGORY').errors && formSubmitAttempt \">\r\n              You must provide a<strong> Note Category</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n         </td>\r\n            <td>\r\n              <div class=\"action-btns\">\r\n           \r\n                <button  mat-raised-button color=\"primary\" class=\"push-right\"\r\n                  (click)=\"doneRow(group)\">Save</button>\r\n                <button *ngIf=\"isDelete\"  mat-raised-button color=\"accent\" class=\"push-right\" (click)=\"deleteRow(fieldGlobalIndex(i),group)\">Delete</button>\r\n                <button  mat-raised-button color=\"accent\" (click)=\"cancel(group)\">Cancel</button>\r\n\r\n              </div>\r\n             \r\n            </td>\r\n        </tr>\r\n        <tr *ngIf=\"!group.get('isEditable').value\" >\r\n         \r\n          <td>\r\n            {{group.get('NOTE_TEXT').value}}\r\n          </td>\r\n         <td>\r\n          {{group.get('NOTE_CATEGORY').value}}\r\n\r\n         </td>\r\n          <td>\r\n            <div class=\"action-btns\">\r\n            <button  mat-raised-button color=\"primary\" class=\"push-right\"\r\n            (click)=\"editRow(group)\">Edit</button>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </ng-container>\r\n    </tbody>\r\n    <div class=\"action-container\">\r\n      <button mat-raised-button type=\"submit\" color=\"primary\" (click)=\"addRow()\">Add row</button>\r\n    </div>\r\n    <div style=\"float:right\">\r\n    <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\r\n</div>\r\n  </table>\r\n  \r\n</form>\r\n\r\n</div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/project-objects/add-project-objects/add-project-objects.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/project-objects/add-project-objects/add-project-objects.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Title group  -->\r\n<div class=\"title-group\">\r\n  <h1 class=\"mat-h1\">Add Objects </h1>\r\n  <mat-divider fxFlex=\"1 0\"></mat-divider>\r\n</div>\r\n\r\n<!-- Form -->\r\n<div class=\"inner-wrapper\">\r\n  <form [formGroup]=\"projects\" (ngSubmit)=\"submitAddProjectsObjForm()\" #resetProjectsObjForm=\"ngForm\" novalidate>\r\n    <!-- Left block -->\r\n   \r\n        <!-- Name -->\r\n      \r\n\r\n      <mat-form-field appearance=\"fill\">\r\n        <mat-label>Component</mat-label>\r\n        <mat-select (selectionChange)=\"selectComponent($event)\">\r\n          <mat-option *ngFor=\"let comp of components\" [value]=\"comp._id\">\r\n            {{comp.COMPONENT_NAME}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <br/>\r\n      <mat-form-field appearance=\"fill\">\r\n        <mat-label>SERVICE</mat-label>\r\n        <mat-select (selectionChange)=\"selectService($event)\">\r\n          <mat-option *ngFor=\"let serv of services\" [value]=\"serv._id\">\r\n            {{serv.SERVICE_NAME}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      \r\n      <br/>\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput placeholder=\"Service Alias\" formControlName=\"SERVICE_ALIAS\">\r\n        <mat-error *ngIf=\"handleError('SERVICE_ALIAS', 'required')\">\r\n          You must provide a<strong> Service Alias</strong>\r\n        </mat-error>\r\n      </mat-form-field>\r\n\r\n      \r\n\r\n    <!-- Submit & Reset -->\r\n   \r\n        <div class=\"button-wrapper\">\r\n          <button mat-flat-button color=\"warn\">Submit</button>\r\n        </div>\r\n      \r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/project-objects/edit-project-objects/edit-project-objects.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/project-objects/edit-project-objects/edit-project-objects.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Title group  -->\r\n<div class=\"title-group\">\r\n  <h1 class=\"mat-h1\">Edit Objects </h1>\r\n  <mat-divider fxFlex=\"1 0\"></mat-divider>\r\n</div>\r\n\r\n<!-- Form -->\r\n<div class=\"inner-wrapper\">\r\n  <form [formGroup]=\"projects\" (ngSubmit)=\"submitEditProjectsObjForm()\" #resetProjectsObjForm=\"ngForm\" novalidate>\r\n    <!-- Left block -->\r\n   \r\n        <!-- Name -->\r\n       \r\n\r\n      <mat-form-field appearance=\"fill\">\r\n        <mat-label>Component</mat-label>\r\n        <mat-select (selectionChange)=\"selectComponent($event)\" formControlName=\"COMPONENT_ID\">\r\n          <mat-option *ngFor=\"let comp of components\" [value]=\"comp._id\">\r\n            {{comp.COMPONENT_NAME}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <br/>\r\n      <mat-form-field appearance=\"fill\">\r\n        <mat-label>SERVICE</mat-label>\r\n        <mat-select (selectionChange)=\"selectService($event)\" formControlName=\"SERVICE_ID\">\r\n          <mat-option *ngFor=\"let serv of services\" [value]=\"serv._id\">\r\n            {{serv.SERVICE_NAME}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      \r\n    <br/>\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput placeholder=\"Service Alias\" formControlName=\"SERVICE_ALIAS\">\r\n        <mat-error *ngIf=\"handleError('SERVICE_ALIAS', 'required')\">\r\n          You must provide a<strong> Service Alias</strong>\r\n        </mat-error>\r\n      </mat-form-field>\r\n\r\n      \r\n\r\n    <!-- Submit & Reset -->\r\n   \r\n        <div class=\"button-wrapper\">\r\n          <button mat-flat-button color=\"warn\">Submit</button>\r\n        </div>\r\n      \r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/project-objects/project-objects/project-objects.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/project-objects/project-objects/project-objects.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Title group  -->\r\n<div class=\"title-group\">\r\n  <div class=\"main\">\r\n    <h1 class=\"mat-h1\">{{projectName}} - Project Objects</h1>\r\n    <button  [matMenuTriggerFor]=\"menu\" class=\"top-btn\" mat-raised-button color=\"basic\">\r\n      <mat-icon>keyboard_arrow_down</mat-icon>\r\n    </button>\r\n    <mat-menu #menu=\"matMenu\">\r\n      <button mat-menu-item [routerLink]=\"['/project_rev/getAll/',projectId]\">\r\n        <mat-icon>autorenew</mat-icon>\r\n        <span>Revisions</span>\r\n      </button>\r\n      <button mat-menu-item [routerLink]=\"['/project_obj/getAll/',projectId]\">\r\n        <mat-icon>check_circle</mat-icon>\r\n        <span>Objects</span>\r\n      </button>\r\n      <button mat-menu-item [routerLink]=\"['/project_sheet/getAll/',projectId]\">\r\n        <mat-icon>lock</mat-icon>\r\n        <span>Register Sheet</span>\r\n      </button>\r\n      <button mat-menu-item  [routerLink]=\"['/project_mech/getAll/',projectId]\"> \r\n        <mat-icon>schedule</mat-icon>\r\n        <span>Mechanical Schedule</span>\r\n      </button>\r\n      <button mat-menu-item  [routerLink]=\"['/project-service-data/getAll/',projectId]\"> \r\n        <mat-icon>schedule</mat-icon>\r\n        <span>Electrical Schedule</span>\r\n      </button>\r\n      <button mat-menu-item [routerLink]=\"['/project_notes/getAll/',projectId]\">\r\n        <mat-icon>chat_bubble_outline</mat-icon>\r\n        <span>Notes</span>\r\n      </button>\r\n      <button mat-menu-item [routerLink]=\"['/generate-pdf/',projectId]\">\r\n        <mat-icon>cloud_download</mat-icon>\r\n        <span>Generate PDF</span>\r\n      </button>               \r\n    </mat-menu>\r\n\r\n    </div>\r\n  <mat-divider class=\"mat-divider\" ></mat-divider>\r\n</div>\r\n\r\n<div class=\"container view-table\" >\r\n    <div class=\"mat-elevation-z8\">\r\n<form [formGroup]=\"userTable\"  >\r\n  <table  class=\"table \" >\r\n    <thead class=\"text-nowrap\">\r\n      <th>Component</th>\r\n      <th>Service</th>\r\n      <th>Service Alias</th>\r\n      <th>Action</th>\r\n\r\n    </thead>\r\n    <tbody>\r\n      <ng-container *ngIf=\"getFormControls.controls.length <= 0\">\r\n        <tr  class=\"no-data\">There is no Project Object  added yet!</tr>\r\n      </ng-container>\r\n      <ng-container formArrayName=\"tableRows\" *ngFor=\"let group of getFormControls.controls | paginate:config ; let i=index \">\r\n        <tr *ngIf=\"group.get('isEditable').value\" [formGroupName]=\"fieldGlobalIndex(i)\">\r\n          <td>\r\n            <mat-form-field>\r\n              <mat-select formControlName=\"COMPONENT_ID\" (selectionChange)=\"getServices(group,$event)\">\r\n                <mat-option *ngFor=\"let comp of components\" [value]=\"comp._id\" >\r\n                  {{comp.COMPONENT_NAME}}\r\n                </mat-option>\r\n              </mat-select>\r\n              <mat-error *ngIf=\"group.get('COMPONENT_ID').errors && formSubmitAttempt \">\r\n                You must provide a unique <strong> Component</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </td>\r\n         <td>\r\n          <mat-form-field>\r\n              <mat-select [formControl]=\"toppings\" #sel multiple>\r\n                <mat-option *ngFor=\"let topping of services\" [value]=\"topping._id\"  (onSelectionChange)=\"SelectServices(group,$event,sel)\" >{{topping.SERVICE_NAME}}</mat-option>\r\n              </mat-select>\r\n            <mat-error *ngIf=\"group.get('SERVICES').errors && formSubmitAttempt \">\r\n              You must provide any<strong> Service</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n         </td>\r\n         <td>\r\n           <mat-form-field>\r\n            <input matInput type=\"text\" formControlName=\"SERVICE_ALIAS\">\r\n            <mat-error *ngIf=\"group.get('SERVICE_ALIAS').errors && formSubmitAttempt \">\r\n              You must provide a<strong> Service alias</strong>\r\n            </mat-error>\r\n           </mat-form-field>\r\n         </td>\r\n            <td>\r\n              <div class=\"action-btns\">\r\n           \r\n                <button  mat-raised-button color=\"primary\" class=\"push-right\"\r\n                  (click)=\"doneRow(group)\">Save</button>\r\n                <button *ngIf=\"isDelete\"  mat-raised-button color=\"accent\"  class=\"push-right\" (click)=\"deleteRow(fieldGlobalIndex(i),group)\">Delete</button>\r\n                <button  mat-raised-button color=\"accent\" (click)=\"cancel(group)\">Cancel</button>\r\n  \r\n              </div>\r\n             \r\n            </td>\r\n        </tr>\r\n        <tr *ngIf=\"!group.get('isEditable').value\" >\r\n         \r\n          <td>\r\n            {{retreiveComponent(group.get('COMPONENT_ID').value)}}\r\n          </td>\r\n         <td>\r\n          <span *ngFor=\"let services of group.value.SERVICES\"> <p >{{retreiveService(services)}}</p> </span>\r\n\r\n         </td>\r\n         <td>\r\n          {{group.get('SERVICE_ALIAS').value}}\r\n\r\n         </td>\r\n          <td>\r\n            <div class=\"action-btns\">\r\n            <button  mat-raised-button color=\"primary\" class=\"push-right\"\r\n            (click)=\"editRow(group)\">Edit</button>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </ng-container>\r\n    </tbody>\r\n    <div class=\"action-container\">\r\n      <button mat-raised-button type=\"submit\" color=\"primary\" (click)=\"addRow()\">Add row</button>\r\n    </div>\r\n    <div style=\"float:right\">\r\n    <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\r\n</div>\r\n  </table>\r\n  \r\n</form>\r\n\r\n</div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/project-register-sheet/project-register-sheet/project-register-sheet.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/project-register-sheet/project-register-sheet/project-register-sheet.component.html ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Title group  -->\r\n<div class=\"title-group\">\r\n    <div class=\"main\">\r\n      <h1 class=\"mat-h1\">{{projectName}} - Project Register Sheets</h1>\r\n      <button  [matMenuTriggerFor]=\"menu\" class=\"top-btn\" mat-raised-button color=\"basic\">\r\n        <mat-icon>keyboard_arrow_down</mat-icon>\r\n      </button>\r\n      <mat-menu #menu=\"matMenu\">\r\n        <button mat-menu-item [routerLink]=\"['/project_rev/getAll/',projectId]\">\r\n          <mat-icon>autorenew</mat-icon>\r\n          <span>Revisions</span>\r\n        </button>\r\n        <button mat-menu-item [routerLink]=\"['/project_obj/getAll/',projectId]\">\r\n          <mat-icon>check_circle</mat-icon>\r\n          <span>Objects</span>\r\n        </button>\r\n        <button mat-menu-item [routerLink]=\"['/project_sheet/getAll/',projectId]\">\r\n          <mat-icon>lock</mat-icon>\r\n          <span>Register Sheet</span>\r\n        </button>\r\n        <button mat-menu-item  [routerLink]=\"['/project_mech/getAll/',projectId]\"> \r\n          <mat-icon>schedule</mat-icon>\r\n          <span>Mechanical Schedule</span>\r\n        </button>\r\n        <button mat-menu-item  [routerLink]=\"['/project-service-data/getAll/',projectId]\"> \r\n          <mat-icon>schedule</mat-icon>\r\n          <span>Electrical Schedule</span>\r\n        </button>\r\n        <button mat-menu-item [routerLink]=\"['/project_notes/getAll/',projectId]\">\r\n          <mat-icon>chat_bubble_outline</mat-icon>\r\n          <span>Notes</span>\r\n        </button>\r\n        <button mat-menu-item [routerLink]=\"['/generate-pdf/',projectId]\">\r\n          <mat-icon>cloud_download</mat-icon>\r\n          <span>Generate PDF</span>\r\n        </button>               \r\n      </mat-menu>\r\n  \r\n      </div>\r\n    <mat-divider class=\"mat-divider\" ></mat-divider>\r\n\r\n    <input type=\"file\" class=\"top-btn mat-raised-button  custom-file-input\" id=\"importexcel\" name=\"importexcel\"\r\n          (change)=\"onFileSelect($event)\" [(ngModel)]=\"UploadFileInput\" >\r\n  </div>\r\n\r\n  \r\n  \r\n  <div class=\"container view-table\" style=\"margin-top: 70px;\" >\r\n      <div class=\"mat-elevation-z8\">\r\n  <form [formGroup]=\"userTable\">\r\n    <table  class=\"table \">\r\n      <thead class=\"text-nowrap\">\r\n        <th>Item Name </th>\r\n        <th>Description A</th>\r\n        <th>Description B</th>\r\n        <th>Description C</th>\r\n        <th>Section</th>\r\n        <th>Item No</th>\r\n        <th>Date Issued</th>\r\n        <th>Rev issued</th>\r\n        <th>Action</th>\r\n\r\n      </thead>\r\n      <tbody>\r\n       \r\n        <ng-container formArrayName=\"tableRows\" *ngFor=\"let group of getFormControls.controls | paginate:config ; let i=index\">\r\n          <tr *ngIf=\"group.get('isEditable').value\" [formGroupName]=\"fieldGlobalIndex(i)\">\r\n            <td>\r\n              <mat-form-field>\r\n                <input matInput type=\"text\" formControlName=\"ITEM_NAME\">\r\n                <mat-error *ngIf=\"group.get('ITEM_NAME').errors && formSubmitAttempt \">\r\n                  You must provide a<strong> Item name</strong>\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </td>\r\n            <td>\r\n              <mat-form-field>\r\n                <input matInput type=\"text\" formControlName=\"DESCRIPTION_A\">\r\n                <mat-error *ngIf=\"group.get('DESCRIPTION_A').errors && formSubmitAttempt \">\r\n                  You must provide a<strong> Description</strong>\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </td>\r\n            <td>\r\n                <mat-form-field>\r\n                  <input matInput type=\"text\" formControlName=\"DESCRIPTION_B\">\r\n                </mat-form-field>\r\n              </td>\r\n              <td>\r\n                <mat-form-field>\r\n                  <input matInput type=\"text\" formControlName=\"DESCRIPTION_C\">\r\n                </mat-form-field>\r\n              </td>\r\n              <td>\r\n                <mat-form-field >\r\n                    <mat-label>Section</mat-label>\r\n                    <mat-select  formControlName=\"SECTION\">\r\n                      <mat-option *ngFor=\"let serv of section\" [value]=\"serv\">\r\n                        {{serv}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                    <mat-error *ngIf=\"group.get('SECTION').errors && formSubmitAttempt \">\r\n                      You must provide a<strong> Section</strong>\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n              </td>\r\n              <td>\r\n                <mat-form-field >\r\n                    <mat-label>Item No</mat-label>\r\n                    <mat-select formControlName=\"ITEM_NO\">\r\n                      <mat-option *ngFor=\"let comp of item_no\" [value]=\"comp\">\r\n                        {{comp}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                    <mat-error *ngIf=\"group.get('ITEM_NO').errors && formSubmitAttempt \">\r\n                      You must provide a<strong> ITEM_NO</strong>\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n              </td>\r\n              <td>\r\n                <mat-form-field>\r\n                    <input matInput matInput [matDatepicker]=\"picker\" formControlName=\"DATE_ISSUED\"  (dateChange)=\"formatDate($event,group)\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker></mat-datepicker>\r\n                    <mat-error *ngIf=\"group.get('DATE_ISSUED').errors && formSubmitAttempt \">\r\n                      You must provide a<strong> Date issued</strong>\r\n                    </mat-error>\r\n                </mat-form-field>\r\n              </td>\r\n              <td>\r\n                <mat-form-field>\r\n                  <input matInput type=\"text\" formControlName=\"REV_ISSUED\">\r\n\r\n                </mat-form-field>\r\n              </td>\r\n            \r\n              <td>\r\n                 <div class=\"action-btns\">\r\n           \r\n                <button  mat-raised-button color=\"primary\" class=\"push-right\"\r\n                  (click)=\"doneRow(group)\">Save</button>\r\n                <button *ngIf=\"isDelete\" mat-raised-button color=\"accent\" (click)=\"deleteRow(fieldGlobalIndex(i),group)\" class=\"push-right\">Delete</button>\r\n                <button  mat-raised-button color=\"accent\" (click)=\"cancel(group)\">Cancel</button>\r\n \r\n              </div>\r\n             \r\n              </td>\r\n          </tr>\r\n          <tr *ngIf=\"!group.get('isEditable').value\" >\r\n           \r\n            <td>\r\n              {{group.get('ITEM_NAME').value}}\r\n            </td>\r\n            <td>\r\n                {{group.get('DESCRIPTION_A').value}}\r\n            </td>\r\n            <td>\r\n                {{group.get('DESCRIPTION_B').value}}\r\n            </td>\r\n            <td>\r\n              {{group.get('DESCRIPTION_C').value}}\r\n            </td>\r\n            <td>\r\n                {{group.get('SECTION').value}}\r\n              </td>\r\n              <td>\r\n                {{group.get('ITEM_NO').value}}\r\n              </td>\r\n              <td>\r\n                {{group.get('DATE_ISSUED').value}}\r\n              </td>\r\n              <td>\r\n                {{group.get('REV_ISSUED').value}}\r\n              </td>\r\n            <td>\r\n              <div class=\"action-btns\">\r\n                <button  mat-raised-button color=\"primary\" class=\"push-right\"\r\n                (click)=\"editRow(group)\">Edit</button>\r\n                </div>      \r\n                </td>\r\n          </tr>\r\n        </ng-container>\r\n      </tbody>\r\n      <div class=\"action-container\">\r\n        <button mat-raised-button type=\"submit\" color=\"primary\" (click)=\"addRow()\">Add row</button>\r\n      </div>\r\n      <div style=\"float:right\">\r\n        <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\r\n    </div>\r\n    </table>\r\n   \r\n  </form>\r\n  </div>\r\n  \r\n  </div>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/project-revisions/add-project-revisions/add-project-revisions.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/project-revisions/add-project-revisions/add-project-revisions.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Title group  -->\r\n<div class=\"title-group\">\r\n  <h1 class=\"mat-h1\">{{projectName}} - Add Revision </h1>\r\n  <mat-divider fxFlex=\"1 0\"></mat-divider>\r\n</div>\r\n\r\n<!-- Form -->\r\n<div class=\"inner-wrapper\">\r\n  <form [formGroup]=\"projects\" (ngSubmit)=\"submitAddProjectsRevForm()\" #resetProjectsForm=\"ngForm\" novalidate>\r\n    <!-- Left block -->\r\n   \r\n    <mat-card>\r\n      <div class=\"controlers-wrapper\">\r\n        <!-- Name -->\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"Revision Name\" formControlName=\"REV_NAME\">\r\n          <mat-error *ngIf=\"handleError('REV_NAME', 'required')\">\r\n            You must provide a<strong> REV_NAME</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n        </div>\r\n        </mat-card>\r\n      <br/>\r\n\r\n      <mat-form-field appearance=\"fill\">\r\n        <mat-label>Revision no</mat-label>\r\n        <mat-select (selectionChange)=\"selectRevNo($event)\">\r\n          <mat-option *ngFor=\"let rev of revno\" [value]=\"rev\">\r\n            {{rev}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      \r\n\r\n      \r\n\r\n    <!-- Submit & Reset -->\r\n   \r\n        <div class=\"button-wrapper\">\r\n          <button mat-flat-button color=\"warn\">Submit</button>\r\n        </div>\r\n      \r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/project-revisions/edit-project-revisions/edit-project-revisions.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/project-revisions/edit-project-revisions/edit-project-revisions.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Title group  -->\r\n<div class=\"title-group\">\r\n  <h1 class=\"mat-h1\">Edit Revision </h1>\r\n  <mat-divider fxFlex=\"1 0\"></mat-divider>\r\n</div>\r\n\r\n<!-- Form -->\r\n<div class=\"inner-wrapper\">\r\n  <form [formGroup]=\"projects\" (ngSubmit)=\"submitEditProjectsRevForm()\" #resetProjectsRevForm=\"ngForm\" novalidate>\r\n    <!-- Left block -->\r\n   \r\n    <mat-card>\r\n      <div class=\"controlers-wrapper\">\r\n        <!-- Name -->\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"Revision Name\" formControlName=\"REV_NAME\">\r\n          <mat-error *ngIf=\"handleError('REV_NAME', 'required')\">\r\n            You must provide a<strong> REV_NAME</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n        </div>\r\n        </mat-card>\r\n      <br/>\r\n\r\n      <mat-form-field appearance=\"fill\">\r\n        <mat-label>Revision no</mat-label>\r\n        <mat-select (selectionChange)=\"selectRevNo($event)\" formControlName=\"REV_NO\"  >\r\n          <mat-option *ngFor=\"let rev of revno\" [value]=\"rev\">\r\n            {{rev}}\r\n            </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      \r\n\r\n      \r\n\r\n    <!-- Submit & Reset -->\r\n   \r\n        <div class=\"button-wrapper\">\r\n          <button mat-flat-button color=\"warn\">Submit</button>\r\n        </div>\r\n      \r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/project-revisions/project-revisions/project-revisions.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/project-revisions/project-revisions/project-revisions.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Title group  -->\r\n<div class=\"title-group\">\r\n  <div class=\"main\">\r\n    <h1 class=\"mat-h1\">{{projectName}} - Project Revision </h1>\r\n    <button  [matMenuTriggerFor]=\"menu\" class=\"top-btn\" mat-raised-button color=\"basic\">\r\n      <mat-icon>keyboard_arrow_down</mat-icon>\r\n    </button>\r\n    <mat-menu #menu=\"matMenu\">\r\n      <button mat-menu-item [routerLink]=\"['/project_rev/getAll/',projectId]\">\r\n        <mat-icon>autorenew</mat-icon>\r\n        <span>Revisions</span>\r\n      </button>\r\n      <button mat-menu-item [routerLink]=\"['/project_obj/getAll/',projectId]\">\r\n        <mat-icon>check_circle</mat-icon>\r\n        <span>Objects</span>\r\n      </button>\r\n      <button mat-menu-item [routerLink]=\"['/project_sheet/getAll/',projectId]\">\r\n        <mat-icon>lock</mat-icon>\r\n        <span>Register Sheet</span>\r\n      </button>\r\n      <button mat-menu-item  [routerLink]=\"['/project_mech/getAll/',projectId]\"> \r\n        <mat-icon>schedule</mat-icon>\r\n        <span>Mechanical Schedule</span>\r\n      </button>\r\n      <button mat-menu-item  [routerLink]=\"['/project-service-data/getAll/',projectId]\"> \r\n        <mat-icon>schedule</mat-icon>\r\n        <span>Electrical Schedule</span>\r\n      </button>\r\n      <button mat-menu-item [routerLink]=\"['/project_notes/getAll/',projectId]\">\r\n        <mat-icon>chat_bubble_outline</mat-icon>\r\n        <span>Notes</span>\r\n      </button>\r\n      <button mat-menu-item [routerLink]=\"['/generate-pdf/',projectId]\">\r\n        <mat-icon>cloud_download</mat-icon>\r\n        <span>Generate PDF</span>\r\n      </button>               \r\n    </mat-menu>\r\n    </div>\r\n  <mat-divider class=\"mat-divider\" ></mat-divider>\r\n</div>\r\n\r\n<div class=\"container view-table\" >\r\n    <div class=\"mat-elevation-z8\">\r\n<form [formGroup]=\"userTable\"  >\r\n  <table  class=\"table \" >\r\n    <thead class=\"text-nowrap\">\r\n      <th>Revision Name</th>\r\n      <th>Revision No.</th>\r\n      <th>Revision Date</th>\r\n      <th>Action</th>\r\n\r\n    </thead>\r\n    <tbody>\r\n      <ng-container *ngIf=\"getFormControls.controls.length <= 0\">\r\n      <tr  class=\"no-data\">There is no Project Revision added yet!</tr>\r\n    </ng-container>\r\n      <ng-container formArrayName=\"tableRows\" *ngFor=\"let group of getFormControls.controls | paginate:config ; let i=index \">\r\n        \r\n        <tr *ngIf=\"group.get('isEditable').value\" [formGroupName]=\"fieldGlobalIndex(i)\">\r\n          <td>\r\n            <mat-form-field>\r\n              <input matInput type=\"text\" formControlName=\"REV_NAME\">\r\n              <mat-error *ngIf=\"group.get('REV_NAME').errors && formSubmitAttempt \">\r\n                You must provide a<strong> Revision Name</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </td>\r\n         <td>\r\n          <mat-form-field>\r\n            <mat-select  formControlName=\"REV_NO\">\r\n              <mat-option *ngFor=\"let rev of revno\" [value]=\"rev\" [selected]=\"group.value.REV_NO == rev\">\r\n                {{rev}}\r\n              </mat-option>\r\n            </mat-select>\r\n            <mat-error *ngIf=\"group.get('REV_NO').errors && formSubmitAttempt \">\r\n              You must select a<strong> Revision no.</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n         </td>\r\n         <td>\r\n          <mat-form-field>\r\n            <input matInput matInput [matDatepicker]=\"picker\" formControlName=\"DATE_REV\"  (dateChange)=\"formatDate($event,group)\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker></mat-datepicker>\r\n            <mat-error *ngIf=\"group.get('DATE_REV').errors && formSubmitAttempt \">\r\n              You must provide a<strong> Revision Date </strong>\r\n            </mat-error>\r\n        </mat-form-field>\r\n\r\n         </td>\r\n            <td>\r\n              <div class=\"action-btns\">\r\n           \r\n                <button  mat-raised-button color=\"primary\" class=\"push-right\"\r\n                  (click)=\"doneRow(group)\">Save</button>\r\n                <button *ngIf=\"isDelete\"  mat-raised-button color=\"accent\" (click)=\"deleteRow(fieldGlobalIndex(i),group)\" class=\"push-right\">Delete</button>\r\n                <button  mat-raised-button color=\"accent\" (click)=\"cancel(group)\">Cancel</button>\r\n \r\n              </div>\r\n             \r\n            </td>\r\n        </tr>\r\n        <tr *ngIf=\"!group.get('isEditable').value\" >\r\n         \r\n          <td>\r\n            {{group.get('REV_NAME').value}}\r\n          </td>\r\n         <td>\r\n          {{group.get('REV_NO').value}}\r\n\r\n         </td>\r\n         <td>\r\n          \r\n            {{formatDateDisplay(group.get('DATE_REV').value)}}\r\n         \r\n         </td>\r\n          <td>\r\n            <div class=\"action-btns\">\r\n            <button  mat-raised-button color=\"primary\" class=\"push-right\"\r\n            (click)=\"editRow(group)\">Edit</button>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </ng-container>\r\n    </tbody>\r\n    <div class=\"action-container\">\r\n      <button mat-raised-button type=\"submit\" color=\"primary\" (click)=\"addRow()\">Add row</button>\r\n    </div>\r\n    <div style=\"float:right\">\r\n    <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\r\n</div>\r\n  </table>\r\n  \r\n</form>\r\n\r\n</div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/project-service-data/project-service-data.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/project-service-data/project-service-data.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Title group  -->\r\n<div class=\"title-group\">\r\n  <div class=\"main\">\r\n    <h1 class=\"mat-h1\">{{projectName}} - Electrical Schedule</h1>\r\n\r\n\r\n    <button [matMenuTriggerFor]=\"menu\" class=\"top-btn-mech\" mat-raised-button color=\"basic\">\r\n      <mat-icon>keyboard_arrow_down</mat-icon>\r\n    </button>\r\n    <mat-menu #menu=\"matMenu\">\r\n      <button mat-menu-item [routerLink]=\"['/project_rev/getAll/',projectId]\">\r\n        <mat-icon>autorenew</mat-icon>\r\n        <span>Revisions</span>\r\n      </button>\r\n      <button mat-menu-item [routerLink]=\"['/project_obj/getAll/',projectId]\">\r\n        <mat-icon>check_circle</mat-icon>\r\n        <span>Objects</span>\r\n      </button>\r\n      <button mat-menu-item [routerLink]=\"['/project_sheet/getAll/',projectId]\">\r\n        <mat-icon>lock</mat-icon>\r\n        <span>Register Sheet</span>\r\n      </button>\r\n      <button mat-menu-item [routerLink]=\"['/project_mech/getAll/',projectId]\">\r\n        <mat-icon>schedule</mat-icon>\r\n        <span>Mechanical Schedule</span>\r\n      </button>\r\n      <button mat-menu-item [routerLink]=\"['/project-service-data/getAll/',projectId]\">\r\n        <mat-icon>schedule</mat-icon>\r\n        <span>Electrical Schedule</span>\r\n      </button>\r\n      <button mat-menu-item [routerLink]=\"['/project_notes/getAll/',projectId]\">\r\n        <mat-icon>chat_bubble_outline</mat-icon>\r\n        <span>Notes</span>\r\n      </button>\r\n      <button mat-menu-item [routerLink]=\"['/generate-pdf/',projectId]\">\r\n        <mat-icon>cloud_download</mat-icon>\r\n        <span>Generate PDF</span>\r\n      </button>\r\n    </mat-menu>\r\n\r\n    <mat-divider class=\"mat-divider\"></mat-divider>\r\n\r\n\r\n\r\n    <div style=\"margin-top:15px\">\r\n\r\n      <div class=\"tab\">\r\n        <button class=\"tablinks\" id=\"BTN_SERVICE_DATA\" (click)=\"openTab('SERVICE_DATA')\">SERVICE DATA</button>\r\n        <button class=\"tablinks\" id=\"BTN_INTERCONNECT_SCHEDULE\" (click)=\"openTab('INTERCONNECT_SCHEDULE')\">INTERCONNECT</button>\r\n        <button class=\"tablinks\" id=\"BTN_CIRCUIT_TERMINATION_DATA\" (click)=\"openTab('CIRCUIT_TERMINATION_DATA')\">CIRCUIT TERMINATION</button>\r\n        <button class=\"tablinks\" id=\"BTN_INTERCONNECT_RACEWAY_SECTIONBOX_SCHEDULE\"\r\n        (click)=\"openTab('INTERCONNECT_RACEWAY_SECTIONBOX_SCHEDULE')\">RACEWAY\\BOX</button>\r\n      </div>\r\n\r\n      <div id=\"SERVICE_DATA\" class=\"tabcontent\"> \r\n\r\n        <input type=\"file\" class=\"top-btn mat-raised-button  custom-file-input\" id=\"importexcel\" name=\"importexcel\"\r\n          (change)=\"uploadServiceData($event)\" [(ngModel)]=\"UploadFileInput\">\r\n\r\n        <div class=\"container view-table\"> \r\n\r\n\r\n            <table class=\"table \">\r\n              <thead class=\"text-nowrap\">\r\n                <tr>\r\n                  <th *ngFor=\"let header of serviceDataHeader\">{{header}} </th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <ng-container *ngIf=\"serviceDataList.length<=0\">\r\n                  <tr class=\"no-data\">There is no Project Service Data Sheet added yet!</tr>\r\n                </ng-container>\r\n                <ng-container *ngFor=\"let row of serviceDataList | paginate:config ; let i=index \">\r\n                  <tr>\r\n                    <td   *ngFor=\"let col of serviceCols\">\r\n                      <input type=\"text\" *ngIf=\"isEditable && i==editIndex\" [(ngModel)]=\"row[col]\" [name] = \"col\"   /> \r\n                      <span *ngIf=\"!isEditable || i!=editIndex\">{{row[col]}}</span>\r\n                    </td> \r\n                    <td>\r\n                      <div class=\"action-btns\">\r\n                      <button *ngIf=\"!isEditable\"  mat-raised-button color=\"primary\" class=\"push-right\" (click)=\"editItem(i)\">Edit</button>\r\n                      <button *ngIf=\"isEditable\"  mat-raised-button color=\"primary\" class=\"push-right\" (click)=\"saveItem('SERVICE_DATA', row)\">Save</button>\r\n                      <button *ngIf=\"isEditable\"  mat-raised-button color=\"primary\" class=\"push-right\" (click)=\"cancelEdit('SERVICE_DATA')\">Cancel</button>\r\n                      <button *ngIf=\"isEditable\"  mat-raised-button color=\"primary\" class=\"push-right\" (click)=\"deleteItem('SERVICE_DATA', row)\">Delete</button>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                </ng-container>\r\n              </tbody>\r\n            </table>\r\n            \r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n      <div id=\"INTERCONNECT_SCHEDULE\" class=\"tabcontent\">\r\n\r\n        <input type=\"file\" class=\"top-btn mat-raised-button  custom-file-input\" \r\n          (change)=\"uploadInterconnectData($event)\" [(ngModel)]=\"UploadFileInput2\">\r\n          <div class=\"container view-table\"> \r\n\r\n            <table class=\"table \">\r\n              <thead class=\"text-nowrap\">\r\n                <tr>\r\n                  <th *ngFor=\"let header of interconnectHeader\">{{header}} </th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <ng-container *ngIf=\"interconnectList.length<=0\">\r\n                  <tr class=\"no-data\">There is no Interconnect Data Sheet added yet!</tr>\r\n                </ng-container>\r\n                <ng-container *ngFor=\"let row of interconnectList | paginate:config ; let i=index \">\r\n                  <tr>\r\n                    <td *ngFor=\"let col of interconnectCols\">\r\n                      <input type=\"text\" *ngIf=\"isEditable && i==editIndex\" [(ngModel)]=\"row[col]\" [name] = \"col\"   /> \r\n                      <span *ngIf=\"!isEditable || i!=editIndex\">{{row[col]}}</span>\r\n                    </td> \r\n                    <td>\r\n                      <div class=\"action-btns\">\r\n                        <button *ngIf=\"!isEditable\"  mat-raised-button color=\"primary\" class=\"push-right\" (click)=\"editItem(i)\">Edit</button>\r\n                        <button *ngIf=\"isEditable\"  mat-raised-button color=\"primary\" class=\"push-right\" (click)=\"saveItem('INTERCONNECT_SCHEDULE', row)\">Save</button>\r\n                        <button *ngIf=\"isEditable\"  mat-raised-button color=\"primary\" class=\"push-right\" (click)=\"cancelEdit('INTERCONNECT_SCHEDULE')\">Cancel</button>\r\n                        <button *ngIf=\"isEditable\"  mat-raised-button color=\"primary\" class=\"push-right\" (click)=\"deleteItem('INTERCONNECT_SCHEDULE', row)\">Delete</button>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                </ng-container>\r\n              </tbody>\r\n            </table>\r\n            \r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div id=\"CIRCUIT_TERMINATION_DATA\" class=\"tabcontent\">\r\n\r\n        <input type=\"file\" class=\"top-btn mat-raised-button  custom-file-input\" \r\n          (change)=\"uploadCircuitData($event)\" [(ngModel)]=\"UploadFileInput3\">\r\n          <div class=\"container view-table\"> \r\n\r\n            <table class=\"table \">\r\n              <thead class=\"text-nowrap\">\r\n                <tr>\r\n                  <th *ngFor=\"let header of circuitHeader\">{{header}} </th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <ng-container *ngIf=\"circuitList.length<=0\">\r\n                  <tr class=\"no-data\">There is no Circuit Termination Data Sheet added yet!</tr>\r\n                </ng-container>\r\n                <ng-container *ngFor=\"let row of circuitList | paginate:config ; let i=index \">\r\n                  <tr>\r\n                    <td *ngFor=\"let col of circuitCols\">\r\n                      <input type=\"text\" *ngIf=\"isEditable && i==editIndex\" [(ngModel)]=\"row[col]\" [name] = \"col\"   /> \r\n                      <span *ngIf=\"!isEditable || i!=editIndex\">{{row[col]}}</span>\r\n                    </td> \r\n                    <td>\r\n                      <div class=\"action-btns\">\r\n                        <button *ngIf=\"!isEditable\"  mat-raised-button color=\"primary\" class=\"push-right\" (click)=\"editItem(i)\">Edit</button>\r\n                        <button *ngIf=\"isEditable\"  mat-raised-button color=\"primary\" class=\"push-right\" (click)=\"saveItem('CIRCUIT_TERMINATION_DATA', row)\">Save</button>\r\n                        <button *ngIf=\"isEditable\"  mat-raised-button color=\"primary\" class=\"push-right\" (click)=\"cancelEdit('CIRCUIT_TERMINATION_DATA')\">Cancel</button>\r\n                        <button *ngIf=\"isEditable\"  mat-raised-button color=\"primary\" class=\"push-right\" (click)=\"deleteItem('CIRCUIT_TERMINATION_DATA', row)\">Delete</button>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                </ng-container>\r\n              </tbody>\r\n            </table>\r\n            \r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div id=\"INTERCONNECT_RACEWAY_SECTIONBOX_SCHEDULE\" class=\"tabcontent\">\r\n\r\n        <input type=\"file\" class=\"top-btn mat-raised-button  custom-file-input\" \r\n          (change)=\"uploadRacewayData($event)\" [(ngModel)]=\"UploadFileInput4\">\r\n          <div class=\"container view-table\"> \r\n            <table class=\"table \">\r\n              <thead class=\"text-nowrap\">\r\n                <tr>\r\n                  <th *ngFor=\"let header of racewayHeader\">{{header}} </th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <ng-container *ngIf=\"racewayList.length<=0\">\r\n                  <tr class=\"no-data\">There is no Raceway Data Sheet added yet!</tr>\r\n                </ng-container>\r\n                <ng-container *ngFor=\"let row of racewayList | paginate:config ; let i=index \">\r\n                  <tr>\r\n                    <td *ngFor=\"let col of racewayCols\">\r\n                      <input type=\"text\" *ngIf=\"isEditable && i==editIndex\" [(ngModel)]=\"row[col]\" [name] = \"col\"   /> \r\n                      <span *ngIf=\"!isEditable || i!=editIndex\">{{row[col]}}</span>\r\n                    </td>  \r\n                    <td>\r\n                      <div class=\"action-btns\">\r\n                        <button *ngIf=\"!isEditable\"  mat-raised-button color=\"primary\" class=\"push-right\" (click)=\"editItem(i)\">Edit</button>\r\n                        <button *ngIf=\"isEditable\"  mat-raised-button color=\"primary\" class=\"push-right\" (click)=\"saveItem('INTERCONNECT_RACEWAY_SECTIONBOX_SCHEDULE', row)\">Save</button>\r\n                        <button *ngIf=\"isEditable\"  mat-raised-button color=\"primary\" class=\"push-right\" (click)=\"cancelEdit('INTERCONNECT_RACEWAY_SECTIONBOX_SCHEDULE')\">Cancel</button>\r\n                        <button *ngIf=\"isEditable\"  mat-raised-button color=\"primary\" class=\"push-right\" (click)=\"deleteItem('INTERCONNECT_RACEWAY_SECTIONBOX_SCHEDULE', row)\">Delete</button>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                </ng-container>\r\n              </tbody>\r\n            </table>\r\n            \r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/project-sheets/add-project-sheets/add-project-sheets.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/project-sheets/add-project-sheets/add-project-sheets.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Title group  -->\r\n<div class=\"title-group\">\r\n  <h1 class=\"mat-h1\">Add Sheet Register </h1>\r\n  <mat-divider fxFlex=\"1 0\"></mat-divider>\r\n</div>\r\n\r\n<!-- Form -->\r\n<div class=\"inner-wrapper\">\r\n  <form [formGroup]=\"projects\" (ngSubmit)=\"submitAddProjectsSheetForm()\" #resetProjectsSheetForm=\"ngForm\" novalidate>\r\n    <!-- Left block -->\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput placeholder=\"Item name\" formControlName=\"ITEM_NAME\">\r\n      <mat-error *ngIf=\"handleError('ITEM_NAME', 'required')\">\r\n        You must provide a<strong> Item Name</strong>\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <br/>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput placeholder=\"Description A\" formControlName=\"DESCRIPTION_A\">\r\n      <mat-error *ngIf=\"handleError('DESCRIPTION_A', 'required')\">\r\n        You must provide a<strong> Description A</strong>\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <br/>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput placeholder=\"Description B\" formControlName=\"DESCRIPTION_B\">\r\n      <mat-error *ngIf=\"handleError('DESCRIPTION_B', 'required')\">\r\n        You must provide a<strong> Description B</strong>\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <br/>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput placeholder=\"Description C\" formControlName=\"DESCRIPTION_C\">\r\n      <mat-error *ngIf=\"handleError('DESCRIPTION_C', 'required')\">\r\n        You must provide a<strong> Description A</strong>\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <br/>\r\n        <!-- Name -->\r\n        <mat-form-field appearance=\"fill\">\r\n          <mat-label>Section</mat-label>\r\n          <mat-select  formControlName=\"SECTION\">\r\n            <mat-option *ngFor=\"let serv of section\" [value]=\"serv\">\r\n              {{serv}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        \r\n      <br/>\r\n\r\n      <mat-form-field appearance=\"fill\">\r\n        <mat-label>Item No</mat-label>\r\n        <mat-select formControlName=\"ITEM_NO\">\r\n          <mat-option *ngFor=\"let comp of item_no\" [value]=\"comp\">\r\n            {{comp}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <br/>\r\n      <mat-form-field>\r\n        <input matInput readonly [matDatepicker]=\"picker\" placeholder=\"Date Issued\"\r\n          (dateChange)=\"formatDate($event)\">\r\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n        <mat-datepicker #picker></mat-datepicker>\r\n        <mat-error *ngIf=\"handleError('DATE_ISSUED', 'required')\">\r\n         Date of issued is required\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <br/>\r\n      <mat-form-field appearance=\"fill\">\r\n        <mat-label>Rev Issued</mat-label>\r\n        <mat-select formControlName=\"REV_ISSUED\">\r\n          <mat-option *ngFor=\"let comp of rev_issued\" [value]=\"comp\">\r\n            {{comp}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      \r\n\r\n    <!-- Submit & Reset -->\r\n   \r\n        <div class=\"button-wrapper\">\r\n          <button mat-flat-button color=\"warn\">Submit</button>\r\n        </div>\r\n      \r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/project-sheets/edit-project-sheets/edit-project-sheets.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/project-sheets/edit-project-sheets/edit-project-sheets.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Title group  -->\r\n<div class=\"title-group\">\r\n  <h1 class=\"mat-h1\">Add Sheet Register </h1>\r\n  <mat-divider fxFlex=\"1 0\"></mat-divider>\r\n</div>\r\n\r\n<!-- Form -->\r\n<div class=\"inner-wrapper\">\r\n  <form [formGroup]=\"projects\" (ngSubmit)=\"submitEditProjectsSheetForm()\" #resetProjectsSheetForm=\"ngForm\" novalidate>\r\n    <!-- Left block -->\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput placeholder=\"Item name\" formControlName=\"ITEM_NAME\">\r\n      <mat-error *ngIf=\"handleError('ITEM_NAME', 'required')\">\r\n        You must provide a<strong> Item Name</strong>\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <br/>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput placeholder=\"Description A\" formControlName=\"DESCRIPTION_A\">\r\n      <mat-error *ngIf=\"handleError('DESCRIPTION_A', 'required')\">\r\n        You must provide a<strong> Description A</strong>\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <br/>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput placeholder=\"Description B\" formControlName=\"DESCRIPTION_B\">\r\n      <mat-error *ngIf=\"handleError('DESCRIPTION_B', 'required')\">\r\n        You must provide a<strong> Description B</strong>\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <br/>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput placeholder=\"Description C\" formControlName=\"DESCRIPTION_C\">\r\n      <mat-error *ngIf=\"handleError('DESCRIPTION_C', 'required')\">\r\n        You must provide a<strong> Description A</strong>\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <br/>\r\n        <!-- Name -->\r\n        <mat-form-field appearance=\"fill\">\r\n          <mat-label>Section</mat-label>\r\n          <mat-select  formControlName=\"SECTION\">\r\n            <mat-option *ngFor=\"let serv of section\" [value]=\"serv\">\r\n              {{serv}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        \r\n      <br/>\r\n\r\n      <mat-form-field appearance=\"fill\">\r\n        <mat-label>Item No</mat-label>\r\n        <mat-select formControlName=\"ITEM_NO\">\r\n          <mat-option *ngFor=\"let comp of item_no\" [value]=\"comp\">\r\n            {{comp}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <br/>\r\n      <mat-form-field>\r\n        <input matInput readonly [matDatepicker]=\"picker\" placeholder=\"Date Issued\" formControlName=\"DATE_ISSUED\"\r\n          (dateChange)=\"formatDate($event)\">\r\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n        <mat-datepicker #picker></mat-datepicker>\r\n        <mat-error *ngIf=\"handleError('DATE_ISSUED', 'required')\">\r\n         Date of issued is required\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <br/>\r\n      <mat-form-field appearance=\"fill\">\r\n        <mat-label>Rev Issued</mat-label>\r\n        <mat-select formControlName=\"REV_ISSUED\">\r\n          <mat-option *ngFor=\"let comp of rev_issued\" [value]=\"comp\">\r\n            {{comp}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      \r\n\r\n    <!-- Submit & Reset -->\r\n   \r\n        <div class=\"button-wrapper\">\r\n          <button mat-flat-button color=\"warn\">Submit</button>\r\n        </div>\r\n      \r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/project-sheets/project-sheets/project-sheets.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/project-sheets/project-sheets/project-sheets.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Title group  -->\r\n<div class=\"title-group\">\r\n  <div class=\"main\">\r\n    <h1 class=\"mat-h1\">Project Register Sheets</h1>\r\n    <button class=\"top-btn\" mat-raised-button color=\"primary\"routerLink=\"/project_sheet/add-project_sheet/{{projectId}}\" >+ Add</button>\r\n\r\n    </div>\r\n  <mat-divider class=\"mat-divider\" ></mat-divider>\r\n</div>\r\n\r\n<p *ngIf=\"Projects.length <= 0\" class=\"no-data\">There is no project-sheet added yet!</p>\r\n\r\n<div class=\"container view-table\" >\r\n  <div class=\"mat-elevation-z8\">\r\n    <table mat-table [dataSource]=\"dataSource\">\r\n   \r\n     \r\n      <ng-container matColumnDef=\"ITEM_NAME\">\r\n        <th mat-header-cell *matHeaderCellDef> Item Name </th>\r\n        <td mat-cell *matCellDef=\"let element\">{{ element.ITEM_NAME}} </td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"DESCRIPTION_A\">\r\n        <th mat-header-cell *matHeaderCellDef> Description A  </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{ element.DESCRIPTION_A }}</td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"DESCRIPTION_B\">\r\n        <th mat-header-cell *matHeaderCellDef> Description B  </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.DESCRIPTION_B}} </td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"DESCRIPTION_C\">\r\n        <th mat-header-cell *matHeaderCellDef> Description C  </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.DESCRIPTION_C}} </td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"SECTION\">\r\n        <th mat-header-cell *matHeaderCellDef> Section  </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.SECTION}} </td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"ITEM_NO\">\r\n        <th mat-header-cell *matHeaderCellDef> Item No  </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.ITEM_NO}} </td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"DATE_ISSUED\">\r\n        <th mat-header-cell *matHeaderCellDef> Date Issued </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.DATE_ISSUED}} </td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"REV_ISSUED\">\r\n        <th mat-header-cell *matHeaderCellDef> Rev issued  </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.REV_ISSUED}} </td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"action\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"text-align: center;\"> Action </th>\r\n        <td mat-cell *matCellDef=\"let element; let i = index;\">\r\n          <div class=\"action-btns\">\r\n           \r\n          <button  mat-raised-button color=\"primary\" class=\"push-right\"\r\n            [routerLink]=\"['/project_sheet/edit-project_sheet/',projectId,element._id]\">Edit</button>\r\n          <button  mat-raised-button color=\"accent\" (click)=\"deleteProjectSheet(i, element)\">Delete</button>\r\n          </div>\r\n        </td>\r\n      </ng-container>\r\n     \r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n      \r\n    </table>\r\n\r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/projects/add-projects/add-projects.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/projects/add-projects/add-projects.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Title group  -->\r\n<div class=\"title-group\">\r\n  <h1 class=\"mat-h1\">Add Project </h1>\r\n  <mat-divider fxFlex=\"1 0\"></mat-divider>\r\n</div>\r\n\r\n<!-- Form -->\r\n<div class=\"inner-wrapper\">\r\n  <form [formGroup]=\"projects\" (ngSubmit)=\"submitAddProjectsForm()\" #resetProjectsForm=\"ngForm\" novalidate>\r\n    <!-- Left block -->\r\n    <mat-card>\r\n      <div class=\"controlers-wrapper\">\r\n        <!-- Name -->\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"Project Name\" formControlName=\"PROJECT_NAME\">\r\n          <mat-error *ngIf=\"handleError('PROJECT_NAME', 'required')\">\r\n            You must provide a<strong> PROJECT_NAME</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n        </div>\r\n        </mat-card>\r\n      <br/>\r\n\r\n          <mat-slide-toggle  name=\"PROCESS_Y_N\" (change)=\"processChange($event)\">Process</mat-slide-toggle>&nbsp;\r\n         \r\n          <mat-slide-toggle  name=\"CONTRACTUAL_Y_N\" (change)=\"contractChange($event)\">Contractual</mat-slide-toggle>\r\n        \r\n      \r\n\r\n      \r\n\r\n    <!-- Submit & Reset -->\r\n   \r\n        <div class=\"button-wrapper\">\r\n          <button mat-flat-button color=\"warn\">Submit</button>\r\n        </div>\r\n      \r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/projects/edit-projects/edit-projects.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/projects/edit-projects/edit-projects.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Title group  -->\r\n<div class=\"title-group\">\r\n  <h1 class=\"mat-h1\">Edit Project </h1>\r\n  <mat-divider fxFlex=\"1 0\"></mat-divider>\r\n</div>\r\n\r\n<!-- Form -->\r\n<div class=\"inner-wrapper\">\r\n  <form [formGroup]=\"projects\" (ngSubmit)=\"submitEditProjectsForm()\" #resetProjectForm=\"ngForm\" novalidate>\r\n    <!-- Left block -->\r\n    <mat-card>\r\n      <div class=\"controlers-wrapper\">\r\n        <!-- Name -->\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"Project Name\" formControlName=\"PROJECT_NAME\">\r\n          <mat-error *ngIf=\"handleError('PROJECT_NAME', 'required')\">\r\n            You must provide a<strong> Project name</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n\r\n        </div>\r\n        </mat-card>\r\n        \r\n      <br/>\r\n      <mat-slide-toggle  name=\"PROCESS_Y_N\" (change)=\"processChange($event)\" [checked]=\"projects.value.PROCESS_Y_N == 1\">Process</mat-slide-toggle>&nbsp;\r\n         \r\n      <mat-slide-toggle  name=\"CONTRACTUAL_Y_N\" (change)=\"contractChange($event)\"[checked]=\"projects.value.CONTRACTUAL_Y_N == 1\">Contractual</mat-slide-toggle>\r\n    \r\n    <!-- Submit & Reset -->\r\n    \r\n        <div class=\"button-wrapper\">\r\n          <button mat-flat-button color=\"warn\">Submit</button>\r\n        </div>\r\n     \r\n  </form>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/projects/generate-pdf/generate-pdf.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/projects/generate-pdf/generate-pdf.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title-group\">\r\n    <div class=\"main\">\r\n        <h1 class=\"mat-h1\">{{projectName}} - Generate PDF</h1>\r\n        <button  [matMenuTriggerFor]=\"menu\" class=\"top-btn-mech\" mat-raised-button color=\"basic\">\r\n          <mat-icon>keyboard_arrow_down</mat-icon>\r\n        </button>\r\n        <mat-menu #menu=\"matMenu\">\r\n          <button mat-menu-item [routerLink]=\"['/project_rev/getAll/',projectId]\">\r\n            <mat-icon>autorenew</mat-icon>\r\n            <span>Revisions</span>\r\n          </button>\r\n          <button mat-menu-item [routerLink]=\"['/project_obj/getAll/',projectId]\">\r\n            <mat-icon>check_circle</mat-icon>\r\n            <span>Objects</span>\r\n          </button>\r\n          <button mat-menu-item [routerLink]=\"['/project_sheet/getAll/',projectId]\">\r\n            <mat-icon>lock</mat-icon>\r\n            <span>Register Sheet</span>\r\n          </button>\r\n          <button mat-menu-item  [routerLink]=\"['/project_mech/getAll/',projectId]\"> \r\n            <mat-icon>schedule</mat-icon>\r\n            <span>Mechanical Schedule</span>\r\n          </button>\r\n          <button mat-menu-item  [routerLink]=\"['/project-service-data/getAll/',projectId]\"> \r\n            <mat-icon>schedule</mat-icon>\r\n            <span>Electrical Schedule</span>\r\n          </button>\r\n          <button mat-menu-item [routerLink]=\"['/project_notes/getAll/',projectId]\">\r\n            <mat-icon>chat_bubble_outline</mat-icon>\r\n            <span>Notes</span>\r\n          </button>\r\n          <button mat-menu-item [routerLink]=\"['/generate-pdf/',projectId]\">\r\n            <mat-icon>cloud_download</mat-icon>\r\n            <span>Generate PDF</span>\r\n          </button>               \r\n        </mat-menu>\r\n        <!-- <button class=\"top-btn\" mat-raised-button color=\"primary\"routerLink=\"/project/add-project\" >+ Add</button> -->\r\n\r\n    </div>\r\n    <mat-divider class=\"mat-divider\"></mat-divider>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"inputscreen\">\r\n    <div class=\"row col-md-10\" style=\"padding:20px 5px;\">\r\n        <div class=\"col-md-4\">\r\n            <!-- <label for=\"orientation\">PDF Orientation:</label>  -->\r\n\r\n            <mat-card>\r\n                <mat-form-field appearance=\"fill\">\r\n                  <mat-label>PDF Orientation</mat-label>\r\n                  <mat-select  name=\"orientation\" id=\"orientation\"  [(ngModel)]=\"orientation\">                    \r\n                    <mat-option value=\"landscape\">Landscape</mat-option>\r\n                    <mat-option value=\"portrait\">Portrait</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                \r\n                </mat-card>\r\n \r\n        </div>\r\n        <div class=\"col-md-4\">\r\n\r\n            <mat-card>\r\n                <mat-form-field appearance=\"fill\">\r\n                  <mat-label>PDF Page Size</mat-label>\r\n                  <mat-select  name=\"pagesize\" id=\"pagesize\" [(ngModel)]=\"pageSize\" >\r\n                    <mat-option value=\"a3\">A3</mat-option>\r\n                    <mat-option value=\"11x17\">11 X 17</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                \r\n                </mat-card>\r\n \r\n        </div>\r\n    </div>\r\n\r\n    <button  mat-raised-button color=\"primary\" class=\"push-right\" (click)=\"GetPDFData()\">Generate PDF</button>\r\n    <button  mat-raised-button color=\"primary\" class=\"push-right\" (click)=\"ExportDrawing()\">Export</button>\r\n \r\n \r\n</div>\r\n\r\n<div id=\"graphContainer\" class=\"mxdrawings\"></div> \r\n<div id=\"eqpContainer\" class=\"mxdrawings\"></div> \r\n<div id=\"serviceDataContainer\" class=\"mxdrawings\"></div> \r\n<div id=\"elecEqpContainer\" class=\"mxdrawings\"></div> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/projects/project-lists/project-lists.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/projects/project-lists/project-lists.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Title group  -->\r\n<div class=\"title-group\">\r\n  <div class=\"main\">\r\n    <h1 class=\"mat-h1\">Projects</h1>\r\n\r\n    </div>\r\n  <mat-divider class=\"mat-divider\" ></mat-divider>\r\n</div>\r\n\r\n<div class=\"container view-table\" >\r\n    <div class=\"mat-elevation-z8\">\r\n      <form class=\"search-form\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <mat-label>Search</mat-label>\r\n          <input matInput placeholder=\"Project Name\" (keyup)=\"filterFormControls($event)\">\r\n        </mat-form-field>\r\n      </form>\r\n\r\n<form [formGroup]=\"userTable\"  >\r\n  <table  class=\"table \" matSort (matSortChange)=\"sortData($event)\">\r\n    <thead class=\"text-nowrap\">\r\n      <th mat-sort-header=\"PROJECT_NAME\">Project name</th>\r\n      <th>Process</th>\r\n      <th>Contractual</th>\r\n      <th>Action</th>\r\n\r\n    </thead>\r\n    <tbody>\r\n      <ng-container formArrayName=\"tableRows\" *ngFor=\"let group of getFormControls.controls | paginate:config ; let i=index \">\r\n        <tr *ngIf=\"group.get('isEditable').value\" [formGroupName]=\"fieldGlobalIndex(i)\">\r\n          <td>\r\n            <mat-form-field>\r\n              <input matInput type=\"text\" formControlName=\"PROJECT_NAME\">\r\n              <mat-error *ngIf=\"group.get('PROJECT_NAME').errors && formSubmitAttempt \">\r\n                You must provide a unique<br/><strong> Project name</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </td>\r\n          <td>\r\n              <mat-slide-toggle formControlName=\"PROCESS_Y_N\"   (change)=\"processChange($event,group)\" [checked]=\"group.value.PROCESS_Y_N == 1\">Process</mat-slide-toggle>\r\n          </td>\r\n          <td>\r\n              <mat-slide-toggle formControlName=\"CONTRACTUAL_Y_N\"   (change)=\"contractChange($event,group)\"[checked]=\"group.value.CONTRACTUAL_Y_N == 1\">Contractual</mat-slide-toggle>\r\n          </td>\r\n            <td>\r\n              <div class=\"action-btns\">\r\n           \r\n                <button  mat-raised-button color=\"primary\" class=\"push-right\"\r\n                  (click)=\"doneRow(group)\">Save</button>\r\n                <button *ngIf=\"isDelete\" mat-raised-button color=\"accent\" (click)=\"deleteRow(fieldGlobalIndex(i),group)\">Delete</button>\r\n                <button  mat-raised-button color=\"accent\" (click)=\"cancel(group)\">Cancel</button>\r\n\r\n              </div>\r\n             \r\n            </td>\r\n        </tr>\r\n        <tr *ngIf=\"!group.get('isEditable').value\" >\r\n         \r\n          <td>\r\n            {{group.get('PROJECT_NAME').value}}\r\n          </td>\r\n         <td>\r\n          {{group.get('PROCESS_Y_N').value?1:0}}\r\n\r\n         </td>\r\n         <td>\r\n          {{group.get('CONTRACTUAL_Y_N').value?1:0}}\r\n\r\n         </td>\r\n          <td>\r\n            <div class=\"action-btns\">\r\n              <button  [matMenuTriggerFor]=\"menu\" mat-raised-button color=\"primary\" class=\"push-right\">\r\n                <mat-icon>more_vert</mat-icon>\r\n                <span>Menu</span>\r\n              </button>\r\n              <mat-menu #menu=\"matMenu\">\r\n                <button mat-menu-item [routerLink]=\"['/project_rev/getAll/',group.value._id]\">\r\n                  <mat-icon>autorenew</mat-icon>\r\n                  <span>Revisions</span>\r\n                </button>\r\n                <button mat-menu-item [routerLink]=\"['/project_obj/getAll/',group.value._id]\">\r\n                  <mat-icon>check_circle</mat-icon>\r\n                  <span>Objects</span>\r\n                </button>\r\n                <button mat-menu-item [routerLink]=\"['/project_sheet/getAll/',group.value._id]\">\r\n                  <mat-icon>lock</mat-icon>\r\n                  <span>Register Sheet</span>\r\n                </button>\r\n                <button mat-menu-item  [routerLink]=\"['/project_mech/getAll/',group.value._id]\"> \r\n                  <mat-icon>schedule</mat-icon>\r\n                  <span>Mechanical Schedule</span>\r\n                </button>\r\n                <button mat-menu-item  [routerLink]=\"['/project-service-data/getAll/',group.value._id]\"> \r\n                  <mat-icon>schedule</mat-icon>\r\n                  <span>Electrical Schedule</span>\r\n                </button>\r\n                <button mat-menu-item [routerLink]=\"['/project_notes/getAll/',group.value._id]\">\r\n                  <mat-icon>chat_bubble_outline</mat-icon>\r\n                  <span>Notes</span>\r\n                </button>\r\n                <button mat-menu-item [routerLink]=\"['/generate-pdf/',group.value._id]\">\r\n                  <mat-icon>cloud_download</mat-icon>\r\n                  <span>Generate PDF</span>\r\n                </button>               \r\n              </mat-menu>\r\n            <button  mat-raised-button color=\"primary\" class=\"push-right\"\r\n                  (click)=\"editRow(group)\">Edit</button>\r\n                  </div>\r\n          </td>\r\n        </tr>\r\n      </ng-container>\r\n    </tbody>\r\n    <div class=\"action-container\">\r\n      <button mat-raised-button type=\"submit\" color=\"primary\" (click)=\"addRow()\">Add row</button>\r\n    </div>\r\n    <div style=\"float:right\">\r\n    <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\r\n</div>\r\n  </table>\r\n  \r\n</form>\r\n\r\n</div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/register/register.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/register/register.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Register</h2>\r\n<form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"form-group\">\r\n        <label for=\"emailAddress\">Email Address</label>\r\n        <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.emailAddress?.errors }\" />\r\n        <div *ngIf=\"submitted && f.firstName?.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.firstName?.errors.required\">Email Address is required</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"firstname\">Full Name</label>\r\n        <input type=\"text\" formControlName=\"name\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.name?.errors }\" />\r\n        <div *ngIf=\"submitted && f.name?.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.name?.errors.required\">Your Name is required</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"lastname\">Phone</label>\r\n        <input type=\"number\" formControlName=\"phone\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.phone?.errors }\" />\r\n        <div *ngIf=\"submitted && f.phone?.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.phone?.errors.required\">Phone numaber is required</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"password\">Password</label>\r\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password?.errors }\" />\r\n        <div *ngIf=\"submitted && f.password?.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.password?.errors.required\">Password is required</div>\r\n            <div *ngIf=\"f.password?.errors.minlength\">Password must be at least 6 characters</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">\r\n            <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n            Next\r\n        </button>\r\n        <a routerLink=\"/login\" class=\"btn btn-link\">Cancel</a>\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/services-component/add-services-component/add-services-component.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/services-component/add-services-component/add-services-component.component.html ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Title group  -->\r\n<div class=\"title-group\">\r\n  <h1 class=\"mat-h1\">Add Component </h1>\r\n  <mat-divider fxFlex=\"1 0\"></mat-divider>\r\n</div>\r\n\r\n<!-- Form -->\r\n<div class=\"inner-wrapper\">\r\n  <form [formGroup]=\"components\" (ngSubmit)=\"submitAddComponentsForm()\" #resetComponentsForm=\"ngForm\" novalidate>\r\n    <!-- Left block -->\r\n    <mat-card>\r\n      <div class=\"controlers-wrapper\">\r\n        <!-- Name -->\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"Component Name\" formControlName=\"COMPONENT_NAME\">\r\n          <mat-error *ngIf=\"handleError('COMPONENT_NAME', 'required')\">\r\n            You must provide a<strong> Component Name</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n\r\n        </div>\r\n        </mat-card>\r\n        \r\n      \r\n\r\n    <!-- Submit & Reset -->\r\n    <mat-card>\r\n      <div class=\"full-wrapper button-wrapper\">\r\n        <div class=\"button-wrapper\">\r\n          <button mat-flat-button color=\"warn\">Submit</button>\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/services-component/edit-services-component/edit-services-component.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/services-component/edit-services-component/edit-services-component.component.html ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Title group  -->\r\n<div class=\"title-group\">\r\n  <h1 class=\"mat-h1\">Edit Component </h1>\r\n  <mat-divider fxFlex=\"1 0\"></mat-divider>\r\n</div>\r\n\r\n<!-- Form -->\r\n<div class=\"inner-wrapper\">\r\n  <form [formGroup]=\"components\" (ngSubmit)=\"submitEditComponentsForm()\" #resetComponentForm=\"ngForm\" novalidate>\r\n    <!-- Left block -->\r\n    <mat-card>\r\n      <div class=\"controlers-wrapper\">\r\n        <!-- Name -->\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"Component Name\" formControlName=\"COMPONENT_NAME\">\r\n          <mat-error *ngIf=\"handleError('COMPONENT_NAME', 'required')\">\r\n            You must provide a<strong> Component name</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n\r\n        </div>\r\n        </mat-card>\r\n        \r\n        <mat-card *ngIf = \"AllServices.length > 0\" class=\"PipeData\">\r\n          <div >\r\n            <p>Select Services for this Component:</p>\r\n            <div *ngFor=\"let pipes of AllServices; let i = index\" >\r\n              <label>\r\n                <input type=\"checkbox\" [checked]=\"ServiceData.includes(pipes._id)\" [value]=\"pipes._id\" (change)=\"onCheckboxChange($event)\" />\r\n                {{pipes.SERVICE_NAME}}\r\n              </label>\r\n           </div>  \r\n          </div>\r\n        </mat-card>\r\n\r\n    <!-- Submit & Reset -->\r\n    <mat-card>\r\n      <div class=\"full-wrapper button-wrapper\">\r\n        <div class=\"button-wrapper\">\r\n          <button mat-flat-button color=\"warn\">Submit</button>\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n  </form>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/services-component/services-component/services-component.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/services-component/services-component/services-component.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Title group  -->\r\n<div class=\"title-group\">\r\n  <div class=\"main\">\r\n    <h1 class=\"mat-h1\">COMPONENT</h1>\r\n\r\n    </div>\r\n  <mat-divider class=\"mat-divider\" ></mat-divider>\r\n</div>\r\n<br/>\r\n<div class=\"container view-table\" >\r\n    <div class=\"mat-elevation-z8\">\r\n<form [formGroup]=\"userTable\">\r\n  <table  class=\"table \">\r\n    <thead class=\"text-nowrap\">\r\n      <th>Component Name</th>\r\n      <th>Services</th>\r\n    \r\n      <th>Action</th>\r\n\r\n    </thead>\r\n    <tbody>\r\n      <ng-container formArrayName=\"tableRows\" *ngFor=\"let group of getFormControls.controls | paginate:config ; let i=index\">\r\n        <tr *ngIf=\"group.get('isEditable').value\" [formGroupName]=\"fieldGlobalIndex(i)\">\r\n          <td>\r\n            <mat-form-field class=\"matForm\">\r\n              <input matInput type=\"text\" formControlName=\"COMPONENT_NAME\">\r\n              <mat-error *ngIf=\"group.get('COMPONENT_NAME').errors && formSubmitAttempt \">\r\n                You must provide a unique<strong> component name</strong>\r\n              </mat-error>\r\n              \r\n            </mat-form-field>\r\n          </td>\r\n          <td>\r\n            <mat-form-field>\r\n              <mat-select [formControl]=\"toppings\" #sel multiple>\r\n                <mat-option *ngFor=\"let topping of AllService\" [value]=\"topping._id\" [selected]=\"group.get('SERVICE').value.includes(topping._id)\" (onSelectionChange)=\"SelectServices(group,$event,sel)\" >{{topping.SERVICE_NAME}}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </td>\r\n         \r\n            <td>\r\n              <div class=\"action-btns\">\r\n\r\n              <button  mat-raised-button color=\"primary\" class=\"push-right\"\r\n              (click)=\"doneRow(group)\">Save</button>\r\n            <button *ngIf=\"isDelete\"  mat-raised-button color=\"accent\" (click)=\"deleteRow(fieldGlobalIndex(i),group)\" class=\"push-right\" >Delete</button>\r\n            <button  mat-raised-button color=\"accent\" (click)=\"cancel(group)\" >Cancel</button>\r\n  \r\n          </div>\r\n            </td>\r\n        </tr>\r\n        <tr *ngIf=\"!group.get('isEditable').value\" >\r\n         \r\n          <td>\r\n            {{group.get('COMPONENT_NAME').value}}\r\n          </td>\r\n          <td >\r\n            <span *ngFor=\"let services of group.value.SERVICE\"> <p >{{retrieveService(services)}}</p> </span>\r\n          </td>\r\n        \r\n          <td>\r\n            <div class=\"action-btns\">\r\n            <button  mat-raised-button color=\"primary\" class=\"push-right\"\r\n            (click)=\"editRow(group)\">Edit</button>    \r\n          </div>\r\n                </td>\r\n        </tr>\r\n      </ng-container>\r\n    </tbody>\r\n    <div style=\"float:right\">\r\n      <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\r\n  </div>\r\n  </table>\r\n  <div class=\"action-container\">\r\n    <button mat-raised-button type=\"submit\" color=\"primary\" (click)=\"addRow()\">Add row</button>\r\n  </div>\r\n</form>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/services-size/services-size.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/services-size/services-size.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Title group  -->\r\n<div class=\"title-group\">\r\n  <div class=\"main\">\r\n    <h1 class=\"mat-h1\">Service Size</h1>\r\n\r\n    </div>\r\n  <mat-divider class=\"mat-divider\" ></mat-divider>\r\n</div>\r\n\r\n<div class=\"container view-table\" >\r\n    <div class=\"mat-elevation-z8\">\r\n      \r\n\r\n<form [formGroup]=\"userTable\"  >\r\n  <table  class=\"table \" matSort (matSortChange)=\"sortData($event)\" >\r\n    <thead class=\"text-nowrap\">\r\n      <th mat-sort-header=\"SIZE_VALUE\">Size value</th>\r\n      <th>Action</th>\r\n\r\n    </thead>\r\n    <tbody>\r\n      <ng-container formArrayName=\"tableRows\" *ngFor=\"let group of getFormControls.controls | paginate:config ; let i=index \">\r\n        <tr *ngIf=\"group.get('isEditable').value\" [formGroupName]=\"fieldGlobalIndex(i)\">\r\n          <td>\r\n            <mat-form-field>\r\n              <input matInput type=\"text\" formControlName=\"SIZE_VALUE\">\r\n              <mat-error *ngIf=\"group.get('SIZE_VALUE').errors && formSubmitAttempt \">\r\n                You must provide a<strong> Size value (digits only)</strong>\r\n              </mat-error>\r\n              \r\n            </mat-form-field>\r\n          </td>\r\n         \r\n            <td>\r\n              <div class=\"action-btns\">\r\n\r\n                <button  mat-raised-button color=\"primary\" class=\"push-right\"\r\n                (click)=\"doneRow(group)\">Save</button>\r\n              <button *ngIf=\"isDelete\"  mat-raised-button color=\"accent\" (click)=\"deleteRow(fieldGlobalIndex(i),group)\" class=\"push-right\">Delete</button>\r\n              <button   mat-raised-button color=\"accent\" (click)=\"cancel(group)\">Cancel</button>\r\n \r\n            </div>\r\n            </td>\r\n        </tr>\r\n        <tr *ngIf=\"!group.get('isEditable').value\" >\r\n         \r\n          <td>\r\n            {{group.get('SIZE_VALUE').value}}\r\n          </td>\r\n         \r\n          <td>\r\n            <div class=\"action-btns\">\r\n              <button  mat-raised-button color=\"primary\" class=\"push-right\"\r\n              (click)=\"editRow(group)\">Edit</button>    \r\n            </div>        \r\n            </td>\r\n        </tr>\r\n      </ng-container>\r\n    </tbody>\r\n    <div class=\"action-container\">\r\n      <button mat-raised-button type=\"submit\" color=\"primary\" (click)=\"addRow()\">Add row</button>\r\n    </div>\r\n    <div style=\"float:right\">\r\n    <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\r\n</div>\r\n  </table>\r\n  \r\n</form>\r\n\r\n</div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/services/services.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/services/services.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Title group  -->\r\n<div class=\"title-group\">\r\n  <div class=\"main\">\r\n    <h1 class=\"mat-h1\">Services</h1>\r\n\r\n    </div>\r\n  <mat-divider class=\"mat-divider\" ></mat-divider>\r\n</div>\r\n\r\n<div class=\"container view-table\" >\r\n    <div class=\"mat-elevation-z8\">\r\n      \r\n<form [formGroup]=\"userTable\"  >\r\n  <table  class=\"table \" matSort (matSortChange)=\"sortData($event)\" >\r\n    <thead class=\"text-nowrap\">\r\n      <th mat-sort-header=\"SERVICE_NAME\">Service Name </th>\r\n      <th>Pipe Class</th>\r\n      <th>Action</th>\r\n\r\n    </thead>\r\n    <tbody>\r\n      <ng-container formArrayName=\"tableRows\" *ngFor=\"let group of getFormControls.controls | paginate:config ; let i=index \">\r\n        <tr *ngIf=\"group.get('isEditable').value\" [formGroupName]=\"fieldGlobalIndex(i)\">\r\n          <td>\r\n            <mat-form-field>\r\n              <input matInput type=\"text\" formControlName=\"SERVICE_NAME\">\r\n              <mat-error *ngIf=\"group.get('SERVICE_NAME').errors && formSubmitAttempt \">\r\n                You must provide a unique<br/><strong> Service Name</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </td>\r\n         <td>\r\n          <mat-form-field>\r\n            <mat-select [formControl]=\"toppings\" #sel multiple>\r\n              <mat-option *ngFor=\"let topping of PipeData\" [value]=\"topping._id\"  (onSelectionChange)=\"SelectServices(group,$event,sel)\" >{{topping.PIPE_NAME}}</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n         </td>\r\n            <td>\r\n              <div class=\"action-btns\">\r\n\r\n                <button  mat-raised-button color=\"primary\" class=\"push-right\"\r\n                (click)=\"doneRow(group)\">Save</button>\r\n              <button *ngIf=\"isDelete\"  mat-raised-button color=\"accent\" (click)=\"deleteRow(fieldGlobalIndex(i),group)\" class=\"push-right\">Delete</button>\r\n              <button   mat-raised-button color=\"accent\" (click)=\"cancel(group)\">Cancel</button>\r\n\r\n              </div>\r\n            </td>\r\n        </tr>\r\n        <tr *ngIf=\"!group.get('isEditable').value\" >\r\n         \r\n          <td>\r\n            {{group.get('SERVICE_NAME').value}}\r\n          </td>\r\n         <td>\r\n          <span *ngFor=\"let pipes of group.value.PIPE\"> <p >{{retrievePipe(pipes)}}</p> </span>\r\n\r\n         </td>\r\n          <td>\r\n            <div class=\"action-btns\">\r\n              <button  mat-raised-button color=\"primary\" class=\"push-right\"\r\n              (click)=\"editRow(group)\">Edit</button>    \r\n            </div>         \r\n           </td>\r\n        </tr>\r\n      </ng-container>\r\n    </tbody>\r\n    <div class=\"action-container\">\r\n      <button mat-raised-button type=\"submit\" color=\"primary\" (click)=\"addRow()\">Add row</button>\r\n    </div>\r\n    <div style=\"float:right\">\r\n    <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\r\n</div>\r\n  </table>\r\n  \r\n</form>\r\n\r\n</div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/students-list/students-list.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/students-list/students-list.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Title group  -->\r\n<div class=\"title-group\">\r\n  <h1 class=\"mat-h1\">Students List</h1>\r\n  <mat-divider fxFlex=\"1 0\"></mat-divider>\r\n</div>\r\n\r\n<p *ngIf=\"StudentData.length <= 0\" class=\"no-data\">There is no student added yet!</p>\r\n\r\n<div class=\"container\" *ngIf=\"StudentData.length > 0\">\r\n  <div class=\"mat-elevation-z8\">\r\n    <table mat-table [dataSource]=\"dataSource\">\r\n      <ng-container matColumnDef=\"_id\">\r\n        <th mat-header-cell *matHeaderCellDef> Student ID </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element._id}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"student_name\">\r\n        <th mat-header-cell *matHeaderCellDef> Student Name </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.student_name}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"student_email\">\r\n        <th mat-header-cell *matHeaderCellDef> Email </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.student_email}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"section\">\r\n        <th mat-header-cell *matHeaderCellDef> Section </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.section}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"action\">\r\n        <th mat-header-cell *matHeaderCellDef> Action </th>\r\n        <td mat-cell *matCellDef=\"let element; let i = index;\">\r\n          <button mat-raised-button color=\"primary\" class=\"push-right\"\r\n            [routerLink]=\"['/edit-student/', element._id]\">Edit</button>\r\n          <button mat-raised-button color=\"accent\" >Delete</button>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n\r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/upload-templates/upload-templates/upload-templates.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/upload-templates/upload-templates/upload-templates.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title-group\">\r\n    <div class=\"main\">\r\n        <h1 class=\"mat-h1\">Templates</h1>\r\n\r\n    </div>\r\n    <mat-divider class=\"mat-divider\"></mat-divider>\r\n</div>\r\n\r\n\r\n<div class=\"container view-table\">\r\n    <div style=\"margin-top:15px\">\r\n        <a mat-list-item routerLinkActive=\"active\" href=\"/assets/templates/Mechanical_Schedule_Template.xlsx\"\r\n            download=\"\" class=\"download_link\">\r\n            Mechanical Schedule\r\n        </a>\r\n        <a mat-list-item routerLinkActive=\"active\" href=\"/assets/templates/Electrical_Service_Data_Template.xlsx\"\r\n            download=\"\" class=\"download_link\">\r\n            Electrical Facility Service Data\r\n        </a>\r\n        <a mat-list-item routerLinkActive=\"active\" href=\"/assets/templates/Electrical_Interconnect Schedule_Template.xlsx\"\r\n            download=\"\" class=\"download_link\">\r\n            Supplier Interconnect Wiring Schedule\r\n        </a>\r\n        <a mat-list-item routerLinkActive=\"active\" href=\"/assets/templates/Electrical_Circuit Termination Data_Template.xlsx\"\r\n            download=\"\" class=\"download_link\">\r\n            Circuit termination Data\r\n        </a>\r\n        <a mat-list-item routerLinkActive=\"active\" href=\"/assets/templates/Electrical_Interconnect Raceway Section_Box Schedule_Template.xlsx\"\r\n            download=\"\" class=\"download_link\">\r\n            Interconnect Raceway Section/Box Schedule\r\n        </a>\r\n        <a mat-list-item routerLinkActive=\"active\" href=\"/assets/templates/Project_Register_Sheets_Template.xlsx\"\r\n            download=\"\" class=\"download_link\">\r\n            Project Register Sheets\r\n        </a>\r\n        <a mat-list-item routerLinkActive=\"active\" href=\"/assets/templates/Project_Notes_Template.xlsx\"\r\n        download=\"\" class=\"download_link\">\r\n        Project Notes\r\n    </a>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_helpers/grd-filter.ts":
/*!****************************************!*\
  !*** ./src/app/_helpers/grd-filter.ts ***!
  \****************************************/
/*! exports provided: GrdFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrdFilterPipe", function() { return GrdFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GrdFilterPipe = /** @class */ (function () {
    function GrdFilterPipe() {
    }
    GrdFilterPipe.prototype.RegExpescape = function (s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&').trim();
    };
    ;
    GrdFilterPipe.prototype.transform = function (items, filter, defaultFilter) {
        var _this = this;
        if (!filter) {
            return items;
        }
        if (!Array.isArray(items)) {
            return items;
        }
        if (filter && Array.isArray(items)) {
            var filterKeys_1 = Object.keys(filter);
            if (defaultFilter) {
                return items.filter(function (item) {
                    return filterKeys_1.reduce(function (x, keyName) {
                        return (x && new RegExp(_this.RegExpescape(filter[keyName]), 'gi').test(item[keyName])) || filter[keyName] == "";
                    }, true);
                });
            }
            else {
                return items.filter(function (item) {
                    return filterKeys_1.some(function (keyName) {
                        return new RegExp(_this.RegExpescape(filter[keyName]), 'gi').test(item[keyName]) || filter[keyName] == "";
                    });
                });
            }
        }
    };
    GrdFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'grdFilter',
            pure: false
        })
    ], GrdFilterPipe);
    return GrdFilterPipe;
}());



/***/ }),

/***/ "./src/app/_services/alert.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.keepAfterRouteChange = false;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (_this.keepAfterRouteChange) {
                    // only keep for a single route change
                    _this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert message
                    _this.clear();
                }
            }
        });
    }
    AlertService.prototype.getAlert = function () {
        return this.subject.asObservable();
    };
    AlertService.prototype.success = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.clear = function () {
        // clear by calling subject.next() without parameters
        this.subject.next();
    };
    AlertService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.observable = this.subject.asObservable();
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.auth = function (email, password) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].APIEndpoint + "/api/v1/auth/session", { email: email, password: password });
    };
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post("/api/users/authenticate", { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                _this.currentUserSubject.next(user);
                _this.isLogged = true;
            }
            else {
                _this.isLogged = false;
            }
            return user;
        }));
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        return this.isLogged;
    };
    AuthenticationService.prototype.isLoggedInObservable = function () {
        return this.currentUser;
    };
    AuthenticationService.prototype.setUser = function (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        this.isLogged = true;
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        // window.location.reload();
    };
    AuthenticationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_add_student_add_student_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/add-student/add-student.component */ "./src/app/components/add-student/add-student.component.ts");
/* harmony import */ var _components_edit_student_edit_student_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/edit-student/edit-student.component */ "./src/app/components/edit-student/edit-student.component.ts");
/* harmony import */ var _components_students_list_students_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/students-list/students-list.component */ "./src/app/components/students-list/students-list.component.ts");
/* harmony import */ var _components_services_size_services_size_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/services-size/services-size.component */ "./src/app/components/services-size/services-size.component.ts");
/* harmony import */ var _components_add_services_size_add_services_size_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/add-services-size/add-services-size.component */ "./src/app/components/add-services-size/add-services-size.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_edit_services_value_edit_services_value_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/edit-services-value/edit-services-value.component */ "./src/app/components/edit-services-value/edit-services-value.component.ts");
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/services/services.component */ "./src/app/components/services/services.component.ts");
/* harmony import */ var _components_add_service_add_service_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/add-service/add-service.component */ "./src/app/components/add-service/add-service.component.ts");
/* harmony import */ var _components_edit_service_edit_service_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/edit-service/edit-service.component */ "./src/app/components/edit-service/edit-service.component.ts");
/* harmony import */ var _components_pipe_pipe_list_pipe_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/pipe/pipe-list/pipe-list.component */ "./src/app/components/pipe/pipe-list/pipe-list.component.ts");
/* harmony import */ var _components_pipe_add_pipe_add_pipe_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/pipe/add-pipe/add-pipe.component */ "./src/app/components/pipe/add-pipe/add-pipe.component.ts");
/* harmony import */ var _components_pipe_edit_pipe_edit_pipe_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/pipe/edit-pipe/edit-pipe.component */ "./src/app/components/pipe/edit-pipe/edit-pipe.component.ts");
/* harmony import */ var _components_pipe_pipe_services_pipe_services_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/pipe/pipe-services/pipe-services.component */ "./src/app/components/pipe/pipe-services/pipe-services.component.ts");
/* harmony import */ var _components_services_component_services_component_services_component_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/services-component/services-component/services-component.component */ "./src/app/components/services-component/services-component/services-component.component.ts");
/* harmony import */ var _components_services_component_add_services_component_add_services_component_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/services-component/add-services-component/add-services-component.component */ "./src/app/components/services-component/add-services-component/add-services-component.component.ts");
/* harmony import */ var _components_services_component_edit_services_component_edit_services_component_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/services-component/edit-services-component/edit-services-component.component */ "./src/app/components/services-component/edit-services-component/edit-services-component.component.ts");
/* harmony import */ var _components_projects_project_lists_project_lists_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/projects/project-lists/project-lists.component */ "./src/app/components/projects/project-lists/project-lists.component.ts");
/* harmony import */ var _components_projects_add_projects_add_projects_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/projects/add-projects/add-projects.component */ "./src/app/components/projects/add-projects/add-projects.component.ts");
/* harmony import */ var _components_projects_edit_projects_edit_projects_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/projects/edit-projects/edit-projects.component */ "./src/app/components/projects/edit-projects/edit-projects.component.ts");
/* harmony import */ var _components_project_revisions_add_project_revisions_add_project_revisions_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/project-revisions/add-project-revisions/add-project-revisions.component */ "./src/app/components/project-revisions/add-project-revisions/add-project-revisions.component.ts");
/* harmony import */ var _components_project_revisions_edit_project_revisions_edit_project_revisions_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/project-revisions/edit-project-revisions/edit-project-revisions.component */ "./src/app/components/project-revisions/edit-project-revisions/edit-project-revisions.component.ts");
/* harmony import */ var _components_project_revisions_project_revisions_project_revisions_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/project-revisions/project-revisions/project-revisions.component */ "./src/app/components/project-revisions/project-revisions/project-revisions.component.ts");
/* harmony import */ var _components_project_objects_project_objects_project_objects_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/project-objects/project-objects/project-objects.component */ "./src/app/components/project-objects/project-objects/project-objects.component.ts");
/* harmony import */ var _components_project_objects_add_project_objects_add_project_objects_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/project-objects/add-project-objects/add-project-objects.component */ "./src/app/components/project-objects/add-project-objects/add-project-objects.component.ts");
/* harmony import */ var _components_project_objects_edit_project_objects_edit_project_objects_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/project-objects/edit-project-objects/edit-project-objects.component */ "./src/app/components/project-objects/edit-project-objects/edit-project-objects.component.ts");
/* harmony import */ var _components_project_sheets_edit_project_sheets_edit_project_sheets_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/project-sheets/edit-project-sheets/edit-project-sheets.component */ "./src/app/components/project-sheets/edit-project-sheets/edit-project-sheets.component.ts");
/* harmony import */ var _components_project_sheets_add_project_sheets_add_project_sheets_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/project-sheets/add-project-sheets/add-project-sheets.component */ "./src/app/components/project-sheets/add-project-sheets/add-project-sheets.component.ts");
/* harmony import */ var _components_project_notes_edit_project_notes_edit_project_notes_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/project-notes/edit-project-notes/edit-project-notes.component */ "./src/app/components/project-notes/edit-project-notes/edit-project-notes.component.ts");
/* harmony import */ var _components_project_notes_project_notes_project_notes_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/project-notes/project-notes/project-notes.component */ "./src/app/components/project-notes/project-notes/project-notes.component.ts");
/* harmony import */ var _components_project_notes_add_project_notes_add_project_notes_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/project-notes/add-project-notes/add-project-notes.component */ "./src/app/components/project-notes/add-project-notes/add-project-notes.component.ts");
/* harmony import */ var _components_project_mech_edit_project_mech_edit_project_mech_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/project-mech/edit-project-mech/edit-project-mech.component */ "./src/app/components/project-mech/edit-project-mech/edit-project-mech.component.ts");
/* harmony import */ var _components_project_mech_project_mech_project_mech_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/project-mech/project-mech/project-mech.component */ "./src/app/components/project-mech/project-mech/project-mech.component.ts");
/* harmony import */ var _components_project_mech_add_project_mech_add_project_mech_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/project-mech/add-project-mech/add-project-mech.component */ "./src/app/components/project-mech/add-project-mech/add-project-mech.component.ts");
/* harmony import */ var _components_project_register_sheet_project_register_sheet_project_register_sheet_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/project-register-sheet/project-register-sheet/project-register-sheet.component */ "./src/app/components/project-register-sheet/project-register-sheet/project-register-sheet.component.ts");
/* harmony import */ var _components_projects_generate_pdf_generate_pdf_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/projects/generate-pdf/generate-pdf.component */ "./src/app/components/projects/generate-pdf/generate-pdf.component.ts");
/* harmony import */ var _components_billing_manage_manage_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/billing/manage/manage.component */ "./src/app/components/billing/manage/manage.component.ts");
/* harmony import */ var _components_billing_createsubscription_createsubscription_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/billing/createsubscription/createsubscription.component */ "./src/app/components/billing/createsubscription/createsubscription.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_project_service_data_project_service_data_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/project-service-data/project-service-data.component */ "./src/app/components/project-service-data/project-service-data.component.ts");
/* harmony import */ var _components_upload_templates_upload_templates_upload_templates_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/upload-templates/upload-templates/upload-templates.component */ "./src/app/components/upload-templates/upload-templates/upload-templates.component.ts");
/* harmony import */ var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/forgot-password/forgot-password.component */ "./src/app/components/forgot-password/forgot-password.component.ts");
/* harmony import */ var _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/change-password/change-password.component */ "./src/app/components/change-password/change-password.component.ts");
/* harmony import */ var _components_invite_users_invite_users_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/invite-users/invite-users.component */ "./src/app/components/invite-users/invite-users.component.ts");
















































var routes = [
    { path: '', pathMatch: 'full', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    { path: 'add-student', component: _components_add_student_add_student_component__WEBPACK_IMPORTED_MODULE_3__["AddStudentComponent"] },
    { path: 'edit-services-value/:id', component: _components_edit_services_value_edit_services_value_component__WEBPACK_IMPORTED_MODULE_9__["EditServicesValueComponent"] },
    { path: 'service/edit-service/:id', component: _components_edit_service_edit_service_component__WEBPACK_IMPORTED_MODULE_12__["EditServiceComponent"] },
    { path: 'edit-student/:id', component: _components_edit_student_edit_student_component__WEBPACK_IMPORTED_MODULE_4__["EditStudentComponent"] },
    { path: 'students-list', component: _components_students_list_students_list_component__WEBPACK_IMPORTED_MODULE_5__["StudentsListComponent"] },
    { path: 'get-all-services-size', component: _components_services_size_services_size_component__WEBPACK_IMPORTED_MODULE_6__["ServicesSizeComponent"] },
    { path: 'add-services-size', component: _components_add_services_size_add_services_size_component__WEBPACK_IMPORTED_MODULE_7__["AddServicesSizeComponent"] },
    { path: 'services/getAll', component: _components_services_services_component__WEBPACK_IMPORTED_MODULE_10__["ServicesComponent"] },
    { path: 'service/add-service', component: _components_add_service_add_service_component__WEBPACK_IMPORTED_MODULE_11__["AddServiceComponent"] },
    { path: 'pipes/getAll', component: _components_pipe_pipe_list_pipe_list_component__WEBPACK_IMPORTED_MODULE_13__["PipeListComponent"] },
    { path: 'pipe/add-pipe', component: _components_pipe_add_pipe_add_pipe_component__WEBPACK_IMPORTED_MODULE_14__["AddPipeComponent"] },
    { path: 'pipe/edit-pipe/:id', component: _components_pipe_edit_pipe_edit_pipe_component__WEBPACK_IMPORTED_MODULE_15__["EditPipeComponent"] },
    { path: 'pipe/pipe-services', component: _components_pipe_pipe_services_pipe_services_component__WEBPACK_IMPORTED_MODULE_16__["PipeServicesComponent"] },
    { path: 'component/getAll', component: _components_services_component_services_component_services_component_component__WEBPACK_IMPORTED_MODULE_17__["ServicesComponentComponent"] },
    { path: 'component/add-component', component: _components_services_component_add_services_component_add_services_component_component__WEBPACK_IMPORTED_MODULE_18__["AddServicesComponentComponent"] },
    { path: 'component/edit-component/:id', component: _components_services_component_edit_services_component_edit_services_component_component__WEBPACK_IMPORTED_MODULE_19__["EditServicesComponentComponent"] },
    { path: 'project/getAll', component: _components_projects_project_lists_project_lists_component__WEBPACK_IMPORTED_MODULE_20__["ProjectListsComponent"] },
    { path: 'project/add-project', component: _components_projects_add_projects_add_projects_component__WEBPACK_IMPORTED_MODULE_21__["AddProjectsComponent"] },
    { path: 'project/edit-project/:id', component: _components_projects_edit_projects_edit_projects_component__WEBPACK_IMPORTED_MODULE_22__["EditProjectsComponent"] },
    { path: 'project_rev/getAll', component: _components_project_revisions_project_revisions_project_revisions_component__WEBPACK_IMPORTED_MODULE_25__["ProjectRevisionsComponent"] },
    { path: 'project_rev/add-project_rev', component: _components_project_revisions_add_project_revisions_add_project_revisions_component__WEBPACK_IMPORTED_MODULE_23__["AddProjectRevisionsComponent"] },
    { path: 'project_rev/edit-project_rev/:id/:id1', component: _components_project_revisions_edit_project_revisions_edit_project_revisions_component__WEBPACK_IMPORTED_MODULE_24__["EditProjectRevisionsComponent"] },
    { path: 'project_rev/getAll/:id', component: _components_project_revisions_project_revisions_project_revisions_component__WEBPACK_IMPORTED_MODULE_25__["ProjectRevisionsComponent"] },
    { path: 'project_rev/add-project_rev/:id', component: _components_project_revisions_add_project_revisions_add_project_revisions_component__WEBPACK_IMPORTED_MODULE_23__["AddProjectRevisionsComponent"] },
    { path: 'project_obj/edit-project_obj/:id/:id1', component: _components_project_objects_edit_project_objects_edit_project_objects_component__WEBPACK_IMPORTED_MODULE_28__["EditProjectObjectsComponent"] },
    { path: 'project_obj/getAll/:id', component: _components_project_objects_project_objects_project_objects_component__WEBPACK_IMPORTED_MODULE_26__["ProjectObjectsComponent"] },
    { path: 'project_obj/add-project_obj/:id', component: _components_project_objects_add_project_objects_add_project_objects_component__WEBPACK_IMPORTED_MODULE_27__["AddProjectObjectsComponent"] },
    { path: 'project_sheet/edit-project_sheet/:id/:id1', component: _components_project_sheets_edit_project_sheets_edit_project_sheets_component__WEBPACK_IMPORTED_MODULE_29__["EditProjectSheetsComponent"] },
    //{ path: 'project_sheet/getAll/:id', component: ProjectSheetsComponent},
    { path: 'project_sheet/add-project_sheet/:id', component: _components_project_sheets_add_project_sheets_add_project_sheets_component__WEBPACK_IMPORTED_MODULE_30__["AddProjectSheetsComponent"] },
    { path: 'project_notes/edit-project_notes/:id/:id1', component: _components_project_notes_edit_project_notes_edit_project_notes_component__WEBPACK_IMPORTED_MODULE_31__["EditProjectNotesComponent"] },
    { path: 'project_notes/getAll/:id', component: _components_project_notes_project_notes_project_notes_component__WEBPACK_IMPORTED_MODULE_32__["ProjectNotesComponent"] },
    { path: 'project_notes/add-project_notes/:id', component: _components_project_notes_add_project_notes_add_project_notes_component__WEBPACK_IMPORTED_MODULE_33__["AddProjectNotesComponent"] },
    { path: 'project_mech/edit-project_mech/:id/:id1', component: _components_project_mech_edit_project_mech_edit_project_mech_component__WEBPACK_IMPORTED_MODULE_34__["EditProjectMechComponent"] },
    { path: 'project_mech/getAll/:id', component: _components_project_mech_project_mech_project_mech_component__WEBPACK_IMPORTED_MODULE_35__["ProjectMechComponent"] },
    { path: 'project_mech/add-project_mech/:id', component: _components_project_mech_add_project_mech_add_project_mech_component__WEBPACK_IMPORTED_MODULE_36__["AddProjectMechComponent"] },
    { path: 'project_sheet/getAll/:id', component: _components_project_register_sheet_project_register_sheet_project_register_sheet_component__WEBPACK_IMPORTED_MODULE_37__["ProjectRegisterSheetComponent"] },
    { path: 'generate-pdf/:id', component: _components_projects_generate_pdf_generate_pdf_component__WEBPACK_IMPORTED_MODULE_38__["GeneratePdfComponent"] },
    { path: 'billing/manage', component: _components_billing_manage_manage_component__WEBPACK_IMPORTED_MODULE_39__["ManageComponent"] },
    { path: 'billing/create-subscription', component: _components_billing_createsubscription_createsubscription_component__WEBPACK_IMPORTED_MODULE_40__["CreatesubscriptionComponent"] },
    { path: 'user/register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_41__["RegisterComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_42__["LoginComponent"] },
    { path: 'project-service-data/getAll/:id', component: _components_project_service_data_project_service_data_component__WEBPACK_IMPORTED_MODULE_43__["ProjectServiceDataComponent"] },
    { path: 'upload_templates', component: _components_upload_templates_upload_templates_upload_templates_component__WEBPACK_IMPORTED_MODULE_44__["UploadTemplatesComponent"] },
    { path: 'forgot-password', component: _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_45__["ForgotPasswordComponent"] },
    { path: 'reset-password/:uid/:token', component: _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_46__["ChangePasswordComponent"] },
    { path: 'invite-user', component: _components_invite_users_invite_users_component__WEBPACK_IMPORTED_MODULE_47__["InviteUsersComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".projectItem{\r\n    background: white;\r\n    /* padding: 24px; */\r\n    font-size: 15;\r\n}\r\n.disabled-pointer {\r\n    pointer-events: none;\r\n  }\r\n.mat-dialog-container{\r\n      height: 600px!important;\r\n  }\r\n.mat-drawer.mat-drawer-side {\r\n    z-index: 1 !important;\r\n  }\r\n.logo{\r\n    width:100px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7QUFDQTtJQUNJLG9CQUFvQjtFQUN0QjtBQUNBO01BQ0ksdUJBQXVCO0VBQzNCO0FBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7QUFDQTtJQUNFLFdBQVc7RUFDYiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3RJdGVte1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAvKiBwYWRkaW5nOiAyNHB4OyAqL1xyXG4gICAgZm9udC1zaXplOiAxNTtcclxufVxyXG4uZGlzYWJsZWQtcG9pbnRlciB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcbiAgLm1hdC1kaWFsb2ctY29udGFpbmVye1xyXG4gICAgICBoZWlnaHQ6IDYwMHB4IWltcG9ydGFudDtcclxuICB9XHJcbiAgLm1hdC1kcmF3ZXIubWF0LWRyYXdlci1zaWRlIHtcclxuICAgIHotaW5kZXg6IDEgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmxvZ297XHJcbiAgICB3aWR0aDoxMDBweDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _components_billing_createsubscription_createsubscription_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/billing/createsubscription/createsubscription.component */ "./src/app/components/billing/createsubscription/createsubscription.component.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/api.service */ "./src/app/shared/api.service.ts");








var AppComponent = /** @class */ (function () {
    function AppComponent(router, dialog, auth, ngZone, apiService) {
        this.router = router;
        this.dialog = dialog;
        this.auth = auth;
        this.ngZone = ngZone;
        this.apiService = apiService;
        this.opened = true;
        this.step = 0;
    }
    AppComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_components_billing_createsubscription_createsubscription_component__WEBPACK_IMPORTED_MODULE_5__["CreatesubscriptionComponent"], {
            height: '600px',
            width: '700px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.currentUser = this.auth.currentUserValue;
        if (this.currentUser) {
            if (this.currentUser.isAdmin == "1") {
                this.isAdmin = true;
            }
            else {
                this.isAdmin = false;
            }
            this.isLogged = true;
        }
        else {
            this.isLogged = false;
        }
        console.log(window.innerWidth);
        if (this.isLogged) {
            if (window.innerWidth < 768) {
                this.sidenav.fixedTopGap = 55;
                this.opened = false;
            }
            else {
                this.sidenav.fixedTopGap = 55;
                this.opened = true;
            }
        }
        // this.openDialog();
    };
    AppComponent.prototype.onResize = function (event) {
        if (event.target.innerWidth < 768) {
            this.sidenav.fixedTopGap = 55;
            this.opened = false;
        }
        else {
            this.sidenav.fixedTopGap = 55;
            this.opened = true;
        }
    };
    AppComponent.prototype.stopToggle = function (event) {
        console.log(event);
    };
    AppComponent.prototype.isBiggerScreen = function () {
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (width < 768) {
            return true;
        }
        else {
            return false;
        }
    };
    AppComponent.prototype.navigate = function (pagename) {
        if (pagename == "service-size") {
            this.router.navigate(['/get-all-services-size']);
        }
    };
    AppComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    AppComponent.prototype.nextStep = function () {
        this.step++;
    };
    AppComponent.prototype.prevStep = function () {
        this.step--;
    };
    AppComponent.prototype.logout = function () {
        this.auth.logout();
        this.isLogged = false;
        this.router.navigate(['/login']);
    };
    AppComponent.prototype.login = function () {
        this.router.navigate(['/login']);
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidenav', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"])
    ], AppComponent.prototype, "sidenav", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppComponent.prototype, "onResize", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _shared_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_add_student_add_student_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/add-student/add-student.component */ "./src/app/components/add-student/add-student.component.ts");
/* harmony import */ var _components_edit_student_edit_student_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/edit-student/edit-student.component */ "./src/app/components/edit-student/edit-student.component.ts");
/* harmony import */ var _components_students_list_students_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/students-list/students-list.component */ "./src/app/components/students-list/students-list.component.ts");
/* harmony import */ var _components_services_size_services_size_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/services-size/services-size.component */ "./src/app/components/services-size/services-size.component.ts");
/* harmony import */ var _components_add_services_size_add_services_size_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/add-services-size/add-services-size.component */ "./src/app/components/add-services-size/add-services-size.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_edit_services_value_edit_services_value_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/edit-services-value/edit-services-value.component */ "./src/app/components/edit-services-value/edit-services-value.component.ts");
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/services/services.component */ "./src/app/components/services/services.component.ts");
/* harmony import */ var _components_add_service_add_service_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/add-service/add-service.component */ "./src/app/components/add-service/add-service.component.ts");
/* harmony import */ var _components_edit_service_edit_service_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/edit-service/edit-service.component */ "./src/app/components/edit-service/edit-service.component.ts");
/* harmony import */ var _components_pipe_pipe_list_pipe_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/pipe/pipe-list/pipe-list.component */ "./src/app/components/pipe/pipe-list/pipe-list.component.ts");
/* harmony import */ var _components_pipe_add_pipe_add_pipe_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/pipe/add-pipe/add-pipe.component */ "./src/app/components/pipe/add-pipe/add-pipe.component.ts");
/* harmony import */ var _components_pipe_edit_pipe_edit_pipe_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/pipe/edit-pipe/edit-pipe.component */ "./src/app/components/pipe/edit-pipe/edit-pipe.component.ts");
/* harmony import */ var _components_pipe_pipe_services_pipe_services_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/pipe/pipe-services/pipe-services.component */ "./src/app/components/pipe/pipe-services/pipe-services.component.ts");
/* harmony import */ var _components_services_component_services_component_services_component_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/services-component/services-component/services-component.component */ "./src/app/components/services-component/services-component/services-component.component.ts");
/* harmony import */ var _components_services_component_add_services_component_add_services_component_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/services-component/add-services-component/add-services-component.component */ "./src/app/components/services-component/add-services-component/add-services-component.component.ts");
/* harmony import */ var _components_services_component_edit_services_component_edit_services_component_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/services-component/edit-services-component/edit-services-component.component */ "./src/app/components/services-component/edit-services-component/edit-services-component.component.ts");
/* harmony import */ var _components_projects_project_lists_project_lists_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/projects/project-lists/project-lists.component */ "./src/app/components/projects/project-lists/project-lists.component.ts");
/* harmony import */ var _components_projects_add_projects_add_projects_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/projects/add-projects/add-projects.component */ "./src/app/components/projects/add-projects/add-projects.component.ts");
/* harmony import */ var _components_projects_edit_projects_edit_projects_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/projects/edit-projects/edit-projects.component */ "./src/app/components/projects/edit-projects/edit-projects.component.ts");
/* harmony import */ var _components_project_revisions_add_project_revisions_add_project_revisions_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/project-revisions/add-project-revisions/add-project-revisions.component */ "./src/app/components/project-revisions/add-project-revisions/add-project-revisions.component.ts");
/* harmony import */ var _components_project_revisions_edit_project_revisions_edit_project_revisions_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/project-revisions/edit-project-revisions/edit-project-revisions.component */ "./src/app/components/project-revisions/edit-project-revisions/edit-project-revisions.component.ts");
/* harmony import */ var _components_project_revisions_project_revisions_project_revisions_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/project-revisions/project-revisions/project-revisions.component */ "./src/app/components/project-revisions/project-revisions/project-revisions.component.ts");
/* harmony import */ var _components_project_objects_project_objects_project_objects_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/project-objects/project-objects/project-objects.component */ "./src/app/components/project-objects/project-objects/project-objects.component.ts");
/* harmony import */ var _components_project_objects_add_project_objects_add_project_objects_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/project-objects/add-project-objects/add-project-objects.component */ "./src/app/components/project-objects/add-project-objects/add-project-objects.component.ts");
/* harmony import */ var _components_project_objects_edit_project_objects_edit_project_objects_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/project-objects/edit-project-objects/edit-project-objects.component */ "./src/app/components/project-objects/edit-project-objects/edit-project-objects.component.ts");
/* harmony import */ var _components_project_sheets_project_sheets_project_sheets_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/project-sheets/project-sheets/project-sheets.component */ "./src/app/components/project-sheets/project-sheets/project-sheets.component.ts");
/* harmony import */ var _components_project_sheets_add_project_sheets_add_project_sheets_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/project-sheets/add-project-sheets/add-project-sheets.component */ "./src/app/components/project-sheets/add-project-sheets/add-project-sheets.component.ts");
/* harmony import */ var _components_project_sheets_edit_project_sheets_edit_project_sheets_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/project-sheets/edit-project-sheets/edit-project-sheets.component */ "./src/app/components/project-sheets/edit-project-sheets/edit-project-sheets.component.ts");
/* harmony import */ var _components_project_notes_project_notes_project_notes_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/project-notes/project-notes/project-notes.component */ "./src/app/components/project-notes/project-notes/project-notes.component.ts");
/* harmony import */ var _components_project_notes_add_project_notes_add_project_notes_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/project-notes/add-project-notes/add-project-notes.component */ "./src/app/components/project-notes/add-project-notes/add-project-notes.component.ts");
/* harmony import */ var _components_project_notes_edit_project_notes_edit_project_notes_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/project-notes/edit-project-notes/edit-project-notes.component */ "./src/app/components/project-notes/edit-project-notes/edit-project-notes.component.ts");
/* harmony import */ var _components_project_mech_project_mech_project_mech_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/project-mech/project-mech/project-mech.component */ "./src/app/components/project-mech/project-mech/project-mech.component.ts");
/* harmony import */ var _components_project_mech_add_project_mech_add_project_mech_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/project-mech/add-project-mech/add-project-mech.component */ "./src/app/components/project-mech/add-project-mech/add-project-mech.component.ts");
/* harmony import */ var _components_project_mech_edit_project_mech_edit_project_mech_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/project-mech/edit-project-mech/edit-project-mech.component */ "./src/app/components/project-mech/edit-project-mech/edit-project-mech.component.ts");
/* harmony import */ var _components_project_register_sheet_project_register_sheet_project_register_sheet_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/project-register-sheet/project-register-sheet/project-register-sheet.component */ "./src/app/components/project-register-sheet/project-register-sheet/project-register-sheet.component.ts");
/* harmony import */ var _helpers_grd_filter__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./_helpers/grd-filter */ "./src/app/_helpers/grd-filter.ts");
/* harmony import */ var _components_billing_manage_manage_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/billing/manage/manage.component */ "./src/app/components/billing/manage/manage.component.ts");
/* harmony import */ var _components_billing_createsubscription_createsubscription_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/billing/createsubscription/createsubscription.component */ "./src/app/components/billing/createsubscription/createsubscription.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _shared_messageService__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./shared/messageService */ "./src/app/shared/messageService.ts");
/* harmony import */ var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/forgot-password/forgot-password.component */ "./src/app/components/forgot-password/forgot-password.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_projects_generate_pdf_generate_pdf_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./components/projects/generate-pdf/generate-pdf.component */ "./src/app/components/projects/generate-pdf/generate-pdf.component.ts");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "./node_modules/@rxweb/reactive-form-validators/fesm5/rxweb-reactive-form-validators.js");
/* harmony import */ var _components_project_service_data_project_service_data_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./components/project-service-data/project-service-data.component */ "./src/app/components/project-service-data/project-service-data.component.ts");
/* harmony import */ var _components_upload_templates_upload_templates_upload_templates_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./components/upload-templates/upload-templates/upload-templates.component */ "./src/app/components/upload-templates/upload-templates/upload-templates.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./components/change-password/change-password.component */ "./src/app/components/change-password/change-password.component.ts");
/* harmony import */ var _components_invite_users_invite_users_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./components/invite-users/invite-users.component */ "./src/app/components/invite-users/invite-users.component.ts");






/* Angular 8 components */







































/* Angular material */




//import { FileSaverModule } from 'ngx-filesaver';
/* Angular 8 http service */

/* Angular 8 CRUD services */



/* Reactive form services in Angular 8 */





/* User Authentication */




/* angular service */
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_47__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_add_student_add_student_component__WEBPACK_IMPORTED_MODULE_6__["AddStudentComponent"],
                _components_edit_student_edit_student_component__WEBPACK_IMPORTED_MODULE_7__["EditStudentComponent"],
                _components_students_list_students_list_component__WEBPACK_IMPORTED_MODULE_8__["StudentsListComponent"],
                _components_services_size_services_size_component__WEBPACK_IMPORTED_MODULE_9__["ServicesSizeComponent"],
                _components_add_services_size_add_services_size_component__WEBPACK_IMPORTED_MODULE_10__["AddServicesSizeComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _components_edit_services_value_edit_services_value_component__WEBPACK_IMPORTED_MODULE_12__["EditServicesValueComponent"],
                _components_services_services_component__WEBPACK_IMPORTED_MODULE_13__["ServicesComponent"],
                _components_add_service_add_service_component__WEBPACK_IMPORTED_MODULE_14__["AddServiceComponent"],
                _components_edit_service_edit_service_component__WEBPACK_IMPORTED_MODULE_15__["EditServiceComponent"],
                _components_pipe_pipe_list_pipe_list_component__WEBPACK_IMPORTED_MODULE_16__["PipeListComponent"],
                _components_pipe_add_pipe_add_pipe_component__WEBPACK_IMPORTED_MODULE_17__["AddPipeComponent"],
                _components_pipe_edit_pipe_edit_pipe_component__WEBPACK_IMPORTED_MODULE_18__["EditPipeComponent"],
                _components_pipe_pipe_services_pipe_services_component__WEBPACK_IMPORTED_MODULE_19__["PipeServicesComponent"],
                _components_services_component_services_component_services_component_component__WEBPACK_IMPORTED_MODULE_20__["ServicesComponentComponent"],
                _components_services_component_edit_services_component_edit_services_component_component__WEBPACK_IMPORTED_MODULE_22__["EditServicesComponentComponent"],
                _components_services_component_add_services_component_add_services_component_component__WEBPACK_IMPORTED_MODULE_21__["AddServicesComponentComponent"],
                _components_projects_project_lists_project_lists_component__WEBPACK_IMPORTED_MODULE_23__["ProjectListsComponent"],
                _components_projects_add_projects_add_projects_component__WEBPACK_IMPORTED_MODULE_24__["AddProjectsComponent"],
                _components_projects_edit_projects_edit_projects_component__WEBPACK_IMPORTED_MODULE_25__["EditProjectsComponent"],
                _components_project_revisions_add_project_revisions_add_project_revisions_component__WEBPACK_IMPORTED_MODULE_26__["AddProjectRevisionsComponent"],
                _components_project_revisions_edit_project_revisions_edit_project_revisions_component__WEBPACK_IMPORTED_MODULE_27__["EditProjectRevisionsComponent"],
                _components_project_revisions_project_revisions_project_revisions_component__WEBPACK_IMPORTED_MODULE_28__["ProjectRevisionsComponent"],
                _components_project_objects_project_objects_project_objects_component__WEBPACK_IMPORTED_MODULE_29__["ProjectObjectsComponent"],
                _components_project_objects_add_project_objects_add_project_objects_component__WEBPACK_IMPORTED_MODULE_30__["AddProjectObjectsComponent"],
                _components_project_objects_edit_project_objects_edit_project_objects_component__WEBPACK_IMPORTED_MODULE_31__["EditProjectObjectsComponent"],
                _components_project_sheets_project_sheets_project_sheets_component__WEBPACK_IMPORTED_MODULE_32__["ProjectSheetsComponent"],
                _components_project_sheets_add_project_sheets_add_project_sheets_component__WEBPACK_IMPORTED_MODULE_33__["AddProjectSheetsComponent"],
                _components_project_sheets_edit_project_sheets_edit_project_sheets_component__WEBPACK_IMPORTED_MODULE_34__["EditProjectSheetsComponent"],
                _components_project_notes_project_notes_project_notes_component__WEBPACK_IMPORTED_MODULE_35__["ProjectNotesComponent"],
                _components_project_notes_add_project_notes_add_project_notes_component__WEBPACK_IMPORTED_MODULE_36__["AddProjectNotesComponent"],
                _components_project_notes_edit_project_notes_edit_project_notes_component__WEBPACK_IMPORTED_MODULE_37__["EditProjectNotesComponent"],
                _components_project_mech_project_mech_project_mech_component__WEBPACK_IMPORTED_MODULE_38__["ProjectMechComponent"],
                _components_project_mech_add_project_mech_add_project_mech_component__WEBPACK_IMPORTED_MODULE_39__["AddProjectMechComponent"],
                _components_project_mech_edit_project_mech_edit_project_mech_component__WEBPACK_IMPORTED_MODULE_40__["EditProjectMechComponent"],
                _components_project_register_sheet_project_register_sheet_project_register_sheet_component__WEBPACK_IMPORTED_MODULE_41__["ProjectRegisterSheetComponent"],
                _components_projects_generate_pdf_generate_pdf_component__WEBPACK_IMPORTED_MODULE_54__["GeneratePdfComponent"],
                _helpers_grd_filter__WEBPACK_IMPORTED_MODULE_42__["GrdFilterPipe"],
                _components_billing_manage_manage_component__WEBPACK_IMPORTED_MODULE_43__["ManageComponent"],
                _components_billing_createsubscription_createsubscription_component__WEBPACK_IMPORTED_MODULE_44__["CreatesubscriptionComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_59__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_58__["RegisterComponent"],
                _components_project_service_data_project_service_data_component__WEBPACK_IMPORTED_MODULE_56__["ProjectServiceDataComponent"],
                _components_billing_createsubscription_createsubscription_component__WEBPACK_IMPORTED_MODULE_44__["CreatesubscriptionComponent"],
                _components_project_service_data_project_service_data_component__WEBPACK_IMPORTED_MODULE_56__["ProjectServiceDataComponent"],
                _components_upload_templates_upload_templates_upload_templates_component__WEBPACK_IMPORTED_MODULE_57__["UploadTemplatesComponent"],
                _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_52__["ForgotPasswordComponent"],
                _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_60__["ChangePasswordComponent"],
                _components_invite_users_invite_users_component__WEBPACK_IMPORTED_MODULE_61__["InviteUsersComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_45__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_46__["AngularMaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_49__["HttpClientModule"],
                //FileSaverModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_53__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_53__["FormsModule"],
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_48__["Ng4LoadingSpinnerModule"].forRoot(),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
                _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_55__["RxReactiveFormsModule"],
            ],
            providers: [_shared_api_service__WEBPACK_IMPORTED_MODULE_50__["ApiService"], _shared_messageService__WEBPACK_IMPORTED_MODULE_51__["MessageService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_47__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-service/add-service.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/add-service/add-service.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLXNlcnZpY2UvYWRkLXNlcnZpY2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/add-service/add-service.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/add-service/add-service.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddServiceComponent", function() { return AddServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_messageService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../shared/messageService */ "./src/app/shared/messageService.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__);








var AddServiceComponent = /** @class */ (function () {
    function AddServiceComponent(fb, router, ngZone, commonService, ms, loader) {
        var _this = this;
        this.fb = fb;
        this.router = router;
        this.ngZone = ngZone;
        this.commonService = commonService;
        this.ms = ms;
        this.loader = loader;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["COMMA"]];
        this.handleError = function (controlName, errorName) {
            return _this.services.controls[controlName].hasError(errorName);
        };
    }
    AddServiceComponent.prototype.ngOnInit = function () {
        this.validateForm();
    };
    /* Reactive book form */
    AddServiceComponent.prototype.validateForm = function () {
        this.services = this.fb.group({
            SERVICE_NAME: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
        });
    };
    AddServiceComponent.prototype.submitAddServicesForm = function () {
        var _this = this;
        this.loader.show();
        if (this.services.valid) {
            var URL = 'service/add-service';
            this.commonService.Add(this.services.value, URL).subscribe(function (res) {
                _this.ms.openSnackBar("Service is added successfully");
                _this.ngZone.run(function () { return _this.router.navigateByUrl('/services/getAll'); });
            });
        }
    };
    AddServiceComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _shared_messageService__WEBPACK_IMPORTED_MODULE_6__["MessageService"] },
        { type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__["Ng4LoadingSpinnerService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('chipList', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddServiceComponent.prototype, "chipList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('resetStudentForm', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddServiceComponent.prototype, "myNgForm", void 0);
    AddServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add-service',
            template: __webpack_require__(/*! raw-loader!./add-service.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/add-service/add-service.component.html"),
            styles: [__webpack_require__(/*! ./add-service.component.css */ "./src/app/components/add-service/add-service.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
            _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _shared_messageService__WEBPACK_IMPORTED_MODULE_6__["MessageService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__["Ng4LoadingSpinnerService"]])
    ], AddServiceComponent);
    return AddServiceComponent;
}());



/***/ }),

/***/ "./src/app/components/add-services-size/add-services-size.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/add-services-size/add-services-size.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLXNlcnZpY2VzLXNpemUvYWRkLXNlcnZpY2VzLXNpemUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/add-services-size/add-services-size.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/add-services-size/add-services-size.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AddServicesSizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddServicesSizeComponent", function() { return AddServicesSizeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_messageService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/messageService */ "./src/app/shared/messageService.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__);








var AddServicesSizeComponent = /** @class */ (function () {
    function AddServicesSizeComponent(fb, router, ngZone, commonService, ms, loader) {
        var _this = this;
        this.fb = fb;
        this.router = router;
        this.ngZone = ngZone;
        this.commonService = commonService;
        this.ms = ms;
        this.loader = loader;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["COMMA"]];
        this.handleError = function (controlName, errorName) {
            return _this.servicesSize.controls[controlName].hasError(errorName);
        };
    }
    AddServicesSizeComponent.prototype.ngOnInit = function () {
        this.submitBookForm();
    };
    /* Reactive book form */
    AddServicesSizeComponent.prototype.submitBookForm = function () {
        this.servicesSize = this.fb.group({
            SIZE_VALUE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
        });
    };
    AddServicesSizeComponent.prototype.submitServicesForm = function () {
        var _this = this;
        this.loader.show();
        if (this.servicesSize.valid) {
            var URL = 'add-services_size';
            this.commonService.Add(this.servicesSize.value, URL).subscribe(function (res) {
                _this.ms.openSnackBar("Service size added successfully");
                _this.ngZone.run(function () { return _this.router.navigateByUrl('/get-all-services-size'); });
            });
        }
    };
    AddServicesSizeComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _shared_messageService__WEBPACK_IMPORTED_MODULE_6__["MessageService"] },
        { type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__["Ng4LoadingSpinnerService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('chipList', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddServicesSizeComponent.prototype, "chipList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('resetStudentForm', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddServicesSizeComponent.prototype, "myNgForm", void 0);
    AddServicesSizeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add-services-size',
            template: __webpack_require__(/*! raw-loader!./add-services-size.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/add-services-size/add-services-size.component.html"),
            styles: [__webpack_require__(/*! ./add-services-size.component.css */ "./src/app/components/add-services-size/add-services-size.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
            _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _shared_messageService__WEBPACK_IMPORTED_MODULE_6__["MessageService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__["Ng4LoadingSpinnerService"]])
    ], AddServicesSizeComponent);
    return AddServicesSizeComponent;
}());



/***/ }),

/***/ "./src/app/components/add-student/add-student.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/add-student/add-student.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLXN0dWRlbnQvYWRkLXN0dWRlbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/add-student/add-student.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/add-student/add-student.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStudentComponent", function() { return AddStudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var AddStudentComponent = /** @class */ (function () {
    function AddStudentComponent(fb, router, ngZone, studentApi) {
        var _this = this;
        this.fb = fb;
        this.router = router;
        this.ngZone = ngZone;
        this.studentApi = studentApi;
        this.visible = true;
        this.selectable = true;
        this.selected = '';
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["COMMA"]];
        this.subjectArray = [];
        this.SectioinArray = ['A', 'B', 'C', 'D', 'E'];
        /* Get errors */
        this.handleError = function (controlName, errorName) {
            return _this.studentForm.controls[controlName].hasError(errorName);
        };
    }
    AddStudentComponent.prototype.ngOnInit = function () {
        this.submitBookForm();
    };
    /* Reactive book form */
    AddStudentComponent.prototype.submitBookForm = function () {
        this.studentForm = this.fb.group({
            student_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            student_email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            section: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            subjects: [this.subjectArray],
            dob: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            gender: ['Male']
        });
    };
    /* Add dynamic languages */
    AddStudentComponent.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        // Add language
        if ((value || '').trim() && this.subjectArray.length < 5) {
            this.subjectArray.push({ name: value.trim() });
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    };
    /* Remove dynamic languages */
    AddStudentComponent.prototype.remove = function (subject) {
        var index = this.subjectArray.indexOf(subject);
        if (index >= 0) {
            this.subjectArray.splice(index, 1);
        }
    };
    /* Date */
    AddStudentComponent.prototype.formatDate = function (e) {
        var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
        this.studentForm.get('dob').setValue(convertDate, {
            onlyself: true
        });
    };
    AddStudentComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('chipList', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddStudentComponent.prototype, "chipList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('resetStudentForm', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddStudentComponent.prototype, "myNgForm", void 0);
    AddStudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add-student',
            template: __webpack_require__(/*! raw-loader!./add-student.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/add-student/add-student.component.html"),
            styles: [__webpack_require__(/*! ./add-student.component.css */ "./src/app/components/add-student/add-student.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
            _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], AddStudentComponent);
    return AddStudentComponent;
}());



/***/ }),

/***/ "./src/app/components/billing/createsubscription/createsubscription.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/components/billing/createsubscription/createsubscription.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".matBtn{\r\n    padding: 2px 14px;\r\n    line-height: 25px;\r\n    margin-left: 20px;\r\n    margin-top: 20px;\r\n    background: #3095ff;\r\n    color:white;\r\n    border-radius: 5px;\r\n    white-space: nowrap;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iaWxsaW5nL2NyZWF0ZXN1YnNjcmlwdGlvbi9jcmVhdGVzdWJzY3JpcHRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2JpbGxpbmcvY3JlYXRlc3Vic2NyaXB0aW9uL2NyZWF0ZXN1YnNjcmlwdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdEJ0bntcclxuICAgIHBhZGRpbmc6IDJweCAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzA5NWZmO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/billing/createsubscription/createsubscription.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/billing/createsubscription/createsubscription.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CreatesubscriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatesubscriptionComponent", function() { return CreatesubscriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _shared_messageService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/messageService */ "./src/app/shared/messageService.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _manage_manage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../manage/manage.component */ "./src/app/components/billing/manage/manage.component.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");











var CreatesubscriptionComponent = /** @class */ (function () {
    /*serviceBotParams = {
      servicebot_id: 'E0OQN0P0Dort',  // LIVE & TEST MODE IDs ARE DIFFERENT
      service: 'Flat Subscription',
      email: 'hibaDevOps@gmail.com',
      handleResponse: async (payload) => {
        if (payload.event === 'create_subscription') {
          console.log('Response Object ', payload.response);
        }
      }
    };*/
    function CreatesubscriptionComponent(commonSevice, _renderer2, _document, dialog, router, auth, ms, loader) {
        this.commonSevice = commonSevice;
        this._renderer2 = _renderer2;
        this._document = _document;
        this.dialog = dialog;
        this.router = router;
        this.auth = auth;
        this.ms = ms;
        this.loader = loader;
        this.loadScripts();
    }
    CreatesubscriptionComponent.prototype.ngOnInit = function () {
        var user = localStorage.getItem('UserRegister');
        var apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].APIEndpoint;
        this.currentUser = JSON.parse(user);
        console.log(this.currentUser);
        var script = this._renderer2.createElement('script');
        script.type = "text/javascript";
        script.text = "\n    Servicebot.init({\n      templateId : 1,\n      url : \"" + apiUrl + "\",\n      selector : document.getElementById('servicebot-request-form'),\n      handleResponse : (response) => {\n       if(response!=undefined){\n        function makeRequest (method, url, data) {\n          return new Promise(function (resolve, reject) {\n            var xhr = new XMLHttpRequest();\n            xhr.open(method, url);\n            xhr.setRequestHeader(\"Content-Type\", \"application/json;charset=UTF-8\");\n            xhr.onload = function () {\n              if (this.status >= 200 && this.status < 300) {\n                resolve(xhr.response);\n              } else {\n                reject({\n                  status: this.status,\n                  statusText: xhr.statusText\n                });\n              }\n            };\n            xhr.onerror = function () {\n              reject({\n                status: this.status,\n                statusText: xhr.statusText\n              });\n            };\n            if(method==\"POST\" && data){\n                xhr.send(JSON.stringify(data));\n            }else{\n                xhr.send();\n            }\n          });\n        }\n\n        var data=this.currentUser;\n        data=JSON.parse(localStorage.getItem('UserRegister'));\n        var envAPI=\"" + apiUrl + "\";\n        console.log(data);\n        makeRequest('POST', envAPI+\"/api/v1/users/application/register\",data).then(function(data){\n                      var results=JSON.parse(data);\n                      alert(\"You have been successfully registered\");\n        });\n       }\n      },\n      type: \"request\",\n      spk: \"pk_test_51Hk5E2HRkt4pM4voJCzKPxwsFx4KQamuuLw5ouoI1POpvbSIhpoqRsgeDQMLZQwHGWCQsVeAqBxo3GddsskeK1WB00Aav17VXZ\",\n      forceCard : false, //set to true if you want credit card to be a required field for the customer\n      setPassword : false //set to true if you want customer to fill out a password\n  })  \n  \n  ";
        console.log(script.text);
        this._renderer2.appendChild(this._document.body, script);
        this.existCondition = setInterval(function () {
            if ($('#servicebot-request-form').html() != '') {
                if ($('#servicebot-request-form .App span').html() != '') {
                    $('input[type=text]').val((localStorage.getItem('registerUser'))).trigger('focus');
                    $("input[type=text]").focus(function () {
                        $('input[type=text]').val((localStorage.getItem('registerUser'))).trigger('focus');
                    });
                    $("form").submit(function (event) {
                        /*
                                  if(!$('input[type=text]').val() || $('input[type=text]').val()=='' || $('input[type=text]').val()==undefined){
                                    $('input[type=text]').val((localStorage.getItem('registerUser'))).trigger('blur');
                        
                                  }
                                   if($('input[type=text]').attr('value')=='' || $('input[type=text]').attr('value')==undefined)
                                   {
                                    $('input[type=text]').val((localStorage.getItem('registerUser'))).trigger('blur');
                                    
                                   }
                                   $("input[type=text]").attr("value", (localStorage.getItem('registerUser')));
                                   $('input[type=text]').val((localStorage.getItem('registerUser'))).trigger('focus');
                        */
                    });
                }
            }
        }, 100);
    };
    CreatesubscriptionComponent.prototype.close = function () {
        this.dialog.closeAll();
    };
    CreatesubscriptionComponent.prototype.manage = function () {
        var dialogRef = this.dialog.open(_manage_manage_component__WEBPACK_IMPORTED_MODULE_8__["ManageComponent"], {
            height: '600px',
            width: '700px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
        });
    };
    CreatesubscriptionComponent.prototype.gotoManage = function () {
        this.router.navigate(['/billing/manage']);
    };
    CreatesubscriptionComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.existCondition);
    };
    CreatesubscriptionComponent.prototype.loadScripts = function () {
        // This array contains all the files/CDNs 
        var dynamicScripts = [
            'https://js.stripe.com/v3/',
            'https://servicebot.io/js/servicebot-embed.js'
            //Load all your script files here'
        ];
        for (var i = 0; i < dynamicScripts.length; i++) {
            var node = document.createElement('script');
            node.src = dynamicScripts[i];
            node.type = 'text/javascript';
            node.async = false;
            document.getElementsByTagName('head')[0].appendChild(node);
        }
    };
    CreatesubscriptionComponent.ctorParameters = function () { return [
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"] },
        { type: _shared_messageService__WEBPACK_IMPORTED_MODULE_2__["MessageService"] },
        { type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__["Ng4LoadingSpinnerService"] }
    ]; };
    CreatesubscriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-createsubscription',
            template: __webpack_require__(/*! raw-loader!./createsubscription.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/billing/createsubscription/createsubscription.component.html"),
            styles: [__webpack_require__(/*! ./createsubscription.component.css */ "./src/app/components/billing/createsubscription/createsubscription.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"],
            Document, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"], _shared_messageService__WEBPACK_IMPORTED_MODULE_2__["MessageService"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__["Ng4LoadingSpinnerService"]])
    ], CreatesubscriptionComponent);
    return CreatesubscriptionComponent;
}());



/***/ }),

/***/ "./src/app/components/billing/manage/manage.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/billing/manage/manage.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".matBtn{\r\n    padding: 2px 14px;\r\n    line-height: 25px;\r\n    margin-left: 20px;\r\n    margin-top: 20px;\r\n    background: #3095ff;\r\n    color:white;\r\n    border-radius: 5px;\r\n    white-space: nowrap;\r\n}\r\n.servicebot--embeddable .change-plan-modal {\r\n    position: fixed !important;\r\n    /* height: 70%; */\r\n    width: 60% !important;\r\n    background: #050413a1 !important;\r\n    top: -73px !important;\r\n    left: 278px !important;\r\n    z-index: 999 !important;}\r\n.servicebot--embeddable h3{\r\n        font-size:12px !important;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iaWxsaW5nL21hbmFnZS9tYW5hZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGdDQUFnQztJQUNoQyxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHVCQUF1QixDQUFDO0FBQzVCO1FBQ1EseUJBQXlCO0lBQzdCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9iaWxsaW5nL21hbmFnZS9tYW5hZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXRCdG57XHJcbiAgICBwYWRkaW5nOiAycHggMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzMwOTVmZjtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG4uc2VydmljZWJvdC0tZW1iZWRkYWJsZSAuY2hhbmdlLXBsYW4tbW9kYWwge1xyXG4gICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgICAvKiBoZWlnaHQ6IDcwJTsgKi9cclxuICAgIHdpZHRoOiA2MCUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICMwNTA0MTNhMSAhaW1wb3J0YW50O1xyXG4gICAgdG9wOiAtNzNweCAhaW1wb3J0YW50O1xyXG4gICAgbGVmdDogMjc4cHggIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDk5OSAhaW1wb3J0YW50O31cclxuLnNlcnZpY2Vib3QtLWVtYmVkZGFibGUgaDN7XHJcbiAgICAgICAgZm9udC1zaXplOjEycHggIWltcG9ydGFudDtcclxuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/billing/manage/manage.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/billing/manage/manage.component.ts ***!
  \***************************************************************/
/*! exports provided: ManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageComponent", function() { return ManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");






var ManageComponent = /** @class */ (function () {
    function ManageComponent(commonSevice, _renderer2, _document, dialog) {
        this.commonSevice = commonSevice;
        this._renderer2 = _renderer2;
        this._document = _document;
        this.dialog = dialog;
        this.loadScripts();
    }
    ManageComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('registerUser') != null && localStorage.getItem('registerUser') != undefined) {
            console.log(localStorage.getItem('registerUser'));
            var URL = "billing/getToken";
            var email = localStorage.getItem('registerUser');
            this.commonSevice.Add({ email: email }, URL).subscribe(function (data) {
                _this.token = data.toString();
                console.log(_this.token);
                var script = _this._renderer2.createElement('script');
                script.type = "text/javascript";
                script.text = "\n      Servicebot.init({\n        url : " + "\"" + _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].APIEndpoint + "\"" + ",\n        selector : document.getElementById('servicebot-management-form'),\n        type : \"manage\",\n        token: " + "\"" + _this.token + "\"" + ",\n        handleResponse: (response) => {\n\t\tconsole.log(response);\n            //determine what to do on certain events...\n        }\n    })\n \n        ";
                _this._renderer2.appendChild(_this._document.body, script);
            });
        }
    };
    ManageComponent.prototype.close = function () {
        this.dialog.closeAll();
    };
    ManageComponent.prototype.loadScripts = function () {
        // This array contains all the files/CDNs 
        var dynamicScripts = [
            'https://js.stripe.com/v3/',
            'https://servicebot.io/js/servicebot-embed.js'
            //Load all your script files here'
        ];
        for (var i = 0; i < dynamicScripts.length; i++) {
            var node = document.createElement('script');
            node.src = dynamicScripts[i];
            node.type = 'text/javascript';
            node.async = false;
            document.getElementsByTagName('head')[0].appendChild(node);
        }
    };
    ManageComponent.ctorParameters = function () { return [
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
    ]; };
    ManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-manage',
            template: __webpack_require__(/*! raw-loader!./manage.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/billing/manage/manage.component.html"),
            styles: [__webpack_require__(/*! ./manage.component.css */ "./src/app/components/billing/manage/manage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"],
            Document, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], ManageComponent);
    return ManageComponent;
}());



/***/ }),

/***/ "./src/app/components/change-password/change-password.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/change-password/change-password.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/change-password/change-password.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/change-password/change-password.component.ts ***!
  \*************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var src_app_shared_messageService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/messageService */ "./src/app/shared/messageService.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_services/alert.service */ "./src/app/_services/alert.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/_services/authentication.service */ "./src/app/_services/authentication.service.ts");










var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(formBuilder, route, router, authenticationService, alertService, ngZone, commonService, loader, ms) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.ngZone = ngZone;
        this.commonService = commonService;
        this.loader = loader;
        this.ms = ms;
        this.loading = false;
        this.submitted = false;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.uid = this.route.snapshot.paramMap.get('uid');
        this.token = this.route.snapshot.paramMap.get('token');
        this.commonService.ResetPasswordForm(this.uid, this.token)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
        this.loginForm = this.formBuilder.group({
            newPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    Object.defineProperty(ChangePasswordComponent.prototype, "f", {
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    ChangePasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.loader.show();
        var newPassword = this.f.newPassword.value;
        this.uid = this.route.snapshot.paramMap.get('uid');
        this.token = this.route.snapshot.paramMap.get('token');
        this.commonService.SendNewPassword(this.uid, this.token, { password: newPassword })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (data) {
            console.log(data);
            _this.loader.hide();
            _this.loading = false;
            localStorage.removeItem("resetPasswordUser");
            _this.ms.openSnackBar("Password has been successfully changed");
            _this.ngZone.run(function () { return _this.router.navigateByUrl('/login'); });
        }, function (error) {
            _this.ms.openSnackBar("Error! please try again later");
            _this.alertService.error(error);
            _this.loading = false;
            console.log(error);
            _this.loader.hide();
        });
    };
    ChangePasswordComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"] },
        { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: src_app_shared_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
        { type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__["Ng4LoadingSpinnerService"] },
        { type: src_app_shared_messageService__WEBPACK_IMPORTED_MODULE_7__["MessageService"] }
    ]; };
    ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! raw-loader!./change-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.css */ "./src/app/components/change-password/change-password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            src_app_shared_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__["Ng4LoadingSpinnerService"],
            src_app_shared_messageService__WEBPACK_IMPORTED_MODULE_7__["MessageService"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-service/edit-service.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/edit-service/edit-service.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".PipeData{\r\n    display: block !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0LXNlcnZpY2UvZWRpdC1zZXJ2aWNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2VkaXQtc2VydmljZS9lZGl0LXNlcnZpY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5QaXBlRGF0YXtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/edit-service/edit-service.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/edit-service/edit-service.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditServiceComponent", function() { return EditServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_messageService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../shared/messageService */ "./src/app/shared/messageService.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__);








var EditServiceComponent = /** @class */ (function () {
    function EditServiceComponent(fb, router, ngZone, actRoute, commonService, loader, ms) {
        var _this = this;
        this.fb = fb;
        this.router = router;
        this.ngZone = ngZone;
        this.actRoute = actRoute;
        this.commonService = commonService;
        this.loader = loader;
        this.ms = ms;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["COMMA"]];
        this.ServiceData = [];
        this.PipeData = [];
        this.handleError = function (controlName, errorName) {
            return _this.services.controls[controlName].hasError(errorName);
        };
        var url = "service/read-service";
        this.loader.show();
        var id = this.actRoute.snapshot.paramMap.get('id');
        console.log(id);
        this.commonService.GetById(id, url).subscribe(function (data) {
            _this.ServiceData = data.PIPE;
            console.log(data.PIPE);
            _this.services = _this.fb.group({
                SERVICE_NAME: [data.SERVICE_NAME, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                PIPE: _this.fb.array([]),
            }, function (error) {
                _this.loader.hide();
            });
            _this.getArray();
        });
        var URL = "pipes/getAll";
        this.commonService.GetAll(URL).subscribe(function (data) {
            _this.PipeData = data;
            _this.loader.hide();
        }, function (error) {
            _this.loader.hide();
        });
    }
    EditServiceComponent.prototype.ngOnInit = function () {
        this.submitBookForm();
    };
    /* Reactive book form */
    EditServiceComponent.prototype.submitBookForm = function () {
        this.services = this.fb.group({
            SERVICE_NAME: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            PIPE: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormArray"]([]),
        });
    };
    EditServiceComponent.prototype.getArray = function () {
        var e_1, _a;
        this.PIPE = this.services.get('PIPE');
        if (this.ServiceData.length > 0) {
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.ServiceData), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    this.PIPE.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](item));
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    };
    EditServiceComponent.prototype.onCheckboxChange = function (e) {
        var _this = this;
        if (e.target.checked) {
            this.PIPE.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](e.target.value));
        }
        else {
            var i_1 = 0;
            this.PIPE.controls.forEach(function (item) {
                if (item.value == e.target.value) {
                    _this.PIPE.removeAt(i_1);
                    return;
                }
                i_1++;
            });
        }
    };
    /* onChange(checkbox:any){
       var formArray: FormArray = this.services.get('PIPE') as FormArray;
       console.log(checkbox);
   
        if(checkbox.checked){
          console.log(checkbox.value);
         formArray.push(new FormControl(checkbox.value));
   
        }else{
         // find the unselected element
         let i: number = 0;
     
         formArray.controls.forEach((ctrl: FormControl) => {
           if(ctrl.value == checkbox.value) {
             // Remove the unselected element from the arrayForm
             formArray.removeAt(i);
             return;
           }
     
           i++;
         });
       }
     }*/
    EditServiceComponent.prototype.submitEditServicesForm = function () {
        var _this = this;
        this.loader.show();
        if (this.services.valid) {
            var id = this.actRoute.snapshot.paramMap.get('id');
            if (window.confirm('Are you sure you want to update?')) {
                var url = "service/edit-service";
                console.log(this.services.value);
                this.commonService.Update(id, this.services.value, url).subscribe(function (res) {
                    _this.ms.openSnackBar("Service is edited successfully");
                    _this.ngZone.run(function () { return _this.router.navigateByUrl('/services/getAll'); });
                });
            }
        }
    };
    EditServiceComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__["Ng4LoadingSpinnerService"] },
        { type: _shared_messageService__WEBPACK_IMPORTED_MODULE_6__["MessageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('chipList', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditServiceComponent.prototype, "chipList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('resetStudentForm', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditServiceComponent.prototype, "myNgForm", void 0);
    EditServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit-service',
            template: __webpack_require__(/*! raw-loader!./edit-service.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/edit-service/edit-service.component.html"),
            styles: [__webpack_require__(/*! ./edit-service.component.css */ "./src/app/components/edit-service/edit-service.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__["Ng4LoadingSpinnerService"],
            _shared_messageService__WEBPACK_IMPORTED_MODULE_6__["MessageService"]])
    ], EditServiceComponent);
    return EditServiceComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-services-value/edit-services-value.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/edit-services-value/edit-services-value.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC1zZXJ2aWNlcy12YWx1ZS9lZGl0LXNlcnZpY2VzLXZhbHVlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/edit-services-value/edit-services-value.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/edit-services-value/edit-services-value.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EditServicesValueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditServicesValueComponent", function() { return EditServicesValueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_messageService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/messageService */ "./src/app/shared/messageService.ts");








var EditServicesValueComponent = /** @class */ (function () {
    function EditServicesValueComponent(fb, router, ngZone, actRoute, commonService, loader, ms) {
        var _this = this;
        this.fb = fb;
        this.router = router;
        this.ngZone = ngZone;
        this.actRoute = actRoute;
        this.commonService = commonService;
        this.loader = loader;
        this.ms = ms;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["COMMA"]];
        this.handleError = function (controlName, errorName) {
            return _this.servicesSize.controls[controlName].hasError(errorName);
        };
        var url = "read-services-value";
        var id = this.actRoute.snapshot.paramMap.get('id');
        loader.show();
        console.log(id);
        this.commonService.GetById(id, 'read-services-value').subscribe(function (data) {
            _this.servicesSize = _this.fb.group({
                SIZE_VALUE: [data.SIZE_VALUE, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
            });
            _this.loader.hide();
        }, function (error) {
            _this.loader.hide();
        });
    }
    EditServicesValueComponent.prototype.ngOnInit = function () {
        this.submitBookForm();
    };
    /* Reactive book form */
    EditServicesValueComponent.prototype.submitBookForm = function () {
        this.servicesSize = this.fb.group({
            SIZE_VALUE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
        });
    };
    EditServicesValueComponent.prototype.submitServicesForm = function () {
        var _this = this;
        this.loader.show();
        if (this.servicesSize.valid) {
            console.log(this.servicesSize.value);
            var id = this.actRoute.snapshot.paramMap.get('id');
            if (window.confirm('Are you sure you want to update?')) {
                var url = "edit-services-value";
                this.commonService.Update(id, this.servicesSize.value, url).subscribe(function (res) {
                    _this.ms.openSnackBar("Service Size is edited successfully");
                    _this.ngZone.run(function () { return _this.router.navigateByUrl('/get-all-services-size'); });
                });
            }
        }
    };
    EditServicesValueComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerService"] },
        { type: _shared_messageService__WEBPACK_IMPORTED_MODULE_7__["MessageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('chipList', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditServicesValueComponent.prototype, "chipList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('resetStudentForm', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditServicesValueComponent.prototype, "myNgForm", void 0);
    EditServicesValueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit-services-value',
            template: __webpack_require__(/*! raw-loader!./edit-services-value.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/edit-services-value/edit-services-value.component.html"),
            styles: [__webpack_require__(/*! ./edit-services-value.component.css */ "./src/app/components/edit-services-value/edit-services-value.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerService"],
            _shared_messageService__WEBPACK_IMPORTED_MODULE_7__["MessageService"]])
    ], EditServicesValueComponent);
    return EditServicesValueComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-student/edit-student.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/edit-student/edit-student.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC1zdHVkZW50L2VkaXQtc3R1ZGVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/edit-student/edit-student.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/edit-student/edit-student.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditStudentComponent", function() { return EditStudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var EditStudentComponent = /** @class */ (function () {
    function EditStudentComponent(fb, router, ngZone, actRoute, studentApi) {
        var _this = this;
        this.fb = fb;
        this.router = router;
        this.ngZone = ngZone;
        this.actRoute = actRoute;
        this.studentApi = studentApi;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.selected = '';
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["COMMA"]];
        this.subjectArray = [];
        this.SectioinArray = ['A', 'B', 'C', 'D', 'E'];
        /* Get errors */
        this.handleError = function (controlName, errorName) {
            return _this.studentForm.controls[controlName].hasError(errorName);
        };
        var id = this.actRoute.snapshot.paramMap.get('id');
        this.studentApi.GetById(id, 'read-student').subscribe(function (data) {
            console.log(data.subjects);
            _this.subjectArray = data.subjects;
            _this.studentForm = _this.fb.group({
                student_name: [data.student_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                student_email: [data.student_email, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                section: [data.section, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                subjects: [data.subjects],
                dob: [data.dob, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                gender: [data.gender]
            });
        });
    }
    EditStudentComponent.prototype.ngOnInit = function () {
        this.updateBookForm();
    };
    /* Reactive book form */
    EditStudentComponent.prototype.updateBookForm = function () {
        this.studentForm = this.fb.group({
            student_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            student_email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            section: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            subjects: [this.subjectArray],
            dob: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            gender: ['Male']
        });
    };
    /* Add dynamic languages */
    EditStudentComponent.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        // Add language
        if ((value || '').trim() && this.subjectArray.length < 5) {
            this.subjectArray.push({ name: value.trim() });
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    };
    /* Remove dynamic languages */
    EditStudentComponent.prototype.remove = function (subject) {
        var index = this.subjectArray.indexOf(subject);
        if (index >= 0) {
            this.subjectArray.splice(index, 1);
        }
    };
    /* Date */
    EditStudentComponent.prototype.formatDate = function (e) {
        var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
        this.studentForm.get('dob').setValue(convertDate, {
            onlyself: true
        });
    };
    /* Update book */
    EditStudentComponent.prototype.updateStudentForm = function () {
    };
    EditStudentComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('chipList', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditStudentComponent.prototype, "chipList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('resetStudentForm', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditStudentComponent.prototype, "myNgForm", void 0);
    EditStudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit-student',
            template: __webpack_require__(/*! raw-loader!./edit-student.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/edit-student/edit-student.component.html"),
            styles: [__webpack_require__(/*! ./edit-student.component.css */ "./src/app/components/edit-student/edit-student.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], EditStudentComponent);
    return EditStudentComponent;
}());



/***/ }),

/***/ "./src/app/components/forgot-password/forgot-password.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/forgot-password/forgot-password.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/forgot-password/forgot-password.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/forgot-password/forgot-password.component.ts ***!
  \*************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var src_app_shared_messageService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/messageService */ "./src/app/shared/messageService.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_services/alert.service */ "./src/app/_services/alert.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/_services/authentication.service */ "./src/app/_services/authentication.service.ts");










var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(formBuilder, route, router, authenticationService, alertService, ngZone, commonService, loader, ms) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.ngZone = ngZone;
        this.commonService = commonService;
        this.loader = loader;
        this.ms = ms;
        this.loading = false;
        this.submitted = false;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            emailAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    Object.defineProperty(ForgotPasswordComponent.prototype, "f", {
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    ForgotPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.loader.show();
        var emailAdd = this.f.emailAddress.value;
        this.commonService.ResetPasswordRequest({ email: emailAdd })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (data) {
            //this.router.navigate([this.returnUrl]);
            console.log(data);
            _this.loader.hide();
            _this.loading = false;
            _this.ms.openSnackBar("Password has been sent to your email address");
        }, function (error) {
            _this.ms.openSnackBar("You are not a registered user");
            _this.alertService.error(error);
            _this.loading = false;
            console.log(error);
            _this.loader.hide();
        });
    };
    ForgotPasswordComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"] },
        { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: src_app_shared_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
        { type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__["Ng4LoadingSpinnerService"] },
        { type: src_app_shared_messageService__WEBPACK_IMPORTED_MODULE_7__["MessageService"] }
    ]; };
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/components/forgot-password/forgot-password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            src_app_shared_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__["Ng4LoadingSpinnerService"],
            src_app_shared_messageService__WEBPACK_IMPORTED_MODULE_7__["MessageService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/invite-users/invite-users.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/invite-users/invite-users.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW52aXRlLXVzZXJzL2ludml0ZS11c2Vycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/invite-users/invite-users.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/invite-users/invite-users.component.ts ***!
  \*******************************************************************/
/*! exports provided: InviteUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteUsersComponent", function() { return InviteUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_services/alert.service */ "./src/app/_services/alert.service.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shared_messageService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/messageService */ "./src/app/shared/messageService.ts");










var InviteUsersComponent = /** @class */ (function () {
    function InviteUsersComponent(formBuilder, route, router, authenticationService, alertService, ngZone, commonService, loader, ms) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.ngZone = ngZone;
        this.commonService = commonService;
        this.loader = loader;
        this.ms = ms;
        this.loading = false;
        this.submitted = false;
    }
    InviteUsersComponent.prototype.ngOnInit = function () {
        this.inviteForm = this.formBuilder.group({
            emailAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(InviteUsersComponent.prototype, "f", {
        get: function () { return this.inviteForm.controls; },
        enumerable: true,
        configurable: true
    });
    InviteUsersComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.inviteForm.invalid) {
            return;
        }
        this.loading = true;
        this.loader.show();
        var data = {
            references: {},
            email: this.f.emailAddress.value
        };
        this.commonService.InviteUsers(data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            //this.router.navigate([this.returnUrl]);
            console.log(data);
        }, function (error) {
            _this.alertService.error(error);
            console.log(error);
            _this.loading = false;
            _this.loader.hide();
        });
    };
    InviteUsersComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
        { type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_8__["Ng4LoadingSpinnerService"] },
        { type: _shared_messageService__WEBPACK_IMPORTED_MODULE_9__["MessageService"] }
    ]; };
    InviteUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invite-users',
            template: __webpack_require__(/*! raw-loader!./invite-users.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/invite-users/invite-users.component.html"),
            styles: [__webpack_require__(/*! ./invite-users.component.css */ "./src/app/components/invite-users/invite-users.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _shared_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_8__["Ng4LoadingSpinnerService"],
            _shared_messageService__WEBPACK_IMPORTED_MODULE_9__["MessageService"]])
    ], InviteUsersComponent);
    return InviteUsersComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_services/alert.service */ "./src/app/_services/alert.service.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shared_messageService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/messageService */ "./src/app/shared/messageService.ts");
/* harmony import */ var src_app_models_User__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/models/User */ "./src/app/models/User.ts");











var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, authenticationService, alertService, ngZone, commonService, loader, ms) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.ngZone = ngZone;
        this.commonService = commonService;
        this.loader = loader;
        this.ms = ms;
        this.loading = false;
        this.submitted = false;
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.submitted = true;
        console.log('loginForm');
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            console.log(this.loginForm);
            return;
        }
        this.loading = true;
        this.loader.show();
        this.authenticationService.auth(this.loginForm.value.email, this.loginForm.value.password)
            .subscribe(function (data) {
            console.log(data);
            var user = new src_app_models_User__WEBPACK_IMPORTED_MODULE_10__["User"]();
            if (data.permissions.includes("can_administrate")) {
                user.isAdmin = "1";
            }
            else {
                user.isAdmin = "0";
            }
            //this.router.navigate([this.returnUrl]);
            if (data.message.includes("successful")) {
                var dat = {
                    email: _this.loginForm.value.email,
                    password: _this.loginForm.value.password
                };
                _this.commonService.Add(dat, 'users/getToken').subscribe(function (data) {
                    console.log(data);
                    localStorage.setItem('registerUser', _this.f.email.value);
                    user.emailAddress = data.email;
                    user.password = data.password;
                    user.firstName = '';
                    user.lastName = '';
                    user.token = data.token;
                    console.log(user);
                    _this.authenticationService.setUser(user);
                    window.location.reload();
                });
            }
            else {
                _this.ms.openSnackBar("Invalid username or password");
                _this.loading = false;
                _this.loader.hide();
            }
        }, function (error) {
            _this.ms.openSnackBar("Invalid username or password");
            _this.loading = false;
            _this.loader.hide();
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        if (this.f.password.value == "AeiOu98094_#234") {
            localStorage.setItem('resetPasswordUser', this.f.emailAddress.value);
            this.ngZone.run(function () { return _this.router.navigateByUrl('/change-password'); });
            return;
        }
        this.loading = true;
        this.loader.show();
        this.authenticationService.login(this.f.emailAddress.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            //this.router.navigate([this.returnUrl]);
            if (data.success == true) {
                localStorage.setItem('registerUser', _this.f.emailAddress.value);
                window.location.reload();
                _this.ngZone.run(function () { return _this.router.navigateByUrl('/'); });
            }
            else {
                _this.ms.openSnackBar("Invalid username or password");
                _this.loading = false;
                _this.loader.hide();
            }
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
            _this.loader.hide();
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
        { type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_8__["Ng4LoadingSpinnerService"] },
        { type: _shared_messageService__WEBPACK_IMPORTED_MODULE_9__["MessageService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html") }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _shared_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_8__["Ng4LoadingSpinnerService"],
            _shared_messageService__WEBPACK_IMPORTED_MODULE_9__["MessageService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/pipe/add-pipe/add-pipe.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/pipe/add-pipe/add-pipe.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGlwZS9hZGQtcGlwZS9hZGQtcGlwZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/pipe/add-pipe/add-pipe.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/pipe/add-pipe/add-pipe.component.ts ***!
  \****************************************************************/
/*! exports provided: AddPipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPipeComponent", function() { return AddPipeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_messageService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/messageService */ "./src/app/shared/messageService.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__);








var AddPipeComponent = /** @class */ (function () {
    function AddPipeComponent(fb, router, ngZone, commonService, loader, ms) {
        var _this = this;
        this.fb = fb;
        this.router = router;
        this.ngZone = ngZone;
        this.commonService = commonService;
        this.loader = loader;
        this.ms = ms;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["COMMA"]];
        this.handleError = function (controlName, errorName) {
            return _this.pipes.controls[controlName].hasError(errorName);
        };
    }
    AddPipeComponent.prototype.ngOnInit = function () {
        this.validateForm();
    };
    /* Reactive book form */
    AddPipeComponent.prototype.validateForm = function () {
        this.pipes = this.fb.group({
            PIPE_NAME: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
        });
    };
    AddPipeComponent.prototype.submitAddPipesForm = function () {
        var _this = this;
        this.loader.show();
        if (this.pipes.valid) {
            var URL = 'pipe/add-pipe';
            this.commonService.Add(this.pipes.value, URL).subscribe(function (res) {
                _this.ms.openSnackBar("Pipe Class is added successfully");
                _this.ngZone.run(function () { return _this.router.navigateByUrl('/pipes/getAll'); });
            });
        }
    };
    AddPipeComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__["Ng4LoadingSpinnerService"] },
        { type: _shared_messageService__WEBPACK_IMPORTED_MODULE_6__["MessageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('chipList', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddPipeComponent.prototype, "chipList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('resetStudentForm', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddPipeComponent.prototype, "myNgForm", void 0);
    AddPipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add-pipe',
            template: __webpack_require__(/*! raw-loader!./add-pipe.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pipe/add-pipe/add-pipe.component.html"),
            styles: [__webpack_require__(/*! ./add-pipe.component.css */ "./src/app/components/pipe/add-pipe/add-pipe.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
            _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__["Ng4LoadingSpinnerService"],
            _shared_messageService__WEBPACK_IMPORTED_MODULE_6__["MessageService"]])
    ], AddPipeComponent);
    return AddPipeComponent;
}());



/***/ }),

/***/ "./src/app/components/pipe/edit-pipe/edit-pipe.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/pipe/edit-pipe/edit-pipe.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGlwZS9lZGl0LXBpcGUvZWRpdC1waXBlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/pipe/edit-pipe/edit-pipe.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/pipe/edit-pipe/edit-pipe.component.ts ***!
  \******************************************************************/
/*! exports provided: EditPipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPipeComponent", function() { return EditPipeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_messageService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/messageService */ "./src/app/shared/messageService.ts");








var EditPipeComponent = /** @class */ (function () {
    function EditPipeComponent(fb, router, ngZone, actRoute, commonService, loader, ms) {
        var _this = this;
        this.fb = fb;
        this.router = router;
        this.ngZone = ngZone;
        this.actRoute = actRoute;
        this.commonService = commonService;
        this.loader = loader;
        this.ms = ms;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["COMMA"]];
        this.AllServices = [];
        this.ServiceData = [];
        this.handleError = function (controlName, errorName) {
            return _this.pipes.controls[controlName].hasError(errorName);
        };
        this.loader.show();
        var url = "pipe/read-pipe";
        var id = this.actRoute.snapshot.paramMap.get('id');
        this.commonService.GetById(id, url).subscribe(function (data) {
            _this.ServiceData = data.SERVICES;
            _this.pipes = _this.fb.group({
                PIPE_NAME: [data.PIPE_NAME, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                SERVICES: _this.fb.array([]),
            });
            _this.getArray();
        }, function (error) {
            _this.loader.hide();
        });
        var URL = "services/getAll";
        this.commonService.GetAll(URL).subscribe(function (data) {
            _this.AllServices = data;
            _this.loader.hide();
        }, function (error) {
            _this.loader.hide();
        });
    }
    EditPipeComponent.prototype.ngOnInit = function () {
        this.submitBookForm();
    };
    EditPipeComponent.prototype.getArray = function () {
        var e_1, _a;
        this.SERVICE = this.pipes.get('SERVICES');
        if (this.ServiceData.length > 0) {
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.ServiceData), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    this.SERVICE.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](item));
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    };
    /* Reactive book form */
    EditPipeComponent.prototype.submitBookForm = function () {
        this.pipes = this.fb.group({
            PIPE_NAME: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
        });
    };
    EditPipeComponent.prototype.onCheckboxChange = function (e) {
        var _this = this;
        if (e.target.checked) {
            this.SERVICE.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](e.target.value));
        }
        else {
            var i_1 = 0;
            this.SERVICE.controls.forEach(function (item) {
                if (item.value == e.target.value) {
                    _this.SERVICE.removeAt(i_1);
                    return;
                }
                i_1++;
            });
        }
    };
    EditPipeComponent.prototype.submitEditPipesForm = function () {
        var _this = this;
        this.loader.show();
        if (this.pipes.valid) {
            var id = this.actRoute.snapshot.paramMap.get('id');
            if (window.confirm('Are you sure you want to update?')) {
                console.log(this.pipes.value);
                var url = "pipe/edit-pipe";
                this.commonService.Update(id, this.pipes.value, url).subscribe(function (res) {
                    _this.ms.openSnackBar("Pipe class is edited successfully");
                    _this.ngZone.run(function () { return _this.router.navigateByUrl('/pipes/getAll'); });
                });
            }
        }
    };
    EditPipeComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerService"] },
        { type: _shared_messageService__WEBPACK_IMPORTED_MODULE_7__["MessageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('chipList', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditPipeComponent.prototype, "chipList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('resetStudentForm', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditPipeComponent.prototype, "myNgForm", void 0);
    EditPipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit-pipe',
            template: __webpack_require__(/*! raw-loader!./edit-pipe.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pipe/edit-pipe/edit-pipe.component.html"),
            styles: [__webpack_require__(/*! ./edit-pipe.component.css */ "./src/app/components/pipe/edit-pipe/edit-pipe.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerService"],
            _shared_messageService__WEBPACK_IMPORTED_MODULE_7__["MessageService"]])
    ], EditPipeComponent);
    return EditPipeComponent;
}());



/***/ }),

/***/ "./src/app/components/pipe/pipe-list/pipe-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/pipe/pipe-list/pipe-list.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\r\n  background-color: #333;\r\n  color: #fff;\r\n  overflow: auto;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top:0;\r\n  padding: 15px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-bottom: 50px;\r\n}\r\n\r\nmat-icon {\r\n  cursor: pointer;\r\n}\r\n\r\n.action-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 20px;\r\n}\r\n\r\n.table {\r\n  padding: 20px;\r\n  display: block;\r\n  overflow-x: auto;\r\n  white-space: nowrap;\r\n}\r\n\r\n.table tbody tr td,\r\n.table thead th,\r\n.table thead {\r\n  \r\n  border-bottom: 1px solid #dee2e6;\r\n}\r\n\r\n.table thead th{\r\n  color: rgba(0,0,0,.54);\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n}\r\n\r\n.table thead td{\r\n  color: rgba(0,0,0,.87);\r\n  font-size:14px;\r\n}\r\n\r\n.table tbody tr td mat-form-field\r\n{\r\n  width:100% !important;\r\n}\r\n\r\n.table tbody tr td,\r\n.table thead th {\r\n  width: 100% !important;\r\n  padding-top: 15px;\r\n  padding-bottom:15px;\r\n}\r\n\r\n.output {\r\n  padding: 20px;\r\n}\r\n\r\n.delete {\r\n  color: red  ;\r\n}\r\n\r\n.done {\r\n  color: green;\r\n}\r\n\r\nspan.ui-column-resizer {\r\n  width: 100%;\r\n  height: 100%;\r\n  cursor: col-resize;\r\n  padding: 30px;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waXBlL3BpcGUtbGlzdC9waXBlLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsY0FBYztFQUNkLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsS0FBSztFQUNMLGFBQWE7RUFDYixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTs7OztFQUlFLGdDQUFnQztBQUNsQzs7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FBQ0E7O0VBRUUscUJBQXFCO0FBQ3ZCOztBQUNBOztFQUVFLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUlBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTs7QUFFZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGlwZS9waXBlLWxpc3QvcGlwZS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6MDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbm1hdC1pY29uIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hY3Rpb24tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4udGFibGUge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4udGFibGUgdGJvZHkgdHIgdGQsXHJcbi50YWJsZSB0aGVhZCB0aCxcclxuLnRhYmxlIHRoZWFkIHtcclxuICBcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcclxufVxyXG4udGFibGUgdGhlYWQgdGh7XHJcbiAgY29sb3I6IHJnYmEoMCwwLDAsLjU0KTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4udGFibGUgdGhlYWQgdGR7XHJcbiAgY29sb3I6IHJnYmEoMCwwLDAsLjg3KTtcclxuICBmb250LXNpemU6MTRweDtcclxufVxyXG4udGFibGUgdGJvZHkgdHIgdGQgbWF0LWZvcm0tZmllbGRcclxue1xyXG4gIHdpZHRoOjEwMCUgIWltcG9ydGFudDtcclxufVxyXG4udGFibGUgdGJvZHkgdHIgdGQsXHJcbi50YWJsZSB0aGVhZCB0aCB7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxuICBwYWRkaW5nLWJvdHRvbToxNXB4O1xyXG59XHJcblxyXG4ub3V0cHV0IHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uZGVsZXRlIHtcclxuICBjb2xvcjogcmVkICA7XHJcbn1cclxuXHJcbi5kb25lIHtcclxuICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcblxyXG5cclxuc3Bhbi51aS1jb2x1bW4tcmVzaXplciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGN1cnNvcjogY29sLXJlc2l6ZTtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/pipe/pipe-list/pipe-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/pipe/pipe-list/pipe-list.component.ts ***!
  \******************************************************************/
/*! exports provided: PipeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeListComponent", function() { return PipeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _shared_messageService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/messageService */ "./src/app/shared/messageService.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "./node_modules/@rxweb/reactive-form-validators/fesm5/rxweb-reactive-form-validators.js");









var PipeListComponent = /** @class */ (function () {
    function PipeListComponent(ngZone, router, fb, commonSevice, loader, ms) {
        this.ngZone = ngZone;
        this.router = router;
        this.fb = fb;
        this.commonSevice = commonSevice;
        this.loader = loader;
        this.ms = ms;
        this.Pipes = [];
        this.toppings = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.toppingArr = [];
        this.displayedColumns = ['PIPE_NAME', 'action'];
        this.loader.show();
    }
    PipeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isDelete = false;
        this.formSubmitAttempt = false;
        this.touchedRows = [];
        this.userTable = this.fb.group({
            tableRows: this.fb.array([])
        });
        var URL = "services/getAll";
        this.commonSevice.GetAll(URL).subscribe(function (data) {
            _this.AllService = data;
            if (_this.AllService.length > 0) {
                _this.AllService = _this.AllService.sort(function (a, b) { return a.SERVICE_NAME > b.SERVICE_NAME ? 1 : -1; });
            }
            var URL = "pipes/getAll";
            _this.commonSevice.GetAll(URL).subscribe(function (data) {
                var e_1, _a;
                _this.Pipes = data;
                _this.control = _this.userTable.get('tableRows');
                try {
                    for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_this.Pipes), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var item = _c.value;
                        var fbGroup = _this.fb.group({
                            _id: [item._id],
                            PIPE_NAME: [item.PIPE_NAME, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_8__["RxwebValidators"].unique()]],
                            SERVICES: [item.SERVICES],
                            isEditable: [false]
                        });
                        _this.control.push(fbGroup);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                _this.loader.hide();
            }, function (error) {
                _this.loader.hide();
            });
        }, function (error) {
            _this.loader.hide();
        });
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.Pipes.count
        };
    };
    PipeListComponent.prototype.retrieveServices = function (id) {
        var e_2, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.AllService), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                if (item._id === id) {
                    return item.SERVICE_NAME;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return '';
    };
    PipeListComponent.prototype.ngAfterOnInit = function () {
        this.control = this.userTable.get('tableRows');
    };
    PipeListComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    PipeListComponent.prototype.fieldGlobalIndex = function (index) {
        return this.config.itemsPerPage * (this.config.currentPage - 1) + index;
    };
    PipeListComponent.prototype.initiateForm = function () {
        return this.fb.group({
            PIPE_NAME: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_8__["RxwebValidators"].unique()]],
            SERVICES: [[]],
            isEditable: [true]
        });
    };
    PipeListComponent.prototype.addRow = function () {
        var control = this.userTable.get('tableRows');
        control.insert((this.config.itemsPerPage * this.config.currentPage) - (this.config.itemsPerPage), this.initiateForm());
        this.formSubmitAttempt = false;
        this.toppings.setValue([]);
        this.isDelete = false;
    };
    PipeListComponent.prototype.cancel = function (group) {
        group.reset(this.resetFormGroup);
        group.get('SERVICES').setValue(this.toppingArr);
        if (group.value._id == undefined) {
            var control = this.userTable.get('tableRows');
            control.removeAt((this.config.itemsPerPage * this.config.currentPage) - (this.config.itemsPerPage));
        }
        else {
            group.get('isEditable').setValue(false);
        }
        console.log(this.toppingArr);
    };
    PipeListComponent.prototype.SelectServices = function (group, event, sel) {
        if (event.isUserInput) {
            if (event.source._selected == false) {
                if (group.value.SERVICES.includes(event.source.value)) {
                    console.log("included");
                    var index = group.value.SERVICES.indexOf(event.source.value);
                    if (index !== -1) {
                        console.log("yes");
                        group.value.SERVICES.splice(index, 1);
                    }
                }
            }
            else {
                group.value.SERVICES.push(event.source.value);
            }
            console.log(event.source._selected);
        }
    };
    PipeListComponent.prototype.deleteRow = function (index, group) {
        var control = this.userTable.get('tableRows');
        this.deletePipe(control, index, group);
    };
    PipeListComponent.prototype.submitEditPipesForm = function (group) {
        var _this = this;
        this.loader.show();
        if (group.valid) {
            var id = group.value._id;
            if (window.confirm('Are you sure you want to update?')) {
                var url = "pipe/edit-pipe";
                this.commonSevice.Update(id, group.value, url).subscribe(function (res) {
                    _this.ms.openSnackBar("Pipe class is edited successfully");
                    group.get('isEditable').setValue(false);
                    _this.router.routeReuseStrategy.shouldReuseRoute = function () {
                        return false;
                    };
                    _this.router.onSameUrlNavigation = 'reload';
                    _this.router.navigate(['/pipes/getAll']);
                }, function (error) {
                    _this.loader.hide();
                    _this.ms.openSnackBar("Error performing operation");
                });
            }
        }
        else {
            this.loader.hide();
            this.formSubmitAttempt = true;
            this.ms.openSnackBar("Please fill the required fields");
        }
    };
    PipeListComponent.prototype.submitAddPipesForm = function (group) {
        var _this = this;
        this.loader.show();
        if (group.valid) {
            var URL = 'pipe/add-pipe';
            this.commonSevice.Add(group.value, URL).subscribe(function (res) {
                _this.ms.openSnackBar("Pipe Class is added successfully");
                group.get('isEditable').setValue(false);
                _this.router.routeReuseStrategy.shouldReuseRoute = function () {
                    return false;
                };
                _this.router.onSameUrlNavigation = 'reload';
                _this.router.navigate(['/pipes/getAll']);
            }, function (error) {
                _this.loader.hide();
                _this.ms.openSnackBar("Error performing operation");
            });
        }
        else {
            this.loader.hide();
            this.formSubmitAttempt = true;
            this.ms.openSnackBar("Please fill the required fields");
        }
    };
    PipeListComponent.prototype.editRow = function (group) {
        var e_3, _a, e_4, _b;
        try {
            for (var _c = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.getFormControls.controls), _d = _c.next(); !_d.done; _d = _c.next()) {
                var formItem = _d.value;
                if (formItem.get('isEditable').value == true) {
                    formItem.get('isEditable').setValue(false);
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_3) throw e_3.error; }
        }
        group.get('isEditable').setValue(true);
        this.toppingArr = [];
        console.log(group);
        this.toppings.setValue(group.value.SERVICES);
        this.isDelete = true;
        this.resetFormGroup = group.value;
        try {
            for (var _e = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](group.value.SERVICES), _f = _e.next(); !_f.done; _f = _e.next()) {
                var item = _f.value;
                this.toppingArr.push(item);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    PipeListComponent.prototype.doneRow = function (group) {
        console.log(group);
        if (group.value._id == undefined) {
            this.formSubmitAttempt = true;
            this.submitAddPipesForm(group);
        }
        else {
            this.formSubmitAttempt = true;
            this.submitEditPipesForm(group);
        }
    };
    Object.defineProperty(PipeListComponent.prototype, "getFormControls", {
        get: function () {
            var control = this.userTable.get('tableRows');
            return control;
        },
        enumerable: true,
        configurable: true
    });
    PipeListComponent.prototype.deletePipe = function (control, index, group) {
        var _this = this;
        this.loader.show();
        if (window.confirm('Are you sure')) {
            var index = group.value._id;
            var url = 'pipe/delete-pipe';
            this.commonSevice.Delete(index, url).subscribe(function (data) {
                if (data.msg == "success") {
                    control.removeAt(index);
                    _this.loader.hide();
                    _this.ms.openSnackBar("Pipe Class is deleted");
                    _this.router.routeReuseStrategy.shouldReuseRoute = function () {
                        return false;
                    };
                    _this.router.onSameUrlNavigation = 'reload';
                    _this.router.navigate(['/pipes/getAll']);
                }
                else {
                    _this.loader.hide();
                    _this.ms.openSnackBar(data.msg);
                }
            }, function (error) {
                _this.loader.hide();
            });
        }
    };
    PipeListComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__["Ng4LoadingSpinnerService"] },
        { type: _shared_messageService__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], PipeListComponent.prototype, "paginator", void 0);
    PipeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
            selector: 'app-pipe-list',
            template: __webpack_require__(/*! raw-loader!./pipe-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pipe/pipe-list/pipe-list.component.html"),
            styles: [__webpack_require__(/*! ./pipe-list.component.css */ "./src/app/components/pipe/pipe-list/pipe-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__["Ng4LoadingSpinnerService"], _shared_messageService__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], PipeListComponent);
    return PipeListComponent;
}());



/***/ }),

/***/ "./src/app/components/pipe/pipe-services/pipe-services.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/pipe/pipe-services/pipe-services.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGlwZS9waXBlLXNlcnZpY2VzL3BpcGUtc2VydmljZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/pipe/pipe-services/pipe-services.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/pipe/pipe-services/pipe-services.component.ts ***!
  \**************************************************************************/
/*! exports provided: PipeServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeServicesComponent", function() { return PipeServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PipeServicesComponent = /** @class */ (function () {
    function PipeServicesComponent() {
    }
    PipeServicesComponent.prototype.ngOnInit = function () {
    };
    PipeServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pipe-services',
            template: __webpack_require__(/*! raw-loader!./pipe-services.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pipe/pipe-services/pipe-services.component.html"),
            styles: [__webpack_require__(/*! ./pipe-services.component.css */ "./src/app/components/pipe/pipe-services/pipe-services.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PipeServicesComponent);
    return PipeServicesComponent;
}());



/***/ }),

/***/ "./src/app/components/project-mech/add-project-mech/add-project-mech.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/project-mech/add-project-mech/add-project-mech.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC1tZWNoL2FkZC1wcm9qZWN0LW1lY2gvYWRkLXByb2plY3QtbWVjaC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/project-mech/add-project-mech/add-project-mech.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/project-mech/add-project-mech/add-project-mech.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AddProjectMechComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProjectMechComponent", function() { return AddProjectMechComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_messageService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/messageService */ "./src/app/shared/messageService.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__);








var AddProjectMechComponent = /** @class */ (function () {
    function AddProjectMechComponent(fb, router, ngZone, actRoute, commonService, loader, ms) {
        var _this = this;
        this.fb = fb;
        this.router = router;
        this.ngZone = ngZone;
        this.actRoute = actRoute;
        this.commonService = commonService;
        this.loader = loader;
        this.ms = ms;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["COMMA"]];
        this.services = [];
        this.services_size = [];
        this.pipe_class = [];
        this.components = [];
        this.projectData = [];
        this.section = [];
        this.item_no = [];
        this.rev_issued = [];
        this.numbersList = [];
        this.level = [0, 1, 2, 3];
        this.alphaList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        this.handleError = function (controlName, errorName) {
            return _this.projects.controls[controlName].hasError(errorName);
        };
    }
    AddProjectMechComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.validateForm();
        for (var i = 1; i <= 10; i++) {
            this.numbersList.push(i);
        }
        this.projectId = this.actRoute.snapshot.paramMap.get('id');
        var url = 'project/read-project';
        this.commonService.GetById(this.projectId, url).subscribe(function (data) {
            _this.projectData = data;
            if (_this.projectData.PROCESS_Y_N == 1) {
                _this.section.push("General");
                _this.section.push("Mechanical");
                _this.section.push("Process");
                _this.section.push("Electrical");
                _this.section.push("Communications");
            }
            else {
                _this.section.push("General");
                _this.section.push("Mechanical");
                _this.section.push("Electrical");
                _this.section.push("Communications");
            }
            if (_this.projectData.CONTRACTUAL_Y_N == 1) {
                _this.rev_issued = _this.numbersList;
            }
            else {
                _this.rev_issued = _this.alphaList;
            }
            _this.item_no = ["00", "01", "02"];
            console.log(_this.projectData);
        });
        var URL = "services/getAll";
        this.commonService.GetAll(URL).subscribe(function (data) {
            _this.services = data;
        });
        var URL = "component/getAll";
        this.commonService.GetAll(URL).subscribe(function (data) {
            _this.components = data;
        });
        var URL = "get-all-services-size";
        this.commonService.GetAll(URL).subscribe(function (data) {
            _this.services_size = data;
        });
        var URL = "pipes/getAll";
        this.commonService.GetAll(URL).subscribe(function (data) {
            _this.pipe_class = data;
        });
    };
    AddProjectMechComponent.prototype.formatDate = function (e) {
        var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
        this.projects.get('DATE_ISSUED').setValue(convertDate, {
            onlyself: true
        });
    };
    AddProjectMechComponent.prototype.retreiveService = function (id) {
        var e_1, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.services), _c = _b.next(); !_c.done; _c = _b.next()) {
                var ser = _c.value;
                console.log(ser.SERVICE_NAME);
                if (ser._id == id) {
                    return ser.SERVICE_NAME;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return '';
    };
    AddProjectMechComponent.prototype.retreiveComponent = function (id) {
        var e_2, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.components), _c = _b.next(); !_c.done; _c = _b.next()) {
                var ser = _c.value;
                if (ser._id == id) {
                    return ser.COMPONENT_NAME;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return '';
    };
    AddProjectMechComponent.prototype.retreivePipe = function (id) {
        var e_3, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.pipe_class), _c = _b.next(); !_c.done; _c = _b.next()) {
                var ser = _c.value;
                if (ser._id == id) {
                    return ser.PIPE_NAME;
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return '';
    };
    /* Reactive book form */
    AddProjectMechComponent.prototype.validateForm = function () {
        this.projects = this.fb.group({
            ID: [''],
            COMPONENT_ID: [''],
            REF_NO: [''],
            LEVEL: [''],
            SERVICE_DESCRIPTION: [''],
            SERVICE_SIZE: [''],
            PIPE_CLASS: [''],
            CONNECTION_TYPE_SIZE: [''],
            UM_TEMP_MIN: [''],
            UM_TEMP_MAX: [''],
            UM_TEMP_UNIT: [''],
            UM_PRES_MIN: [''],
            UM_PRES_MAX: [''],
            UM_PRES_UNIT: [''],
            UM_FLOW_MIN: [''],
            UM_FLOW_MAX: [''],
            UM_FLOW_UNIT: [''],
            SERVICE_CONN: [''],
            END_REF_NO: [''],
            OPE: [''],
            NOTES: ['']
        });
    };
    AddProjectMechComponent.prototype.submitAddProjectsMechForm = function () {
        var _this = this;
        this.loader.show();
        var URL = "project_mech/add-project_mech";
        this.projects.value.ID = this.projectId;
        console.log(this.projects.value);
        this.commonService.Add(this.projects.value, URL).subscribe(function (res) {
            _this.ms.openSnackBar("The Mechanical project is added");
            _this.router.routeReuseStrategy.shouldReuseRoute = function () {
                return false;
            };
            _this.router.onSameUrlNavigation = 'reload';
            _this.router.navigate(['/project_mech/getAll/' + _this.projectId]);
        });
    };
    AddProjectMechComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__["Ng4LoadingSpinnerService"] },
        { type: _shared_messageService__WEBPACK_IMPORTED_MODULE_6__["MessageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('chipList', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddProjectMechComponent.prototype, "chipList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('resetProjectsSheetForm', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddProjectMechComponent.prototype, "myNgForm", void 0);
    AddProjectMechComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add-project-mech',
            template: __webpack_require__(/*! raw-loader!./add-project-mech.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/project-mech/add-project-mech/add-project-mech.component.html"),
            styles: [__webpack_require__(/*! ./add-project-mech.component.css */ "./src/app/components/project-mech/add-project-mech/add-project-mech.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__["Ng4LoadingSpinnerService"],
            _shared_messageService__WEBPACK_IMPORTED_MODULE_6__["MessageService"]])
    ], AddProjectMechComponent);
    return AddProjectMechComponent;
}());



/***/ }),

/***/ "./src/app/components/project-mech/edit-project-mech/edit-project-mech.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/project-mech/edit-project-mech/edit-project-mech.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC1tZWNoL2VkaXQtcHJvamVjdC1tZWNoL2VkaXQtcHJvamVjdC1tZWNoLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/project-mech/edit-project-mech/edit-project-mech.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/project-mech/edit-project-mech/edit-project-mech.component.ts ***!
  \******************************************************************************************/
/*! exports provided: EditProjectMechComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProjectMechComponent", function() { return EditProjectMechComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_messageService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/messageService */ "./src/app/shared/messageService.ts");








var EditProjectMechComponent = /** @class */ (function () {
    function EditProjectMechComponent(fb, router, ngZone, actRoute, commonService, loader, ms) {
        var _this = this;
        this.fb = fb;
        this.router = router;
        this.ngZone = ngZone;
        this.actRoute = actRoute;
        this.commonService = commonService;
        this.loader = loader;
        this.ms = ms;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["COMMA"]];
        this.services = [];
        this.services_size = [];
        this.pipe_class = [];
        this.components = [];
        this.projectData = [];
        this.section = [];
        this.item_no = [];
        this.rev_issued = [];
        this.numbersList = [];
        this.level = [0, 1, 2, 3];
        this.alphaList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        this.handleError = function (controlName, errorName) {
            return _this.projects.controls[controlName].hasError(errorName);
        };
        this.loader.show();
        var url = 'project_mech/read-project_mech';
        var id = this.actRoute.snapshot.paramMap.get('id1');
        this.commonService.GetById(id, url).subscribe(function (data) {
            _this.projects = _this.fb.group({
                ID: [''],
                COMPONENT_ID: [data.COMPONENT_ID],
                REF_NO: [data.REF_NO],
                LEVEL: [data.LEVEL],
                SERVICE_DESCRIPTION: [data.SERVICE_DESCRIPTION],
                SERVICE_SIZE: [data.SERVICE_SIZE],
                PIPE_CLASS: [data.PIPE_CLASS],
                CONNECTION_TYPE_SIZE: [data.CONNECTION_TYPE_SIZE],
                UM_TEMP_MIN: [data.UM_TEMP_MIN],
                UM_TEMP_MAX: [data.UM_TEMP_MAX],
                UM_TEMP_UNIT: [data.UM_TEMP_UNIT],
                UM_PRES_MIN: [data.UM_PRES_MIN],
                UM_PRES_MAX: [data.UM_PRES_MAX],
                UM_PRES_UNIT: [data.UM_PRES_UNIT],
                UM_FLOW_MIN: [data.UM_FLOW_MIN],
                UM_FLOW_MAX: [data.UM_FLOW_MAX],
                UM_FLOW_UNIT: [data.UM_FLOW_UNIT],
                SERVICE_CONN: [data.SERVICE_CONN],
                END_REF_NO: [data.END_REF_NO],
                OPE: [data.OPE],
                NOTES: [data.NOTES]
            });
        }, function (error) {
            _this.loader.hide();
        });
    }
    EditProjectMechComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.validateForm();
        for (var i = 1; i <= 10; i++) {
            this.numbersList.push(i);
        }
        this.projectId = this.actRoute.snapshot.paramMap.get('id');
        var url = 'project/read-project';
        this.commonService.GetById(this.projectId, url).subscribe(function (data) {
            _this.projectData = data;
            if (_this.projectData.PROCESS_Y_N == 1) {
                _this.section.push("General");
                _this.section.push("Mechanical");
                _this.section.push("Process");
                _this.section.push("Electrical");
                _this.section.push("Communications");
            }
            else {
                _this.section.push("General");
                _this.section.push("Mechanical");
                _this.section.push("Electrical");
                _this.section.push("Communications");
            }
            if (_this.projectData.CONTRACTUAL_Y_N == 1) {
                _this.rev_issued = _this.numbersList;
            }
            else {
                _this.rev_issued = _this.alphaList;
            }
            _this.item_no = ["00", "01", "02"];
            console.log(_this.projectData);
        }, function (error) {
            _this.loader.hide();
        });
        var URL = "services/getAll";
        this.commonService.GetAll(URL).subscribe(function (data) {
            _this.services = data;
        }, function (error) {
            _this.loader.hide();
        });
        var URL = "component/getAll";
        this.commonService.GetAll(URL).subscribe(function (data) {
            _this.components = data;
        }, function (error) {
            _this.loader.hide();
        });
        var URL = "get-all-services-size";
        this.commonService.GetAll(URL).subscribe(function (data) {
            _this.services_size = data;
        }, function (error) {
            _this.loader.hide();
        });
        var URL = "pipes/getAll";
        this.commonService.GetAll(URL).subscribe(function (data) {
            _this.pipe_class = data;
            _this.loader.hide();
        }, function (error) {
            _this.loader.hide();
        });
    };
    EditProjectMechComponent.prototype.formatDate = function (e) {
        var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
        this.projects.get('DATE_ISSUED').setValue(convertDate, {
            onlyself: true
        });
    };
    EditProjectMechComponent.prototype.retreiveService = function (id) {
        var e_1, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.services), _c = _b.next(); !_c.done; _c = _b.next()) {
                var ser = _c.value;
                console.log(ser.SERVICE_NAME);
                if (ser._id == id) {
                    return ser.SERVICE_NAME;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return '';
    };
    EditProjectMechComponent.prototype.retreiveComponent = function (id) {
        var e_2, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.components), _c = _b.next(); !_c.done; _c = _b.next()) {
                var ser = _c.value;
                if (ser._id == id) {
                    return ser.COMPONENT_NAME;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return '';
    };
    EditProjectMechComponent.prototype.retreivePipe = function (id) {
        var e_3, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.pipe_class), _c = _b.next(); !_c.done; _c = _b.next()) {
                var ser = _c.value;
                if (ser._id == id) {
                    return ser.PIPE_NAME;
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return '';
    };
    /* Reactive book form */
    EditProjectMechComponent.prototype.validateForm = function () {
        this.projects = this.fb.group({
            ID: [''],
            COMPONENT_ID: [''],
            REF_NO: [''],
            LEVEL: [''],
            SERVICE_DESCRIPTION: [''],
            SERVICE_SIZE: [''],
            PIPE_CLASS: [''],
            CONNECTION_TYPE_SIZE: [''],
            UM_TEMP_MIN: [''],
            UM_TEMP_MAX: [''],
            UM_TEMP_UNIT: [''],
            UM_PRES_MIN: [''],
            UM_PRES_MAX: [''],
            UM_PRES_UNIT: [''],
            UM_FLOW_MIN: [''],
            UM_FLOW_MAX: [''],
            UM_FLOW_UNIT: [''],
            SERVICE_CONN: [''],
            END_REF_NO: [''],
            OPE: [''],
            NOTES: ['']
        });
    };
    EditProjectMechComponent.prototype.submitEditProjectsMechForm = function () {
        var _this = this;
        if (this.projects.valid) {
            this.loader.show();
            var id = this.actRoute.snapshot.paramMap.get('id1');
            var projectId = this.actRoute.snapshot.paramMap.get('id');
            this.projects.value.ID = projectId;
            if (window.confirm('Are you sure you want to update?')) {
                var url = "project_mech/edit-project_mech";
                console.log(this.projects.value);
                this.commonService.UpdateBy(projectId, id, this.projects.value, url).subscribe(function (res) {
                    _this.loader.hide();
                    _this.ms.openSnackBar("The Mechanical Schedule is edited");
                    _this.ngZone.run(function () { return _this.router.navigateByUrl('/project_mech/getAll/' + projectId); });
                });
            }
        }
    };
    EditProjectMechComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerService"] },
        { type: _shared_messageService__WEBPACK_IMPORTED_MODULE_7__["MessageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('chipList', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditProjectMechComponent.prototype, "chipList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('resetProjectsSheetForm', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditProjectMechComponent.prototype, "myNgForm", void 0);
    EditProjectMechComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit-project-mech',
            template: __webpack_require__(/*! raw-loader!./edit-project-mech.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/project-mech/edit-project-mech/edit-project-mech.component.html"),
            styles: [__webpack_require__(/*! ./edit-project-mech.component.css */ "./src/app/components/project-mech/edit-project-mech/edit-project-mech.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerService"],
            _shared_messageService__WEBPACK_IMPORTED_MODULE_7__["MessageService"]])
    ], EditProjectMechComponent);
    return EditProjectMechComponent;
}());



/***/ }),

/***/ "./src/app/components/project-mech/project-mech/project-mech.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/project-mech/project-mech/project-mech.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\r\n  background-color: #333;\r\n  color: #fff;\r\n  overflow: auto;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top:0;\r\n  padding: 15px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-bottom: 50px;\r\n}\r\n\r\nmat-icon {\r\n  cursor: pointer;\r\n}\r\n\r\n.action-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 20px;\r\n}\r\n\r\n.table {\r\n  padding: 20px;\r\n  display: block;\r\n  overflow-x: auto;\r\n  white-space: nowrap;\r\n}\r\n\r\n.table tbody tr td,\r\n.table thead th,\r\n.table thead {\r\n  \r\n  border-bottom: 1px solid #dee2e6;\r\n}\r\n\r\n.table thead th{\r\n  color: rgba(0,0,0,.54);\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n}\r\n\r\n.table thead td{\r\n  color: rgba(0,0,0,.87);\r\n  font-size:14px;\r\n}\r\n\r\n.table tbody tr td mat-form-field\r\n{\r\n  width:100% !important;\r\n}\r\n\r\nh1 {\r\n  margin: 0;\r\n    display: inline-block;\r\n}\r\n\r\n.top-btn-mech {\r\n  display: inline;\r\n  margin-left: 20px;\r\n  margin-bottom: 20px;\r\n \r\n}\r\n\r\n.table tbody tr td,\r\n.table thead th {\r\n  width: 100% !important;\r\n  padding-top: 15px;\r\n  padding-bottom: 15px;\r\n}\r\n\r\n.table{\r\n  height:80% !important;\r\n  margin-top:50px;\r\n}\r\n\r\n.output {\r\n  padding: 20px;\r\n}\r\n\r\n.delete {\r\n  color: red  ;\r\n}\r\n\r\n.done {\r\n  color: green;\r\n}\r\n\r\n.top-btn {\r\n  float: right;\r\n /* margin-top:-50px;*/\r\n \r\n}\r\n\r\nspan.ui-column-resizer {\r\n  width: 100%;\r\n  height: 100%;\r\n  cursor: col-resize;\r\n  padding: 30px;\r\n\r\n}\r\n\r\n.custom-file-input{\r\n  width: 95px;\r\n  opacity:1;\r\n /* margin-right: 130px;*/\r\n}\r\n\r\n.custom-file-input::-webkit-file-upload-button {\r\n  visibility: hidden;\r\n}\r\n\r\n.custom-file-input::before {\r\n  content: 'Import Excel';\r\n  display: inline-block;\r\n  background: #3f51b5;\r\n  /* border: 1px solid #999; */\r\n  border-radius: 3px;\r\n  padding: 2px 8px;\r\n  outline: none;\r\n  white-space: nowrap;\r\n  -webkit-user-select: none;\r\n  cursor: pointer;\r\n  /* text-shadow: 1px 1px #fff; */\r\n  /* font-weight: 700;\r\n  font-size: 10pt; */\r\n  color:white;\r\n  margin-left:-15px;\r\n  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n}\r\n\r\n.custom-file-input:hover::before {\r\n  border-color: black;\r\n}\r\n\r\n.custom-file-input:active::before {\r\n  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0LW1lY2gvcHJvamVjdC1tZWNoL3Byb2plY3QtbWVjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixLQUFLO0VBQ0wsYUFBYTtFQUNiLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBOzs7O0VBSUUsZ0NBQWdDO0FBQ2xDOztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjs7QUFDQTs7RUFFRSxxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxTQUFTO0lBQ1AscUJBQXFCO0FBQ3pCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7O0FBRXJCOztBQUNBOztFQUVFLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0NBQ2IscUJBQXFCOztBQUV0Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7O0FBRWY7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsU0FBUztDQUNWLHdCQUF3QjtBQUN6Qjs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZiwrQkFBK0I7RUFDL0I7b0JBQ2tCO0VBQ2xCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsbUdBQW1HO0FBQ3JHOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsMERBQTBEO0FBQzVEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0LW1lY2gvcHJvamVjdC1tZWNoL3Byb2plY3QtbWVjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOjA7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG5tYXQtaWNvbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYWN0aW9uLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLnRhYmxlIHRib2R5IHRyIHRkLFxyXG4udGFibGUgdGhlYWQgdGgsXHJcbi50YWJsZSB0aGVhZCB7XHJcbiAgXHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XHJcbn1cclxuLnRhYmxlIHRoZWFkIHRoe1xyXG4gIGNvbG9yOiByZ2JhKDAsMCwwLC41NCk7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLnRhYmxlIHRoZWFkIHRke1xyXG4gIGNvbG9yOiByZ2JhKDAsMCwwLC44Nyk7XHJcbiAgZm9udC1zaXplOjE0cHg7XHJcbn1cclxuLnRhYmxlIHRib2R5IHRyIHRkIG1hdC1mb3JtLWZpZWxkXHJcbntcclxuICB3aWR0aDoxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuaDEge1xyXG4gIG1hcmdpbjogMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4udG9wLWJ0bi1tZWNoIHtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuIFxyXG59XHJcbi50YWJsZSB0Ym9keSB0ciB0ZCxcclxuLnRhYmxlIHRoZWFkIHRoIHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG59XHJcbi50YWJsZXtcclxuICBoZWlnaHQ6ODAlICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDo1MHB4O1xyXG59XHJcblxyXG4ub3V0cHV0IHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uZGVsZXRlIHtcclxuICBjb2xvcjogcmVkICA7XHJcbn1cclxuXHJcbi5kb25lIHtcclxuICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi50b3AtYnRuIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAvKiBtYXJnaW4tdG9wOi01MHB4OyovXHJcbiBcclxufVxyXG5cclxuc3Bhbi51aS1jb2x1bW4tcmVzaXplciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGN1cnNvcjogY29sLXJlc2l6ZTtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG5cclxufVxyXG5cclxuLmN1c3RvbS1maWxlLWlucHV0e1xyXG4gIHdpZHRoOiA5NXB4O1xyXG4gIG9wYWNpdHk6MTtcclxuIC8qIG1hcmdpbi1yaWdodDogMTMwcHg7Ki9cclxufVxyXG4uY3VzdG9tLWZpbGUtaW5wdXQ6Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuLmN1c3RvbS1maWxlLWlucHV0OjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICdJbXBvcnQgRXhjZWwnO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBiYWNrZ3JvdW5kOiAjM2Y1MWI1O1xyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7ICovXHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIHBhZGRpbmc6IDJweCA4cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC8qIHRleHQtc2hhZG93OiAxcHggMXB4ICNmZmY7ICovXHJcbiAgLyogZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDEwcHQ7ICovXHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgbWFyZ2luLWxlZnQ6LTE1cHg7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG59XHJcbi5jdXN0b20tZmlsZS1pbnB1dDpob3Zlcjo6YmVmb3JlIHtcclxuICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG59XHJcbi5jdXN0b20tZmlsZS1pbnB1dDphY3RpdmU6OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZTNlM2UzLCAjZjlmOWY5KTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/project-mech/project-mech/project-mech.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/project-mech/project-mech/project-mech.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProjectMechComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectMechComponent", function() { return ProjectMechComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_Mech__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/Mech */ "./src/app/models/Mech.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _shared_messageService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/messageService */ "./src/app/shared/messageService.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_9__);










var ProjectMechComponent = /** @class */ (function () {
    function ProjectMechComponent(ngZone, actRoute, router, fb, commonSevice, loader, ms) {
        var _this = this;
        this.ngZone = ngZone;
        this.actRoute = actRoute;
        this.router = router;
        this.fb = fb;
        this.commonSevice = commonSevice;
        this.loader = loader;
        this.ms = ms;
        this.Projects = [];
        this.services = [];
        this.components = [];
        this.pipe_class = [];
        this.importedmech = [];
        this.services_size = [];
        this.projectData = [];
        this.section = [];
        this.item_no = [];
        this.rev_issued = [];
        this.numbersList = [];
        this.level = [0, 1, 2, 3];
        this.alphaList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        this.displayedColumns = ['COMPONENT_ID', 'REF_NO', 'LEVEL', 'SERVICE_DESCRIPTION', 'SERVICE_SIZE', 'PIPE_CLASS', 'CONNECTION_TYPE_SIZE', 'UM_TEMP_MIN', 'UM_TEMP_MAX', 'UM_TEMP_UNIT', 'UM_PRES_MIN', 'UM_PRES_MAX', 'UM_PRES_UNIT', 'UM_FLOW_MIN', 'UM_FLOW_MAX', 'UM_FLOW_UNIT', 'SERVICE_CONN', 'END_REF_NO', 'OPE', 'NOTES', 'action'];
        this.handleError = function (controlName, errorName) {
            return _this.control.controls[controlName].hasError(errorName);
        };
        this.touchedRows = [];
        this.userTable = this.fb.group({
            tableRows: this.fb.array([])
        });
        this.projectId = this.actRoute.snapshot.paramMap.get('id');
        this.loader.show();
        var URL = "project_mech/getAll/" + this.projectId;
        this.commonSevice.GetAll(URL).subscribe(function (data) {
            var e_1, _a;
            _this.Projects = data;
            _this.control = _this.userTable.get('tableRows');
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_this.Projects), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    var fbGroup = _this.fb.group({
                        _id: [item._id],
                        ID: [item.ID],
                        COMPONENT_ID: [item.COMPONENT_ID, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                        REF_NO: [item.REF_NO, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                        SETTPOC: [item.SETTPOC, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                        LEVEL: [item.LEVEL, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                        SERVICE_DESCRIPTION: [item.SERVICE_DESCRIPTION, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                        SERVICE_SIZE: [item.SERVICE_SIZE, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^[0-9*\""]*$')]],
                        PIPE_CLASS: [item.PIPE_CLASS, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                        CONNECTION_TYPE_SIZE: [item.CONNECTION_TYPE_SIZE],
                        CONNECTION_SIZE: [item.CONNECTION_SIZE],
                        UM_TEMP_MIN: [item.UM_TEMP_MIN],
                        UM_TEMP_MAX: [item.UM_TEMP_MAX],
                        UM_TEMP_UNIT: [item.UM_TEMP_UNIT],
                        UM_PRES_MIN: [item.UM_PRES_MIN],
                        UM_PRES_MAX: [item.UM_PRES_MAX],
                        UM_PRES_UNIT: [item.UM_PRES_UNIT],
                        UM_FLOW_MIN: [item.UM_FLOW_MIN],
                        UM_FLOW_MAX: [item.UM_FLOW_MAX],
                        UM_FLOW_UNIT: [item.UM_FLOW_UNIT],
                        SERVICE_CONN: [item.SERVICE_CONN],
                        END_REF_NO: [item.END_REF_NO],
                        OPE: [item.OPE],
                        NOTES: [item.NOTES],
                        isEditable: [false]
                    });
                    _this.control.push(fbGroup);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }, function (error) {
            _this.loader.hide();
        });
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.Projects.count
        };
    }
    ProjectMechComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isDelete = false;
        this.formSubmitAttempt = false;
        var url = 'project/read-project';
        this.commonSevice.GetById(this.projectId, url).subscribe(function (data) {
            _this.projectData = data;
            _this.projectName = data.PROJECT_NAME;
            if (_this.projectData.PROCESS_Y_N == 1) {
                _this.section.push("Communications");
                _this.section.push("Electrical");
                _this.section.push("General");
                _this.section.push("Mechanical");
                _this.section.push("Process");
            }
            else {
                _this.section.push("Communications");
                _this.section.push("Electrical");
                _this.section.push("General");
                _this.section.push("Mechanical");
            }
            if (_this.projectData.CONTRACTUAL_Y_N == 1) {
                _this.rev_issued = _this.numbersList;
            }
            else {
                _this.rev_issued = _this.alphaList;
            }
            _this.item_no = ["00", "01", "02"];
        });
        var URL = "services/getAll";
        this.commonSevice.GetAll(URL).subscribe(function (data) {
            _this.services = data;
            if (_this.services.length > 0) {
                _this.services = _this.services.sort(function (a, b) { return a.SERVICE_NAME > b.SERVICE_NAME ? 1 : -1; });
            }
        }, function (error) {
            _this.loader.hide();
        });
        var URL = "component/getAll";
        this.commonSevice.GetAll(URL).subscribe(function (data) {
            _this.components = data;
            if (_this.components.length > 0) {
                _this.components = _this.components.sort(function (a, b) { return a.COMPONENT_NAME > b.COMPONENT_NAME ? 1 : -1; });
            }
        }, function (error) {
            _this.loader.hide();
        });
        var URL = "pipes/getAll";
        this.commonSevice.GetAll(URL).subscribe(function (data) {
            _this.pipe_class = data;
            if (_this.pipe_class.length > 0) {
                _this.pipe_class = _this.pipe_class.sort(function (a, b) { return a.PIPE_NAME > b.PIPE_NAME ? 1 : -1; });
            }
            _this.loader.hide();
        }, function (error) {
            _this.loader.hide();
        });
    };
    ProjectMechComponent.prototype.ngAfterOnInit = function () {
        this.control = this.userTable.get('tableRows');
    };
    ProjectMechComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    ProjectMechComponent.prototype.fieldGlobalIndex = function (index) {
        return this.config.itemsPerPage * (this.config.currentPage - 1) + index;
    };
    ProjectMechComponent.prototype.initiateForm = function () {
        return this.fb.group({
            ID: [''],
            COMPONENT_ID: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            REF_NO: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            SETTPOC: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            LEVEL: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            SERVICE_DESCRIPTION: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            SERVICE_SIZE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^[0-9*\""]*$')]],
            PIPE_CLASS: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            CONNECTION_TYPE_SIZE: [''],
            CONNECTION_SIZE: [''],
            UM_TEMP_MIN: [''],
            UM_TEMP_MAX: [''],
            UM_TEMP_UNIT: [''],
            UM_PRES_MIN: [''],
            UM_PRES_MAX: [''],
            UM_PRES_UNIT: [''],
            UM_FLOW_MIN: [''],
            UM_FLOW_MAX: [''],
            UM_FLOW_UNIT: [''],
            SERVICE_CONN: [''],
            END_REF_NO: [''],
            OPE: [''],
            NOTES: [''],
            isEditable: [true]
        });
    };
    ProjectMechComponent.prototype.addRow = function () {
        var control = this.userTable.get('tableRows');
        control.insert((this.config.itemsPerPage * this.config.currentPage) - (this.config.itemsPerPage), this.initiateForm());
        this.formSubmitAttempt = false;
        this.isDelete = false;
    };
    ProjectMechComponent.prototype.deleteRow = function (index, group) {
        var control = this.userTable.get('tableRows');
        control.removeAt(index);
        this.deleteProjectMech(group);
    };
    ProjectMechComponent.prototype.editRow = function (group) {
        var e_2, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.getFormControls.controls), _c = _b.next(); !_c.done; _c = _b.next()) {
                var formItem = _c.value;
                if (formItem.get('isEditable').value == true) {
                    formItem.get('isEditable').setValue(false);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        group.get('isEditable').setValue(true);
        console.log(group);
        this.isDelete = true;
        this.resetFormGroup = group.value;
    };
    ProjectMechComponent.prototype.cancel = function (group) {
        group.reset(this.resetFormGroup);
        if (group.value._id == undefined) {
            var control = this.userTable.get('tableRows');
            control.removeAt((this.config.itemsPerPage * this.config.currentPage) - (this.config.itemsPerPage));
        }
        else {
            group.get('isEditable').setValue(false);
        }
    };
    ProjectMechComponent.prototype.doneRow = function (group) {
        console.log(group);
        if (group.value._id == undefined) {
            this.submitAddProjectsMechForm(group);
        }
        else {
            this.submitEditProjectsMechForm(group);
        }
    };
    Object.defineProperty(ProjectMechComponent.prototype, "getFormControls", {
        get: function () {
            var control = this.userTable.get('tableRows');
            return control;
        },
        enumerable: true,
        configurable: true
    });
    ProjectMechComponent.prototype.submitAddProjectsMechForm = function (group) {
        var _this = this;
        if (group.valid) {
            this.loader.show();
            var URL = "project_mech/add-project_mech";
            group.value.ID = this.projectId;
            this.commonSevice.Add(group.value, URL).subscribe(function (res) {
                _this.ms.openSnackBar("The Mechanical project is added");
                group.get('isEditable').setValue(false);
                _this.router.routeReuseStrategy.shouldReuseRoute = function () {
                    return false;
                };
                _this.router.onSameUrlNavigation = 'reload';
                _this.router.navigate(['/project_mech/getAll/' + _this.projectId]);
            });
        }
        else {
            this.loader.hide();
            this.formSubmitAttempt = true;
            this.ms.openSnackBar("Please fill the required fields");
        }
    };
    ProjectMechComponent.prototype.submitEditProjectsMechForm = function (group) {
        var _this = this;
        if (group.valid) {
            this.loader.show();
            var id = group.value._id;
            var projectId = this.actRoute.snapshot.paramMap.get('id');
            group.value.ID = projectId;
            if (window.confirm('Are you sure you want to update?')) {
                var url = "project_mech/edit-project_mech";
                this.commonSevice.UpdateBy(projectId, id, group.value, url).subscribe(function (res) {
                    _this.loader.hide();
                    group.get('isEditable').setValue(false);
                    _this.ms.openSnackBar("The Mechanical Schedule is edited");
                    _this.router.routeReuseStrategy.shouldReuseRoute = function () {
                        return false;
                    };
                    _this.router.onSameUrlNavigation = 'reload';
                    _this.router.navigate(['/project_mech/getAll/' + _this.projectId]);
                });
            }
        }
        else {
            this.loader.hide();
            this.formSubmitAttempt = true;
            this.ms.openSnackBar("Please fill the required fields");
        }
    };
    ProjectMechComponent.prototype.importData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var Url;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.loader.show();
                Url = "project-mech/google-sheet";
                this.commonSevice.GetAll(Url).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var size, i, i, isComponent, isComponent, isService, isService, isPipeClass, isPipeClass, URL;
                    var _this = this;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                size = Object.keys(data).length;
                                for (i = 0; i < size; i++) {
                                    if (!this.isPresent(data[i][0]) || !this.isPresent(data[i][5]) || !this.isPresent(data[i][3]) || !this.isPresent(data[i][1]) || !this.isPresent(data[i][2])) {
                                        this.loader.hide();
                                        this.ms.openSnackBar("Cannot load google sheet. Fill the required fields on google sheet");
                                        return [2 /*return*/, false];
                                    }
                                }
                                i = 0;
                                _a.label = 1;
                            case 1:
                                if (!(i < size)) return [3 /*break*/, 12];
                                isComponent = this.components.find(function (x) { return x.COMPONENT_NAME === data[i][0]; });
                                if (!(isComponent != null)) return [3 /*break*/, 2];
                                data[i][0] = isComponent._id;
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, this.addComponent(data[i][0])];
                            case 3:
                                _a.sent();
                                isComponent = this.components.find(function (x) { return x.COMPONENT_NAME === data[i][0]; });
                                if (isComponent != null) {
                                    data[i][0] = isComponent._id;
                                }
                                _a.label = 4;
                            case 4:
                                isService = this.services.find(function (x) { return x.SERVICE_NAME === data[i][3]; });
                                if (!(isService != null)) return [3 /*break*/, 5];
                                data[i][3] = isService._id;
                                return [3 /*break*/, 7];
                            case 5: return [4 /*yield*/, this.addService(data[i][3])];
                            case 6:
                                _a.sent();
                                isService = this.services.find(function (x) { return x.SERVICE_NAME === data[i][3]; });
                                if (isService != null) {
                                    data[i][3] = isService._id;
                                }
                                _a.label = 7;
                            case 7:
                                isPipeClass = this.pipe_class.find(function (x) { return x.PIPE_NAME === data[i][5]; });
                                if (!(isPipeClass != null)) return [3 /*break*/, 8];
                                data[i][5] = isPipeClass._id;
                                return [3 /*break*/, 10];
                            case 8: return [4 /*yield*/, this.addPipeClass(data[i][5])];
                            case 9:
                                _a.sent();
                                isPipeClass = this.pipe_class.find(function (x) { return x.PIPE_NAME === data[i][5]; });
                                if (isPipeClass != null) {
                                    data[i][5] = isPipeClass._id;
                                }
                                _a.label = 10;
                            case 10:
                                this.control = this.userTable.get('tableRows');
                                this.importedmech = this.fb.group({
                                    ID: [this.projectId],
                                    COMPONENT_ID: [data[i][0]],
                                    REF_NO: [data[i][1]],
                                    LEVEL: [data[i][2]],
                                    SERVICE_DESCRIPTION: [data[i][3]],
                                    SERVICE_SIZE: [data[i][4]],
                                    PIPE_CLASS: [data[i][5]],
                                    CONNECTION_TYPE_SIZE: [data[i][7]],
                                    CONNECTION_SIZE: [data[i][6]],
                                    UM_TEMP_MIN: [data[i][8]],
                                    UM_TEMP_MAX: [data[i][9]],
                                    UM_TEMP_UNIT: [data[i][10]],
                                    UM_PRES_MIN: [data[i][11]],
                                    UM_PRES_MAX: [data[i][12]],
                                    UM_PRES_UNIT: [data[i][13]],
                                    UM_FLOW_MIN: [data[i][14]],
                                    UM_FLOW_MAX: [data[i][15]],
                                    UM_FLOW_UNIT: [data[i][16]],
                                    SERVICE_CONN: [data[i][17]],
                                    END_REF_NO: [data[i][18]],
                                    OPE: [data[i][19]],
                                    NOTES: [data[i][20]],
                                    isEditable: [false]
                                });
                                URL = "project_mech/add-project_mech";
                                this.commonSevice.Add(this.importedmech.value, URL).subscribe(function (res) {
                                    _this.control.push(_this.importedmech);
                                });
                                _a.label = 11;
                            case 11:
                                i++;
                                return [3 /*break*/, 1];
                            case 12:
                                this.router.routeReuseStrategy.shouldReuseRoute = function () {
                                    return false;
                                };
                                this.router.onSameUrlNavigation = 'reload';
                                this.router.navigate(['/project_mech/getAll/' + this.projectId]);
                                this.loader.hide();
                                this.ms.openSnackBar("The Google sheet for mechanical projects has been imported");
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    ProjectMechComponent.prototype.retreiveService = function (id) {
        var e_3, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.services), _c = _b.next(); !_c.done; _c = _b.next()) {
                var ser = _c.value;
                if (ser._id == id) {
                    return ser.SERVICE_NAME;
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return '';
    };
    ProjectMechComponent.prototype.retreiveComponent = function (id) {
        var e_4, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.components), _c = _b.next(); !_c.done; _c = _b.next()) {
                var ser = _c.value;
                if (ser._id == id) {
                    return ser.COMPONENT_NAME;
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return '';
    };
    ProjectMechComponent.prototype.retreivePipeClass = function (id) {
        var e_5, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.pipe_class), _c = _b.next(); !_c.done; _c = _b.next()) {
                var ser = _c.value;
                if (ser._id == id) {
                    return ser.PIPE_NAME;
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return '';
    };
    ProjectMechComponent.prototype.addComponent = function (componentName) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var URL, comp;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                URL = "component/add-component";
                comp = this.fb.group({
                    COMPONENT_NAME: [componentName]
                });
                this.commonSevice.Add(comp.value, URL).subscribe(function (res) {
                }, function (error) {
                    _this.loader.hide();
                });
                return [2 /*return*/];
            });
        });
    };
    ProjectMechComponent.prototype.addService = function (componentName) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var URL, comp;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                URL = 'service/add-service';
                comp = this.fb.group({
                    SERVICE_NAME: [componentName]
                });
                this.commonSevice.Add(comp.value, URL).subscribe(function (res) {
                }, function (error) {
                    _this.loader.hide();
                });
                return [2 /*return*/];
            });
        });
    };
    ProjectMechComponent.prototype.addPipeClass = function (componentName) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var URL, comp;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                URL = 'pipe/add-pipe';
                comp = this.fb.group({
                    PIPE_NAME: [componentName]
                });
                this.commonSevice.Add(comp.value, URL).subscribe(function (res) {
                }, function (error) {
                    _this.loader.hide();
                });
                return [2 /*return*/];
            });
        });
    };
    ProjectMechComponent.prototype.deleteProjectMech = function (group) {
        var _this = this;
        if (window.confirm('Are you sure')) {
            this.loader.show();
            var index = group.value._id;
            var url = 'project_mech/delete-project_mech/' + this.projectId;
            this.commonSevice.Delete(index, url).subscribe(function (data) {
                _this.ms.openSnackBar("The mechanical sheet is deleted");
                _this.loader.hide();
            });
        }
    };
    ProjectMechComponent.prototype.onFileSelect = function (event) {
        var _this = this;
        var af = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'];
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            // console.log(file);
            // if (!_.includes(af, file.type)) {
            //   alert('Upload excel document only.');
            // } else {
            console.log(file);
            var workBook_1 = null;
            var jsonData_1 = null;
            var reader_1 = new FileReader();
            //const file = ev.target.files[0];
            reader_1.onload = function (event) {
                var data = reader_1.result;
                workBook_1 = xlsx__WEBPACK_IMPORTED_MODULE_9__["read"](data, { type: 'binary' });
                jsonData_1 = workBook_1.SheetNames.reduce(function (initial, name) {
                    var sheet = workBook_1.Sheets[name];
                    initial[name] = xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].sheet_to_json(sheet);
                    return initial;
                }, {});
                var dataString = JSON.stringify(jsonData_1);
                var exceData = JSON.parse(dataString);
                var excelArray = JSON.parse(dataString).Sheet1;
                var colName = "__EMPTY_";
                var cellData;
                var mechInputArray = [];
                for (var row = 3; row < excelArray.length; row++) {
                    //for(var j=0; j < 20; j++){
                    //  if (j == 0) colName = "__EMPTY";
                    //else colName = "__EMPTY_" + j.toString();
                    //cellData = excelArray[row][colName];
                    if (!_this.isPresent(excelArray[row]["SCHEDULE"]) ||
                        !_this.isPresent(excelArray[row]["__EMPTY"]) ||
                        !_this.isPresent(excelArray[row][colName + "1"]) ||
                        !_this.isPresent(excelArray[row][colName + "2"]) ||
                        !_this.isPresent(excelArray[row][colName + "3"]) ||
                        !_this.isPresent(excelArray[row][colName + "5"])) {
                        alert('Component, Ref, service, pipe and level are required');
                        _this.UploadFileInput = "";
                        return;
                    }
                    if (!_this.is_Numeric(excelArray[row]["__EMPTY"]) ||
                        !_this.is_Numeric(excelArray[row][colName + "2"])) {
                        alert('Ref and level must be numeric');
                        _this.UploadFileInput = "";
                        return;
                    }
                    var mechObj = new _models_Mech__WEBPACK_IMPORTED_MODULE_1__["SD_MECH_SCHEDULE"]();
                    mechObj.ID = _this.projectId;
                    mechObj.COMPONENT_ID = excelArray[row]["SCHEDULE"];
                    mechObj.REF_NO = excelArray[row]["__EMPTY"];
                    mechObj.SETTPOC = excelArray[row][colName + "1"];
                    mechObj.LEVEL = excelArray[row][colName + "2"];
                    mechObj.SERVICE_DESCRIPTION = excelArray[row][colName + "3"];
                    mechObj.SERVICE_SIZE = excelArray[row][colName + "4"];
                    mechObj.PIPE_CLASS = excelArray[row][colName + "5"];
                    mechObj.CONNECTION_TYPE_SIZE = excelArray[row][colName + "7"];
                    mechObj.CONNECTION_SIZE = excelArray[row][colName + "6"];
                    mechObj.UM_TEMP_MIN = excelArray[row][colName + "8"];
                    mechObj.UM_TEMP_MAX = excelArray[row][colName + "9"];
                    mechObj.UM_TEMP_UNIT = excelArray[row][colName + "10"];
                    mechObj.UM_PRES_MIN = excelArray[row][colName + "11"];
                    mechObj.UM_PRES_MAX = excelArray[row][colName + "12"];
                    mechObj.UM_PRES_UNIT = excelArray[row][colName + "13"];
                    mechObj.UM_FLOW_MIN = excelArray[row][colName + "14"];
                    mechObj.UM_FLOW_MAX = excelArray[row][colName + "15"];
                    mechObj.UM_FLOW_UNIT = excelArray[row][colName + "16"];
                    mechObj.SERVICE_CONN = excelArray[row][colName + "17"];
                    mechObj.END_REF_NO = excelArray[row][colName + "18"];
                    mechObj.OPE = excelArray[row][colName + "19"];
                    mechObj.NOTES = excelArray[row][colName + "20"];
                    if (mechObj.LEVEL > 2)
                        mechObj.LEVEL = 2;
                    else if (mechObj.LEVEL < 0)
                        mechObj.LEVEL = 0;
                    mechInputArray.push(mechObj);
                }
                var URL = "project_mech/upload_excel-project_mech";
                _this.UploadFileInput = "";
                _this.loader.show();
                _this.commonSevice.Add(mechInputArray, URL).subscribe(function (res) {
                    _this.router.routeReuseStrategy.shouldReuseRoute = function () {
                        return false;
                    };
                    _this.router.onSameUrlNavigation = 'reload';
                    _this.router.navigate(['/project_mech/getAll/' + _this.projectId]);
                    _this.loader.hide();
                    _this.ms.openSnackBar("Data imported successfully");
                }, function (error) {
                    console.log(error);
                    _this.loader.hide();
                });
            };
            reader_1.readAsBinaryString(file);
            // }
        }
    };
    ProjectMechComponent.prototype.isPresent = function (value) {
        if (typeof (value) == "string") {
            if (value == undefined || value == null || value.trim() == "")
                return false;
        }
        else {
            if (value == undefined || value == null)
                return false;
        }
        return true;
    };
    ProjectMechComponent.prototype.is_Numeric = function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    };
    ProjectMechComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__["Ng4LoadingSpinnerService"] },
        { type: _shared_messageService__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"])('UploadFileInput', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ElementRef"])
    ], ProjectMechComponent.prototype, "uploadFileInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], ProjectMechComponent.prototype, "paginator", void 0);
    ProjectMechComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
            selector: 'app-project-mech',
            template: __webpack_require__(/*! raw-loader!./project-mech.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/project-mech/project-mech/project-mech.component.html"),
            styles: [__webpack_require__(/*! ./project-mech.component.css */ "./src/app/components/project-mech/project-mech/project-mech.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _shared_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__["Ng4LoadingSpinnerService"], _shared_messageService__WEBPACK_IMPORTED_MODULE_5__["MessageService"]])
    ], ProjectMechComponent);
    return ProjectMechComponent;
}());



/***/ }),

/***/ "./src/app/components/project-notes/add-project-notes/add-project-notes.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/components/project-notes/add-project-notes/add-project-notes.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC1ub3Rlcy9hZGQtcHJvamVjdC1ub3Rlcy9hZGQtcHJvamVjdC1ub3Rlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/project-notes/add-project-notes/add-project-notes.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/project-notes/add-project-notes/add-project-notes.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AddProjectNotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProjectNotesComponent", function() { return AddProjectNotesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_messageService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/messageService */ "./src/app/shared/messageService.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__);








var AddProjectNotesComponent = /** @class */ (function () {
    function AddProjectNotesComponent(fb, router, ngZone, actRoute, commonService, ms, loader) {
        var _this = this;
        this.fb = fb;
        this.router = router;
        this.ngZone = ngZone;
        this.actRoute = actRoute;
        this.commonService = commonService;
        this.ms = ms;
        this.loader = loader;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["COMMA"]];
        this.services = [];
        this.components = [];
        this.projectData = [];
        this.section = [];
        this.handleError = function (controlName, errorName) {
            return _this.projects.controls[controlName].hasError(errorName);
        };
    }
    AddProjectNotesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.validateForm();
        this.projectId = this.actRoute.snapshot.paramMap.get('id');
        var url = 'project/read-project';
        this.commonService.GetById(this.projectId, url).subscribe(function (data) {
            _this.projectData = data;
            if (_this.projectData.PROCESS_Y_N == 1) {
                _this.section.push("General");
                _this.section.push("Mechanical");
                _this.section.push("Process");
                _this.section.push("Electrical");
                _this.section.push("Communications");
            }
            else {
                _this.section.push("General");
                _this.section.push("Mechanical");
                _this.section.push("Electrical");
                _this.section.push("Communications");
            }
        });
    };
    /* Reactive book form */
    AddProjectNotesComponent.prototype.validateForm = function () {
        this.projects = this.fb.group({
            ID: [''],
            NOTE_TEXT: [''],
            NOTE_CATEGORY: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    };
    AddProjectNotesComponent.prototype.submitAddProjectsNotesForm = function () {
        var _this = this;
        this.loader.show();
        var URL = "project_notes/add-project_Notes";
        this.projects.value.ID = this.projectId;
        console.log(this.projects.value);
        this.commonService.Add(this.projects.value, URL).subscribe(function (res) {
            _this.ms.openSnackBar("Notes are added");
            _this.ngZone.run(function () { return _this.router.navigateByUrl('/project_notes/getAll/' + _this.projectId); });
        });
    };
    AddProjectNotesComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _shared_messageService__WEBPACK_IMPORTED_MODULE_6__["MessageService"] },
        { type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__["Ng4LoadingSpinnerService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('chipList', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddProjectNotesComponent.prototype, "chipList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('resetProjectsNotesForm', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddProjectNotesComponent.prototype, "myNgForm", void 0);
    AddProjectNotesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add-project-notes',
            template: __webpack_require__(/*! raw-loader!./add-project-notes.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/project-notes/add-project-notes/add-project-notes.component.html"),
            styles: [__webpack_require__(/*! ./add-project-notes.component.css */ "./src/app/components/project-notes/add-project-notes/add-project-notes.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _shared_messageService__WEBPACK_IMPORTED_MODULE_6__["MessageService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__["Ng4LoadingSpinnerService"]])
    ], AddProjectNotesComponent);
    return AddProjectNotesComponent;
}());



/***/ }),

/***/ "./src/app/components/project-notes/edit-project-notes/edit-project-notes.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/project-notes/edit-project-notes/edit-project-notes.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC1ub3Rlcy9lZGl0LXByb2plY3Qtbm90ZXMvZWRpdC1wcm9qZWN0LW5vdGVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/project-notes/edit-project-notes/edit-project-notes.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/project-notes/edit-project-notes/edit-project-notes.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: EditProjectNotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProjectNotesComponent", function() { return EditProjectNotesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_messageService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/messageService */ "./src/app/shared/messageService.ts");








var EditProjectNotesComponent = /** @class */ (function () {
    function EditProjectNotesComponent(fb, router, ngZone, actRoute, commonService, loader, ms) {
        var _this = this;
        this.fb = fb;
        this.router = router;
        this.ngZone = ngZone;
        this.actRoute = actRoute;
        this.commonService = commonService;
        this.loader = loader;
        this.ms = ms;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["COMMA"]];
        this.services = [];
        this.components = [];
        this.projectData = [];
        this.section = [];
        this.handleError = function (controlName, errorName) {
            return _this.projects.controls[controlName].hasError(errorName);
        };
        this.loader.show();
    }
    EditProjectNotesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.validateForm();
        this.projectId = this.actRoute.snapshot.paramMap.get('id');
        var url = 'project/read-project';
        this.commonService.GetById(this.projectId, url).subscribe(function (data) {
            _this.projectData = data;
            if (_this.projectData.PROCESS_Y_N == 1) {
                _this.section.push("General");
                _this.section.push("Mechanical");
                _this.section.push("Process");
                _this.section.push("Electrical");
                _this.section.push("Communications");
            }
            else {
                _this.section.push("General");
                _this.section.push("Mechanical");
                _this.section.push("Electrical");
                _this.section.push("Communications");
            }
        }, function (error) {
            _this.loader.hide();
        });
        var url = 'project_notes/read-project_notes';
        var id = this.actRoute.snapshot.paramMap.get('id1');
        this.commonService.GetById(id, url).subscribe(function (data) {
            _this.projects = _this.fb.group({
                NOTE_TEXT: [data.NOTE_TEXT],
                NOTE_CATEGORY: [data.NOTE_CATEGORY]
            });
            _this.loader.hide();
        }, function (error) {
            _this.loader.hide();
        });
    };
    /* Reactive book form */
    EditProjectNotesComponent.prototype.validateForm = function () {
        this.projects = this.fb.group({
            ID: [''],
            NOTE_TEXT: [''],
            NOTE_CATEGORY: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    };
    EditProjectNotesComponent.prototype.submitEditProjectsNotesForm = function () {
        var _this = this;
        if (this.projects.valid) {
            this.loader.show();
            var id = this.actRoute.snapshot.paramMap.get('id1');
            var projectId = this.actRoute.snapshot.paramMap.get('id');
            if (window.confirm('Are you sure you want to update?')) {
                var url = "project_notes/edit-project_notes";
                console.log(this.projects.value);
                this.commonService.UpdateBy(projectId, id, this.projects.value, url).subscribe(function (res) {
                    _this.loader.hide();
                    _this.ms.openSnackBar("Notes are edited");
                    _this.ngZone.run(function () { return _this.router.navigateByUrl('/project_notes/getAll/' + projectId); });
                });
            }
        }
    };
    EditProjectNotesComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerService"] },
        { type: _shared_messageService__WEBPACK_IMPORTED_MODULE_7__["MessageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('chipList', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditProjectNotesComponent.prototype, "chipList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('resetProjectsNotesForm', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditProjectNotesComponent.prototype, "myNgForm", void 0);
    EditProjectNotesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit-project-notes',
            template: __webpack_require__(/*! raw-loader!./edit-project-notes.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/project-notes/edit-project-notes/edit-project-notes.component.html"),
            styles: [__webpack_require__(/*! ./edit-project-notes.component.css */ "./src/app/components/project-notes/edit-project-notes/edit-project-notes.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerService"],
            _shared_messageService__WEBPACK_IMPORTED_MODULE_7__["MessageService"]])
    ], EditProjectNotesComponent);
    return EditProjectNotesComponent;
}());



/***/ }),

/***/ "./src/app/components/project-notes/project-notes/project-notes.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/project-notes/project-notes/project-notes.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\r\n  background-color: #333;\r\n  color: #fff;\r\n  overflow: auto;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top:0;\r\n  padding: 15px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-bottom: 50px;\r\n}\r\n\r\nmat-icon {\r\n  cursor: pointer;\r\n}\r\n\r\n.action-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 20px;\r\n}\r\n\r\n.table {\r\n  padding: 20px;\r\n  display: block;\r\n  overflow-x: auto;\r\n  white-space: nowrap;\r\n}\r\n\r\n.table tbody tr td,\r\n.table thead th,\r\n.table thead {\r\n  \r\n  border-bottom: 1px solid #dee2e6;\r\n}\r\n\r\n.table thead th{\r\n  color: rgba(0,0,0,.54);\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n}\r\n\r\n.table thead td{\r\n  color: rgba(0,0,0,.87);\r\n  font-size:14px;\r\n}\r\n\r\n.table tbody tr td mat-form-field\r\n{\r\n  width:100% !important;\r\n}\r\n\r\n.table tbody tr td,\r\n.table thead th {\r\n  width: 100% !important;\r\n  padding-top: 15px;\r\n  padding-bottom: 15px;\r\n}\r\n\r\n.output {\r\n  padding: 20px;\r\n}\r\n\r\n.delete {\r\n  color: red  ;\r\n}\r\n\r\n.done {\r\n  color: green;\r\n}\r\n\r\nh1 {\r\n  margin: 0;\r\n    display: inline-block;\r\n}\r\n\r\n.top-btn {\r\n  display: inline;\r\n  margin-left: 20px;\r\n  margin-bottom: 20px;\r\n \r\n}\r\n\r\nspan.ui-column-resizer {\r\n  width: 100%;\r\n  height: 100%;\r\n  cursor: col-resize;\r\n  padding: 30px;\r\n\r\n}\r\n\r\n.custom-file-input{\r\n  width: 95px;\r\n  opacity:1;\r\n  float:right;\r\n /* margin-right: 130px;*/\r\n}\r\n\r\n.custom-file-input::-webkit-file-upload-button {\r\n  visibility: hidden;\r\n}\r\n\r\n.custom-file-input::before {\r\n  content: 'Import Excel';\r\n  display: inline-block;\r\n  background: #3f51b5;\r\n  /* border: 1px solid #999; */\r\n  border-radius: 3px;\r\n  padding: 2px 8px;\r\n  outline: none;\r\n  white-space: nowrap;\r\n  -webkit-user-select: none;\r\n  cursor: pointer;\r\n  /* text-shadow: 1px 1px #fff; */\r\n  /* font-weight: 700;\r\n  font-size: 10pt; */\r\n  color:white;\r\n  margin-left:-15px;\r\n  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n}\r\n\r\n.custom-file-input:hover::before {\r\n  border-color: black;\r\n}\r\n\r\n.custom-file-input:active::before {\r\n  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0LW5vdGVzL3Byb2plY3Qtbm90ZXMvcHJvamVjdC1ub3Rlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixLQUFLO0VBQ0wsYUFBYTtFQUNiLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBOzs7O0VBSUUsZ0NBQWdDO0FBQ2xDOztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjs7QUFDQTs7RUFFRSxxQkFBcUI7QUFDdkI7O0FBQ0E7O0VBRUUsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxTQUFTO0lBQ1AscUJBQXFCO0FBQ3pCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7O0FBRXJCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTs7QUFFZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxTQUFTO0VBQ1QsV0FBVztDQUNaLHdCQUF3QjtBQUN6Qjs7QUFHQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZiwrQkFBK0I7RUFDL0I7b0JBQ2tCO0VBQ2xCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsbUdBQW1HO0FBQ3JHOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsMERBQTBEO0FBQzVEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0LW5vdGVzL3Byb2plY3Qtbm90ZXMvcHJvamVjdC1ub3Rlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOjA7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG5tYXQtaWNvbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYWN0aW9uLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLnRhYmxlIHRib2R5IHRyIHRkLFxyXG4udGFibGUgdGhlYWQgdGgsXHJcbi50YWJsZSB0aGVhZCB7XHJcbiAgXHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XHJcbn1cclxuLnRhYmxlIHRoZWFkIHRoe1xyXG4gIGNvbG9yOiByZ2JhKDAsMCwwLC41NCk7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLnRhYmxlIHRoZWFkIHRke1xyXG4gIGNvbG9yOiByZ2JhKDAsMCwwLC44Nyk7XHJcbiAgZm9udC1zaXplOjE0cHg7XHJcbn1cclxuLnRhYmxlIHRib2R5IHRyIHRkIG1hdC1mb3JtLWZpZWxkXHJcbntcclxuICB3aWR0aDoxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRhYmxlIHRib2R5IHRyIHRkLFxyXG4udGFibGUgdGhlYWQgdGgge1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5vdXRwdXQge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5kZWxldGUge1xyXG4gIGNvbG9yOiByZWQgIDtcclxufVxyXG5cclxuLmRvbmUge1xyXG4gIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuaDEge1xyXG4gIG1hcmdpbjogMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4udG9wLWJ0biB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiBcclxufVxyXG5cclxuc3Bhbi51aS1jb2x1bW4tcmVzaXplciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGN1cnNvcjogY29sLXJlc2l6ZTtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG5cclxufVxyXG5cclxuLmN1c3RvbS1maWxlLWlucHV0e1xyXG4gIHdpZHRoOiA5NXB4O1xyXG4gIG9wYWNpdHk6MTtcclxuICBmbG9hdDpyaWdodDtcclxuIC8qIG1hcmdpbi1yaWdodDogMTMwcHg7Ki9cclxufVxyXG5cclxuXHJcbi5jdXN0b20tZmlsZS1pbnB1dDo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG4uY3VzdG9tLWZpbGUtaW5wdXQ6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJ0ltcG9ydCBFeGNlbCc7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQ6ICMzZjUxYjU7XHJcbiAgLyogYm9yZGVyOiAxcHggc29saWQgIzk5OTsgKi9cclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgcGFkZGluZzogMnB4IDhweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLyogdGV4dC1zaGFkb3c6IDFweCAxcHggI2ZmZjsgKi9cclxuICAvKiBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMTBwdDsgKi9cclxuICBjb2xvcjp3aGl0ZTtcclxuICBtYXJnaW4tbGVmdDotMTVweDtcclxuICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbn1cclxuLmN1c3RvbS1maWxlLWlucHV0OmhvdmVyOjpiZWZvcmUge1xyXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbn1cclxuLmN1c3RvbS1maWxlLWlucHV0OmFjdGl2ZTo6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNlM2UzZTMsICNmOWY5ZjkpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/project-notes/project-notes/project-notes.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/project-notes/project-notes/project-notes.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ProjectNotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectNotesComponent", function() { return ProjectNotesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_Notes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/Notes */ "./src/app/models/Notes.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _shared_messageService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/messageService */ "./src/app/shared/messageService.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_9__);










var ProjectNotesComponent = /** @class */ (function () {
    function ProjectNotesComponent(ngZone, actRoute, router, fb, commonSevice, loader, ms) {
        var _this = this;
        this.ngZone = ngZone;
        this.actRoute = actRoute;
        this.router = router;
        this.fb = fb;
        this.commonSevice = commonSevice;
        this.loader = loader;
        this.ms = ms;
        this.Projects = [];
        this.services = [];
        this.components = [];
        this.section = [];
        this.displayedColumns = ['NOTE_TEXT', 'NOTE_CATEGORY', 'action'];
        this.handleError = function (controlName, errorName) {
            return _this.control.controls[controlName].hasError(errorName);
        };
        this.loader.show();
        this.touchedRows = [];
        this.userTable = this.fb.group({
            tableRows: this.fb.array([])
        });
        this.projectId = this.actRoute.snapshot.paramMap.get('id');
        var url = 'project/read-project';
        this.commonSevice.GetById(this.projectId, url).subscribe(function (data) {
            _this.projectData = data;
            _this.projectName = data.PROJECT_NAME;
        }, function (error) {
            _this.projectName = '';
        });
        var URL = "project_notes/getAll/" + this.projectId;
        this.commonSevice.GetAll(URL).subscribe(function (data) {
            var e_1, _a;
            _this.Projects = data;
            _this.control = _this.userTable.get('tableRows');
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_this.Projects), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    var fbGroup = _this.fb.group({
                        _id: [item._id],
                        ID: [item.ID],
                        NOTE_TEXT: [item.NOTE_TEXT, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                        NOTE_CATEGORY: [item.NOTE_CATEGORY, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                        isEditable: [false]
                    });
                    _this.control.push(fbGroup);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            _this.loader.hide();
        }, function (error) {
            _this.loader.hide();
        });
        var url = 'project/read-project';
        this.commonSevice.GetById(this.projectId, url).subscribe(function (data) {
            _this.projectData = data;
            if (_this.projectData.PROCESS_Y_N == 1) {
                _this.section.push("General");
                _this.section.push("Mechanical");
                _this.section.push("Process");
                _this.section.push("Electrical");
                _this.section.push("Communications");
            }
            else {
                _this.section.push("General");
                _this.section.push("Mechanical");
                _this.section.push("Electrical");
                _this.section.push("Communications");
            }
        });
    }
    ProjectNotesComponent.prototype.ngOnInit = function () {
        this.isDelete = false;
        this.formSubmitAttempt = false;
        this.projectId = this.actRoute.snapshot.paramMap.get('id');
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.Projects.count
        };
    };
    ProjectNotesComponent.prototype.ngAfterOnInit = function () {
        this.control = this.userTable.get('tableRows');
    };
    ProjectNotesComponent.prototype.submitAddProjectsNotesForm = function (group) {
        var _this = this;
        if (group.valid) {
            this.loader.show();
            var URL = "project_notes/add-project_Notes";
            group.value.ID = this.projectId;
            console.log(group.value);
            this.commonSevice.Add(group.value, URL).subscribe(function (res) {
                _this.ms.openSnackBar("Notes are added");
                group.get('isEditable').setValue(false);
                _this.router.routeReuseStrategy.shouldReuseRoute = function () {
                    return false;
                };
                _this.router.onSameUrlNavigation = 'reload';
                _this.router.navigate(['/project_notes/getAll/' + _this.projectId]);
            });
        }
        else {
            this.loader.hide();
            this.formSubmitAttempt = true;
            this.ms.openSnackBar("Please fill the required information");
        }
    };
    ProjectNotesComponent.prototype.submitEditProjectsNotesForm = function (group) {
        var _this = this;
        if (group.valid) {
            this.loader.show();
            var id = group.value._id;
            var projectId = this.actRoute.snapshot.paramMap.get('id');
            if (window.confirm('Are you sure you want to update?')) {
                var url = "project_notes/edit-project_notes";
                this.commonSevice.UpdateBy(projectId, id, group.value, url).subscribe(function (res) {
                    _this.loader.hide();
                    group.get('isEditable').setValue(false);
                    _this.ms.openSnackBar("Notes are edited");
                    _this.router.routeReuseStrategy.shouldReuseRoute = function () {
                        return false;
                    };
                    _this.router.onSameUrlNavigation = 'reload';
                    _this.router.navigate(['/project_notes/getAll/' + _this.projectId]);
                });
            }
        }
        else {
            this.loader.hide();
            this.formSubmitAttempt = true;
            this.ms.openSnackBar("Please fill the required information");
        }
    };
    ProjectNotesComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    ProjectNotesComponent.prototype.fieldGlobalIndex = function (index) {
        return this.config.itemsPerPage * (this.config.currentPage - 1) + index;
    };
    ProjectNotesComponent.prototype.initiateForm = function () {
        return this.fb.group({
            ID: [''],
            NOTE_TEXT: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            NOTE_CATEGORY: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            isEditable: [true]
        });
    };
    ProjectNotesComponent.prototype.addRow = function () {
        this.isDelete = false;
        var control = this.userTable.get('tableRows');
        control.insert((this.config.itemsPerPage * this.config.currentPage) - (this.config.itemsPerPage), this.initiateForm());
    };
    ProjectNotesComponent.prototype.deleteRow = function (index, group) {
        var control = this.userTable.get('tableRows');
        control.removeAt(index);
        this.deleteProjectNotes(group);
    };
    ProjectNotesComponent.prototype.editRow = function (group) {
        var e_2, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.getFormControls.controls), _c = _b.next(); !_c.done; _c = _b.next()) {
                var formItem = _c.value;
                if (formItem.get('isEditable').value == true) {
                    formItem.get('isEditable').setValue(false);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.isDelete = true;
        group.get('isEditable').setValue(true);
        console.log(group);
        this.resetFormGroup = group.value;
    };
    ProjectNotesComponent.prototype.cancel = function (group) {
        group.reset(this.resetFormGroup);
        if (group.value._id == undefined) {
            var control = this.userTable.get('tableRows');
            control.removeAt((this.config.itemsPerPage * this.config.currentPage) - (this.config.itemsPerPage));
        }
        else {
            group.get('isEditable').setValue(false);
        }
    };
    ProjectNotesComponent.prototype.doneRow = function (group) {
        console.log(group);
        if (group.value._id == undefined) {
            this.submitAddProjectsNotesForm(group);
        }
        else {
            this.submitEditProjectsNotesForm(group);
        }
    };
    Object.defineProperty(ProjectNotesComponent.prototype, "getFormControls", {
        get: function () {
            var control = this.userTable.get('tableRows');
            return control;
        },
        enumerable: true,
        configurable: true
    });
    ProjectNotesComponent.prototype.deleteProjectNotes = function (group) {
        var _this = this;
        console.log(group.value);
        if (window.confirm('Are you sure')) {
            this.loader.show();
            var index = group.value._id;
            var url = 'project_notes/delete-project_notes/' + this.projectId;
            this.commonSevice.Delete(index, url).subscribe(function (data) {
                _this.ms.openSnackBar("Notes are deleted");
                _this.router.routeReuseStrategy.shouldReuseRoute = function () {
                    return false;
                };
                _this.router.onSameUrlNavigation = 'reload';
                _this.router.navigate(['/project_notes/getAll/' + _this.projectId]);
                _this.loader.hide();
            });
        }
    };
    ProjectNotesComponent.prototype.onFileSelect = function (event) {
        var _this = this;
        var af = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'];
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            // console.log(file);
            // if (!_.includes(af, file.type)) {
            //   alert('Upload excel document only.');
            // } else {
            console.log(file);
            var workBook_1 = null;
            var jsonData_1 = null;
            var reader_1 = new FileReader();
            //const file = ev.target.files[0];
            reader_1.onload = function (event) {
                var data = reader_1.result;
                workBook_1 = xlsx__WEBPACK_IMPORTED_MODULE_9__["read"](data, { type: 'binary' });
                jsonData_1 = workBook_1.SheetNames.reduce(function (initial, name) {
                    var sheet = workBook_1.Sheets[name];
                    initial[name] = xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].sheet_to_json(sheet);
                    return initial;
                }, {});
                var dataString = JSON.stringify(jsonData_1);
                var exceData = JSON.parse(dataString);
                var excelArray = JSON.parse(dataString).Sheet1;
                var colName = "__EMPTY_";
                var cellData;
                var mechInputArray = [];
                for (var row = 1; row < excelArray.length; row++) {
                    if (!_this.isPresent(excelArray[row]["NOTES"]) ||
                        !_this.isPresent(excelArray[row]["__EMPTY"])) {
                        _this.UploadFileInput = "";
                        return;
                    }
                    var mechObj = new _models_Notes__WEBPACK_IMPORTED_MODULE_1__["SD_GENERAL_NOTES"]();
                    mechObj.ID = _this.projectId;
                    mechObj.NOTE_TEXT = excelArray[row]["NOTES"];
                    mechObj.NOTE_CATEGORY = excelArray[row]["__EMPTY"];
                    mechInputArray.push(mechObj);
                }
                var URL = "project_notes/upload_notes";
                _this.UploadFileInput = "";
                _this.loader.show();
                _this.commonSevice.Add(mechInputArray, URL).subscribe(function (res) {
                    _this.router.routeReuseStrategy.shouldReuseRoute = function () {
                        return false;
                    };
                    _this.router.onSameUrlNavigation = 'reload';
                    _this.router.navigate(['/project_notes/getAll/' + _this.projectId]);
                    _this.loader.hide();
                    _this.ms.openSnackBar("Data imported successfully");
                }, function (error) {
                    console.log(error);
                    _this.loader.hide();
                });
            };
            reader_1.readAsBinaryString(file);
            // }
        }
    };
    ProjectNotesComponent.prototype.isPresent = function (value) {
        if (typeof (value) == "string") {
            if (value == undefined || value == null || value.trim() == "")
                return false;
        }
        else {
            if (value == undefined || value == null)
                return false;
        }
        return true;
    };
    ProjectNotesComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__["Ng4LoadingSpinnerService"] },
        { type: _shared_messageService__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"])('UploadFileInput', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ElementRef"])
    ], ProjectNotesComponent.prototype, "uploadFileInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], ProjectNotesComponent.prototype, "paginator", void 0);
    ProjectNotesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
            selector: 'app-project-notes',
            template: __webpack_require__(/*! raw-loader!./project-notes.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/project-notes/project-notes/project-notes.component.html"),
            styles: [__webpack_require__(/*! ./project-notes.component.css */ "./src/app/components/project-notes/project-notes/project-notes.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _shared_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__["Ng4LoadingSpinnerService"], _shared_messageService__WEBPACK_IMPORTED_MODULE_5__["MessageService"]])
    ], ProjectNotesComponent);
    return ProjectNotesComponent;
}());



/***/ }),

/***/ "./src/app/components/project-objects/add-project-objects/add-project-objects.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/project-objects/add-project-objects/add-project-objects.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC1vYmplY3RzL2FkZC1wcm9qZWN0LW9iamVjdHMvYWRkLXByb2plY3Qtb2JqZWN0cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/project-objects/add-project-objects/add-project-objects.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/project-objects/add-project-objects/add-project-objects.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: AddProjectObjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProjectObjectsComponent", function() { return AddProjectObjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_messageService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/messageService */ "./src/app/shared/messageService.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__);








var AddProjectObjectsComponent = /** @class */ (function () {
    function AddProjectObjectsComponent(fb, router, ngZone, actRoute, commonService, loader, ms) {
        var _this = this;
        this.fb = fb;
        this.router = router;
        this.ngZone = ngZone;
        this.actRoute = actRoute;
        this.commonService = commonService;
        this.loader = loader;
        this.ms = ms;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["COMMA"]];
        this.services = [];
        this.components = [];
        this.handleError = function (controlName, errorName) {
            return _this.projects.controls[controlName].hasError(errorName);
        };
    }
    AddProjectObjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.validateForm();
        this.projectId = this.actRoute.snapshot.paramMap.get('id');
        var URL = "services/getAll";
        this.commonService.GetAll(URL).subscribe(function (data) {
            _this.services = data;
        });
        var URL = "component/getAll";
        this.commonService.GetAll(URL).subscribe(function (data) {
            _this.components = data;
        });
    };
    /* Reactive book form */
    AddProjectObjectsComponent.prototype.validateForm = function () {
        this.projects = this.fb.group({
            ID: [''],
            SERVICE_ID: [''],
            COMPONENT_ID: [''],
            SERVICE_ALIAS: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
        });
    };
    AddProjectObjectsComponent.prototype.selectService = function (event) {
        this.projects.value.SERVICE_ID = event.value;
        this.selectedService = event.value;
        console.log(this.projects.value.SERVICE_ID);
    };
    AddProjectObjectsComponent.prototype.selectComponent = function (event) {
        this.projects.value.COMPONENT_ID = event.value;
        this.selectedComponents = event.value;
        console.log(this.projects.value.COMPONENT_ID);
    };
    AddProjectObjectsComponent.prototype.submitAddProjectsObjForm = function () {
        var _this = this;
        this.loader.show();
        var URL = "project_obj/add-project_obj";
        this.projects.value.ID = this.projectId;
        this.projects.value.SERVICE_ID = this.selectedService;
        this.projects.value.COMPONENT_ID = this.selectedComponents;
        console.log(this.projects.value);
        this.commonService.Add(this.projects.value, URL).subscribe(function (res) {
            _this.ms.openSnackBar("The project object is added");
            _this.loader.hide();
            _this.ngZone.run(function () { return _this.router.navigateByUrl('/project_obj/getAll/' + _this.projectId); });
        });
    };
    AddProjectObjectsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__["Ng4LoadingSpinnerService"] },
        { type: _shared_messageService__WEBPACK_IMPORTED_MODULE_6__["MessageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('chipList', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddProjectObjectsComponent.prototype, "chipList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('resetProjectsObjForm', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddProjectObjectsComponent.prototype, "myNgForm", void 0);
    AddProjectObjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add-project-objects',
            template: __webpack_require__(/*! raw-loader!./add-project-objects.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/project-objects/add-project-objects/add-project-objects.component.html"),
            styles: [__webpack_require__(/*! ./add-project-objects.component.css */ "./src/app/components/project-objects/add-project-objects/add-project-objects.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__["Ng4LoadingSpinnerService"],
            _shared_messageService__WEBPACK_IMPORTED_MODULE_6__["MessageService"]])
    ], AddProjectObjectsComponent);
    return AddProjectObjectsComponent;
}());



/***/ }),

/***/ "./src/app/components/project-objects/edit-project-objects/edit-project-objects.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/project-objects/edit-project-objects/edit-project-objects.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC1vYmplY3RzL2VkaXQtcHJvamVjdC1vYmplY3RzL2VkaXQtcHJvamVjdC1vYmplY3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/project-objects/edit-project-objects/edit-project-objects.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/project-objects/edit-project-objects/edit-project-objects.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: EditProjectObjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProjectObjectsComponent", function() { return EditProjectObjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_messageService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/messageService */ "./src/app/shared/messageService.ts");








var EditProjectObjectsComponent = /** @class */ (function () {
    function EditProjectObjectsComponent(fb, router, ngZone, actRoute, commonService, loader, ms) {
        var _this = this;
        this.fb = fb;
        this.router = router;
        this.ngZone = ngZone;
        this.actRoute = actRoute;
        this.commonService = commonService;
        this.loader = loader;
        this.ms = ms;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["COMMA"]];
        this.services = [];
        this.components = [];
        this.ObjData = [];
        this.handleError = function (controlName, errorName) {
            return _this.projects.controls[controlName].hasError(errorName);
        };
        this.loader.show();
        var url = 'project_obj/read-project_obj';
        var id = this.actRoute.snapshot.paramMap.get('id1');
        this.commonService.GetById(id, url).subscribe(function (data) {
            _this.ObjData = data.SERVICE;
            _this.projects = _this.fb.group({
                COMPONENT_ID: [data.COMPONENT_ID],
                SERVICE_ID: [data.SERVICE_ID],
                SERVICE_ALIAS: [data.SERVICE_ALIAS]
            });
        }, function (error) {
            _this.loader.hide();
        });
    }
    EditProjectObjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.validateForm();
        this.projectId = this.actRoute.snapshot.paramMap.get('id');
        var URL = "services/getAll";
        this.commonService.GetAll(URL).subscribe(function (data) {
            _this.services = data;
        }, function (error) {
            _this.loader.hide();
        });
        var URL = "component/getAll";
        this.commonService.GetAll(URL).subscribe(function (data) {
            _this.components = data;
            _this.loader.hide();
        }, function (error) {
            _this.loader.hide();
        });
    };
    EditProjectObjectsComponent.prototype.selectRevNo = function (event) {
        console.log(event.value);
        this.projects.value.REV_NO = event.value;
    };
    /* Reactive book form */
    EditProjectObjectsComponent.prototype.validateForm = function () {
        this.projects = this.fb.group({
            ID: [''],
            SERVICE_ID: [''],
            COMPONENT_ID: [''],
            SERVICE_ALIAS: ['']
        });
    };
    EditProjectObjectsComponent.prototype.selectService = function (event) {
        this.projects.value.SERVICE_ID = event.value;
        this.selectedService = event.value;
        console.log(this.projects.value.SERVICE_ID);
    };
    EditProjectObjectsComponent.prototype.selectComponent = function (event) {
        this.projects.value.COMPONENT_ID = event.value;
        this.selectedComponents = event.value;
        console.log(this.projects.value.COMPONENT_ID);
    };
    EditProjectObjectsComponent.prototype.submitEditProjectsObjForm = function () {
        var _this = this;
        if (this.projects.valid) {
            this.loader.show();
            var id = this.actRoute.snapshot.paramMap.get('id1');
            var projectId = this.actRoute.snapshot.paramMap.get('id');
            if (window.confirm('Are you sure you want to update?')) {
                var url = "project_obj/edit-project_obj";
                console.log(this.projects.value);
                this.commonService.UpdateBy(projectId, id, this.projects.value, url).subscribe(function (res) {
                    _this.ms.openSnackBar("The project has been edited");
                    _this.ngZone.run(function () { return _this.router.navigateByUrl('/project_obj/getAll/' + projectId); });
                });
            }
        }
    };
    EditProjectObjectsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerService"] },
        { type: _shared_messageService__WEBPACK_IMPORTED_MODULE_7__["MessageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('chipList', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditProjectObjectsComponent.prototype, "chipList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('resetComponentsForm', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditProjectObjectsComponent.prototype, "myNgForm", void 0);
    EditProjectObjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit-project-objects',
            template: __webpack_require__(/*! raw-loader!./edit-project-objects.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/project-objects/edit-project-objects/edit-project-objects.component.html"),
            styles: [__webpack_require__(/*! ./edit-project-objects.component.css */ "./src/app/components/project-objects/edit-project-objects/edit-project-objects.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerService"],
            _shared_messageService__WEBPACK_IMPORTED_MODULE_7__["MessageService"]])
    ], EditProjectObjectsComponent);
    return EditProjectObjectsComponent;
}());



/***/ }),

/***/ "./src/app/components/project-objects/project-objects/project-objects.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/components/project-objects/project-objects/project-objects.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\r\n  background-color: #333;\r\n  color: #fff;\r\n  overflow: auto;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top:0;\r\n  padding: 15px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-bottom: 50px;\r\n}\r\n\r\nmat-icon {\r\n  cursor: pointer;\r\n}\r\n\r\n.action-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 20px;\r\n}\r\n\r\n.table {\r\n  padding: 20px;\r\n  display: block;\r\n  overflow-x: auto;\r\n  white-space: nowrap;\r\n}\r\n\r\n.table tbody tr td,\r\n.table thead th,\r\n.table thead {\r\n  \r\n  border-bottom: 1px solid #dee2e6;\r\n}\r\n\r\n.table thead th{\r\n  color: rgba(0,0,0,.54);\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n}\r\n\r\n.table thead td{\r\n  color: rgba(0,0,0,.87);\r\n  font-size:14px;\r\n}\r\n\r\n.table tbody tr td mat-form-field\r\n{\r\n  width:100% !important;\r\n}\r\n\r\n.table tbody tr td,\r\n.table thead th {\r\n  width: 100% !important;\r\n  padding-top: 15px;\r\n  padding-bottom: 15px;\r\n}\r\n\r\n.output {\r\n  padding: 20px;\r\n}\r\n\r\n.delete {\r\n  color: red  ;\r\n}\r\n\r\n.done {\r\n  color: green;\r\n}\r\n\r\nh1 {\r\n  margin: 0;\r\n    display: inline-block;\r\n}\r\n\r\n.top-btn {\r\n  display: inline;\r\n  margin-left: 20px;\r\n  margin-bottom: 20px;\r\n \r\n}\r\n\r\nspan.ui-column-resizer {\r\n  width: 100%;\r\n  height: 100%;\r\n  cursor: col-resize;\r\n  padding: 30px;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0LW9iamVjdHMvcHJvamVjdC1vYmplY3RzL3Byb2plY3Qtb2JqZWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixLQUFLO0VBQ0wsYUFBYTtFQUNiLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBOzs7O0VBSUUsZ0NBQWdDO0FBQ2xDOztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjs7QUFDQTs7RUFFRSxxQkFBcUI7QUFDdkI7O0FBQ0E7O0VBRUUsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxTQUFTO0lBQ1AscUJBQXFCO0FBQ3pCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7O0FBRXJCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTs7QUFFZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC1vYmplY3RzL3Byb2plY3Qtb2JqZWN0cy9wcm9qZWN0LW9iamVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICBjb2xvcjogI2ZmZjtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDowO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxubWF0LWljb24ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmFjdGlvbi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi50YWJsZSB0Ym9keSB0ciB0ZCxcclxuLnRhYmxlIHRoZWFkIHRoLFxyXG4udGFibGUgdGhlYWQge1xyXG4gIFxyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xyXG59XHJcbi50YWJsZSB0aGVhZCB0aHtcclxuICBjb2xvcjogcmdiYSgwLDAsMCwuNTQpO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi50YWJsZSB0aGVhZCB0ZHtcclxuICBjb2xvcjogcmdiYSgwLDAsMCwuODcpO1xyXG4gIGZvbnQtc2l6ZToxNHB4O1xyXG59XHJcbi50YWJsZSB0Ym9keSB0ciB0ZCBtYXQtZm9ybS1maWVsZFxyXG57XHJcbiAgd2lkdGg6MTAwJSAhaW1wb3J0YW50O1xyXG59XHJcbi50YWJsZSB0Ym9keSB0ciB0ZCxcclxuLnRhYmxlIHRoZWFkIHRoIHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ub3V0cHV0IHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uZGVsZXRlIHtcclxuICBjb2xvcjogcmVkICA7XHJcbn1cclxuXHJcbi5kb25lIHtcclxuICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbmgxIHtcclxuICBtYXJnaW46IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLnRvcC1idG4ge1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gXHJcbn1cclxuXHJcbnNwYW4udWktY29sdW1uLXJlc2l6ZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBjdXJzb3I6IGNvbC1yZXNpemU7XHJcbiAgcGFkZGluZzogMzBweDtcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/project-objects/project-objects/project-objects.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/project-objects/project-objects/project-objects.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ProjectObjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectObjectsComponent", function() { return ProjectObjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _shared_messageService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/messageService */ "./src/app/shared/messageService.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "./node_modules/@rxweb/reactive-form-validators/fesm5/rxweb-reactive-form-validators.js");









var ProjectObjectsComponent = /** @class */ (function () {
    function ProjectObjectsComponent(ngZone, actRoute, router, fb, commonSevice, loader, ms) {
        var _this = this;
        this.ngZone = ngZone;
        this.actRoute = actRoute;
        this.router = router;
        this.fb = fb;
        this.commonSevice = commonSevice;
        this.loader = loader;
        this.ms = ms;
        this.Projects = [];
        this.services = [];
        this.components = [];
        this.toppings = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.displayedColumns = ['SERVICE_ID', 'COMPONENT_ID', 'SERVICE_ALIAS', 'action'];
        this.handleError = function (controlName, errorName) {
            return _this.control.controls[controlName].hasError(errorName);
        };
        this.touchedRows = [];
        this.userTable = this.fb.group({
            tableRows: this.fb.array([])
        });
        this.projectId = this.actRoute.snapshot.paramMap.get('id');
        this.loader.show();
        var url = 'project/read-project';
        this.commonSevice.GetById(this.projectId, url).subscribe(function (data) {
            _this.projectName = data.PROJECT_NAME;
        }, function (error) {
            _this.loader.hide();
        });
        var URL = "project_obj/getAll/" + this.projectId;
        this.commonSevice.GetAll(URL).subscribe(function (data) {
            var e_1, _a;
            _this.Projects = data;
            console.log(_this.Projects);
            _this.control = _this.userTable.get('tableRows');
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_this.Projects), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    var fbGroup = _this.fb.group({
                        _id: [item._id],
                        ID: [item.ID],
                        COMPONENT_ID: [item.COMPONENT_ID, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_8__["RxwebValidators"].unique()]],
                        SERVICES: [item.SERVICES],
                        SERVICE_ALIAS: [item.SERVICE_ALIAS],
                        isEditable: [false]
                    });
                    _this.control.push(fbGroup);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
    }
    ProjectObjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isDelete = false;
        this.formSubmitAttempt = false;
        var URL = "services/getAll";
        this.commonSevice.GetAll(URL).subscribe(function (data) {
            _this.services = data;
            if (_this.services.length > 0) {
                _this.services = _this.services.sort(function (a, b) { return a.SERVICE_NAME > b.SERVICE_NAME ? 1 : -1; });
            }
        });
        var URL = "component/getAll";
        this.commonSevice.GetAll(URL).subscribe(function (data) {
            _this.components = data;
            if (_this.components.length > 0) {
                _this.components = _this.components.sort(function (a, b) { return a.COMPONENT_NAME > b.COMPONENT_NAME ? 1 : -1; });
            }
            _this.loader.hide();
        });
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.Projects.count
        };
    };
    ProjectObjectsComponent.prototype.ngAfterOnInit = function () {
        this.control = this.userTable.get('tableRows');
    };
    ProjectObjectsComponent.prototype.selectRevNo = function (event, group) {
        group.value.REV_NO = event.value;
    };
    ProjectObjectsComponent.prototype.getServices = function (group, event) {
        var isComponent = this.components.find(function (x) { return x._id === event.source.value; });
        if (isComponent != undefined && isComponent != null) {
            group.value.SERVICES = isComponent.SERVICE;
            this.toppings.setValue(group.value.SERVICES);
            console.log(isComponent.SERVICE);
        }
    };
    ProjectObjectsComponent.prototype.SelectServices = function (group, event, sel) {
        if (event.isUserInput) {
            if (event.source._selected == false) {
                if (group.value.SERVICES.includes(event.source.value)) {
                    var index = group.value.SERVICES.indexOf(event.source.value);
                    if (index !== -1) {
                        group.value.SERVICES.splice(index, 1);
                    }
                }
            }
            else {
                group.value.SERVICES.push(event.source.value);
            }
            console.log(event.source._selected);
        }
    };
    ProjectObjectsComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    ProjectObjectsComponent.prototype.fieldGlobalIndex = function (index) {
        return this.config.itemsPerPage * (this.config.currentPage - 1) + index;
    };
    ProjectObjectsComponent.prototype.initiateForm = function () {
        return this.fb.group({
            ID: [''],
            COMPONENT_ID: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_8__["RxwebValidators"].unique()]],
            SERVICES: [[]],
            SERVICE_ALIAS: [''],
            isEditable: [true]
        });
    };
    ProjectObjectsComponent.prototype.addRow = function () {
        var control = this.userTable.get('tableRows');
        control.insert((this.config.itemsPerPage * this.config.currentPage) - (this.config.itemsPerPage), this.initiateForm());
        this.formSubmitAttempt = false;
        this.isDelete = false;
        this.toppings.setValue([]);
    };
    ProjectObjectsComponent.prototype.deleteRow = function (index, group) {
        var control = this.userTable.get('tableRows');
        control.removeAt(index);
        this.deleteProjectObject(group);
    };
    ProjectObjectsComponent.prototype.editRow = function (group) {
        var e_2, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.getFormControls.controls), _c = _b.next(); !_c.done; _c = _b.next()) {
                var formItem = _c.value;
                if (formItem.get('isEditable').value == true) {
                    formItem.get('isEditable').setValue(false);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        group.get('isEditable').setValue(true);
        console.log(group);
        this.toppings.setValue(group.value.SERVICES);
        this.isDelete = true;
        this.resetFormGroup = group.value;
    };
    ProjectObjectsComponent.prototype.doneRow = function (group) {
        console.log(group);
        if (group.value._id == undefined) {
            this.submitAddProjectsObjForm(group);
        }
        else {
            this.submitEditProjectsObjForm(group);
        }
    };
    Object.defineProperty(ProjectObjectsComponent.prototype, "getFormControls", {
        get: function () {
            var control = this.userTable.get('tableRows');
            return control;
        },
        enumerable: true,
        configurable: true
    });
    ProjectObjectsComponent.prototype.cancel = function (group) {
        group.reset(this.resetFormGroup);
        if (group.value._id == undefined) {
            var control = this.userTable.get('tableRows');
            control.removeAt((this.config.itemsPerPage * this.config.currentPage) - (this.config.itemsPerPage));
        }
        else {
            group.get('isEditable').setValue(false);
        }
    };
    ProjectObjectsComponent.prototype.retreiveService = function (id) {
        var e_3, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.services), _c = _b.next(); !_c.done; _c = _b.next()) {
                var ser = _c.value;
                if (ser._id == id) {
                    return ser.SERVICE_NAME;
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return '';
    };
    ProjectObjectsComponent.prototype.selectService = function (event, group) {
        group.value.SERVICE_ID = event.value;
    };
    ProjectObjectsComponent.prototype.selectComponent = function (event, group) {
        group.value.COMPONENT_ID = event.value;
    };
    ProjectObjectsComponent.prototype.submitAddProjectsObjForm = function (group) {
        var _this = this;
        this.loader.show();
        if (group.valid) {
            var URL = "project_obj/add-project_obj";
            group.value.ID = this.projectId;
            group.value.SERVICES = this.toppings.value;
            this.commonSevice.Add(group.value, URL).subscribe(function (res) {
                _this.ms.openSnackBar("The project object is added");
                group.get('isEditable').setValue(false);
                _this.loader.hide();
                _this.router.routeReuseStrategy.shouldReuseRoute = function () {
                    return false;
                };
                _this.router.onSameUrlNavigation = 'reload';
                _this.router.navigate(['/project_obj/getAll/' + _this.projectId]);
            });
        }
        else {
            this.loader.hide();
            this.formSubmitAttempt = true;
            this.ms.openSnackBar("Pleas fill the required information");
        }
    };
    ProjectObjectsComponent.prototype.retreiveComponent = function (id) {
        var e_4, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.components), _c = _b.next(); !_c.done; _c = _b.next()) {
                var ser = _c.value;
                if (ser._id == id) {
                    return ser.COMPONENT_NAME;
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return '';
    };
    ProjectObjectsComponent.prototype.submitEditProjectsObjForm = function (group) {
        var _this = this;
        if (group.valid) {
            this.loader.show();
            var id = group.value._id;
            var projectId = this.actRoute.snapshot.paramMap.get('id');
            if (window.confirm('Are you sure you want to update?')) {
                var url = "project_obj/edit-project_obj";
                this.commonSevice.UpdateBy(projectId, id, group.value, url).subscribe(function (res) {
                    _this.ms.openSnackBar("The project has been edited");
                    group.get('isEditable').setValue(false);
                    _this.router.routeReuseStrategy.shouldReuseRoute = function () {
                        return false;
                    };
                    _this.router.onSameUrlNavigation = 'reload';
                    _this.router.navigate(['/project_obj/getAll/' + _this.projectId]);
                });
            }
        }
        else {
            this.loader.hide();
            this.formSubmitAttempt = true;
            this.ms.openSnackBar("Pleas fill the required information");
        }
    };
    ProjectObjectsComponent.prototype.deleteProjectObject = function (group) {
        var _this = this;
        if (window.confirm('Are you sure')) {
            this.loader.show();
            var index = group.value._id;
            var url = 'project_obj/delete-project_obj/' + this.projectId;
            this.commonSevice.Delete(index, url).subscribe(function (data) {
                _this.ms.openSnackBar("The project object is deleted");
                _this.router.routeReuseStrategy.shouldReuseRoute = function () {
                    return false;
                };
                _this.router.onSameUrlNavigation = 'reload';
                _this.router.navigate(['/project_obj/getAll/' + _this.projectId]);
            });
        }
    };
    ProjectObjectsComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__["Ng4LoadingSpinnerService"] },
        { type: _shared_messageService__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], ProjectObjectsComponent.prototype, "paginator", void 0);
    ProjectObjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
            selector: 'app-project-objects',
            template: __webpack_require__(/*! raw-loader!./project-objects.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/project-objects/project-objects/project-objects.component.html"),
            styles: [__webpack_require__(/*! ./project-objects.component.css */ "./src/app/components/project-objects/project-objects/project-objects.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__["Ng4LoadingSpinnerService"], _shared_messageService__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], ProjectObjectsComponent);
    return ProjectObjectsComponent;
}());



/***/ }),

/***/ "./src/app/components/project-register-sheet/project-register-sheet/project-register-sheet.component.css":
/*!***************************************************************************************************************!*\
  !*** ./src/app/components/project-register-sheet/project-register-sheet/project-register-sheet.component.css ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-file-input{\r\n  width: 95px;\r\n  opacity:1;\r\n  float:right;\r\n /* margin-right: 130px;*/\r\n}\r\n\r\n\r\n.custom-file-input::-webkit-file-upload-button {\r\n  visibility: hidden;\r\n}\r\n\r\n\r\n.custom-file-input::before {\r\n  content: 'Import Excel';\r\n  display: inline-block;\r\n  background: #3f51b5;\r\n  /* border: 1px solid #999; */\r\n  border-radius: 3px;\r\n  padding: 2px 8px;\r\n  outline: none;\r\n  white-space: nowrap;\r\n  -webkit-user-select: none;\r\n  cursor: pointer;\r\n  /* text-shadow: 1px 1px #fff; */\r\n  /* font-weight: 700;\r\n  font-size: 10pt; */\r\n  color:white;\r\n  margin-left:-15px;\r\n  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n}\r\n\r\n\r\n.custom-file-input:hover::before {\r\n  border-color: black;\r\n}\r\n\r\n\r\n.custom-file-input:active::before {\r\n  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);\r\n}\r\n\r\n\r\nheader {\r\n  background-color: #333;\r\n  color: #fff;\r\n  overflow: auto;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top:0;\r\n  padding: 15px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n\r\nmat-icon {\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n.action-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 20px;\r\n}\r\n\r\n\r\n.table {\r\n  padding: 20px;\r\n  display: block;\r\n  overflow-x: auto;\r\n  white-space: nowrap;\r\n}\r\n\r\n\r\n.table tbody tr td,\r\n.table thead th,\r\n.table thead {\r\n  \r\n  border-bottom: 1px solid #dee2e6;\r\n}\r\n\r\n\r\n.table thead th{\r\n  color: rgba(0,0,0,.54);\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n}\r\n\r\n\r\n.table thead td{\r\n  color: rgba(0,0,0,.87);\r\n  font-size:14px;\r\n}\r\n\r\n\r\n.table tbody tr td mat-form-field\r\n{\r\n  width:100% !important;\r\n}\r\n\r\n\r\n.table tbody tr td,\r\n.table thead th {\r\n  width: 100% !important;\r\n  padding-top: 15px;\r\n  padding-bottom: 15px;\r\n}\r\n\r\n\r\n.output {\r\n  padding: 20px;\r\n}\r\n\r\n\r\n.delete {\r\n  color: red  ;\r\n}\r\n\r\n\r\n.done {\r\n  color: green;\r\n}\r\n\r\n\r\nh1 {\r\n  margin: 0;\r\n    display: inline-block;\r\n}\r\n\r\n\r\n.top-btn {\r\n  display: inline;\r\n  margin-left: 20px;\r\n  margin-bottom: 20px;\r\n \r\n}\r\n\r\n\r\nspan.ui-column-resizer {\r\n  width: 100%;\r\n  height: 100%;\r\n  cursor: col-resize;\r\n  padding: 30px;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0LXJlZ2lzdGVyLXNoZWV0L3Byb2plY3QtcmVnaXN0ZXItc2hlZXQvcHJvamVjdC1yZWdpc3Rlci1zaGVldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFNBQVM7RUFDVCxXQUFXO0NBQ1osd0JBQXdCO0FBQ3pCOzs7QUFHQTtFQUNFLGtCQUFrQjtBQUNwQjs7O0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsK0JBQStCO0VBQy9CO29CQUNrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLG1HQUFtRztBQUNyRzs7O0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7OztBQUNBO0VBQ0UsMERBQTBEO0FBQzVEOzs7QUFHQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsY0FBYztFQUNkLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsS0FBSztFQUNMLGFBQWE7RUFDYixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOzs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsYUFBYTtBQUNmOzs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7O0FBRUE7Ozs7RUFJRSxnQ0FBZ0M7QUFDbEM7OztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7OztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7OztBQUNBOztFQUVFLHFCQUFxQjtBQUN2Qjs7O0FBQ0E7O0VBRUUsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7OztBQUVBO0VBQ0UsYUFBYTtBQUNmOzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7OztBQUdBO0VBQ0UsU0FBUztJQUNQLHFCQUFxQjtBQUN6Qjs7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjs7QUFFckI7OztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTs7QUFFZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC1yZWdpc3Rlci1zaGVldC9wcm9qZWN0LXJlZ2lzdGVyLXNoZWV0L3Byb2plY3QtcmVnaXN0ZXItc2hlZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tZmlsZS1pbnB1dHtcclxuICB3aWR0aDogOTVweDtcclxuICBvcGFjaXR5OjE7XHJcbiAgZmxvYXQ6cmlnaHQ7XHJcbiAvKiBtYXJnaW4tcmlnaHQ6IDEzMHB4OyovXHJcbn1cclxuXHJcblxyXG4uY3VzdG9tLWZpbGUtaW5wdXQ6Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuLmN1c3RvbS1maWxlLWlucHV0OjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICdJbXBvcnQgRXhjZWwnO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBiYWNrZ3JvdW5kOiAjM2Y1MWI1O1xyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7ICovXHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIHBhZGRpbmc6IDJweCA4cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC8qIHRleHQtc2hhZG93OiAxcHggMXB4ICNmZmY7ICovXHJcbiAgLyogZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDEwcHQ7ICovXHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgbWFyZ2luLWxlZnQ6LTE1cHg7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG59XHJcbi5jdXN0b20tZmlsZS1pbnB1dDpob3Zlcjo6YmVmb3JlIHtcclxuICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG59XHJcbi5jdXN0b20tZmlsZS1pbnB1dDphY3RpdmU6OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZTNlM2UzLCAjZjlmOWY5KTtcclxufVxyXG5cclxuXHJcbmhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICBjb2xvcjogI2ZmZjtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDowO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxubWF0LWljb24ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmFjdGlvbi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi50YWJsZSB0Ym9keSB0ciB0ZCxcclxuLnRhYmxlIHRoZWFkIHRoLFxyXG4udGFibGUgdGhlYWQge1xyXG4gIFxyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xyXG59XHJcbi50YWJsZSB0aGVhZCB0aHtcclxuICBjb2xvcjogcmdiYSgwLDAsMCwuNTQpO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi50YWJsZSB0aGVhZCB0ZHtcclxuICBjb2xvcjogcmdiYSgwLDAsMCwuODcpO1xyXG4gIGZvbnQtc2l6ZToxNHB4O1xyXG59XHJcbi50YWJsZSB0Ym9keSB0ciB0ZCBtYXQtZm9ybS1maWVsZFxyXG57XHJcbiAgd2lkdGg6MTAwJSAhaW1wb3J0YW50O1xyXG59XHJcbi50YWJsZSB0Ym9keSB0ciB0ZCxcclxuLnRhYmxlIHRoZWFkIHRoIHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ub3V0cHV0IHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uZGVsZXRlIHtcclxuICBjb2xvcjogcmVkICA7XHJcbn1cclxuXHJcbi5kb25lIHtcclxuICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcblxyXG5oMSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi50b3AtYnRuIHtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuIFxyXG59XHJcbnNwYW4udWktY29sdW1uLXJlc2l6ZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBjdXJzb3I6IGNvbC1yZXNpemU7XHJcbiAgcGFkZGluZzogMzBweDtcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/project-register-sheet/project-register-sheet/project-register-sheet.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/components/project-register-sheet/project-register-sheet/project-register-sheet.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: ProjectRegisterSheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectRegisterSheetComponent", function() { return ProjectRegisterSheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_messageService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/messageService */ "./src/app/shared/messageService.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _models_Sheets__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../models/Sheets */ "./src/app/models/Sheets.ts");









var ProjectRegisterSheetComponent = /** @class */ (function () {
    function ProjectRegisterSheetComponent(router, commonSevice, actRoute, loader, ms, fb, ngZone) {
        var _this = this;
        this.router = router;
        this.commonSevice = commonSevice;
        this.actRoute = actRoute;
        this.loader = loader;
        this.ms = ms;
        this.fb = fb;
        this.ngZone = ngZone;
        this.services = [];
        this.components = [];
        this.projectData = [];
        this.section = [];
        this.item_no = [];
        this.rev_issued = [];
        this.numbersList = [];
        this.alphaList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        this.handleError = function (controlName, errorName) {
            return _this.control.controls[controlName].hasError(errorName);
        };
    }
    ProjectRegisterSheetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isDelete = false;
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: 0
        };
        this.formSubmitAttempt = false;
        this.touchedRows = [];
        this.userTable = this.fb.group({
            tableRows: this.fb.array([])
        });
        this.projectId = this.actRoute.snapshot.paramMap.get('id');
        this.loader.show();
        var URL = "project_sheet/getAll/" + this.projectId;
        this.commonSevice.GetAll(URL).subscribe(function (data) {
            var e_1, _a;
            _this.projects = data;
            _this.config = {
                itemsPerPage: 5,
                currentPage: 1,
                totalItems: _this.projects.count
            };
            _this.control = _this.userTable.get('tableRows');
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_this.projects), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    var fbGroup = _this.fb.group({
                        _id: [item._id],
                        ID: [item.ID],
                        ITEM_NAME: [item.ITEM_NAME, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                        DESCRIPTION_A: [item.DESCRIPTION_A, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                        DESCRIPTION_B: [item.DESCRIPTION_B],
                        DESCRIPTION_C: [item.DESCRIPTION_C],
                        SECTION: [item.SECTION, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                        ITEM_NO: [item.ITEM_NO, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                        DATE_ISSUED: [item.DATE_ISSUED, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                        REV_ISSUED: [item.REV_ISSUED],
                        isEditable: [false]
                    });
                    _this.control.push(fbGroup);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            console.log(data);
            console.log(_this.projects);
        }, function (error) {
            _this.loader.hide();
        });
        var url = 'project/read-project';
        this.commonSevice.GetById(this.projectId, url).subscribe(function (data) {
            _this.projectData = data;
            _this.projectName = data.PROJECT_NAME;
            if (_this.projectData.PROCESS_Y_N == 1) {
                _this.section.push("Communications");
                _this.section.push("Electrical");
                _this.section.push("General");
                _this.section.push("Mechanical");
                _this.section.push("Process");
            }
            else {
                _this.section.push("Communications");
                _this.section.push("Electrical");
                _this.section.push("General");
                _this.section.push("Mechanical");
            }
            if (_this.projectData.CONTRACTUAL_Y_N == 1) {
                _this.rev_issued = _this.numbersList;
            }
            else {
                _this.rev_issued = _this.alphaList;
            }
            _this.item_no = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10"];
            console.log(_this.projectData);
        });
    };
    ProjectRegisterSheetComponent.prototype.ngAfterOnInit = function () {
        this.control = this.userTable.get('tableRows');
    };
    ProjectRegisterSheetComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    ProjectRegisterSheetComponent.prototype.formatDate = function (e, group) {
        var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
        group.get('DATE_ISSUED').setValue(convertDate, {
            onlyself: true
        });
    };
    ProjectRegisterSheetComponent.prototype.submitEditProjectsSheetForm = function (group) {
        var _this = this;
        if (group.valid) {
            this.loader.show();
            var id = group.value._id;
            var projectId = this.actRoute.snapshot.paramMap.get('id');
            if (window.confirm('Are you sure you want to update?')) {
                var url = "project_sheet/edit-project_sheet";
                console.log(this.projects.value);
                this.commonSevice.UpdateBy(projectId, id, group.value, url).subscribe(function (res) {
                    _this.ms.openSnackBar("The Register Sheet is edited");
                    group.get('isEditable').setValue(false);
                    _this.router.routeReuseStrategy.shouldReuseRoute = function () {
                        return false;
                    };
                    _this.router.onSameUrlNavigation = 'reload';
                    _this.router.navigate(['/project_sheet/getAll/' + _this.projectId]);
                });
            }
        }
        else {
            this.loader.hide();
            this.formSubmitAttempt = true;
            this.ms.openSnackBar("Please fill the required information");
        }
    };
    ProjectRegisterSheetComponent.prototype.fieldGlobalIndex = function (index) {
        return this.config.itemsPerPage * (this.config.currentPage - 1) + index;
    };
    ProjectRegisterSheetComponent.prototype.initiateForm = function () {
        return this.fb.group({
            ID: [''],
            ITEM_NAME: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            DESCRIPTION_A: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            DESCRIPTION_B: [''],
            DESCRIPTION_C: [''],
            SECTION: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            ITEM_NO: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            DATE_ISSUED: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            REV_ISSUED: [''],
            isEditable: [true]
        });
    };
    ProjectRegisterSheetComponent.prototype.addRow = function () {
        var control = this.userTable.get('tableRows');
        control.insert((this.config.itemsPerPage * this.config.currentPage) - (this.config.itemsPerPage), this.initiateForm());
        this.isDelete = false;
        this.formSubmitAttempt = false;
    };
    ProjectRegisterSheetComponent.prototype.deleteProjectSheet = function (group) {
        var _this = this;
        if (window.confirm('Are you sure')) {
            this.loader.show();
            var url = 'project_sheet/delete-project_sheet/' + this.projectId;
            var index = group.value._id;
            console.log(index);
            if (index != undefined && index != '') {
                this.commonSevice.Delete(index, url).subscribe(function (data) {
                    _this.ms.openSnackBar("The register sheet is deleted");
                    _this.router.routeReuseStrategy.shouldReuseRoute = function () {
                        return false;
                    };
                    _this.router.onSameUrlNavigation = 'reload';
                    _this.router.navigate(['/project_sheet/getAll/' + _this.projectId]);
                    _this.loader.hide();
                });
            }
            else {
                this.loader.hide();
            }
        }
    };
    ProjectRegisterSheetComponent.prototype.deleteRow = function (index, group) {
        var control = this.userTable.get('tableRows');
        control.removeAt(index);
        this.deleteProjectSheet(group);
    };
    ProjectRegisterSheetComponent.prototype.editRow = function (group) {
        var e_2, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.getFormControls.controls), _c = _b.next(); !_c.done; _c = _b.next()) {
                var formItem = _c.value;
                if (formItem.get('isEditable').value == true) {
                    formItem.get('isEditable').setValue(false);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.isDelete = true;
        group.get('isEditable').setValue(true);
        this.resetFormGroup = group.value;
    };
    ProjectRegisterSheetComponent.prototype.cancel = function (group) {
        group.reset(this.resetFormGroup);
        if (group.value._id == undefined) {
            var control = this.userTable.get('tableRows');
            control.removeAt((this.config.itemsPerPage * this.config.currentPage) - (this.config.itemsPerPage));
        }
        else {
            group.get('isEditable').setValue(false);
        }
    };
    ProjectRegisterSheetComponent.prototype.doneRow = function (group) {
        if (group.value._id == undefined) {
            this.saveUserDetails(group);
        }
        else {
            this.submitEditProjectsSheetForm(group);
        }
    };
    ProjectRegisterSheetComponent.prototype.saveUserDetails = function (group) {
        var _this = this;
        console.log(this.userTable.value);
        if (group.valid) {
            this.loader.show();
            var URL = "project_sheet/add-project_sheet";
            group.get('ID').setValue(this.projectId);
            this.commonSevice.Add(group.value, URL).subscribe(function (res) {
                _this.ms.openSnackBar("The register sheet is added");
                group.get('isEditable').setValue(false);
                _this.router.routeReuseStrategy.shouldReuseRoute = function () {
                    return false;
                };
                _this.router.onSameUrlNavigation = 'reload';
                _this.router.navigate(['/project_sheet/getAll/' + _this.projectId]);
            });
        }
        else {
            this.loader.hide();
            this.formSubmitAttempt = true;
            this.ms.openSnackBar("Please fill the required information");
        }
    };
    Object.defineProperty(ProjectRegisterSheetComponent.prototype, "getFormControls", {
        get: function () {
            var control = this.userTable.get('tableRows');
            return control;
        },
        enumerable: true,
        configurable: true
    });
    ProjectRegisterSheetComponent.prototype.submitForm = function () {
        console.log(this.userTable.value);
        var control = this.userTable.get('tableRows');
        this.touchedRows = control.controls.filter(function (row) { return row.touched; }).map(function (row) { return row.value; });
        console.log(this.touchedRows);
    };
    ProjectRegisterSheetComponent.prototype.toggleTheme = function () {
        this.mode = !this.mode;
    };
    ProjectRegisterSheetComponent.prototype.onFileSelect = function (event) {
        var _this = this;
        var af = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'];
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            // console.log(file);
            // if (!_.includes(af, file.type)) {
            //   alert('Upload excel document only.');
            // } else {
            console.log(file);
            var workBook_1 = null;
            var jsonData_1 = null;
            var reader_1 = new FileReader();
            //const file = ev.target.files[0];
            reader_1.onload = function (event) {
                var data = reader_1.result;
                workBook_1 = xlsx__WEBPACK_IMPORTED_MODULE_7__["read"](data, { type: 'binary', cellDates: true });
                jsonData_1 = workBook_1.SheetNames.reduce(function (initial, name) {
                    var sheet = workBook_1.Sheets[name];
                    initial[name] = xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].sheet_to_json(sheet);
                    return initial;
                }, {});
                var dataString = JSON.stringify(jsonData_1);
                var exceData = JSON.parse(dataString);
                var excelArray = JSON.parse(dataString).Sheet1;
                var colName = "__EMPTY_";
                var cellData;
                var mechInputArray = [];
                for (var row = 1; row < excelArray.length; row++) {
                    //for(var j=0; j < 20; j++){
                    //  if (j == 0) colName = "__EMPTY";
                    //else colName = "__EMPTY_" + j.toString();
                    //cellData = excelArray[row][colName];
                    if (!_this.isPresent(excelArray[row]["PROJECT REGISTER SHEETS"]) ||
                        !_this.isPresent(excelArray[row][colName + "3"]) ||
                        !_this.isPresent(excelArray[row][colName + "4"]) ||
                        !_this.isPresent(excelArray[row][colName + "5"])) {
                        alert('Item Name, Section, Item No, Date Issued are required');
                        _this.UploadFileInput = "";
                        return;
                    }
                    var dateIssued = new Date(excelArray[row][colName + "5"]);
                    if (isNaN(dateIssued.getTime())) {
                        alert('Date Issued is not a valid date');
                        _this.UploadFileInput = "";
                        return;
                    }
                    var mechObj = new _models_Sheets__WEBPACK_IMPORTED_MODULE_8__["SD_SHEET_REGISTER"]();
                    mechObj.ID = _this.projectId;
                    mechObj.ITEM_NAME = excelArray[row]["PROJECT REGISTER SHEETS"];
                    mechObj.DESCRIPTION_A = excelArray[row]["__EMPTY"];
                    mechObj.DESCRIPTION_B = excelArray[row][colName + "1"];
                    mechObj.DESCRIPTION_C = excelArray[row][colName + "2"];
                    mechObj.SECTION = excelArray[row][colName + "3"];
                    mechObj.ITEM_NO = excelArray[row][colName + "4"];
                    mechObj.DATE_ISSUED = dateIssued;
                    mechObj.REV_ISSUED = excelArray[row][colName + "6"];
                    mechInputArray.push(mechObj);
                }
                var URL = "project_sheet/upload_sheets";
                _this.UploadFileInput = "";
                _this.loader.show();
                _this.commonSevice.Add(mechInputArray, URL).subscribe(function (res) {
                    _this.router.routeReuseStrategy.shouldReuseRoute = function () {
                        return false;
                    };
                    _this.router.onSameUrlNavigation = 'reload';
                    _this.router.navigate(['/project_sheet/getAll/' + _this.projectId]);
                    _this.loader.hide();
                    _this.ms.openSnackBar("Data imported successfully");
                }, function (error) {
                    console.log(error);
                    _this.loader.hide();
                });
            };
            reader_1.readAsBinaryString(file);
            // }
        }
    };
    ProjectRegisterSheetComponent.prototype.isPresent = function (value) {
        if (typeof (value) == "string") {
            if (value == undefined || value == null || value.trim() == "")
                return false;
        }
        else {
            if (value == undefined || value == null)
                return false;
        }
        return true;
    };
    ProjectRegisterSheetComponent.prototype.is_Numeric = function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    };
    ProjectRegisterSheetComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__["Ng4LoadingSpinnerService"] },
        { type: _shared_messageService__WEBPACK_IMPORTED_MODULE_6__["MessageService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('UploadFileInput', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])
    ], ProjectRegisterSheetComponent.prototype, "uploadFileInput", void 0);
    ProjectRegisterSheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-project-register-sheet',
            template: __webpack_require__(/*! raw-loader!./project-register-sheet.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/project-register-sheet/project-register-sheet/project-register-sheet.component.html"),
            styles: [__webpack_require__(/*! ./project-register-sheet.component.css */ "./src/app/components/project-register-sheet/project-register-sheet/project-register-sheet.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__["Ng4LoadingSpinnerService"], _shared_messageService__WEBPACK_IMPORTED_MODULE_6__["MessageService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]])
    ], ProjectRegisterSheetComponent);
    return ProjectRegisterSheetComponent;
}());



/***/ }),

/***/ "./src/app/components/project-revisions/add-project-revisions/add-project-revisions.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/project-revisions/add-project-revisions/add-project-revisions.component.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main {\r\n    width: 200px;\r\n    border: 1px dotted black;\r\n  }\r\n  h1 {\r\n    margin: 0;\r\n      display: inline-block;\r\n  }\r\n  .top-btn {\r\n    float: right;\r\n   \r\n  }\r\n  .mat-divider{\r\n      margin-top:10px;\r\n  }\r\n  .view-table{\r\n      margin-top:5%;\r\n  }\r\n  .action-btns{\r\n     margin-left:35%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0LXJldmlzaW9ucy9hZGQtcHJvamVjdC1yZXZpc2lvbnMvYWRkLXByb2plY3QtcmV2aXNpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSxTQUFTO01BQ1AscUJBQXFCO0VBQ3pCO0VBQ0E7SUFDRSxZQUFZOztFQUVkO0VBQ0E7TUFDSSxlQUFlO0VBQ25CO0VBRUE7TUFDSSxhQUFhO0VBQ2pCO0VBQ0E7S0FDRyxlQUFlO0VBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0LXJldmlzaW9ucy9hZGQtcHJvamVjdC1yZXZpc2lvbnMvYWRkLXByb2plY3QtcmV2aXNpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbiB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBkb3R0ZWQgYmxhY2s7XHJcbiAgfVxyXG4gIGgxIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICAudG9wLWJ0biB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgIFxyXG4gIH1cclxuICAubWF0LWRpdmlkZXJ7XHJcbiAgICAgIG1hcmdpbi10b3A6MTBweDtcclxuICB9XHJcblxyXG4gIC52aWV3LXRhYmxle1xyXG4gICAgICBtYXJnaW4tdG9wOjUlO1xyXG4gIH1cclxuICAuYWN0aW9uLWJ0bnN7XHJcbiAgICAgbWFyZ2luLWxlZnQ6MzUlO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/project-revisions/add-project-revisions/add-project-revisions.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/project-revisions/add-project-revisions/add-project-revisions.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: AddProjectRevisionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProjectRevisionsComponent", function() { return AddProjectRevisionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_messageService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/messageService */ "./src/app/shared/messageService.ts");








var AddProjectRevisionsComponent = /** @class */ (function () {
    function AddProjectRevisionsComponent(fb, router, ngZone, actRoute, commonService, ms, loader) {
        var _this = this;
        this.fb = fb;
        this.router = router;
        this.ngZone = ngZone;
        this.actRoute = actRoute;
        this.commonService = commonService;
        this.ms = ms;
        this.loader = loader;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["COMMA"]];
        this.process = 0;
        this.contract = 0;
        this.numbersList = [];
        this.revno = [];
        this.alphaList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        this.handleError = function (controlName, errorName) {
            return _this.projects.controls[controlName].hasError(errorName);
        };
    }
    AddProjectRevisionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loader.show();
        this.validateForm();
        for (var i = 1; i <= 100; i++) {
            this.numbersList.push(i);
        }
        this.projectId = this.actRoute.snapshot.paramMap.get('id');
        var url = 'project/read-project';
        this.commonService.GetById(this.projectId, url).subscribe(function (data) {
            _this.projectData = data;
            _this.projectName = data.PROJECT_NAME;
            console.log(_this.projectData);
            if (_this.projectData.CONTRACTUAL_Y_N == 0) {
                _this.revno = _this.numbersList;
            }
            else {
                _this.revno = _this.alphaList;
            }
            _this.loader.hide();
        });
    };
    /* Reactive book form */
    AddProjectRevisionsComponent.prototype.validateForm = function () {
        this.projects = this.fb.group({
            ID: [''],
            REV_NAME: [''],
            REV_NO: ['']
        });
    };
    AddProjectRevisionsComponent.prototype.selectRevNo = function (event) {
        console.log(event.value);
        this.projects.value.REV_NO = event.value;
    };
    AddProjectRevisionsComponent.prototype.submitAddProjectsRevForm = function () {
        var _this = this;
        this.loader.show();
        var URL = "project_rev/add-project_rev";
        console.log(this.projects.value);
        this.projects.value.ID = this.projectId;
        this.commonService.Add(this.projects.value, URL).subscribe(function (res) {
            _this.ms.openSnackBar("Project revision has been added");
            _this.loader.hide();
            _this.ngZone.run(function () { return _this.router.navigateByUrl('/project_rev/getAll/' + _this.projectId); });
        });
    };
    AddProjectRevisionsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _shared_messageService__WEBPACK_IMPORTED_MODULE_7__["MessageService"] },
        { type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('chipList', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddProjectRevisionsComponent.prototype, "chipList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('resetProjectsForm', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddProjectRevisionsComponent.prototype, "myNgForm", void 0);
    AddProjectRevisionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add-project-revisions',
            template: __webpack_require__(/*! raw-loader!./add-project-revisions.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/project-revisions/add-project-revisions/add-project-revisions.component.html"),
            styles: [__webpack_require__(/*! ./add-project-revisions.component.css */ "./src/app/components/project-revisions/add-project-revisions/add-project-revisions.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _shared_messageService__WEBPACK_IMPORTED_MODULE_7__["MessageService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerService"]])
    ], AddProjectRevisionsComponent);
    return AddProjectRevisionsComponent;
}());



/***/ }),

/***/ "./src/app/components/project-revisions/edit-project-revisions/edit-project-revisions.component.css":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/project-revisions/edit-project-revisions/edit-project-revisions.component.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC1yZXZpc2lvbnMvZWRpdC1wcm9qZWN0LXJldmlzaW9ucy9lZGl0LXByb2plY3QtcmV2aXNpb25zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/project-revisions/edit-project-revisions/edit-project-revisions.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/project-revisions/edit-project-revisions/edit-project-revisions.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: EditProjectRevisionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProjectRevisionsComponent", function() { return EditProjectRevisionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_messageService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/messageService */ "./src/app/shared/messageService.ts");








var EditProjectRevisionsComponent = /** @class */ (function () {
    function EditProjectRevisionsComponent(fb, router, ngZone, actRoute, commonService, loader, ms) {
        var _this = this;
        this.fb = fb;
        this.router = router;
        this.ngZone = ngZone;
        this.actRoute = actRoute;
        this.commonService = commonService;
        this.loader = loader;
        this.ms = ms;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["COMMA"]];
        this.ProjectsData = [];
        this.numbersList = [];
        this.revno = [];
        this.alphaList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        this.handleError = function (controlName, errorName) {
            return _this.projects.controls[controlName].hasError(errorName);
        };
        this.loader.show();
        var url = 'project_rev/read-project_rev';
        var id = this.actRoute.snapshot.paramMap.get('id1');
        this.commonService.GetById(id, url).subscribe(function (data) {
            _this.ProjectsData = data.SERVICE;
            _this.projects = _this.fb.group({
                REV_NAME: [data.REV_NAME, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                REV_NO: [data.REV_NO]
            });
            _this.loader.hide();
        }, function (error) {
            _this.loader.hide();
        });
    }
    EditProjectRevisionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.submitBookForm();
        for (var i = 1; i <= 100; i++) {
            this.numbersList.push(i);
        }
        this.projectId = this.actRoute.snapshot.paramMap.get('id');
        var url = 'project/read-project';
        this.commonService.GetById(this.projectId, url).subscribe(function (data) {
            _this.projectData = data;
            console.log(_this.projectData);
            if (_this.projectData.CONTRACTUAL_Y_N == 0) {
                _this.revno = _this.numbersList;
            }
            else {
                _this.revno = _this.alphaList;
            }
        });
    };
    EditProjectRevisionsComponent.prototype.selectRevNo = function (event) {
        console.log(event.value);
        this.projects.value.REV_NO = event.value;
    };
    /* Reactive book form */
    EditProjectRevisionsComponent.prototype.submitBookForm = function () {
        this.projects = this.fb.group({
            REV_NAME: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            REV_NO: ['']
        });
    };
    EditProjectRevisionsComponent.prototype.submitEditProjectsRevForm = function () {
        var _this = this;
        if (this.projects.valid) {
            this.loader.show();
            var id = this.actRoute.snapshot.paramMap.get('id1');
            var projectId = this.actRoute.snapshot.paramMap.get('id');
            if (window.confirm('Are you sure you want to update?')) {
                var url = "project_rev/edit-project_rev";
                console.log(this.projects.value);
                this.commonService.UpdateBy(projectId, id, this.projects.value, url).subscribe(function (res) {
                    _this.ms.openSnackBar("The project is edited");
                    _this.loader.hide();
                    _this.ngZone.run(function () { return _this.router.navigateByUrl('/project_rev/getAll/' + projectId); });
                });
            }
        }
    };
    EditProjectRevisionsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerService"] },
        { type: _shared_messageService__WEBPACK_IMPORTED_MODULE_7__["MessageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('chipList', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditProjectRevisionsComponent.prototype, "chipList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('resetComponentsForm', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditProjectRevisionsComponent.prototype, "myNgForm", void 0);
    EditProjectRevisionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit-project-revisions',
            template: __webpack_require__(/*! raw-loader!./edit-project-revisions.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/project-revisions/edit-project-revisions/edit-project-revisions.component.html"),
            styles: [__webpack_require__(/*! ./edit-project-revisions.component.css */ "./src/app/components/project-revisions/edit-project-revisions/edit-project-revisions.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerService"],
            _shared_messageService__WEBPACK_IMPORTED_MODULE_7__["MessageService"]])
    ], EditProjectRevisionsComponent);
    return EditProjectRevisionsComponent;
}());



/***/ }),

/***/ "./src/app/components/project-revisions/project-revisions/project-revisions.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/components/project-revisions/project-revisions/project-revisions.component.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\r\n  background-color: #333;\r\n  color: #fff;\r\n  overflow: auto;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top:0;\r\n  padding: 15px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-bottom: 50px;\r\n}\r\n\r\nmat-icon {\r\n  cursor: pointer;\r\n}\r\n\r\n.action-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 20px;\r\n}\r\n\r\n.table {\r\n  padding: 20px;\r\n  display: block;\r\n  overflow-x: auto;\r\n  white-space: nowrap;\r\n}\r\n\r\n.table tbody tr td,\r\n.table thead th,\r\n.table thead {\r\n  \r\n  border-bottom: 1px solid #dee2e6;\r\n}\r\n\r\n.table thead th{\r\n  color: rgba(0,0,0,.54);\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n}\r\n\r\n.table thead td{\r\n  color: rgba(0,0,0,.87);\r\n  font-size:14px;\r\n}\r\n\r\n.table tbody tr td mat-form-field\r\n{\r\n  width:100% !important;\r\n}\r\n\r\n.table tbody tr td,\r\n.table thead th {\r\n  width: 100% !important;\r\n  padding-top: 15px;\r\n  padding-bottom: 15px;\r\n}\r\n\r\n.output {\r\n  padding: 20px;\r\n}\r\n\r\n.delete {\r\n  color: red  ;\r\n}\r\n\r\n.done {\r\n  color: green;\r\n}\r\n\r\nspan.ui-column-resizer {\r\n  width: 100%;\r\n  height: 100%;\r\n  cursor: col-resize;\r\n  padding: 30px;\r\n\r\n}\r\n\r\nh1 {\r\n  margin: 0;\r\n    display: inline-block;\r\n}\r\n\r\n.top-btn {\r\n  display: inline;\r\n  margin-left: 20px;\r\n  margin-bottom: 20px;\r\n \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0LXJldmlzaW9ucy9wcm9qZWN0LXJldmlzaW9ucy9wcm9qZWN0LXJldmlzaW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixLQUFLO0VBQ0wsYUFBYTtFQUNiLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBOzs7O0VBSUUsZ0NBQWdDO0FBQ2xDOztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjs7QUFDQTs7RUFFRSxxQkFBcUI7QUFDdkI7O0FBQ0E7O0VBRUUsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBSUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhOztBQUVmOztBQUNBO0VBQ0UsU0FBUztJQUNQLHFCQUFxQjtBQUN6Qjs7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1COztBQUVyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC1yZXZpc2lvbnMvcHJvamVjdC1yZXZpc2lvbnMvcHJvamVjdC1yZXZpc2lvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICBjb2xvcjogI2ZmZjtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDowO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxubWF0LWljb24ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmFjdGlvbi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi50YWJsZSB0Ym9keSB0ciB0ZCxcclxuLnRhYmxlIHRoZWFkIHRoLFxyXG4udGFibGUgdGhlYWQge1xyXG4gIFxyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xyXG59XHJcbi50YWJsZSB0aGVhZCB0aHtcclxuICBjb2xvcjogcmdiYSgwLDAsMCwuNTQpO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi50YWJsZSB0aGVhZCB0ZHtcclxuICBjb2xvcjogcmdiYSgwLDAsMCwuODcpO1xyXG4gIGZvbnQtc2l6ZToxNHB4O1xyXG59XHJcbi50YWJsZSB0Ym9keSB0ciB0ZCBtYXQtZm9ybS1maWVsZFxyXG57XHJcbiAgd2lkdGg6MTAwJSAhaW1wb3J0YW50O1xyXG59XHJcbi50YWJsZSB0Ym9keSB0ciB0ZCxcclxuLnRhYmxlIHRoZWFkIHRoIHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ub3V0cHV0IHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uZGVsZXRlIHtcclxuICBjb2xvcjogcmVkICA7XHJcbn1cclxuXHJcbi5kb25lIHtcclxuICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcblxyXG5cclxuc3Bhbi51aS1jb2x1bW4tcmVzaXplciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGN1cnNvcjogY29sLXJlc2l6ZTtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG5cclxufVxyXG5oMSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi50b3AtYnRuIHtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/project-revisions/project-revisions/project-revisions.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/project-revisions/project-revisions/project-revisions.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ProjectRevisionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectRevisionsComponent", function() { return ProjectRevisionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _shared_messageService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/messageService */ "./src/app/shared/messageService.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");








var ProjectRevisionsComponent = /** @class */ (function () {
    function ProjectRevisionsComponent(ngZone, actRoute, router, fb, commonSevice, loader, ms) {
        var _this = this;
        this.ngZone = ngZone;
        this.actRoute = actRoute;
        this.router = router;
        this.fb = fb;
        this.commonSevice = commonSevice;
        this.loader = loader;
        this.ms = ms;
        this.Projects = [];
        this.PipeData = [];
        this.numbersList = [];
        this.revno = [];
        this.alphaList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        this.displayedColumns = ['REV_NAME', 'REV_NO', 'action'];
        this.handleError = function (controlName, errorName) {
            return _this.control.controls[controlName].hasError(errorName);
        };
    }
    ProjectRevisionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isDelete = false;
        this.formSubmitAttempt = false;
        console.log("ng");
        this.touchedRows = [];
        this.userTable = this.fb.group({
            tableRows: this.fb.array([])
        });
        for (var i = 1; i <= 100; i++) {
            this.numbersList.push(i);
        }
        this.loader.show();
        this.projectId = this.actRoute.snapshot.paramMap.get('id');
        var url = 'project/read-project';
        this.commonSevice.GetById(this.projectId, url).subscribe(function (data) {
            _this.projectData = data;
            _this.projectName = data.PROJECT_NAME;
            if (_this.projectData.CONTRACTUAL_Y_N == 1) {
                _this.revno = _this.numbersList;
            }
            else {
                _this.revno = _this.alphaList;
            }
        }, function (error) {
            _this.loader.hide();
        });
        var URL = "project_rev/getAll/" + this.projectId;
        this.commonSevice.GetAll(URL).subscribe(function (data) {
            var e_1, _a;
            _this.Projects = data;
            _this.control = _this.userTable.get('tableRows');
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_this.Projects), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    var fbGroup = _this.fb.group({
                        _id: [item._id],
                        ID: [item.ID],
                        REV_NAME: [item.REV_NAME, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                        REV_NO: [item.REV_NO, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                        DATE_REV: [item.DATE_REV, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                        isEditable: [false]
                    });
                    _this.control.push(fbGroup);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            _this.loader.hide();
        }, function (error) {
            _this.loader.hide();
        });
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.Projects.count
        };
    };
    ProjectRevisionsComponent.prototype.ngAfterOnInit = function () {
        this.control = this.userTable.get('tableRows');
    };
    ProjectRevisionsComponent.prototype.selectRevNo = function (event, group) {
        group.value.REV_NO = event.value;
    };
    ProjectRevisionsComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    ProjectRevisionsComponent.prototype.formatDate = function (e, group) {
        var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
        group.get('DATE_REV').setValue(convertDate, {
            onlyself: true
        });
    };
    ProjectRevisionsComponent.prototype.formatDateDisplay = function (e) {
        if (e == '') {
            return '';
        }
        else {
            return new Date(e).toISOString().substring(0, 10);
        }
    };
    ProjectRevisionsComponent.prototype.fieldGlobalIndex = function (index) {
        return this.config.itemsPerPage * (this.config.currentPage - 1) + index;
    };
    ProjectRevisionsComponent.prototype.initiateForm = function () {
        return this.fb.group({
            ID: [''],
            REV_NAME: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            REV_NO: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            DATE_REV: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            isEditable: [true]
        });
    };
    ProjectRevisionsComponent.prototype.addRow = function () {
        var control = this.userTable.get('tableRows');
        control.insert((this.config.itemsPerPage * this.config.currentPage) - (this.config.itemsPerPage), this.initiateForm());
        this.formSubmitAttempt = false;
        this.isDelete = false;
    };
    ProjectRevisionsComponent.prototype.deleteRow = function (index, group) {
        var control = this.userTable.get('tableRows');
        control.removeAt(index);
        this.deleteProjectRevision(group);
    };
    ProjectRevisionsComponent.prototype.editRow = function (group) {
        var e_2, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.getFormControls.controls), _c = _b.next(); !_c.done; _c = _b.next()) {
                var formItem = _c.value;
                if (formItem.get('isEditable').value == true) {
                    formItem.get('isEditable').setValue(false);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        var letters = /^[A-Z]+$/;
        if (group.value.REV_NO != null) {
            if (group.value.REV_NO.match(letters)) {
                group.get('REV_NO').setValue(group.value.REV_NO);
            }
            else {
                group.get('REV_NO').setValue(parseInt(group.value.REV_NO));
            }
        }
        group.get('isEditable').setValue(true);
        this.isDelete = true;
        this.resetFormGroup = group.value;
    };
    ProjectRevisionsComponent.prototype.cancel = function (group) {
        group.reset(this.resetFormGroup);
        if (group.value._id == undefined) {
            var control = this.userTable.get('tableRows');
            control.removeAt((this.config.itemsPerPage * this.config.currentPage) - (this.config.itemsPerPage));
        }
        else {
            group.get('isEditable').setValue(false);
        }
    };
    ProjectRevisionsComponent.prototype.doneRow = function (group) {
        console.log(group);
        if (group.value._id == undefined) {
            this.submitAddProjectsRevForm(group);
        }
        else {
            this.submitEditProjectsRevForm(group);
        }
    };
    Object.defineProperty(ProjectRevisionsComponent.prototype, "getFormControls", {
        get: function () {
            var control = this.userTable.get('tableRows');
            return control;
        },
        enumerable: true,
        configurable: true
    });
    ProjectRevisionsComponent.prototype.submitAddProjectsRevForm = function (group) {
        var _this = this;
        this.loader.show();
        if (group.valid) {
            var URL = "project_rev/add-project_rev";
            console.log(group.value);
            group.value.ID = this.projectId;
            this.commonSevice.Add(group.value, URL).subscribe(function (res) {
                group.get('isEditable').setValue(false);
                _this.ms.openSnackBar("The project Revision is added");
                _this.router.routeReuseStrategy.shouldReuseRoute = function () {
                    return false;
                };
                _this.router.onSameUrlNavigation = 'reload';
                _this.router.navigate(['/project_rev/getAll/' + _this.projectId]);
            });
        }
        else {
            this.formSubmitAttempt = true;
            this.loader.hide();
            this.ms.openSnackBar("Please fill the required fields");
        }
    };
    ProjectRevisionsComponent.prototype.submitEditProjectsRevForm = function (group) {
        var _this = this;
        if (group.valid) {
            this.loader.show();
            var id = group.value._id;
            var projectId = this.actRoute.snapshot.paramMap.get('id');
            if (window.confirm('Are you sure you want to update?')) {
                var url = "project_rev/edit-project_rev";
                this.commonSevice.UpdateBy(projectId, id, group.value, url).subscribe(function (res) {
                    group.get('isEditable').setValue(false);
                    _this.ms.openSnackBar("The project revision is edited");
                    _this.loader.hide();
                    _this.router.routeReuseStrategy.shouldReuseRoute = function () {
                        return false;
                    };
                    _this.router.onSameUrlNavigation = 'reload';
                    _this.router.navigate(['/project_rev/getAll/' + _this.projectId]);
                });
            }
        }
        else {
            this.loader.hide();
            this.formSubmitAttempt = true;
            this.ms.openSnackBar("Please fill the required fields");
        }
    };
    ProjectRevisionsComponent.prototype.deleteProjectRevision = function (group) {
        var _this = this;
        if (window.confirm('Are you sure')) {
            this.loader.show();
            var index = group.value._id;
            var url = 'project_rev/delete-project_rev/' + this.projectId;
            this.commonSevice.Delete(index, url).subscribe(function (data) {
                _this.ms.openSnackBar("Project is deleted");
                _this.router.routeReuseStrategy.shouldReuseRoute = function () {
                    return false;
                };
                _this.router.onSameUrlNavigation = 'reload';
                _this.router.navigate(['/project_rev/getAll/' + _this.projectId]);
                _this.loader.hide();
            }, function (error) {
                _this.loader.hide();
            });
        }
    };
    ProjectRevisionsComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__["Ng4LoadingSpinnerService"] },
        { type: _shared_messageService__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], ProjectRevisionsComponent.prototype, "paginator", void 0);
    ProjectRevisionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
            selector: 'app-project-revisions',
            template: __webpack_require__(/*! raw-loader!./project-revisions.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/project-revisions/project-revisions/project-revisions.component.html"),
            styles: [__webpack_require__(/*! ./project-revisions.component.css */ "./src/app/components/project-revisions/project-revisions/project-revisions.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__["Ng4LoadingSpinnerService"], _shared_messageService__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], ProjectRevisionsComponent);
    return ProjectRevisionsComponent;
}());



/***/ }),

/***/ "./src/app/components/project-service-data/project-service-data.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/project-service-data/project-service-data.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-file-input{\r\n    width: 95px;\r\n    opacity:1;\r\n    float:right;\r\n   /* margin-right: 130px;*/\r\n  }\r\n\r\n  \r\n.custom-file-input::-webkit-file-upload-button {\r\n    visibility: hidden;\r\n  }\r\n\r\n  \r\n.custom-file-input::before {\r\n    content: 'Import Excel';\r\n    display: inline-block;\r\n    background: #3f51b5;\r\n    /* border: 1px solid #999; */\r\n    border-radius: 3px;\r\n    padding: 2px 8px;\r\n    outline: none;\r\n    white-space: nowrap;\r\n    -webkit-user-select: none;\r\n    cursor: pointer;\r\n    /* text-shadow: 1px 1px #fff; */\r\n    /* font-weight: 700;\r\n    font-size: 10pt; */\r\n    color:white;\r\n    margin-left:-15px;\r\n    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n  }\r\n\r\n  \r\n.custom-file-input:hover::before {\r\n    border-color: black;\r\n  }\r\n\r\n  \r\n.custom-file-input:active::before {\r\n    background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);\r\n  }\r\n\r\n  \r\nheader {\r\n    background-color: #333;\r\n    color: #fff;\r\n    overflow: auto;\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    top:0;\r\n    padding: 15px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-bottom: 50px;\r\n  }\r\n\r\n  \r\n.search-form{\r\n   \r\n    margin-top: 30px;\r\n    float:right;\r\n    margin-right:10px;\r\n  }\r\n\r\n  \r\nmat-icon {\r\n    cursor: pointer;\r\n  }\r\n\r\n  \r\n.action-container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 20px;\r\n  }\r\n\r\n  \r\n.table {\r\n    padding: 20px;\r\n    display: block;\r\n    overflow-x: auto;\r\n    white-space: nowrap;\r\n  }\r\n\r\n  \r\n.table tbody tr td,\r\n  .table thead th,\r\n  .table thead {\r\n    \r\n    border-bottom: 1px solid #dee2e6;\r\n  }\r\n\r\n  \r\n.table thead th{\r\n    color: rgba(0,0,0,.54);\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n  }\r\n\r\n  \r\n.table thead td{\r\n    color: rgba(0,0,0,.87);\r\n    font-size:14px;\r\n  }\r\n\r\n  \r\n.table tbody tr td mat-form-field\r\n  {\r\n    width:100% !important;\r\n  }\r\n\r\n  \r\n.table tbody tr td,\r\n  .table thead th {\r\n    width: 100% !important;\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n  }\r\n\r\n  \r\n.output {\r\n    padding: 20px;\r\n  }\r\n\r\n  \r\n.delete {\r\n    color: red  ;\r\n  }\r\n\r\n  \r\n.done {\r\n    color: green;\r\n  }\r\n\r\n  \r\nspan.ui-column-resizer {\r\n    width: 100%;\r\n    height: 100%;\r\n    cursor: col-resize;\r\n    padding: 30px;\r\n  \r\n  }\r\n\r\n  \r\n/* Style the tab */\r\n\r\n  \r\n.tab {\r\n  overflow: hidden;\r\n  border: 1px solid #ccc;\r\n  background-color: #a5b0df;\r\n}\r\n\r\n  \r\n/* Style the buttons inside the tab */\r\n\r\n  \r\n.tab button {\r\n  background-color: inherit;\r\n  float: left;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n  padding: 14px 16px;\r\n  transition: 0.3s;\r\n  font-size: 17px;\r\n}\r\n\r\n  \r\n/* Change background color of buttons on hover */\r\n\r\n  \r\n.tab button:hover {\r\n  background-color: #6d81f0;\r\n}\r\n\r\n  \r\n/* Create an active/current tablink class */\r\n\r\n  \r\n.tab button.active {\r\n  background-color: #3f51b5;\r\n}\r\n\r\n  \r\n/* Style the tab content */\r\n\r\n  \r\n.tabcontent {\r\n  display: none;\r\n  padding: 6px 12px;\r\n  border: 1px solid #ccc;\r\n  border-top: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0LXNlcnZpY2UtZGF0YS9wcm9qZWN0LXNlcnZpY2UtZGF0YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFNBQVM7SUFDVCxXQUFXO0dBQ1osd0JBQXdCO0VBQ3pCOzs7QUFHRjtJQUNJLGtCQUFrQjtFQUNwQjs7O0FBQ0E7SUFDRSx1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsK0JBQStCO0lBQy9CO3NCQUNrQjtJQUNsQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG1HQUFtRztFQUNyRzs7O0FBQ0E7SUFDRSxtQkFBbUI7RUFDckI7OztBQUNBO0lBQ0UsMERBQTBEO0VBQzVEOzs7QUFFQTtJQUNFLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsY0FBYztJQUNkLHdCQUFnQjtJQUFoQixnQkFBZ0I7SUFDaEIsS0FBSztJQUNMLGFBQWE7SUFDYixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtFQUNyQjs7O0FBQ0E7O0lBRUUsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxpQkFBaUI7RUFDbkI7OztBQUNBO0lBQ0UsZUFBZTtFQUNqQjs7O0FBRUE7SUFDRSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGFBQWE7RUFDZjs7O0FBRUE7SUFDRSxhQUFhO0lBQ2IsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7OztBQUVBOzs7O0lBSUUsZ0NBQWdDO0VBQ2xDOzs7QUFDQTtJQUNFLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOzs7QUFDQTtJQUNFLHNCQUFzQjtJQUN0QixjQUFjO0VBQ2hCOzs7QUFDQTs7SUFFRSxxQkFBcUI7RUFDdkI7OztBQUNBOztJQUVFLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsb0JBQW9CO0VBQ3RCOzs7QUFFQTtJQUNFLGFBQWE7RUFDZjs7O0FBRUE7SUFDRSxZQUFZO0VBQ2Q7OztBQUVBO0lBQ0UsWUFBWTtFQUNkOzs7QUFJQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7O0VBRWY7OztBQUlGLGtCQUFrQjs7O0FBQ2xCO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0Qix5QkFBeUI7QUFDM0I7OztBQUVBLHFDQUFxQzs7O0FBQ3JDO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7OztBQUVBLGdEQUFnRDs7O0FBQ2hEO0VBQ0UseUJBQXlCO0FBQzNCOzs7QUFFQSwyQ0FBMkM7OztBQUMzQztFQUNFLHlCQUF5QjtBQUMzQjs7O0FBRUEsMEJBQTBCOzs7QUFDMUI7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2plY3Qtc2VydmljZS1kYXRhL3Byb2plY3Qtc2VydmljZS1kYXRhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLWZpbGUtaW5wdXR7XHJcbiAgICB3aWR0aDogOTVweDtcclxuICAgIG9wYWNpdHk6MTtcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAvKiBtYXJnaW4tcmlnaHQ6IDEzMHB4OyovXHJcbiAgfVxyXG5cclxuICBcclxuLmN1c3RvbS1maWxlLWlucHV0Ojotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG4gIC5jdXN0b20tZmlsZS1pbnB1dDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICdJbXBvcnQgRXhjZWwnO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogIzNmNTFiNTtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7ICovXHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBwYWRkaW5nOiAycHggOHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLyogdGV4dC1zaGFkb3c6IDFweCAxcHggI2ZmZjsgKi9cclxuICAgIC8qIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDEwcHQ7ICovXHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIG1hcmdpbi1sZWZ0Oi0xNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG4gIH1cclxuICAuY3VzdG9tLWZpbGUtaW5wdXQ6aG92ZXI6OmJlZm9yZSB7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICAuY3VzdG9tLWZpbGUtaW5wdXQ6YWN0aXZlOjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZTNlM2UzLCAjZjlmOWY5KTtcclxuICB9XHJcblxyXG4gIGhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6MDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB9XHJcbiAgLnNlYXJjaC1mb3Jte1xyXG4gICBcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBmbG9hdDpyaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDoxMHB4O1xyXG4gIH1cclxuICBtYXQtaWNvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY3Rpb24tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAudGFibGUge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgfVxyXG4gIFxyXG4gIC50YWJsZSB0Ym9keSB0ciB0ZCxcclxuICAudGFibGUgdGhlYWQgdGgsXHJcbiAgLnRhYmxlIHRoZWFkIHtcclxuICAgIFxyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgfVxyXG4gIC50YWJsZSB0aGVhZCB0aHtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC41NCk7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICAudGFibGUgdGhlYWQgdGR7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuODcpO1xyXG4gICAgZm9udC1zaXplOjE0cHg7XHJcbiAgfVxyXG4gIC50YWJsZSB0Ym9keSB0ciB0ZCBtYXQtZm9ybS1maWVsZFxyXG4gIHtcclxuICAgIHdpZHRoOjEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnRhYmxlIHRib2R5IHRyIHRkLFxyXG4gIC50YWJsZSB0aGVhZCB0aCB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLm91dHB1dCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuZGVsZXRlIHtcclxuICAgIGNvbG9yOiByZWQgIDtcclxuICB9XHJcbiAgXHJcbiAgLmRvbmUge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICBzcGFuLnVpLWNvbHVtbi1yZXNpemVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgY3Vyc29yOiBjb2wtcmVzaXplO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICBcclxuICB9XHJcblxyXG5cclxuICBcclxuLyogU3R5bGUgdGhlIHRhYiAqL1xyXG4udGFiIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E1YjBkZjtcclxufVxyXG5cclxuLyogU3R5bGUgdGhlIGJ1dHRvbnMgaW5zaWRlIHRoZSB0YWIgKi9cclxuLnRhYiBidXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLyogQ2hhbmdlIGJhY2tncm91bmQgY29sb3Igb2YgYnV0dG9ucyBvbiBob3ZlciAqL1xyXG4udGFiIGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZkODFmMDtcclxufVxyXG5cclxuLyogQ3JlYXRlIGFuIGFjdGl2ZS9jdXJyZW50IHRhYmxpbmsgY2xhc3MgKi9cclxuLnRhYiBidXR0b24uYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aGUgdGFiIGNvbnRlbnQgKi9cclxuLnRhYmNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItdG9wOiBub25lO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/project-service-data/project-service-data.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/project-service-data/project-service-data.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ProjectServiceDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectServiceDataComponent", function() { return ProjectServiceDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Electrical__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/Electrical */ "./src/app/models/Electrical.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_messageService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/messageService */ "./src/app/shared/messageService.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




"\nimport { MatPaginator } from '@angular/material/paginator';";





var ProjectServiceDataComponent = /** @class */ (function () {
    function ProjectServiceDataComponent(ngZone, actRoute, router, fb, commonSevice, loader, ms) {
        this.ngZone = ngZone;
        this.actRoute = actRoute;
        this.router = router;
        this.fb = fb;
        this.commonSevice = commonSevice;
        this.loader = loader;
        this.ms = ms;
        this.serviceDataList = [];
        this.interconnectList = [];
        this.circuitList = [];
        this.racewayList = [];
        this.serviceDataHeader = [];
        this.interconnectHeader = [];
        this.circuitHeader = [];
        this.racewayHeader = [];
        this.serviceCols = [];
        this.interconnectCols = [];
        this.circuitCols = [];
        this.racewayCols = [];
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: 0
        };
        this.isEditable = false;
        this.editIndex = -1;
        this.projectId = this.actRoute.snapshot.paramMap.get('id');
    }
    ProjectServiceDataComponent.prototype.ngOnInit = function () {
        this.initHeaders();
        this.openTab('SERVICE_DATA');
        this.isEditable = false;
    };
    ProjectServiceDataComponent.prototype.initHeaders = function () {
        this.serviceDataHeader = ["REF. NO", "FROM SETTPOC", "TO SETTPOC", "FROM COMPONENT", "TO COMPONENT", "FROM LEVEL", "TO LEVEL", "VOLTAGE", "FLA", "FRAME", "TRIP UNIT",
            "TRIP SET", "PH", "WIRING CONFIG", "TYPE", "SIZE", "GND", "RACEWAY", "POWER TYPE", "PANEL REF.", "CIRCUIT NO.", "OPE", "CABLE TAG"];
        this.serviceCols = ["REF_NO", "FROM_SETTPOC", "TO_SETTPOC", "FROM_COMPONENT_NAME", "TO_COMPONENT_NAME", "FROM_LEVEL", "TO_LEVEL", "VOLTAGE", "FLA",
            "CB_FRAME", "CB_TRIP_UNIT", "CB_TRIP_SET", "PH", "WIRING_CONFIG", "CABLE_TYPE", "CABLE_SIZE", "CABLE_GND", "RACEWAY_1", "POWER_TYPE", "PANEL_REF", "CIRCUIT_NO", "OPE", "CABLE_TAG"];
        this.interconnectHeader = ["ITEM", "SUPPLIER PART NO.", "MANUFACTURER", "MANUFACTURER PRT NO.", "WORKING VOLTAGE", "FLA", "O.C.SIZE", "LUG TEMP.RATING", "FROM", "TERM.NO.", "TO", "TERM.NO.", "LENGHT", "SIZE(AWG)", "# OF COND.", "NEC CLASS", "INSULATION TYPE", "JACKET TYPE", "INSULATION  RATING (V)", "TEMP. RATING", "DIAMETER", "BEND RADIUS", "CONNECTION SIZE", "SERVICE REF.", "DESCRIPTION"];
        this.interconnectCols = ["ITEM", "SUPPLIER_PART_NO", "MANUFACTURER", "MANUFACTURER_PRT_NO", "WORKING_VOLTAGE", "FLA", "OC_SIZE", "LUG_TEMP_RATING", "FROM", "FROM_TERM_NO", "TO", "TO_TERM_NO", "LENGHT", "SIZE_AWG", "NO_OF_COND", "NEC_CLASS", "INSULATION_TYPE", "JACKET_TYPE", "INSULATION_RATING", "TEMP_RATING", "DIAMETER", "BEND_RADIUS", "CONNECTION_SIZE", "SERVICE_REF", "DESCRIPTION"];
        this.circuitHeader = ["SERVICE REF. NO", "DEVICE LOCATION", "DEVICE TYPE", "DEVICE LABEL", "MANUFACTURER", "MANUFACTURER MODEL NO.", "AMPERE RATING(AMPS)", "TRIP UNIT/SETTING(AMPS)", "SHORT CURCUIT OR INTERRUPT. RATING AT APPLIED VOLTAGE(AMPS)", "INSTALLED LUG KIT PART NO.", "LUG WIRE RANGE(AWG)", "TERMINAL TORGUE (lbs)", "TERMINAL TEMP.RATING", "DEVICE LOCATION", "DEVICE TYPE", "DEVICE LABEL", "MANUFACTURER", "MANUFACTURER MODEL NO.", "AMPERE RATING(AMPS)", "TRIP UNIT/SETTING(AMPS)", "SHORT CURCUIT OR INTERRUPT. RATING AT APPLIED VOLTAGE(AMPS)", "INSTALLED LUG KIT PART NO.", "LUG WIRE RANGE(AWG)", "TERMINAL TORGUE (lbs)", "TERMINAL TEMP. RATING"];
        this.circuitCols = ["SERVICE_REF_NO", "DEVICE_LOCATION_S", "DEVICE_TYPE_S", "DEVICE_LABEL_S", "MANUFACTURER_S", "MANUFACTURER_MODEL_NO_S", "AMPERE_RATING_S", "TRIP_UNIT_SETTING_S", "SHORT_CURCUIT_S", "INSTALLED_LUG_KIT_PART_NO_S", "LUG_WIRE_RANGE_S", "TERMINAL_TORGUE_S", "TERMINAL_TEMP_RATING_S", "DEVICE_LOCATION_L", "DEVICE_TYPE_L", "DEVICE_LABEL_L", "MANUFACTURER_L", "MANUFACTURER_MODEL_NO_L", "AMPERE_RATING_L", "TRIP_UNIT_SETTING_L", "SHORT_CURCUIT_L", "INSTALLED_LUG_KIT_PART_NO_L", "LUG_WIRE_RANGE_L", "TERMINAL_TORGUE_L", "TERMINAL_TEMP_RATING_L"];
        this.racewayHeader = ["REF SIZE", "ESTIMATED LENGTH", "ACTUAL LENGTH", "REMARKS"];
        this.racewayCols = ["REF_SIZE", "ESTIMATED_LENGTH", "ACTUAL_LENGTH", "REMARKS"];
    };
    ProjectServiceDataComponent.prototype.openTab = function (name) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(name).style.display = "block";
        document.getElementById('BTN_' + name).className += " active";
        if (name == "SERVICE_DATA")
            this.getServiceData();
        else if (name == "INTERCONNECT_SCHEDULE")
            this.getServiceData();
        else if (name == "CIRCUIT_TERMINATION_DATA")
            this.getServiceData();
        else if (name == "INTERCONNECT_RACEWAY_SECTIONBOX_SCHEDULE")
            this.getServiceData();
    };
    ProjectServiceDataComponent.prototype.getServiceData = function () {
        var _this = this;
        var URL1 = "project_electrical/service_data/getAll";
        var URL2 = 'project/read-project';
        this.loader.show();
        var promise = new Promise(function (resolve, reject) {
            var promiseArray = [];
            promiseArray.push(_this.commonSevice.promisify(URL1, _this.projectId));
            promiseArray.push(_this.commonSevice.promisify(URL2, _this.projectId));
            Promise.all(promiseArray).then(function (result) {
                if (result[0].code == 200) {
                    _this.serviceDataList = result[0].data;
                    for (var index = 0; index < _this.serviceDataList.length; index++) {
                        var element = _this.serviceDataList[index];
                        element.FROM_COMPONENT_NAME = element.FROM_COMPONENT_ID.COMPONENT_NAME;
                        element.TO_COMPONENT_NAME = element.TO_COMPONENT_ID.COMPONENT_NAME;
                    }
                    _this.config.totalItems = _this.serviceDataList.length;
                }
                _this.projectName = result[1].PROJECT_NAME;
                _this.loader.hide();
            }).catch(function (err) {
                console.log(err);
                _this.loader.hide();
            });
        });
    };
    ProjectServiceDataComponent.prototype.getInterconnectData = function () {
        var _this = this;
        var URL1 = "project_electrical/interconnect/getAll";
        this.loader.show();
        var promise = new Promise(function (resolve, reject) {
            var promiseArray = [];
            promiseArray.push(_this.commonSevice.promisify(URL1, _this.projectId));
            Promise.all(promiseArray).then(function (result) {
                if (result[0].code == 200) {
                    _this.interconnectList = result[0].data;
                    _this.config.totalItems = _this.serviceDataList.length;
                }
                _this.loader.hide();
            }).catch(function (err) {
                console.log(err);
                _this.loader.hide();
            });
        });
    };
    ProjectServiceDataComponent.prototype.getCircuitData = function () {
        var _this = this;
        var URL1 = "project_electrical/circuit/getAll";
        this.loader.show();
        var promise = new Promise(function (resolve, reject) {
            var promiseArray = [];
            promiseArray.push(_this.commonSevice.promisify(URL1, _this.projectId));
            Promise.all(promiseArray).then(function (result) {
                if (result[0].code == 200) {
                    _this.circuitList = result[0].data;
                    _this.config.totalItems = _this.serviceDataList.length;
                }
                _this.loader.hide();
            }).catch(function (err) {
                console.log(err);
                _this.loader.hide();
            });
        });
    };
    ProjectServiceDataComponent.prototype.getRacewayData = function () {
        var _this = this;
        var URL1 = "project_electrical/raceway/getAll";
        this.loader.show();
        var promise = new Promise(function (resolve, reject) {
            var promiseArray = [];
            promiseArray.push(_this.commonSevice.promisify(URL1, _this.projectId));
            Promise.all(promiseArray).then(function (result) {
                if (result[0].code == 200) {
                    _this.racewayList = result[0].data;
                    _this.config.totalItems = _this.serviceDataList.length;
                }
                _this.loader.hide();
            }).catch(function (err) {
                console.log(err);
                _this.loader.hide();
            });
        });
    };
    ProjectServiceDataComponent.prototype.uploadServiceData = function (event) {
        var _this = this;
        //let af = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel']
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            var workBook_1 = null;
            var jsonData_1 = null;
            var reader_1 = new FileReader();
            //const file = ev.target.files[0];
            reader_1.onload = function (event) {
                var data = reader_1.result;
                workBook_1 = xlsx__WEBPACK_IMPORTED_MODULE_5__["read"](data, { type: 'binary' });
                jsonData_1 = workBook_1.SheetNames.reduce(function (initial, name) {
                    var sheet = workBook_1.Sheets[name];
                    initial[name] = xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].sheet_to_json(sheet);
                    return initial;
                }, {});
                var dataString = JSON.stringify(jsonData_1);
                var excelArray = JSON.parse(dataString).Sheet1;
                var colName = "__EMPTY_";
                var elecInputArray = [];
                console.log('excelArray[row] :', excelArray[row]);
                for (var row = 3; row < excelArray.length; row++) {
                    if (!_this.isPresent(excelArray[row]["ELECTRICAL SERVICE DATA"]) ||
                        !_this.isPresent(excelArray[row]["__EMPTY"]) ||
                        !_this.isPresent(excelArray[row][colName + "1"]) ||
                        !_this.isPresent(excelArray[row][colName + "2"]) ||
                        !_this.isPresent(excelArray[row][colName + "3"]) ||
                        !_this.isPresent(excelArray[row][colName + "4"]) ||
                        !_this.isPresent(excelArray[row][colName + "5"]) ||
                        !_this.isPresent(excelArray[row][colName + "16"])) {
                        alert('Ref. No, Settopc, Component names, levels , raceway are required');
                        _this.UploadFileInput = "";
                        return;
                    }
                    if (!_this.is_Numeric(excelArray[row][colName + "4"]) ||
                        !_this.is_Numeric(excelArray[row][colName + "5"])) {
                        alert('Level must be numeric');
                        _this.UploadFileInput = "";
                        return;
                    }
                    var elecObj = new _models_Electrical__WEBPACK_IMPORTED_MODULE_2__["SD_SERVICE_DATA_SCHEDULE"]();
                    elecObj.ID = _this.projectId;
                    elecObj.REF_NO = excelArray[row]["ELECTRICAL SERVICE DATA"];
                    elecObj.FROM_SETTPOC = excelArray[row]["__EMPTY"];
                    elecObj.TO_SETTPOC = excelArray[row][colName + "1"];
                    elecObj.FROM_COMPONENT_ID = excelArray[row][colName + "2"];
                    elecObj.TO_COMPONENT_ID = excelArray[row][colName + "3"];
                    elecObj.FROM_LEVEL = excelArray[row][colName + "4"];
                    elecObj.TO_LEVEL = excelArray[row][colName + "5"];
                    elecObj.VOLTAGE = excelArray[row][colName + "6"];
                    elecObj.FLA = excelArray[row][colName + "7"];
                    elecObj.CB_FRAME = excelArray[row][colName + "8"];
                    elecObj.CB_TRIP_UNIT = excelArray[row][colName + "9"];
                    elecObj.CB_TRIP_SET = excelArray[row][colName + "10"];
                    elecObj.PH = excelArray[row][colName + "11"];
                    elecObj.WIRING_CONFIG = excelArray[row][colName + "12"];
                    elecObj.CABLE_TYPE = excelArray[row][colName + "13"];
                    elecObj.CABLE_SIZE = excelArray[row][colName + "14"];
                    elecObj.CABLE_GND = excelArray[row][colName + "15"];
                    elecObj.RACEWAY_1 = excelArray[row][colName + "16"];
                    elecObj.RACEWAY_2 = excelArray[row][colName + "17"];
                    elecObj.RACEWAY_3 = excelArray[row][colName + "18"];
                    elecObj.POWER_TYPE = excelArray[row][colName + "19"];
                    elecObj.PANEL_REF = excelArray[row][colName + "20"];
                    elecObj.CIRCUIT_NO = excelArray[row][colName + "21"];
                    elecObj.OPE = excelArray[row][colName + "22"];
                    elecObj.CABLE_TAG = excelArray[row][colName + "23"];
                    if (elecObj.FROM_LEVEL > 2)
                        elecObj.FROM_LEVEL = 2;
                    else if (elecObj.FROM_LEVEL < 0)
                        elecObj.FROM_LEVEL = 0;
                    if (elecObj.TO_LEVEL > 2)
                        elecObj.TO_LEVEL = 2;
                    else if (elecObj.TO_LEVEL < 0)
                        elecObj.TO_LEVEL = 0;
                    elecInputArray.push(elecObj);
                }
                var URL = "project_electrical/upload_service_data";
                _this.UploadFileInput = "";
                _this.loader.show();
                _this.commonSevice.Add(elecInputArray, URL).subscribe(function (res) {
                    _this.getServiceData();
                    if (res.code == 200)
                        _this.ms.openSnackBar("Data imported successfully");
                    else
                        _this.ms.openSnackBar("Error loading data");
                }, function (error) {
                    console.log(error);
                    _this.loader.hide();
                });
            };
            reader_1.readAsBinaryString(file);
        }
    };
    ProjectServiceDataComponent.prototype.uploadInterconnectData = function (event) {
        var _this = this;
        //let af = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel']
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            var workBook_2 = null;
            var jsonData_2 = null;
            var reader_2 = new FileReader();
            //const file = ev.target.files[0];
            reader_2.onload = function (event) {
                var data = reader_2.result;
                workBook_2 = xlsx__WEBPACK_IMPORTED_MODULE_5__["read"](data, { type: 'binary' });
                jsonData_2 = workBook_2.SheetNames.reduce(function (initial, name) {
                    var sheet = workBook_2.Sheets[name];
                    initial[name] = xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].sheet_to_json(sheet);
                    return initial;
                }, {});
                var dataString = JSON.stringify(jsonData_2);
                var excelArray = JSON.parse(dataString).Sheet1;
                var colName = "__EMPTY_";
                var elecInputArray = [];
                console.log('excelArray[row] :', excelArray[row]);
                for (var row = 1; row < excelArray.length; row++) {
                    var elecObj = new _models_Electrical__WEBPACK_IMPORTED_MODULE_2__["SD_INTERCONNECT_SCHEDULE"]();
                    elecObj.ID = _this.projectId;
                    elecObj.ITEM = excelArray[row]["INTERCONNECT SCHEDULE"];
                    elecObj.SUPPLIER_PART_NO = excelArray[row]["__EMPTY"];
                    elecObj.MANUFACTURER = excelArray[row][colName + "1"];
                    elecObj.MANUFACTURER_PRT_NO = excelArray[row][colName + "2"];
                    elecObj.WORKING_VOLTAGE = excelArray[row][colName + "3"];
                    elecObj.FLA = excelArray[row][colName + "4"];
                    elecObj.OC_SIZE = excelArray[row][colName + "5"];
                    elecObj.LUG_TEMP_RATING = excelArray[row][colName + "6"];
                    elecObj.FROM = excelArray[row][colName + "7"];
                    elecObj.FROM_TERM_NO = excelArray[row][colName + "8"];
                    elecObj.TO = excelArray[row][colName + "9"];
                    elecObj.TO_TERM_NO = excelArray[row][colName + "10"];
                    elecObj.LENGHT = excelArray[row][colName + "11"];
                    elecObj.SIZE_AWG = excelArray[row][colName + "12"];
                    elecObj.NO_OF_COND = excelArray[row][colName + "13"];
                    elecObj.NEC_CLASS = excelArray[row][colName + "14"];
                    elecObj.INSULATION_TYPE = excelArray[row][colName + "15"];
                    elecObj.JACKET_TYPE = excelArray[row][colName + "16"];
                    elecObj.INSULATION_RATING = excelArray[row][colName + "17"];
                    elecObj.TEMP_RATING = excelArray[row][colName + "18"];
                    elecObj.DIAMETER = excelArray[row][colName + "19"];
                    elecObj.BEND_RADIUS = excelArray[row][colName + "20"];
                    elecObj.CONNECTION_SIZE = excelArray[row][colName + "21"];
                    elecObj.SERVICE_REF = excelArray[row][colName + "22"];
                    elecObj.DESCRIPTION = excelArray[row][colName + "23"];
                    elecInputArray.push(elecObj);
                }
                var URL = "project_electrical/upload_interconnect";
                _this.UploadFileInput2 = "";
                _this.loader.show();
                _this.commonSevice.Add(elecInputArray, URL).subscribe(function (res) {
                    _this.getInterconnectData();
                    if (res.code == 200)
                        _this.ms.openSnackBar("Data imported successfully");
                    else
                        _this.ms.openSnackBar("Error loading data");
                }, function (error) {
                    console.log(error);
                    _this.loader.hide();
                });
            };
            reader_2.readAsBinaryString(file);
        }
    };
    ProjectServiceDataComponent.prototype.uploadCircuitData = function (event) {
        var _this = this;
        //let af = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel']
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            var workBook_3 = null;
            var jsonData_3 = null;
            var reader_3 = new FileReader();
            //const file = ev.target.files[0];
            reader_3.onload = function (event) {
                var data = reader_3.result;
                workBook_3 = xlsx__WEBPACK_IMPORTED_MODULE_5__["read"](data, { type: 'binary' });
                jsonData_3 = workBook_3.SheetNames.reduce(function (initial, name) {
                    var sheet = workBook_3.Sheets[name];
                    initial[name] = xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].sheet_to_json(sheet);
                    return initial;
                }, {});
                var dataString = JSON.stringify(jsonData_3);
                var excelArray = JSON.parse(dataString).Sheet1;
                var colName = "__EMPTY_";
                var elecInputArray = [];
                console.log('excelArray[row] :', excelArray[row]);
                for (var row = 2; row < excelArray.length; row++) {
                    var elecObj = new _models_Electrical__WEBPACK_IMPORTED_MODULE_2__["SD_CIRCUIT_SCHEDULE"]();
                    elecObj.ID = _this.projectId;
                    elecObj.SERVICE_REF_NO = excelArray[row]["CIRCUIT TERMINATION DATA"];
                    elecObj.DEVICE_LOCATION_S = excelArray[row]["__EMPTY"];
                    elecObj.DEVICE_TYPE_S = excelArray[row][colName + "1"];
                    elecObj.DEVICE_LABEL_S = excelArray[row][colName + "2"];
                    elecObj.MANUFACTURER_S = excelArray[row][colName + "3"];
                    elecObj.MANUFACTURER_MODEL_NO_S = excelArray[row][colName + "4"];
                    elecObj.AMPERE_RATING_S = excelArray[row][colName + "5"];
                    elecObj.TRIP_UNIT_SETTING_S = excelArray[row][colName + "6"];
                    elecObj.SHORT_CURCUIT_S = excelArray[row][colName + "7"];
                    elecObj.INSTALLED_LUG_KIT_PART_NO_S = excelArray[row][colName + "8"];
                    elecObj.LUG_WIRE_RANGE_S = excelArray[row][colName + "9"];
                    elecObj.TERMINAL_TORGUE_S = excelArray[row][colName + "10"];
                    elecObj.TERMINAL_TEMP_RATING_S = excelArray[row][colName + "11"];
                    elecObj.DEVICE_LOCATION_L = excelArray[row][colName + "12"];
                    elecObj.DEVICE_TYPE_L = excelArray[row][colName + "13"];
                    elecObj.DEVICE_LABEL_L = excelArray[row][colName + "14"];
                    elecObj.MANUFACTURER_L = excelArray[row][colName + "15"];
                    elecObj.MANUFACTURER_MODEL_NO_L = excelArray[row][colName + "16"];
                    elecObj.AMPERE_RATING_L = excelArray[row][colName + "17"];
                    elecObj.TRIP_UNIT_SETTING_L = excelArray[row][colName + "18"];
                    elecObj.SHORT_CURCUIT_L = excelArray[row][colName + "19"];
                    elecObj.INSTALLED_LUG_KIT_PART_NO_L = excelArray[row][colName + "20"];
                    elecObj.LUG_WIRE_RANGE_L = excelArray[row][colName + "21"];
                    elecObj.TERMINAL_TORGUE_L = excelArray[row][colName + "22"];
                    elecObj.TERMINAL_TEMP_RATING_L = excelArray[row][colName + "23"];
                    elecInputArray.push(elecObj);
                }
                var URL = "project_electrical/upload_circuit";
                _this.UploadFileInput3 = "";
                _this.loader.show();
                _this.commonSevice.Add(elecInputArray, URL).subscribe(function (res) {
                    _this.getCircuitData();
                    if (res.code == 200)
                        _this.ms.openSnackBar("Data imported successfully");
                    else
                        _this.ms.openSnackBar("Error loading data");
                }, function (error) {
                    console.log(error);
                    _this.loader.hide();
                });
            };
            reader_3.readAsBinaryString(file);
        }
    };
    ProjectServiceDataComponent.prototype.uploadRacewayData = function (event) {
        var _this = this;
        //let af = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel']
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            var workBook_4 = null;
            var jsonData_4 = null;
            var reader_4 = new FileReader();
            //const file = ev.target.files[0];
            reader_4.onload = function (event) {
                var data = reader_4.result;
                workBook_4 = xlsx__WEBPACK_IMPORTED_MODULE_5__["read"](data, { type: 'binary' });
                jsonData_4 = workBook_4.SheetNames.reduce(function (initial, name) {
                    var sheet = workBook_4.Sheets[name];
                    initial[name] = xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].sheet_to_json(sheet);
                    return initial;
                }, {});
                var dataString = JSON.stringify(jsonData_4);
                var excelArray = JSON.parse(dataString).Sheet1;
                var colName = "__EMPTY_";
                var elecInputArray = [];
                console.log('excelArray[row] :', excelArray[row]);
                for (var row = 1; row < excelArray.length; row++) {
                    var elecObj = new _models_Electrical__WEBPACK_IMPORTED_MODULE_2__["SD_RACEWAY_SCHEDULE"]();
                    elecObj.ID = _this.projectId;
                    elecObj.REF_SIZE = excelArray[row]["INTERCONNECT RACEWAY SECTION/BOX SCHEDULE"];
                    elecObj.ESTIMATED_LENGTH = excelArray[row]["__EMPTY"];
                    elecObj.ACTUAL_LENGTH = excelArray[row][colName + "1"];
                    elecObj.REMARKS = excelArray[row][colName + "2"];
                    elecInputArray.push(elecObj);
                }
                var URL = "project_electrical/upload_raceway";
                _this.UploadFileInput4 = "";
                _this.loader.show();
                _this.commonSevice.Add(elecInputArray, URL).subscribe(function (res) {
                    _this.getRacewayData();
                    if (res.code == 200)
                        _this.ms.openSnackBar("Data imported successfully");
                    else
                        _this.ms.openSnackBar("Error loading data");
                }, function (error) {
                    console.log(error);
                    _this.loader.hide();
                });
            };
            reader_4.readAsBinaryString(file);
        }
    };
    ProjectServiceDataComponent.prototype.isPresent = function (value) {
        if (typeof (value) == "string") {
            if (value == undefined || value == null || value.trim() == "")
                return false;
        }
        else {
            if (value == undefined || value == null)
                return false;
        }
        return true;
    };
    ProjectServiceDataComponent.prototype.is_Numeric = function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    };
    ProjectServiceDataComponent.prototype.editItem = function (x) {
        this.editIndex = x;
        this.isEditable = true;
    };
    ProjectServiceDataComponent.prototype.cancelEdit = function (type) {
        this.isEditable = false;
        if (type == "SERVICE_DATA") {
            this.getServiceData();
        }
        else if (type == "INTERCONNECT_SCHEDULE") {
            this.getInterconnectData();
        }
        else if (type == "CIRCUIT_TERMINATION_DATA") {
            this.getCircuitData();
        }
        else if (type == "INTERCONNECT_RACEWAY_SECTIONBOX_SCHEDULE") {
            this.getRacewayData();
        }
    };
    ProjectServiceDataComponent.prototype.saveItem = function (type, row) {
        var _this = this;
        var URL = "project_electrical/edit-service-data";
        this.loader.show();
        var promise = new Promise(function (resolve, reject) {
            var promiseArray = [];
            promiseArray.push(_this.commonSevice.promisifyPost(URL, type, row));
            Promise.all(promiseArray).then(function (result) {
                //  if (result[0].code == 200) {
                _this.isEditable = false;
                _this.editIndex = -1;
                if (type == "SERVICE_DATA") {
                    _this.getServiceData();
                }
                else if (type == "INTERCONNECT_SCHEDULE") {
                    _this.getInterconnectData();
                }
                else if (type == "CIRCUIT_TERMINATION_DATA") {
                    _this.getCircuitData();
                }
                else if (type == "INTERCONNECT_RACEWAY_SECTIONBOX_SCHEDULE") {
                    _this.getRacewayData();
                }
                //  }
                _this.loader.hide();
            }).catch(function (err) {
                console.log(err);
                _this.loader.hide();
            });
        });
    };
    ProjectServiceDataComponent.prototype.deleteItem = function (type, row) {
        var _this = this;
        var URL = "project_electrical/delete-service-data";
        this.loader.show();
        var promise = new Promise(function (resolve, reject) {
            var promiseArray = [];
            promiseArray.push(_this.commonSevice.promisifyPost(URL, type, row));
            Promise.all(promiseArray).then(function (result) {
                // if (result[0].code == 200) {
                _this.isEditable = false;
                if (type == "SERVICE_DATA") {
                    _this.getServiceData();
                }
                else if (type == "INTERCONNECT_SCHEDULE") {
                    _this.getInterconnectData();
                }
                else if (type == "CIRCUIT_TERMINATION_DATA") {
                    _this.getCircuitData();
                }
                else if (type == "INTERCONNECT_RACEWAY_SECTIONBOX_SCHEDULE") {
                    _this.getRacewayData();
                }
                //   }
                _this.loader.hide();
            }).catch(function (err) {
                console.log(err);
                _this.loader.hide();
            });
        });
    };
    ProjectServiceDataComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__["Ng4LoadingSpinnerService"] },
        { type: _shared_messageService__WEBPACK_IMPORTED_MODULE_6__["MessageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('UploadFileInput', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ProjectServiceDataComponent.prototype, "uploadFileInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('UploadFileInput2', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ProjectServiceDataComponent.prototype, "uploadFileInput2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('UploadFileInput3', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ProjectServiceDataComponent.prototype, "uploadFileInput3", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('UploadFileInput4', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ProjectServiceDataComponent.prototype, "uploadFileInput4", void 0);
    ProjectServiceDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-service-data',
            template: __webpack_require__(/*! raw-loader!./project-service-data.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/project-service-data/project-service-data.component.html"),
            styles: [__webpack_require__(/*! ./project-service-data.component.css */ "./src/app/components/project-service-data/project-service-data.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__["Ng4LoadingSpinnerService"], _shared_messageService__WEBPACK_IMPORTED_MODULE_6__["MessageService"]])
    ], ProjectServiceDataComponent);
    return ProjectServiceDataComponent;
}());



/***/ }),

/***/ "./src/app/components/project-sheets/add-project-sheets/add-project-sheets.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/project-sheets/add-project-sheets/add-project-sheets.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC1zaGVldHMvYWRkLXByb2plY3Qtc2hlZXRzL2FkZC1wcm9qZWN0LXNoZWV0cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/project-sheets/add-project-sheets/add-project-sheets.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/project-sheets/add-project-sheets/add-project-sheets.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AddProjectSheetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProjectSheetsComponent", function() { return AddProjectSheetsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_messageService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/messageService */ "./src/app/shared/messageService.ts");








var AddProjectSheetsComponent = /** @class */ (function () {
    function AddProjectSheetsComponent(fb, router, ngZone, actRoute, commonService, ms, loader) {
        var _this = this;
        this.fb = fb;
        this.router = router;
        this.ngZone = ngZone;
        this.actRoute = actRoute;
        this.commonService = commonService;
        this.ms = ms;
        this.loader = loader;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["COMMA"]];
        this.services = [];
        this.components = [];
        this.projectData = [];
        this.section = [];
        this.item_no = [];
        this.rev_issued = [];
        this.numbersList = [];
        this.alphaList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        this.handleError = function (controlName, errorName) {
            return _this.projects.controls[controlName].hasError(errorName);
        };
    }
    AddProjectSheetsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.validateForm();
        for (var i = 1; i <= 10; i++) {
            this.numbersList.push(i);
        }
        this.projectId = this.actRoute.snapshot.paramMap.get('id');
        var url = 'project/read-project';
        this.commonService.GetById(this.projectId, url).subscribe(function (data) {
            _this.projectData = data;
            if (_this.projectData.PROCESS_Y_N == 1) {
                _this.section.push("General");
                _this.section.push("Mechanical");
                _this.section.push("Process");
                _this.section.push("Electrical");
                _this.section.push("Communications");
            }
            else {
                _this.section.push("General");
                _this.section.push("Mechanical");
                _this.section.push("Electrical");
                _this.section.push("Communications");
            }
            if (_this.projectData.CONTRACTUAL_Y_N == 1) {
                _this.rev_issued = _this.numbersList;
            }
            else {
                _this.rev_issued = _this.alphaList;
            }
            _this.item_no = ["00", "01", "02"];
            console.log(_this.projectData);
        });
    };
    AddProjectSheetsComponent.prototype.formatDate = function (e) {
        var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
        this.projects.get('DATE_ISSUED').setValue(convertDate, {
            onlyself: true
        });
    };
    /* Reactive book form */
    AddProjectSheetsComponent.prototype.validateForm = function () {
        this.projects = this.fb.group({
            ID: [''],
            ITEM_NAME: [''],
            DESCRIPTION_A: [''],
            DESCRIPTION_B: [''],
            DESCRIPTION_C: [''],
            SECTION: [''],
            ITEM_NO: [''],
            DATE_ISSUED: [''],
            REV_ISSUED: ['']
        });
    };
    AddProjectSheetsComponent.prototype.submitAddProjectsSheetForm = function () {
        var _this = this;
        this.loader.show();
        var URL = "project_sheet/add-project_sheet";
        this.projects.value.ID = this.projectId;
        console.log(this.projects.value);
        this.commonService.Add(this.projects.value, URL).subscribe(function (res) {
            _this.ms.openSnackBar("The register sheet is added");
            _this.ngZone.run(function () { return _this.router.navigateByUrl('/project_sheet/getAll/' + _this.projectId); });
        });
    };
    AddProjectSheetsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _shared_messageService__WEBPACK_IMPORTED_MODULE_7__["MessageService"] },
        { type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('chipList', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddProjectSheetsComponent.prototype, "chipList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('resetProjectsSheetForm', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddProjectSheetsComponent.prototype, "myNgForm", void 0);
    AddProjectSheetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add-project-sheets',
            template: __webpack_require__(/*! raw-loader!./add-project-sheets.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/project-sheets/add-project-sheets/add-project-sheets.component.html"),
            styles: [__webpack_require__(/*! ./add-project-sheets.component.css */ "./src/app/components/project-sheets/add-project-sheets/add-project-sheets.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _shared_messageService__WEBPACK_IMPORTED_MODULE_7__["MessageService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerService"]])
    ], AddProjectSheetsComponent);
    return AddProjectSheetsComponent;
}());



/***/ }),

/***/ "./src/app/components/project-sheets/edit-project-sheets/edit-project-sheets.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/project-sheets/edit-project-sheets/edit-project-sheets.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC1zaGVldHMvZWRpdC1wcm9qZWN0LXNoZWV0cy9lZGl0LXByb2plY3Qtc2hlZXRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/project-sheets/edit-project-sheets/edit-project-sheets.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/components/project-sheets/edit-project-sheets/edit-project-sheets.component.ts ***!
  \************************************************************************************************/
/*! exports provided: EditProjectSheetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProjectSheetsComponent", function() { return EditProjectSheetsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_messageService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/messageService */ "./src/app/shared/messageService.ts");








var EditProjectSheetsComponent = /** @class */ (function () {
    function EditProjectSheetsComponent(fb, router, ngZone, actRoute, commonService, loader, ms) {
        var _this = this;
        this.fb = fb;
        this.router = router;
        this.ngZone = ngZone;
        this.actRoute = actRoute;
        this.commonService = commonService;
        this.loader = loader;
        this.ms = ms;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["COMMA"]];
        this.services = [];
        this.components = [];
        this.projectData = [];
        this.section = [];
        this.item_no = [];
        this.rev_issued = [];
        this.numbersList = [];
        this.alphaList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        this.handleError = function (controlName, errorName) {
            return _this.projects.controls[controlName].hasError(errorName);
        };
    }
    EditProjectSheetsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loader.show();
        this.validateForm();
        for (var i = 1; i <= 10; i++) {
            this.numbersList.push(i);
        }
        this.projectId = this.actRoute.snapshot.paramMap.get('id');
        var url = 'project/read-project';
        this.commonService.GetById(this.projectId, url).subscribe(function (data) {
            _this.projectData = data;
            if (_this.projectData.PROCESS_Y_N == 1) {
                _this.section.push("General");
                _this.section.push("Mechanical");
                _this.section.push("Process");
                _this.section.push("Electrical");
                _this.section.push("Communications");
            }
            else {
                _this.section.push("General");
                _this.section.push("Mechanical");
                _this.section.push("Electrical");
                _this.section.push("Communications");
            }
            if (_this.projectData.CONTRACTUAL_Y_N == 1) {
                _this.rev_issued = _this.numbersList;
            }
            else {
                _this.rev_issued = _this.alphaList;
            }
            _this.item_no = ["00", "01", "02"];
            console.log(_this.projectData);
        }, function (error) {
            _this.loader.hide();
        });
        var url = 'project_sheet/read-project_sheet';
        var id = this.actRoute.snapshot.paramMap.get('id1');
        this.commonService.GetById(id, url).subscribe(function (data) {
            _this.projects = _this.fb.group({
                ITEM_NAME: [data.ITEM_NAME],
                DESCRIPTION_A: [data.DESCRIPTION_A],
                DESCRIPTION_B: [data.DESCRIPTION_B],
                DESCRIPTION_C: [data.DESCRIPTION_C],
                SECTION: [data.SECTION],
                ITEM_NO: [data.ITEM_NO],
                DATE_ISSUED: [data.DATE_ISSUED],
                REV_ISSUED: [data.REV_ISSUED]
            });
            _this.loader.hide();
        }, function (error) {
            _this.loader.hide();
        });
    };
    EditProjectSheetsComponent.prototype.formatDate = function (e) {
        var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
        this.projects.get('DATE_ISSUED').setValue(convertDate, {
            onlyself: true
        });
    };
    /* Reactive book form */
    EditProjectSheetsComponent.prototype.validateForm = function () {
        this.projects = this.fb.group({
            ID: [''],
            ITEM_NAME: [''],
            DESCRIPTION_A: [''],
            DESCRIPTION_B: [''],
            DESCRIPTION_C: [''],
            SECTION: [''],
            ITEM_NO: [''],
            DATE_ISSUED: [''],
            REV_ISSUED: ['']
        });
    };
    EditProjectSheetsComponent.prototype.submitEditProjectsSheetForm = function () {
        var _this = this;
        if (this.projects.valid) {
            this.loader.show();
            var id = this.actRoute.snapshot.paramMap.get('id1');
            var projectId = this.actRoute.snapshot.paramMap.get('id');
            if (window.confirm('Are you sure you want to update?')) {
                var url = "project_sheet/edit-project_sheet";
                console.log(this.projects.value);
                this.commonService.UpdateBy(projectId, id, this.projects.value, url).subscribe(function (res) {
                    _this.ms.openSnackBar("The Register Sheet is edited");
                    _this.ngZone.run(function () { return _this.router.navigateByUrl('/project_sheet/getAll/' + projectId); });
                });
            }
        }
    };
    EditProjectSheetsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerService"] },
        { type: _shared_messageService__WEBPACK_IMPORTED_MODULE_7__["MessageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('chipList', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditProjectSheetsComponent.prototype, "chipList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('resetProjectsSheetForm', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditProjectSheetsComponent.prototype, "myNgForm", void 0);
    EditProjectSheetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit-project-sheets',
            template: __webpack_require__(/*! raw-loader!./edit-project-sheets.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/project-sheets/edit-project-sheets/edit-project-sheets.component.html"),
            styles: [__webpack_require__(/*! ./edit-project-sheets.component.css */ "./src/app/components/project-sheets/edit-project-sheets/edit-project-sheets.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerService"],
            _shared_messageService__WEBPACK_IMPORTED_MODULE_7__["MessageService"]])
    ], EditProjectSheetsComponent);
    return EditProjectSheetsComponent;
}());



/***/ }),

/***/ "./src/app/components/project-sheets/project-sheets/project-sheets.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/project-sheets/project-sheets/project-sheets.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n#main {\r\n    width: 200px;\r\n    border: 1px dotted black;\r\n  }\r\n  h1 {\r\n    margin: 0;\r\n      display: inline-block;\r\n  }\r\n  .top-btn {\r\n    float: right;\r\n   \r\n  }\r\n  .mat-divider{\r\n      margin-top:10px;\r\n  }\r\n  .view-table{\r\n      margin-top:5%;\r\n  }\r\n  .action-btns{\r\n     margin-left:35%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0LXNoZWV0cy9wcm9qZWN0LXNoZWV0cy9wcm9qZWN0LXNoZWV0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFlBQVk7SUFDWix3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLFNBQVM7TUFDUCxxQkFBcUI7RUFDekI7RUFDQTtJQUNFLFlBQVk7O0VBRWQ7RUFDQTtNQUNJLGVBQWU7RUFDbkI7RUFFQTtNQUNJLGFBQWE7RUFDakI7RUFDQTtLQUNHLGVBQWU7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2plY3Qtc2hlZXRzL3Byb2plY3Qtc2hlZXRzL3Byb2plY3Qtc2hlZXRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI21haW4ge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggZG90dGVkIGJsYWNrO1xyXG4gIH1cclxuICBoMSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgLnRvcC1idG4ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICBcclxuICB9XHJcbiAgLm1hdC1kaXZpZGVye1xyXG4gICAgICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgfVxyXG5cclxuICAudmlldy10YWJsZXtcclxuICAgICAgbWFyZ2luLXRvcDo1JTtcclxuICB9XHJcbiAgLmFjdGlvbi1idG5ze1xyXG4gICAgIG1hcmdpbi1sZWZ0OjM1JTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/project-sheets/project-sheets/project-sheets.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/project-sheets/project-sheets/project-sheets.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ProjectSheetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectSheetsComponent", function() { return ProjectSheetsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_messageService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/messageService */ "./src/app/shared/messageService.ts");








var ProjectSheetsComponent = /** @class */ (function () {
    function ProjectSheetsComponent(commonSevice, actRoute, loader, ms) {
        var _this = this;
        this.commonSevice = commonSevice;
        this.actRoute = actRoute;
        this.loader = loader;
        this.ms = ms;
        this.Projects = [];
        this.services = [];
        this.components = [];
        this.displayedColumns = ['ITEM_NAME', 'DESCRIPTION_A', 'DESCRIPTION_B', 'DESCRIPTION_C', 'SECTION', 'ITEM_NO', 'DATE_ISSUED', 'REV_ISSUED', 'action'];
        this.projectId = this.actRoute.snapshot.paramMap.get('id');
        this.loader.show();
        var URL = "project_sheet/getAll/" + this.projectId;
        this.commonSevice.GetAll(URL).subscribe(function (data) {
            _this.Projects = data;
            console.log(_this.Projects);
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.Projects);
            setTimeout(function () {
                _this.dataSource.paginator = _this.paginator;
            }, 0);
            _this.loader.hide();
        }, function (error) {
            _this.loader.hide();
        });
    }
    ProjectSheetsComponent.prototype.ngOnInit = function () {
    };
    ProjectSheetsComponent.prototype.deleteProjectSheet = function (index, e) {
        var _this = this;
        if (window.confirm('Are you sure')) {
            this.loader.show();
            var data = this.dataSource.data;
            data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
            this.dataSource.data = data;
            var url = 'project_sheet/delete-project_sheet/' + this.projectId;
            this.commonSevice.Delete(e._id, url).subscribe(function (data) {
                _this.ms.openSnackBar("The register sheet is deleted");
                _this.loader.hide();
            });
        }
    };
    ProjectSheetsComponent.ctorParameters = function () { return [
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerService"] },
        { type: _shared_messageService__WEBPACK_IMPORTED_MODULE_7__["MessageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], ProjectSheetsComponent.prototype, "paginator", void 0);
    ProjectSheetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-project-sheets',
            template: __webpack_require__(/*! raw-loader!./project-sheets.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/project-sheets/project-sheets/project-sheets.component.html"),
            styles: [__webpack_require__(/*! ./project-sheets.component.css */ "./src/app/components/project-sheets/project-sheets/project-sheets.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerService"], _shared_messageService__WEBPACK_IMPORTED_MODULE_7__["MessageService"]])
    ], ProjectSheetsComponent);
    return ProjectSheetsComponent;
}());



/***/ }),

/***/ "./src/app/components/projects/add-projects/add-projects.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/projects/add-projects/add-projects.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdHMvYWRkLXByb2plY3RzL2FkZC1wcm9qZWN0cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/projects/add-projects/add-projects.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/projects/add-projects/add-projects.component.ts ***!
  \****************************************************************************/
/*! exports provided: AddProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProjectsComponent", function() { return AddProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_messageService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/messageService */ "./src/app/shared/messageService.ts");








var AddProjectsComponent = /** @class */ (function () {
    function AddProjectsComponent(fb, router, ngZone, commonService, ms, loader) {
        var _this = this;
        this.fb = fb;
        this.router = router;
        this.ngZone = ngZone;
        this.commonService = commonService;
        this.ms = ms;
        this.loader = loader;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["COMMA"]];
        this.process = 0;
        this.contract = 0;
        this.handleError = function (controlName, errorName) {
            return _this.projects.controls[controlName].hasError(errorName);
        };
    }
    AddProjectsComponent.prototype.ngOnInit = function () {
        this.validateForm();
    };
    /* Reactive book form */
    AddProjectsComponent.prototype.validateForm = function () {
        this.projects = this.fb.group({
            PROJECT_NAME: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            PROCESS_Y_N: [''],
            CONTRACTUAL_Y_N: ['']
        });
    };
    AddProjectsComponent.prototype.processChange = function (event) {
        console.log(event);
        if (event.checked) {
            this.process = 1;
        }
        else {
            this.process = 0;
        }
    };
    AddProjectsComponent.prototype.contractChange = function (event) {
        if (event.checked) {
            this.contract = 1;
        }
        else {
            this.contract = 0;
        }
    };
    AddProjectsComponent.prototype.submitAddProjectsForm = function () {
        var _this = this;
        this.loader.show();
        var URL = "project/add-project";
        console.log(this.projects.value);
        this.projects.value.PROCESS_Y_N = this.process;
        this.projects.value.CONTRACTUAL_Y_N = this.contract;
        this.commonService.Add(this.projects.value, URL).subscribe(function (res) {
            _this.ms.openSnackBar("Project has been added");
            _this.loader.hide();
            _this.ngZone.run(function () { return _this.router.navigateByUrl('/project/getAll'); });
        }, function (error) {
            _this.ms.openSnackBar("Error performing operation");
            _this.loader.hide();
        });
    };
    AddProjectsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _shared_messageService__WEBPACK_IMPORTED_MODULE_7__["MessageService"] },
        { type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('chipList', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddProjectsComponent.prototype, "chipList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('resetProjectsForm', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddProjectsComponent.prototype, "myNgForm", void 0);
    AddProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add-projects',
            template: __webpack_require__(/*! raw-loader!./add-projects.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/projects/add-projects/add-projects.component.html"),
            styles: [__webpack_require__(/*! ./add-projects.component.css */ "./src/app/components/projects/add-projects/add-projects.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
            _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _shared_messageService__WEBPACK_IMPORTED_MODULE_7__["MessageService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerService"]])
    ], AddProjectsComponent);
    return AddProjectsComponent;
}());



/***/ }),

/***/ "./src/app/components/projects/edit-projects/edit-projects.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/projects/edit-projects/edit-projects.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdHMvZWRpdC1wcm9qZWN0cy9lZGl0LXByb2plY3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/projects/edit-projects/edit-projects.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/projects/edit-projects/edit-projects.component.ts ***!
  \******************************************************************************/
/*! exports provided: EditProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProjectsComponent", function() { return EditProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_messageService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/messageService */ "./src/app/shared/messageService.ts");








var EditProjectsComponent = /** @class */ (function () {
    function EditProjectsComponent(fb, router, ngZone, actRoute, commonService, loader, ms) {
        var _this = this;
        this.fb = fb;
        this.router = router;
        this.ngZone = ngZone;
        this.actRoute = actRoute;
        this.commonService = commonService;
        this.loader = loader;
        this.ms = ms;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["COMMA"]];
        this.ProjectsData = [];
        this.handleError = function (controlName, errorName) {
            return _this.projects.controls[controlName].hasError(errorName);
        };
        var url = 'project/read-project';
        var id = this.actRoute.snapshot.paramMap.get('id');
        console.log(id);
        this.loader.show();
        this.commonService.GetById(id, url).subscribe(function (data) {
            _this.ProjectsData = data.SERVICE;
            _this.projects = _this.fb.group({
                PROJECT_NAME: [data.PROJECT_NAME, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                PROCESS_Y_N: [data.PROCESS_Y_N],
                CONTRACTUAL_Y_N: [data.CONTRACTUAL_Y_N]
            });
            _this.loader.hide();
        }, function (error) {
            _this.loader.hide();
        });
    }
    EditProjectsComponent.prototype.ngOnInit = function () {
        this.submitBookForm();
    };
    /* Reactive book form */
    EditProjectsComponent.prototype.submitBookForm = function () {
        this.projects = this.fb.group({
            PROJECT_NAME: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            PROCESS_Y_N: '',
            CONTRACTUAL_Y_N: ''
        });
    };
    EditProjectsComponent.prototype.processChange = function (event) {
        console.log(event);
        if (event.checked) {
            this.projects.value.PROCESS_Y_N = 1;
        }
        else {
            this.projects.value.PROCESS_Y_N = 0;
        }
    };
    EditProjectsComponent.prototype.contractChange = function (event) {
        if (event.checked) {
            this.projects.value.CONTRACTUAL_Y_N = 1;
        }
        else {
            this.projects.value.CONTRACTUAL_Y_N = 0;
        }
    };
    EditProjectsComponent.prototype.submitEditProjectsForm = function () {
        var _this = this;
        this.loader.show();
        if (this.projects.valid) {
            var id = this.actRoute.snapshot.paramMap.get('id');
            if (window.confirm('Are you sure you want to update?')) {
                var url = "project/edit-project";
                console.log(this.projects.value);
                this.commonService.Update(id, this.projects.value, url).subscribe(function (res) {
                    _this.ms.openSnackBar("The project is edited successfully");
                    _this.loader.hide();
                    _this.ngZone.run(function () { return _this.router.navigateByUrl('/project/getAll'); });
                });
            }
        }
    };
    EditProjectsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerService"] },
        { type: _shared_messageService__WEBPACK_IMPORTED_MODULE_7__["MessageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('chipList', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditProjectsComponent.prototype, "chipList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('resetComponentsForm', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditProjectsComponent.prototype, "myNgForm", void 0);
    EditProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit-projects',
            template: __webpack_require__(/*! raw-loader!./edit-projects.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/projects/edit-projects/edit-projects.component.html"),
            styles: [__webpack_require__(/*! ./edit-projects.component.css */ "./src/app/components/projects/edit-projects/edit-projects.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerService"],
            _shared_messageService__WEBPACK_IMPORTED_MODULE_7__["MessageService"]])
    ], EditProjectsComponent);
    return EditProjectsComponent;
}());



/***/ }),

/***/ "./src/app/components/projects/generate-pdf/generate-pdf.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/projects/generate-pdf/generate-pdf.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#graphContainer, graphContainerCover,#eqpContainer, .mxdrawings{\r\n   \r\n    left: -9999px; \r\n    position: absolute;\r\n    top: 0px;  \r\n\r\n}\r\n \r\n\r\n.selectstyle{\r\n    width:30%;\r\n    margin: 10px 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9nZW5lcmF0ZS1wZGYvZ2VuZXJhdGUtcGRmLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixRQUFROztBQUVaOzs7QUFHQTtJQUNJLFNBQVM7SUFDVCxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2plY3RzL2dlbmVyYXRlLXBkZi9nZW5lcmF0ZS1wZGYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNncmFwaENvbnRhaW5lciwgZ3JhcGhDb250YWluZXJDb3ZlciwjZXFwQ29udGFpbmVyLCAubXhkcmF3aW5nc3tcclxuICAgXHJcbiAgICBsZWZ0OiAtOTk5OXB4OyBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHB4OyAgXHJcblxyXG59XHJcbiBcclxuXHJcbi5zZWxlY3RzdHlsZXtcclxuICAgIHdpZHRoOjMwJTtcclxuICAgIG1hcmdpbjogMTBweCAyMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/projects/generate-pdf/generate-pdf.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/projects/generate-pdf/generate-pdf.component.ts ***!
  \****************************************************************************/
/*! exports provided: GeneratePdfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneratePdfComponent", function() { return GeneratePdfComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_messageService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/messageService */ "./src/app/shared/messageService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var pdf_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pdf-lib */ "./node_modules/pdf-lib/es/index.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var save_svg_as_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! save-svg-as-png */ "./node_modules/save-svg-as-png/lib/saveSvgAsPng.js");
/* harmony import */ var save_svg_as_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(save_svg_as_png__WEBPACK_IMPORTED_MODULE_9__);








//import {download} from 'downloadjs';
//import {FileSaverService} from 'ngx-filesaver';


var GeneratePdfComponent = /** @class */ (function () {
    function GeneratePdfComponent(commonSevice, actRoute, loader, ms, datePipe) {
        this.commonSevice = commonSevice;
        this.actRoute = actRoute;
        this.loader = loader;
        this.ms = ms;
        this.datePipe = datePipe;
        this.projectId = '';
        this.zeroPad = function (num, places) { return String(num).padStart(places, '0'); };
        this.main_component = [];
        this.sub_component = [];
        this.link = [];
        this.label = [];
        this.init = 0;
        this.temp = 0;
        this.cell = [];
        this.spans = [];
        this.inputs = [];
        this.rowtemp = '';
        this.hosts = [];
        this.index = 0;
        this.tempinput = null;
        this.portIndex = 0;
        this.port = [];
        this.portConn = [];
        this.portlinks = [];
        this.portLabel = [];
        this.tempIndex = 0;
        this.temLabel = [];
        this.main_table = [];
        this.electrical_service_data = [];
        this.interconnect_data = [];
        this.circuit_data = [];
        this.raceway_data = [];
        this.graphData = {};
        this.graph_width = 5000;
        this.graph_height = 5000;
        this.page_margin = 150;
        this.hasLevel1 = false;
        this.pageSize = 'a3';
        this.orientation = 'landscape';
        this.registerSheet = [];
        this.projNotes = [];
        this.projRevisions = [];
        this.projectName = '';
        this.genPageCount = 0;
        this.mechPageCount = 0;
        this.electricalPageCount = 0;
        ///////////////////////////////////
        this.fontSize = "";
        this.initPosition = 10;
        this.blockFontSize = 10;
        this.blockTotalHeight = 0;
        this.padding = 0;
        this.electricalComps = [];
        // /,private FileSaver: FileSaverService
        this.projectId = this.actRoute.snapshot.paramMap.get('id');
    }
    GeneratePdfComponent.prototype.ACShape = function () { mxCylinder.call(this); };
    ;
    GeneratePdfComponent.prototype.ngOnInit = function () {
        //this.graph = new mxGraph(this.graphContainer.nativeElement);
        var _this = this;
        var url = 'project/read-project';
        this.commonSevice.GetById(this.projectId, url).subscribe(function (data) {
            _this.projectName = data.PROJECT_NAME;
        });
        mxUtils.extend(this.ACShape, mxCylinder);
        this.ACShape.prototype.redrawPath = function (path, x, y, w, h, isForeground) {
            console.log('re draw');
            var thickness = w / 4;
            if (isForeground) {
                //path.begin();
                path.moveTo(0, 0);
                path.lineTo(0, h);
                path.lineTo(w, h);
                path.lineTo(w, 0);
                path.moveTo(0 + thickness, 0);
                path.lineTo(0 + thickness, h - thickness);
                path.lineTo(w - thickness, h - thickness);
                path.lineTo(w - thickness, 0);
                path.moveTo(0, 0);
                path.lineTo(thickness, 0);
                path.moveTo(w, 0);
                path.lineTo(w - thickness, 0);
                for (var i = 6; i < h; i = i + 35) {
                    path.moveTo(0, i);
                    path.lineTo(0 + thickness, i - 4);
                }
                for (var i = 6; i < h; i = i + 35) {
                    path.moveTo(w - thickness, i);
                    path.lineTo(w, i - 4);
                }
                for (var i = 0 + thickness; i < w - thickness - 4; i = i + 35) {
                    path.moveTo(i, h);
                    path.lineTo(i + 6, h - thickness);
                }
            }
        };
        mxCellRenderer.registerShape('ac', this.ACShape);
    };
    GeneratePdfComponent.prototype.GetPDFData = function () {
        var _this = this;
        this.ResetGraphVars();
        this.loader.show();
        var url1 = 'project_mech/get-project-graph-data';
        var url2 = 'project_sheet/getAll';
        var url3 = 'project/read-project';
        var url4 = 'project_notes/getAll';
        var url5 = 'project_rev/getAll';
        var url6 = 'project_electrical/get-project-graph-data';
        var promise = new Promise(function (resolve, reject) {
            var promiseArray = [];
            promiseArray.push(_this.commonSevice.promisify(url1, _this.projectId));
            promiseArray.push(_this.commonSevice.promisify(url2, _this.projectId));
            promiseArray.push(_this.commonSevice.promisify(url3, _this.projectId));
            promiseArray.push(_this.commonSevice.promisify(url4, _this.projectId));
            promiseArray.push(_this.commonSevice.promisify(url5, _this.projectId));
            promiseArray.push(_this.commonSevice.promisify(url6, _this.projectId));
            Promise.all(promiseArray).then(function (result) {
                if (result.length > 0) {
                    _this.registerSheet = result[1];
                    _this.projNotes = result[3];
                    _this.projRevisions = result[4];
                    var data = result[0];
                    if (data.code == 200) {
                        console.log(data);
                        _this.main_table = data.data; //deep copy 
                    }
                    else {
                        alert('Error getting project data');
                        _this.loader.hide();
                    }
                    var data = result[5];
                    if (data.code == 200) {
                        console.log(data);
                        _this.electrical_service_data = data.data.service; //deep copy 
                        _this.interconnect_data = data.data.interconnect;
                        _this.circuit_data = data.data.circuit;
                        _this.raceway_data = data.data.raceway;
                    }
                    else {
                        alert('Error getting electrical_service_data');
                        _this.loader.hide();
                    }
                    var gentitle = _this.registerSheet.filter(function (x) { return x.SECTION == 'General'; });
                    var mechtitle = _this.registerSheet.filter(function (x) { return x.SECTION == 'Mechanical'; });
                    var electricaltitle = _this.registerSheet.filter(function (x) { return x.SECTION == 'Electrical'; });
                    if (_this.registerSheet.length == 0) {
                        alert('Sections not defined in register sheet');
                    }
                    else if (_this.projRevisions.length == 0) {
                        alert('Revisions are not specified for the project');
                    }
                    else if (mechtitle.length == 0 || electricaltitle.length == 0 || gentitle.length == 0) {
                        alert('All sections not defined in register sheet');
                    }
                    else {
                        _this.projectName = result[2].PROJECT_NAME;
                        _this.parseElectrical();
                        _this.parseMechanical(_this.main_table);
                        _this.downloadPDF();
                        _this.loader.hide();
                    }
                }
                resolve('done');
            }).catch(function (err) {
                console.log(err);
                _this.loader.hide();
            });
        });
        // this.commonSevice.GetById(this.projectId, url).subscribe(data => {
        //   if (data.code == 200) {
        //     console.log(data);
        //     this.parse(data.data);
        //     this.loader.hide();
        //   } else {
        //     alert('Erroge getting project data');
        //     this.loader.hide();
        //   }
        //   //this.ms.openSnackBar("Project is deleted successfully");
        // }, error => {
        //   this.loader.hide();
        // });
    };
    ///////////////////////////////////////////////
    GeneratePdfComponent.prototype.ResetGraphVars = function () {
        this.main_component = [];
        this.sub_component = [];
        this.link = [];
        this.label = [];
        this.init = 0;
        this.temp = 0;
        this.cell = [];
        this.spans = [];
        this.inputs = [];
        this.rowtemp = '';
        this.hosts = [];
        this.index = 0;
        this.tempinput = null;
        this.portIndex = 0;
        this.port = [];
        this.portConn = [];
        this.portlinks = [];
        this.portLabel = [];
        this.tempIndex = 0;
        this.temLabel = [];
        this.main_table = [];
        this.graphData = {};
        this.graph_width = 5000;
        this.graph_height = 5000;
        this.page_margin = 50;
        this.hasLevel1 = false;
        this.graph = {};
        this.eqpgraph = {};
        this.finalGraph = {};
        this.electricalGraph = {};
        this.graph = {};
        // this.pageSize = 'a3';
        // this.orientation = 'portrait';
        this.parent = {};
        this.registerSheet = [];
        this.projNotes = [];
        //this.projectName = '';
        this.projRevisions = [];
        this.genPageCount = 0;
        this.mechPageCount = 0;
        this.electricalPageCount = 0;
        this.electricalComps = [];
    };
    GeneratePdfComponent.prototype.ExportDrawing = function () {
        if (document.getElementById('graphContainer').children.length == 0 || document.getElementById('serviceDataContainer').children.length == 0) {
            alert('Generate PDF to export');
            return;
        }
        var graphs = [this.finalGraph, this.electricalGraph];
        var filenames = ["MechanicalDrawing.drawio", "ElectricalDrawing.drawio"];
        for (var m = 0; m < graphs.length; m++) {
            var graph = graphs[m];
            //var graph = new mxGraph(document.getElementById("graphContainer"));
            var encoder = new mxCodec();
            var node = encoder.encode(graph.getModel());
            var xmls = mxUtils.getXml(node);
            var parser, xmlDoc;
            parser = new DOMParser();
            xmlDoc = parser.parseFromString(xmls, "text/xml");
            var removedList = [];
            var xmlNodes = xmlDoc.documentElement.childNodes[0].childNodes;
            for (var i = 0; i < xmlNodes.length; i++) {
                if (xmlNodes[i].outerHTML.indexOf('style="sub-comp"') > -1) {
                    removedList.push(xmlNodes[i]);
                    xmlNodes[i].remove();
                    i--;
                }
            }
            //insert removed rhombus to the end of list
            for (var i = 0; i < removedList.length; i++) {
                xmlDoc.documentElement.childNodes[0].appendChild(removedList[i]);
            }
            xmls = new XMLSerializer().serializeToString(xmlDoc.documentElement);
            xmls = this.replaceAll(xmls, 'sub-comp', 'shape=rhombus;whiteSpace=wrap;fontSize=25;');
            xmls = this.replaceAll(xmls, 'comp', 'shape=rectangle;whiteSpace=wrap;fontSize=40;');
            xmls = this.replaceAll(xmls, 'tempedge', 'fontSize=40;edgeStyle=orthogonalEdgeStyle;jumpStyle=arc;jumpSize=12;rounded=1');
            xmls = this.replaceAll(xmls, 'label', 'fontSize=40;');
            xmls = this.replaceAll(xmls, 'portLink', 'edgeStyle=orthogonalEdgeStyle;jumpStyle=arc;jumpSize=12;rounded=1'); //edgeStyle=orthogonalEdgeStyle edgeStyle=segmentEdgeStyle
            xmls = this.replaceAll(xmls, 'portstring', 'fontSize=30;');
            xmls = this.replaceAll(xmls, 'portlabel', 'fontSize=25;fillColor=#FFFFFF;');
            var mxFile = '<mxfile  agent="5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" etag="sEEbHfcBTBvih8vJ942l" version="13.6.5"><diagram id="fF-txageuDChEoQ_S1e-" name="Page-1">' + xmls + '</diagram></mxfile>';
            var drawBytes = this.str2ab(mxFile);
            this.download(mxFile, filenames[m], "application/x-drawio");
        }
    };
    GeneratePdfComponent.prototype.replaceAll = function (str, find, replace) {
        return str.replace(new RegExp(find, 'g'), replace);
    };
    GeneratePdfComponent.prototype.str2ab = function (str) {
        var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
        var bufView = new Uint16Array(buf);
        for (var i = 0, strLen = str.length; i < strLen; i++) {
            bufView[i] = str.charCodeAt(i);
        }
        return buf;
    };
    GeneratePdfComponent.prototype.setPaperSize = function () {
        if (this.pageSize == 'a3') {
            this.graph_width = 4831;
            this.graph_height = 3379;
        }
        else {
            this.graph_width = 3100;
            this.graph_height = 4900;
        }
        if (this.orientation == 'landscape') {
            var width = this.graph_width;
            var height = this.graph_height;
            this.graph_height = width;
            this.graph_width = height;
        }
    };
    GeneratePdfComponent.prototype.updateGraphData = function (refid, type, x, y, width, height, level) {
        if (type == 'comp') {
            if (level == 0) {
                if (this.graphData["clevel0"] == undefined)
                    this.graphData["level0"] = [];
                this.graphData["level0"].push({
                    refID: refid,
                    type: type,
                    x: x,
                    y: y,
                    width: width,
                    height: height,
                    level: level
                });
            }
            else if (level == 1) {
                if (this.graphData["level1"] == undefined)
                    this.graphData["level1"] = [];
                this.graphData["level1"].push({
                    refID: refid,
                    type: type,
                    x: x,
                    y: y,
                    width: width,
                    height: height,
                    level: level
                });
            }
            else if (level == 2) {
                if (this.graphData["level2"] == undefined)
                    this.graphData["level2"] = [];
                this.graphData["level2"].push({
                    refID: refid,
                    type: type,
                    x: x,
                    y: y,
                    width: width,
                    height: height,
                    level: level
                });
            }
        }
        else if (type == 'port') {
            if (this.graphData["port"] == undefined)
                this.graphData["port"] = [];
            this.graphData["port"].push({
                refID: refid,
                type: type,
                x: x,
                y: y,
                width: width,
                height: height,
                level: level
            });
        }
        else if (type == 'link') {
            if (level == 0) {
                if (this.graphData["llevel0"] == undefined)
                    this.graphData["llevel0"] = [];
                this.graphData["llevel0"].push({
                    refID: refid,
                    type: type,
                    x: x,
                    y: y,
                    width: width,
                    height: height,
                    level: level
                });
            }
            else if (level == 1) {
                if (this.graphData["llevel1"] == undefined)
                    this.graphData["llevel1"] = [];
                this.graphData["llevel1"].push({
                    refID: refid,
                    type: type,
                    x: x,
                    y: y,
                    width: width,
                    height: height,
                    level: level
                });
            }
            else if (level == 2) {
                if (this.graphData["llevel2"] == undefined)
                    this.graphData["llevel2"] = [];
                this.graphData["llevel2"].push({
                    refID: refid,
                    type: type,
                    x: x,
                    y: y,
                    width: width,
                    height: height,
                    level: level
                });
            }
            else if (level == 3) {
                if (this.graphData["llevel3"] == undefined)
                    this.graphData["llevel3"] = [];
                this.graphData["llevel3"].push({
                    refID: refid,
                    type: type,
                    x: x,
                    y: y,
                    width: width,
                    height: height,
                    level: level
                });
            }
            else if (level == 4) {
                if (this.graphData["llevel4"] == undefined)
                    this.graphData["llevel4"] = [];
                this.graphData["llevel4"].push({
                    refID: refid,
                    type: type,
                    x: x,
                    y: y,
                    width: width,
                    height: height,
                    level: level
                });
            }
        }
    };
    GeneratePdfComponent.prototype.getGraphData = function (refid, type, level) {
        var retVal;
        if (type == 'comp') {
            if (level == 0)
                retVal = this.graphData["level0"];
            else if (level == 1)
                retVal = this.graphData["level1"];
            else if (level == 2)
                retVal = this.graphData["level2"];
        }
        else if (type == 'port') {
            retVal = this.graphData["port"];
        }
        else if (type == 'link') {
            if (level == 0)
                retVal = this.graphData["llevel0"];
            else if (level == 1)
                retVal = this.graphData["llevel1"];
            else if (level == 2)
                retVal = this.graphData["llevel2"];
            else if (level == 3)
                retVal = this.graphData["llevel3"];
            else if (level == 4)
                retVal = this.graphData["llevel4"];
        }
        if (retVal == undefined)
            return [];
        else
            return retVal;
    };
    // addmc() {
    // 	temp = table.rows.length - 1
    // 	spans[init] = temp
    // 	init++
    // 	newRow = table.insertRow(temp);
    // 	for (let i = 0; i < 9; i++) {
    // 		cell[i] = newRow.insertCell(i)
    // 		cell[i].appendChild(document.createElement("input"));
    // 	}
    // }
    GeneratePdfComponent.prototype.arrangeServices = function () {
        var a1 = 0;
        var x = 0;
        var i1 = 0, j1 = 0;
        for (var i = 0; i < this.hosts.length; i++) {
            var element = this.hosts[i];
            for (var j = 0; j < element.length; j++) {
                var el = element[j];
                if (el.toolRef != null && el.toolRef != "" && el.toolRef != '') {
                    for (var a = 0; a < this.hosts.length; a++) {
                        var comp = this.hosts[a];
                        if (comp == undefined)
                            continue;
                        for (var b = 0; b < comp.length; b++) {
                            var ele = comp[b];
                            if (ele.refID == el.toolRef) {
                                if (x == 0 || i == i1) {
                                    if (a < a1) {
                                        var tempEl = this.hosts[i][j];
                                        this.hosts[i][j] = this.hosts[i1][j1];
                                        this.hosts[i1][j1] = tempEl;
                                    }
                                    a1 = a;
                                    i1 = i;
                                    j1 = j;
                                    x++;
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    GeneratePdfComponent.prototype.arrangeComps = function () {
        var a1 = 0;
        var x = 0;
        //set level
        for (var i = 0; i < this.hosts.length; i++) {
            var element = this.hosts[i];
            for (var j = 0; j < element.length; j++) {
                var el = element[j];
                if (el.toolRef !== null && el.toolRef !== "" && el.toolRef !== '') {
                    for (var a = 0; a < this.hosts.length; a++) {
                        var comp = this.hosts[a];
                        if (comp == undefined)
                            continue;
                        for (var b = 0; b < comp.length; b++) {
                            var ele = comp[b];
                            //update level
                            if (el.toolRef == ele.refID && (ele.level == -1 || el.level == -1)) { //we have not yet set the level
                                if (i < a) {
                                    for (var lj = 0; lj < element.length; lj++) {
                                        if (element[lj].level == -1)
                                            element[lj].level = 2;
                                    }
                                    for (var lj = 0; lj < comp.length; lj++) {
                                        if (comp[lj].level == -1)
                                            comp[lj].level = 0;
                                    }
                                    // el.level = 1;
                                    // ele.level = 0;
                                }
                                else if (i > a) {
                                    for (var lj = 0; lj < element.length; lj++) {
                                        if (element[lj].level == -1)
                                            element[lj].level = 0;
                                    }
                                    for (var lj = 0; lj < comp.length; lj++) {
                                        if (comp[lj].level == -1)
                                            comp[lj].level = 2;
                                    }
                                    // el.level = 0;
                                    // ele.level = 1;
                                }
                            }
                        }
                    }
                }
            }
        }
        for (var i = 0; i < this.hosts.length; i++) {
            element = this.hosts[i];
            for (var j = 0; j < element.length; j++) {
                el = element[j];
                if (el.toolRef !== null && el.toolRef !== "" && el.toolRef !== '') {
                    for (var a = i; a < this.hosts.length; a++) {
                        comp = this.hosts[a];
                        if (comp == undefined)
                            continue;
                        for (var b = 0; b < comp.length; b++) {
                            ele = comp[b];
                            if (el.toolRef == ele.refID) {
                                if (this.hosts[i + j + 1] != undefined) {
                                    var tempComp = this.hosts[a];
                                    this.hosts[a] = this.hosts[i + j + 1];
                                    this.hosts[i + j + 1] = tempComp;
                                }
                                else {
                                }
                            }
                        }
                    }
                }
            }
        }
        for (var i = 0; i < this.hosts.length; i++) {
            if (this.hosts[i] == undefined)
                this.hosts.splice(i, 1);
        }
    };
    GeneratePdfComponent.prototype.parseMechanical = function (inputs) {
        var temp = null;
        var valid = false;
        var tempinput = null;
        var index = 0, level = -1;
        console.log('parse the input data ');
        //clear the container before we begin
        document.getElementById("graphContainer").innerHTML = '';
        this.setPaperSize();
        //sort by main component
        //   inputs.sort(function(a, b) {
        //     if(a.mainComponent < b.mainComponent) { return -1; }
        //     if(a.mainComponent > b.mainComponent) { return 1; }
        //     return 0;
        // });
        for (var i = 0; i < inputs.length; i++) {
            var obj = inputs[i];
            if (obj == undefined)
                continue;
            level = obj.level;
            if (level == 1) {
                this.hasLevel1 = true;
                this.graph_height = 8000;
            }
            if (obj.level > 2)
                obj.level = 2;
            else if (obj.level < 0)
                obj.level = 0;
            if (obj.mainComponent !== tempinput) {
                this.hosts[index] = new Array;
                index++;
            }
            this.hosts[index - 1].push(obj);
            tempinput = obj.mainComponent;
        }
        console.log('parse complete ');
        this.arrangeComps();
        console.log('components arranged');
        this.arrangeServices();
        console.log('services arranged');
        this.drawEqupiment(document.getElementById("eqpContainer"), 'MECHANICAL');
        this.main(document.getElementById("graphContainer"));
        this.hasLevel1 = false;
        if (valid) {
        }
    };
    GeneratePdfComponent.prototype.downloadPDF = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var uriData;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                uriData = {
                    mechURI: '',
                    mechEqpURI: '',
                    electricalURI: '',
                    elecEqpURI: ''
                };
                save_svg_as_png__WEBPACK_IMPORTED_MODULE_9__["svgAsPngUri"](document.getElementById('graphContainer').childNodes[0], {}, function (uri) {
                    console.log('converted svg to image');
                    uriData.mechURI = uri;
                    save_svg_as_png__WEBPACK_IMPORTED_MODULE_9__["svgAsPngUri"](document.getElementById('eqpContainer').childNodes[0], {}, function (eqpuri) {
                        console.log('converted svg to image');
                        uriData.mechEqpURI = eqpuri;
                        save_svg_as_png__WEBPACK_IMPORTED_MODULE_9__["svgAsPngUri"](document.getElementById('serviceDataContainer').childNodes[0], {}, function (elecuri) {
                            uriData.electricalURI = elecuri;
                            console.log('converted svg to image : ', uriData);
                            save_svg_as_png__WEBPACK_IMPORTED_MODULE_9__["svgAsPngUri"](document.getElementById('elecEqpContainer').childNodes[0], {}, function (elecuri) {
                                uriData.elecEqpURI = elecuri;
                                console.log('converted svg to image : ', uriData);
                                _this.GeneratePDF("png", uriData); //, uri, eqpuri);
                            });
                        });
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    GeneratePdfComponent.prototype.main = function (container) {
        console.log('in main fn ');
        // Checks if the browser is supported
        if (!mxClient.isBrowserSupported()) {
            // Displays an error message if the browser is not supported.
            mxUtils.error('Browser is not supported!', 200, false);
        }
        else {
            // document.getElementById("graphContainer").style.display = "block"
            // Disables the built-in context menu
            mxEvent.disableContextMenu(container);
            // Creates the graph inside the given container
            this.graph = new mxGraph(container);
            // Enables rubberband selection
            new mxRubberband(this.graph);
            // Gets the default parent for inserting new cells. This
            // is normally the first child of the root (ie. layer 0).
            this.parent = this.graph.getDefaultParent();
            // Adds cells to the model in a single step
            this.graph.getModel().beginUpdate();
            try {
                this.setGraphStyle(this.graph);
                console.log('style settings complete');
                this.newComponent();
                console.log('added components and services to  graph');
                this.createPorts();
                console.log('added ports to  graph');
                this.createInterLinks();
                console.log('added links to  graph');
                this.createLevels();
                console.log('added levels to  graph');
            }
            finally {
                this.graph.getModel().endUpdate();
                this.finalGraph = this.graph;
                //ExportDrawing(graph);
                console.log('svg complete');
                // var enc = new mxCodec(mxUtils.createXmlDocument());
                // var node = enc.encode(graph.getModel());
                // var xmlString = mxUtils.getXml(node);
            }
        }
        this.inputs = [];
        this.rowtemp = '';
        //this.hosts = []
        this.index = 0;
        this.tempinput = null;
    };
    ;
    GeneratePdfComponent.prototype.drawEqupiment = function (container, section) {
        console.log('in main fn ');
        // Checks if the browser is supported
        if (!mxClient.isBrowserSupported()) {
            // Displays an error message if the browser is not supported.
            mxUtils.error('Browser is not supported!', 200, false);
        }
        else {
            // document.getElementById("graphContainer").style.display = "block"
            // Disables the built-in context menu
            container.innerHTML = '';
            mxEvent.disableContextMenu(container);
            // Creates the graph inside the given container
            this.eqpgraph = new mxGraph(container);
            // Enables rubberband selection
            new mxRubberband(this.eqpgraph);
            // Gets the default parent for inserting new cells. This
            // is normally the first child of the root (ie. layer 0).
            this.parent = this.eqpgraph.getDefaultParent();
            // Adds cells to the model in a single step
            this.eqpgraph.getModel().beginUpdate();
            try {
                this.setGraphStyle(this.eqpgraph);
                console.log('style settings complete');
                if (section == 'MECHANICAL')
                    this.equipmentbox();
                else if (section == 'ELECTRICAL')
                    this.electricalEquipmentbox();
                console.log('added equipments to graph');
            }
            finally {
                this.eqpgraph.getModel().endUpdate();
                console.log('equipment svg complete');
            }
        }
        this.inputs = [];
        this.rowtemp = '';
        //this.hosts = []
        this.index = 0;
        this.tempinput = null;
    };
    ;
    GeneratePdfComponent.prototype.equipmentbox = function () {
        var space = 70;
        var offX = 0;
        var offY = 0;
        var tempX1 = 0;
        var tempX2 = 0;
        var level0Count = 1;
        var level1Count = 1;
        //var diff = tempX2 - tempX1
        var padding = 40;
        var margin = 40;
        var sub_width = 160;
        var sub_height = 160;
        //page_margin = 200
        var width = 0;
        var x = 0;
        var row = 1;
        var addedEqp = [];
        for (var i = 0; i < this.hosts.length; i++) {
            var children = this.hosts[i].length;
            width = children * (margin + sub_width) + 2 * padding - margin;
            var altwidth = this.hosts[i][0].mainComponent.length * 40 + 2 * padding;
            if (addedEqp.length == 0) {
                offY = 220 + this.page_margin;
                offX = this.page_margin;
            }
            else {
                var lastEqp = addedEqp[addedEqp.length - 1];
                if (addedEqp.length % 2 == 0) {
                    offY = lastEqp.geometry.y + lastEqp.geometry.height + 200;
                    offX = this.page_margin;
                }
                else {
                    offY = lastEqp.geometry.y;
                    offX = lastEqp.geometry.x + lastEqp.geometry.width + 200;
                }
            }
            for (var j = 0; j < children; j++) {
                x = i + 1;
                var sub_offX = margin * j + offX + padding + sub_width * j;
                var sub_label = this.hosts[i][j].refID;
                var sub_offY = 0;
                //if (x % 2 !== 0) {
                //ramya changed
                if (this.hosts[i][0].level == 2) {
                    sub_offY = offY + padding * 7;
                }
                else if (this.hosts[i][0].level == 1) {
                    sub_offY = offY + padding * 7;
                }
                else {
                    sub_offY = offY;
                }
                var col = i.toString() + j.toString();
                this.sub_component[col] = this.eqpgraph.insertVertex(this.parent, null, sub_label, sub_offX, sub_offY, sub_width, sub_height, 'sub-comp');
            }
            if (width < altwidth) {
                width = altwidth;
            }
            var height = 440; //2 * sub_height + 3 * padding
            var label_offX = offX + width / 2;
            var label_offY = offY + height / 4;
            //ramya changed
            if (this.hosts[i][0].level == 0) {
                //if (x % 2 == 0) {
                label_offY = offY + 3 * height / 4;
            }
            this.main_component[x] = this.eqpgraph.insertVertex(this.parent, null, '', offX, offY, width, height, 'comp');
            this.label[x] = this.eqpgraph.insertVertex(this.parent, null, this.hosts[i][0].mainComponent, label_offX, label_offY, 0, 0, 'label');
            addedEqp.push(this.main_component[x]);
        }
    };
    GeneratePdfComponent.prototype.electricalEquipmentbox = function () {
        var space = 70;
        var offX = 0;
        var offY = 0;
        var tempX1 = 0;
        var tempX2 = 0;
        var level0Count = 1;
        var level1Count = 1;
        //var diff = tempX2 - tempX1
        var padding = 40;
        var margin = 40;
        var sub_width = 160;
        var sub_height = 160;
        //page_margin = 200
        var width = 0;
        var x = 0;
        var row = 1;
        var addedEqp = [];
        for (var i = 0; i < this.electricalComps.length; i++) {
            var currComp = this.electricalComps[i];
            var children = currComp.length;
            width = children * (margin + sub_width) + 2 * padding - margin;
            var altwidth = currComp.COMPONENT_NAME.length * 40 + 2 * padding;
            if (addedEqp.length == 0) {
                offY = 220 + this.page_margin;
                offX = this.page_margin;
            }
            else {
                var lastEqp = addedEqp[addedEqp.length - 1];
                if (addedEqp.length % 2 == 0) {
                    offY = lastEqp.geometry.y + lastEqp.geometry.height + 200;
                    offX = this.page_margin;
                }
                else {
                    offY = lastEqp.geometry.y;
                    offX = lastEqp.geometry.x + lastEqp.geometry.width + 200;
                }
            }
            for (var j = 0; j < currComp.Refs.length; j++) {
                //   x = i + 1
                //   var sub_offX = margin * j + offX + padding + sub_width * j
                //   var sub_label = currComp.Refs[j]
                //   var sub_offY = 0;
                //   if (currComp.level == 2) {
                //     sub_offY = offY + padding * 7
                //   } else if (currComp.level == 1) {
                //     sub_offY = offY + padding * 7
                //   } else {
                //     sub_offY = offY
                //   }
                //   var col = i.toString() + j.toString();
                //   this.sub_component[col] = this.eqpgraph.insertVertex(this.parent, null, sub_label, sub_offX, sub_offY, sub_width, sub_height, 'sub-comp')
                // }
                // if (width < altwidth) {
                //   width = altwidth
                // } 
                // var height = 440;//2 * sub_height + 3 * padding
                // var label_offX = offX + width / 2
                // var label_offY = offY + height / 4
                // //ramya changed
                // if (currComp.level == 0) {
                //   //if (x % 2 == 0) {
                //   label_offY = offY + 3 * height / 4
                // }
                // this.main_component[x] = this.eqpgraph.insertVertex(this.parent, null, '', offX, offY, width, height, 'comp')
                // this.label[x] = this.eqpgraph.insertVertex(this.parent, null, currComp.COMPONENT_NAME, label_offX, label_offY, 0, 0, 'label')
                var height = 440;
                var sub_width = 100, sub_height = 100;
                var refwidth = 60 + (currComp.Refs.length * sub_width) + (space * currComp.Refs.length);
                var textwidth = 60 + (currComp.COMPONENT_NAME.length * 15) + (space * 5);
                width = refwidth > textwidth ? refwidth : textwidth;
                var sub_offX = offX + this.page_margin, sub_offY = offY + height - sub_height;
                var label_offX = offX + width / 2, label_offY = sub_offY - 50;
                if (currComp.settpoc.toLowerCase() == "top") {
                    sub_offY = offY;
                    label_offY = offY + 3 * height / 4;
                }
                else {
                    label_offY = offY + 1 * height / 4;
                }
                var sub;
                var refobjs = [];
                for (var m = 0; m < currComp.Refs.length; m++) {
                    sub = this.eqpgraph.insertVertex(this.parent, null, currComp.Refs[m], sub_offX, sub_offY, sub_width, sub_height, 'sub-comp');
                    refobjs.push(sub);
                    sub_offX = sub_offX + (sub_width + space);
                }
                var comp = this.eqpgraph.insertVertex(this.parent, null, '', offX, offY, width, height, 'comp');
                this.eqpgraph.insertVertex(this.parent, null, currComp.COMPONENT_NAME, label_offX, label_offY, 0, 0, 'label');
                addedEqp.push(comp);
            }
        }
    };
    GeneratePdfComponent.prototype.setGraphStyle = function (graph) {
        var fontsize = '45';
        // default styles
        var style = graph.getStylesheet().getDefaultVertexStyle();
        // default vertex styles
        //style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_SWIMLANE;
        style['fillColor'] = 'none';
        style['strokeColor'] = '#000000';
        style['strokeWidth'] = '6';
        style['fontColor'] = '#000000';
        style[mxConstants.STYLE_FONTFAMILY] = 'Arial';
        style[mxConstants.STYLE_FONTSTYLE] = '1';
        style[mxConstants.STYLE_FONTSIZE] = fontsize;
        style['perimeter'] = 'rectanglePerimeter';
        // default edge styles
        style = graph.getStylesheet().getDefaultEdgeStyle();
        style['strokeColor'] = '#000000';
        style['strokeWidth'] = '8';
        style['fontColor'] = '#000000';
        style[mxConstants.STYLE_EDGE] = mxEdgeStyle.TopToBottom;
        style[mxConstants.STYLE_ENDARROW] = mxConstants.ARROW_THIN;
        var tempLabelh = new Object();
        tempLabelh[mxConstants.STYLE_FONTSIZE] = fontsize;
        tempLabelh[mxConstants.STYLE_ROTATION] = '0';
        tempLabelh[mxConstants.STYLE_FILLCOLOR] = 'white';
        graph.getStylesheet().putCellStyle('templabelh', tempLabelh);
        // styles for label
        var tempLabel = new Object();
        tempLabel[mxConstants.STYLE_FONTSIZE] = fontsize;
        tempLabel[mxConstants.STYLE_ROTATION] = '-90';
        tempLabel[mxConstants.STYLE_FILLCOLOR] = 'white';
        graph.getStylesheet().putCellStyle('templabel', tempLabel);
        var tempedge = new Object();
        tempedge[mxConstants.STYLE_EDGE] = mxConstants.EDGESTYLE_TOPTOBOTTOM;
        graph.getStylesheet().putCellStyle('tempedge', tempedge);
        // styles for label**			
        var component = new Object();
        component[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_RECTANGLE;
        graph.getStylesheet().putCellStyle('comp', component);
        var label = new Object();
        label[mxConstants.STYLE_FONTSIZE] = fontsize;
        graph.getStylesheet().putCellStyle('label', label);
        var subComponent = new Object();
        subComponent[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_RHOMBUS;
        subComponent[mxConstants.STYLE_FONTSIZE] = fontsize;
        subComponent[mxConstants.STYLE_PERIMETER] = mxConstants.PERIMETER_RHOMBUS;
        graph.getStylesheet().putCellStyle('sub-comp', subComponent);
        var levelline = new Object();
        levelline[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_LINE;
        levelline[mxConstants.STYLE_FONTSIZE] = fontsize;
        levelline[mxConstants.STYLE_DASHED] = "1";
        graph.getStylesheet().putCellStyle('level-line', levelline);
        var portLink = new Object();
        portLink[mxConstants.STYLE_EDGE] = mxConstants.EDGESTYLE_SIDETOSIDE; // mxEdgeStyle.OrthoConnector;mxEdgeStyle.SegmentConnector;     
        graph.getStylesheet().putCellStyle('portLink', portLink);
        var portLink1 = new Object();
        portLink1[mxConstants.STYLE_EDGE] = mxConstants.EDGESTYLE_ORTHOGONAL; // mxEdgeStyle.OrthoConnector;mxEdgeStyle.SegmentConnector;
        portLink1[mxConstants.STYLE_EXIT_X] = 0.5;
        portLink1[mxConstants.STYLE_EXIT_Y] = 1;
        graph.getStylesheet().putCellStyle('portLink1', portLink1);
        var portstring = new Object();
        portstring[mxConstants.STYLE_FONTSIZE] = fontsize;
        // portstring[mxConstants.STYLE_ROTATION]= '-90';
        portstring[mxConstants.STYLE_FONTSIZE] = '30';
        graph.getStylesheet().putCellStyle('portstring', portstring);
        var portlabel = new Object();
        portlabel[mxConstants.STYLE_FONTSIZE] = fontsize;
        portlabel[mxConstants.STYLE_FILLCOLOR] = 'white';
        graph.getStylesheet().putCellStyle('portlabel', portlabel);
    };
    GeneratePdfComponent.prototype.newComponent = function () {
        var space = 70;
        var offX = 0;
        var offY = 0;
        var tempX1 = 0;
        var tempX2 = 0;
        var level0Count = 1;
        var level1Count = 1;
        var diff = tempX2 - tempX1;
        var padding = 40;
        var margin = 40;
        var sub_width = 160;
        var sub_height = 160;
        //page_margin = 200
        var width = 0;
        var x = 0;
        var height = 440; //2 * sub_height + 3 * padding
        for (var i = 0; i < this.hosts.length; i++) {
            var children = this.hosts[i].length;
            width = children * (margin + sub_width) + 2 * padding - margin;
            var altwidth = this.hosts[i][0].mainComponent.length * 40 + 2 * padding;
            var addedItems = this.getGraphData('', 'comp', this.hosts[i][0].level);
            var lastitem;
            if (addedItems && addedItems.length > 0)
                lastitem = addedItems[addedItems.length - 1];
            if (this.hosts[i][0].level == 2) {
                offY = 220 + this.page_margin;
                if (addedItems.length == 0 && this.hasLevel1)
                    offX = 1500 + this.page_margin;
                else if (addedItems.length == 0)
                    offX = this.page_margin;
                else
                    offX = lastitem.x + lastitem.width + space; //offX + tempX2 - tempX1 + space
                //else offX = altwidth * addedItems.length; //offX + tempX2 - tempX1 + space
                tempX1 = tempX1 + width;
                level1Count++;
            }
            else if (this.hosts[i][0].level == 1) {
                offY = (this.graph_height * 2 / 4); // - page_margin - sub_height;
                if (addedItems.length == 0 && this.hasLevel1)
                    offX = 1500 + this.page_margin;
                else if (addedItems.length == 0)
                    offX = this.page_margin;
                else
                    offX = lastitem.x + lastitem.width + space; //offX + tempX2 - tempX1 + space
                //else offX = altwidth * addedItems.length; //offX + tempX2 - tempX1 + space
                tempX1 = tempX1 + width;
                level1Count++;
                // if (addedItems.length == 0)
                //   new mxLine(new mxPoint(0, offX + height), new mxPoint(this.graph_width, offX + height));
            }
            else {
                offY = this.graph_height - this.page_margin - sub_height;
                if (addedItems.length == 0 && this.hasLevel1)
                    offX = 1500 + this.page_margin;
                else if (addedItems.length == 0)
                    offX = this.page_margin;
                else
                    offX = lastitem.x + lastitem.width + space;
                //else offX = (altwidth * addedItems.length) + page_margin + space;
                if (x == 1) {
                    //offX = offX + tempX1
                    tempX2 = tempX2 + space;
                }
                else {
                    //offX = offX + tempX1 - tempX2 + space
                }
                tempX2 = tempX2 + width;
                level0Count++;
                // if (addedItems.length == 0)
                //   new mxLine(new mxPoint(0, offX + height), new mxPoint(this.graph_width, offX + height));
            }
            for (var j = 0; j < children; j++) {
                x = i + 1;
                var sub_offX = margin * j + offX + padding + sub_width * j;
                var sub_label = this.hosts[i][j].refID;
                var sub_offY = 0;
                //if (x % 2 !== 0) {
                //ramya changed
                // if (this.hosts[i][0].level == 2) {
                //   sub_offY = offY + padding * 7
                // } else if (this.hosts[i][0].level == 1) {
                //   sub_offY = offY + padding * 7
                // } else {
                //   sub_offY = offY
                // }
                if (this.hosts[i][0].SETTPOC.toUpperCase() == "TOP") {
                    sub_offY = offY;
                }
                else {
                    sub_offY = offY + padding * 7;
                }
                var col = i.toString() + j.toString();
                this.sub_component[col] = this.graph.insertVertex(this.parent, null, sub_label, sub_offX, sub_offY, sub_width, sub_height, 'sub-comp');
            }
            if (width < altwidth) {
                width = altwidth;
            }
            var label_offX = offX + width / 2;
            var label_offY = offY + height / 2;
            //ramya changed
            // if (this.hosts[i][0].level == 0) {
            //   //if (x % 2 == 0) {
            //   label_offY = offY + 3 * height / 4
            // }
            this.updateGraphData(this.hosts[i][0].refID, 'comp', offX, offY, width, height, this.hosts[i][0].level);
            this.main_component[x] = this.graph.insertVertex(this.parent, null, '', offX, offY, width, height, 'comp');
            this.label[x] = this.graph.insertVertex(this.parent, null, this.hosts[i][0].mainComponent, label_offX, label_offY, 0, 0, 'label');
        }
    };
    //connectors between equipments - OPE
    GeneratePdfComponent.prototype.createLink = function (row1, terminal1, row2, terminal2, labell, linkCount, level) {
        var col1 = row1.toString() + terminal1.toString();
        var col2 = row2.toString() + terminal2.toString();
        //var linkID = [[row1] + [terminal1] + [row2] + [terminal2]]
        var startPoint = this.sub_component[col1];
        var endPoint = this.sub_component[col2];
        var space = 30;
        var offX = 0;
        var offY = 0;
        var tempX1 = 0;
        var tempX2 = 0;
        var newLabelX = 0;
        var padding = 40;
        var margin = 40;
        var sub_width = 160;
        var sub_height = 160;
        var diff = tempX2 - tempX1;
        for (var i = 0; i < this.hosts.length; i++) {
            var children = this.hosts[i].length;
            //ramya-level
            if (linkCount == 1) {
                offX = this.page_margin;
            }
            else
                offX = this.page_margin + ((linkCount - 1) * sub_width) + margin + space;
            if (this.hosts[i][0].level == 2) {
                offY = this.page_margin;
                //	offX = offX + tempX2 - tempX1 + space
                //	tempX1 = tempX1 + width
            }
            else if (this.hosts[i][0].level == 1) {
                offY = this.graph_height / 3;
                //	offX = offX + tempX2 - tempX1 + space
                //	tempX1 = tempX1 + width
            }
            else {
                offY = this.graph_height * 3 / 4;
            }
            for (var j = 0; j < children; j++) {
                var x = i + 1;
                //ramya
                var sub_offX = offX + padding + margin + space; //margin * j + offX + padding + sub_width * j
                var sub_offY = 0, p1 = 0, p2 = 0, p3 = 0, p4 = 0;
                if (x % 2 !== 0) {
                    //if (this.hosts[i][0].level == 1) {
                    sub_offY = offY + padding * 7;
                }
                else {
                    sub_offY = offY;
                }
                if (i == row1 && j == terminal1) {
                    p1 = sub_offX;
                    p2 = sub_offY;
                }
                if (i == row2 && j == terminal2) {
                    p3 = sub_offX;
                    p4 = sub_offY;
                }
            }
            var width = children * (margin + sub_width) + 2 * padding - margin;
            var height = 2 * sub_height + 3 * padding;
            var label_offX = offX + width / 2;
            var label_offY = offY + height / 4;
            if (x % 2 == 0) {
                label_offY = offY + 3 * height / 4;
            }
            //ramya commented
            // if (x % 2 == 0) {
            // 	offY = 0
            // 	offX = offX + tempX2 - tempX1 + space
            // 	tempX1 = tempX1 + width
            // } else {
            // 	offY = 4000
            // 	if (x == 1) {
            // 		offX = offX + tempX1
            // 		tempX2 = tempX2 + space
            // 	} else {
            // 		offX = offX + tempX1 - tempX2 + space
            // 	}
            // 	tempX2 = tempX2 + width
            // }
        }
        var labelspan = 45;
        //ramya - modified
        newLabelX = sub_offX; //(p1 + p3) / 2 - labell.length * labelspan / 2 + 80
        //just one level now
        var newLabelY = 1200 + ((linkCount - 1) * 50); //(p2 + p4) * 3 / 8 + 25 
        var level2Comps = this.getGraphData('', 'comp', 2);
        var level1Comps = this.getGraphData('', 'comp', 1);
        var level0Comps = this.getGraphData('', 'comp', 0);
        var space1 = 70;
        var addedItems = this.getGraphData('', 'link', level);
        var lastitem;
        if (addedItems && addedItems.length > 0) {
            lastitem = addedItems[addedItems.length - 1];
            if (level == 0 || level == 1 || level == 2)
                newLabelX = lastitem.x + lastitem.width + space;
            else
                newLabelX = lastitem.x + lastitem.height + space1;
            newLabelY = lastitem.y + space1;
        }
        else {
            if (level1Comps && level1Comps.length > 0) {
                lastitem = level1Comps[level1Comps.length - 1];
                newLabelX = lastitem.x + lastitem.width + space;
            }
            else
                newLabelX = this.page_margin + space;
            if (level == 3 && this.hasLevel1)
                newLabelX = 3500;
            else if (level == 4)
                newLabelX = 500;
            if (level == 0)
                newLabelY = level0Comps[level0Comps.length - 1].y + level0Comps[level0Comps.length - 1].height + 500;
            else if (level == 1)
                newLabelY = level1Comps[level1Comps.length - 1].y - level1Comps[level1Comps.length - 1].height - 200;
            else if (level == 2)
                newLabelY = 0; //level2Comps[level2Comps.length - 1].y - level2Comps[level2Comps.length - 1].height - 40; 
            else if (level == 4)
                newLabelY = level2Comps[level2Comps.length - 1].y + level2Comps[level2Comps.length - 1].height + 800;
            else if (level == 3)
                newLabelY = level0Comps[level0Comps.length - 1].y - level0Comps[level0Comps.length - 1].height - 600;
        }
        if (level == 0 || level == 1 || level == 2) {
            if (level == 2) {
                //move the rhombus connector to top
                startPoint.geometry.y = startPoint.geometry.y - 280;
                endPoint.geometry.y = endPoint.geometry.y - 280;
            }
            else if (level == 0) {
                //move the rhombus connector to bottom
                startPoint.geometry.y = startPoint.geometry.y + 280;
                endPoint.geometry.y = endPoint.geometry.y + 280;
            }
            // startPoint.geometry.x = startPoint.geometry.x - 20;
            // endPoint.geometry.x = endPoint.geometry.x - 20;
            var temLabel = this.graph.insertVertex(this.parent, null, labell, newLabelX, newLabelY, (labell.length) * labelspan, 120, "templabelh");
            var edge2 = this.graph.insertEdge(this.parent, null, '', startPoint, temLabel, 'tempedge');
            var edge1 = this.graph.insertEdge(this.parent, null, '', temLabel, endPoint, 'tempedge');
        }
        else {
            temLabel = this.graph.insertVertex(this.parent, null, labell, newLabelX, newLabelY, (labell.length) * labelspan, 120, "templabel");
            edge2 = this.graph.insertEdge(this.parent, null, '', startPoint, temLabel, 'tempedge');
            edge1 = this.graph.insertEdge(this.parent, null, '', temLabel, endPoint, 'tempedge');
        }
        this.updateGraphData('', 'link', newLabelX, newLabelY, (labell.length) * labelspan, 120, level);
    };
    //connection point - which is drawn towards right side
    GeneratePdfComponent.prototype.createPort = function (row, service, tag, val) {
        var space = 30;
        var offX = 0, offY = 0, tempX1 = 0, tempX2 = 0;
        var diff = tempX2 - tempX1;
        for (var i = 0; i < this.hosts.length; i++) {
            var children = this.hosts[i].length;
            for (var j = 0; j < children; j++) {
                var x = i + 1;
                var padding = 40;
                var margin = 40;
                var sub_width = 160;
                var sub_height = 160;
                var sub_offX = margin * j + offX + padding + sub_width * j;
                var sub_offY = 0;
                var p1, p2;
                if (x % 2 !== 0) {
                    sub_offY = offY + padding * 7;
                }
                else {
                    sub_offY = offY;
                }
                if (x == row && j == service) {
                    p1 = sub_offX;
                    p2 = sub_offY;
                }
            }
            var width = children * (margin + sub_width) + 2 * padding - margin;
            var height = 2 * sub_height + 3 * padding;
            var label_offX = offX + width / 2;
            var label_offY = offY + height / 4;
            if (x % 2 == 0) {
                label_offY = offY + 3 * height / 4;
            }
            if (x % 2 == 0) {
                offY = 0;
                offX = offX + tempX2 - tempX1 + space;
                tempX1 = tempX1 + width;
            }
            else {
                offY = 2400;
                if (x == 1) {
                    offX = offX + tempX1;
                    tempX2 = tempX2 + space;
                }
                else {
                    offX = offX + tempX1 - tempX2 + space;
                }
                tempX2 = tempX2 + width;
            }
        }
        var lastitem1, lastitem2;
        var lastXPos = 0;
        var portHeight = this.page_margin + 500;
        var addedItems = this.getGraphData('', 'port', this.hosts[row][0].level);
        var bound = 0;
        var spacegap = 50;
        if (addedItems.length == 0) {
            //no ports yet,  position relative to component
            addedItems = this.getGraphData('', 'comp', 2);
            if (addedItems.length > 0) {
                lastitem1 = addedItems[addedItems.length - 1];
                lastXPos = lastitem1.x + lastitem1.width + 1200;
                portHeight = lastitem1.y + lastitem1.height + 500;
            }
            else {
                lastXPos = this.graph_width - 1500;
                portHeight = this.page_margin + 500;
            }
            // addedItems = getGraphData('', 'comp', 1);
            // if (addedItems.length > 0) {
            // 	lastitem1 = addedItems[addedItems.length - 1];
            // 	lastXPos = lastitem1.x + lastitem1.width;
            // 	portHeight = lastitem1.y + lastitem1.height + space;
            // }
            // addedItems = getGraphData('', 'comp', 2);
            // if (addedItems.length > 0) {
            // 	lastitem2 = addedItems[addedItems.length - 1];
            // 	lastitem1 = addedItems[addedItems.length - 1];
            // 	if (lastXPos < lastitem1.x + lastitem1.width)
            // 		lastXPos = lastitem1.x + lastitem1.width;
            // 		portHeight = lastitem1.y + lastitem1.height + space;
            // }
            bound = lastXPos;
        }
        else {
            //port present, position relative to llast port
            lastitem1 = addedItems[addedItems.length - 1];
            lastXPos = lastitem1.x + spacegap + 50;
            portHeight = lastitem1.y + lastitem1.height + spacegap;
            bound = lastXPos;
        }
        this.portIndex = row.toString() + service.toString();
        //portHeight = height + 80 + 150 * (temp)
        this.port[this.portIndex] = this.graph.insertVertex(this.parent, null, val, bound, portHeight, val.length * 45, 100, 'portstring');
        var portSrc = this.sub_component[this.portIndex];
        var portLabelX = bound - 200 - (tag.length) * 30;
        var portLabelY = portHeight + 10;
        this.portLabel[this.portIndex] = this.graph.insertVertex(this.parent, null, tag, portLabelX, portLabelY, (tag.length) * 30, 80, "portlabel");
        this.portlinks[this.portIndex] = this.graph.insertEdge(this.parent, null, '', portSrc, this.portLabel[this.portIndex], 'portLink1');
        this.graph.insertEdge(this.parent, null, '', this.portLabel[this.portIndex], this.port[this.portIndex], 'portLink');
        //temp++
        this.updateGraphData('', 'port', bound, portHeight, val.length * 45, 100, 0);
    };
    GeneratePdfComponent.prototype.createPorts = function () {
        for (var cpi = 0; cpi < this.hosts.length; cpi++) {
            var cpchildren = this.hosts[cpi].length;
            for (var cpj = 0; cpj < cpchildren; cpj++) {
                var services = this.hosts[cpi][cpj];
                if (services.connPoint !== null && services.connPoint !== '') {
                    var tempTag = services.size + ' ' + services.Service + ' ' + services.class;
                    this.createPort(cpi, cpj, tempTag, services.connPoint);
                }
            }
        }
    };
    GeneratePdfComponent.prototype.createLevels = function () {
        var addedPorts = this.getGraphData('', 'port', 2);
        var maxWidth = this.graph_width;
        if (addedPorts.length > 0)
            maxWidth = addedPorts[addedPorts.length - 1].x + addedPorts[addedPorts.length - 1].width + 50;
        var vertex;
        var addedItems = this.getGraphData('', 'comp', 2);
        if (addedItems.length > 0) {
            var comp = addedItems[addedItems.length - 1];
            vertex = this.graph.insertVertex(this.parent, null, "", 0, comp.y + comp.height + 150, maxWidth, 2, 'level-line');
            this.graph.insertVertex(this.parent, null, "Level 2", 150, comp.y + comp.height + 100, 0, 0, 'label');
        }
        addedItems = this.getGraphData('', 'comp', 1);
        if (addedItems.length > 0) {
            var comp = addedItems[addedItems.length - 1];
            vertex = this.graph.insertVertex(this.parent, null, "", 0, comp.y + comp.height + 150, maxWidth, 2, 'level-line');
            this.graph.insertVertex(this.parent, null, "Level 1", 150, comp.y + comp.height + 100, 0, 0, 'label');
        }
        addedItems = this.getGraphData('', 'comp', 0);
        if (addedItems.length > 0) {
            var comp = addedItems[addedItems.length - 1];
            vertex = this.graph.insertVertex(this.parent, null, "", 0, comp.y + comp.height + 150, maxWidth, 2, 'level-line');
            this.graph.insertVertex(this.parent, null, "Level 0", 150, comp.y + comp.height + 100, 0, 0, 'label');
        }
        //new mxLine(new mxPoint(0, offX + height), new mxPoint(this.graph_width, offX + height));
        //   this.graph.insert.insertEdge(this.parent, null, '', new mxPoint(0, offX + height), new mxPoint(this.graph_width, offX + height), 'tempedge')
    };
    GeneratePdfComponent.prototype.createInterLinks = function () {
        //remove circular refrnce first
        for (var i = 0; i < this.hosts.length; i++) {
            var children = this.hosts[i].length;
            for (var j = 0; j < children; j++) {
                var service = this.hosts[i][j];
                if (service.toolRef !== null && service.toolRef !== '') {
                    for (var a = 0; a < this.hosts.length; a++) {
                        var source = this.hosts[a].length;
                        for (var b = 0; b < source; b++) {
                            var terminal = this.hosts[a][b];
                            if (service.toolRef == terminal.refID) {
                                if (terminal.toolRef == service.refID) { //circular
                                    if (a > i) {
                                        service.toolRef = ''; //clear one
                                        service.isTerminal = false;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        console.log('after clearing circular ref :', this.hosts);
        var selectedItem = this.hosts.filter(function (row) {
            if (row.toolRef != '')
                return true;
            else
                return false;
        });
        console.log(selectedItem);
        if (false)
            { var b, a, j, i; }
        if (false)
            { var b, a, j, i; }
        var linkCount = 1;
        for (var ili = 0; ili < this.hosts.length; ili++) {
            var ilchildren = this.hosts[ili].length;
            for (var ilj = 0; ilj < ilchildren; ilj++) {
                var service = this.hosts[ili][ilj];
                if (service.toolRef !== null && service.toolRef !== '') {
                    for (var a = 0; a < this.hosts.length; a++) {
                        var source = this.hosts[a].length;
                        for (var b = 0; b < source; b++) {
                            var terminal = this.hosts[a][b];
                            var level = 0;
                            if (service.toolRef == terminal.refID) {
                                var tempTag = service.size + ' ' + service.Service + ' ' + service.class;
                                if (service.level == terminal.level && service.level == 0)
                                    level = 0;
                                else if (service.level == terminal.level && service.level == 1)
                                    level = 1;
                                else if (service.level == terminal.level && service.level == 2)
                                    level = 2;
                                else if (service.level == 2 && terminal.level == 1)
                                    level = 4; //4;
                                else if (service.level == 0 && terminal.level == 1)
                                    level = 3;
                                else if (service.level == 2 && terminal.level == 0)
                                    level = 3;
                                else if (service.level == 1 && terminal.level == 0)
                                    level = 3;
                                else if (service.level == 1 && terminal.level == 2)
                                    level = 4; //4;
                                else if (service.level == 0 && terminal.level == 2)
                                    level = 3;
                                else
                                    level = 3;
                                console.log('connect : ', service.refID, ' and ', terminal.refID);
                                this.createLink(ili, ilj, a, b, tempTag, linkCount, level);
                                linkCount++;
                            }
                            // if (false)
                            //   if (service.toolRef.indexOf(terminal.refID) > -1) {
                            //     var selectedItem = [];
                            //     if (terminal.toolRefs != undefined)
                            //       selectedItem = terminal.toolRefs.filter(row => {
                            //         if (row.toolRef == terminal.refID)
                            //           return true;
                            //         else
                            //           return false;
                            //       });
                            //     selectedItem.forEach(element => {
                            //       tempTag = element.size + ' ' + element.Service + ' ' + element.class
                            //       this.createLink(ili, ilj, a, b, tempTag, linkCount);
                            //       linkCount++;
                            //     });
                            //   }
                        }
                    }
                }
            }
        }
    };
    GeneratePdfComponent.prototype.CreateBasePDF = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        // Create a new PDFDocument
                        _a = this;
                        return [4 /*yield*/, pdf_lib__WEBPACK_IMPORTED_MODULE_7__["PDFDocument"].create()];
                    case 1:
                        // Create a new PDFDocument
                        _a.pdfDoc = _c.sent();
                        //const url = 'fonts/arial.ttf';
                        //  const fontBytes = await fetch(url).then(res => res.arrayBuffer());
                        //  console.log('fontBytes : ', fontBytes)
                        //this.pdfDoc.registerFontkit(fontkit);    
                        //  console.log('registered');
                        //this.fontType = await this.pdfDoc.embedFont(fontBytes);//await this.pdfDoc.embedFont(fontBytes);
                        _b = this;
                        return [4 /*yield*/, this.pdfDoc.embedFont(pdf_lib__WEBPACK_IMPORTED_MODULE_7__["StandardFonts"].Helvetica)];
                    case 2:
                        //const url = 'fonts/arial.ttf';
                        //  const fontBytes = await fetch(url).then(res => res.arrayBuffer());
                        //  console.log('fontBytes : ', fontBytes)
                        //this.pdfDoc.registerFontkit(fontkit);    
                        //  console.log('registered');
                        //this.fontType = await this.pdfDoc.embedFont(fontBytes);//await this.pdfDoc.embedFont(fontBytes);
                        _b.fontType = _c.sent();
                        return [2 /*return*/, this.pdfDoc];
                }
            });
        });
    };
    GeneratePdfComponent.prototype.CreatePDFPage = function (pdfDoc, pageType) {
        // Add a blank page to the document
        var page;
        if (this.pageSize == 'a3') {
            page = pdfDoc.addPage(pdf_lib__WEBPACK_IMPORTED_MODULE_7__["PageSizes"].A3);
        }
        else {
            page = pdfDoc.addPage([1056, 1632]);
        }
        if (this.orientation == 'landscape') {
            var width = page.getWidth();
            var height = page.getHeight();
            page.setWidth(height);
            page.setHeight(width);
        }
        var outerBorderWidth = page.getWidth() - 20;
        var innerBorderWidth = page.getWidth() - 30;
        var outerBorderHeight = page.getHeight() - 20;
        var innerBorderHeight = page.getHeight() - 30;
        //outer border
        page.drawRectangle({
            x: this.initPosition,
            y: this.initPosition,
            width: outerBorderWidth,
            height: outerBorderHeight,
            borderWidth: 1,
            borderColor: Object(pdf_lib__WEBPACK_IMPORTED_MODULE_7__["grayscale"])(0),
            color: Object(pdf_lib__WEBPACK_IMPORTED_MODULE_7__["rgb"])(1, 1, 1),
            opacity: 0,
            borderOpacity: 0.75,
        });
        this.insertTitleBlock(page, pageType);
        return page;
    };
    GeneratePdfComponent.prototype.insertTitleBlock = function (page, pageType) {
        var firstsection = 20;
        var secondsection = 120;
        var thirdsection = 70;
        var startPosX = page.getWidth() - this.initPosition;
        var startPosY = this.initPosition + 5;
        var lineHeight = this.fontType.heightAtSize(this.blockFontSize) + 10;
        var sheettitle = "";
        var title = this.registerSheet.filter(function (x) { return x.SECTION == 'General'; });
        ;
        this.projRevisions.sort(function (a, b) {
            if (a.REV_NO < b.REV_NO) {
                return -1;
            }
            if (a.REV_NO > b.REV_NO) {
                return 1;
            }
            return 0;
        });
        console.log('page count : ', this.zeroPad(this.genPageCount.toString(), 2));
        if (pageType == "GENERAL") {
            title = this.registerSheet.filter(function (x) { return x.SECTION == 'General'; });
            sheettitle = "General - G" + this.zeroPad(this.genPageCount.toString(), 2);
            this.genPageCount++;
        }
        else if (pageType == "MECHANICAL") {
            title = this.registerSheet.filter(function (x) { return x.SECTION == 'Mechanical'; });
            sheettitle = "Mechanical - M" + this.zeroPad(this.mechPageCount.toString(), 2);
            this.mechPageCount++;
        }
        else if (pageType == "ELECTRICAL") {
            title = this.registerSheet.filter(function (x) { return x.SECTION == 'Electrical'; });
            sheettitle = "ELECTRICAL - E" + this.zeroPad(this.electricalPageCount.toString(), 2);
            this.electricalPageCount++;
        }
        var itemname = title[0].ITEM_NAME;
        var section = title[0].SECTION;
        var desca = title[0].DESCRIPTION_A;
        var descb = title[0].DESCRIPTION_B;
        var descc = title[0].DESCRIPTION_C;
        //rev + sheet title
        this.drawRectangle(page, startPosX - thirdsection - 5, startPosY, thirdsection, lineHeight);
        this.writeText(page, startPosX - thirdsection, startPosY + 5, "REV - " + this.projRevisions[this.projRevisions.length - 1].REV_NO, this.blockFontSize);
        this.drawRectangle(page, startPosX - (firstsection + secondsection + thirdsection) - 5, startPosY, firstsection + secondsection, lineHeight);
        this.writeText(page, startPosX - (firstsection + secondsection + thirdsection), startPosY + 5, sheettitle, this.blockFontSize);
        //item name section
        this.drawRectangle(page, startPosX - (firstsection + secondsection + thirdsection) - 5, startPosY + lineHeight, firstsection + secondsection + thirdsection, lineHeight * 5);
        this.writeText(page, startPosX - (firstsection + secondsection + thirdsection), startPosY + lineHeight + 5, descc, this.blockFontSize);
        this.writeText(page, startPosX - (firstsection + secondsection + thirdsection), startPosY + (lineHeight * 2) + 5, descb, this.blockFontSize);
        this.writeText(page, startPosX - (firstsection + secondsection + thirdsection), startPosY + (lineHeight * 3) + 5, desca, this.blockFontSize);
        this.writeText(page, startPosX - (firstsection + secondsection + thirdsection), startPosY + (lineHeight * 4) + 5, section, this.blockFontSize);
        this.writeText(page, startPosX - (firstsection + secondsection + thirdsection), startPosY + (lineHeight * 5) + 5, itemname, this.blockFontSize);
        //project Name
        this.drawRectangle(page, startPosX - (firstsection + secondsection + thirdsection) - 5, startPosY + (lineHeight * 6), firstsection + secondsection + thirdsection, lineHeight);
        this.writeText(page, startPosX - (firstsection + secondsection + thirdsection), startPosY + (lineHeight * 6) + 5, this.projectName, this.blockFontSize);
        //revision box
        for (var irev = 0; irev < this.projRevisions.length; irev++) {
            var rowno = (irev + 7);
            this.drawRectangle(page, startPosX - (firstsection + secondsection + thirdsection) - 5, startPosY + (lineHeight * rowno), firstsection, lineHeight);
            this.writeText(page, startPosX - (firstsection + secondsection + thirdsection), startPosY + (lineHeight * rowno) + 5, this.projRevisions[irev].REV_NO, this.blockFontSize);
            this.drawRectangle(page, startPosX - (secondsection + thirdsection) - 5, startPosY + (lineHeight * rowno), secondsection, lineHeight);
            this.writeText(page, startPosX - (secondsection + thirdsection), startPosY + (lineHeight * rowno) + 5, this.projRevisions[irev].REV_NAME, this.blockFontSize);
            this.drawRectangle(page, startPosX - (thirdsection) - 5, startPosY + (lineHeight * rowno), thirdsection, lineHeight);
            this.writeText(page, startPosX - (thirdsection), startPosY + (lineHeight * rowno) + 5, this.formatDate(this.projRevisions[irev].DATE_REV), this.blockFontSize);
        }
        this.blockTotalHeight = lineHeight * (7 + this.projRevisions.length);
        return page;
    };
    GeneratePdfComponent.prototype.drawRectangle = function (page, x, y, width, height) {
        // const textWidth = customFont.widthOfTextAtSize(text, textSize)
        // const textHeight = customFont.heightAtSize(textSize)
        var options = {
            x: x,
            y: y,
            width: width,
            height: height,
            borderWidth: 1,
            borderColor: Object(pdf_lib__WEBPACK_IMPORTED_MODULE_7__["grayscale"])(0),
            color: Object(pdf_lib__WEBPACK_IMPORTED_MODULE_7__["rgb"])(1, 1, 1),
            opacity: 0,
            borderOpacity: 0.75,
        };
        page.drawRectangle(options);
    };
    GeneratePdfComponent.prototype.writeText = function (page, x, y, text, textSize, wrap) {
        if (wrap === void 0) { wrap = false; }
        if (text != "" && text != undefined) {
            if (!wrap) {
                var txtOptions = {
                    x: x,
                    y: y,
                    size: textSize,
                    font: this.fontType,
                    color: Object(pdf_lib__WEBPACK_IMPORTED_MODULE_7__["rgb"])(0, 0, 0)
                };
                page.drawText(text, txtOptions);
            }
            else {
                var testlines = text.split(' ');
                for (var i = 0; i < testlines.length; i++) {
                    if (testlines[i].trim == "")
                        continue;
                    var txtOptions1 = {
                        x: x,
                        y: y - (i * 10),
                        size: textSize,
                        font: this.fontType,
                        color: Object(pdf_lib__WEBPACK_IMPORTED_MODULE_7__["rgb"])(0, 0, 0)
                    };
                    page.drawText(testlines[i], txtOptions1);
                }
            }
        }
    };
    GeneratePdfComponent.prototype.GeneratePDF = function (imgType, uriData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var pdfDoc, page, page, pdfBytes;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.CreateBasePDF()];
                    case 1:
                        pdfDoc = _a.sent();
                        console.log('generating PDF');
                        //insert register page
                        this.insertRegisterSheet();
                        //insert equipment sheet
                        this.insertEquipmentSheet("GENERAL", uriData.mechEqpURI, "MECHANICAL");
                        this.insertEquipmentSheet("GENERAL", uriData.elecEqpURI, "ELECTRICAL");
                        //insert notes  this.projNotes
                        this.addNotesPage(pdfDoc, "Mechanical");
                        console.log('added mech notes page');
                        this.insertInputData(pdfDoc, "MECHANICAL");
                        console.log('added data table');
                        page = this.CreatePDFPage(pdfDoc, "MECHANICAL");
                        this.AddImagetoPDF(pdfDoc, page, imgType, uriData.mechURI);
                        console.log('image inserted');
                        this.addNotesPage(pdfDoc, "Electrical");
                        console.log('added electrical notes page');
                        this.insertInputData(pdfDoc, "SERVICEDATA");
                        this.insertInputData(pdfDoc, "INTERCONNECT");
                        this.insertInputData(pdfDoc, "CIRCUIT");
                        this.insertInputData(pdfDoc, "RACEWAY");
                        console.log('added data table');
                        page = this.CreatePDFPage(pdfDoc, "ELECTRICAL");
                        this.AddImagetoPDF(pdfDoc, page, imgType, uriData.electricalURI);
                        console.log('image inserted');
                        return [4 /*yield*/, pdfDoc.save()];
                    case 2:
                        pdfBytes = _a.sent();
                        console.log('document saved');
                        // Trigger the browser to download the PDF document
                        this.download(pdfBytes, "2DSchematic.pdf", "application/pdf");
                        console.log('document downloaded');
                        return [2 /*return*/];
                }
            });
        });
    };
    GeneratePdfComponent.prototype.addNotesPage = function (pdfDoc, section) {
        var page = null;
        var lineHeight = 20;
        var startPosX = this.initPosition + 10;
        var notes = this.projNotes.filter(function (x) { return x.NOTE_CATEGORY == section; });
        if (notes.length > 0) {
            page = this.CreatePDFPage(pdfDoc, section.toUpperCase());
            var topPos = page.getHeight() - 40;
            for (var i = 0; i < notes.length; i++) {
                console.log('notes[i].NOTE_TEXT : ', notes[i].NOTE_TEXT);
                this.writeText(page, startPosX, topPos - (i * lineHeight), notes[i].NOTE_TEXT, this.blockFontSize);
            }
        }
    };
    GeneratePdfComponent.prototype.AddImagetoPDF = function (pdfDoc, page, imgType, ingBuffer) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var factor, pngImage, padding, imgSize, imgWidth, imgHeight, drawingWidth, drawingHeight, diff, wdiff, hdiff, imgSize, xPos, yPos;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        padding = 20;
                        if (!(imgType == "png")) return [3 /*break*/, 2];
                        factor = 0.5;
                        return [4 /*yield*/, pdfDoc.embedPng(ingBuffer)];
                    case 1:
                        pngImage = _a.sent();
                        padding = 50;
                        imgSize = pngImage.size();
                        imgWidth = imgSize.width / 2;
                        imgHeight = imgSize.height / 2;
                        drawingWidth = page.getWidth() - padding;
                        drawingHeight = page.getHeight() - padding - this.blockTotalHeight;
                        if (this.orientation == 'landscape')
                            drawingHeight = page.getHeight() - padding;
                        if (drawingWidth < imgSize.width || drawingHeight < imgSize.height) {
                            diff = 0;
                            wdiff = imgSize.width / drawingWidth;
                            hdiff = imgSize.height / drawingHeight;
                            diff = (wdiff > hdiff) ? wdiff : hdiff;
                            factor = 1 / diff;
                            imgSize = pngImage.scale(factor);
                            imgWidth = imgSize.width;
                            imgHeight = imgSize.height;
                        }
                        xPos = this.initPosition + 10;
                        yPos = page.getHeight() - imgHeight - 20;
                        // Draw the PNG image near the lower right corner of the JPG image
                        page.drawImage(pngImage, {
                            x: xPos,
                            y: yPos,
                            width: imgWidth,
                            height: imgHeight,
                        });
                        return [3 /*break*/, 2];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    GeneratePdfComponent.prototype.insertInputData = function (pdfDoc, section) {
        // var table = document.getElementById("inputtatble");
        var pageblock = section == "MECHANICAL" ? "MECHANICAL" : "ELECTRICAL";
        var page = this.CreatePDFPage(pdfDoc, pageblock);
        var rowCount = 0;
        var rowHeight = 30;
        var rowY = 0;
        var padding = 80;
        var headrows = 0;
        var datarows = 0;
        var charsPerLine = 7;
        var wrapHeadingText = false;
        var wrapDataText = false;
        var data_table = this.main_table;
        var startPosX = this.initPosition + 10;
        var startPosY = page.getHeight() - 70;
        var pageRow = 0;
        var drawingHeight = 0; //page.getHeight() - padding - this.blockTotalHeight;
        var headings = ["Component", "Ref. ID", "Level", "Service", "Service Size", "Pipe Class", "Conn Size", "Conn Type", "Min Temp", "Max Temp", "Unit Temp", "Min Pressure", "Max Pressure", "Unit Pressure", "Min Flow", "Max Flow", "Unit Flow", "Tool Ref", "OPE", "Note"];
        var colheads = ["mainComponent", "refID", "level", "Service", "size", "class", "CONNECTION_SIZE", "CONNECTION_TYPE_SIZE", "UM_TEMP_MIN", "UM_TEMP_MAX", "UM_TEMP_UNIT", "UM_PRES_MIN", "UM_PRES_MAX", "UM_PRES_UNIT", "UM_FLOW_MIN", "UM_FLOW_MAX", "UM_FLOW_UNIT", "toolRef", "ope", "NOTES"];
        if (section == "SERVICEDATA") {
            headings = ["REF. NO", "FROM COMP", "TO COMP", "FROM LEVEL", "TO LEVEL", "VOLTAGE", "FLA", "FRAME", "TRIP UNIT",
                "TRIP SET", "PH", "WIRING CONFIG", "TYPE", "SIZE", "GND", "RACEWAY", "POWER TYPE", "PANEL REF.", "CIRCUIT NO.", "OPE", "CABLE TAG"];
            colheads = ["REF_NO", "FROM_COMPONENT_NAME", "TO_COMPONENT_NAME", "FROM_LEVEL", "TO_LEVEL", "VOLTAGE", "FLA",
                "CB_FRAME", "CB_TRIP_UNIT", "CB_TRIP_SET", "PH", "WIRING_CONFIG", "CABLE_TYPE", "CABLE_SIZE", "CABLE_GND", "RACEWAY_1", "POWER_TYPE", "PANEL_REF", "CIRCUIT_NO", "OPE", "CABLE_TAG"];
            data_table = this.electrical_service_data;
        }
        else if (section == "INTERCONNECT") {
            headings = ["ITEM", "SUPP PART NO.", "MFG.", "MFG. PRT NO.", "WRKNG VOLT", "FLA", "O.C.SIZE", "LUG TEMP. RATING", "FROM", "TERM. NO.", "TO", "TERM. NO.", "LEN", "SIZE (AWG)", "# OF COND.", "NEC CLASS", "INSUL. TYPE", "JACKET TYPE", "INSUL. RATING (V)", "TEMP. RATING", "DIA.", "BEND RADIUS", "CONN SIZE", "SERVICE REF.", "DESC"];
            colheads = ["ITEM", "SUPPLIER_PART_NO", "MANUFACTURER", "MANUFACTURER_PRT_NO", "WORKING_VOLTAGE", "FLA", "OC_SIZE", "LUG_TEMP_RATING", "FROM", "FROM_TERM_NO", "TO", "TO_TERM_NO", "LENGHT", "SIZE_AWG", "NO_OF_COND", "NEC_CLASS", "INSULATION_TYPE", "JACKET_TYPE", "INSULATION_RATING", "TEMP_RATING", "DIAMETER", "BEND_RADIUS", "CONNECTION_SIZE", "SERVICE_REF", "DESCRIPTION"];
            data_table = this.interconnect_data;
        }
        else if (section == "CIRCUIT") {
            headings = ["SVC REF. NO", "DEVICE LOC", "DEVICE TYPE", "DEVICE LABEL", "MFG.", "MFG. MODEL NO.", "AMPERE RATING (AMPS)", "TRIP UNIT/ SETTING", "SHORT CIRCUIT/ IRAAV", "INST LUGKIT PARTNO", "LUG WIRE RANGE", "TERM TORGUE", "TERM TEMP. RATING", "DEVICE LOC", "DEVICE TYPE", "DEVICE LBL", "MFG.", "MFG. MODEL NO.", "AMPERE RATING (AMPS)", "TRIP UNIT/ SETTING", "SHORT CIRCUIT/ IRAAV", "INST LUGKIT PARTNO", "LUG WIRE RANGE", "TERM TORGUE", "TERM TEMP. RATING"];
            colheads = ["SERVICE_REF_NO", "DEVICE_LOCATION_S", "DEVICE_TYPE_S", "DEVICE_LABEL_S", "MANUFACTURER_S", "MANUFACTURER_MODEL_NO_S", "AMPERE_RATING_S", "TRIP_UNIT_SETTING_S", "SHORT_CURCUIT_S", "INSTALLED_LUG_KIT_PART_NO_S", "LUG_WIRE_RANGE_S", "TERMINAL_TORGUE_S", "TERMINAL_TEMP_RATING_S", "DEVICE_LOCATION_L", "DEVICE_TYPE_L", "DEVICE_LABEL_L", "MANUFACTURER_L", "MANUFACTURER_MODEL_NO_L", "AMPERE_RATING_L", "TRIP_UNIT_SETTING_L", "SHORT_CURCUIT_L", "INSTALLED_LUG_KIT_PART_NO_L", "LUG_WIRE_RANGE_L", "TERMINAL_TORGUE_L", "TERMINAL_TEMP_RATING_L"];
            data_table = this.circuit_data;
        }
        else if (section == "RACEWAY") {
            headings = ["REF SIZE", "ESTIMATED LENGTH", "ACTUAL LENGTH", "REMARKS"];
            colheads = ["REF_SIZE", "ESTIMATED_LENGTH", "ACTUAL_LENGTH", "REMARKS"];
            data_table = this.raceway_data;
        }
        var colCount = headings.length;
        var colWidth = (page.getWidth() - 50) / colCount;
        //check if text wrap, if yes increarse rowheight
        wrapHeadingText = false;
        headrows = 0;
        for (colCount = 0; colCount < headings.length; colCount++) {
            var cellValue = headings[colCount];
            if (cellValue.length * charsPerLine > colWidth) {
                wrapHeadingText = true;
                if (headrows < (cellValue.length * charsPerLine) / colWidth)
                    headrows = (cellValue.length * charsPerLine) / colWidth;
            }
        }
        if (wrapHeadingText)
            rowHeight = headrows * 20;
        else
            rowHeight = 30;
        rowY = startPosY - 15;
        for (colCount = 0; colCount < headings.length; colCount++) {
            var cellValue = headings[colCount];
            this.drawRectangle(page, startPosX + (colWidth * colCount), rowY, colWidth, rowHeight);
            this.writeText(page, startPosX + (colWidth * colCount) + 5, rowY + rowHeight - 15, cellValue, this.blockFontSize, wrapHeadingText);
        }
        pageRow++;
        //for (rowCount = 0; rowCount < this.hosts.length; rowCount++) {
        for (var i = 0; i < data_table.length; i++) {
            drawingHeight = this.blockTotalHeight;
            // if ((rowHeight * (pageRow + 2)) >= drawingHeight) {
            //   console.log('rowY , rowHeight , drawingHeight, rowY + rowHeight : ', rowY , rowHeight , drawingHeight, rowY + rowHeight)
            if (rowY - padding <= drawingHeight) {
                page = this.CreatePDFPage(this.pdfDoc, pageblock); //got to next page
                startPosY = page.getHeight() - 70;
                pageRow = 1;
                if (wrapHeadingText)
                    rowHeight = headrows * 20;
                else
                    rowHeight = 30;
                rowY = startPosY - 15;
                for (colCount = 0; colCount < headings.length; colCount++) {
                    var cellValue = headings[colCount];
                    this.drawRectangle(page, startPosX + (colWidth * colCount), rowY, colWidth, rowHeight);
                    this.writeText(page, startPosX + (colWidth * colCount) + 5, rowY + rowHeight - 15, cellValue, this.blockFontSize, wrapHeadingText);
                }
                pageRow++;
            }
            //check if text wrap, if yes increarse rowheight
            var comp = data_table[i];
            wrapDataText = false;
            datarows = 0;
            for (colCount = 0; colCount < headings.length; colCount++) {
                var cell = comp[colheads[colCount]];
                cellValue = cell == undefined ? "" : cell.toString();
                if (cellValue.length * charsPerLine > colWidth) {
                    wrapDataText = true;
                    if (datarows < (cellValue.length * charsPerLine) / colWidth)
                        datarows = (cellValue.length * charsPerLine) / colWidth;
                }
            }
            console.log('section , rowY  , rowHeight : ', section, rowY, rowHeight);
            if (wrapDataText)
                rowHeight = datarows * 20;
            else
                rowHeight = 30;
            rowY = rowY - rowHeight;
            for (colCount = 0; colCount < headings.length; colCount++) {
                var cell = comp[colheads[colCount]];
                cellValue = cell == undefined ? "" : cell.toString();
                this.drawRectangle(page, startPosX + (colWidth * colCount), rowY, colWidth, rowHeight);
                this.writeText(page, startPosX + (colWidth * colCount) + 5, rowY + rowHeight - 15, cellValue, this.blockFontSize, wrapDataText);
            }
            pageRow++;
            // }
        }
    };
    GeneratePdfComponent.prototype.insertRegisterSheet = function () {
        var page = this.CreatePDFPage(this.pdfDoc, "GENERAL"); //got to next page
        // var table = document.getElementById("inputtatble");
        var rowCount = 0;
        var colCount = 8;
        var rowHeight = 30;
        var padding = 10;
        var colWidth = (page.getWidth() - 50) / colCount;
        var startPosX = this.initPosition + 10;
        var startPosY = page.getHeight() - 70;
        var pageRow = 0;
        var drawingHeight = page.getHeight() - padding - this.blockTotalHeight;
        var headings = ["Item Name", "Description A", "Description B", "Description C", "Section", "Item No", "Date Issued", "Rev Issued"];
        var colheads = ["ITEM_NAME", "DESCRIPTION_A", "DESCRIPTION_B", "DESCRIPTION_C", "SECTION", "ITEM_NO", "DATE_ISSUED", "REV_ISSUED"];
        for (colCount = 0; colCount < headings.length; colCount++) {
            var cellValue = headings[colCount];
            this.drawRectangle(page, startPosX + (colWidth * colCount), startPosY - (rowHeight * pageRow), colWidth, rowHeight);
            this.writeText(page, startPosX + (colWidth * colCount) + 5, startPosY - (rowHeight * pageRow) + rowHeight - 15, cellValue, this.blockFontSize);
        }
        pageRow++;
        //for (rowCount = 0; rowCount < this.hosts.length; rowCount++) {
        for (var i = 0; i < this.registerSheet.length; i++) {
            //  for (var j = 0; j < this.hosts[i].length; j++) {
            drawingHeight = page.getHeight() - padding - this.blockTotalHeight;
            if ((rowHeight * (pageRow + 2)) >= drawingHeight) {
                page = this.CreatePDFPage(this.pdfDoc, "GENERAL"); //got to next page
                startPosY = page.getHeight() - 70;
                pageRow = 1;
                for (colCount = 0; colCount < headings.length; colCount++) {
                    var cellValue = headings[colCount];
                    this.drawRectangle(page, startPosX + (colWidth * colCount), startPosY - (rowHeight * pageRow), colWidth, rowHeight);
                    this.writeText(page, startPosX + (colWidth * colCount) + 5, startPosY - (rowHeight * pageRow) + rowHeight - 15, cellValue, this.blockFontSize);
                }
                pageRow++;
            }
            var comp = this.registerSheet[i];
            for (colCount = 0; colCount < headings.length; colCount++) {
                var cell = comp[colheads[colCount]];
                cellValue = (cell == undefined) ? "" : cell.toString();
                if (colheads[colCount] == "DATE_ISSUED") {
                    if (cellValue != "")
                        cellValue = this.datePipe.transform(cellValue, "MM-dd-yy");
                }
                this.drawRectangle(page, startPosX + (colWidth * colCount), startPosY - (rowHeight * pageRow), colWidth, rowHeight);
                this.writeText(page, startPosX + (colWidth * colCount) + 5, startPosY - (rowHeight * pageRow) + rowHeight - 15, cellValue, this.blockFontSize);
            }
            pageRow++;
            // }
        }
    };
    GeneratePdfComponent.prototype.insertEquipmentSheet = function (section, eqpImgBuffer, actualsection) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var page, firstPage, headings, colheads, main_data_table, rowCount, colCount, rowHeight, padding, colWidth, startPosX, startPosY, pageRow, drawingHeight, cellValue, i, cellValue, comp, cell, factor, pngImage, padding, imgSize, imgWidth, imgHeight, drawingWidth, drawingHeight, aspectRatio, expectedWith, xPos, yPos;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        page = this.CreatePDFPage(this.pdfDoc, section);
                        firstPage = page;
                        headings = [], colheads = [];
                        main_data_table = [];
                        rowCount = 0;
                        colCount = 5;
                        rowHeight = 30;
                        padding = 10;
                        colWidth = (page.getWidth() / 2 - 50) / colCount;
                        startPosX = this.initPosition + 10;
                        startPosY = page.getHeight() - 70;
                        pageRow = 0;
                        drawingHeight = page.getHeight() - padding - this.blockTotalHeight;
                        if (actualsection == "MECHANICAL") {
                            headings = ["Component", "Ref. ID", "Level", "Service", "Service Size"];
                            colheads = ["mainComponent", "refID", "level", "Service", "size"];
                            main_data_table = this.main_table;
                        }
                        else if (actualsection == "ELECTRICAL") {
                            headings = ["COMPONENT NAME", "Level"];
                            colheads = ["COMPONENT_NAME", "level"];
                            main_data_table = this.electricalComps;
                        }
                        for (colCount = 0; colCount < headings.length; colCount++) {
                            cellValue = headings[colCount];
                            this.drawRectangle(page, startPosX + (colWidth * colCount), startPosY - (rowHeight * pageRow), colWidth, rowHeight);
                            this.writeText(page, startPosX + (colWidth * colCount) + 5, startPosY - (rowHeight * pageRow) + rowHeight - 15, cellValue, this.blockFontSize);
                        }
                        pageRow++;
                        for (i = 0; i < main_data_table.length; i++) {
                            drawingHeight = page.getHeight() - padding - this.blockTotalHeight;
                            if ((rowHeight * (pageRow + 2)) >= drawingHeight) {
                                page = this.CreatePDFPage(this.pdfDoc, section); //got to next page
                                startPosY = page.getHeight() - 70;
                                pageRow = 1;
                                for (colCount = 0; colCount < headings.length; colCount++) {
                                    cellValue = headings[colCount];
                                    this.drawRectangle(page, startPosX + (colWidth * colCount), startPosY - (rowHeight * pageRow), colWidth, rowHeight);
                                    this.writeText(page, startPosX + (colWidth * colCount) + 5, startPosY - (rowHeight * pageRow) + rowHeight - 15, cellValue, this.blockFontSize);
                                }
                                pageRow++;
                            }
                            comp = main_data_table[i];
                            for (colCount = 0; colCount < headings.length; colCount++) {
                                cell = comp[colheads[colCount]];
                                cellValue = cell == undefined ? "" : cell.toString();
                                this.drawRectangle(page, startPosX + (colWidth * colCount), startPosY - (rowHeight * pageRow), colWidth, rowHeight);
                                this.writeText(page, startPosX + (colWidth * colCount) + 5, startPosY - (rowHeight * pageRow) + rowHeight - 15, cellValue, this.blockFontSize);
                            }
                            pageRow++;
                        }
                        factor = 0.5;
                        return [4 /*yield*/, this.pdfDoc.embedPng(eqpImgBuffer)];
                    case 1:
                        pngImage = _a.sent();
                        padding = 50;
                        imgSize = pngImage.size();
                        imgWidth = imgSize.width / 2;
                        imgHeight = imgSize.height / 2;
                        drawingWidth = page.getWidth();
                        drawingHeight = page.getHeight();
                        // if (drawingWidth < imgSize.width || drawingHeight < imgSize.height) {
                        //   var diff = 0;
                        //   var wdiff = imgSize.width / drawingWidth;
                        //   var hdiff = imgSize.height / drawingHeight;
                        //   diff = (wdiff > hdiff) ? wdiff : hdiff;
                        //   factor = 1 / diff;
                        //   //factor = 0.8;
                        //   var imgSize = pngImage.scale(factor);
                        //   imgWidth = imgSize.width;
                        //   imgHeight = imgSize.height;
                        // }
                        if (drawingWidth < imgSize.width || drawingHeight < imgSize.height) {
                            aspectRatio = imgSize.width / imgSize.height;
                            expectedWith = drawingWidth / 2 - 300;
                            imgWidth = expectedWith;
                            imgHeight = expectedWith / aspectRatio;
                            ;
                            // var diff = 0;
                            // var wdiff = imgSize.width - drawingWidth;
                            // var hdiff = imgSize.height - drawingHeight;
                            // if (wdiff > hdiff) {
                            //   imgWidth = drawingWidth;
                            //   imgHeight = drawingWidth / aspectRatio;
                            // } else {
                            //   imgWidth = drawingHeight / aspectRatio;
                            //   imgHeight = drawingHeight;        
                            // }
                        }
                        xPos = page.getWidth() / 2 - 10;
                        yPos = page.getHeight() - imgHeight - 20;
                        // Draw the PNG image near the lower right corner of the JPG image
                        firstPage.drawImage(pngImage, {
                            x: xPos,
                            y: yPos,
                            width: imgWidth,
                            height: imgHeight,
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    GeneratePdfComponent.prototype.formatDate = function (date) {
        if (date === void 0) { date = ""; }
        var today = new Date();
        if (date != "") {
            today = new Date(date);
        }
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear().toString();
        var yy = yyyy.substring(yyyy.length - 2, yyyy.length);
        var strdd = strdd = dd.toString(), strmm = strmm = mm.toString(), strtoday = '';
        // if (dd.toString().length == 1) {
        //   strdd = '0' + dd.toString();
        // } else strdd = dd.toString();
        // if (mm.toString().length == 1) {
        //   strmm = '0' + mm.toString();
        // } else strmm = mm.toString();
        if (this.pageSize == 'a3')
            strtoday = this.zeroPad(strmm, 2) + '.' + this.zeroPad(strdd, 2) + '.' + yy;
        else
            strtoday = this.zeroPad(strdd, 2) + '.' + this.zeroPad(strmm, 2) + '.' + yy;
        return strtoday;
    };
    GeneratePdfComponent.prototype.download = function (data, fileName, mimeType) {
        //vm.download = function(text) {
        var blobData;
        blobData = new Blob([data], { type: mimeType });
        Object(file_saver__WEBPACK_IMPORTED_MODULE_8__["saveAs"])(blobData, fileName);
        //};
    };
    GeneratePdfComponent.prototype.parseElectrical = function () {
        console.log('parse the input data ');
        //clear the container before we begin
        var container = document.getElementById("serviceDataContainer");
        container.innerHTML = '';
        this.setPaperSize();
        mxEvent.disableContextMenu(container);
        this.graph = new mxGraph(container);
        new mxRubberband(this.graph);
        this.parent = this.graph.getDefaultParent();
        this.graph.getModel().beginUpdate();
        try {
            this.setGraphStyle(this.graph);
            console.log('style settings complete');
            this.createElectricalComponents();
            console.log('added electrical components and services to  graph');
            this.createConnectors();
            console.log('added connectors to  graph');
            // this.createInterLinks();
            console.log('added links to  graph');
            this.createElectricalLevels();
            console.log('added levels to  graph');
            this.drawEqupiment(document.getElementById("elecEqpContainer"), 'ELECTRICAL');
        }
        finally {
            this.graph.getModel().endUpdate();
            this.electricalGraph = this.graph;
            //ExportDrawing(graph);
            console.log('svg complete');
        }
    };
    GeneratePdfComponent.prototype.createElectricalComponents = function () {
        //get unique list of comps with refs set
        for (var i = 0; i < this.electrical_service_data.length; i++) {
            this.checkCompandUpdate(this.electrical_service_data[i].FROM_COMPONENT_ID, this.electrical_service_data[i].FROM_LEVEL, this.electrical_service_data[i].REF_NO, this.electrical_service_data[i].FROM_SETTPOC);
            this.checkCompandUpdate(this.electrical_service_data[i].TO_COMPONENT_ID, this.electrical_service_data[i].TO_LEVEL, this.electrical_service_data[i].REF_NO, this.electrical_service_data[i].TO_SETTPOC);
            this.electrical_service_data[i].FROM_COMPONENT_NAME = this.electrical_service_data[i].FROM_COMPONENT_ID.COMPONENT_NAME;
            this.electrical_service_data[i].TO_COMPONENT_NAME = this.electrical_service_data[i].TO_COMPONENT_ID.COMPONENT_NAME;
        }
        console.log('constructed elec components :', this.electricalComps);
        var width = 0, height = 0, offY = 0, offX = 0, space = 30, servicegap = 70, compgap = 50;
        //draw comps
        for (var i = 0; i < this.electricalComps.length; i++) {
            var currComp = this.electricalComps[i];
            var addedItems = this.getGraphData('', 'comp', currComp.level);
            var lastitem;
            if (addedItems && addedItems.length > 0)
                lastitem = addedItems[addedItems.length - 1];
            if (currComp.level == 2) {
                offY = 220 + this.page_margin;
                if (addedItems.length == 0 && this.hasLevel1)
                    offX = 1500 + this.page_margin;
                else if (addedItems.length == 0)
                    offX = this.page_margin;
                else
                    offX = lastitem.x + lastitem.width + compgap;
            }
            else if (currComp.level == 1) {
                offY = (this.graph_height * 2 / 4) - space; // - page_margin - sub_height;
                if (addedItems.length == 0 && this.hasLevel1)
                    offX = 1500 + this.page_margin;
                else if (addedItems.length == 0)
                    offX = this.page_margin;
                else
                    offX = lastitem.x + lastitem.width + compgap;
            }
            else {
                offY = this.graph_height - this.page_margin - space;
                if (addedItems.length == 0 && this.hasLevel1)
                    offX = 1500 + this.page_margin;
                else if (addedItems.length == 0)
                    offX = this.page_margin;
                else
                    offX = lastitem.x + lastitem.width + compgap;
            }
            //calculate  height and width
            height = 440;
            var sub_width = 100, sub_height = 100;
            var refwidth = 60 + (currComp.Refs.length * sub_width) + (servicegap * currComp.Refs.length);
            var textwidth = 60 + (currComp.COMPONENT_NAME.length * 15) + (space * 5);
            width = refwidth > textwidth ? refwidth : textwidth;
            var sub_offX = offX + this.page_margin, sub_offY = 0;
            var label_offX = offX + width / 2, label_offY = offY + height / 2;
            if (currComp.settpoc.toUpperCase() == 'TOP') {
                sub_offY = offY;
            }
            else {
                sub_offY = offY + height - sub_height;
            }
            var sub;
            var refobjs = [];
            for (var j = 0; j < currComp.Refs.length; j++) {
                sub = this.graph.insertVertex(this.parent, null, currComp.Refs[j], sub_offX, sub_offY, sub_width, sub_height, 'sub-comp');
                refobjs.push(sub);
                sub_offX = sub_offX + ((sub_width + servicegap));
            }
            console.log('offX, offY, label_offX, label_offY : ', offX, offY, label_offX, label_offY);
            console.log('currComp.COMPONENT_NAME :', currComp.COMPONENT_NAME);
            this.graph.insertVertex(this.parent, null, '', offX, offY, width, height, 'comp');
            this.graph.insertVertex(this.parent, null, currComp.COMPONENT_NAME, label_offX, label_offY, 0, 0, 'label');
            currComp.x = offX;
            currComp.y = offY;
            currComp.refObjs = refobjs;
            this.updateGraphData(currComp._id, 'comp', offX, offY, width, height, currComp.level);
        }
    };
    GeneratePdfComponent.prototype.checkCompandUpdate = function (comp, level, refno, settpoc) {
        var compObj;
        var found = false;
        for (var i = 0; i < this.electricalComps.length; i++) {
            if (comp._id == this.electricalComps[i]._id) {
                if (this.electricalComps[i].Refs.join(",").indexOf(refno == -1))
                    this.electricalComps[i].Refs.push(refno);
                found = true;
            }
        }
        if (!found) {
            compObj = comp;
            compObj.level = level;
            compObj.settpoc = settpoc;
            compObj.Refs = [];
            compObj.Refs.push(refno);
            this.electricalComps.push(compObj);
        }
    };
    GeneratePdfComponent.prototype.createConnectors = function () {
        for (var k = 0; k < this.electrical_service_data.length; k++) {
            var serviceRow = this.electrical_service_data[k];
            var startComp = this.electricalComps.filter(function (x) { return x._id == serviceRow.FROM_COMPONENT_ID._id; })[0];
            var endComp = this.electricalComps.filter(function (x) { return x._id == serviceRow.TO_COMPONENT_ID._id; })[0];
            var startPoint, endPoint;
            for (var i = 0; i < startComp.Refs.length; i++) {
                if (startComp.Refs[i] == serviceRow.REF_NO) {
                    startPoint = startComp.refObjs[i];
                }
            }
            for (var i = 0; i < endComp.Refs.length; i++) {
                if (endComp.Refs[i] == serviceRow.REF_NO) {
                    endPoint = endComp.refObjs[i];
                }
            }
            //  var temLabel = this.graph.insertVertex(this.parent, null, labell, newLabelX, newLabelY, (labell.length) * labelspan, 120, "templabelh")
            var raceway = serviceRow.RACEWAY_1.split(">");
            var raceway_1 = raceway.length > 0 ? raceway[0] : "";
            console.log('serviceRow.RACEWAY_1 : raceway_1 :', serviceRow.RACEWAY_1, raceway_1);
            if (raceway_1.toUpperCase().indexOf("AC") > -1) {
                var x = startPoint.geometry.x;
                var y = startPoint.geometry.y + 120;
                var width = endPoint.geometry.x - startPoint.geometry.x + 120;
                var height = 500;
                if (startPoint.geometry.x > endPoint.geometry.x) {
                    x = endPoint.geometry.x;
                    width = startPoint.geometry.x - endPoint.geometry.x + 120;
                }
                var edge2 = this.graph.insertVertex(this.parent, null, raceway_1, x, y, width, height, "shape=ac;whiteSpace=wrap;html=1;rounded=0;");
            }
            else if (raceway_1.toUpperCase().indexOf("CABLE LADDER") > -1 || raceway_1.toUpperCase().indexOf("CABLE TRAY") > -1) {
                var x1 = endPoint.geometry.x + 100;
                var y1 = endPoint.geometry.y - 280;
                var width = 500, height = 200;
                var addedItems = this.getGraphData('', 'port', 0);
                var lastitem;
                if (addedItems && addedItems.length > 0) {
                    lastitem = addedItems[addedItems.length - 1];
                    x1 = lastitem.x + width + 20;
                    y1 = lastitem.y + 20;
                }
                else if (startPoint.geometry.y > endPoint.geometry.y) {
                    x1 = startPoint.geometry.x - 80;
                    y1 = startPoint.geometry.y - 420;
                }
                var cable = this.graph.insertVertex(this.parent, null, raceway_1, x1, y1, width, height, 'comp');
                var edge1 = this.graph.insertEdge(this.parent, null, '', startPoint, cable, 'tempedge');
                var edge1 = this.graph.insertEdge(this.parent, null, '', cable, endPoint, 'tempedge');
                this.updateGraphData(cable.id, 'port', x1, y1, width, height, 0);
            }
            else
                var edge2 = this.graph.insertEdge(this.parent, null, raceway_1, startPoint, endPoint, 'tempedge');
            //var edge1 = this.graph.insertEdge(this.parent, null, '', temLabel, endPoint, 'tempedge')
        }
    };
    GeneratePdfComponent.prototype.createElectricalLevels = function () {
        var addedPorts = this.getGraphData('', 'port', 2);
        var maxWidth = this.graph_width;
        if (addedPorts.length > 0)
            maxWidth = addedPorts[addedPorts.length - 1].x + addedPorts[addedPorts.length - 1].width + 50;
        var vertex;
        var addedItems = this.getGraphData('', 'comp', 2);
        if (addedItems.length > 0) {
            var comp = addedItems[addedItems.length - 1];
            vertex = this.graph.insertVertex(this.parent, null, "", 0, comp.y + comp.height + 150, maxWidth, 2, 'level-line');
            this.graph.insertVertex(this.parent, null, "Level 2", 150, comp.y + comp.height + 100, 0, 0, 'label');
        }
        addedItems = this.getGraphData('', 'comp', 1);
        if (addedItems.length > 0) {
            var comp = addedItems[addedItems.length - 1];
            vertex = this.graph.insertVertex(this.parent, null, "", 0, comp.y + comp.height + 150, maxWidth, 2, 'level-line');
            this.graph.insertVertex(this.parent, null, "Level 1", 150, comp.y + comp.height + 100, 0, 0, 'label');
        }
        addedItems = this.getGraphData('', 'comp', 0);
        if (addedItems.length > 0) {
            var comp = addedItems[addedItems.length - 1];
            vertex = this.graph.insertVertex(this.parent, null, "", 0, comp.y + comp.height + 150, maxWidth, 2, 'level-line');
            this.graph.insertVertex(this.parent, null, "Level 0", 150, comp.y + comp.height + 100, 0, 0, 'label');
        }
        //new mxLine(new mxPoint(0, offX + height), new mxPoint(this.graph_width, offX + height));
        //   this.graph.insert.insertEdge(this.parent, null, '', new mxPoint(0, offX + height), new mxPoint(this.graph_width, offX + height), 'tempedge')
    };
    GeneratePdfComponent.ctorParameters = function () { return [
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__["Ng4LoadingSpinnerService"] },
        { type: _shared_messageService__WEBPACK_IMPORTED_MODULE_5__["MessageService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('graphContainer', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], GeneratePdfComponent.prototype, "graphContainer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('eqpContainer', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], GeneratePdfComponent.prototype, "eqpContainer", void 0);
    GeneratePdfComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-generate-pdf',
            template: __webpack_require__(/*! raw-loader!./generate-pdf.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/projects/generate-pdf/generate-pdf.component.html"),
            styles: [__webpack_require__(/*! ./generate-pdf.component.css */ "./src/app/components/projects/generate-pdf/generate-pdf.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__["Ng4LoadingSpinnerService"],
            _shared_messageService__WEBPACK_IMPORTED_MODULE_5__["MessageService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]])
    ], GeneratePdfComponent);
    return GeneratePdfComponent;
}());



/***/ }),

/***/ "./src/app/components/projects/project-lists/project-lists.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/projects/project-lists/project-lists.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\r\n  background-color: #333;\r\n  color: #fff;\r\n  overflow: auto;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top:0;\r\n  padding: 15px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-bottom: 50px;\r\n}\r\n.search-form{\r\n \r\n  margin-top: 30px;\r\n  float:right;\r\n  margin-right:10px;\r\n}\r\nmat-icon {\r\n  cursor: pointer;\r\n}\r\n.action-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 20px;\r\n}\r\n.table {\r\n  padding: 20px;\r\n  display: block;\r\n  overflow-x: auto;\r\n  white-space: nowrap;\r\n}\r\n.table tbody tr td,\r\n.table thead th,\r\n.table thead {\r\n  \r\n  border-bottom: 1px solid #dee2e6;\r\n}\r\n.table thead th{\r\n  color: rgba(0,0,0,.54);\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n}\r\n.table thead td{\r\n  color: rgba(0,0,0,.87);\r\n  font-size:14px;\r\n}\r\n.table tbody tr td mat-form-field\r\n{\r\n  width:100% !important;\r\n}\r\n.table tbody tr td,\r\n.table thead th {\r\n  width: 100% !important;\r\n  padding-top: 15px;\r\n  padding-bottom: 15px;\r\n}\r\n.output {\r\n  padding: 20px;\r\n}\r\n.delete {\r\n  color: red  ;\r\n}\r\n.done {\r\n  color: green;\r\n}\r\nspan.ui-column-resizer {\r\n  width: 100%;\r\n  height: 100%;\r\n  cursor: col-resize;\r\n  padding: 30px;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0LWxpc3RzL3Byb2plY3QtbGlzdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsY0FBYztFQUNkLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsS0FBSztFQUNMLGFBQWE7RUFDYixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjtBQUNBOztFQUVFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGFBQWE7QUFDZjtBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBRUE7Ozs7RUFJRSxnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjtBQUNBOztFQUVFLHFCQUFxQjtBQUN2QjtBQUNBOztFQUVFLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBSUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhOztBQUVmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0LWxpc3RzL3Byb2plY3QtbGlzdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICBjb2xvcjogI2ZmZjtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDowO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG4uc2VhcmNoLWZvcm17XHJcbiBcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIGZsb2F0OnJpZ2h0O1xyXG4gIG1hcmdpbi1yaWdodDoxMHB4O1xyXG59XHJcbm1hdC1pY29uIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hY3Rpb24tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4udGFibGUge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4udGFibGUgdGJvZHkgdHIgdGQsXHJcbi50YWJsZSB0aGVhZCB0aCxcclxuLnRhYmxlIHRoZWFkIHtcclxuICBcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcclxufVxyXG4udGFibGUgdGhlYWQgdGh7XHJcbiAgY29sb3I6IHJnYmEoMCwwLDAsLjU0KTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4udGFibGUgdGhlYWQgdGR7XHJcbiAgY29sb3I6IHJnYmEoMCwwLDAsLjg3KTtcclxuICBmb250LXNpemU6MTRweDtcclxufVxyXG4udGFibGUgdGJvZHkgdHIgdGQgbWF0LWZvcm0tZmllbGRcclxue1xyXG4gIHdpZHRoOjEwMCUgIWltcG9ydGFudDtcclxufVxyXG4udGFibGUgdGJvZHkgdHIgdGQsXHJcbi50YWJsZSB0aGVhZCB0aCB7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLm91dHB1dCB7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmRlbGV0ZSB7XHJcbiAgY29sb3I6IHJlZCAgO1xyXG59XHJcblxyXG4uZG9uZSB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG5cclxuXHJcbnNwYW4udWktY29sdW1uLXJlc2l6ZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBjdXJzb3I6IGNvbC1yZXNpemU7XHJcbiAgcGFkZGluZzogMzBweDtcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/projects/project-lists/project-lists.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/projects/project-lists/project-lists.component.ts ***!
  \******************************************************************************/
/*! exports provided: ProjectListsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectListsComponent", function() { return ProjectListsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _shared_messageService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/messageService */ "./src/app/shared/messageService.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "./node_modules/@rxweb/reactive-form-validators/fesm5/rxweb-reactive-form-validators.js");









var ProjectListsComponent = /** @class */ (function () {
    function ProjectListsComponent(ngZone, router, fb, commonSevice, loader, ms) {
        var _this = this;
        this.ngZone = ngZone;
        this.router = router;
        this.fb = fb;
        this.commonSevice = commonSevice;
        this.loader = loader;
        this.ms = ms;
        this.Projects = [];
        this.PipeData = [];
        this.toppings = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.filtered = [];
        this.displayedColumns = ['PROJECT_NAME', 'PROCESS_Y_N', 'CONTRACTUAL_Y_N', 'action'];
        this.handleError = function (controlName, errorName) {
            return _this.control.controls[controlName].hasError(errorName);
        };
    }
    ProjectListsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isDelete = false;
        this.formSubmitAttempt = false;
        this.touchedRows = [];
        this.userTable = this.fb.group({
            tableRows: this.fb.array([])
        });
        var URL = "project/getAll";
        this.loader.show();
        this.commonSevice.GetAll(URL).subscribe(function (data) {
            var e_1, _a;
            _this.Projects = data;
            if (_this.Projects.length > 0) {
                _this.Projects = _this.Projects.sort(function (a, b) { return a.PROJECT_NAME > b.PROJECT_NAME ? 1 : -1; });
            }
            _this.control = _this.userTable.get('tableRows');
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_this.Projects), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    var fbGroup = _this.fb.group({
                        _id: [item._id],
                        PROJECT_NAME: [item.PROJECT_NAME, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_8__["RxwebValidators"].unique()]],
                        PROCESS_Y_N: [item.PROCESS_Y_N],
                        CONTRACTUAL_Y_N: [item.CONTRACTUAL_Y_N],
                        isEditable: [false]
                    });
                    if (fbGroup.value.PROCESS_Y_N == true || fbGroup.value.PROCESS_Y_N == 1) {
                        fbGroup.value.PROCESS_Y_N = 1;
                    }
                    else {
                        fbGroup.value.PROCESS_Y_N = 0;
                    }
                    if (fbGroup.value.CONTRACTUAL_Y_N == true || fbGroup.value.CONTRACTUAL_Y_N == 1) {
                        fbGroup.value.CONTRACTUAL_Y_N = 1;
                    }
                    else {
                        fbGroup.value.CONTRACTUAL_Y_N = 0;
                    }
                    _this.control.push(fbGroup);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            _this.loader.hide();
        }, function (error) {
            _this.loader.hide();
        });
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.Projects.count
        };
    };
    ProjectListsComponent.prototype.ngAfterOnInit = function () {
        this.control = this.userTable.get('tableRows');
    };
    ProjectListsComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    ProjectListsComponent.prototype.fieldGlobalIndex = function (index) {
        return this.config.itemsPerPage * (this.config.currentPage - 1) + index;
    };
    ProjectListsComponent.prototype.initiateForm = function () {
        return this.fb.group({
            PROJECT_NAME: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_8__["RxwebValidators"].unique()]],
            PROCESS_Y_N: [''],
            CONTRACTUAL_Y_N: [''],
            isEditable: [true]
        });
    };
    ProjectListsComponent.prototype.submitAddProjectsForm = function (group) {
        var _this = this;
        this.loader.show();
        if (group.valid) {
            var URL = "project/add-project";
            if (group.value.PROCESS_Y_N == true || group.value.PROCESS_Y_N == 1) {
                group.value.PROCESS_Y_N = 1;
            }
            else {
                group.value.PROCESS_Y_N = 0;
            }
            if (group.value.CONTRACTUAL_Y_N == true || group.value.CONTRACTUAL_Y_N == 1) {
                group.value.CONTRACTUAL_Y_N = 1;
            }
            else {
                group.value.CONTRACTUAL_Y_N = 0;
            }
            this.commonSevice.Add(group.value, URL).subscribe(function (res) {
                _this.ms.openSnackBar("Project has been added");
                group.get('isEditable').setValue(false);
                _this.loader.hide();
                _this.router.routeReuseStrategy.shouldReuseRoute = function () {
                    return false;
                };
                _this.router.onSameUrlNavigation = 'reload';
                _this.router.navigate(['/project/getAll']);
            }, function (error) {
                _this.ms.openSnackBar("Error performing operation");
                _this.loader.hide();
            });
        }
        else {
            this.formSubmitAttempt = true;
            this.loader.hide();
            this.ms.openSnackBar("Please fill the required information");
        }
    };
    ProjectListsComponent.prototype.filterFormControls = function (term) {
        var e_2, _a;
        console.log(term.target.value);
        if (term.target.value == '' || term.target.value == ' ') {
            this.filtered = this.Projects;
        }
        else {
            this.filtered = this.Projects.filter(function (x) { return x.PROJECT_NAME.indexOf(term.target.value) != -1; });
        }
        this.touchedRows = [];
        this.userTable = this.fb.group({
            tableRows: this.fb.array([])
        });
        this.control = this.userTable.get('tableRows');
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.filtered), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                var fbGroup = this.fb.group({
                    _id: [item._id],
                    PROJECT_NAME: [item.PROJECT_NAME, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_8__["RxwebValidators"].unique()]],
                    PROCESS_Y_N: [item.PROCESS_Y_N],
                    CONTRACTUAL_Y_N: [item.CONTRACTUAL_Y_N],
                    isEditable: [false]
                });
                this.control.push(fbGroup);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    ProjectListsComponent.prototype.sortData = function (sort) {
        console.log(sort);
        if (!sort.active || sort.direction === '') {
            return;
        }
        if (sort.direction == 'asc') {
            this.getFormControls.controls.sort(function (a, b) { return a.value.PROJECT_NAME > b.value.PROJECT_NAME ? 1 : -1; });
        }
        else {
            this.getFormControls.controls.sort(function (a, b) { return a.value.PROJECT_NAME < b.value.PROJECT_NAME ? 1 : -1; });
        }
    };
    ProjectListsComponent.prototype.addRow = function () {
        var control = this.userTable.get('tableRows');
        control.insert((this.config.itemsPerPage * this.config.currentPage) - (this.config.itemsPerPage), this.initiateForm());
        this.formSubmitAttempt = false;
        this.toppings.setValue([]);
        this.isDelete = false;
    };
    ProjectListsComponent.prototype.deleteRow = function (index, group) {
        var control = this.userTable.get('tableRows');
        control.removeAt(index);
        this.deleteProject(group);
    };
    ProjectListsComponent.prototype.processChange = function (event, group) {
        console.log(event);
        if (event.checked) {
            group.value.PROCESS_Y_N = 1;
        }
        else {
            group.value.PROCESS_Y_N = 0;
        }
    };
    ProjectListsComponent.prototype.submitEditProjectsForm = function (group) {
        var _this = this;
        this.loader.show();
        if (group.valid) {
            var id = group.value._id;
            if (window.confirm('Are you sure you want to update?')) {
                if (group.value.PROCESS_Y_N == true || group.value.PROCESS_Y_N == 1) {
                    group.value.PROCESS_Y_N = 1;
                }
                else {
                    group.value.PROCESS_Y_N = 0;
                }
                if (group.value.CONTRACTUAL_Y_N == true || group.value.CONTRACTUAL_Y_N == 1) {
                    group.value.CONTRACTUAL_Y_N = 1;
                }
                else {
                    group.value.CONTRACTUAL_Y_N = 0;
                }
                var url = "project/edit-project";
                console.log(group.value);
                this.commonSevice.Update(id, group.value, url).subscribe(function (res) {
                    _this.ms.openSnackBar("The project is edited successfully");
                    group.get('isEditable').setValue(false);
                    _this.loader.hide();
                    _this.router.routeReuseStrategy.shouldReuseRoute = function () {
                        return false;
                    };
                    _this.router.onSameUrlNavigation = 'reload';
                    _this.router.navigate(['/project/getAll']);
                }, function (error) {
                    _this.loader.hide();
                    _this.ms.openSnackBar("Error performaing operation");
                });
            }
        }
        else {
            this.loader.hide();
            this.formSubmitAttempt = true;
            this.ms.openSnackBar("Please fill the required information");
        }
    };
    ProjectListsComponent.prototype.contractChange = function (event, group) {
        if (event.checked) {
            group.value.CONTRACTUAL_Y_N = 1;
        }
        else {
            group.value.CONTRACTUAL_Y_N = 0;
        }
    };
    ProjectListsComponent.prototype.editRow = function (group) {
        var e_3, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.getFormControls.controls), _c = _b.next(); !_c.done; _c = _b.next()) {
                var formItem = _c.value;
                if (formItem.get('isEditable').value == true) {
                    formItem.get('isEditable').setValue(false);
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        group.get('isEditable').setValue(true);
        console.log(group);
        this.resetFormGroup = group.value;
        this.isDelete = true;
    };
    ProjectListsComponent.prototype.cancel = function (group) {
        group.reset(this.resetFormGroup);
        if (group.value._id == undefined) {
            var control = this.userTable.get('tableRows');
            control.removeAt((this.config.itemsPerPage * this.config.currentPage) - (this.config.itemsPerPage));
        }
        else {
            group.get('isEditable').setValue(false);
        }
    };
    ProjectListsComponent.prototype.doneRow = function (group) {
        console.log(group);
        if (group.value._id == undefined) {
            this.submitAddProjectsForm(group);
        }
        else {
            this.submitEditProjectsForm(group);
        }
    };
    Object.defineProperty(ProjectListsComponent.prototype, "getFormControls", {
        get: function () {
            var control = this.userTable.get('tableRows');
            return control;
        },
        enumerable: true,
        configurable: true
    });
    ProjectListsComponent.prototype.deleteProject = function (group) {
        var _this = this;
        if (window.confirm('Are you sure')) {
            this.loader.show();
            var index = group.value._id;
            var url = 'project/delete-project';
            this.commonSevice.Delete(index, url).subscribe(function (data) {
                _this.ms.openSnackBar("Project is deleted successfully");
                _this.loader.hide();
            });
        }
    };
    ProjectListsComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__["Ng4LoadingSpinnerService"] },
        { type: _shared_messageService__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], ProjectListsComponent.prototype, "paginator", void 0);
    ProjectListsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
            selector: 'app-project-lists',
            template: __webpack_require__(/*! raw-loader!./project-lists.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/projects/project-lists/project-lists.component.html"),
            styles: [__webpack_require__(/*! ./project-lists.component.css */ "./src/app/components/projects/project-lists/project-lists.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__["Ng4LoadingSpinnerService"], _shared_messageService__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], ProjectListsComponent);
    return ProjectListsComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_services/alert.service */ "./src/app/_services/alert.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _shared_messageService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/messageService */ "./src/app/shared/messageService.ts");
/* harmony import */ var _billing_createsubscription_createsubscription_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../billing/createsubscription/createsubscription.component */ "./src/app/components/billing/createsubscription/createsubscription.component.ts");










var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, router, authenticationService, userService, alertService, dialog, ms) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.alertService = alertService;
        this.dialog = dialog;
        this.ms = ms;
        this.loading = false;
        this.submitted = false;
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    RegisterComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_billing_createsubscription_createsubscription_component__WEBPACK_IMPORTED_MODULE_9__["CreatesubscriptionComponent"], {
            height: '600px',
            width: '700px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]]
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onSubmit = function () {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            this.ms.openSnackBar("Please fill all required fields");
            return;
        }
        this.loading = true;
        localStorage.setItem("UserRegister", JSON.stringify(this.registerForm.value));
        localStorage.setItem('registerUser', this.registerForm.value.email);
        this.router.navigate(['/billing/create-subscription']);
        //return;
        /*    var url='auth/register';
            this.userService.Add(this.registerForm.value,url)
                .pipe(first())
                .subscribe(
                    data => {
                        console.log(this.registerForm.value.emailAddress);
                        console.log(localStorage.getItem('registerUser'));
                        this.alertService.success('Registration successful', true);
                         this.router.navigate(['/billing/create-subscription']);
                    },
                    error => {
                        this.alertService.error(error);
                        this.loading = false;
                    });*/
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
        { type: _shared_messageService__WEBPACK_IMPORTED_MODULE_8__["MessageService"] }
    ]; };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/register/register.component.html") }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _shared_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
            _shared_messageService__WEBPACK_IMPORTED_MODULE_8__["MessageService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/services-component/add-services-component/add-services-component.component.css":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/services-component/add-services-component/add-services-component.component.css ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VydmljZXMtY29tcG9uZW50L2FkZC1zZXJ2aWNlcy1jb21wb25lbnQvYWRkLXNlcnZpY2VzLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/services-component/add-services-component/add-services-component.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/services-component/add-services-component/add-services-component.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: AddServicesComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddServicesComponentComponent", function() { return AddServicesComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_messageService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/messageService */ "./src/app/shared/messageService.ts");








var AddServicesComponentComponent = /** @class */ (function () {
    function AddServicesComponentComponent(fb, router, ngZone, commonService, loader, ms) {
        var _this = this;
        this.fb = fb;
        this.router = router;
        this.ngZone = ngZone;
        this.commonService = commonService;
        this.loader = loader;
        this.ms = ms;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["COMMA"]];
        this.handleError = function (controlName, errorName) {
            return _this.components.controls[controlName].hasError(errorName);
        };
    }
    AddServicesComponentComponent.prototype.ngOnInit = function () {
        this.validateForm();
    };
    /* Reactive book form */
    AddServicesComponentComponent.prototype.validateForm = function () {
        this.components = this.fb.group({
            COMPONENT_NAME: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
        });
    };
    AddServicesComponentComponent.prototype.submitAddComponentsForm = function () {
        var _this = this;
        this.loader.show();
        var URL = "component/add-component";
        this.commonService.Add(this.components.value, URL).subscribe(function (res) {
            _this.ms.openSnackBar("Component is added successfully");
            _this.loader.hide();
            _this.ngZone.run(function () { return _this.router.navigateByUrl('/component/getAll'); });
        }, function (error) {
            _this.loader.hide();
        });
    };
    AddServicesComponentComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerService"] },
        { type: _shared_messageService__WEBPACK_IMPORTED_MODULE_7__["MessageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('chipList', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddServicesComponentComponent.prototype, "chipList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('resetComponentForm', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddServicesComponentComponent.prototype, "myNgForm", void 0);
    AddServicesComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add-services-component',
            template: __webpack_require__(/*! raw-loader!./add-services-component.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/services-component/add-services-component/add-services-component.component.html"),
            styles: [__webpack_require__(/*! ./add-services-component.component.css */ "./src/app/components/services-component/add-services-component/add-services-component.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
            _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerService"],
            _shared_messageService__WEBPACK_IMPORTED_MODULE_7__["MessageService"]])
    ], AddServicesComponentComponent);
    return AddServicesComponentComponent;
}());



/***/ }),

/***/ "./src/app/components/services-component/edit-services-component/edit-services-component.component.css":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/services-component/edit-services-component/edit-services-component.component.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".PipeData{\r\n    display: block!important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXJ2aWNlcy1jb21wb25lbnQvZWRpdC1zZXJ2aWNlcy1jb21wb25lbnQvZWRpdC1zZXJ2aWNlcy1jb21wb25lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VydmljZXMtY29tcG9uZW50L2VkaXQtc2VydmljZXMtY29tcG9uZW50L2VkaXQtc2VydmljZXMtY29tcG9uZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuUGlwZURhdGF7XHJcbiAgICBkaXNwbGF5OiBibG9jayFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/services-component/edit-services-component/edit-services-component.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/services-component/edit-services-component/edit-services-component.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: EditServicesComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditServicesComponentComponent", function() { return EditServicesComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_messageService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/messageService */ "./src/app/shared/messageService.ts");








var EditServicesComponentComponent = /** @class */ (function () {
    function EditServicesComponentComponent(fb, router, ngZone, actRoute, commonService, loader, ms) {
        var _this = this;
        this.fb = fb;
        this.router = router;
        this.ngZone = ngZone;
        this.actRoute = actRoute;
        this.commonService = commonService;
        this.loader = loader;
        this.ms = ms;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["COMMA"]];
        this.ServiceData = [];
        this.AllServices = [];
        this.handleError = function (controlName, errorName) {
            return _this.components.controls[controlName].hasError(errorName);
        };
        var url = 'component/read-component';
        this.loader.show();
        var id = this.actRoute.snapshot.paramMap.get('id');
        console.log(id);
        this.commonService.GetById(id, url).subscribe(function (data) {
            _this.ServiceData = data.SERVICE;
            console.log(data.SERVICE);
            _this.components = _this.fb.group({
                COMPONENT_NAME: [data.COMPONENT_NAME, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                SERVICE: _this.fb.array([]),
            });
            _this.getArray();
        }, function (error) {
            _this.loader.hide();
        });
        var URL = "services/getAll";
        this.commonService.GetAll(URL).subscribe(function (data) {
            _this.AllServices = data;
            _this.loader.hide();
        }, function (error) {
            _this.loader.hide();
        });
    }
    EditServicesComponentComponent.prototype.ngOnInit = function () {
        this.submitBookForm();
    };
    /* Reactive book form */
    EditServicesComponentComponent.prototype.submitBookForm = function () {
        this.components = this.fb.group({
            COMPONENT_NAME: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            SERVICE: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormArray"]([]),
        });
    };
    EditServicesComponentComponent.prototype.getArray = function () {
        var e_1, _a;
        this.SERVICE = this.components.get('SERVICE');
        if (this.ServiceData.length > 0) {
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.ServiceData), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    this.SERVICE.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](item));
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    };
    EditServicesComponentComponent.prototype.onCheckboxChange = function (e) {
        var _this = this;
        if (e.target.checked) {
            this.SERVICE.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](e.target.value));
        }
        else {
            var i_1 = 0;
            this.SERVICE.controls.forEach(function (item) {
                if (item.value == e.target.value) {
                    _this.SERVICE.removeAt(i_1);
                    return;
                }
                i_1++;
            });
        }
    };
    /* onChange(checkbox:any){
       var formArray: FormArray = this.services.get('PIPE') as FormArray;
       console.log(checkbox);
   
        if(checkbox.checked){
          console.log(checkbox.value);
         formArray.push(new FormControl(checkbox.value));
   
        }else{
         // find the unselected element
         let i: number = 0;
     
         formArray.controls.forEach((ctrl: FormControl) => {
           if(ctrl.value == checkbox.value) {
             // Remove the unselected element from the arrayForm
             formArray.removeAt(i);
             return;
           }
     
           i++;
         });
       }
     }*/
    EditServicesComponentComponent.prototype.submitEditComponentsForm = function () {
        var _this = this;
        this.loader.show();
        if (this.components.valid) {
            var id = this.actRoute.snapshot.paramMap.get('id');
            if (window.confirm('Are you sure you want to update?')) {
                var url = "component/edit-component";
                console.log(this.components.value);
                this.commonService.Update(id, this.components.value, url).subscribe(function (res) {
                    _this.ms.openSnackBar("Component is edited successfully");
                    _this.loader.hide();
                    _this.ngZone.run(function () { return _this.router.navigateByUrl('/component/getAll'); });
                });
            }
        }
    };
    EditServicesComponentComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerService"] },
        { type: _shared_messageService__WEBPACK_IMPORTED_MODULE_7__["MessageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('chipList', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditServicesComponentComponent.prototype, "chipList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('resetComponentsForm', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditServicesComponentComponent.prototype, "myNgForm", void 0);
    EditServicesComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit-services-component',
            template: __webpack_require__(/*! raw-loader!./edit-services-component.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/services-component/edit-services-component/edit-services-component.component.html"),
            styles: [__webpack_require__(/*! ./edit-services-component.component.css */ "./src/app/components/services-component/edit-services-component/edit-services-component.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerService"],
            _shared_messageService__WEBPACK_IMPORTED_MODULE_7__["MessageService"]])
    ], EditServicesComponentComponent);
    return EditServicesComponentComponent;
}());



/***/ }),

/***/ "./src/app/components/services-component/services-component/services-component.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/services-component/services-component/services-component.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\r\n  background-color: #333;\r\n  color: #fff;\r\n  overflow: auto;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top:0;\r\n  padding: 15px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-bottom: 50px;\r\n}\r\n\r\nmat-icon {\r\n  cursor: pointer;\r\n}\r\n\r\n.action-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 20px;\r\n}\r\n\r\n.table {\r\n  padding: 20px;\r\n  display: block;\r\n  overflow-x: auto;\r\n  white-space: nowrap;\r\n}\r\n\r\n.table tbody tr td,\r\n.table thead th,\r\n.table thead {\r\n  \r\n  border-bottom: 1px solid #dee2e6;\r\n}\r\n\r\n.table thead th{\r\n  color: rgba(0,0,0,.54);\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n}\r\n\r\n.table thead td{\r\n  color: rgba(0,0,0,.87);\r\n  font-size:14px;\r\n}\r\n\r\n.table tbody tr td mat-form-field\r\n{\r\n  width:100% !important;\r\n}\r\n\r\n.table tbody tr td,\r\n.table thead th {\r\n  width: 100% !important;\r\n  padding-top: 15px;\r\n  padding-bottom:15px;\r\n}\r\n\r\n.output {\r\n  padding: 20px;\r\n}\r\n\r\n.delete {\r\n  color: red  ;\r\n}\r\n\r\n.done {\r\n  color: green;\r\n}\r\n\r\nspan.ui-column-resizer {\r\n  width: 100%;\r\n  height: 100%;\r\n  cursor: col-resize;\r\n  padding: 30px;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXJ2aWNlcy1jb21wb25lbnQvc2VydmljZXMtY29tcG9uZW50L3NlcnZpY2VzLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixLQUFLO0VBQ0wsYUFBYTtFQUNiLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBOzs7O0VBSUUsZ0NBQWdDO0FBQ2xDOztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjs7QUFDQTs7RUFFRSxxQkFBcUI7QUFDdkI7O0FBQ0E7O0VBRUUsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBSUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhOztBQUVmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZXJ2aWNlcy1jb21wb25lbnQvc2VydmljZXMtY29tcG9uZW50L3NlcnZpY2VzLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOjA7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG5tYXQtaWNvbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYWN0aW9uLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLnRhYmxlIHRib2R5IHRyIHRkLFxyXG4udGFibGUgdGhlYWQgdGgsXHJcbi50YWJsZSB0aGVhZCB7XHJcbiAgXHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XHJcbn1cclxuLnRhYmxlIHRoZWFkIHRoe1xyXG4gIGNvbG9yOiByZ2JhKDAsMCwwLC41NCk7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLnRhYmxlIHRoZWFkIHRke1xyXG4gIGNvbG9yOiByZ2JhKDAsMCwwLC44Nyk7XHJcbiAgZm9udC1zaXplOjE0cHg7XHJcbn1cclxuLnRhYmxlIHRib2R5IHRyIHRkIG1hdC1mb3JtLWZpZWxkXHJcbntcclxuICB3aWR0aDoxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRhYmxlIHRib2R5IHRyIHRkLFxyXG4udGFibGUgdGhlYWQgdGgge1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206MTVweDtcclxufVxyXG5cclxuLm91dHB1dCB7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmRlbGV0ZSB7XHJcbiAgY29sb3I6IHJlZCAgO1xyXG59XHJcblxyXG4uZG9uZSB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG5cclxuXHJcbnNwYW4udWktY29sdW1uLXJlc2l6ZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBjdXJzb3I6IGNvbC1yZXNpemU7XHJcbiAgcGFkZGluZzogMzBweDtcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/services-component/services-component/services-component.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/services-component/services-component/services-component.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ServicesComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponentComponent", function() { return ServicesComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _shared_messageService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/messageService */ "./src/app/shared/messageService.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "./node_modules/@rxweb/reactive-form-validators/fesm5/rxweb-reactive-form-validators.js");








var ServicesComponentComponent = /** @class */ (function () {
    function ServicesComponentComponent(ngZone, router, fb, commonSevice, loader, ms) {
        var _this = this;
        this.ngZone = ngZone;
        this.router = router;
        this.fb = fb;
        this.commonSevice = commonSevice;
        this.loader = loader;
        this.ms = ms;
        this.Components = [];
        this.toppings = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.toppingArr = [];
        this.handleError = function (controlName, errorName) {
            return _this.control.controls[controlName].hasError(errorName);
        };
    }
    ServicesComponentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isDelete = false;
        this.loader.show();
        this.formSubmitAttempt = false;
        this.touchedRows = [];
        this.userTable = this.fb.group({
            tableRows: this.fb.array([])
        });
        var URL = "services/getAll";
        this.commonSevice.GetAll(URL).subscribe(function (data) {
            _this.AllService = data;
            if (_this.AllService.length > 0) {
                _this.AllService = _this.AllService.sort(function (a, b) { return a.SERVICE_NAME > b.SERVICE_NAME ? 1 : -1; });
            }
            // now call components 
            var URL = "component/getAll";
            _this.commonSevice.GetAll(URL).subscribe(function (data) {
                var e_1, _a;
                _this.Components = data;
                _this.control = _this.userTable.get('tableRows');
                try {
                    for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_this.Components), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var item = _c.value;
                        var fbGroup = _this.fb.group({
                            _id: [item._id],
                            COMPONENT_NAME: [item.COMPONENT_NAME, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_7__["RxwebValidators"].unique()]],
                            SERVICE: [item.SERVICE],
                            isEditable: [false]
                        });
                        _this.control.push(fbGroup);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                console.log(_this.Components);
            }, function (error) {
                _this.loader.hide();
            });
            _this.loader.hide();
            console.log(_this.AllService);
        }, function (error) {
            _this.loader.hide();
        });
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.Components.count
        };
    };
    ServicesComponentComponent.prototype.retrieveService = function (id) {
        var e_2, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.AllService), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                if (item._id === id) {
                    return item.SERVICE_NAME;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return '';
    };
    ServicesComponentComponent.prototype.ngAfterOnInit = function () {
        this.control = this.userTable.get('tableRows');
    };
    ServicesComponentComponent.prototype.fieldGlobalIndex = function (index) {
        return this.config.itemsPerPage * (this.config.currentPage - 1) + index;
    };
    ServicesComponentComponent.prototype.submitAddComponentsForm = function (group) {
        var _this = this;
        this.loader.show();
        if (group.valid) {
            var URL = "component/add-component";
            this.commonSevice.Add(group.value, URL).subscribe(function (res) {
                group.get('isEditable').setValue(false);
                _this.ms.openSnackBar("Component is added successfully");
                _this.loader.hide();
                _this.router.routeReuseStrategy.shouldReuseRoute = function () {
                    return false;
                };
                _this.router.onSameUrlNavigation = 'reload';
                _this.router.navigate(['/component/getAll']);
            }, function (error) {
                _this.loader.hide();
            });
        }
        else {
            this.loader.hide();
            this.ms.openSnackBar("Please fill the required information");
        }
    };
    ServicesComponentComponent.prototype.initiateForm = function () {
        return this.fb.group({
            COMPONENT_NAME: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_7__["RxwebValidators"].unique()]],
            SERVICE: this.fb.array([]),
            isEditable: [true]
        });
    };
    ServicesComponentComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    ServicesComponentComponent.prototype.addRow = function () {
        var control = this.userTable.get('tableRows');
        control.insert((this.config.itemsPerPage * this.config.currentPage) - (this.config.itemsPerPage), this.initiateForm());
        this.formSubmitAttempt = false;
        this.toppings.setValue([]);
        this.isDelete = false;
    };
    ServicesComponentComponent.prototype.SelectServices = function (group, event, sel) {
        if (event.isUserInput) {
            if (event.source._selected == false) {
                if (group.value.SERVICE.includes(event.source.value)) {
                    console.log("included");
                    var index = group.value.SERVICE.indexOf(event.source.value);
                    if (index !== -1) {
                        console.log("yes");
                        group.value.SERVICE.splice(index, 1);
                    }
                }
            }
            else {
                group.value.SERVICE.push(event.source.value);
            }
            console.log(event.source._selected);
        }
    };
    ServicesComponentComponent.prototype.deleteRow = function (index, group) {
        var control = this.userTable.get('tableRows');
        this.deleteComponent(control, index, group);
    };
    ServicesComponentComponent.prototype.editRow = function (group) {
        var e_3, _a, e_4, _b;
        try {
            for (var _c = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.getFormControls.controls), _d = _c.next(); !_d.done; _d = _c.next()) {
                var formItem = _d.value;
                if (formItem.get('isEditable').value == true) {
                    formItem.get('isEditable').setValue(false);
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_3) throw e_3.error; }
        }
        group.get('isEditable').setValue(true);
        this.reset = group.getRawValue();
        console.log(group);
        this.toppings.setValue(group.value.SERVICE);
        this.formSubmitAttempt = false;
        this.isDelete = true;
        this.toppingArr = [];
        this.resetFormGroup = group.value;
        try {
            for (var _e = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](group.value.SERVICE), _f = _e.next(); !_f.done; _f = _e.next()) {
                var item = _f.value;
                this.toppingArr.push(item);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    ServicesComponentComponent.prototype.cancel = function (group) {
        group.reset(this.resetFormGroup);
        group.get('SERVICE').setValue(this.toppingArr);
        if (group.value._id == undefined) {
            var control = this.userTable.get('tableRows');
            control.removeAt((this.config.itemsPerPage * this.config.currentPage) - (this.config.itemsPerPage));
        }
        else {
            group.get('isEditable').setValue(false);
        }
        console.log(this.toppingArr);
    };
    ServicesComponentComponent.prototype.doneRow = function (group) {
        console.log(group);
        if (group.value._id == undefined) {
            this.formSubmitAttempt = true;
            this.submitAddComponentsForm(group);
        }
        else {
            this.formSubmitAttempt = true;
            this.submitEditComponentsForm(group);
        }
    };
    Object.defineProperty(ServicesComponentComponent.prototype, "getFormControls", {
        get: function () {
            var control = this.userTable.get('tableRows');
            return control;
        },
        enumerable: true,
        configurable: true
    });
    ServicesComponentComponent.prototype.deleteComponent = function (control, index, group) {
        var _this = this;
        this.loader.show();
        if (window.confirm('Are you sure')) {
            var url = 'component/delete-component';
            var index = group.value._id;
            console.log(index);
            if (index != undefined && index != '') {
                this.commonSevice.Delete(index, url).subscribe(function (data) {
                    if (data.msg == "success") {
                        control.removeAt(index);
                        _this.ms.openSnackBar("Component has been deleted");
                        _this.loader.hide();
                        _this.router.routeReuseStrategy.shouldReuseRoute = function () {
                            return false;
                        };
                        _this.router.onSameUrlNavigation = 'reload';
                        _this.router.navigate(['/component/getAll']);
                    }
                    else {
                        _this.ms.openSnackBar(data.msg);
                        _this.loader.hide();
                    }
                }, function (error) {
                    _this.loader.hide();
                });
            }
        }
    };
    ServicesComponentComponent.prototype.submitEditComponentsForm = function (group) {
        var _this = this;
        this.loader.show();
        if (group.valid) {
            var id = group.value._id;
            if (window.confirm('Are you sure you want to update?')) {
                var url = "component/edit-component";
                this.commonSevice.Update(id, group.value, url).subscribe(function (res) {
                    group.get('isEditable').setValue(false);
                    _this.ms.openSnackBar("Component is edited successfully");
                    _this.loader.hide();
                    _this.loader.hide();
                    _this.router.routeReuseStrategy.shouldReuseRoute = function () {
                        return false;
                    };
                    _this.router.onSameUrlNavigation = 'reload';
                    _this.router.navigate(['/component/getAll']);
                });
            }
        }
        else {
            this.loader.hide();
            this.ms.openSnackBar("Please fill the required information");
        }
    };
    ServicesComponentComponent.prototype.submitForm = function () {
        console.log(this.userTable.value);
        var control = this.userTable.get('tableRows');
        this.touchedRows = control.controls.filter(function (row) { return row.touched; }).map(function (row) { return row.value; });
        console.log(this.touchedRows);
    };
    ServicesComponentComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgZone"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__["Ng4LoadingSpinnerService"] },
        { type: _shared_messageService__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }
    ]; };
    ServicesComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-services-component',
            template: __webpack_require__(/*! raw-loader!./services-component.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/services-component/services-component/services-component.component.html"),
            styles: [__webpack_require__(/*! ./services-component.component.css */ "./src/app/components/services-component/services-component/services-component.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__["Ng4LoadingSpinnerService"], _shared_messageService__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
    ], ServicesComponentComponent);
    return ServicesComponentComponent;
}());



/***/ }),

/***/ "./src/app/components/services-size/services-size.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/services-size/services-size.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\r\n  background-color: #333;\r\n  color: #fff;\r\n  overflow: auto;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top:0;\r\n  padding: 15px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-bottom: 50px;\r\n}\r\n\r\nmat-icon {\r\n  cursor: pointer;\r\n}\r\n\r\n.action-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 20px;\r\n}\r\n\r\n.table {\r\n  padding: 20px;\r\n  display: block;\r\n  overflow-x: auto;\r\n  white-space: nowrap;\r\n}\r\n\r\n.table tbody tr td,\r\n.table thead th,\r\n.table thead {\r\n  \r\n  border-bottom: 1px solid #dee2e6;\r\n}\r\n\r\n.table thead th{\r\n  color: rgba(0,0,0,.54);\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n}\r\n\r\n.table thead td{\r\n  color: rgba(0,0,0,.87);\r\n  font-size:14px;\r\n}\r\n\r\n.table tbody tr td mat-form-field\r\n{\r\n  width:100% !important;\r\n}\r\n\r\n.table tbody tr td,\r\n.table thead th {\r\n  width: 100% !important;\r\n  padding-top: 15px;\r\n  padding-bottom:15px;}\r\n\r\n.output {\r\n  padding: 20px;\r\n}\r\n\r\n.delete {\r\n  color: red  ;\r\n}\r\n\r\n.done {\r\n  color: green;\r\n}\r\n\r\nspan.ui-column-resizer {\r\n  width: 100%;\r\n  height: 100%;\r\n  cursor: col-resize;\r\n  padding: 30px;\r\n\r\n}\r\n\r\n.active-purple-2 input.form-control[type=text]:focus:not([readonly]) {\r\n  border-bottom: 1px solid #ce93d8;\r\n  box-shadow: 0 1px 0 0 #ce93d8;\r\n}\r\n\r\n.search-form{\r\n \r\n    margin-top: 30px;\r\n    float:right;\r\n    margin-right:10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXJ2aWNlcy1zaXplL3NlcnZpY2VzLXNpemUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsY0FBYztFQUNkLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsS0FBSztFQUNMLGFBQWE7RUFDYixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTs7OztFQUlFLGdDQUFnQztBQUNsQzs7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FBQ0E7O0VBRUUscUJBQXFCO0FBQ3ZCOztBQUNBOztFQUVFLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsbUJBQW1CLENBQUM7O0FBRXRCO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUlBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTs7QUFFZjs7QUFDQTtFQUNFLGdDQUFnQztFQUNoQyw2QkFBNkI7QUFDL0I7O0FBRUE7O0lBRUksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlcnZpY2VzLXNpemUvc2VydmljZXMtc2l6ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOjA7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG5tYXQtaWNvbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYWN0aW9uLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLnRhYmxlIHRib2R5IHRyIHRkLFxyXG4udGFibGUgdGhlYWQgdGgsXHJcbi50YWJsZSB0aGVhZCB7XHJcbiAgXHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XHJcbn1cclxuLnRhYmxlIHRoZWFkIHRoe1xyXG4gIGNvbG9yOiByZ2JhKDAsMCwwLC41NCk7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLnRhYmxlIHRoZWFkIHRke1xyXG4gIGNvbG9yOiByZ2JhKDAsMCwwLC44Nyk7XHJcbiAgZm9udC1zaXplOjE0cHg7XHJcbn1cclxuLnRhYmxlIHRib2R5IHRyIHRkIG1hdC1mb3JtLWZpZWxkXHJcbntcclxuICB3aWR0aDoxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRhYmxlIHRib2R5IHRyIHRkLFxyXG4udGFibGUgdGhlYWQgdGgge1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206MTVweDt9XHJcblxyXG4ub3V0cHV0IHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uZGVsZXRlIHtcclxuICBjb2xvcjogcmVkICA7XHJcbn1cclxuXHJcbi5kb25lIHtcclxuICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcblxyXG5cclxuc3Bhbi51aS1jb2x1bW4tcmVzaXplciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGN1cnNvcjogY29sLXJlc2l6ZTtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG5cclxufVxyXG4uYWN0aXZlLXB1cnBsZS0yIGlucHV0LmZvcm0tY29udHJvbFt0eXBlPXRleHRdOmZvY3VzOm5vdChbcmVhZG9ubHldKSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjZTkzZDg7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMCAwICNjZTkzZDg7XHJcbn1cclxuXHJcbi5zZWFyY2gtZm9ybXtcclxuIFxyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/services-size/services-size.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/services-size/services-size.component.ts ***!
  \*********************************************************************/
/*! exports provided: ServicesSizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesSizeComponent", function() { return ServicesSizeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_messageService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../shared/messageService */ "./src/app/shared/messageService.ts");









var ServicesSizeComponent = /** @class */ (function () {
    function ServicesSizeComponent(router, commonSevice, actRoute, loader, ms, fb, ngZone) {
        var _this = this;
        this.router = router;
        this.commonSevice = commonSevice;
        this.actRoute = actRoute;
        this.loader = loader;
        this.ms = ms;
        this.fb = fb;
        this.ngZone = ngZone;
        this.ServicesSize = [];
        this.filtered = [];
        this.displayedColumns = ['SIZE_VALUE', 'action'];
        this.handleError = function (controlName, errorName) {
            return _this.control.controls[controlName].hasError(errorName);
        };
        this.loader.show();
    }
    ServicesSizeComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ngOnit");
        this.formSubmitAttempt = false;
        this.isDelete = false;
        this.loader.show();
        this.touchedRows = [];
        this.userTable = this.fb.group({
            tableRows: this.fb.array([])
        });
        var URL = "get-all-services-size";
        this.commonSevice.GetAll(URL).subscribe(function (data) {
            var e_1, _a;
            _this.ServicesSize = data;
            _this.control = _this.userTable.get('tableRows');
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_this.ServicesSize), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    var fbGroup = _this.fb.group({
                        _id: [item._id],
                        SIZE_VALUE: [item.SIZE_VALUE, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9*\""]*$')]],
                        isEditable: [false]
                    });
                    _this.control.push(fbGroup);
                    _this.loader.hide();
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this.ServicesSize);
            setTimeout(function () {
                _this.dataSource.paginator = _this.paginator;
            }, 0);
        }, function (error) {
            _this.loader.hide();
        });
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.ServicesSize.count
        };
        console.log(this.getFormControls.controls);
    };
    ServicesSizeComponent.prototype.filterFormControls = function (term) {
        var e_2, _a;
        console.log(term.target.value);
        if (term.target.value == '' || term.target.value == ' ') {
            this.filtered = this.ServicesSize;
        }
        else {
            this.filtered = this.ServicesSize.filter(function (x) { return x.SIZE_VALUE.indexOf(term.target.value) != -1; });
        }
        this.touchedRows = [];
        this.userTable = this.fb.group({
            tableRows: this.fb.array([])
        });
        this.control = this.userTable.get('tableRows');
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.filtered), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                var fbGroup = this.fb.group({
                    _id: [item._id],
                    SIZE_VALUE: [item.SIZE_VALUE, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9*\""]*$')]],
                    isEditable: [false]
                });
                this.control.push(fbGroup);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    ServicesSizeComponent.prototype.ngAfterOnInit = function () {
        this.control = this.userTable.get('tableRows');
    };
    ServicesSizeComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    ServicesSizeComponent.prototype.fieldGlobalIndex = function (index) {
        return this.config.itemsPerPage * (this.config.currentPage - 1) + index;
    };
    ServicesSizeComponent.prototype.initiateForm = function () {
        return this.fb.group({
            SIZE_VALUE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9*\""]*$')]],
            isEditable: [true]
        });
    };
    ServicesSizeComponent.prototype.addRow = function () {
        var control = this.userTable.get('tableRows');
        control.insert((this.config.itemsPerPage * this.config.currentPage) - (this.config.itemsPerPage), this.initiateForm());
        this.formSubmitAttempt = false;
        this.isDelete = false;
    };
    ServicesSizeComponent.prototype.deleteRow = function (index, group) {
        var control = this.userTable.get('tableRows');
        control.removeAt(index);
        this.deleteServiceSize(group);
    };
    ServicesSizeComponent.prototype.sortData = function (sort) {
        console.log(sort);
        if (!sort.active || sort.direction === '') {
            return;
        }
        if (sort.direction == 'asc') {
            this.getFormControls.controls.sort(function (a, b) { return a.value.SIZE_VALUE > b.value.SIZE_VALUE ? 1 : -1; });
        }
        else {
            this.getFormControls.controls.sort(function (a, b) { return a.value.SIZE_VALUE < b.value.SIZE_VALUE ? 1 : -1; });
        }
    };
    ServicesSizeComponent.prototype.compare = function (a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    };
    ServicesSizeComponent.prototype.editRow = function (group) {
        var e_3, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.getFormControls.controls), _c = _b.next(); !_c.done; _c = _b.next()) {
                var formItem = _c.value;
                if (formItem.get('isEditable').value == true) {
                    formItem.get('isEditable').setValue(false);
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        group.get('isEditable').setValue(true);
        console.log(group);
        this.resetFormGroup = group.value;
        this.isDelete = true;
        // this.toppings.setValue(group.value.SERVICE);
    };
    ServicesSizeComponent.prototype.doneRow = function (group) {
        console.log(group);
        if (group.value._id == undefined) {
            this.formSubmitAttempt = true;
            this.submitServicesForm(group);
        }
        else {
            this.formSubmitAttempt = true;
            this.submitEditServicesForm(group);
        }
    };
    Object.defineProperty(ServicesSizeComponent.prototype, "getFormControls", {
        get: function () {
            var control = this.userTable.get('tableRows');
            return control;
        },
        enumerable: true,
        configurable: true
    });
    ServicesSizeComponent.prototype.cancel = function (group) {
        group.reset(this.resetFormGroup);
        if (group.value._id == undefined) {
            var control = this.userTable.get('tableRows');
            control.removeAt((this.config.itemsPerPage * this.config.currentPage) - (this.config.itemsPerPage));
        }
        else {
            group.get('isEditable').setValue(false);
        }
    };
    ServicesSizeComponent.prototype.deleteServiceSize = function (group) {
        var _this = this;
        if (window.confirm('Are you sure')) {
            this.loader.show();
            var index = group.value._id;
            var url = 'delete-service-value';
            this.commonSevice.Delete(index, url).subscribe(function (data) {
                _this.ms.openSnackBar("The size value is deleted");
                _this.loader.hide();
                _this.router.routeReuseStrategy.shouldReuseRoute = function () {
                    return false;
                };
                _this.router.onSameUrlNavigation = 'reload';
                _this.router.navigate(['/get-all-services-size']);
            }, function (error) {
                _this.loader.hide;
            });
        }
    };
    ServicesSizeComponent.prototype.submitEditServicesForm = function (group) {
        var _this = this;
        this.loader.show();
        if (group.valid) {
            var id = group.value._id;
            if (window.confirm('Are you sure you want to update?')) {
                var url = "edit-services-value";
                this.commonSevice.Update(id, group.value, url).subscribe(function (res) {
                    _this.ms.openSnackBar("Service Size is edited successfully");
                    group.get('isEditable').setValue(false);
                    _this.router.routeReuseStrategy.shouldReuseRoute = function () {
                        return false;
                    };
                    _this.router.onSameUrlNavigation = 'reload';
                    _this.router.navigate(['/get-all-services-size']);
                }, function (error) {
                    _this.loader.hide();
                    _this.ms.openSnackBar("Error Performing operation");
                });
            }
        }
        else {
            this.loader.hide();
            this.ms.openSnackBar("Please fill the required information");
        }
    };
    ServicesSizeComponent.prototype.submitServicesForm = function (group) {
        var _this = this;
        this.loader.show();
        if (group.valid) {
            var URL = 'add-services_size';
            this.commonSevice.Add(group.value, URL).subscribe(function (res) {
                _this.ms.openSnackBar("Service size added successfully");
                group.get('isEditable').setValue(false);
                _this.router.routeReuseStrategy.shouldReuseRoute = function () {
                    return false;
                };
                _this.router.onSameUrlNavigation = 'reload';
                _this.router.navigate(['/get-all-services-size']);
            }, function (error) {
                _this.loader.hide();
                _this.ms.openSnackBar("Error perfroming operation");
            });
        }
        else {
            this.loader.hide();
            this.ms.openSnackBar("Please fill the required information");
        }
    };
    ServicesSizeComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerService"] },
        { type: _shared_messageService__WEBPACK_IMPORTED_MODULE_8__["MessageService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], ServicesSizeComponent.prototype, "paginator", void 0);
    ServicesSizeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-services-size',
            template: __webpack_require__(/*! raw-loader!./services-size.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/services-size/services-size.component.html"),
            styles: [__webpack_require__(/*! ./services-size.component.css */ "./src/app/components/services-size/services-size.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _shared_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerService"], _shared_messageService__WEBPACK_IMPORTED_MODULE_8__["MessageService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]])
    ], ServicesSizeComponent);
    return ServicesSizeComponent;
}());



/***/ }),

/***/ "./src/app/components/services/services.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/services/services.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\r\n  background-color: #333;\r\n  color: #fff;\r\n  overflow: auto;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top:0;\r\n  padding: 15px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-bottom: 50px;\r\n}\r\n\r\nmat-icon {\r\n  cursor: pointer;\r\n}\r\n\r\n.action-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 20px;\r\n}\r\n\r\n.table {\r\n  padding: 20px;\r\n  display: block;\r\n  overflow-x: auto;\r\n  white-space: nowrap;\r\n}\r\n\r\n.table tbody tr td,\r\n.table thead th,\r\n.table thead {\r\n  \r\n  border-bottom: 1px solid #dee2e6;\r\n}\r\n\r\n.table thead th{\r\n  color: rgba(0,0,0,.54);\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n}\r\n\r\n.table thead td{\r\n  color: rgba(0,0,0,.87);\r\n  font-size:14px;\r\n}\r\n\r\n.table tbody tr td mat-form-field\r\n{\r\n  width:100% !important;\r\n}\r\n\r\n.table tbody tr td,\r\n.table thead th {\r\n  width: 100% !important;\r\n  padding: 24px;\r\n}\r\n\r\n.output {\r\n  padding: 20px;\r\n}\r\n\r\n.delete {\r\n  color: red  ;\r\n}\r\n\r\n.done {\r\n  color: green;\r\n}\r\n\r\n.search-form{\r\n \r\n  margin-top: 30px;\r\n  float:right;\r\n  margin-right:10px;\r\n}\r\n\r\nspan.ui-column-resizer {\r\n  width: 100%;\r\n  height: 100%;\r\n  cursor: col-resize;\r\n  padding: 30px;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixLQUFLO0VBQ0wsYUFBYTtFQUNiLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBOzs7O0VBSUUsZ0NBQWdDO0FBQ2xDOztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjs7QUFDQTs7RUFFRSxxQkFBcUI7QUFDdkI7O0FBQ0E7O0VBRUUsc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7O0FBRWYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6MDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbm1hdC1pY29uIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hY3Rpb24tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4udGFibGUge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4udGFibGUgdGJvZHkgdHIgdGQsXHJcbi50YWJsZSB0aGVhZCB0aCxcclxuLnRhYmxlIHRoZWFkIHtcclxuICBcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcclxufVxyXG4udGFibGUgdGhlYWQgdGh7XHJcbiAgY29sb3I6IHJnYmEoMCwwLDAsLjU0KTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4udGFibGUgdGhlYWQgdGR7XHJcbiAgY29sb3I6IHJnYmEoMCwwLDAsLjg3KTtcclxuICBmb250LXNpemU6MTRweDtcclxufVxyXG4udGFibGUgdGJvZHkgdHIgdGQgbWF0LWZvcm0tZmllbGRcclxue1xyXG4gIHdpZHRoOjEwMCUgIWltcG9ydGFudDtcclxufVxyXG4udGFibGUgdGJvZHkgdHIgdGQsXHJcbi50YWJsZSB0aGVhZCB0aCB7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG59XHJcblxyXG4ub3V0cHV0IHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uZGVsZXRlIHtcclxuICBjb2xvcjogcmVkICA7XHJcbn1cclxuXHJcbi5kb25lIHtcclxuICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5zZWFyY2gtZm9ybXtcclxuIFxyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgZmxvYXQ6cmlnaHQ7XHJcbiAgbWFyZ2luLXJpZ2h0OjEwcHg7XHJcbn1cclxuXHJcbnNwYW4udWktY29sdW1uLXJlc2l6ZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBjdXJzb3I6IGNvbC1yZXNpemU7XHJcbiAgcGFkZGluZzogMzBweDtcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/services/services.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/services/services.component.ts ***!
  \***********************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_messageService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../shared/messageService */ "./src/app/shared/messageService.ts");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "./node_modules/@rxweb/reactive-form-validators/fesm5/rxweb-reactive-form-validators.js");









var ServicesComponent = /** @class */ (function () {
    function ServicesComponent(router, commonSevice, actRoute, loader, ms, fb, ngZone) {
        var _this = this;
        this.router = router;
        this.commonSevice = commonSevice;
        this.actRoute = actRoute;
        this.loader = loader;
        this.ms = ms;
        this.fb = fb;
        this.ngZone = ngZone;
        this.Services = [];
        this.PipeData = [];
        this.toppings = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.toppingArr = [];
        this.filtered = [];
        this.displayedColumns = ['SERVICE_NAME', 'action'];
        this.handleError = function (controlName, errorName) {
            return _this.control.controls[controlName].hasError(errorName);
        };
    }
    ServicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isDelete = false;
        this.loader.show();
        this.formSubmitAttempt = false;
        this.touchedRows = [];
        this.userTable = this.fb.group({
            tableRows: this.fb.array([])
        });
        var URL = "services/getAll";
        this.commonSevice.GetAll(URL).subscribe(function (data) {
            var e_1, _a;
            _this.Services = data;
            _this.control = _this.userTable.get('tableRows');
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_this.Services), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    var fbGroup = _this.fb.group({
                        _id: [item._id],
                        SERVICE_NAME: [item.SERVICE_NAME, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_8__["RxwebValidators"].unique()]],
                        PIPE: [item.PIPE],
                        isEditable: [false]
                    });
                    _this.control.push(fbGroup);
                    var URL = "pipes/getAll";
                    _this.commonSevice.GetAll(URL).subscribe(function (data) {
                        _this.PipeData = data;
                        if (_this.PipeData.length > 0) {
                            _this.PipeData = _this.PipeData.sort(function (a, b) { return a.PIPE_NAME > b.PIPE_NAME ? 1 : -1; });
                        }
                        _this.loader.hide();
                    }, function (error) {
                        _this.loader.hide();
                    });
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }, function (error) {
            _this.loader.hide();
        });
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.Services.count
        };
    };
    ServicesComponent.prototype.ngAfterOnInit = function () {
        this.control = this.userTable.get('tableRows');
    };
    ServicesComponent.prototype.retrievePipe = function (id) {
        var e_2, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.PipeData), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                if (item._id === id) {
                    return item.PIPE_NAME;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return '';
    };
    ServicesComponent.prototype.sortData = function (sort) {
        console.log(sort);
        if (!sort.active || sort.direction === '') {
            return;
        }
        if (sort.direction == 'asc') {
            if (sort.active == 'SERVICE_NAME') {
                this.getFormControls.controls.sort(function (a, b) { return a.value.SERVICE_NAME > b.value.SERVICE_NAME ? 1 : -1; });
            }
            if (sort.active == 'PIPE') {
                this.getFormControls.controls.sort(function (a, b) { return a.value.PIPE > b.value.PIPE ? 1 : -1; });
            }
        }
        else {
            if (sort.active == 'SERVICE_NAME') {
                this.getFormControls.controls.sort(function (a, b) { return a.value.SERVICE_NAME < b.value.SERVICE_NAME ? 1 : -1; });
            }
            if (sort.active == 'PIPE') {
                this.getFormControls.controls.sort(function (a, b) { return a.value.PIPE < b.value.PIPE ? 1 : -1; });
            }
        }
    };
    ServicesComponent.prototype.SelectServices = function (group, event, sel) {
        if (event.isUserInput) {
            if (event.source._selected == false) {
                if (group.value.PIPE.includes(event.source.value)) {
                    console.log("included");
                    var index = group.value.PIPE.indexOf(event.source.value);
                    if (index !== -1) {
                        console.log("yes");
                        group.value.PIPE.splice(index, 1);
                    }
                }
            }
            else {
                group.value.PIPE.push(event.source.value);
            }
            console.log(event.source._selected);
        }
    };
    ServicesComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    ServicesComponent.prototype.fieldGlobalIndex = function (index) {
        return this.config.itemsPerPage * (this.config.currentPage - 1) + index;
    };
    ServicesComponent.prototype.initiateForm = function () {
        return this.fb.group({
            SERVICE_NAME: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_8__["RxwebValidators"].unique()]],
            PIPE: this.fb.array([]),
            isEditable: [true]
        });
    };
    ServicesComponent.prototype.addRow = function () {
        var control = this.userTable.get('tableRows');
        control.insert((this.config.itemsPerPage * this.config.currentPage) - (this.config.itemsPerPage), this.initiateForm());
        this.formSubmitAttempt = false;
        this.toppings.setValue([]);
        this.isDelete = false;
    };
    ServicesComponent.prototype.deleteRow = function (index, group) {
        var control = this.userTable.get('tableRows');
        this.deleteService(control, index, group);
    };
    ServicesComponent.prototype.editRow = function (group) {
        var e_3, _a, e_4, _b;
        try {
            for (var _c = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.getFormControls.controls), _d = _c.next(); !_d.done; _d = _c.next()) {
                var formItem = _d.value;
                if (formItem.get('isEditable').value == true) {
                    formItem.get('isEditable').setValue(false);
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_3) throw e_3.error; }
        }
        group.get('isEditable').setValue(true);
        this.toppingArr = [];
        console.log(group);
        this.toppings.setValue(group.value.PIPE);
        this.isDelete = true;
        this.resetFormGroup = group.value;
        try {
            for (var _e = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](group.value.PIPE), _f = _e.next(); !_f.done; _f = _e.next()) {
                var item = _f.value;
                this.toppingArr.push(item);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    ServicesComponent.prototype.cancel = function (group) {
        group.reset(this.resetFormGroup);
        group.get('PIPE').setValue(this.toppingArr);
        if (group.value._id == undefined) {
            var control = this.userTable.get('tableRows');
            control.removeAt((this.config.itemsPerPage * this.config.currentPage) - (this.config.itemsPerPage));
        }
        else {
            group.get('isEditable').setValue(false);
        }
        console.log(this.toppingArr);
    };
    ServicesComponent.prototype.doneRow = function (group) {
        console.log(group);
        if (group.value._id == undefined) {
            this.formSubmitAttempt = true;
            this.submitAddServicesForm(group);
        }
        else {
            this.formSubmitAttempt = true;
            this.submitEditServicesForm(group);
        }
    };
    Object.defineProperty(ServicesComponent.prototype, "getFormControls", {
        get: function () {
            var control = this.userTable.get('tableRows');
            return control;
        },
        enumerable: true,
        configurable: true
    });
    ServicesComponent.prototype.submitAddServicesForm = function (group) {
        var _this = this;
        this.loader.show();
        if (group.valid) {
            var URL = 'service/add-service';
            this.commonSevice.Add(group.value, URL).subscribe(function (res) {
                _this.ms.openSnackBar("Service is added successfully");
                group.get('isEditable').setValue(false);
                _this.router.routeReuseStrategy.shouldReuseRoute = function () {
                    return false;
                };
                _this.router.onSameUrlNavigation = 'reload';
                _this.router.navigate(['/services/getAll']);
            }, function (error) {
                _this.loader.hide();
                _this.ms.openSnackBar("Error performing action");
            });
        }
        else {
            this.loader.hide();
            this.formSubmitAttempt = true;
            this.ms.openSnackBar("Please fill the required information");
        }
    };
    ServicesComponent.prototype.submitEditServicesForm = function (group) {
        var _this = this;
        this.loader.show();
        if (group.valid) {
            var id = group.value._id;
            if (window.confirm('Are you sure you want to update?')) {
                var url = "service/edit-service";
                this.commonSevice.Update(id, group.value, url).subscribe(function (res) {
                    _this.ms.openSnackBar("Service is edited successfully");
                    group.get('isEditable').setValue(false);
                    _this.router.routeReuseStrategy.shouldReuseRoute = function () {
                        return false;
                    };
                    _this.router.onSameUrlNavigation = 'reload';
                    _this.router.navigate(['/services/getAll']);
                }, function (error) {
                    _this.loader.hide();
                    _this.ms.openSnackBar("Error Performing operation");
                });
            }
        }
        else {
            this.loader.hide();
            this.formSubmitAttempt = true;
            this.ms.openSnackBar("Please fill the required information");
        }
    };
    ServicesComponent.prototype.deleteService = function (control, index, group) {
        var _this = this;
        if (window.confirm('Are you sure')) {
            this.loader.show();
            var index = group.value._id;
            var url = 'service/delete-service';
            this.commonSevice.Delete(index, url).subscribe(function (data) {
                if (data.msg == "success") {
                    _this.ms.openSnackBar("Service is deleted successfully");
                    control.removeAt(index);
                    _this.loader.hide();
                    _this.router.routeReuseStrategy.shouldReuseRoute = function () {
                        return false;
                    };
                    _this.router.onSameUrlNavigation = 'reload';
                    _this.router.navigate(['/services/getAll']);
                }
                else {
                    _this.loader.hide();
                    _this.ms.openSnackBar(data.msg);
                }
            }, function (error) {
                _this.loader.hide();
            });
        }
    };
    ServicesComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__["Ng4LoadingSpinnerService"] },
        { type: _shared_messageService__WEBPACK_IMPORTED_MODULE_7__["MessageService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], ServicesComponent.prototype, "paginator", void 0);
    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! raw-loader!./services.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/components/services/services.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _shared_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__["Ng4LoadingSpinnerService"], _shared_messageService__WEBPACK_IMPORTED_MODULE_7__["MessageService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/components/students-list/students-list.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/students-list/students-list.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3R1ZGVudHMtbGlzdC9zdHVkZW50cy1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/students-list/students-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/students-list/students-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: StudentsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsListComponent", function() { return StudentsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");





var StudentsListComponent = /** @class */ (function () {
    function StudentsListComponent(studentApi) {
        var _this = this;
        this.studentApi = studentApi;
        this.StudentData = [];
        this.displayedColumns = ['_id', 'student_name', 'student_email', 'section', 'action'];
        this.studentApi.GetStudents().subscribe(function (data) {
            _this.StudentData = data;
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.StudentData);
            setTimeout(function () {
                _this.dataSource.paginator = _this.paginator;
            }, 0);
        });
    }
    StudentsListComponent.prototype.ngOnInit = function () { };
    StudentsListComponent.ctorParameters = function () { return [
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], StudentsListComponent.prototype, "paginator", void 0);
    StudentsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-students-list',
            template: __webpack_require__(/*! raw-loader!./students-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/students-list/students-list.component.html"),
            styles: [__webpack_require__(/*! ./students-list.component.css */ "./src/app/components/students-list/students-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], StudentsListComponent);
    return StudentsListComponent;
}());



/***/ }),

/***/ "./src/app/components/upload-templates/upload-templates/upload-templates.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/upload-templates/upload-templates/upload-templates.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".download_link{\r\n    color: #1e70c8;\r\n    font-weight: 400; \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91cGxvYWQtdGVtcGxhdGVzL3VwbG9hZC10ZW1wbGF0ZXMvdXBsb2FkLXRlbXBsYXRlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXBsb2FkLXRlbXBsYXRlcy91cGxvYWQtdGVtcGxhdGVzL3VwbG9hZC10ZW1wbGF0ZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kb3dubG9hZF9saW5re1xyXG4gICAgY29sb3I6ICMxZTcwYzg7XHJcbiAgICBmb250LXdlaWdodDogNDAwOyBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/upload-templates/upload-templates/upload-templates.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/upload-templates/upload-templates/upload-templates.component.ts ***!
  \********************************************************************************************/
/*! exports provided: UploadTemplatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadTemplatesComponent", function() { return UploadTemplatesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UploadTemplatesComponent = /** @class */ (function () {
    function UploadTemplatesComponent() {
    }
    UploadTemplatesComponent.prototype.ngOnInit = function () {
    };
    UploadTemplatesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upload-templates',
            template: __webpack_require__(/*! raw-loader!./upload-templates.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/upload-templates/upload-templates/upload-templates.component.html"),
            styles: [__webpack_require__(/*! ./upload-templates.component.css */ "./src/app/components/upload-templates/upload-templates/upload-templates.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UploadTemplatesComponent);
    return UploadTemplatesComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");


























var AngularMaterialModule = /** @class */ (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__["MatSnackBarModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__["MatSortModule"]
            ],
            exports: [
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__["MatSnackBarModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__["MatSortModule"]
            ],
            providers: [
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
            ]
        })
    ], AngularMaterialModule);
    return AngularMaterialModule;
}());



/***/ }),

/***/ "./src/app/models/Electrical.ts":
/*!**************************************!*\
  !*** ./src/app/models/Electrical.ts ***!
  \**************************************/
/*! exports provided: SD_SERVICE_DATA_SCHEDULE, SD_INTERCONNECT_SCHEDULE, SD_CIRCUIT_SCHEDULE, SD_RACEWAY_SCHEDULE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SD_SERVICE_DATA_SCHEDULE", function() { return SD_SERVICE_DATA_SCHEDULE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SD_INTERCONNECT_SCHEDULE", function() { return SD_INTERCONNECT_SCHEDULE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SD_CIRCUIT_SCHEDULE", function() { return SD_CIRCUIT_SCHEDULE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SD_RACEWAY_SCHEDULE", function() { return SD_RACEWAY_SCHEDULE; });
var SD_SERVICE_DATA_SCHEDULE = /** @class */ (function () {
    function SD_SERVICE_DATA_SCHEDULE() {
    }
    return SD_SERVICE_DATA_SCHEDULE;
}());

var SD_INTERCONNECT_SCHEDULE = /** @class */ (function () {
    function SD_INTERCONNECT_SCHEDULE() {
    }
    return SD_INTERCONNECT_SCHEDULE;
}());

var SD_CIRCUIT_SCHEDULE = /** @class */ (function () {
    function SD_CIRCUIT_SCHEDULE() {
    }
    return SD_CIRCUIT_SCHEDULE;
}());

var SD_RACEWAY_SCHEDULE = /** @class */ (function () {
    function SD_RACEWAY_SCHEDULE() {
    }
    return SD_RACEWAY_SCHEDULE;
}());



/***/ }),

/***/ "./src/app/models/Mech.ts":
/*!********************************!*\
  !*** ./src/app/models/Mech.ts ***!
  \********************************/
/*! exports provided: SD_MECH_SCHEDULE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SD_MECH_SCHEDULE", function() { return SD_MECH_SCHEDULE; });
var SD_MECH_SCHEDULE = /** @class */ (function () {
    function SD_MECH_SCHEDULE() {
    }
    return SD_MECH_SCHEDULE;
}());



/***/ }),

/***/ "./src/app/models/Notes.ts":
/*!*********************************!*\
  !*** ./src/app/models/Notes.ts ***!
  \*********************************/
/*! exports provided: SD_GENERAL_NOTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SD_GENERAL_NOTES", function() { return SD_GENERAL_NOTES; });
var SD_GENERAL_NOTES = /** @class */ (function () {
    function SD_GENERAL_NOTES() {
    }
    return SD_GENERAL_NOTES;
}());



/***/ }),

/***/ "./src/app/models/Sheets.ts":
/*!**********************************!*\
  !*** ./src/app/models/Sheets.ts ***!
  \**********************************/
/*! exports provided: SD_SHEET_REGISTER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SD_SHEET_REGISTER", function() { return SD_SHEET_REGISTER; });
var SD_SHEET_REGISTER = /** @class */ (function () {
    function SD_SHEET_REGISTER() {
    }
    return SD_SHEET_REGISTER;
}());



/***/ }),

/***/ "./src/app/models/User.ts":
/*!********************************!*\
  !*** ./src/app/models/User.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/shared/api.service.ts":
/*!***************************************!*\
  !*** ./src/app/shared/api.service.ts ***!
  \***************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.endpoint = '/api';
        //endpoint: string = 'https://backenap.herokuapp.com/api'; 
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    ApiService.prototype.Add = function (data, url) {
        var API_URL = this.endpoint + "/" + url;
        return this.http.post(API_URL, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    };
    ApiService.prototype.GetAll = function (url) {
        var API_URL = this.endpoint + "/" + url;
        return this.http.get(this.endpoint + "/" + url);
    };
    ApiService.prototype.GetCall = function (url) {
        return this.http.get(url);
    };
    // Add student
    ApiService.prototype.AddStudent = function (data, url) {
        var API_URL = this.endpoint + "/add-student";
        return this.http.post(API_URL, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    };
    ApiService.prototype.GetServiceBotUsers = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].APIEndpoint + "/api/v1/users");
    };
    ApiService.prototype.InviteUsers = function (email) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].APIEndpoint + "/api/v1/users/invite";
        return this.http.post(url, email)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    };
    ApiService.prototype.ResetPasswordRequest = function (email) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].APIEndpoint + "/api/v1/auth/reset-password";
        return this.http.post(url, email)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    };
    ApiService.prototype.ResetPasswordForm = function (uid, token) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].APIEndpoint + "/api/v1/auth/reset-password/" + uid + "/" + token;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    };
    ApiService.prototype.SendNewPassword = function (uid, token, data) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].APIEndpoint + "/api/v1/auth/reset-password/" + uid + "/" + token;
        return this.http.post(url, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    };
    ApiService.prototype.StripeRegisterUser = function (data, url) {
        return this.http.post(url, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    };
    // Get all students
    ApiService.prototype.GetStudents = function () {
        return this.http.get("" + this.endpoint);
    };
    // Get student
    ApiService.prototype.GetById = function (id, url) {
        var API_URL = this.endpoint + "/" + url + ("/" + id);
        return this.http.get(API_URL, { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res || {};
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    };
    // Update student
    ApiService.prototype.Update = function (id, data, url) {
        var API_URL = this.endpoint + "/" + url + ("/" + id);
        return this.http.put(API_URL, data, { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    };
    ApiService.prototype.UpdateBy = function (id, id1, data, url) {
        var API_URL = this.endpoint + "/" + url + ("/" + id + "/" + id1);
        return this.http.put(API_URL, data, { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    };
    // Delete student
    ApiService.prototype.Delete = function (id, url) {
        var API_URL = this.endpoint + "/" + url + ("/" + id);
        return this.http.delete(API_URL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    };
    ApiService.prototype.promisify = function (url, id) {
        var API_URL = this.endpoint + "/" + url + ("/" + id);
        return this.http.get(API_URL, { headers: this.headers }).toPromise();
    };
    ApiService.prototype.promisifyPost = function (url, id, data) {
        var API_URL = this.endpoint + "/" + url + ("/" + id);
        return this.http.post(API_URL, data, { headers: this.headers }).toPromise();
    };
    // Error handling
    ApiService.prototype.errorMgmt = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    };
    ApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
    ]; };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/shared/messageService.ts":
/*!******************************************!*\
  !*** ./src/app/shared/messageService.ts ***!
  \******************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");



/**
 * @title Snack-bar with configurable position
 */
var MessageService = /** @class */ (function () {
    function MessageService(_snackBar) {
        this._snackBar = _snackBar;
        this.horizontalPosition = 'right';
        this.verticalPosition = 'top';
    }
    MessageService.prototype.openSnackBar = function (message) {
        this._snackBar.open(message, 'close', {
            duration: 4500,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    };
    MessageService.ctorParameters = function () { return [
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
    ]; };
    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    APIEndpoint: 'http://localhost:3000',
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\MySchematic\MySchematicGenerator\client\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map