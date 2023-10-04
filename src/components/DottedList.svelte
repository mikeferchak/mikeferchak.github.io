<script lang="ts">
	export let hidePrint: boolean = false;
</script>

<ul class={hidePrint ? 'hidePrint' : ''}>
	<slot />
</ul>

<style>
	ul {
		color: var(--secondary-color);
		font-size: var(--font-sm);
		font-weight: 700;
		line-height: 200%;
		list-style: none;
		margin: 0;
		padding: 0;
		text-transform: uppercase;
	}

	ul :global(li) {
		display: inline-block;
	}

	ul :global(li):after {
		content: '\00a0•\00a0';
	}

	ul :global(li):last-child:after {
		content: '';
	}

	@media print {
		.hidePrint {
			display: none;
		}
	}
</style>
