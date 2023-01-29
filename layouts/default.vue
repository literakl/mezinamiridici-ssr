<template>
  <div>
    <header>
      <b-navbar toggleable="sm" type="dark" variant="dark">
        <b-nav-item class="brand-pic" href="/">
          <img :alt="$t('app.logo-alt')" class="d-inline-block align-top brand"
               src="/images/icons/logo.png">
        </b-nav-item>

        <b-navbar-nav class="d-none d-sm-block d-sm-dark">
          <div class="d-inline-flex flex-column title-tag">
            <h2 class="app-title"><a href="/">MEZI NÁMI <span>ŘIDIČI</span></a></h2>
          </div>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto align-items-center rightmenu info">
          <b-nav-item v-if="!this.$auth.loggedIn">
            <router-link :to="{ name: 'prihlaseni'}">
              {{ $t('app.sign-in-up') }}
            </router-link>
          </b-nav-item>

          <b-nav-item v-if="this.$auth.loggedIn" v-b-tooltip.hover :title="$t('app.new-post')" class="edit"
                      right toggle-class="text-warning ">
            <router-link :to="{ name: 'create-blog', params: { id: userId } }">
              <BIconPencilSquare scale="2"></BIconPencilSquare>
              {{ $t('app.new-post') }}
            </router-link>
          </b-nav-item>

          <b-nav-item-dropdown v-if="this.$auth.loggedIn" class="sign-out" right
                               toggle-class="text-warning ">
            <template v-slot:button-content>
              <BIconPersonCircle scale="2"></BIconPersonCircle>
            </template>

            <b-dropdown-item>
              <router-link :to="{ name: 'user-profile', params: { id: userId } }"
                           class="dropdown-item p-0">
                {{ $t('app.my-profile') }}
              </router-link>
            </b-dropdown-item>

            <b-dropdown-item>
              <router-link :to="{ name: 'update-profile', params: { id: userId }}"
                           class="dropdown-item p-0">
                {{ $t('app.update-profile') }}
              </router-link>
            </b-dropdown-item>

            <b-dropdown-item v-if="canWriteArticles">
              <router-link :to="{ name: 'articles'}" class="dropdown-item p-0">
                {{ $t('page-title.articles') }}
              </router-link>
            </b-dropdown-item>

            <b-dropdown-item class="sign-out-account" href="#0" v-on:click="signMeOut()">
              {{ $t('app.sign-out') }}
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-navbar>
      <infoBox></infoBox>
      <!-- <b-button v-if="updateExists"
                class="w-100 fixed-top bg-warning text-dark rounded-0 border-warning"
                @click="refreshApp">
        {{ $t('app.update') }}
      </b-button> -->
    </header>
    <main class="main-w-h">
      <Nuxt />
    </main>
       <CookiesBox @cookiePreferenceChange="handleCookies($event)" />
    <FooterBottom class="mt-3" />
  </div>
</template>

<script>
import {
  BIconPersonCircle,
  BIconInfoCircle,
  BIconPencilSquare,
  BNavbar,
  BNavbarNav,
  BNavItemDropdown,
  BDropdownItem,
  BNavItem
  // BButton
} from 'bootstrap-vue';
import FooterBottom from '../components/layout/FooterBottom.vue';
// import update from './modules/mixins/update';
// import InfoBox from '../../components/molecules/InfoBox.vue';
import InfoBox from "../components/molecules/InfoBox.vue";
import CookiesBox from "../components/molecules/CookiesBox.vue";

export default {
  name: 'App',
  components: {
    // BButton,
    BIconPersonCircle,
    BIconInfoCircle,
    BIconPencilSquare,
    BNavbar,
    BNavbarNav,
    BNavItemDropdown,
    BDropdownItem,
    BNavItem,
    CookiesBox,
    InfoBox,
    FooterBottom
  },
  // mixins: [update],
  computed: {
    authorized() {
      return true; // this.$store.getters.IS_AUTHORIZED;
    },
    userId() {
      return true; //  this.$store.getters.USER_ID;
    },
    nickname() {
      return true; //  this.$store.getters.USER_NICKNAME;
    },
    canWriteArticles() {
      return true; //  this.$store.getters.IS_STAFFER || this.$store.getters.IS_EDITOR_IN_CHIEF;
    }
  },
  created() {
    // this.$store.dispatch('LOAD_USER');
  },
  methods: {
    makeToast() {
      this.$bvToast.toast('Toast body content', {
        title: 'Update',
        variant: 'success',
        solid: true
      });
    },
    signMeOut() {
      // this.$store.dispatch('SIGN_USER_OUT');
      // if (this.$route.path === '/') {
      //   this.$root.$emit('sign-out');
      // } else {
      //   this.$router.push({ name: 'home' });
      // }
    },
    handleCookies(preferences) {
      // gtag('consent', 'update', {
      //   ad_storage: preferences.ad ? 'granted' : 'denied',
      //   analytics_storage: preferences.analytics ? 'granted' : 'denied',
      //   personalization_storage: preferences.personalization ? 'granted' : 'denied',
      // });
    },
    manageCookies() {
      // this.$store.commit('SHOW_COOKIES_DIALOG', true);
    }
  }
};
</script>

<style lang="scss">
.header {
  background-color: #343a40 !important;
  min-height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;

  &__logo {
    max-width: 60px;
  }

  &__text {
    margin-left: 12px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    @media screen and (max-width: 550px) {
      display: none;
    }

    &-yellow {
      text-transform: uppercase;
      color: #e0a800;
      font-size: 16px;
      transition: all ease 0.3s;
    }

    &-white {
      text-transform: uppercase;
      color: #FFFFFF;
      font-size: 11px;
      transition: all ease 0.3s;

      &:hover {
        color: #FFF;
      }
    }
  }

  &__registration {
    color: #e0a800;
    font-size: 16px;
    transition: all ease 0.4s;
    &:hover {
        color: #FFF;
      }
  }
}

.app-title {
  font-family: 'Amatic SC', cursive !important;
  font-style: normal;
  font-weight: 700;
  font-size: 32px !important; 
  line-height: 40px;
  letter-spacing: 0.1em;
}
.app-title span {
  color: #e0a800 !important;
  font-size: 32px;

  a {
    color: #777a7c !important;
  }
}

.brand-pic {
  margin: 0;
  padding: 0;
  display: block;
  a {
    padding: 0;
    width: 60px;
  }
  img {
    width: 100%;
  }
}

@media (min-width: 1920px) {
  svg {
    font-size: 17px;
  }
  .brand-pic a {
    width: 90px;
  }
  .brand-pic img {
    width: 100%;
    margin-right: 15px;
  }
}

@media (max-width: 767px) {
  h2 {
    font-size: 1.3rem;
  }
  .brand-pic {
    width: 50px;
    img {
      width: 90%;
    }
  }
  .title-tag {
    padding-right: 10px;
  }
  .no-padding ul.nav-tabs {
    border-color: #f3f3f3;
    li {
      a {
        padding: 0.5rem 1rem;
      }
    }
  }
  .w-75 {
    max-width: 100%;
    width: 100% !important;
  }
}

.main-w-h {
  width: 100vw;
  min-height: 67vh;
}
</style>