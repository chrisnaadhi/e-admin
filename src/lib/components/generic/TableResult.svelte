<script>
	import { onMount } from 'svelte';

	const endpoint = 'https://random-data-api.com/api/name/random_name?size=5';

	let dummyData = [
		{
			id: '1',
			npm: '210210160084',
			keterangan: 'Mendaftar Sidang',
			tglPengajuan: '14 Maret 2022',
			tglProses: '15 Maret 2022',
			tglSelesai: '16 Maret 2022'
		},
		{
			id: '2',
			npm: '210210160084',
			keterangan: 'Mendaftar Tugas Akhir',
			tglPengajuan: '15 Maret 2022',
			tglProses: '16 Maret 2022',
			tglSelesai: '16 Maret 2022'
		},
		{
			id: '3',
			npm: '210210160084',
			keterangan: 'Mendaftar Wisuda',
			tglPengajuan: '17 Maret 2022',
			tglProses: '18 Maret 2022',
			tglSelesai: '18 Maret 2022'
		},
		{
			id: '4',
			npm: '210210160084',
			keterangan: 'Mendaftar Kejuaraan',
			tglPengajuan: '18 Maret 2022',
			tglProses: '21 Maret 2022',
			tglSelesai: '21 Maret 2022'
		},
		{
			id: '5',
			npm: '210210160084',
			keterangan: 'Mendaftar Sidang Usulan Penelitian',
			tglPengajuan: '21 Maret 2022',
			tglProses: '21 Maret 2022',
			tglSelesai: '21 Maret 2022'
		}
	];

	let personal = [];
	onMount(async () => {
		const res = await fetch(endpoint);
		const nameList = await res.json();
		nameList.forEach((n) => {
			personal.push(n.name);
			personal = personal;
		});
		dummyData.forEach((data) => {
			data.name = personal[2];
		});
		console.log(dummyData);
	});
</script>

<div class="overflow-x-auto">
	<table class="table w-full">
		<!-- head -->
		<thead>
			<tr>
				<th>No.</th>
				<th>NPM</th>
				<th>Nama</th>
				<th>Keterangan</th>
				<th>Tgl. Pengajuan</th>
				<th>Tgl. Proses</th>
				<th>Tgl. Selesai</th>
			</tr>
		</thead>
		<tbody>
			<!-- row 1 -->
			{#each dummyData as { id, npm, nama, keterangan, tglPengajuan, tglProses, tglSelesai }}
				<tr>
					<th>{id}</th>
					<td>{npm}</td>
					<td> {nama} </td>
					<td>{keterangan}</td>
					<td>{tglPengajuan}</td>
					<td>{tglProses}</td>
					<td>{tglSelesai}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
