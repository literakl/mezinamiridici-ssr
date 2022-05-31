<template>
  <footer class="footer w-full  min-h-[130px] py-3">
    <div class="container">
      <div class="footer-menu flex justify-between flex-wrap">


          <ul class="footer-links flex flex-wrap items-center justify-between ">
            <li class="mx-2" v-for="(item, index) in footerMenu" :key="index">
              <nuxt-link class="yellow-color font-light text-base duration-100" :to="item.link">{{ item.name }}
              </nuxt-link>
            </li>
          </ul>
          <ul class="flex items-center justify-content-center mx-auto">
            <li class="mx-2">
              <a :href="facebookLink">
                <img class="!max-w-5 !max-h-5 min-w-5" src="~/static/images/facebook.svg" alt="icon">
              </a>
            </li>
            <li class="mx-2">
              <a :href="twitterLink">
                <img class="!max-w-5 !max-h-5 min-w-5" src="~/static/images/twitter.svg" alt="icon">
              </a>
            </li>
            <li class="mx-2">
              <a :href="rssLink">
                <img class="!max-w-5 !max-h-5 min-w-5" src="~/static/images/rss.svg" alt="icon">
              </a>
            </li>
          </ul>
      </div>

      <hr class="footer-divider w-full border-1 border-[#FFFFFF] opacity-60" />
      <h5 class="footer-end-text">
        Copyright © 2021 - 2022 Lelisoft s.r.o
      </h5>
    </div>

  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerMenu: [
        {
          name: 'Our missions',
          link: ''
        },
        {
          name: 'Help',
          link: ''
        },
        {
          name: 'Contact',
          link: ''
        },
        {
          name: 'Advertising',
          link: ''
        },
        {
          name: 'Terms of use',
          link: ''
        },
        {
          name: 'Protection of personal data',
          link: ''
        },
        {
          name: 'Cookie settings',
          link: ''
        }
      ],
      facebookLink: 'https://www.facebook.com/mezinamiridici',
      twitterLink: 'https://twitter.com/MeziNamiRidici',
      rssLink: 'https://www.mezinamiridici.cz/feed.rss'
    }
  }
}
</script>

<style lang="scss">
.footer {
  background: #343a3f;

  &-menu {
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }

  &-links {
      @media screen and (max-width: 768px) {
        flex-direction: column;
      }
    li {
      .yellow-color {
        color: #e0a800 !important;

        &:hover {
          color: #FFFFFF !important;
        }
      }
    }
  }


  .max-w-5 {
    max-width: 20px !important;
  }

  .max-h-5 {
    max-height: 20px !important;
  }

  .min-w-5 {
    min-width: 20px !important;
  }

  .min-h-5 {
    min-height: 20px !important;
  }

  .footer-divider {
    border: 1px solid #FFFFFF;
    opacity: 0.6;
  }

  .footer-end-text {
    color: #FFE !important;
    opacity: 0.25;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
  }
}
</style>