<template>
  <div
    id="side-bar"
    class="w-[240px] fixed left-0 top-0 h-full bg-black px-4 py-5"
  >
    <img src="/public/images/icons/spotify-logo.png" alt="" class="w-40" />
    <div class="mt-8"></div>
    <RouterLink to="/">
      <MenuItem
        iconString="home"
        pageUrl="/"
        title="Home"
        :iconSize="23"
      ></MenuItem>
    </RouterLink>
    <RouterLink to="/search">
      <MenuItem
        iconString="search"
        pageUrl="/search"
        title="Search"
        :iconSize="23"
      ></MenuItem>
    </RouterLink>
    <RouterLink to="/library">
      <MenuItem
        iconString="library"
        pageUrl="/library"
        title="Your Library"
        :iconSize="23"
      ></MenuItem>
    </RouterLink>

    <div class="mt-10"></div>
    <MenuItem
      iconString="playlist"
      pageUrl="/play"
      title="Craete Playlist"
      :iconSize="23"
    />
    <MenuItem
      iconString="liked"
      pageUrl="/liked"
      title="Liked Songs"
      :iconSize="23"
    />

    <div class="w-full h-1 border-t-[1px] border-gray-700 mt-5"></div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import MenuItem from "./MenuItem.vue";
</script>

<style lang="scss" scoped></style>
