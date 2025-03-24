<template>
  <div
    class="flex items-center cursor-pointer mt-4"
    @mouseenter="isHover"
    @mouseleave="isHover"
  >
    <!-- <img :src="`/public/images/icons/${icon}.png`" alt="" :width="iconSize" /> -->
    <img :width="iconSize" :src="`/images/icons/${icon}.png`" />
    <div
      class="ml-3 font-semibold"
      :class="textIsHover ? 'text-white' : 'text-gray-400'"
    >
      <h2 :class="pageUrl == route.path ? 'text-white' : ''">{{ title }}</h2>
    </div>
  </div>
</template>

<script setup>
import { toRefs, watchEffect, ref } from "vue";
import { RouterLink, useRoute } from "vue-router";

const props = defineProps({
  iconString: String,
  pageUrl: String,
  title: String,
  iconSize: Number,
});
let icon = ref(null);
let textIsHover = ref(false);
const route = useRoute();
const { iconString, pageUrl, title, iconSize } = toRefs(props);

watchEffect(() => {
  if (route.path == pageUrl.value) {
    icon.value = iconString.value + "-active";
    textIsHover.value = true;
  } else {
    icon.value = iconString.value + "-inactive";
    textIsHover.value = false;
  }
});

const isHover = () => {
  if (icon.value == iconString.value + "-active") return;

  if (icon.value == iconString.value + "-inactive") {
    icon.value = iconString.value + "-inactive-hover";
    textIsHover.value = true;
  } else {
    icon.value = iconString.value + "-inactive";
    textIsHover.value = false;
  }
};
</script>

<style lang="scss" scoped></style>
