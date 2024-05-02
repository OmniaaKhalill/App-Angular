import { Routes } from '@angular/router';
import { StudentListComponent } from '../student/student-list/student-list.component';
import { canLoginGuard } from '../guard/log-in/can-login.guard';
import { StudentAddComponent } from '../student/student-add/student-add.component';
import { StudentDetailsComponent } from '../student/student-details/student-details.component';

export const stdRoutes: Routes = [
  {
    path: '',
    component: StudentListComponent,
    canActivate: [canLoginGuard],
    children: [
      {
        path: 'add',
        component: StudentAddComponent,
        canActivate: [canLoginGuard],
      },
      {
        path: 'details/:id',
        component: StudentDetailsComponent,
        canActivate: [canLoginGuard],
      },
    ],
  },
];
