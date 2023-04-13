<script lang="ts">
  import { Transition } from "$lib";

  let isOpen = false;
</script>

<div class="flex h-full w-screen justify-center bg-gray-50 p-12">
  <div class="w-96 space-y-2">
    <span class="inline-flex rounded-md shadow-sm">
      <button
        type="button"
        on:click={() => (isOpen = !isOpen)}
        class="focus:shadow-outline-blue inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 transition duration-150 ease-in-out hover:text-gray-500 focus:border-blue-300 focus:outline-none active:bg-gray-50 active:text-gray-800">
        {isOpen ? "Hide" : "Show"}
      </button>
    </span>

    <Transition
      show={isOpen}
      unmount={false}
      enter="transition ease-out duration-300"
      enterFrom="transform opacity-0"
      enterTo="transform opacity-100"
      leave="transition ease-in duration-300"
      leaveFrom="transform opacity-100"
      leaveTo="transform opacity-0"
      class="rounded-md bg-white p-4 shadow">
      Contents to show and hide
    </Transition>
  </div>
</div>
