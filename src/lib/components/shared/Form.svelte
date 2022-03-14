<script>
	export let forForm;
	export let label;
	export let type;
	export let placeholder;
</script>

<div class="form-control">
	<label for={forForm}>
		<span class="label-text">{label}</span>
	</label>
	<input {type} {placeholder} class="input input-bordered w-full" />
</div>
