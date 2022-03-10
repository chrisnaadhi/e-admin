<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import '../styles/app.css';
</script>

<div class="text-base-content">
	<header>
		<Navbar />
	</header>

	<slot />

	<Footer />
</div>
