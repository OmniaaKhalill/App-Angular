import { Routes } from '@angular/router';
import { StudentListComponent } from './student/student-list/student-list.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './account/login/login.component';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { DepartmentAddComponent } from './department/department-add/department-add.component';
import { canLoginGuard } from './guard/log-in/can-login.guard';
import { LoginOutComponent } from './account/login-out/login-out.component';
import { SpecialMealFormComponent } from './SpecialMeal/special-meal-form/special-meal-form.component';
import { ClientProfleFormComponent } from './Profiles/client-profile-form/client-profle-form.component';
import { ClientProfleComponent } from './Profiles/client-profile/client-profle.component';
import { ClientFavouriteComponent } from './Profiles/client-favourite/client-favourite.component';
import { ClientOrderComponent } from './Profiles/client-order/client-order.component';
import { ChefPageFormComponent } from './Profiles/chef-page-form/chef-page-form.component';
import { ChefPageComponent } from './Profiles/chef-page/chef-page.component';
import { ChefMealsComponent } from './Profiles/chef-meals/chef-meals.component';
import { RequestedMealsComponent } from './Profiles/requested-meals/requested-meals.component';
import { GetAuthTokenComponent } from './Payment/get-auth-token/get-auth-token.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },

  {
    path: 'students',
    loadChildren: () =>
      import('./routes/student.routes').then((s) => s.stdRoutes),
  },

  {
    path: 'departments',
    component: DepartmentListComponent,
    canActivate: [canLoginGuard],
  },
  {
    path: 'departments/add',
    component: DepartmentAddComponent,
    canActivate: [canLoginGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LoginOutComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },

  {path: '', component:GetAuthTokenComponent},
  {path: 'GetAuthToken', component:GetAuthTokenComponent},

  { path: 'ClientForm', component:ClientProfleFormComponent },

  { path: 'profile', redirectTo: 'profile/Favourites', pathMatch: 'full' },
  { path: 'profile', component:ClientProfleComponent,children:[

 
    {path: 'Favourites', component:ClientFavouriteComponent},
    {path: 'Orders', component:ClientOrderComponent},
]
 },
 { path: 'ChefPageForm', component:ChefPageFormComponent },

 { path: 'ChefPage', redirectTo: 'ChefPage/chefMeals', pathMatch: 'full' },
 { path: 'ChefPage', component:ChefPageComponent ,children:[


  {path: 'chefMeals', component:ChefMealsComponent},
  {path: 'requestedMeals', component:RequestedMealsComponent},
 ]},




];
