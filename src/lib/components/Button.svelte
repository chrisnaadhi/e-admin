<script>
	export let main;
</script>

<button class={main ? 'main' : 'secondary'}>
	<slot />
</button>

<style>
</style>
