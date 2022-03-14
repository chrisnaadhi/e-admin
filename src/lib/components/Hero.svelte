<script>
	import LoginForm from '$lib/components/generic/LoginForm.svelte';

	let logoUnpad = './static/images/logo-unpad1.png';
</script>

<div class="hero base-height pb-12 lg:pb-0 bg-base-200 text-base-content">
	<div class="hero-content mt-16 lg:mt-0 max-w-screen-lg flex flex-col lg:flex-row">
		<img class="h-32" src={logoUnpad} alt="" />
		<div class="text-center lg:text-left">
			<h1 class="text-5xl font-bold">E-Administration</h1>
			<h2 class="text-4xl font-medium">Perpustakaan Pusat</h2>
			<h2 class="text-2xl font-medium">Pusat Pengelolaan Pengetahuan</h2>
			<p class="py-6">
				Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
				quasi. In deleniti eaque aut repudiandae et a id nisi.
			</p>
		</div>
		<LoginForm />
	</div>
</div>
