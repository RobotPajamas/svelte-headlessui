import { Description, DescriptionProvider } from "$lib/components/description";
import { render, screen } from "@testing-library/svelte";
import html from "svelte-htm";
import { writable } from "svelte/store";

it("should be possible to render a DescriptionProvider", () => {
  render(DescriptionProvider, { name: "test" });
});

it("should be possible to use a DescriptionProvider without using a Description", async () => {
  const describedby = writable();
  const { container } = render(html`
      <${DescriptionProvider} name={"test"} let:describedby>
        <div aria-describedby=${describedby}>
          No description
        </div>
      </${DescriptionProvider}>
    `);

  expect(container.firstChild?.firstChild).toMatchInlineSnapshot(`
    <div>
      No description
    </div>
  `);
});
