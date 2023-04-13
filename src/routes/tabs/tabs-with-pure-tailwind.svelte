<script lang="ts">
  import {
    Switch,
    SwitchGroup,
    SwitchLabel,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
  } from "$lib";

  function classNames(...classes: (string | false | null | undefined)[]) {
    return classes.filter(Boolean).join(" ");
  }

  let tabs = [
    { name: "My Account", content: "Tab content for my account" },
    { name: "Company", content: "Tab content for company", disabled: true },
    { name: "Team Members", content: "Tab content for team members" },
    { name: "Billing", content: "Tab content for billing" },
  ];

  let manual = false;
</script>

<div class="flex h-full w-screen flex-col items-start space-y-12 bg-gray-50 p-12">
  <SwitchGroup as="div" class="flex items-center space-x-4">
    <SwitchLabel>Manual keyboard activation</SwitchLabel>

    <Switch
      as="button"
      checked={manual}
      on:change={(event) => (manual = event.detail)}
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

  <TabGroup class="flex w-full max-w-3xl flex-col" as="div" {manual}>
    <TabList class="relative z-0 flex divide-x divide-gray-200 rounded-lg shadow">
      {#each tabs as tab, tabIdx (tab.name)}
        <Tab
          disabled={tab.disabled}
          class={({ selected }) =>
            classNames(
              selected ? "text-gray-900" : "text-gray-500 hover:text-gray-700",
              tabIdx === 0 ? "rounded-l-lg" : "",
              tabIdx === tabs.length - 1 ? "rounded-r-lg" : "",
              tab.disabled && "opacity-50",
              "group relative min-w-0 flex-1 overflow-hidden bg-white px-4 py-4 text-center text-sm font-medium hover:bg-gray-50 focus:z-10"
            )}
          let:selected>
          <span>{tab.name}</span>
          {#if tab.disabled}
            <small class="inline-block px-4 text-xs">(disabled)</small>
          {/if}
          <span
            aria-hidden="true"
            class={classNames(
              selected ? "bg-indigo-500" : "bg-transparent",
              "absolute inset-x-0 bottom-0 h-0.5"
            )} />
        </Tab>
      {/each}
    </TabList>

    <TabPanels class="mt-4">
      {#each tabs as tab (tab.name)}
        <TabPanel class="rounded-lg bg-white p-4 shadow">
          {tab.content}
        </TabPanel>
      {/each}
    </TabPanels>
  </TabGroup>
</div>
