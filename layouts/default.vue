<template>
  <div>
    <header>
      <b-navbar toggleable="sm" type="dark" variant="dark">
        <b-nav-item class="brand-pic" href="/">
          <nuxt-img
            :alt="$t('app.logo-alt')"
            class="d-inline-block align-top brand"
            src="/images/icons/logo.png"
          />
        </b-nav-item>

        <b-navbar-nav class="d-none d-sm-block d-sm-dark">
          <div class="d-inline-flex flex-column title-tag">
            <h2><NuxtLink to="/" class="text-white">{{ $t('app.name') }}</NuxtLink></h2>
            <span class="text-white">{{ $t('app.slogan') }}</span>
          </div>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto align-items-center rightmenu info">
          <b-nav-item v-if="!authorized">
            <NuxtLink to="/prihlaseni">
              {{ $t('app.sign-in-up') }}
            </NuxtLink>
          </b-nav-item>

          <b-nav-item
            v-if="authorized"
            v-b-tooltip.hover
            :to="`/p/${userId}/b/novy`"
            :title="$t('app.new-post')"
            class="edit"
            right
            toggle-class="text-warning "
          >
            <BIconPencilSquare scale="2" />
          </b-nav-item>

          <b-nav-item-dropdown
            v-if="authorized"
            class="sign-out"
            right
            toggle-class="text-warning "
          >
            <template #button-content>
              <BIconPersonCircle scale="2" />
            </template>

            <b-dropdown-item
              :to="`/p/${userId}`"
              class="dropdown-item p-0"
            >
              {{ $t('app.my-profile') }}
            </b-dropdown-item>

            <b-dropdown-item
              :to="`/p/${userId}/uprava`"
              class="dropdown-item p-0"
            >
              {{ $t('app.update-profile') }}
            </b-dropdown-item>

            <b-dropdown-item
              v-if="canWriteArticles"
              to="/redakce"
              class="dropdown-item p-0"
            >
              {{ $t('page-title.articles') }}
            </b-dropdown-item>

            <b-dropdown-item
              href="#0"
              class="sign-out-account"
              @click="signMeOut()"
            >
              {{ $t('app.sign-out') }}
            </b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right toggle-class="text-warning">
            <template #button-content>
              <BIconInfoCircle scale="2" />
            </template>

            <b-dropdown-item href="/o/napoveda">
              {{ $t('app.help') }}
            </b-dropdown-item>
            <b-dropdown-item href="/o/mise">
              {{ $t('app.our-mission') }}
            </b-dropdown-item>
            <b-dropdown-item href="/o/kontakt">
              {{ $t('app.contact') }}
            </b-dropdown-item>
            <b-dropdown-item href="/o/reklama">
              {{ $t('app.advertisement') }}
            </b-dropdown-item>
            <b-dropdown-item href="/o/podminky">
              {{ $t('app.terms') }}
            </b-dropdown-item>
            <b-dropdown-item href="/o/soukromi">
              {{ $t('app.privacy') }}
            </b-dropdown-item>
            <b-dropdown-item href="#0" @click="manageCookies()">
              {{
                $t('app.cookies')
              }}
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-navbar>

      <!--      <info-box />-->

      <!--      <b-button-->
      <!--        v-if="updateExists"-->
      <!--        class="w-100 fixed-top bg-warning text-dark rounded-0 border-warning"-->
      <!--        @click="refreshApp"-->
      <!--      >-->
      <!--        {{ $t('app.update') }}-->
      <!--      </b-button>-->
    </header>
    <main>
      <Nuxt />
    </main>
    <!--    <CookiesBox @cookiePreferenceChange="handleCookies($event)" />-->
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
// import update from './modules/mixins/update';
// import InfoBox from '@/components/molecules/InfoBox.vue';
// import CookiesBox from '@/components/molecules/CookiesBox.vue';

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
    BNavItem
    // CookiesBox,
    // InfoBox
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
    // makeToast() {
    //   this.$bvToast.toast('Toast body content', {
    //     title: 'Update',
    //     variant: 'success',
    //     solid: true
    //   });
    // },
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
