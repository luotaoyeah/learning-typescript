/**
 * Listing 1-28. Custom Type Guard
 */

interface IStudent {
  score: number;
}

interface ITeacher {
  students: Array<IStudent>;
}

function isStudent(person: IStudent | any): person is IStudent {
  return !!person.score;
}

function customTypeGuardExample(person: IStudent | ITeacher) {
  /*
    /!* TS2339: Property 'score' does not exist on type 'IStudent | ITeacher'.  *!/
    console.log(person.score);
  */

  if (isStudent(person)) {
    console.log(person.score);
  } else {
    console.log(person.students);
  }
}

export {};
