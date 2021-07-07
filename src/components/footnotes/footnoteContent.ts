import { writable } from 'svelte/store'

let content: string[]= [];

export default writable(content);
