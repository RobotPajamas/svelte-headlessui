<script lang="ts">
  import { Switch } from "$lib";

  let enabled = false;
</script>

<div class="py-16">
  <Switch
    checked={enabled}
    on:change={(e) => (enabled = e.detail)}
    class={`${enabled ? "bg-teal-900" : "bg-teal-700"}
          relative inline-flex h-[38px] w-[74px] flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}>
    <span class="sr-only">Use setting</span>
    <span
      aria-hidden="true"
      class={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`} />
  </Switch>
</div>
