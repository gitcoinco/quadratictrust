<template>
  <div>
    <Search />
    <LeaderboardTime />
    <LeaderboardHeader />
    <LeaderboardUser />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Ranking",
      meta: [
        {
          name: "description",
          content: "This is a homepage!",
          hid: "description",
        },
      ],
    };
  },
};
</script>
