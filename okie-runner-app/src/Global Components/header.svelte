<script>
    import Logo from './global-logo.svelte';
    import Navigation from './navigation.svelte';
</script>

<div class="container">
    <Logo />
    <Navigation />
</div>

<style>
    div {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
    }
    @media (max-width: 640px){
        div{
            flex-wrap: wrap;
            justify-content: center;
        }
    }
</style>
