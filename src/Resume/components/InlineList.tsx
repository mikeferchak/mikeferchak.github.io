import classnames from "classnames";
import styles from "./InlineList.module.css";

export interface InlineListProps {
  className?: string;
  children: React.ReactNode;
}

function InlineList({ className, children }: InlineListProps) {
  return (
    <ul className={classnames(styles["inline-list"], className)}>{children}</ul>
  );
}

export default InlineList;
