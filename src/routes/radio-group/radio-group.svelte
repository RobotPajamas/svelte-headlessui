<script lang="ts">
  import { RadioGroup, RadioGroupOption } from "$lib";
  function classNames(...classes: (string | false | null | undefined)[]) {
    return classes.filter(Boolean).join(" ");
  }
  let access = [
    {
      id: "access-1",
      name: "Public access",
      description: "This project would be available to anyone who has the link",
    },
    {
      id: "access-2",
      name: "Private to Project Members",
      description: "Only members of this project would be able to access",
    },
    {
      id: "access-3",
      name: "Private to you",
      description: "You are the only one able to access this project",
    },
  ];
  let active: (typeof access)[number];
</script>

<div class="max-w-xl p-12">
  <a href="/">Link before</a>
  <RadioGroup value={active} on:change={(event) => (active = event.detail)}>
    <fieldset class="space-y-4">
      <legend>
        <h2 class="text-xl">Privacy setting</h2>
      </legend>

      <div class="-space-y-px rounded-md bg-white">
        {#each access as { id, name, description }, i (id)}
          <RadioGroupOption
            value={id}
            class={({ active }) =>
              classNames(
                // Rounded corners
                i === 0 && "rounded-tl-md rounded-tr-md",
                access.length - 1 === i && "rounded-bl-md rounded-br-md",

                // Shared
                "relative flex border p-4 focus:outline-none",
                active ? "z-10 border-indigo-200 bg-indigo-50" : "border-gray-200"
              )}
            let:active
            let:checked>
            <div class="flex w-full items-center justify-between">
              <div class="ml-3 flex cursor-pointer flex-col">
                <span
                  class={classNames(
                    "block text-sm font-medium leading-5",
                    active ? "text-indigo-900" : "text-gray-900"
                  )}>
                  {name}
                </span>
                <span
                  class={classNames(
                    "block text-sm leading-5",
                    active ? "text-indigo-700" : "text-gray-500"
                  )}>
                  {description}
                </span>
              </div>
              <div>
                {#if checked}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="h-5 w-5 text-indigo-500">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                {/if}
              </div>
            </div>
          </RadioGroupOption>
        {/each}
      </div>
    </fieldset>
  </RadioGroup>
  <a href="/">Link after</a>
</div>
