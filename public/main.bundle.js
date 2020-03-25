webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_public_profile_public_profile_component__ = __webpack_require__("../../../../../src/app/components/public-profile/public-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_blog_blog_component__ = __webpack_require__("../../../../../src/app/components/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_blog_edit_blog_edit_blog_component__ = __webpack_require__("../../../../../src/app/components/blog/edit-blog/edit-blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_blog_delete_blog_delete_blog_component__ = __webpack_require__("../../../../../src/app/components/blog/delete-blog/delete-blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__guards_notAuth_guard__ = __webpack_require__("../../../../../src/app/guards/notAuth.guard.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













// Our Array of Angular 2 Routes
var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */] // Default Route
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_3__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__["a" /* AuthGuard */]] // User must be logged in to view this route
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__["a" /* RegisterComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_notAuth_guard__["a" /* NotAuthGuard */]] // User must NOT be logged in to view this route
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__["a" /* LoginComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_notAuth_guard__["a" /* NotAuthGuard */]] // User must NOT be logged in to view this route
    },
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_6__components_profile_profile_component__["a" /* ProfileComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__["a" /* AuthGuard */]] // User must be logged in to view this route
    },
    {
        path: 'blog',
        component: __WEBPACK_IMPORTED_MODULE_8__components_blog_blog_component__["a" /* BlogComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__["a" /* AuthGuard */]] // User must be logged in to view this route
    },
    {
        path: 'edit-blog/:id',
        component: __WEBPACK_IMPORTED_MODULE_9__components_blog_edit_blog_edit_blog_component__["a" /* EditBlogComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__["a" /* AuthGuard */]] // User must be logged in to view this route
    },
    {
        path: 'delete-blog/:id',
        component: __WEBPACK_IMPORTED_MODULE_10__components_blog_delete_blog_delete_blog_component__["a" /* DeleteBlogComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__["a" /* AuthGuard */]] // User must be logged in to view this route
    },
    {
        path: 'user/:username',
        component: __WEBPACK_IMPORTED_MODULE_7__components_public_profile_public_profile_component__["a" /* PublicProfileComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__["a" /* AuthGuard */]] // User must be logged in to view this route
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */] } // "Catch-All" Route
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes)],
            providers: [],
            bootstrap: [],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=C:/angular4/upload_mean/MEAN-Stack-With-Angular-2-Tutorial/client/src/app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"container\">\r\n  <flash-messages></flash-messages>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Hello World from Angular 2!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/angular4/upload_mean/MEAN-Stack-With-Angular-2-Tutorial/client/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_blog_service__ = __webpack_require__("../../../../../src/app/services/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guards_notAuth_guard__ = __webpack_require__("../../../../../src/app/guards/notAuth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_blog_blog_component__ = __webpack_require__("../../../../../src/app/components/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_blog_edit_blog_edit_blog_component__ = __webpack_require__("../../../../../src/app/components/blog/edit-blog/edit-blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_blog_delete_blog_delete_blog_component__ = __webpack_require__("../../../../../src/app/components/blog/delete-blog/delete-blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_public_profile_public_profile_component__ = __webpack_require__("../../../../../src/app/components/public-profile/public-profile.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_blog_blog_component__["a" /* BlogComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_blog_edit_blog_edit_blog_component__["a" /* EditBlogComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_blog_delete_blog_delete_blog_component__["a" /* DeleteBlogComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_public_profile_public_profile_component__["a" /* PublicProfileComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_16__guards_notAuth_guard__["a" /* NotAuthGuard */], __WEBPACK_IMPORTED_MODULE_11__services_blog_service__["a" /* BlogService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/angular4/upload_mean/MEAN-Stack-With-Angular-2-Tutorial/client/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/blog/blog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Dropdown Button */\r\n.dropbtn {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 16px;\r\n    font-size: 16px;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n\r\n/* The container <div> - needed to position the dropdown content */\r\n.dropdown {\r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n\r\n/* Dropdown Content (Hidden by Default) */\r\n.dropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f9f9f9;\r\n    min-width: 160px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n}\r\n\r\n/* Links inside the dropdown */\r\n.dropdown-content a {\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n}\r\n\r\n/* Change color of dropdown links on hover */\r\n.dropdown-content a:hover {background-color: #f1f1f1}\r\n\r\n/* Show the dropdown menu on hover */\r\n.dropdown:hover .dropdown-content {\r\n    display: block;\r\n}\r\n\r\n/* Change the background color of the dropdown button when the dropdown content is shown */\r\n.dropdown:hover .dropbtn {\r\n    background-color: #3e8e41;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/blog/blog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Blog Feed</h1>\r\n\r\n<!-- Custom Success/Error Message -->\r\n<div class=\"row show-hide-message\" *ngIf=\"message && newPost\">\r\n  <div [ngClass]=\"messageClass\">\r\n    {{ message }}\r\n  </div>\r\n</div>\r\n\r\n<!-- New Post Button -->\r\n<button type=\"button\" name=\"button\" class=\"btn btn-warning\" *ngIf=\"!newPost\" (click)=\"newBlogForm()\">New Post</button>\r\n\r\n<!-- Reload Button -->\r\n<button [disabled]=\"loadingBlogs\" type=\"button\" name=\"button\" class=\"btn btn-default\" *ngIf=\"!newPost\" (click)=\"reloadBlogs()\"><span class=\"glyphicon glyphicon-repeat\"></span>&nbsp;&nbsp;Reload</button>\r\n\r\n<br />\r\n<br />\r\n\r\n<!-- New Blog Form -->\r\n<form [formGroup]=\"form\" name=\"blogForm\" (submit)=\"onBlogSubmit()\" *ngIf=\"newPost\">\r\n  <!-- Title Input -->\r\n  <div class=\"form-group\">\r\n    <label for=\"title\">Title</label>\r\n    <div [ngClass]=\"{'has-success': form.controls.title.valid, 'has-error': form.controls.title.dirty && form.controls.title.errors}\">\r\n      <!-- Title Input -->\r\n      <input type=\"text\" name=\"title\" class=\"form-control\" placeholder=\"*Blog Title\" autocomplete=\"off\" formControlName=\"title\" />\r\n      <!-- Validation -->\r\n      <ul class=\"help-block\">\r\n        <li *ngIf=\"form.controls.title.dirty && form.controls.title.errors?.required\">This field is required.</li>\r\n        <li *ngIf=\"(form.controls.title.dirty && form.controls.title.errors?.minlength) || (form.controls.title.dirty && form.controls.title.errors?.maxlength)\">Max length: 50, Min length: 5</li>\r\n        <li *ngIf=\"form.controls.title.dirty && form.controls.title.errors?.alphaNumericValidation\">Must be a letter or number</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Body Input -->\r\n  <div class=\"form-group\">\r\n    <label for=\"body\">Body</label>\r\n    <div [ngClass]=\"{'has-success': form.controls.body.valid, 'has-error': form.controls.body.dirty && form.controls.body.errors}\">\r\n      <!-- Body Input -->\r\n      <textarea name=\"body\" rows=\"8\" cols=\"80\" placeholder=\"*Body\" class=\"form-control\" formControlName=\"body\"></textarea>\r\n      <!-- Validation -->\r\n      <ul class=\"help-block\">\r\n        <li *ngIf=\"form.controls.body.dirty && form.controls.body.errors?.required\">This field is required.</li>\r\n        <li *ngIf=\"(form.controls.body.dirty && form.controls.body.errors?.minlength) || (form.controls.body.dirty && form.controls.body.errors?.maxlength)\">Max length: 500, Min length: 5</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Go Back Button -->\r\n  <button [disabled]=\"processing\" type=\"button\" name=\"button\" (click)=\"goBack()\" class=\"btn btn-warning\">Go Back</button>\r\n  <!-- Submit Button -->\r\n  <button [disabled]=\"processing || !form.valid\" type=\"submit\" name=\"button\" class=\"btn btn-success\">Submit</button>\r\n\r\n</form>\r\n<!-- New Blog Form -->\r\n\r\n<!-- Panel Start -->\r\n<div *ngIf=\"!newPost\">\r\n  <!-- Panel Outer Layer -->\r\n  <div class=\"panel panel-primary\" *ngFor=\"let blog of blogPosts\">\r\n\r\n    <!-- Panel Title -->\r\n    <div class=\"panel-heading\">\r\n      <h3 class=\"panel-title\">{{ blog.title }}</h3>\r\n    </div>\r\n\r\n    <!-- Panel Body -->\r\n    <div class=\"panel-body\">\r\n      {{ blog.body }}\r\n    </div>\r\n\r\n    <!-- Panel Footer Start -->\r\n    <div class=\"panel-footer\">\r\n      <strong>Posted by: </strong>{{ blog.createdBy }}\r\n      <br />\r\n      <strong>Date: </strong>{{ blog.createdAt | date:'MMM dd, yyyy' }}\r\n      <br />\r\n      <div *ngIf=\"username === blog.createdBy\">\r\n        <strong>Likes: </strong>{{ blog.likes }}\r\n        <br />\r\n        <strong>Dislikes: </strong>{{ blog.dislikes }}\r\n      </div>\r\n\r\n      <!-- Edit Button -->\r\n      <a [routerLink]=\"['/edit-blog/', blog._id]\" *ngIf=\"username === blog.createdBy\"><button type=\"button\" name=\"button\" class=\"btn btn-sm btn-info\">Edit</button></a>\r\n      <!-- Delete Button -->\r\n      <a [routerLink]=\"['/delete-blog/', blog._id]\" *ngIf=\"username === blog.createdBy\"><button type=\"button\" name=\"button\" class=\"btn btn-sm btn-danger\">Delete</button></a>\r\n\r\n      <!-- Likes Dropdown  -->\r\n      <div class=\"dropdown\">\r\n        <!-- Like Button -->\r\n        <button [disabled]=\"blog.likedBy.indexOf(username) > -1\" type=\"button\" name=\"button\" class=\"btn btn-sm btn-success\" *ngIf=\"username !== blog.createdBy\" (click)=\"likeBlog(blog._id)\"><span class=\"glyphicon glyphicon-thumbs-up\">&nbsp;</span>Likes: {{ blog.likes }}</button>\r\n        <!-- Dropdown Menu Items -->\r\n        <div class=\"dropdown-content\">\r\n          <a [routerLink]=\"['/user/', liker]\" *ngFor=\"let liker of blog.likedBy\">{{ liker }}</a>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Dislikes Dropdown  -->\r\n      <div class=\"dropdown\">\r\n        <!-- Dislike Button -->\r\n        <button [disabled]=\"blog.dislikedBy.indexOf(username) > -1\" type=\"button\" name=\"button\" class=\"btn btn-sm btn-warning\" *ngIf=\"username !== blog.createdBy\" (click)=\"dislikeBlog(blog._id)\"><span class=\"glyphicon glyphicon-thumbs-down\">&nbsp;</span>Dislikes: {{ blog.dislikes }}</button>\r\n        <!-- Dropdown Menu Items -->\r\n        <div class=\"dropdown-content\">\r\n          <a [routerLink]=\"['/user/', disliker]\" *ngFor=\"let disliker of blog.dislikedBy\">{{ disliker }}</a>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <!-- Panel Footer End -->\r\n\r\n    <!-- Post Comment Box: Start -->\r\n    <ul class=\"list-group\">\r\n      <li class=\"list-group-item\">\r\n        <!-- Post Comment Button -->\r\n        <button type=\"button\" name=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"draftComment(blog._id)\" [disabled]=\"newComment.indexOf(blog._id) > -1\">Post Comment</button>\r\n        <br />\r\n        <br />\r\n        <div *ngIf=\"newComment.indexOf(blog._id) > -1\">\r\n\r\n          <!-- Form: Comment Form Start -->\r\n          <form [formGroup]=\"commentForm\">\r\n            <!-- Textarea Input -->\r\n            <textarea name=\"comment\" rows=\"10\" cols=\"30\" class=\"form-control\" formControlName=\"comment\"></textarea>\r\n            <!-- Validation -->\r\n            <div [ngClass]=\"{'has-success': !commentForm.controls.comment.errors && commentForm.controls.comment.dirty, 'has-error': commentForm.controls.comment.dirty && commentForm.controls.comment.errors}\">\r\n              <ul class=\"help-block\">\r\n                <li *ngIf=\"commentForm.controls.comment.errors?.required && commentForm.controls.comment.dirty\">This field is required.</li>\r\n                <li *ngIf=\"(commentForm.controls.comment.errors?.maxlength && commentForm.controls.comment.dirty) ||(commentForm.controls.comment.errors?.minlength && commentForm.controls.comment.dirty)\">Comment must be at least 1 character but no more than 200.</li>\r\n              </ul>\r\n            </div>\r\n            <!-- Post Button -->\r\n            <button [disabled]=\"!commentForm.valid || processing\" type=\"submit\" name=\"button\" class=\"btn btn-sm btn-info\" (click)=\"postComment(blog._id)\">Post</button>\r\n            <!-- Cancel Button -->\r\n            <button [disabled]=\"processing\" type=\"button\" name=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"cancelSubmission(blog._id)\">Cancel</button>\r\n          </form>\r\n          <!-- Form: Comment Form End -->\r\n\r\n        </div>\r\n\r\n        <!-- Show Comments -->\r\n        <li *ngIf=\"enabledComments.indexOf(blog._id) === -1 && blog.comments.length > 0\" class=\"list-group-item\">\r\n          <span (click)=\"expand(blog._id)\">\r\n            Show comments&nbsp;&nbsp;\r\n            <div class=\"glyphicon glyphicon-comment\"></div>\r\n          </span>\r\n        </li>\r\n\r\n        <!-- Hide Comments -->\r\n        <li *ngIf=\"enabledComments.indexOf(blog._id) > -1\" class=\"list-group-item\">\r\n          <span (click)=\"collapse(blog._id)\">\r\n            Hide Comments&nbsp;&nbsp;\r\n            <div class=\"glyphicon glyphicon-comment\"></div>\r\n          </span>\r\n        </li>\r\n\r\n        <!-- Comment -->\r\n        <div *ngIf=\"enabledComments.indexOf(blog._id) > -1\">\r\n          <li *ngFor=\"let comment of blog.comments\" class=\"list-group-item\">\r\n            <strong>{{ comment.commentator }}:</strong> {{ comment.comment }}\r\n          </li>\r\n        </div>\r\n    </ul>\r\n    <!-- Post Comment Box: End -->\r\n\r\n  </div>\r\n  <!-- Panel Outer Layer -->\r\n</div>\r\n<!-- Panel End -->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/blog/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_blog_service__ = __webpack_require__("../../../../../src/app/services/blog.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlogComponent = (function () {
    function BlogComponent(formBuilder, authService, blogService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.blogService = blogService;
        this.newPost = false;
        this.loadingBlogs = false;
        this.processing = false;
        this.newComment = [];
        this.enabledComments = [];
        this.createNewBlogForm(); // Create new blog form on start up
        this.createCommentForm(); // Create form for posting comments on a user's blog post
    }
    // Function to create new blog form
    BlogComponent.prototype.createNewBlogForm = function () {
        this.form = this.formBuilder.group({
            // Title field
            title: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(50),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(5),
                    this.alphaNumericValidation
                ])],
            // Body field
            body: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(500),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(5)
                ])]
        });
    };
    // Create form for posting comments
    BlogComponent.prototype.createCommentForm = function () {
        this.commentForm = this.formBuilder.group({
            comment: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(1),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(200)
                ])]
        });
    };
    // Enable the comment form
    BlogComponent.prototype.enableCommentForm = function () {
        this.commentForm.get('comment').enable(); // Enable comment field
    };
    // Disable the comment form
    BlogComponent.prototype.disableCommentForm = function () {
        this.commentForm.get('comment').disable(); // Disable comment field
    };
    // Enable new blog form
    BlogComponent.prototype.enableFormNewBlogForm = function () {
        this.form.get('title').enable(); // Enable title field
        this.form.get('body').enable(); // Enable body field
    };
    // Disable new blog form
    BlogComponent.prototype.disableFormNewBlogForm = function () {
        this.form.get('title').disable(); // Disable title field
        this.form.get('body').disable(); // Disable body field
    };
    // Validation for title
    BlogComponent.prototype.alphaNumericValidation = function (controls) {
        var regExp = new RegExp(/^[a-zA-Z0-9 ]+$/); // Regular expression to perform test
        // Check if test returns false or true
        if (regExp.test(controls.value)) {
            return null; // Return valid
        }
        else {
            return { 'alphaNumericValidation': true }; // Return error in validation
        }
    };
    // Function to display new blog form
    BlogComponent.prototype.newBlogForm = function () {
        this.newPost = true; // Show new blog form
    };
    // Reload blogs on current page
    BlogComponent.prototype.reloadBlogs = function () {
        var _this = this;
        this.loadingBlogs = true; // Used to lock button
        this.getAllBlogs(); // Add any new blogs to the page
        setTimeout(function () {
            _this.loadingBlogs = false; // Release button lock after four seconds
        }, 4000);
    };
    // Function to post a new comment on blog post
    BlogComponent.prototype.draftComment = function (id) {
        this.commentForm.reset(); // Reset the comment form each time users starts a new comment
        this.newComment = []; // Clear array so only one post can be commented on at a time
        this.newComment.push(id); // Add the post that is being commented on to the array
    };
    // Function to cancel new post transaction
    BlogComponent.prototype.cancelSubmission = function (id) {
        var index = this.newComment.indexOf(id); // Check the index of the blog post in the array
        this.newComment.splice(index, 1); // Remove the id from the array to cancel post submission
        this.commentForm.reset(); // Reset  the form after cancellation
        this.enableCommentForm(); // Enable the form after cancellation
        this.processing = false; // Enable any buttons that were locked
    };
    // Function to submit a new blog post
    BlogComponent.prototype.onBlogSubmit = function () {
        var _this = this;
        this.processing = true; // Disable submit button
        this.disableFormNewBlogForm(); // Lock form
        // Create blog object from form fields
        var blog = {
            title: this.form.get('title').value,
            body: this.form.get('body').value,
            createdBy: this.username // CreatedBy field
        };
        // Function to save blog into database
        this.blogService.newBlog(blog).subscribe(function (data) {
            // Check if blog was saved to database or not
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Return error class
                _this.message = data.message; // Return error message
                _this.processing = false; // Enable submit button
                _this.enableFormNewBlogForm(); // Enable form
            }
            else {
                _this.messageClass = 'alert alert-success'; // Return success class
                _this.message = data.message; // Return success message
                _this.getAllBlogs();
                // Clear form data after two seconds
                setTimeout(function () {
                    _this.newPost = false; // Hide form
                    _this.processing = false; // Enable submit button
                    _this.message = false; // Erase error/success message
                    _this.form.reset(); // Reset all form fields
                    _this.enableFormNewBlogForm(); // Enable the form fields
                }, 2000);
            }
        });
    };
    // Function to go back to previous page
    BlogComponent.prototype.goBack = function () {
        window.location.reload(); // Clear all variable states
    };
    // Function to get all blogs from the database
    BlogComponent.prototype.getAllBlogs = function () {
        var _this = this;
        // Function to GET all blogs from database
        this.blogService.getAllBlogs().subscribe(function (data) {
            _this.blogPosts = data.blogs; // Assign array to use in HTML
        });
    };
    // Function to like a blog post
    BlogComponent.prototype.likeBlog = function (id) {
        var _this = this;
        // Service to like a blog post
        this.blogService.likeBlog(id).subscribe(function (data) {
            _this.getAllBlogs(); // Refresh blogs after like
        });
    };
    // Function to disliked a blog post
    BlogComponent.prototype.dislikeBlog = function (id) {
        var _this = this;
        // Service to dislike a blog post
        this.blogService.dislikeBlog(id).subscribe(function (data) {
            _this.getAllBlogs(); // Refresh blogs after dislike
        });
    };
    // Function to post a new comment
    BlogComponent.prototype.postComment = function (id) {
        var _this = this;
        this.disableCommentForm(); // Disable form while saving comment to database
        this.processing = true; // Lock buttons while saving comment to database
        var comment = this.commentForm.get('comment').value; // Get the comment value to pass to service function
        // Function to save the comment to the database
        this.blogService.postComment(id, comment).subscribe(function (data) {
            _this.getAllBlogs(); // Refresh all blogs to reflect the new comment
            var index = _this.newComment.indexOf(id); // Get the index of the blog id to remove from array
            _this.newComment.splice(index, 1); // Remove id from the array
            _this.enableCommentForm(); // Re-enable the form
            _this.commentForm.reset(); // Reset the comment form
            _this.processing = false; // Unlock buttons on comment form
            if (_this.enabledComments.indexOf(id) < 0)
                _this.expand(id); // Expand comments for user on comment submission
        });
    };
    // Expand the list of comments
    BlogComponent.prototype.expand = function (id) {
        this.enabledComments.push(id); // Add the current blog post id to array
    };
    // Collapse the list of comments
    BlogComponent.prototype.collapse = function (id) {
        var index = this.enabledComments.indexOf(id); // Get position of id in array
        this.enabledComments.splice(index, 1); // Remove id from array
    };
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get profile username on page load
        this.authService.getProfile().subscribe(function (profile) {
            _this.username = profile.user.username; // Used when creating new blog posts and comments
        });
        this.getAllBlogs(); // Get all blogs on component load
    };
    BlogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__("../../../../../src/app/components/blog/blog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/blog/blog.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_blog_service__["a" /* BlogService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_blog_service__["a" /* BlogService */]) === 'function' && _c) || Object])
    ], BlogComponent);
    return BlogComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/angular4/upload_mean/MEAN-Stack-With-Angular-2-Tutorial/client/src/blog.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/blog/delete-blog/delete-blog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/blog/delete-blog/delete-blog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Delete Blog</h1>\r\n\r\n<!-- Custom Success/Error Message -->\r\n<div class=\"row show-hide-message\" *ngIf=\"message\">\r\n  <div [ngClass]=\"messageClass\">\r\n    {{ message }}\r\n  </div>\r\n</div>\r\n\r\n<!-- Modal Confirmation Window -->\r\n<div class=\"col-md-6\" *ngIf=\"foundBlog\">\r\n  <!-- Model Outer Layer -->\r\n  <div class=\"modal-content\">\r\n    <!-- Modal Header -->\r\n    <div class=\"modal-header\">\r\n      <!-- Close Button -->\r\n      <button type=\"button\" name=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      <!-- Modal Title -->\r\n      <h4 class=\"modal-title\">Confirm</h4>\r\n    </div>\r\n\r\n    <!-- Modal Body -->\r\n    <div class=\"modal-body\">\r\n      <p>Are you sure you would like to delete this blog?</p>\r\n    </div>\r\n\r\n    <!-- Modal Footer -->\r\n    <div class=\"modal-footer\">\r\n      <!-- Yes Button -->\r\n      <button [disabled]=\"processing\" type=\"button\" name=\"button\" class=\"btn btn-success\" (click)=\"deleteBlog()\">Yes</button>\r\n      <!-- No Button -->\r\n      <a routerLink=\"/blog\"><button [disabled]=\"processing\" type=\"button\" name=\"button\" class=\"btn btn-danger\">No</button></a>\r\n    </div>\r\n  </div>\r\n\r\n  <br />\r\n\r\n  <!-- Panel -->\r\n  <div class=\"panel panel-primary\">\r\n    <!-- Panel Heading -->\r\n    <div class=\"panel-heading\">\r\n      <!-- Panel Title -->\r\n      <h3 class=\"panel-title\">{{ blog.title }}</h3>\r\n    </div>\r\n\r\n    <!-- Panel Body -->\r\n    <div class=\"panel-body\">\r\n      {{ blog.body }}\r\n    </div>\r\n\r\n    <!-- Panel Footer -->\r\n    <div class=\"panel-footer\">\r\n      <strong>Posted by: </strong> {{ blog.createdBy }}\r\n      <br />\r\n      <strong>Date: </strong> {{ blog.createdAt | date:'MMM dd, yyyy' }}\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/blog/delete-blog/delete-blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_blog_service__ = __webpack_require__("../../../../../src/app/services/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteBlogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeleteBlogComponent = (function () {
    function DeleteBlogComponent(blogService, activatedRoute, router) {
        this.blogService = blogService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.foundBlog = false;
        this.processing = false;
    }
    // Function to delete blogs
    DeleteBlogComponent.prototype.deleteBlog = function () {
        var _this = this;
        this.processing = true; // Disable buttons
        // Function for DELETE request
        this.blogService.deleteBlog(this.currentUrl.id).subscribe(function (data) {
            // Check if delete request worked
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Return error bootstrap class
                _this.message = data.message; // Return error message
            }
            else {
                _this.messageClass = 'alert alert-success'; // Return bootstrap success class
                _this.message = data.message; // Return success message
                // After two second timeout, route to blog page
                setTimeout(function () {
                    _this.router.navigate(['/blog']); // Route users to blog page
                }, 2000);
            }
        });
    };
    DeleteBlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this.activatedRoute.snapshot.params; // Get URL paramaters on page load
        // Function for GET request to retrieve blog
        this.blogService.getSingleBlog(this.currentUrl.id).subscribe(function (data) {
            // Check if request was successfull
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Return bootstrap error class
                _this.message = data.message; // Return error message
            }
            else {
                // Create the blog object to use in HTML
                _this.blog = {
                    title: data.blog.title,
                    body: data.blog.body,
                    createdBy: data.blog.createdBy,
                    createdAt: data.blog.createdAt // Set created_at field
                };
                _this.foundBlog = true; // Displaly blog window
            }
        });
    };
    DeleteBlogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-delete-blog',
            template: __webpack_require__("../../../../../src/app/components/blog/delete-blog/delete-blog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/blog/delete-blog/delete-blog.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_blog_service__["a" /* BlogService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_blog_service__["a" /* BlogService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], DeleteBlogComponent);
    return DeleteBlogComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/angular4/upload_mean/MEAN-Stack-With-Angular-2-Tutorial/client/src/delete-blog.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/blog/edit-blog/edit-blog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/blog/edit-blog/edit-blog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Edit Blog</h1>\r\n\r\n<!-- Custom Success/Erro Message -->\r\n<div class=\"row show-hide-message\" *ngIf=\"message\">\r\n  <div [ngClass]=\"messageClass\">\r\n    {{ message }}\r\n  </div>\r\n</div>\r\n\r\n<!-- Edit Blog Form -->\r\n<form (submit)=\"updateBlogSubmit()\" *ngIf=\"!loading\">\r\n  <!-- Title Field -->\r\n  <div class=\"form-group\">\r\n    <label for=\"title\">Title</label>\r\n    <!-- Title Input -->\r\n    <input [disabled]=\"processing\" type=\"text\" name=\"title\" placeholder=\"*Blog Title\" class=\"form-control\" [(ngModel)]=\"blog.title\" #title=\"ngModel\" />\r\n  </div>\r\n\r\n  <!-- Body Field -->\r\n  <div class=\"form-group\">\r\n    <label for=\"body\">Body</label>\r\n    <!-- Body Input -->\r\n    <textarea [disabled]=\"processing\" name=\"body\" rows=\"8\" cols=\"80\" [(ngModel)]=\"blog.body\" #body=\"ngModel\" class=\"form-control\" placeholder=\"*Blog Body\"></textarea>\r\n  </div>\r\n\r\n  <!-- Delete Button -->\r\n  <a [routerLink]=\"['/delete-blog/', blog._id]\"><button  [disabled]=\"processing\"  type=\"button\" name=\"button\" class=\"btn btn-danger\">Delete</button></a>\r\n  <!-- Go Back Button -->\r\n  <button [disabled]=\"processing\" type=\"button\" name=\"button\" class=\"btn btn-success\" (click)=\"goBack()\">Go Back</button>\r\n  <!-- Save Changes Button -->\r\n  <button [disabled]=\"processing || (!title.dirty && !body.dirty)\" type=\"submit\" name=\"save\" class=\"btn btn-info\">Save Changes</button>\r\n\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/blog/edit-blog/edit-blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_blog_service__ = __webpack_require__("../../../../../src/app/services/blog.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditBlogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditBlogComponent = (function () {
    function EditBlogComponent(location, activatedRoute, blogService, router) {
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.blogService = blogService;
        this.router = router;
        this.processing = false;
        this.loading = true;
    }
    // Function to Submit Update
    EditBlogComponent.prototype.updateBlogSubmit = function () {
        var _this = this;
        this.processing = true; // Lock form fields
        // Function to send blog object to backend
        this.blogService.editBlog(this.blog).subscribe(function (data) {
            // Check if PUT request was a success or not
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Set error bootstrap class
                _this.message = data.message; // Set error message
                _this.processing = false; // Unlock form fields
            }
            else {
                _this.messageClass = 'alert alert-success'; // Set success bootstrap class
                _this.message = data.message; // Set success message
                // After two seconds, navigate back to blog page
                setTimeout(function () {
                    _this.router.navigate(['/blog']); // Navigate back to route page
                }, 2000);
            }
        });
    };
    // Function to go back to previous page
    EditBlogComponent.prototype.goBack = function () {
        this.location.back();
    };
    EditBlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this.activatedRoute.snapshot.params; // When component loads, grab the id
        // Function to GET current blog with id in params
        this.blogService.getSingleBlog(this.currentUrl.id).subscribe(function (data) {
            // Check if GET request was success or not
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Set bootstrap error class
                _this.message = data.message; // Set error message
            }
            else {
                _this.blog = data.blog; // Save blog object for use in HTML
                _this.loading = false; // Allow loading of blog form
            }
        });
    };
    EditBlogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-blog',
            template: __webpack_require__("../../../../../src/app/components/blog/edit-blog/edit-blog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/blog/edit-blog/edit-blog.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_blog_service__["a" /* BlogService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_blog_service__["a" /* BlogService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _d) || Object])
    ], EditBlogComponent);
    return EditBlogComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/angular4/upload_mean/MEAN-Stack-With-Angular-2-Tutorial/client/src/edit-blog.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Dashboard Route</h1>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
//# sourceMappingURL=C:/angular4/upload_mean/MEAN-Stack-With-Angular-2-Tutorial/client/src/dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumbotron {\r\n\r\n    background: url('https://s-media-cache-ak0.pinimg.com/originals/4e/60/02/4e60020b8c2152021e8906fc8bbcf05c.jpg')\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\r\n  <h1>Blogger Application</h1>\r\n  <p class=\"lead\">Welcome to the MEAN Stack Application by <strong>Pranjal</strong></p>\r\n  <br><br><br>\r\n  <div>\r\n    <a *ngIf=\"!authService.loggedIn()\" routerLink=\"/register\" class=\"btn btn-primary\">Register</a>\r\n    <a *ngIf=\"!authService.loggedIn()\" routerLink=\"/login\" class=\"btn btn-default\">Login</a>\r\n    <a *ngIf=\"authService.loggedIn()\" routerLink=\"/blog\" class=\"btn btn-success\">View Blogs</a>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(authService) {
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
//# sourceMappingURL=C:/angular4/upload_mean/MEAN-Stack-With-Angular-2-Tutorial/client/src/home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\r\n     background: url('https://s-media-cache-ak0.pinimg.com/originals/4e/60/02/4e60020b8c2152021e8906fc8bbcf05c.jpg');\r\n     padding-bottom:70px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"col-lg-3 col-sm-1\">\r\n    </div>\r\n<div class=\"col-lg-6 col-sm-10\">\r\n<h2 class=\"page-header\">Login</h2>\r\n\r\n<!-- Custom Success/Error Message -->\r\n<div class=\"row show-hide-message\">\r\n  <div [ngClass]=\"messageClass\">\r\n    {{ message }}\r\n  </div>\r\n</div>\r\n\r\n<!-- Login Form -->\r\n<form [formGroup]=\"form\" (submit)=\"onLoginSubmit()\">\r\n\r\n  <!-- Username Field -->\r\n  <div class=\"form-group\">\r\n    <label for=\"username\">Username</label>\r\n    <div [ngClass]=\"{'has-error': form.controls.username.errors && form.controls.username.dirty, 'has-success': form.controls.username.valid && form.controls.username.dirty }\">\r\n      <input class=\"form-control\" type=\"text\" name=\"username\" formControlName=\"username\" />\r\n      <!-- Validation -->\r\n      <ul class=\"help-block\">\r\n        <li *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\">This field is required.</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Password Field  -->\r\n  <div class=\"form-group\">\r\n    <label for=\"password\">Password</label>\r\n    <div [ngClass]=\"{'has-error': form.controls.password.errors && form.controls.password.dirty, 'has-success': form.controls.password.valid && form.controls.password.dirty }\">\r\n      <input class=\"form-control\" type=\"password\" name=\"password\" formControlName=\"password\" />\r\n      <!-- Validation -->\r\n      <ul class=\"help-block\">\r\n        <li *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">This field is required.</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <!-- Submit Button -->\r\n  <input [disabled]=\"!form.valid || processing\" class=\"btn btn-primary\" type=\"submit\" value=\"Login\" />\r\n</form>\r\n</div>\r\n  <div class=\"col-lg-3 col-sm-1\">\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(formBuilder, authService, router, authGuard) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.authGuard = authGuard;
        this.processing = false;
        this.createForm(); // Create Login Form when component is constructed
    }
    // Function to create login form
    LoginComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required] // Password field
        });
    };
    // Function to disable form
    LoginComponent.prototype.disableForm = function () {
        this.form.controls['username'].disable(); // Disable username field
        this.form.controls['password'].disable(); // Disable password field
    };
    // Function to enable form
    LoginComponent.prototype.enableForm = function () {
        this.form.controls['username'].enable(); // Enable username field
        this.form.controls['password'].enable(); // Enable password field
    };
    // Functiont to submit form and login user
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.processing = true; // Used to submit button while is being processed
        this.disableForm(); // Disable form while being process
        // Create user object from user's input
        var user = {
            username: this.form.get('username').value,
            password: this.form.get('password').value // Password input field
        };
        // Function to send login data to API
        this.authService.login(user).subscribe(function (data) {
            // Check if response was a success or error
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Set bootstrap error class
                _this.message = data.message; // Set error message
                _this.processing = false; // Enable submit button
                _this.enableForm(); // Enable form for editting
            }
            else {
                _this.messageClass = 'alert alert-success'; // Set bootstrap success class
                _this.message = data.message; // Set success message
                // Function to store user's token in client local storage
                _this.authService.storeUserData(data.token, data.user);
                // After 2 seconds, redirect to dashboard page
                setTimeout(function () {
                    // Check if user was redirected or logging in for first time
                    if (_this.previousUrl) {
                        _this.router.navigate([_this.previousUrl]); // Redirect to page they were trying to view before
                    }
                    else {
                        _this.router.navigate(['/dashboard']); // Navigate to dashboard view
                    }
                }, 2000);
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        // On page load, check if user was redirected to login
        if (this.authGuard.redirectUrl) {
            this.messageClass = 'alert alert-danger'; // Set error message: need to login
            this.message = 'You must be logged in to view that page.'; // Set message
            this.previousUrl = this.authGuard.redirectUrl; // Set the previous URL user was redirected from
            this.authGuard.redirectUrl = undefined; // Erase previous URL
        }
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__["a" /* AuthGuard */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__["a" /* AuthGuard */]) === 'function' && _d) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/angular4/upload_mean/MEAN-Stack-With-Angular-2-Tutorial/client/src/login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Fixed navbar -->\r\n<nav class=\"navbar navbar-default\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\r\n         <span class=\"sr-only\">Toggle navigation</span>\r\n         <span class=\"icon-bar\"></span>\r\n         <span class=\"icon-bar\"></span>\r\n         <span class=\"icon-bar\"></span>\r\n       </button>\r\n      <a class=\"navbar-brand\" routerLink=\"/\">MEAN Stack Blog</a>\r\n    </div>\r\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\r\n      <ul class=\"nav navbar-nav navbar-left\">\r\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/\">Home</a></li>\r\n      </ul>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/dashboard\">Dashboard</a></li>\r\n        <li><a *ngIf=\"authService.loggedIn()\" routerLink=\"/profile\">Profile</a></li>\r\n        <li><a *ngIf=\"authService.loggedIn()\" routerLink=\"/blog\">Blog</a></li>\r\n        <li><a *ngIf=\"!authService.loggedIn()\" routerLink=\"/login\">Login</a></li>\r\n        <li><a *ngIf=\"authService.loggedIn()\" href=\"#\" (click)=\"onLogoutClick()\">Logout</a></li>\r\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/register\">Register</a></li>\r\n      </ul>\r\n    </div>\r\n    <!--/.nav-collapse -->\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessagesService) {
        this.authService = authService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
    }
    // Function to logout user
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout(); // Logout user
        this.flashMessagesService.show('You are logged out', { cssClass: 'alert-info' }); // Set custom flash message
        this.router.navigate(['/']); // Navigate back to home page
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/angular4/upload_mean/MEAN-Stack-With-Angular-2-Tutorial/client/src/navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Profile Page</h2>\r\n<ul class=\"list-group\">\r\n  <li class=\"list-group-item\">Username: {{ username }}</li>\r\n  <li class=\"list-group-item\">Email: {{ email }}</li>\r\n</ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = (function () {
    function ProfileComponent(authService) {
        this.authService = authService;
        this.username = '';
        this.email = '';
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Once component loads, get user's data to display on profile
        this.authService.getProfile().subscribe(function (profile) {
            _this.username = profile.user.username; // Set username
            _this.email = profile.user.email; // Set e-mail
        });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a;
}());
//# sourceMappingURL=C:/angular4/upload_mean/MEAN-Stack-With-Angular-2-Tutorial/client/src/profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/public-profile/public-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/public-profile/public-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Public Profile</h1>\r\n\r\n<!-- Custom Success/Error Message -->\r\n<div class=\"row show-hide-message\" *ngIf=\"message\">\r\n  <div [ngClass]=\"messageClass\">\r\n    {{ message }}\r\n  </div>\r\n</div>\r\n\r\n<!-- Table to Display User Info -->\r\n<ul *ngIf=\"foundProfile\" class=\"list-group\">\r\n  <!-- Username -->\r\n  <li class=\"list-group-item\"><strong>Username: </strong>{{ username }}</li>\r\n  <!-- E-Mail -->\r\n  <li class=\"list-group-item\"><strong>E-Mail: </strong>{{ email }}</li>\r\n</ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/public-profile/public-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PublicProfileComponent = (function () {
    function PublicProfileComponent(authService, activatedRoute) {
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.foundProfile = false;
    }
    PublicProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this.activatedRoute.snapshot.params; // Get URL parameters on page load
        // Service to get the public profile data
        this.authService.getPublicProfile(this.currentUrl.username).subscribe(function (data) {
            // Check if user was found in database
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Return bootstrap error class
                _this.message = data.message; // Return error message
            }
            else {
                _this.username = data.user.username; // Save the username for use in HTML
                _this.email = data.user.email; // Save the email for use in HTML
                _this.foundProfile = true; // Enable profile table
            }
        });
    };
    PublicProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-public-profile',
            template: __webpack_require__("../../../../../src/app/components/public-profile/public-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/public-profile/public-profile.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], PublicProfileComponent);
    return PublicProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/angular4/upload_mean/MEAN-Stack-With-Angular-2-Tutorial/client/src/public-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Register Page</h1>\r\n\r\n<!-- Custom Success/Error Message -->\r\n<div class=\"row show-hide-message\">\r\n  <div [ngClass]=\"messageClass\">\r\n    {{ message }}\r\n  </div>\r\n</div>\r\n\r\n<!-- Registration Form -->\r\n<form [formGroup]=\"form\" (submit)=\"onRegisterSubmit()\">\r\n\r\n  <!-- Username Input -->\r\n  <div class=\"form-group\">\r\n    <label for=\"username\">Username</label>\r\n    <div [ngClass]=\"{'has-error': (form.controls.username.errors && form.controls.username.dirty) || (!usernameValid && form.controls.username.dirty), 'has-success': !form.controls.username.errors && usernameValid}\">\r\n      <input type=\"text\" name=\"username\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Username\" formControlName=\"username\" (blur)=\"checkUsername()\"  />\r\n      <!-- Validation -->\r\n      <ul class=\"help-block\">\r\n        <li *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\">This field is required</li>\r\n        <li *ngIf=\"form.controls.username.errors?.minlength && form.controls.username.dirty || form.controls.username.errors?.maxlength && form.controls.username.dirty \">Minimum characters: 3, Maximum characters: 15</li>\r\n        <li *ngIf=\"form.controls.username.errors?.validateUsername && form.controls.username.dirty\">Username must not have any special characters</li>\r\n        <li *ngIf=\"usernameMessage\">{{ usernameMessage }}</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Email Input -->\r\n  <div class=\"form-group\">\r\n    <label for=\"email\">Email</label>\r\n    <div [ngClass]=\"{'has-error': (form.controls.email.errors && form.controls.email.dirty) || (!emailValid && form.controls.email.dirty), 'has-success': !form.controls.email.errors && emailValid}\">\r\n      <input type=\"text\" name=\"email\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Email\" formControlName=\"email\" (blur)=\"checkEmail()\" />\r\n      <!-- Validation -->\r\n      <ul class=\"help-block\">\r\n        <li *ngIf=\"form.controls.email.errors?.required && form.controls.email.dirty\">This field is required</li>\r\n        <li *ngIf=\"(form.controls.email.errors?.minlength && form.controls.email.dirty || form.controls.email.errors?.maxlength && form.controls.email.dirty ) && form.controls.email.dirty\">Minimum characters: 5, Maximum characters: 30</li>\r\n        <li *ngIf=\"form.controls.email.errors?.validateEmail && form.controls.email.dirty\">This must be a valid e-mail</li>\r\n        <li *ngIf=\"emailMessage\">{{ emailMessage}}</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Password Input -->\r\n  <div class=\"form-group\">\r\n    <label for=\"password\">Password</label>\r\n    <div [ngClass]=\"{'has-error': (form.controls.password.errors && form.controls.password.dirty), 'has-success': !form.controls.password.errors}\">\r\n      <input type=\"password\" name=\"password\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Password\" formControlName=\"password\" />\r\n      <!-- Validation -->\r\n      <ul class=\"help-block\">\r\n        <li *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">This field is required</li>\r\n        <li *ngIf=\"form.controls.password.errors?.minlength && form.controls.password.dirty || form.controls.password.errors?.maxlength && form.controls.password.dirty \">Minimum characters: 8, Maximum characters: 35</li>\r\n        <li *ngIf=\"form.controls.password.errors?.validatePassword && form.controls.password.dirty\">Password must be at least 8 characters but no more than 35</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Confirm Password Input -->\r\n  <div class=\"form-group\">\r\n    <label for=\"confirm\">Confirm Password</label>\r\n    <div [ngClass]=\"{'has-error': (form.controls.confirm.errors && form.controls.confirm.dirty) || (form.errors?.matchingPasswords && form.controls.confirm.dirty), 'has-success': !form.controls.confirm.errors && !form.errors?.matchingPasswords}\">\r\n      <input type=\"password\" name=\"confirm\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Confirm Password\" formControlName=\"confirm\" />\r\n      <!-- Validation -->\r\n      <ul class=\"help-block\">\r\n        <li *ngIf=\"form.controls.confirm.errors?.required && form.controls.confirm.dirty\">This field is required</li>\r\n        <li *ngIf=\"form.errors?.matchingPasswords && form.controls.confirm.dirty\">Password do not match</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Submit Input -->\r\n  <input [disabled]=\"!form.valid || processing || !emailValid || !usernameValid\" type=\"submit\" class=\"btn btn-primary\" value=\"Submit\" />\r\n\r\n</form>\r\n<!-- Registration Form /-->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.processing = false;
        this.createForm(); // Create Angular 2 Form when component loads
    }
    // Function to create registration form
    RegisterComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            // Email Input
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(30),
                    this.validateEmail // Custom validation
                ])],
            // Username Input
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(15),
                    this.validateUsername // Custom validation
                ])],
            // Password Input
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(8),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(35),
                    this.validatePassword // Custom validation
                ])],
            // Confirm Password Input
            confirm: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required] // Field is required
        }, { validator: this.matchingPasswords('password', 'confirm') }); // Add custom validator to form for matching passwords
    };
    // Function to disable the registration form
    RegisterComponent.prototype.disableForm = function () {
        this.form.controls['email'].disable();
        this.form.controls['username'].disable();
        this.form.controls['password'].disable();
        this.form.controls['confirm'].disable();
    };
    // Function to enable the registration form
    RegisterComponent.prototype.enableForm = function () {
        this.form.controls['email'].enable();
        this.form.controls['username'].enable();
        this.form.controls['password'].enable();
        this.form.controls['confirm'].enable();
    };
    // Function to validate e-mail is proper format
    RegisterComponent.prototype.validateEmail = function (controls) {
        // Create a regular expression
        var regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        // Test email against regular expression
        if (regExp.test(controls.value)) {
            return null; // Return as valid email
        }
        else {
            return { 'validateEmail': true }; // Return as invalid email
        }
    };
    // Function to validate username is proper format
    RegisterComponent.prototype.validateUsername = function (controls) {
        // Create a regular expression
        var regExp = new RegExp(/^[a-zA-Z0-9]+$/);
        // Test username against regular expression
        if (regExp.test(controls.value)) {
            return null; // Return as valid username
        }
        else {
            return { 'validateUsername': true }; // Return as invalid username
        }
    };
    // Function to validate password
    RegisterComponent.prototype.validatePassword = function (controls) {
        // Create a regular expression
        var regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/);
        // Test password against regular expression
        if (regExp.test(controls.value)) {
            return null; // Return as valid password
        }
        else {
            return { 'validatePassword': true }; // Return as invalid password
        }
    };
    // Funciton to ensure passwords match
    RegisterComponent.prototype.matchingPasswords = function (password, confirm) {
        return function (group) {
            // Check if both fields are the same
            if (group.controls[password].value === group.controls[confirm].value) {
                return null; // Return as a match
            }
            else {
                return { 'matchingPasswords': true }; // Return as error: do not match
            }
        };
    };
    // Function to submit form
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        this.processing = true; // Used to notify HTML that form is in processing, so that it can be disabled
        this.disableForm(); // Disable the form
        // Create user object form user's inputs
        var user = {
            email: this.form.get('email').value,
            username: this.form.get('username').value,
            password: this.form.get('password').value // Password input field
        };
        // Function from authentication service to register user
        this.authService.registerUser(user).subscribe(function (data) {
            // Resposne from registration attempt
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Set an error class
                _this.message = data.message; // Set an error message
                _this.processing = false; // Re-enable submit button
                _this.enableForm(); // Re-enable form
            }
            else {
                _this.messageClass = 'alert alert-success'; // Set a success class
                _this.message = data.message; // Set a success message
                // After 2 second timeout, navigate to the login page
                setTimeout(function () {
                    _this.router.navigate(['/login']); // Redirect to login view
                }, 2000);
            }
        });
    };
    // Function to check if e-mail is taken
    RegisterComponent.prototype.checkEmail = function () {
        var _this = this;
        // Function from authentication file to check if e-mail is taken
        this.authService.checkEmail(this.form.get('email').value).subscribe(function (data) {
            // Check if success true or false was returned from API
            if (!data.success) {
                _this.emailValid = false; // Return email as invalid
                _this.emailMessage = data.message; // Return error message
            }
            else {
                _this.emailValid = true; // Return email as valid
                _this.emailMessage = data.message; // Return success message
            }
        });
    };
    // Function to check if username is available
    RegisterComponent.prototype.checkUsername = function () {
        var _this = this;
        // Function from authentication file to check if username is taken
        this.authService.checkUsername(this.form.get('username').value).subscribe(function (data) {
            // Check if success true or success false was returned from API
            if (!data.success) {
                _this.usernameValid = false; // Return username as invalid
                _this.usernameMessage = data.message; // Return error message
            }
            else {
                _this.usernameValid = true; // Return username as valid
                _this.usernameMessage = data.message; // Return success message
            }
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/angular4/upload_mean/MEAN-Stack-With-Angular-2-Tutorial/client/src/register.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // Function to check if user is authorized to view route
    AuthGuard.prototype.canActivate = function (router, state) {
        // Check if user is logge din
        if (this.authService.loggedIn()) {
            return true; // Return true: User is allowed to view route
        }
        else {
            this.redirectUrl = state.url; // Grab previous urul
            this.router.navigate(['/login']); // Return error and route to login page
            return false; // Return false: user not authorized to view page
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=C:/angular4/upload_mean/MEAN-Stack-With-Angular-2-Tutorial/client/src/auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/guards/notAuth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotAuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotAuthGuard = (function () {
    function NotAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // Function to determine whether user is authorized to view route
    NotAuthGuard.prototype.canActivate = function () {
        // Check if user is logged in
        if (this.authService.loggedIn()) {
            this.router.navigate(['/']); // Return error, route to home
            return false; // Return false: user not allowed to view route
        }
        else {
            return true; // Return true: user is allowed to view route
        }
    };
    NotAuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], NotAuthGuard);
    return NotAuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=C:/angular4/upload_mean/MEAN-Stack-With-Angular-2-Tutorial/client/src/notAuth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        // domain = ""; // Production
        this.domain = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].domain;
    }
    // Function to create headers, add token, to be used in HTTP requests
    AuthService.prototype.createAuthenticationHeaders = function () {
        this.loadToken(); // Get token so it can be attached to headers
        // Headers configuration options
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({
                'Content-Type': 'application/json',
                'authorization': this.authToken // Attach token
            })
        });
    };
    // Function to get token from client local storage
    AuthService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('token');
        ; // Get token and asssign to variable to be used elsewhere
    };
    // Function to register user accounts
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this.domain + 'authentication/register', user).map(function (res) { return res.json(); });
    };
    // Function to check if username is taken
    AuthService.prototype.checkUsername = function (username) {
        return this.http.get(this.domain + 'authentication/checkUsername/' + username).map(function (res) { return res.json(); });
    };
    // Function to check if e-mail is taken
    AuthService.prototype.checkEmail = function (email) {
        return this.http.get(this.domain + 'authentication/checkEmail/' + email).map(function (res) { return res.json(); });
    };
    // Function to login user
    AuthService.prototype.login = function (user) {
        return this.http.post(this.domain + 'authentication/login', user).map(function (res) { return res.json(); });
    };
    // Function to logout
    AuthService.prototype.logout = function () {
        this.authToken = null; // Set token to null
        this.user = null; // Set user to null
        localStorage.clear(); // Clear local storage
    };
    // Function to store user's data in client local storage
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token', token); // Set token in local storage
        localStorage.setItem('user', JSON.stringify(user)); // Set user in local storage as string
        this.authToken = token; // Assign token to be used elsewhere
        this.user = user; // Set user to be used elsewhere
    };
    // Function to get user's profile data
    AuthService.prototype.getProfile = function () {
        this.createAuthenticationHeaders(); // Create headers before sending to API
        return this.http.get(this.domain + 'authentication/profile', this.options).map(function (res) { return res.json(); });
    };
    // Function to get public profile data
    AuthService.prototype.getPublicProfile = function (username) {
        this.createAuthenticationHeaders(); // Create headers before sending to API
        return this.http.get(this.domain + 'authentication/publicProfile/' + username, this.options).map(function (res) { return res.json(); });
    };
    // Function to check if user is logged in
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=C:/angular4/upload_mean/MEAN-Stack-With-Angular-2-Tutorial/client/src/auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/blog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogService = (function () {
    function BlogService(authService, http) {
        this.authService = authService;
        this.http = http;
        this.domain = this.authService.domain;
    }
    // Function to create headers, add token, to be used in HTTP requests
    BlogService.prototype.createAuthenticationHeaders = function () {
        this.authService.loadToken(); // Get token so it can be attached to headers
        // Headers configuration options
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({
                'Content-Type': 'application/json',
                'authorization': this.authService.authToken // Attach token
            })
        });
    };
    // Function to create a new blog post
    BlogService.prototype.newBlog = function (blog) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.post(this.domain + 'blogs/newBlog', blog, this.options).map(function (res) { return res.json(); });
    };
    // Function to get all blogs from the database
    BlogService.prototype.getAllBlogs = function () {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.get(this.domain + 'blogs/allBlogs', this.options).map(function (res) { return res.json(); });
    };
    // Function to get the blog using the id
    BlogService.prototype.getSingleBlog = function (id) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.get(this.domain + 'blogs/singleBlog/' + id, this.options).map(function (res) { return res.json(); });
    };
    // Function to edit/update blog post
    BlogService.prototype.editBlog = function (blog) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.put(this.domain + 'blogs/updateBlog/', blog, this.options).map(function (res) { return res.json(); });
    };
    // Function to delete a blog
    BlogService.prototype.deleteBlog = function (id) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.delete(this.domain + 'blogs/deleteBlog/' + id, this.options).map(function (res) { return res.json(); });
    };
    // Function to like a blog post
    BlogService.prototype.likeBlog = function (id) {
        var blogData = { id: id };
        return this.http.put(this.domain + 'blogs/likeBlog/', blogData, this.options).map(function (res) { return res.json(); });
    };
    // Function to dislike a blog post
    BlogService.prototype.dislikeBlog = function (id) {
        var blogData = { id: id };
        return this.http.put(this.domain + 'blogs/dislikeBlog/', blogData, this.options).map(function (res) { return res.json(); });
    };
    // Function to post a comment on a blog post
    BlogService.prototype.postComment = function (id, comment) {
        this.createAuthenticationHeaders(); // Create headers
        // Create blogData to pass to backend
        var blogData = {
            id: id,
            comment: comment
        };
        return this.http.post(this.domain + 'blogs/comment', blogData, this.options).map(function (res) { return res.json(); });
    };
    BlogService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === 'function' && _b) || Object])
    ], BlogService);
    return BlogService;
    var _a, _b;
}());
//# sourceMappingURL=C:/angular4/upload_mean/MEAN-Stack-With-Angular-2-Tutorial/client/src/blog.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false,
    domain: ""
};
//# sourceMappingURL=C:/angular4/upload_mean/MEAN-Stack-With-Angular-2-Tutorial/client/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/angular4/upload_mean/MEAN-Stack-With-Angular-2-Tutorial/client/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map