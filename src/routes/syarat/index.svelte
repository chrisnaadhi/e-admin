<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/syarat.json');
		const { suratList } = await res.json();

		if (res.ok) {
			return {
				props: {
					suratList
				}
			};
		}

		return {
			status: res.status,
			error: new Error('Could not fetch the list of surat')
		};
	}
</script>

<script>
	import Card from '$lib/components/shared/Card.svelte';
	export let suratList;
</script>

<section class="flex flex-col items-center justify-center bg-base-100 w-full">
	<div class="text-base-content max-w-screen-lg">
		<h1 class="text-4xl py-8 font-semibold text-center">Persyaratan Surat</h1>
		<div class="divider mx-3">Pilih</div>
		<div class="mt-2 flex items-center justify-center flex-wrap mb-5">
			{#each suratList as { id, jenis, deskripsi }}
				<Card
					suratID={`/pengajuan/${id}`}
					persyaratan={`/syarat/${id}`}
					cardTitle={jenis}
					cardDescription={deskripsi}
				/>
			{/each}
		</div>
	</div>
</section>
