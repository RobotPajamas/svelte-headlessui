<script lang="ts">
  import Nested from "./Nested.svelte";
  import {
    Dialog,
    DialogOverlay,
    DialogTitle,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Transition,
    TransitionChild,
  } from "$lib";
  import { createPopperActions } from "svelte-popperjs";
  import Portal from "$lib/components/portal/Portal.svelte";

  const [popperRef, popperContent] = createPopperActions();
  const popperOptions = {
    placement: "bottom-end",
    strategy: "fixed",
    modifiers: [{ name: "offset", options: { offset: [0, 10] } }],
  };

  function classNames(...classes: (string | false | null | undefined)[]) {
    return classes.filter(Boolean).join(" ");
  }

  function resolveClass({ active, disabled }: { active: boolean; disabled: boolean }) {
    return classNames(
      "flex justify-between w-full px-4 py-2 text-sm leading-5 text-left",
      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
      disabled && "cursor-not-allowed opacity-50"
    );
  }

  let isOpen = false;
  let nested = false;
</script>

<button
  type="button"
  on:click={() => (isOpen = !isOpen)}
  class="focus:shadow-outline-blue m-12 rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium leading-6 text-gray-700 shadow-sm transition duration-150 ease-in-out hover:text-gray-500 focus:border-blue-300 focus:outline-none sm:text-sm sm:leading-5">
  Toggle!
</button>

<button on:click={() => (nested = true)}>Show nested</button>
{#if nested}
  <Nested on:close={() => (nested = false)} />
{/if}
<Transition show={isOpen} on:afterLeave={() => console.log("done")}>
  <Dialog on:close={() => (isOpen = false)}>
    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div
        class="flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-75"
          leave="ease-in duration-200"
          leaveFrom="opacity-75"
          leaveTo="opacity-0"
          entered="opacity-75">
          <DialogOverlay class="fixed inset-0 bg-gray-500 transition-opacity" />
        </TransitionChild>

        <TransitionChild
          enter="ease-out transform duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in transform duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <!-- This element is to trick the browser into centering the modal contents. -->
          <span class="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">
            &#8203;
          </span>
          <div
            class="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div
                  class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <!-- Heroicon name: exclamation -->
                  <svg
                    class="h-6 w-6 text-red-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                    Deactivate account
                  </DialogTitle>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                      Are you sure you want to deactivate your account? All of your data will be
                      permanently removed. This action cannot be undone.
                    </p>
                    <div class="relative mt-10 inline-block text-left">
                      <Menu>
                        <span class="rounded-md shadow-sm">
                          <MenuButton
                            use={[popperRef]}
                            class="focus:shadow-outline-blue inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out hover:text-gray-500 focus:border-blue-300 focus:outline-none active:bg-gray-50 active:text-gray-800">
                            <span>Choose a reason</span>
                            <svg class="-mr-1 ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path
                                fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd" />
                            </svg>
                          </MenuButton>
                        </span>

                        <Transition
                          enter="transition duration-1000 ease-out"
                          enterFrom="transform scale-95 opacity-0"
                          enterTo="transform scale-100 opacity-100"
                          leave="transition duration-75 ease-out"
                          leaveFrom="transform scale-100 opacity-100"
                          leaveTo="transform scale-95 opacity-0">
                          <Portal>
                            <MenuItems
                              use={[[popperContent, popperOptions]]}
                              class="z-20 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md border border-gray-200 bg-white shadow-lg outline-none">
                              <div class="px-4 py-3">
                                <p class="text-sm leading-5">Signed in as</p>
                                <p class="truncate text-sm font-medium leading-5 text-gray-900">
                                  tom@example.com
                                </p>
                              </div>

                              <div class="py-1">
                                <MenuItem as="a" href="#account-settings" class={resolveClass}>
                                  Account settings
                                </MenuItem>
                                <MenuItem as="a" href="#support" class={resolveClass}>
                                  Support
                                </MenuItem>
                                <MenuItem
                                  as="a"
                                  disabled={true}
                                  href="#new-feature"
                                  class={resolveClass}>
                                  New feature (soon)
                                </MenuItem>
                                <MenuItem as="a" href="#license" class={resolveClass}>
                                  License
                                </MenuItem>
                              </div>

                              <div class="py-1">
                                <MenuItem as="a" href="#sign-out" class={resolveClass}>
                                  Sign out
                                </MenuItem>
                              </div>
                            </MenuItems>
                          </Portal>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                on:click={() => (isOpen = false)}
                class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 sm:ml-3 sm:w-auto sm:text-sm">
                Deactivate
              </button>
              <button
                type="button"
                on:click={() => (isOpen = false)}
                class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:text-gray-500 sm:mt-0 sm:w-auto sm:text-sm">
                Cancel
              </button>
            </div>
          </div>
        </TransitionChild>
      </div>
    </div>
  </Dialog>
</Transition>
