<template>
  <div>
    <div
      v-for="(user, index) in trustdata"
      :key="user.id"
      class="max-w-6xl mx-auto sm:px-2 md:px-2"
    >
      <div class="mb-2 hidden md:px-1 lg:px-4 sm:block">
        <div
          class="rounded-lg xl:max-w-screen-xl"
          :class="
            user.rank < 4
              ? 'bg-trust-blue'
              : 'bg-white border-2 border-trust-blue'
          "
        >
          <div class="h-20 md:h-24 flex flex-row items-center">
            <div class="-mt-2 md:-mt-3 mr-1.5 -ml-1 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-24 w-12 md:h-28 md:w-16 lg:h-28 lg:w-16 fill-current"
                viewBox="0 0 24 24"
                preserveAspectRatio="none"
                :class="user.rank < 4 ? 'text-trust-green' : 'text-trust-blue'"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
                />
              </svg>
            </div>
            <div
              class="flex-none ml-2 mr-4 inline-block p-0.5 rounded-full"
              :class="user.rank < 4 ? 'bg-trust-yellow' : 'bg-trust-blue'"
            >
              <img
                class="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-full"
                :src="user.image"
                alt=""
              />
            </div>
            <div
              class="flex flex-col w-60 md:w-64 lg:w-96"
              :class="user.rank < 4 ? 'text-white' : 'text-trust-blue'"
            >
              <div
                class="
                  font-karla font-bold
                  sm:text-base
                  md:text-lg
                  lg:text-2xl
                  flex-none
                  truncate
                "
              >
                {{ user.name }}
              </div>
              <div
                class="font-karla font-normal flex-none text-xs md:text-base"
              >
                @{{ user.handle }}
              </div>
            </div>
            <div
              class="ml-2 md:ml-8 lg:ml-36 flex flex-col w-32 items-start"
              :class="user.rank < 4 ? 'text-white' : 'text-trust-blue'"
            >
              <div
                class="
                  font-raleway font-semibold
                  sm:text-xl
                  md:text-2xl
                  lg:text-4xl
                  flex-none
                "
              >
                {{ user.voteCredits }}
              </div>
              <div class="font-karla flex-none text-xs">VOTE CREDITS</div>
            </div>
            <div
              class="px-2 md:px-4 lg:px-6"
              :class="user.rank < 4 ? 'text-white' : 'text-trust-blue'"
            >
              <div v-if="user.rank < 4">
                <svg
                  width="1"
                  height="80"
                  viewBox="0 0 1 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="0.5"
                    y1="2.18557e-08"
                    x2="0.499997"
                    y2="80"
                    stroke="white"
                  />
                </svg>
              </div>
              <div v-if="user.rank > 3">
                <svg
                  width="1"
                  height="80"
                  viewBox="0 0 1 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="0.5"
                    y1="2.18557e-08"
                    x2="0.499997"
                    y2="80"
                    stroke="#0F00B7"
                  />
                </svg>
              </div>
            </div>
            <div
              class="
                flex flex-col
                sm:w-16
                md:w-16
                w-32
                items-start
                mr-8
                md:mr-0
                lg:mr-2
              "
              :class="user.rank < 4 ? 'text-white' : 'text-trust-blue'"
            >
              <div
                class="
                  font-raleway font-semibold
                  sm:text-xl
                  md:text-2xl
                  lg:text-4xl
                  flex-none
                  mr-2
                  md:mr-4
                "
              >
                {{ user.votes }}
              </div>
              <div class="font-karla flex-none text-xs">VOTES</div>
            </div>
            <nuxt-link
              class="flex ml-4 md:ml-20 lg:ml-16 mr-2"
              :to="`/handles/${user.handle}`"
            >
              <button
                class="
                  bg-transparent
                  hover:bg-trust-yellow
                  font-semibold
                  hover:text-trust-blue
                  py-1
                  px-2
                  md:py-2
                  md:px-4
                  border
                  hover:border-trust-blue
                  rounded
                  mr-4
                  items-end
                "
                :class="
                  user.rank < 4
                    ? 'text-white border-white'
                    : 'text-trust-blue border-trust-blue'
                "
              >
                VOTE
              </button>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="mb-1 block sm:hidden px-4 py-2">
        <div
          class="rounded-lg max-w-full"
          :class="
            user.rank < 4
              ? 'bg-trust-blue'
              : 'bg-white border-2 border-trust-blue'
          "
        >
          <div class="h-20 md:h-24 flex flex-row items-center">
            <div class="flex mt-1 mr-1.5 -ml-1 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-28 w-16 fill-current"
                viewBox="0 0 24 24"
                preserveAspectRatio="none"
                :class="user.rank < 4 ? 'text-trust-green' : 'text-trust-blue'"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
                />
              </svg>
            </div>
            <div
              class="ml-1 mr-8 inline-block p-0.5 mt-2 rounded-full"
              :class="user.rank < 4 ? 'bg-trust-yellow' : 'bg-trust-blue'"
            >
              <img class="h-16 w-16 rounded-full" :src="user.image" alt="" />
            </div>
            <div class="flex flex-grow justify-end">
              <nuxt-link :to="`/handles/${user.handle}`">
                <button
                  class="
                    bg-transparent
                    hover:bg-trust-yellow
                    font-semibold
                    hover:text-trust-blue
                    py-2
                    px-8
                    border
                    hover:border-transparent
                    rounded
                    mt-2
                    mr-4
                    lg:mr-8
                    items-center
                    mx-auto
                  "
                  :class="
                    user.rank < 4
                      ? 'text-white border-white'
                      : 'text-trust-blue border-trust-blue'
                  "
                >
                  VOTE
                </button>
              </nuxt-link>
            </div>
          </div>
          <div
            class="flex flex-row font-karla text-lg justify-center"
            :class="user.rank < 4 ? 'text-white' : 'text-trust-blue'"
          >
            {{ user.name }}
          </div>
          <div
            class="flex flex-row font-karla text-base justify-center"
            :class="user.rank < 4 ? 'text-white' : 'text-trust-blue'"
          >
            @{{ user.handle }}
          </div>
          <div class="mt-6 flex flex-row justify-center">
            <div
              class="flex-grow"
              :class="user.rank < 4 ? 'text-white' : 'text-trust-blue'"
            >
              <div class="flex flex-col items-center">
                <div class="font-raleway font-semibold text-3xl flex-none">
                  {{ user.voteCredits }}
                </div>
                <div class="mb-6 font-karla flex-none text-xs">
                  VOTE CREDITS
                </div>
              </div>
            </div>
            <div class="ml-4 mr-4"></div>

            <div
              class="flex-grow"
              :class="user.rank < 4 ? 'text-white' : 'text-trust-blue'"
            >
              <div class="flex flex-col items-center">
                <div class="font-raleway font-semibold text-3xl flex-none">
                  {{ user.votes }}
                </div>
                <div class="mb-6 font-karla flex-none text-xs">VOTES</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="index === 2"
        class="w-64 mx-auto border border-solid border-trust-blue mt-6 mb-6"
      ></div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["trustdata"]),
  },
};
</script>
