<script lang="ts">
  import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "$lib";

  function classNames(...classes: (string | false | null | undefined)[]) {
    return classes.filter(Boolean).join(" ");
  }

  let categories = {
    Recent: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  };
</script>

<div class="w-full max-w-md px-2 py-16 sm:px-0">
  <TabGroup>
    <TabList class="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
      {#each Object.keys(categories) as category (category)}
        <Tab
          class={({ selected }) =>
            classNames(
              "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
              "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
              selected ? "bg-white shadow" : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
            )}>
          {category}
        </Tab>
      {/each}
    </TabList>
    <TabPanels class="mt-2">
      {#each Object.values(categories) as posts, idx (idx)}
        <TabPanel
          class={classNames(
            "rounded-xl bg-white p-3",
            "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
          )}>
          <ul>
            {#each posts as post (post.id)}
              <li class="relative rounded-md p-3 hover:bg-gray-100">
                <h3 class="text-sm font-medium leading-5">
                  {post.title}
                </h3>

                <ul class="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                  <li>{post.date}</li>
                  <li>&middot;</li>
                  <li>{post.commentCount} comments</li>
                  <li>&middot;</li>
                  <li>{post.shareCount} shares</li>
                </ul>

                <a
                  href="#"
                  class={classNames(
                    "absolute inset-0 rounded-md",
                    "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                  )} />
              </li>
            {/each}
          </ul>
        </TabPanel>
      {/each}
    </TabPanels>
  </TabGroup>
</div>
