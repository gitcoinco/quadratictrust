<template>
  <div>
    <div v-for="user in votesreceived" :key="user.id" class="max-w-6xl mx-auto">
      <div
        class="
          mt-2
          rounded-lg
          xl:max-w-screen-xl
          bg-white
          border-2 border-trust-blue
        "
      >
        <div class="h-20 flex flex-row items-center">
          <div
            class="ml-2 md:mr-2 mr-4 inline-block p-0.5 rounded-full bg-white"
          >
            <img
              class="h-6 w-6 md:h-10 md:w-10 lg:h-16 lg:w-16 rounded-full"
              :src="user.image"
              alt=""
            />
          </div>
          <div class="flex flex-col w-32 md:w-48 lg:w-60 text-trust-blue">
            <div class="font-karla font-normal flex-none text-xs md:text-base">
              @{{ user.handle }}
            </div>
          </div>

          <div
            class="
              flex flex-grow flex-col
              w-32
              items-end
              mr-8
              md:mr-2
              lg:mr-4
              text-trust-blue
            "
          >
            <div
              class="
                font-raleway font-semibold
                sm:text-xl
                md:text-2xl
                lg:text-4xl
                flex
              "
            >
              {{ user.votes }}
            </div>
            <div class="font-karla flex text-xs">VOTES</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["votesreceived"]),
  },
};
</script>
