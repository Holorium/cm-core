import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '@/App.vue';
import loadPlugins from '@/core/plugins';
import ext from '@/core/extensible';

import '@/perspectives/customize/main';

Vue.use(VueRouter);

loadPlugins.always(function () {
    const routes = [];
    ext.queues('routes').invoke('customize', routes);
    const router = new VueRouter({
        routes,
    });

    new Vue({
        el: '#app-container',
        render: createElement => createElement(App),
        router,
    });
});
