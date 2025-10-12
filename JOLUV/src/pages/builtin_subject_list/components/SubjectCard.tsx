import React from 'react';
import type { Subject } from '../types';
import './SubjectCard.css';

interface SubjectCardProps {
  subject: Subject;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ subject }) => {
  const { name, credit, grade, isCompulsory, needsRetake } = subject;

  return (
    <div className="subject-card">
      <div className="subject-name">{name}</div>
      <div className="subject-info">
        {credit}학점/{grade}
      </div>
      
      <div className="button-container">
        {isCompulsory && (
          <p className="compulsory-btn">전공필수</p>
        )}
        {needsRetake && (
          <p className="retake-btn">재수강 필요</p>
        )}
      </div>
    </div>
  );
};

export default SubjectCard;