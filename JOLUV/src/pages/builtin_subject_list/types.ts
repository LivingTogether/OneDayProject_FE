// src/pages/builtin_subject_list/types.ts (파일을 열어서 수정)

export interface Subject {
    id: number;
    name: string;
    credit: number;
    // 👇 grade를 숫자만 받던 것에서 -> 문자열도 받을 수 있게 변경!
    grade: number | string;
    // 👇 score가 없다면 추가해줍니다 (정렬용)
    score?: number;
    category: string;
    needsRetake: boolean;
    year: number;
    semester: string;
}