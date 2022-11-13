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
      <!-- <pre>{{postSingle.data}}</pre> -->
      <div class="info-box" id="infoBox">
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
              <div class="post-details">
              <div class="post-author">
                <BIconPersonCircle scale="1"></BIconPersonCircle>
                <span><ProfileLink :profile="postSingle.data.info.author"/></span>
              </div>
              <div class="post-time">
                <BIconCalendarRange scale="1"></BIconCalendarRange>
                <span><Date :date="postSingle.data.info.date" format="dynamicDate"/></span>
              </div>
              <div class="post-rating">
                <BIconCollection scale="1"></BIconCollection>
                <!-- <span> {{ postSingle.data?.votes?.total }}</span> -->
              </div>
              <div class="post-comments">
                <BIconChatTextFill scale="1"></BIconChatTextFill>
                <nuxt-link to="#comments">
                  <span>{{ postSingle.data.comments.count }}</span>
                  <span v-if="postSingle.data.comments.count > 0">&nbsp; <Date :date="postSingle.data.comments.last" format="dynamicDateTime"/></span>
                </nuxt-link>
              </div>
              <div class="post-tags" v-if="hasTags">
                <BIconTags scale="1"></BIconTags>
                <router-link v-for="tag in tags" :key="tag" :to="{ name: 'tag', params: { tag: tag } }">
                  #{{ tag }}
                </router-link>
              </div>
            </div>
              <div class="divider w-full h-1 bg-[#AEB3B7] my-[4px]"></div>
              <div class="static-data mt-3" v-html="postSingle.data.data.content"></div>
            </div>
          </div>
        </div>
    <Comments :itemId="postSingle.data._id" />
      </div>
    </div>
    <!-- <pre>{{comments}}</pre> -->
  </div>
</template>

<script>

import { mapState } from "vuex";
import ProfileLink from "../../components/molecules/ProfileLink.vue";
import Date from "../../components/atoms/Date.vue";
import Socials from "../../components/Socials.vue";
import Comments from "../../components/organisms/Comments.vue";
export default {
  name: "IndexPage",
    computed: {
      ...mapState({
        postSingle: (state) => state.post.postSingle,
        comments: (state) => state.comments.comments
      }),
    hasTags() {
      return this.tags !== null && this.tags.length > 0;
    },
    tags() {
      return this.poll !== null && this.postSingle.data.info.tags;
    },
    },
  data() {
    return {
      defaultSlug: this.$route.params.slug,
      pending: undefined,
      urlPage: ''
    };
  },
  async mounted() {
    // console.log(this.postSingle.data._id, 'single')
    this.urlPage = window.location.href,
      this.$fetch();
  },
  async fetch() {
    this.pending = true;
    await Promise.allSettled([
    await this.$store.dispatch("post/fetchPostSingle", { slug: this.defaultSlug }),
    // await this.$store.dispatch("comments/FETCH_COMMENTS",{ id: this.postSingle.data._id }),
    ])
      .finally(() => (this.pending = false))
  },
  methods: {
    closeInfoBox() {
      document.getElementById("infoBox").classList.add("hidden");
    }
  },
  components: { Socials, Comments, ProfileLink, Date }
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
  height: 48px;

  h4 {
    font-size: 16px;
    margin: 0 auto;
    width: 85%;

    @media screen and (max-width: 700px) {
      font-size: 13px;
    }
  }

  .close-icon {
    cursor: pointer;
    margin: 0 20px;
    max-width: 16px;
  }

  a {
    color: #777a7c;
  }


}

.hidden {
  display: none;
}


.post-details {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  font-size: 13px;
  margin: 10px 0;
  border-bottom: 1px solid #e0e0e0;
}

.post-time {
  color: #777A7C;
}

.item-footer {
  background-color: #fff;
  padding: 10px 0px 5px;
  color: #777A7C;
  font-weight: 600;
  margin: 0px 0;
  width: 100%;
}

.item-footer a {
  color: #777A7C;
  font-weight: 400;
}
.item-footer a:hover {
  color: var(--link-blue);
}

.item-footer svg {
  margin-right: 8px;
  font-size: 15px;
}

.post-time, .post-author, .post-rating, .post-comments {
  display: flex;
  align-items: center;
  font-weight: 400;
  margin-right: 20px;
  gap: 5px;
}

.post-tags a{
    margin: 0 2px 0 0;
    font-size: 13px;
    border-radius: 3px;
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
    margin: 20px 0 !important;
    padding: 0 0 5px;
  }

  &__ava-image {
    max-width: 26px;
  }

  &__nickname {
    color: #777a7c;
    font-weight: 400;
    font-size: 12px;
    margin-left: 4px !important;
    margin-top: 8px;
  }

  &__clock-image {
    max-width: 26px;
    margin-left: 4px;
    margin-right: 4px;
  }

  &__date {
    font-weight: 400;
    color: #777a7c;
    font-size: 12px;
    margin-top: 8px;
  }

  &__comment-image {
    max-width: 26px;
    margin-left: 12px;
    margin-right: 4px;
  }

  &__comment {
    font-weight: 400;
    color: #777a7c;
    font-size: 12px;
    margin-top: 8px;
  }

  .static-data {
   div table {
      border: 1px solid #DBDBE2;
      border-radius: 3px;
      position: relative;
      width: 100%;
      box-sizing: border-box;
      font-size: 14px;
      table-layout: auto;
      margin-top: 12px;
    }

  div  table tr th {
      vertical-align: middle;
    }

  div table tr td {
      border: 1px solid #DBDBE2;
      vertical-align: middle;
    }

    >p {
      font-size: 14px;
      text-indent: 10px;
      margin: 10px 0;
    }

    >div iframe {
      width: 85%;
      min-height: 450px;
      margin-left: 5% !important;

      @media screen and (max-width: 700px) {
        width: 100%;
        min-height: 250px;

      }
    }

    >div img {
      vertical-align: middle;
      max-width: 600px;
      margin: 0 auto !important;
      object-fit: cover;
      height: auto;


      @media screen and (max-width: 800px) {
        max-width: 350px;
      }
    }

    >div ul {
      margin: 8px 0 !important;
    }


  }

  .notification {
    padding: 0.75rem 1.25rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    margin: 20px 0 0 0;

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