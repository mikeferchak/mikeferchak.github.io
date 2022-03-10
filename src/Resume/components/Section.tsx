import { Component } from "react";
import styles from "./Section.module.css";
export interface SectionProps {
  title: string;
}

export class Section extends Component<SectionProps> {
  render() {
    const { title, children } = this.props;
    return (
      <section className={styles.section}>
        <h2>{title}</h2>
        {children}
      </section>
    );
  }
}
