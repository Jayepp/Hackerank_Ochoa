function gradingStudents(grades) {
    let result = [];
    for (let i = 0; i < grades.length; i++) {
        let grade = grades[i];
        if (grade >= 38) {
            let nextMultipleOf5 = Math.ceil(grade / 5) * 5;
            if (nextMultipleOf5 - grade < 3) {
                grade = nextMultipleOf5;
            }
        }
        result.push(grade);
    }
    return result;
}