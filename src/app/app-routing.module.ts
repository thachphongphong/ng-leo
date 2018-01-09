import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BlogComponent } from './public/blog/blog.component';

const routes: Routes = [
    {
        path: '',
        loadChildren: 'app/public/public.module#PublicModule',
    },
    {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }