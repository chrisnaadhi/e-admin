<script>
	import TableResult from '$lib/components/generic/TableResult.svelte';
</script>

<section class="pt-4 flex flex-col md:items-center bg-base-100 w-full">
	<div class="base-height pb-12 lg:pb-0 max-w-screen-lg bg-base-100 text-base-content">
		<h1 class="text-4xl text-center pb-4 font-semibold">Status Pengajuan Surat</h1>
		<TableResult />
		<div class="pt-12 btn-group flex items-center justify-center">
			<button class="btn btn-primary">«</button>
			<button class="btn btn-secondary">Page 1</button>
			<button class="btn btn-primary">»</button>
		</div>
	</div>
</section>
