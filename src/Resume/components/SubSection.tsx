import classnames from "classnames";
import { Component, ReactNode } from "react";
import styles from "./SubSection.module.css";

export interface SubSectionProps {
  title: ReactNode | string;
  className?: string;
}

export class SubSection extends Component<SubSectionProps> {
  render() {
    const { title, className, children } = this.props;
    return (
      <section className={classnames(styles["sub-section"], className)}>
        <h3>{title}</h3>
        {children}
      </section>
    );
  }
}
