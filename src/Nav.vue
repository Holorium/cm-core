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
    import ext from '@/core/extensible';

    ext.queues('core/nav').add({
        id: 'first-link',
        index: 100,
        render: function (createElement) {
            return createElement('li', [createElement('a', {
                attrs: { href: '#' },
                on: {
                    click: function () {
                        console.log('Clicked on first link');
                    },
                }
            }, 'First link')]);
        }
    });

    ext.queues('core/nav').add({
        id: 'same-link',
        index: 200,
        render: function (createElement) {
            return createElement({
                template: '<li><a v-on:click="onClick" ref="#">Same link</a></li>',
                methods: {
                    onClick: function () {
                        console.log('Clicked on the same link');
                    },
                },
            });
        }
    });

    ext.queues('core/nav').add({
        id: 'customize',
        index: 10000000,
        render: function (createElement) {
            return createElement({
                template: '<li><router-link to="/customize">Customize</router-link></li>'
            });
        }
    });

    export default {
        name: 'core-nav',
        mounted: function () {
            $('a.button-collapse', this.$el).sideNav();
        },
        components: {
            Extensible: ext.View
        },
        methods: {
  }
    }
</script>

<style lang="scss">
    nav {
        a.button-collapse i.fa {
            font-size: 24px;
        }.fa-cog {
            line-height: 38px;
        }
    }
</style>