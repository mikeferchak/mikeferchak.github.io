import classnames from "classnames";
import styles from "./SubSection.module.css";

export interface SubSectionProps {
  title: React.ReactNode | string;
  className?: string;
  children?: React.ReactNode;
}

function SubSection({ title, className, children }: SubSectionProps) {
  return (
    <section className={classnames(styles["sub-section"], className)}>
      <h3>{title}</h3>
      {children}
    </section>
  );
}

export default SubSection;
