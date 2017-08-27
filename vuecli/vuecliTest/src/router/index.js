import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Error from '@/components/Error'


Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [{
        path: '/',
        name: 'Hello',
        component: Hello
    }, {
        path: '/hi',
        name: 'Hi',
        component: Hi,
        children: [{
            path: '/',
            component: Hi,
            name: "Hello/Hi",
            beforeEnter: (to, form, next) => {
                console.log(to);
                console.log(form);
                next();
            }
        }, {
            path: 'hi1',
            component: Hi1,
            name: "Hello/Hi1"
        }, {
            path: 'hi2',
            component: Hi2,
            name: "测试"
        }]

    }, {
        path: "*",
        component: Error
    }]
})