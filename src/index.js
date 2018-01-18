// need to load them here. Otherwise, $.fn is not extended by materialize plugins
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

import Vue from 'vue';
import App from './App.vue';

new Vue({
    el: '#app-container',
    render: createElement => createElement(App),
});
