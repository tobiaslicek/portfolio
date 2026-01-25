export const CvSection = ({ title, children }) => {
  // const jobs = [
  //   {
  //     icon: '🦇',
  //     title: 'Frontend Developer',
  //     period: '1.5.-4.9.2023',
  //   },
  //   {
  //     icon: '🏝️',
  //     title: 'React developer',
  //     period: '1.5.-4.9.2024',
  //   },
  // ];
  return (
    <section className="cv-section">
      <h2>{title}</h2>
      {children }
    </section>
  );
};
