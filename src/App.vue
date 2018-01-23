<template>
    <div>
        <core-nav></core-nav>
        <router-view></router-view>
    </div>
</template>

<script>
    import CoreNav from '@/Nav.vue';

    export default {
        name: 'app',
        components: {
            CoreNav: CoreNav
        }
    }
</script>