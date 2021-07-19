<script lang="ts">
  import { onMount, onDestroy } from 'svelte'
  import { footnoteContent } from './footnoteContent.ts'
  let footnotes:string[]
  let path:string

  onMount(() => path = window.location.origin + window.location.pathname)

  const unsubscribe = footnoteContent.subscribe(value => footnotes = value)

  onDestroy(unsubscribe);
</script>
<style>
  .footnote > :global(*) {
    display: inline;
  }
</style>

<section class="footnotes-display">
  <ol>
    {#each footnotes as footnote, index}
      <li class="footnote" id="footnote-{index}">
        {@html footnote}
        <sup><a title="return to text" href="{path}#footnote-ref-{index}">&#8617;</a></sup>
      </li>
    {/each}
  </ol>
</section>
