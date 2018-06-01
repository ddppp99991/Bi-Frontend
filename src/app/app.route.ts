import {ModuleWithProviders} from '@angular/core';

import { WorkspaceComponent } from './web/workspace/workspace.component';
import { Routes, RouterModule } from '@angular/router';
    // 定义常量 嵌套子路由
    const appChildRoutes: Routes = [
        // {path: 'exchange', component: ExchangeSpacesComponent},
        // {path: 'register', component: RegisterComponent},
    ];

    // 定义常量 路由
    const appRoutes:Routes = [
        {path: '', component: WorkspaceComponent},
        // {path: 'login', component: LoginComponent},
        // {
        //     path: '',
        //     component: WorkspaceComponent,
        //     children: appChildRoutes 
        // },
        {
            path: '**',
            redirectTo: '',
            pathMatch: 'full'
        }
    ];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
// export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); // 去除路径中的#号
