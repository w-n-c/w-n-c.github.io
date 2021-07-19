<!--
Assertions:
  - Footnote order is fixed
  - Footnotes are not dynamically added/removed (except by adding to the tail)
-->
<script lang="ts" context="module">
  import { footnoteContent } from './footnoteContent.ts'

  let total: number = 0
</script>

<script lang="ts">
  import { onMount, onDestroy } from 'svelte'

  export let content: string
  let index: number
  let path: string

  onMount(() => {
    index = total
    footnoteContent.update(otherFootnotes => [...otherFootnotes, content])
    total++
    path = window.location.origin + window.location.pathname
  })

  onDestroy(() => {
    footnoteContent.update(allFootnotes => {
      total = 0
      return []
    })
  })
</script>

<sup>
  <a id="footnote-ref-{index}" title="link to footnote" href="{path}#footnote-{index}">
    {index + 1}
  </a>
</sup>
