<script>
	import NavStart from '$lib/components/generic/NavStart.svelte';
	import NavCenter from '$lib/components/generic/NavCenter.svelte';
	import NavEnd from './generic/NavEnd.svelte';
</script>

<div
	class="fixed top-0 z-50 w-full text-base-content bg-base-100 shadow-xl flex items-center justify-center"
>
	<div class="navbar mx-auto max-w-screen-lg">
		<NavStart />
		<NavCenter />
		<NavEnd />
	</div>
</div>
