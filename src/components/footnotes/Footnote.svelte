<!--
Assertions:
  - Footnote order is fixed
  - Foontes are not dynamically added/removed
    - exception: new footnotes may be added to the tail
-->
<script context="module" lang="ts">
  let total: number = 0
</script>
<script lang="ts">
  import { onMount } from 'svelte'

  let index: number

  onMount(() -> {
    index = total
    total++
  })

</script>

<a id="footnote-ref-{index}" title="link to footnote" href="footnote-{index}">{index + 1}</a>
