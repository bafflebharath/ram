import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Layout } from './pages/layout/layout';
import { ChargeBack } from './pages/chargeBack/charge-back/charge-back';
import { OmcbkCaseDetail } from './pages/chargeBack/omcbk-case-detail/omcbk-case-detail';
import { OmcbkCaseList } from './pages/chargeBack/omcbk-case-list/omcbk-case-list';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {
        path: 'login', 
        component: Login
    },
    {
        path: 'layout',
        component: Layout,
        children: [
            {
                path: 'dashboard',
                component: Dashboard,
                children: [
                    {
                        path: 'chargeBack/charge-back',
                        component: ChargeBack,
                        children: [
                            {
                                path: 'chargeBack/omcbk-case-list',
                                component: OmcbkCaseList,
                                children: [
                                    {
                                        path: 'chargeBack/omcbk-case-detail',
                                        component: OmcbkCaseDetail,
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
