import Country from './components/Country';
import ImmuneSystemBoosters from './components/ImmuneSystemBoosters';
import Prevention from './components/Prevention';
import WorldWide from './components/WorldWide';
export const routes = [
    {
        path: '/',
        component: WorldWide,
        props: false,
    },
    // {
    //     path: '/*',
    //     component: WorldWide,
    //     props: false,
    // },
    {
        path: '/country/:slug',
        component: Country,
        props: true,
    },
    // {
    //     path: '/country/*',
    //     component: WorldWide,
    //     props: false,
    // },
    {
        path: '/immune-system-boosters',
        component: ImmuneSystemBoosters,
        props: false,
    },
    {
        path: '/prevention',
        component: Prevention,
        props: false,
    },
]
