import { Component } from "react";
import { InlineList } from "./components/InlineList";
import { Job } from "./components/Job";
import { Section } from "./components/Section";
import { SubSection } from "./components/SubSection";
import styles from "./index.module.css";

export class Resume extends Component {
  componentDidMount() {
    document.title = "Mike Ferchak - Resume";
  }

  render() {
    return (
      <div className={styles.resume}>
        <header>
          <h1>Mike Ferchak</h1>
          <InlineList className={styles.contact}>
            <li>
              <a href="mailto:mikeferchak@gmail.com/">mikeferchak@gmail.com</a>
            </li>
            <li>
              <a href="https://github.com/mikeferchak">
                github.com/mikeferchak
              </a>
            </li>
          </InlineList>
        </header>

        <Section title="Skills">
          <SubSection title="Languages">
            <InlineList>
              <li>TypeScript / JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Python</li>
              <li>Go</li>
              <li>C++</li>
              <li>C#</li>
            </InlineList>
          </SubSection>

          <SubSection title="Frameworks and tools">
            <InlineList>
              <li>React</li>
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
            </InlineList>
          </SubSection>
        </Section>

        <Section title="Experience">
          <Job
            title="Software Engineer"
            company="Formant"
            startDate="2019"
            endDate="2021"
            description="Developed a low-latency teleoperation interface using WebRTC"
            technologies={[
              "Typescript",
              "React",
              "Mobx",
              "Sass",
              "WebRTC",
              "WebGL",
              "Node",
              "Ros",
              "Go",
              "GStreamer",
            ]}
          >
            <InlineList className={styles["hide-print"]}>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=7nmavYUhC5I"
                  target="_blank"
                  rel="noreferrer"
                >
                  Walk with Spot Demo
                </a>
              </li>
              <li>
                <a
                  href="http://cnet.com/news/i-walked-the-boston-dynamics-spot-robot-dog-remotely-and-only-crashed-once-formant/"
                  target="_blank"
                  rel="noreferrer"
                >
                  CNet article
                </a>
              </li>
            </InlineList>
          </Job>

          <Job
            title="Co-Founder &amp; Chief Designer"
            company="Formation Robotics"
            startDate="2017"
            endDate="2019"
            description="Designed and built the frontend for our universal fleet operation platform"
            technologies={["Unreal Engine", "ROS2"]}
          >
            <InlineList className={styles["hide-print"]}>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=EdAJyepgdA8"
                  target="_blank"
                  rel="noreferrer"
                >
                  Delivery Demo
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=o38hD0c63jQ"
                  target="_blank"
                  rel="noreferrer"
                >
                  Feature overview
                </a>
              </li>
            </InlineList>
          </Job>

          <Job
            title="Level Designer"
            company="Psytec Games"
            startDate="2017"
            endDate="2018"
            description="World building for Windlands 2 - a VR grappling hook adventure game"
            technologies={["Unity", "Blender"]}
          >
            <InlineList className={styles["hide-print"]}>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=BSeIn9q1jT4"
                  target="_blank"
                  rel="noreferrer"
                >
                  Windlands Trailer
                </a>
              </li>
              <li>
                <a
                  href="https://store.steampowered.com/app/458580/Windlands_2/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Steam Store
                </a>
              </li>
            </InlineList>
          </Job>

          <Job
            title="Front End Software Developer"
            company="IBM"
            startDate="2012"
            endDate="2018"
            description="Front end development for Watson Discovery tooling - a web app for ingesting and enriching documents for search applications
            "
            technologies={[
              "Javascript",
              "JRuby",
              "React",
              "Redux",
              "Sass",
              "Rails",
            ]}
          />
        </Section>

        <Section title="Education">
          <h3>University of Pittsburgh — Information Science</h3>
        </Section>
        <Section title="Hobbies">
          <InlineList>
            <li>
              <a
                href="https://www.youtube.com/watch?v=C74Wj9NT1is"
                target="_blank"
                rel="noreferrer"
              >
                Autocross (2x national trophy winner)
              </a>
            </li>
            <li>CNC woodworking</li>
            <li>Hydroponic gardening</li>
            <li>Drone racing</li>
          </InlineList>
        </Section>
      </div>
    );
  }
}
