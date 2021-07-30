/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			server: {
				proxy: {
					'/api': {
						target: 'http://localhost:8000',
						changeOrigin: true,
						rewrite: (path) => path.replace(/^\/api/, '')
					  },
				}
			}
		}
	}
};

export default config;
