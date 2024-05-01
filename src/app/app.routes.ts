import { Routes } from '@angular/router';
import { StudentListComponent } from './student/student-list/student-list.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './account/login/login.component';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { DepartmentAddComponent } from './department/department-add/department-add.component';
import { canLoginGuard } from './guard/can-login.guard';
import { LoginOutComponent } from './account/login-out/login-out.component';


export const routes: Routes = [
{path:'home',component:HomeComponent},


{path:'students',loadChildren:()=>import('./student/student.routes').then(s=>s.stdRoutes)},


{path:'departments',component:DepartmentListComponent,canActivate:[canLoginGuard]},
{path:'departments/add',component:DepartmentAddComponent,canActivate:[canLoginGuard]},
{path:'login',component:LoginComponent},
{path:'logout',component:LoginOutComponent},
{path:'',redirectTo:"home",pathMatch:"full"}


];
