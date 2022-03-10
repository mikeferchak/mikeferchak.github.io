import classnames from "classnames";
import { Component } from "react";
import styles from "./InlineList.module.css";

export interface InlineListProps {
  className?: string;
}

export class InlineList extends Component<InlineListProps> {
  render() {
    const { className, children } = this.props;
    return (
      <ul className={classnames(styles["inline-list"], className)}>
        {children}
      </ul>
    );
  }
}
