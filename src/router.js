import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import App from './App.vue'


export const router = createRouter({
  history: createWebHistory(),
  routes: [
    // {
    //   path: '/',
    //   component: User,
    //   children: [
    //     // UserHome will be rendered inside User's <router-view>
    //     // when /users/:username is matched
    //     { path: '', component: UserHome },

    //     // UserProfile will be rendered inside User's <router-view>
    //     // when /users/:username/profile is matched
    //     { path: 'profile', component: UsernpmProfile },

    //     // UserPosts will be rendered inside User's <router-view>
    //     // when /users/:username/posts is matched
    //     { path: 'posts', component: UserPosts },
    //   ],
    // },


    // 匹配 /users 和 /users/posva
    { path: '/',component: HelloWorld },
    { 
        path: '/helloworld',
        component: HelloWorld, 
        //props: { msg: 'ssssssss' },
        props: route => ({ msg: route.query.msg }),
    }
  ],
})
