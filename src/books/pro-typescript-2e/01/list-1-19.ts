/**
 * Listing 1-19. Typed arrays
 */

interface IMonument {
  name: string;
  height: number;
}

const monuments: IMonument[] = [];

monuments.push({
  name: "A",
  height: 18
});

monuments.push({
  name: "B",
  height: 19
});

monuments.push({
  name: "C",
  height: 17
});

monuments.sort((a: IMonument, b: IMonument) => b.height - a.height);

const heightestMonument: IMonument = monuments[0];
console.log(JSON.stringify(heightestMonument));

export {};
