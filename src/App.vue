<template>
    <core-nav></core-nav>
</template>

<script>
    import CoreNav from './Nav.vue';

    export default {
        name: 'app',
        data () {
            return {
                message: 'Hello vue!'
            };
        },
        components: {
            CoreNav: CoreNav
        }
    }
</script>