import React from 'react';
import type { Subject } from '../types'; // types.ts 경로가 맞는지 확인하세요
import './SubjectCard.css';

interface SubjectCardProps {
    subject: Subject;
}

// 👇 [수정 1] 인자 타입을 (number | string)으로 바꾸고, 로직 추가
function gradeToString(grade: number | string): string {
    // 만약 이미 "A+", "B0" 같은 문자열이라면 변환 없이 그대로 반환
    if (typeof grade === 'string') {
        return grade;
    }

    // 숫자라면 기존 로직대로 변환
    const map: Record<number, string> = {
        4.3: 'A+',
        4.0: 'A0',
        3.7: 'A-',
        3.3: 'B+',
        3.0: 'B0',
        2.7: 'B-',
        2.3: 'C+',
        2.0: 'C0',
        1.7: 'C-',
        1.3: 'D+',
        1.0: 'D0',
        0.0: 'F',
        5: 'P',
        0.1: 'NP',
    };
    return map[grade] ?? 'NP';
}

const SubjectCard: React.FC<SubjectCardProps> = ({ subject }) => {
    // grade 외에 다른 데이터들도 받아옴
    const { name, credit, grade, category, needsRetake } = subject;

    return (
        <div className="subject-card">
            <div className="subject-name">{name}</div>

            <div className="subject-meta">
                <span className="subject-credit-pill">{credit}학점</span>
                {/* 👇 [수정 2] 이제 gradeToString이 문자/숫자 다 처리해줍니다 */}
                <span className="subject-grade-pill">성적 {gradeToString(grade)}</span>
            </div>

            <div className="subject-extra">
                {/* 필요한 경우 여기에 추가 정보 표시 */}
            </div>

            <div className="button-container">
                <span className="compulsory-btn">{category}</span>
                {needsRetake && <span className="retake-btn">재수강 필요</span>}
            </div>
        </div>
    );
};

export default SubjectCard;