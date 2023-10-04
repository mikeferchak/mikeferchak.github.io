<script>
	import DottedList from './DottedList.svelte';
	import ExternalLink from './ExternalLink.svelte';
	import MailToLink from './MailToLink.svelte';
</script>

<header>
	<h1>Mike Ferchak</h1>

	<DottedList>
		<li><MailToLink href="mikeferchak@gmail.com">mikeferchak@gmail.com</MailToLink></li>
		<li>
			<ExternalLink hidePrint={false} href="https://github.com/mikeferchak"
				>github.com/mikeferchak</ExternalLink
			>
		</li>
	</DottedList>
</header>

<style>
	header {
		margin-bottom: var(--space-md);
	}
</style>
