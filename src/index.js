import Vue from 'vue';
import App from '@/App.vue';
import loadPlugins from '@/core/plugins';

loadPlugins.always(function () {
    new Vue({
        el: '#app-container',
        render: createElement => createElement(App),
    });
});
