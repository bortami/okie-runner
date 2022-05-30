<script>
    export let name;
    import Header from './Global Components/header.svelte';
</script>

<header>
    <Header />
</header>
<main>
    <h1>Hello {name}!</h1>
    <p>
        Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
        how to build Svelte apps.
    </p>
</main>

<style>
	header{
		border-bottom: 5px solid #155263;
	}
    main {
        text-align: center;
        padding: 1em;
        margin: 0 auto;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
