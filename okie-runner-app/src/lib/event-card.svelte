<script>
    let events = [
        {
            featured_image: '/images/events/187661.png',
            event_name: 'Race Name',
            event_start_date: '09/10/2022',
            location_city: 'Oklahoma City',
            location_state: 'OK',
            start_time: '8:00AM',
        },
    ];
</script>
<div class="card-container">
{#each events as event}
<div class="card">
    <img src={event.featured_image} alt="race+logo" aria-hidden="true">
    <div><h3>{event.event_name}</h3>
    <p>{event.location_city}, {event.location_state}</p>
    <p>{event.event_start_date}, {event.start_time}</p>
    </div>
    
</div>

{/each}
</div>
<style>
    .card-container{
        display: flex;
        flex-direction: column;
    }
    .card{
        display: flex;
    }
    img{
        width: 125px;
    }
</style>