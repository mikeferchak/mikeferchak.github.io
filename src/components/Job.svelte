<script lang="ts">
	import SubSection from './SubSection.svelte';
	import DottedList from './DottedList.svelte';

	export let title: string;
	export let company: string;
	export let startDate: string;
	export let endDate: string | undefined = undefined;
	export let description: string;
	export let technologies: string[];
</script>

<SubSection>
	<svelte:fragment slot="title">
		<span class="title">{title}</span>
		<span> – </span>
		<span class="company">{company}</span>
		<span class="date">
			({startDate} - {endDate ?? 'Present'})
		</span>
	</svelte:fragment>

	<p>{description}</p>

	<DottedList>
		{#each technologies as tech}
			<li>{tech}</li>
		{/each}
	</DottedList>

	{#if $$slots.extra}
		<div class="extra">
			<slot name="extra" />
		</div>
	{/if}
</SubSection>

<style>
	.title,
	.company,
	.date {
		white-space: nowrap;
	}

	.date {
		color: var(--secondary-color);
		font-size: var(--font-sm);
		margin-left: var(--space-xxs);
	}

	.extra {
		margin-top: var(--space-xs);
	}
</style>
