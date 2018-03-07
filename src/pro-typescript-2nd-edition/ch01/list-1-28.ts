/**
 * Listing 1-28. Custom Type Guard
 */

interface IStudent {
  score: number;
}

interface ITeacher {
  students: IStudent[];
}

function isStudent(person: IStudent | any): person is IStudent {
  return !!person.score;
}

function customTypeGuardExample(person: IStudent | ITeacher) {
  /*
    /!* TS2339: Property 'score' does not exist on type 'IStudent | ITeacher'.  *!/
    console.log(person.score); // tslint:disable-line
  */

  if (isStudent(person)) {
    console.log(person.score); // tslint:disable-line
  } else {
    console.log(person.students); // tslint:disable-line
  }
}

export {};
