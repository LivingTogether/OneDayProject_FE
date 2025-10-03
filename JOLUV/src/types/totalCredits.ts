export interface graduacteCradits{
    // interface는 export가 가능하고, 선언 병합이 가능해 자동으로 합쳐짐
    totalCredits: number; // 총 졸업 학점
    completedCredits : number; // 이수한 학점
}

export interface eachCredits{
    MajorCredits : number; // 전공 학점
    CultureCredits : number; // 교양 학점
}