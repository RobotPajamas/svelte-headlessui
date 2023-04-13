<script>
  import { PopoverButton } from "$lib";
</script>

<PopoverButton
  class="border-2 border-transparent bg-gray-300 px-3 py-2 focus:border-blue-900 focus:outline-none"
  {...$$restProps}>
  <slot />
</PopoverButton>
