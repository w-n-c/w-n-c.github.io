import { writable } from 'svelte/store'

let contentContainer: string[]= [];

export const footnoteContent = writable(contentContainer)
