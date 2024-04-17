interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const firstStudent: Student {
  firstName: 'Omar';
  lastName: 'Jammeh';
  age: 31;
  location: 'The Gambia';
};

const secondStudent: Student {
  firstName: 'Sarata';
  lastName: 'Jammeh';
  age: 25;
  location: 'The Gambia';
};

const studentsList: Student[] = [firstStudent, secondStudent];
