<script lang="ts">
	import DottedList from '../components/DottedList.svelte';
	import Header from '../components/Header.svelte';
	import Section from '../components/Section.svelte';
	import SubSection from '../components/SubSection.svelte';
	import Job from '../components/Job.svelte';
	import ExternalLink from '../components/ExternalLink.svelte';
</script>

<div class="content">
	<Header />

	<Section title="Skills">
		<SubSection title="Languages">
			<DottedList>
				<li>TypeScript / JavaScript</li>
				<li>HTML</li>
				<li>CSS</li>
				<li>Python</li>
				<li>Swift</li>
				<li>Go</li>
				<li>C++</li>
				<li>C#</li>
			</DottedList>
		</SubSection>

		<SubSection title="Frameworks and tools">
			<DottedList>
				<li>React</li>
				<li>Redux / Redux toolkit</li>
				<li>next.js</li>
				<li>svelte / sveltekit</li>
				<li>SwiftUI</li>
				<li>Mobx</li>
				<li>Sass</li>
				<li>Ros</li>
				<li>WebRTC</li>
				<li>WebGL</li>
				<li>Three.js</li>
				<li>Unreal Engine</li>
				<li>Unity</li>
				<li>Rails</li>
				<li>Git</li>
			</DottedList>
		</SubSection>
	</Section>

	<Section title="Experience">
		<Job
			title="Senior Software Engineer"
			company="IAM Robotics"
			startDate="2022"
			endDate="2023"
			description="Developed a fleet management front-end for warehouse robots"
			technologies={['Typescript', 'React', 'Redux', 'Redux toolkit', 'Jest', 'Cypress']}
		/>

		<Job
			title="Software Engineer"
			company="Formant"
			startDate="2019"
			endDate="2021"
			description="Developed a low-latency teleoperation interface using WebRTC"
			technologies={[
				'Typescript',
				'React',
				'Mobx',
				'Sass',
				'WebRTC',
				'Three.JS',
				'MapBox',
				'WebGL',
				'Node',
				'Ros',
				'Go',
				'GStreamer'
			]}
		>
			<DottedList hidePrint={true} slot="extra">
				<li>
					<ExternalLink href="https://www.youtube.com/watch?v=7nmavYUhC5I">
						Walk with Spot Demo
					</ExternalLink>
				</li>
				<li>
					<ExternalLink
						href="http://cnet.com/news/i-walked-the-boston-dynamics-spot-robot-dog-remotely-and-only-crashed-once-formant/"
					>
						CNet article
					</ExternalLink>
				</li>
			</DottedList>
		</Job>

		<Job
			title="Co-Founder &amp; Chief Designer"
			company="Formation Robotics"
			startDate="2017"
			endDate="2019"
			description="Designed and built the frontend for our universal fleet operation platform"
			technologies={['Unreal Engine', 'ROS2']}
		>
			<DottedList hidePrint={true} slot="extra">
				<li>
					<ExternalLink href="https://www.youtube.com/watch?v=EdAJyepgdA8">
						Delivery Demo
					</ExternalLink>
				</li>
				<li>
					<ExternalLink href="https://www.youtube.com/watch?v=o38hD0c63jQ">
						Feature overview
					</ExternalLink>
				</li>
			</DottedList>
		</Job>

		<Job
			title="Level Designer"
			company="Psytec Games"
			startDate="2017"
			endDate="2018"
			description="World building for Windlands 2 - a VR grappling hook adventure game"
			technologies={['Unity', 'Blender']}
		>
			<DottedList hidePrint={true} slot="extra">
				<li>
					<ExternalLink href="https://www.youtube.com/watch?v=BSeIn9q1jT4">
						Windlands Trailer
					</ExternalLink>
				</li>
				<li>
					<ExternalLink href="https://store.steampowered.com/app/458580/Windlands_2/">
						Steam Store
					</ExternalLink>
				</li>
			</DottedList>
		</Job>

		<Job
			title="Front End Software Developer"
			company="IBM"
			startDate="2012"
			endDate="2018"
			description="Front end development for Watson Discovery tooling - a web app for ingesting and enriching documents for search applications
            "
			technologies={['Javascript', 'JRuby', 'React', 'Redux', 'Sass', 'Rails']}
		/>
	</Section>

	<Section title="Education">
		<h3>University of Pittsburgh — Information Science</h3>
	</Section>
	<Section title="Hobbies">
		<DottedList>
			<li>
				<ExternalLink hidePrint={false} href="https://www.youtube.com/watch?v=zJpvH-G_33s">
					Autocross (2022 SSCA SSC national champion)
				</ExternalLink>
			</li>
			<li>Sim racing</li>
			<li>Climbing</li>
			<li>CNC woodworking</li>
			<li>Hydroponic gardening</li>
		</DottedList>
	</Section>
</div>

<style>
	.content {
		margin: 0 auto;
		max-width: 50rem;
		padding: var(--space-md);
	}

	@media screen and (max-width: 600px) {
		.content {
			padding: var(--space-md) var(--space-xs);
		}
	}

	@media print {
		.content {
			max-width: 100%;
		}
	}
</style>
