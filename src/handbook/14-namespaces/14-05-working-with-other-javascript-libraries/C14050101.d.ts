declare namespace jQuery {
  export function ajax(): Promise<any>;
}

declare var $: typeof jQuery;
