<script lang="ts">
  import Dialog from "$lib/components/dialog/Dialog.svelte";
  import DialogOverlay from "$lib/components/dialog/DialogOverlay.svelte";

  export let level = 1;
  let showChild = false;
</script>

<Dialog open={true} on:close>
  <DialogOverlay />

  <div>
    <p>Level: {level}</p>
    <button on:click={() => (showChild = true)}>Open {level + 1} a</button>
    <button on:click={() => (showChild = true)}>Open {level + 1} b</button>
    <button on:click={() => (showChild = true)}>Open {level + 1} c</button>
  </div>
  {#if showChild}
    <svelte:self on:close={() => (showChild = false)} level={level + 1} />}
  {/if}
</Dialog>
