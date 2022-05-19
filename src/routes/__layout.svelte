<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import '../styles/app.css';
</script>

<svelte:head>
	<title>E-Administration | Perpustakaan Pusat UNPAD</title>
</svelte:head>

<div class="text-base-content">
	<header>
		<Navbar />
	</header>

	<div class="h-screen flex justify-center">
		<slot />
	</div>

	<Footer />
</div>
