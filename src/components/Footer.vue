<template>
  <footer class="w-full bg-dark pb-20">
    <div class="container mx-auto">
      <div class="flex flex-wrap py-20">
        <div
          class="flex-initial w-1/2 md:w-1/4 mb-6 md:mb-0"
          v-for="(item, index) in menu"
          :key="index"
        >
          <h2 class="mb-4 text-xl font-semibold text-secondary-light">
            {{ item.heading }}
          </h2>
          <ul class="text-white text-xl font-semibold md:mb-0">
            <li v-for="(link, index) in item.items" :key="index" class="py-4">
              <a
                :href="link.url"
                class="hover:text-primary"
                :target="link.external ? '_blank': null"
                :rel="link.external ? 'noopener noreferrer': null"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="text-lg">
        © 2021 Metaprime |
        <a href="#_" class="hover:text-primary"> Privacy Policy </a>
        |
        <a href="#_" class="hover:text-primary"> Terms and Conditions </a>
      </div>
    </div>
  </footer>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const menu = ref([
      {
        heading: "Developers",
        items: [
          {
            label: "Guide",
            url: "https://kodadot.gitbook.io/knowledgebase/",
            external: true,
          },
          {
            label: "Github",
            url: "https://github.com/kodadot/",
            external: true,
          },
          // {
          //   label: "Collators",
          //   url: "/collators",
          //   external: false,
          // },
          // {
          //   label: "Grants",
          //   url: "/grants",
          //   external: false,
          // },
        ],
      },
      // {
      //   heading: "Community",
      //   items: [
      //     {
      //       label: "Community Docs",
      //       url: "/community-docs",
      //       external: true,
      //     },
      //     {
      //       label: "Ambassador Program",
      //       url: "/ambassador-program",
      //       external: false,
      //     },
      //     {
      //       label: "Blog",
      //       url: "/blog",
      //       external: true,
      //     },
      //     {
      //       label: "Brand Assets",
      //       url: "/brand-assets",
      //       external: true,
      //     }
      //   ],
      // },
      {
        heading: "Social",
        items: [
          {
            label: "Twitter",
            url: "https://twitter.com/KodaDot",
            external: true,
          },
          {
            label: "Discord",
            url: "https://discord.gg/35hzy2dXXh",
            external: true,
          },
          {
            label: "Telegram",
            url: "https://t.me/kodadot",
            external: true,
          },
          // {
          //   label: "Youtube",
          //   url: "/Youtube",
          //   external: true,
          // },
          // {
          //   label: "LinkedIn",
          //   url: "/LinkedIn",
          //   external: true,
          // },
        ],
      },
      {
        heading: "Info",
        items: [
          // {
          //   label: "Contact",
          //   url: "/contact",
          //   external: false,
          // },
          {
            label: "FAQ",
            url: "https://kodadot.gitbook.io/knowledgebase/general/faq",
            external: true,
          },
          // {
          //   label: "Careers | Hiring!",
          //   url: "/careers",
          //   external: false,
          // },
        ],
      },
    ]);
    return {
      menu,
    };
  },
};
</script>
