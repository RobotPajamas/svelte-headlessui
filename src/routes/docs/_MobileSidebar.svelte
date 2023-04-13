<script lang="ts">
  import { Dialog, DialogOverlay, Transition, TransitionChild } from "$lib";
  import { XCircleIcon } from "@robotpajamas/svelte-heroicons/outline";
  import Sidebar from "./_Sidebar.svelte";
  export let sidebarOpen = false;
</script>

<Transition show={sidebarOpen}>
  <Dialog class="fixed inset-0 z-40 flex md:hidden" on:close={() => (sidebarOpen = false)}>
    <TransitionChild
      enter="transition-opacity ease-linear duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity ease-linear duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0">
      <DialogOverlay class="absolute inset-0 bg-gray-600 bg-opacity-75" />
    </TransitionChild>
    <TransitionChild
      enter="transition ease-in-out duration-300 transform"
      enterFrom="-translate-x-full"
      enterTo="translate-x-0"
      leave="transition ease-in-out duration-300 transform"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-full">
      <div class="relative flex h-full w-full max-w-xs flex-1 flex-col bg-white">
        <TransitionChild
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div class="absolute right-0 top-0 -mr-12 pt-2">
            <button
              type="button"
              class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              on:click={() => (sidebarOpen = false)}>
              <span class="sr-only">Close sidebar</span>
              <XCircleIcon class="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </TransitionChild>
        <div class="mt-5 h-0 flex-1 overflow-y-auto">
          <Sidebar />
        </div>
      </div>
    </TransitionChild>
    <div class="w-14 flex-shrink-0" aria-hidden="true">
      <!-- Dummy element to force sidebar to shrink to fit close icon -->
    </div>
  </Dialog>
</Transition>
