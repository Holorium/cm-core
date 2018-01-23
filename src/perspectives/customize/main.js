import ext from '@/core/extensible';
import View from '@/perspectives/customize/View.vue';

// add button to top bar
ext.queues('core/nav').add({
    id: 'customize',
    index: 10000000,
    render: function (createElement) {
        return createElement({
            template: '<li><router-link to="/customize">Customize</router-link></li>',
        });
    },
});

ext.queues('routes').add({
    id: 'customize',
    customize: function () {
        this.push({
            path: '/customize',
            component: View,
        });
    },
});

export default View;
