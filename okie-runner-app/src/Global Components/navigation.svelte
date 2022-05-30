<script>
    let menu = [
        { text: 'Upcoming Events', url: '/' },
        { text: 'Results & Media', url: '/results' },
        { text: "Director's Corner", url: '/blog' }
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
        word-break: normal;
    }
    @media (max-width: 640px){
        li{
            padding: 1.5rem 0.5rem;
            margin-right: 0;
        }
    }
</style>
