<script>
    let featured = [{
        url: "/images/events/187661.png"
    },
    {
        url: "/images/events/187661.png"
    },
    {
        url: "/images/events/187661.png"
    }]
</script>

<div>
    {#each featured as feature}
    <img src={feature.url} alt="featured race" aria-hidden="true">
    {/each}
</div>

<style>
    div{
        display: flex;
        flex-direction: column;
    }
    img{
        width:175px;
    }
</style>