<script lang="ts">
  import { page } from "$app/stores";

  $: isHome = $page.path.endsWith("docs");
  $: base = isHome ? "docs/" : "";

  $: pages = [
    { url: "../docs", text: "Home" },
    { url: `${base}general-concepts`, text: "General concepts" },
    { url: `${base}tailwind-ui`, text: "Use with Tailwind UI" },
    { url: `${base}version-history`, text: "Version history" },
  ];

  $: components = [
    { url: `${base}dialog`, text: "Dialog" },
    { url: `${base}disclosure`, text: "Disclosure" },
    { url: `${base}listbox`, text: "Listbox" },
    { url: `${base}menu`, text: "Menu" },
    { url: `${base}popover`, text: "Popover" },
    { url: `${base}radio-group`, text: "Radio Group" },
    { url: `${base}switch`, text: "Switch" },
    { url: `${base}tabs`, text: "Tabs" },
    { url: `${base}transition`, text: "Transition" },
  ];
</script>

<nav title="Pages" class="flex flex-col px-6">
  {#each pages as p (p.url)}
    <a
      href={p.url}
      class:font-bold={$page.path.includes(p.url)}
      class="py-2 hover:underline hover:decoration-stone-400">
      {p.text}
    </a>
  {/each}
  <hr class="my-4 w-24" />
  {#each components as component (component.url)}
    <a
      href={component.url}
      class:font-bold={$page.path.includes(component.url)}
      class="py-2 hover:underline hover:decoration-stone-400">
      {component.text}
    </a>
  {/each}
</nav>
