<script lang="ts">
  import {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverOverlay,
    PopoverPanel,
    Transition,
  } from "$lib";
  import Portal from "$lib/components/portal/Portal.svelte";

  import { createPopperActions } from "svelte-popperjs";
  import Button from "./_Button.svelte";
  import Link from "./_Link.svelte";

  let options = {
    placement: "bottom-start",
    strategy: "fixed",
    modifiers: [],
  };

  const [popperRef1, popperContent1] = createPopperActions();
  const [popperRef2, popperContent2] = createPopperActions();

  let links = ["First", "Second", "Third", "Fourth"];
</script>

<div class="flex items-center justify-center space-x-12 p-12">
  <button>Previous</button>

  <PopoverGroup as="nav" aria-label="Mythical University" class="flex space-x-3">
    <Popover as="div" class="relative">
      <Transition
        enter="ease-out duration-300 fixed z-20"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-300 fixed z-20"
        leaveFrom="opacity-100"
        leaveTo="opacity-0">
        <PopoverOverlay
          class="fixed inset-0 z-20 transform bg-gray-500 bg-opacity-75 transition-opacity" />
      </Transition>

      <PopoverButton
        class="relative z-30 border-2 border-transparent bg-gray-300 px-3 py-2 focus:border-blue-900 focus:outline-none">
        Normal
      </PopoverButton>
      <PopoverPanel class="absolute z-30 flex w-64 flex-col border-2 border-blue-900 bg-gray-100">
        {#each links as link, i (link)}
          <Link key={link} hidden={i === 2 || undefined}>
            Normal - {link}
          </Link>
        {/each}
      </PopoverPanel>
    </Popover>

    <Popover as="div" class="relative">
      <Button>Focus</Button>
      <PopoverPanel focus class="absolute flex w-64 flex-col border-2 border-blue-900 bg-gray-100">
        {#each links as link (link)}
          <Link key={link}>Focus - {link}</Link>
        {/each}
      </PopoverPanel>
    </Popover>

    <Popover as="div" class="relative">
      <Button use={[popperRef1]}>Portal</Button>
      <Portal>
        <PopoverPanel
          use={[[popperContent1, options]]}
          class="flex w-64 flex-col border-2 border-blue-900 bg-gray-100">
          {#each links as link (link)}
            <Link key={link}>Portal - {link}</Link>
          {/each}
        </PopoverPanel>
      </Portal>
    </Popover>

    <Popover as="div" class="relative">
      <Button use={[popperRef2]}>Focus in Portal</Button>
      <Portal>
        <PopoverPanel
          use={[[popperContent2, options]]}
          focus
          class="flex w-64 flex-col border-2 border-blue-900 bg-gray-100">
          {#each links as link (link)}
            <Link key={link}>Focus in Portal - {link}</Link>
          {/each}
        </PopoverPanel>
      </Portal>
    </Popover>
  </PopoverGroup>

  <button>Next</button>
</div>
