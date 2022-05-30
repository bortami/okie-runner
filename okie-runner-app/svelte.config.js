/** @type {import('@sveltejs/kit').Config} */

import adapter from '@sveltejs/adapter-node';

const config = {
  // options passed to svelte.compile (https://svelte.dev/docs#compile-time-svelte-compile)
  compilerOptions: {},

  // an array of file extensions that should be treated as Svelte components
  extensions: ['.svelte'],

  kit: {
    adapter: adapter(),
    browser: {
      hydrate: true,
      router: true
    },
   files: {
      routes: 'src/routes',
      template: 'src/app.html'
    },
    vite: () => ({})
  },

  // SvelteKit uses vite-plugin-svelte. Its options can be provided directly here.
  // See the available options at https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/config.md

  // options passed to svelte.preprocess (https://svelte.dev/docs#compile-time-svelte-preprocess)
  preprocess: null
};

export default config;