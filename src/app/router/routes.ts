import { FullLayoutComponent } from '../layout/full-layout/full-layout.component';

export class AllRoutes {
    static routes = [
        {
            path: '',
            redirectTo: '/home',
            pathMatch: 'full'
        },
        {
            path: '',
            component: FullLayoutComponent,
            children: [
                {
                    path: 'home',
                    loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
                }
            ]
        }
    ]
}