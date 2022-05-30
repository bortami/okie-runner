<script>
    let menu = [
        { text: 'Home', url: '/' },
        { text: 'Upcoming Events', url: '/events' },
        { text: 'Results & Media', url: '/results' },
    ];
</script>

<div>
    {#each menu as nav}
        <li><a href={nav.url}>{nav.text}</a></li>
    {/each}
</div>

<style>
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    li {
        list-style-type: none;
        margin-right: 1.5em;
    }
    li a {
        font-size: 1.2rem;
    }
    @media (max-width: 640px){
        li{
            padding: 1.5rem 0.5rem;
            margin-right: 0;
        }
    }
</style>
