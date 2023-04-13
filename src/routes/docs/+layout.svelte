<script lang="ts">
  import TableOfContents from "./_TableOfContents.svelte";
  import { page } from "$app/stores";
  import Sidebar from "./_Sidebar.svelte";

  let el: HTMLElement | null = null;
</script>

<svelte:head>
  <link rel="stylesheet" href="/prism-one-light.css" />
</svelte:head>

<div class="flex">
  <div class="hidden w-52 min-w-fit flex-shrink-0 md:block">
    <div class="sticky top-0 -mt-[61px] max-h-screen overflow-y-auto pb-4 pt-20">
      <Sidebar />
    </div>
  </div>

  <article class="prose mt-5 min-w-0 max-w-3xl px-3 pb-8" bind:this={el}>
    <slot />
  </article>
  <div class="hidden w-64 flex-shrink-0 text-sm lg:block">
    <nav
      title="Table of contents"
      class="sticky top-0 -mt-[61px] max-h-screen overflow-y-auto pb-4 pt-20">
      {#key $page}
        <TableOfContents {el} rootMargin="-61px 0% -85% 0%" />
      {/key}
    </nav>
  </div>
</div>

<style lang="postcss">
  article {
    :global(h1),
    :global(h2),
    :global(h3),
    :global(h4) {
      @apply before:-mt-20 before:block before:h-20 before:content-[""];

      :global(a) {
        @apply no-underline hover:underline;
      }
    }

    :global(table) {
      @apply mt-8;
    }
  }
</style>
