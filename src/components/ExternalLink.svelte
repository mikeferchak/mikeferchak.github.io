<script lang="ts">
	export let href: string;
	export let hidePrint: boolean = true;
</script>

<a {href} class={hidePrint ? 'hide-print' : ''} target="_blank" rel="noreferrer"><slot /></a>

<style>
	a[target='_blank']::after {
		display: inline-block;
		height: var(--font-sm);
		width: var(--font-sm);
		margin: 0 0.2rem -0.1rem;
		content: '';
		background: var(--secondary-color);
		mask-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' clip-rule='evenodd' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='1.5'><path d='M11.375 5H4v15h15v-7.375M15 3h6v6M21 3l-7 7' fill='none' stroke='%23000' stroke-width='2.67'/></svg>");
	}

	@media print {
		.hide-print {
			display: none;
		}

		a[target='_blank']::after {
			display: none;
		}
	}
</style>
