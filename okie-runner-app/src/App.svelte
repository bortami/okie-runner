<script>

    import Header from './Global Components/header.svelte';
    import Main from "./lib/main";
</script>

<header>
    <Header />
</header>
<main>
<Main />
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
