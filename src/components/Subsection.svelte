<script lang="ts">
	export let title: string = '';
</script>

<section>
	<h3>{title}<slot name="title" /></h3>
	<slot />
</section>

<style>
	section {
		margin-bottom: var(--space-sm);
	}
</style>
