<script lang="ts">
  import PeopleList from "./_PeopleList.svelte";
</script>

<div class="flex h-full w-screen justify-center space-x-4 bg-gray-50 p-12">
  <PeopleList />

  <div>
    <label for="email" class="block text-sm font-medium leading-5 text-gray-700"> Email </label>
    <div class="relative mt-1 rounded-md shadow-sm">
      <input
        class="form-input block w-full sm:text-sm sm:leading-5"
        placeholder="you@example.com" />
    </div>
  </div>

  <PeopleList />
</div>
