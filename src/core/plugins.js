import ext from '@/core/extensible';
import Vue from 'vue';

export default $.when.apply($, $('script').map(function () {
    var $this = $(this);
    if ($this.attr('type') !== 'text/core-plugin') return;
    if (!$this.attr('data-src')) return;
    if (!$this.attr('data-name')) return;
    window[$this.attr('data-name')] = function callback (module) {
        if (_.isFunction(module)) {
            module({
                ext,
                Vue,
                _,
                $,
            });
        }
    };
    return $.getScript($this.attr('data-src'));
}));
