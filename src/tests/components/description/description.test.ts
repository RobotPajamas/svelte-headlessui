import DescriptionProvider from "$lib/components/description/DescriptionProvider.svelte";
import Description from "$lib/components/description/Description.svelte";
import { render, screen } from "@testing-library/svelte";
import svelte from "svelte-inline-compile";

it("should be possible to render a DescriptionProvider", () => {
  render(DescriptionProvider, { name: "test" });
});

it("should be possible to use a DescriptionProvider without using a Description", async () => {
  const { container } = render(svelte`
      <DescriptionProvider name={"test"} let:describedby>
        <div aria-describedby={describedby}>
          No description
        </div>
      </DescriptionProvider>
    `);

  expect(container.firstChild?.firstChild).toMatchInlineSnapshot(`
    <div>
      No description
    </div>
  `);
});

it("should be possible to use a DescriptionProvider and a single Description, and have them linked", async () => {
  const { container } = render(svelte`
    <DescriptionProvider name={"test"} let:describedby>
      <div aria-describedby={describedby}>
        <Description>I am a description</Description>
        <span>Contents</span>
      </div>
    </DescriptionProvider>
  `);

  expect(container.firstChild?.firstChild).toMatchInlineSnapshot(`
    <div
      aria-describedby="headlessui-description-1"
    >
      <p
        id="headlessui-description-1"
      >
        I am a description
      </p>
      
      
       
      <span>
        Contents
      </span>
    </div>
  `);
});

it("should be possible to use a DescriptionProvider and multiple Description components, and have them linked", async () => {
  const { container } = render(svelte`
    <DescriptionProvider name={"test"} let:describedby>
      <div aria-describedby={describedby}>
        <Description>I am a description</Description>
        <span>Contents</span>
        <Description>I am also a description</Description>
      </div>
    </DescriptionProvider>
  `);
  expect(container.firstChild?.firstChild).toMatchInlineSnapshot(`
    <div
      aria-describedby="headlessui-description-1 headlessui-description-2"
    >
      <p
        id="headlessui-description-1"
      >
        I am a description
      </p>
      
      
       
      <span>
        Contents
      </span>
       
      <p
        id="headlessui-description-2"
      >
        I am also a description
      </p>
      
      
    </div>
  `);
});

it("should be possible to use a DescriptionProvider with slot props", async () => {
  const { container } = render(svelte`
    <DescriptionProvider name={"test"} slotProps={{num: 12345}} let:describedby>
      <div aria-describedby={describedby}>
        <Description let:num>{num}</Description>
        <span>Contents</span>
      </div>
    </DescriptionProvider>
  `);

  expect(container.firstChild?.firstChild).toMatchInlineSnapshot(`
    <div
      aria-describedby="headlessui-description-1"
    >
      <p
        id="headlessui-description-1"
      >
        12345
      </p>
      
      
       
      <span>
        Contents
      </span>
    </div>
  `);
});
