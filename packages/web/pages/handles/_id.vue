<template>
  <div class="max-w-6xl mx-auto sm:px-2 md:px-2">
    <div class="flex flex-row">
      <div class="mt-20 hidden lg:px-4 lg:block w-7/12">
        <div
          class="rounded-lg xl:max-w-screen-xl"
          :class="
            currentHandle.rank < 4
              ? 'bg-trust-blue'
              : 'bg-white border-2 border-trust-blue'
          "
        >
          <div class="h-56 flex flex-row items-center">
            <div class="-mt-2 md:-mt-36 mr-1.5 -ml-1 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-24 w-12 md:h-28 md:w-16 lg:h-28 lg:w-16 fill-current"
                viewBox="0 0 24 24"
                preserveAspectRatio="none"
                :class="
                  currentHandle.rank < 4
                    ? 'text-trust-green'
                    : 'text-trust-blue'
                "
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
                />
              </svg>
            </div>
            <div>
              <div
                class="flex-none ml-2 mr-2 inline-block p-0.5 rounded-full"
                :class="
                  currentHandle.rank < 4 ? 'bg-trust-yellow' : 'bg-trust-blue'
                "
              >
                <img
                  class="h-12 w-12 md:h-14 md:w-14 lg:h-24 lg:w-24 rounded-full"
                  :src="currentHandle.image"
                  alt=""
                />
              </div>
              <div
                class="flex flex-col w-32 lg:w-60"
                :class="
                  currentHandle.rank < 4 ? 'text-white' : 'text-trust-blue'
                "
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
                  {{ currentHandle.name }}
                </div>
                <div
                  class="font-karla font-normal flex-none text-xs md:text-base"
                >
                  @{{ currentHandle.handle }}
                </div>
              </div>
            </div>
            <div
              class="ml-2 mr-2 flex flex-grow flex-col w-16 lg:w-32 items-end"
              :class="currentHandle.rank < 4 ? 'text-white' : 'text-trust-blue'"
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
                {{ currentHandle.voteCredits }}
              </div>
              <div class="font-karla flex-none text-xs">VOTE CREDITS</div>
            </div>
            <div
              class="px-2 lg:px-6"
              :class="currentHandle.rank < 4 ? 'text-white' : 'text-trust-blue'"
            >
              |
            </div>
            <div
              class="flex flex-col w-32 items-start mr-2 md:mr-1 lg:mr-2"
              :class="currentHandle.rank < 4 ? 'text-white' : 'text-trust-blue'"
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
                {{ currentHandle.votes }}
              </div>
              <div class="font-karla flex-none text-xs">VOTES</div>
            </div>
          </div>
        </div>
        <div class="mt-20 mb-10 flex flex-row">
          <span class="font-karla text-2xl font-bold text-trust-blue"
            >VOTES RECEIVED</span
          >
          <svg
            class="items-start -mt-1 ml-2 mr-2"
            width="1"
            height="40"
            viewBox="0 0 1 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="2.18557e-08"
              x2="0.499998"
              y2="40"
              stroke="#0F00B7"
            />
          </svg>
          <span class="font-karla font-normal text-2xl text-trust-blue"
            >VOTES DELEGATED</span
          >
        </div>
        <VotesReceived />
      </div>
      <div class="mt-20 hidden lg:px-4 lg:block w-5/12">
        <div
          class="rounded-lg xl:max-w-screen-xl bg-trust-blue border-trust-blue"
        >
          <div class="flex flex-row">
            <div
              class="
                font-karla
                text-lg
                font-semibold
                text-white
                tracking-widest
                p-6
              "
            >
              VOTE FOR
            </div>

            <div class="font-karla font-normal text-base text-white p-6">
              {{ currentHandle.handle }}
            </div>
          </div>
          <div class="flex flex-row">
            <div class="flex flex-col">
              <div class="px-6 py-4 mr-10">
                <button
                  class="
                    bg-transparent
                    hover:bg-trust-yellow
                    font-semibold
                    hover:text-trust-blue
                    py-1
                    px-2
                    md:py-2
                    md:px-6
                    border
                    hover:border-trust-blue
                    rounded
                    items-end
                    text-white
                    border-white
                    tracking-widest
                    text-lg
                  "
                >
                  <svg
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#ffffff"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                  </svg>
                </button>
              </div>
              <div class="px-6 py-2">
                <button
                  class="
                    bg-transparent
                    hover:bg-trust-yellow
                    font-semibold
                    hover:text-trust-blue
                    py-1
                    px-2
                    md:py-2
                    md:px-6
                    border
                    hover:border-trust-blue
                    rounded
                    items-end
                    text-white
                    border-white
                    tracking-widest
                    text-lg
                  "
                >
                  <svg
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#ffffff"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M19 13H5v-2h14v2z" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="flex flex-col">
              <div
                class="
                  flex
                  font-karla font-normal
                  text-base text-white
                  self-end
                "
              >
                VOTES
              </div>
              <div
                class="
                  mt-12
                  mb-3
                  flex
                  font-raleway font-semibold
                  sm:text-xl
                  md:text-2xl
                  lg:text-4xl
                  text-white
                  self-center
                  flex-grow
                  items-center
                "
              >
                0123456789
              </div>
              <svg
                class="mb-3"
                width="220"
                height="1"
                viewBox="0 0 220 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  y1="-0.5"
                  x2="220"
                  y2="-0.5"
                  transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 0 0)"
                  stroke="#FEC833"
                />
              </svg>
              <div class="font-karla font-normal text-base text-white self-end">
                YOU HAVE <span class="text-trust-yellow">2345</span>
              </div>
              <div class="font-karla font-normal text-base text-white self-end">
                VOTE CREDITS LEFT
              </div>
            </div>
          </div>
          <div class="flex mt-20 py-4 justify-center">
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
                items-end
                text-white
                border-white
                tracking-widest
                text-lg
              "
            >
              CHECKOUT VOTE
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="block lg:hidden max-w-xl mx-auto mt-20 px-4">
      <div
        class="rounded-lg xl:max-w-screen-xl"
        :class="
          currentHandle.rank < 4
            ? 'bg-trust-blue'
            : 'bg-white border-2 border-trust-blue'
        "
      >
        <div class="hidden h-56 md:flex flex-row items-center">
          <div class="-mt-40 md:-mt-36 mr-1.5 -ml-1 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-24 w-12 md:h-28 md:w-16 lg:h-28 lg:w-16 fill-current"
              viewBox="0 0 24 24"
              preserveAspectRatio="none"
              :class="
                currentHandle.rank < 4 ? 'text-trust-green' : 'text-trust-blue'
              "
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
              />
            </svg>
          </div>
          <div>
            <div
              class="flex-none ml-2 mr-2 inline-block p-0.5 rounded-full"
              :class="
                currentHandle.rank < 4 ? 'bg-trust-yellow' : 'bg-trust-blue'
              "
            >
              <img
                class="h-12 w-12 md:h-16 md:w-16 rounded-full"
                :src="currentHandle.image"
                alt=""
              />
            </div>
            <div
              class="flex flex-col sm:w-32 md:w-40"
              :class="currentHandle.rank < 4 ? 'text-white' : 'text-trust-blue'"
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
                {{ currentHandle.name }}
              </div>
              <div
                class="font-karla font-normal flex-none text-xs md:text-base"
              >
                @{{ currentHandle.handle }}
              </div>
            </div>
          </div>
          <div
            class="ml-2 mr-2 flex flex-grow flex-col w-16 lg:w-32 items-end"
            :class="currentHandle.rank < 4 ? 'text-white' : 'text-trust-blue'"
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
              {{ currentHandle.voteCredits }}
            </div>
            <div class="font-karla flex-none text-xs">VOTE CREDITS</div>
          </div>
          <div
            class="px-2 lg:px-6"
            :class="currentHandle.rank < 4 ? 'text-white' : 'text-trust-blue'"
          >
            |
          </div>
          <div
            class="flex flex-col w-32 items-start mr-2 md:mr-1 lg:mr-2"
            :class="currentHandle.rank < 4 ? 'text-white' : 'text-trust-blue'"
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
              {{ currentHandle.votes }}
            </div>
            <div class="font-karla flex-none text-xs">VOTES</div>
          </div>
        </div>
        <div class="h-56 md:hidden flex-row items-center">
          <div
            class="rounded-lg max-w-full"
            :class="
              currentHandle.rank < 4
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
                  :class="
                    currentHandle.rank < 4
                      ? 'text-trust-green'
                      : 'text-trust-blue'
                  "
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
                  />
                </svg>
              </div>
              <div
                class="ml-1 mr-8 inline-block p-0.5 mt-2 rounded-full"
                :class="
                  currentHandle.rank < 4 ? 'bg-trust-yellow' : 'bg-trust-blue'
                "
              >
                <img
                  class="h-16 w-16 rounded-full"
                  :src="currentHandle.image"
                  alt=""
                />
              </div>
            </div>
            <div
              class="flex flex-row font-karla text-lg justify-center"
              :class="currentHandle.rank < 4 ? 'text-white' : 'text-trust-blue'"
            >
              {{ currentHandle.name }}
            </div>
            <div
              class="flex flex-row font-karla text-base justify-center"
              :class="currentHandle.rank < 4 ? 'text-white' : 'text-trust-blue'"
            >
              @{{ currentHandle.handle }}
            </div>
            <div class="mt-6 flex flex-row justify-center">
              <div
                class="flex-grow"
                :class="
                  currentHandle.rank < 4 ? 'text-white' : 'text-trust-blue'
                "
              >
                <div class="flex flex-col items-center">
                  <div class="font-raleway font-semibold text-3xl flex-none">
                    {{ currentHandle.voteCredits }}
                  </div>
                  <div class="mb-6 font-karla flex-none text-xs">
                    VOTE CREDITS
                  </div>
                </div>
              </div>
              <div class="ml-4 mr-4"></div>

              <div
                class="flex-grow"
                :class="
                  currentHandle.rank < 4 ? 'text-white' : 'text-trust-blue'
                "
              >
                <div class="flex flex-col items-center">
                  <div class="font-raleway font-semibold text-3xl flex-none">
                    {{ currentHandle.votes }}
                  </div>
                  <div class="mb-6 font-karla flex-none text-xs">VOTES</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="
          rounded-lg
          xl:max-w-screen-xl
          mt-10
          bg-trust-blue
          border-trust-blue
        "
      >
        <div class="flex flex-row">
          <div
            class="
              font-karla
              text-lg
              font-semibold
              text-white
              tracking-widest
              p-6
            "
          >
            VOTE FOR
          </div>

          <div class="font-karla font-normal text-base text-white p-6">
            {{ currentHandle.handle }}
          </div>
        </div>
        <div class="flex flex-row">
          <div class="flex flex-col">
            <div class="px-6 py-4">
              <button
                class="
                  bg-transparent
                  hover:bg-trust-yellow
                  font-semibold
                  hover:text-trust-blue
                  py-1
                  px-2
                  md:py-2
                  md:px-6
                  border
                  hover:border-trust-blue
                  rounded
                  items-end
                  text-white
                  border-white
                  tracking-widest
                  text-lg
                "
              >
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#ffffff"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
              </button>
            </div>
            <div class="px-6 py-2">
              <button
                class="
                  bg-transparent
                  hover:bg-trust-yellow
                  font-semibold
                  hover:text-trust-blue
                  py-1
                  px-2
                  md:py-2
                  md:px-6
                  border
                  hover:border-trust-blue
                  rounded
                  items-end
                  text-white
                  border-white
                  tracking-widest
                  text-lg
                "
              >
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#ffffff"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M19 13H5v-2h14v2z" />
                </svg>
              </button>
            </div>
          </div>
          <div class="flex flex-col sm:ml-48 md:ml-40 justify-between mx-auto">
            <div class="font-karla font-normal text-base text-white self-end">
              VOTES
            </div>
            <div
              class="
                mt-12
                mb-3
                flex
                font-raleway font-semibold
                text-xl
                md:text-2xl
                lg:text-4xl
                text-white
                self-center
                flex-grow
                items-center
              "
            >
              0123456789
            </div>
            <svg
              class="mb-3"
              width="220"
              height="1"
              viewBox="0 0 220 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                y1="-0.5"
                x2="220"
                y2="-0.5"
                transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 0 0)"
                stroke="#FEC833"
              />
            </svg>
            <div class="font-karla font-normal text-base text-white self-end">
              YOU HAVE <span class="text-trust-yellow">2345</span>
            </div>
            <div class="font-karla font-normal text-base text-white self-end">
              VOTE CREDITS LEFT
            </div>
          </div>
        </div>
        <div class="flex mt-20 py-4 justify-center">
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
              items-end
              text-white
              border-white
              tracking-widest
              text-lg
            "
          >
            CHECKOUT VOTE
          </button>
        </div>
      </div>
      <div class="mt-20 mb-10 flex flex-row">
        <span
          class="
            font-karla
            text-base
            sm:text-xl
            md:text-2xl
            font-bold
            text-trust-blue
          "
          >VOTES RECEIVED</span
        >
        <svg
          class="items-start -mt-1 ml-2 mr-2"
          width="1"
          height="40"
          viewBox="0 0 1 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.5"
            y1="2.18557e-08"
            x2="0.499998"
            y2="40"
            stroke="#0F00B7"
          />
        </svg>
        <span
          class="
            font-karla font-normal
            text-base
            sm:text-xl
            md:text-2xl
            text-trust-blue
          "
          >VOTES DELEGATED</span
        >
      </div>
      <VotesReceived />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  head() {
    return {
      title: this.currentHandle.handle,
      meta: [
        {
          name: "description",
          content: "This is the handle page!",
          hid: "description",
        },
      ],
    };
  },
  computed: {
    ...mapState(["trustdata"]),
    currentHandle() {
      let result;
      for (let i = 0; i < this.trustdata.length; i++) {
        if (this.trustdata[i].handle === this.id) {
          result = this.trustdata[i];
          break;
        }
      }
      return result;
    },
  },
};
</script>
