import Vue from 'vue';
import Queue from '@/core/queue';

const View = Vue.component('extensible', {
    render: function (createElement) {
        const attrs = this.$attrs || {};
        const tagName = attrs['data-tagname'] || 'div';
        const id = attrs['data-id'] || '';
        return createElement(tagName, queues(id).invoke('render', this, createElement));
    },
});

const queues = (function () {
    var hash = {};
    return function (id) {
        return hash[id] || (hash[id] = new Queue());
    };
}());

export default {

    View,

    queues,

};
