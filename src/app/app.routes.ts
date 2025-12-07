import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Layout } from './pages/layout/layout';
import { ChargeBack } from './pages/chargeBack/charge-back/charge-back';
import { OmcbkCaseDetail } from './pages/chargeBack/omcbk-case-detail/omcbk-case-detail';
import { OmcbkCaseList } from './pages/chargeBack/omcbk-case-list/omcbk-case-list';
import { Dashboard } from './pages/dashboard/dashboard';
import { MerchantList } from './pages/merchant/merchant-list/merchant-list';
import { AuthGuard } from './guards/auth.guard';

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
        canActivate: [AuthGuard],
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
                                path: 'omcbk-case-list',
                                component: OmcbkCaseList,
                                children: [
                                    {
                                        path: 'omcbk-case-detail',
                                        component: OmcbkCaseDetail,
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        path: 'merchant',
                        children: [
                            {
                                path: 'merchant-list',
                                component: MerchantList
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
