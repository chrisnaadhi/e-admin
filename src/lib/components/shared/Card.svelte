<script>
    export let cardTitle;
    export let cardDescription;
</script>

<section class="card w-72 bg-base-200 text-base-content m-4 grow md:grow-0">
    <div class="card-body items-center text-center">
        <h2 class="card-title">{cardTitle}</h2>
        <p>{cardDescription}</p>
    </div>
    <div class="card-actions py-5 justify-center">
        <button class="btn btn-primary">Ajukan</button>
        <button class="btn btn-ghost">Persyaratan</button>
    </div>
</section>