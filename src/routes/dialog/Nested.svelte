<script lang="ts">
  import Dialog from "$lib/components/dialog/Dialog.svelte";
  import DialogOverlay from "$lib/components/dialog/DialogOverlay.svelte";

  let showChild = false;
  export let level = 0;
</script>

<Dialog open={true} on:close class="fixed inset-0 z-10">
  <DialogOverlay class="fixed inset-0 bg-gray-500 opacity-25" />
  <div
    class="fixed left-12 top-24 z-10 w-96 transform bg-white p-4"
    style={`transform: translate(calc(50px * ${level}), calc(50px * ${level}))`}>
    <p>Level: {level}</p>
    <div class="space-x-4">
      <button class="rounded bg-gray-200 px-2 py-1" on:click={() => (showChild = true)}>
        Open (1)
      </button>
      <button class="rounded bg-gray-200 px-2 py-1" on:click={() => (showChild = true)}>
        Open (2)
      </button>
      <button class="rounded bg-gray-200 px-2 py-1" on:click={() => (showChild = true)}>
        Open (3)
      </button>
    </div>
  </div>
  {#if showChild}
    <svelte:self on:close={() => (showChild = false)} level={level + 1} />
  {/if}
</Dialog>
