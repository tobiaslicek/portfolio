export const ExperienceItem = ({ icon, title, period }: Props) => {
  return (
    <li className="work-item">
      <span className="work-item-icon" aria-hidden="true">
        {icon}
      </span>

      <div className="work-item-content">
        <span className="work-item-title">{title}</span>
        <span className="work-item-period">{period}</span>
      </div>
    </li>
  );
};
