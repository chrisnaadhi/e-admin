<script>
    import Card from "$lib/components/shared/Card.svelte";
import { validate_each_argument } from "svelte/internal";
let cardList = [
		{ jenis: 'Surat 1', deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptatibus quas explicabo, ut vero earum sequi adipisci veniam quidem iure.' },
		{ jenis: 'Surat 2', deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptatibus quas explicabo, ut vero earum sequi adipisci veniam quidem iure.' },
		{ jenis: 'Surat 3', deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptatibus quas explicabo, ut vero earum sequi adipisci veniam quidem iure.' },
        { jenis: 'Surat 4', deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptatibus quas explicabo, ut vero earum sequi adipisci veniam quidem iure.' },
        { jenis: 'Surat 5', deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptatibus quas explicabo, ut vero earum sequi adipisci veniam quidem iure.' },
        { jenis: 'Surat 6', deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptatibus quas explicabo, ut vero earum sequi adipisci veniam quidem iure.' },
	];
</script>

<section class="flex flex-col items-center justify-center bg-base-100 w-full">
    <div class="text-base-content max-w-screen-lg">
        <h1 class="text-4xl py-8 font-semibold text-center">Pengajuan Surat</h1>
        <div class="divider mx-3">
            Pilih
        </div>
        <div class="mt-2 flex items-center justify-center flex-wrap mb-5">
            {#each cardList as { jenis, deskripsi } }
                <Card cardTitle={jenis} cardDescription={deskripsi}></Card>    
            {/each}
        </div>
    </div>
</section>