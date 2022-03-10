<script>
	import { onMount } from 'svelte';

	let date = new Date();
	const year = date.getFullYear();
	$: tanggal = Intl.DateTimeFormat('id-ID', { dateStyle: 'full', timeStyle: 'long' }).format(date);

	onMount(() => {
		setInterval(() => {
			date = new Date();
		}, 1000);
	});
</script>

<footer class="footer bg-primary flex items-center justify-center text-primary-content">
	<div class="flex flex-col items-center">
		<div class="pt-2 text-xl font-bold">{tanggal}</div>
		<div class="pb-2 font-semibold">
			&copy; {year} Perpustakaan Pusat | Developed by Chrisna
		</div>
	</div>
</footer>
