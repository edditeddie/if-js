const studentsData = [
    {
        firstName: 'Василий',
        lastName: 'Петров',
        admissionYear: 2019,
        courseName: 'Java',
    },
    {
        firstName: 'Иван',
        lastName: 'Иванов',
        admissionYear: 2018,
        courseName: 'JavaScript',
    },
    {
        firstName: 'Александр',
        lastName: 'Федоров',
        admissionYear: 2017,
        courseName: 'Python',
    },
    {
        firstName: 'Николай',
        lastName: 'Петров',
        admissionYear: 2019,
        courseName: 'Android',
    },
];

export class User {
    constructor(params) {
        this.firstName = params.firstName;
        this.lastName = params.lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

class Student extends User {
    constructor(params) {
        super(params);
        this.admissionYear = params.admissionYear;
        this.courseName = params.courseName;
    }
    get course() {
        return 2022 - this.admissionYear;
    }
}

class Students {
    constructor(studentsData) {
        this.studentsData = studentsData;
    }
    getInfo() {
        const studentsArr = this.studentsData.sort((a, b) => b.admissionYear - a.admissionYear);
        const formatedCourse = studentsArr.map((item) => {
            const currentStudent = new Student(item);
            return `${currentStudent.fullName} - ${item.courseName}, ${currentStudent.course} ${'курс'}`;
        });
        return formatedCourse;
    }
}

const students = new Students(studentsData);
console.log(students.getInfo());
