import type { ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
};

export const CvSection = ({ title, children }: Props) => {
  return (
    <section className="cv-section">
      <h2>{title}</h2>
      <ul>{children}</ul>
    </section>
  );
};
