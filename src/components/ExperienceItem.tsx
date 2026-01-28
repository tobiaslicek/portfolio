type Experience = {
  icon: string;
  title: string;
  period: string;
};

type Props = {
  experience: Experience;
};

export const ExperienceItem = ({ experience }: Props) => {
  return (
    <li className="work-item">
      <span className="work-item-icon" aria-hidden="true">
        {experience.icon}
      </span>

      <div className="work-item-content">
        <span className="work-item-title">{experience.title}</span>
        <span className="work-item-period">{experience.period}</span>
      </div>
    </li>
  );
};
