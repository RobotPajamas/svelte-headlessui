<script lang="ts">
  import { Transition } from "$lib";

  let open = false;
</script>

<svelte:head>
  <title>Transition Component - Playground</title>
</svelte:head>

<div class="flex h-full w-screen justify-center bg-gray-50 p-12">
  <div class="relative inline-block text-left">
    <div>
      <span class="rounded-md shadow-sm">
        <button
          type="button"
          class="focus:shadow-outline-blue inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out hover:text-gray-500 focus:border-blue-300 focus:outline-none active:bg-gray-50 active:text-gray-800"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded={open || undefined}
          on:click={() => (open = !open)}>
          Options
          <svg class="-mr-1 ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd" />
          </svg>
        </button>
      </span>
    </div>

    <Transition
      show={open}
      enter="transition ease-out duration-75"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-150"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
      class="absolute right-0 mt-2 w-56 origin-top-right rounded-md shadow-lg">
      <div class="shadow-xs rounded-md bg-white">
        <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <a
            href="/"
            class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
            role="menuitem">
            Account settings
          </a>
          <a
            href="/"
            class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
            role="menuitem">
            Support
          </a>
          <a
            href="/"
            class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
            role="menuitem">
            License
          </a>
          <form method="POST" action="#">
            <button
              type="submit"
              class="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
              role="menuitem">
              Sign out
            </button>
          </form>
        </div>
      </div>
    </Transition>
  </div>
</div>
