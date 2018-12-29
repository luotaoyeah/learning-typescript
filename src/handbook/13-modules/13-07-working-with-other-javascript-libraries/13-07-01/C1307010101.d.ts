declare module "foo" {
  export const c: string;
  export function f(): void;
  export class C {
    c: string;
  }
  export interface I {
    i: number;
  }
  export type T = "T";

  export default function(): string;
}
