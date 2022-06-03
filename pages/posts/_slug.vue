<template>
  <div>
    <div v-if="pending" class="_loading">
      <div class="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div v-else class="relative">
      <div class="info-box w-full h-12" id="infoBox">
        <h4>
          The aim of the site is to prevent traffic accidents through the exchange of views and education.
          <nuxt-link to="/">Our missions</nuxt-link>
        </h4>
        <img @click="closeInfoBox()" class="close-icon" src="~/static/images/close.svg" alt="">
      </div>
      <socials :title="postSingle.data.info.caption" :url="urlPage" />
      <div class="container">
        <div class="grid grid-cols-2">
          <div class="col-span-2">
            <div class="single pt-3">
              <h4 class="single__title">{{ postSingle.data.info.caption }}</h4>
              <div class="single__informs">
                <img class="max-w-[26px]" src="~/static/images/userava.svg" alt="">
                <h5 class="text-[#777a7c] font-normal text-sm ml-1 mt-2">{{ postSingle.data.info.author.nickname }}</h5>
                <img class="max-w-[26px] ml-4 mr-1" src="~/static/images/clock.svg" alt="">
                <h4 class="font-normal text-[#777a7c] text-sm mt-2">{{
                    $moment(postSingle.data.info.date).format("DD.M.")
                }}</h4>
                <img class="max-w-[26px] ml-3 mr-1" src="~/static/images/comment.svg" alt="">
                <h4 class="font-normal text-[#777a7c] text-sm mt-2">{{ (postSingle.data.comments.count) }}</h4>
              </div>
              <div class="divider w-full h-1 bg-[#AEB3B7] my-[4px]"></div>
              <div class="static-data" v-html="postSingle.data.data.content"></div>

              <div class="notification notification-primary">
                You must have been interested in the article when you finished reading it. Will you help us? We need
                more readers. Recommend the server <a href="https://www.mezinamiridici.cz/"> Between Us Drivers </a> to
                friends,
                share <a href="">this article, </a> add <a href=""> our RSS </a> to the
                reader. If you have a website, insert a link to our server <a href="https://www.mezinamiridici.cz/">
                  Between Us Drivers. </a>
                Thank you in advance.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState } from "vuex";
import Socials from "../../components/Socials.vue";
export default {
  name: "IndexPage",
  data() {
    return {
      defaultSlug: this.$route.params.slug,
      pending: undefined,
      urlPage: ''
    };
  },
  computed: {
    ...mapState({
      postSingle: (state) => state.post.postSingle,
    }),
  },
  async mounted() {
    this.urlPage =  window.location.href,

      this.$fetch();
  },
  async fetch() {
    this.pending = true;
    await this.$store.dispatch("post/fetchPostSingle", { slug: this.defaultSlug })
      .finally(() => (this.pending = false))
  },
  methods: {
    closeInfoBox() {
      document.getElementById("infoBox").classList.add("hidden");
    }
  },
  components: { Socials }
}
</script>

<style lang="scss">
.info-box {
  background: #fff;
  width: 100%;
  text-align: center;
  padding: 12px 5px;
  -webkit-box-shadow: #c1c1c1 1px 1px 10px;
  box-shadow: 1px 1px 10px #c1c1c1;
  position: relative;
  font-weight: 400;
  display: flex;
  align-items: center;

  h4 {
    font-size: 16px;
    margin: 0 auto;
    width: 85%;

    @media screen and (max-width: 700px) {
      font-size: 13px;
    }
  }

  .close-icon {
    margin-left: 20px;
    max-width: 16px;
  }

  a {
    color: #777a7c;
  }


}

.hidden {
  display: none;
}

// single 
.single {

  @media screen and (max-width: 700px) {
    max-width: 350px;
    margin: 0 auto;

  }


  @media (min-width: 1200px) and (max-width: 1244px) {
    padding-left: 20px;

  }


  @media (min-width: 991px) and (max-width: 1062px) {
    padding-left: 40px;

  }

  @media (min-width: 768px) and (max-width: 834px) {
    padding-left: 40px;

  }

  // .single__title
  &__title {
    font-size: 21px;
    text-decoration: none;
    color: #131518;
    margin: 0 0 10px;
  }

  // .single__informs
  &__informs {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #dee0e1;
    margin-bottom: 20px !important;
    padding: 0 0 5px;
  }

  .static-data {
    >p {
      font-size: 14px;
      text-indent: 10px;
      margin: 10px 0;
    }

    >div iframe {
      width: 55%;
      min-height: 450px;
      margin: 0 auto;

      @media screen and (max-width: 700px) {
        width: 100%;
        min-height: 250px;

      }
    }

    >div img {
      vertical-align: middle;
      max-width: 600px;
      margin: 0 auto;
      object-fit: cover;
      height: auto;


      @media screen and (max-width: 800px) {
        max-width: 350px;
      }
    }

    >div ul {
      margin: 8px 0;
    }

    >div table {
      margin: 15px 0;
      max-width: 90%;
    }

  }

  .notification {
    padding: 0.75rem 1.25rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    margin: 20px 0;

    a {
      color: #777a7c;
    }
  }

  .notification-primary {
    color: #111315;
    background-color: #d3d3d4;
    border-color: #c1c2c3
  }

  .spinner {
    width: 14.4px;
    height: 14.4px;
    animation: spinner-z355kx 0.8s infinite linear;
    border-radius: 14.4px;
    box-shadow: 36px 0px 0 0 #f3f32d, 22.3px 28.1px 0 0 #f3f32d, -7.9px 34.9px 0 0 #f3f32d, -32.4px 15.5px 0 0 #f3f32d, -32.4px -15.5px 0 0 #f3f32d, -7.9px -34.9px 0 0 #f3f32d, 22.3px -28.1px 0 0 #f3f32d;
  }

  @keyframes spinner-z355kx {
    to {
      transform: rotate(360deg);
    }
  }

  .spinner {
    width: 14.4px;
    height: 14.4px;
    animation: spinner-z355kx 0.8s infinite linear;
    border-radius: 14.4px;
    box-shadow: 36px 0px 0 0 #f3f32d, 22.3px 28.1px 0 0 #f3f32d, -7.9px 34.9px 0 0 #f3f32d, -32.4px 15.5px 0 0 #f3f32d, -32.4px -15.5px 0 0 #f3f32d, -7.9px -34.9px 0 0 #f3f32d, 22.3px -28.1px 0 0 #f3f32d;
  }

  @keyframes spinner-z355kx {
    to {
      transform: rotate(360deg);
    }
  }
}
</style>

<!-- 1g3g1v0cdoa   -->