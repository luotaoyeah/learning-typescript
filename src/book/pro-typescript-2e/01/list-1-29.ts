/**
 * Listing 1-29. Discriminated union
 */

interface IStudent {
  kind: "student";
  score: number;
}

interface ITeacher {
  kind: "teacher";
  age: number;
}

type Person = IStudent | ITeacher;

function discriminatedUnionExample(person: Person): number {
  /* type guard */
  switch (person.kind) {
    case "student":
      return person.score;
    case "teacher":
      return person.age;
    default:
      assertNever(person);
      break;
  }

  return -1;
}

function assertNever(arg: never): never {
  throw new Error(`Unhandled type: ${arg}`);
}

discriminatedUnionExample({
  kind: "student",
  score: 99
});

export {};
