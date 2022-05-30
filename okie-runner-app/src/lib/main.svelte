<script>
    import Events from "./event-card.svelte";
    import Featured from "./featured.svelte"
</script>

<div>
    
    <section>
        <h1>Upcoming Events</h1>
<Events />
    </section>
    <aside>
        <h2>Featured Events</h2>
<Featured />
    </aside>
</div>

<style>
    section{
        width: 100%;
    }
    aside{
        display: none;
    }
@media(min-width:641px){
    div{
        display: flex;
    }
    section{
        width: 70%;
    }
    aside{
        display: block;
        position: sticky;
        width: 29%;
    }
}
</style>