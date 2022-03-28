<script lang="ts">
	export let main: boolean;
	export let properties: string;
</script>

<button class="btn btn-{main ? 'primary' : 'secondary'} w-full my-5 {properties}">
	<slot />
</button>

<style>
</style>
