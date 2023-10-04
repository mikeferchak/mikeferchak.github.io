<script lang="ts">
	export let title: string;
</script>

<section>
	<h2>{title}</h2>
	<slot />
</section>

<style>
	section {
		margin-bottom: var(--space-md);
	}

	h2 {
		font-size: var(--font-lg);
	}
</style>
