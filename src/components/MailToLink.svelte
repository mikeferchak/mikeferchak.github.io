<script lang="ts">
	export let href: string;
</script>

<a href={`mailto:${href}`}><slot /></a>
