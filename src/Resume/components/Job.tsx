import InlineList from "./InlineList";
import styles from "./Job.module.css";
import SubSection from "./SubSection";

export interface JobProps {
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies: string[];
  children?: React.ReactNode;
}

function Job({
  title,
  company,
  children,
  startDate,
  endDate,
  description,
  technologies,
}: JobProps) {
  return (
    <SubSection
      title={
        <>
          <span className={styles.title}>{title}</span>
          <span> – </span>
          <span className={styles.company}>{company}</span>
          <span className={styles.date}>
            ({startDate} - {endDate ?? "Present"})
          </span>
        </>
      }
      className={styles.job}
    >
      <p>{description}</p>
      {children}
      <InlineList>
        {technologies.map((tech) => (
          <li>{tech}</li>
        ))}
      </InlineList>
    </SubSection>
  );
}

export default Job;
