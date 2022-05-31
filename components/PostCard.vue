<template>
  <nuxt-link :to="'/posts/' + `${slug}`" class="
  postcard block
  cursor-pointer 
  bg-white 
  w-full
  relative
  h-[300px]">
    <img class="relative w-full h-[180px] object-cover" :src="image" alt="post-image">
    <div class="w-full absolute top-[163px] flex justify-between">
      <span class="bg-white text-[#777a7c] text-xs font-normal py-0 block px-[10px]">{{typeInfo}}</span>
      <span class="bg-white text-[#777a7c] text-xs font-normal py-0 block px-[10px]">{{$moment(day).format("DD.M.")}}</span>
    </div>
    <h4 class="text-[#131518] !my-[10px] !mx-[16px] font-normal text-base line-clamp-2 min-h-[48px]">
      {{title}}
    </h4>
    <div class="w-[95%] h-[1px] bg-[#d5d5d5] mx-auto"></div>
    <div class="w-[95%] mx-auto flex justify-between mt-[10px]">
      <div>
        <div v-if="true" class="flex items-center ">
          <img class="max-w-[26px]" src="~/static/images/userava.svg" alt="">
          <h5 class="text-[#777a7c] font-normal text-sm ml-[3px]">{{author}}</h5>
        </div>
        <div v-else-if="vote"></div>
      </div>
      <div class="flex items-center">
        <img class="max-w-[26px]" src="~/static/images/comment.svg" alt="">
        <h5 class="text-[#777a7c] font-normal text-sm ml-[3px]">{{commentsCount}}</h5>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  data(){
    return {
    }
  },
  props: {
    slug: {default: String},
    typeInfo: {default: String},
    title: {default: String},
    author: {default: String},
    image: {default: String},
    commentsCount: {default: String},
    day: {default: String},
  }
}
</script>

<style lang="scss" scoped>
.postcard {
  transition: 0.2s ease;
  box-shadow: 1px 1px 10px #c1c1c1;
  &:hover{
    transform: scale(1.05);
  }

  img {
    box-shadow: 10px 10px 52px -30px rgba(0, 0, 0, 0.75);
    border: 5px solid #fff;
  }
}
</style>
