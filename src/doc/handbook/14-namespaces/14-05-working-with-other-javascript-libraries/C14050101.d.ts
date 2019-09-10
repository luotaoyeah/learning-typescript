declare namespace jQuery {
  export function ajax(): Promise<any>;
}

declare let $: typeof jQuery;
