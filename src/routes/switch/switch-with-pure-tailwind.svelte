<script lang="ts">
  import { Switch, SwitchGroup, SwitchLabel } from "$lib";

  function classNames(...classes: (string | false | null | undefined)[]) {
    return classes.filter(Boolean).join(" ");
  }

  let state = false;
</script>

<div class="flex h-full w-screen items-start justify-center bg-gray-50 p-12">
  <SwitchGroup as="div" class="flex items-center space-x-4">
    <SwitchLabel>Enable notifications</SwitchLabel>

    <Switch
      as="button"
      checked={state}
      on:change={(event) => (state = event.detail)}
      class={({ checked }) =>
        classNames(
          "focus:shadow-outline relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none",
          checked ? "bg-indigo-600" : "bg-gray-200"
        )}
      let:checked>
      <span
        class={classNames(
          "inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out",
          checked ? "translate-x-5" : "translate-x-0"
        )} />
    </Switch>
  </SwitchGroup>
</div>
