<template>
    <nav>
        <div class="nav-wrapper">
            <a href="#!" class="brand-logo">Logo</a>
            <a href="#" data-activates="mobile-nav" class="button-collapse"><i class="fa fa-bars" aria-hidden="true"></i></a>
            <ul class="right hide-on-med-and-down">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">Javascript</a></li>
                <li><a href="mobile.html">Mobile</a></li>
            </ul>
            <ul class="side-nav" id="mobile-demo">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">Javascript</a></li>
                <li><a href="mobile.html">Mobile</a></li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'core-nav',
        mounted: function () {
            $('a.button-collapse', this.$el).sideNav();
        },
    }
</script>

<style lang="scss">
    nav .button-collapse i.fa {
        font-size: 24px;
    }
</style>