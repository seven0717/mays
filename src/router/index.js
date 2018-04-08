import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/page/index';
import Home from '@/page/home';
import Fitness from '@/page/fitness';
import Find from '@/page/find';
import Me from '@/page/me';

import Axios from "axios";
Vue.prototype.$axios = Axios;
Vue.prototype.HOST = "/msi";



// home
import Record from "@/page/home/record";
import Riding from "@/page/home/riding";
import Runing from "@/page/home/runing";
import ToTal from "@/page/home/total";

// Runing
import RunMap from '@/page/home/run/runMap';
import Runhis from '@/page/home/run/runhis';
import Runset from '@/page/home/run/runSet';

// element-ui
import { Progress,Button, Icon, Switch } from 'element-ui';

//find
import Discover from "@/find/discover";
import Dynamic from "@/find/dynamic";
//discovue
import Winnow from '../find/find-nav/Winnow';
import Diet from '../find/find-nav/diet';
import Store from '../find/find-nav/store';

//dynamic
import Hoop from "../find/dynamic-nav/hoop .vue"
import Nearby from "../find/dynamic-nav/nearby.vue"
import Attention from '../find/dynamic-nav/attention';
//me
import Person from "@/page/me/person"
import Information from "@/page/me/information"
import Set from "@/page/me/set"
import Account from "@/page/me/account"

Vue.use(Router);
Vue.use(Progress);
Vue.use(Button);
Vue.use(Icon);
Vue.use(Switch);

export default new Router({
  linkActiveClass:"active",
  routes: [
    {
      path:'/',
      name:'Index',
      component: Index,
      redirect:'/home',
      children:[
        {
          path:'home',
          component:Home,
          redirect:"/home/total",
          children:[
            {
              path:'total',
              component:ToTal
            },
            {
              path:'riding',
              component:Riding
            },
            {
              path:'runing',
              component:Runing
            },
            {
              path:'record',
              component:Record
            }
          ]
        },
        {
          path:'fitness',
          component:Fitness
        },
        {
          path:'Find',
          component:Find,
          redirect:'/find/discover',
          children:[
            {
              path:'discover',
              component:Discover,
              redirect:'discover/winnow',
              children:[
                {
                  path:'/find/discover/winnow',
                  component:Winnow
                },
                {
                  path:'/find/discover/diet',
                  component:Diet
                },
                {
                  path:'/find/discover/store',
                  component:Store
                }
              ]
            },
            {
              path:'/find/dynamic',
              component:Dynamic,
              redirect:'dynamic/hoop',
              children:[
                {
                  path:'/find/dynamic/hoop',
                  component:Hoop
                },
                {
                  path:'/find/dynamic/attention',
                  component:Attention
                },
                {
                  path:'/find/dynamic/nearby',
                  component:Nearby
                }
              ]
            }

          ]
        },
        {
          path: 'me',
          component: Me,
          redirect: '/me/person',
          children: [
            {
              path: 'person',
              component: Person
            },
            {
              path: 'information',
              component: Information
            },
            {
              path: 'set',
              component: Set
            },
            {
              path: 'account',
              component: Account
            }
          ]
        }
      ]
    },
    {
      path:'/runmap/:id',
      name:'runmap',
      component:RunMap
    },
    {
      path:'/runset/:id',
      name:'runset',
      component:Runset
    },
    {
      path:'/runhis',
      name:"runhis",
      component:Runhis
    }
  ]
})
