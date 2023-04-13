<script lang="ts">
  import { Transition } from "$lib";
  import Box from "./_Box.svelte";

  let isOpen = false;
</script>

<div class="flex h-full w-screen justify-center bg-gray-50 p-12">
  <div class="w-96 space-y-2">
    <span class="inline-flex rounded-md shadow-sm">
      <button
        type="button"
        on:click={() => (isOpen = !isOpen)}
        class="duration-150-out focus:shadow-outline-blue inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 transition hover:text-gray-500 focus:border-blue-300 focus:outline-none active:bg-gray-50 active:text-gray-800">
        {isOpen ? "Hide" : "Show"}
      </button>
    </span>

    <Transition show={isOpen} unmount={false}>
      <Box>
        <Box>
          <Box>
            <Box />
          </Box>
          <Box>
            <Box>
              <Box>
                <Box />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Transition>
  </div>
</div>
