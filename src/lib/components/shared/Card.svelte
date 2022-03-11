<script>
    export let cardTitle;
    export let cardDescription;
</script>

<section class="card w-1/3 bg-primary text-primary-content">
    <div class="card-body items-center text-center">
        <h2 class="card-title">{cardTitle}</h2>
        <p>{cardDescription}</p>
    </div>
    <div class="card-actions justify-end">
        <button class="btn btn-primary">Ajukan</button>
        <button class="btn btn-ghost">Persyaratan</button>
    </div>
</section>