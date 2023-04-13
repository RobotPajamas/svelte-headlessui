<script>
  import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from "$lib";
</script>

<div class="flex h-full w-screen justify-center bg-gray-50 p-12">
  <div class="mx-auto w-full max-w-xs">
    <Disclosure>
      <DisclosureButton>Trigger</DisclosureButton>

      <Transition
        enter="transition duration-1000 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-1000 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0">
        <DisclosurePanel class="mt-4 bg-white p-4">Content</DisclosurePanel>
      </Transition>
    </Disclosure>
  </div>
</div>
