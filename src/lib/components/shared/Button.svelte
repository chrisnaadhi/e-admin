<script>
	export let main;
	export let properties;
</script>

<button class="btn btn-{main ? 'primary' : 'secondary'} w-full my-5 {properties}">
	<slot />
</button>

<style>
</style>
