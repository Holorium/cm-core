<template>
    <nav>
        <div class="nav-wrapper">
            <a href="#!" class="brand-logo">Logo</a>
            <a href="#" data-activates="mobile-nav" class="button-collapse"><i class="fa fa-bars" aria-hidden="true"></i></a>
            <extensible data-tagname="ul" data-id="core/nav" class="right hide-on-med-and-down">
            </extensible>
            <extensible data-tagname="ul" data-id="core/nav" class="side-nav" id="mobile-nav">
            </extensible>
        </div>
    </nav>
</template>

<script>
    import ext from './core/extensible';

    ext.queues('core/nav').add({
        id: 'first-list',
        index: 100,
        render: function (createElement) {
            return createElement('li', [createElement('a', { attrs: { href: '#' } }, 'A link')]);
        }
    });

    export default {
        name: 'core-nav',
        mounted: function () {
            $('a.button-collapse', this.$el).sideNav();
        },
        components: {
            Extensible: ext.View
        }
    }
</script>

<style lang="scss">
    nav .button-collapse i.fa {
        font-size: 24px;
    }
</style>