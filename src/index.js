/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

// export default {
// 	async fetch(request, env, ctx) {
// 		return new Response('Hello World!');
// 	},
// };


// addEventListener('fetch', event => {
// 	const resposne = new Response(HTML_STRING, {
// 		headers: {
// 			'Content-Type': 'text/html'
// 		}
// 	});

// 	event.responseWith(resposne)
// })

const HTML_STRING = `<!doctype HTML>
			<html>
				<body>
					<h1>1. created a new cloudflare worker</h1>
				
					<p><b> yarn create cloudflare my-first-worker</b></p>
								
					<h3>2. Now, you have a new project set up. Move into that project folder.</h3>
					<p><b> cd my-first-worker</b></p>
					<h4>3. After you have created your first Worker, run the wrangler dev command in the project directory to start a local server for developing your Worker</h4/>
				    <p> <b>npx wrangler dev</b></p>
				    <h3>4. Deploy your project.</h3>
					<p><b>npx wrangler deploy</b></p>
				
				</body>
			</html>`

export default {
	async fetch(request, env, ctx) {

		const resposne = new Response(HTML_STRING, {
			headers: {
				'Content-Type': 'text/html'
			}
		})
		return resposne

	}
}