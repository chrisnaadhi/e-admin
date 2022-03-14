<script>
	import Form from '$lib/components/shared/Form.svelte';
	import Button from '$lib/components/shared/Button.svelte';
	import Card from '$lib/components/shared/Card.svelte';
	import Error from '../__error.svelte';

	const formData = [
		{
			forForm: 'npm',
			label: 'Nomor Pokok Mahasiswa / NPM: ',
			type: 'number',
			placeholder: 'Masukkan NPM Anda'
		},
		{
			forForm: 'email',
			label: 'Alamat E-Mail: ',
			type: 'email',
			placeholder: 'Masukkan Alamat E-Mail Anda untuk pengiriman Surat'
		},
		{
			forForm: 'nama-lengkap',
			label: 'Nama Lengkap: ',
			type: 'text',
			placeholder: 'Masukkan Nama Lengkap untuk Surat'
		},
		{
			forForm: 'keterangan',
			label: 'Keterangan',
			type: 'textbox',
			placeholder: 'Masukkan Keterangan atau keperluan dari pengajuan surat ini'
		}
	];
</script>

<div class="flex flex-col items-center base-height bg-base-100 w-full text-base-content">
	<div class="w-full md:w-3/5 lg:w-2/5 text-md mb-2 items-center px-14">
		<form class="min-w-full">
			<h1 class="text-center my-12 text-4xl">Formulir Pengajuan</h1>
			{#each formData as dataHold}
				<Form {...dataHold} />
			{/each}
			<Button main={true}>Ajukan</Button>
		</form>
	</div>
</div>

<style>
	.base-height {
		min-height: 42rem;
	}
</style>
