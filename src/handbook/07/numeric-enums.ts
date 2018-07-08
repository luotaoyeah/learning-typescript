enum DemoEnum {
  A = "a",
  B = "b"
}

console.log(Object.keys(DemoEnum).map(item => DemoEnum[item]));
