<script>
	const formData = [
		{
			forForm: 'npm',
			label: 'Nomor Pokok Mahasiswa / NPM: ',
			type: 'number',
			placeholder: 'Masukkan NPM Anda'
		},
		{
			forForm: 'e-mail',
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
			type: 'text',
			placeholder: 'Masukkan Keterangan atau keperluan dari pengajuan surat ini'
		}
	];
</script>

<div class="flex flex-col items-center base-height bg-base-100 w-full text-base-content">
	<div class="w-full md:w-3/5 lg:w-2/5 text-md mb-2 items-center px-14">
		<form class="min-w-full">
			<h1 class="text-center my-12 text-4xl">Formulir Pengajuan</h1>
			{#each formData as { forForm, label, type, placeholder }}
				<div class="form-control">
					<label for={forForm}>
						<span class="label-text">{label}</span>
					</label>
					<input {type} {placeholder} class="input input-bordered w-full" />
				</div>
			{/each}
			<button type="submit" class="btn btn-primary w-full mt-5">Ajukan</button>
		</form>
	</div>
</div>

<style>
	.base-height {
		min-height: 42rem;
	}
</style>
