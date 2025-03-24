<template>
  <div>
    <TopBar />
    <SideBar />
    <div class="pt-[300px] pl-[300px]"><RouterView /></div>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import SideBar from "./components/SideBar.vue";
import TopBar from "./components/TopBar.vue";
</script>

<style lang="scss" scoped></style>
