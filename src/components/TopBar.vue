<template>
  <div
    id="topBar"
    class="w-[calc(100%-240px)] h-[60px] bg-[#101010] bg-opacity-80 fixed right-0 top-0 flex flex-row justify-between items-center px-5"
  >
    <div id="topBar-button" class="relative top-1">
      <button type="button" class="bg-black rounded-full mr-5">
        <ChevronLeft fillColor="#FFFFFF" size="30" />
      </button>
      <button type="button" class="bg-black rounded-full">
        <ChevronRight fillColor="#FFFFFF" size="30" />
      </button>
    </div>

    <div
      id="user"
      class="flex justify-center items-center bg-black rounded-full cursor-pointer"
    >
      <div class="rounded-full px-2 py-1">
        <img
          src="https://yt3.ggpht.com/ytc/AIdro_miF8x8XG_D8Vrgsk1zX1uTpZBG3sXh6tEjd8X5tJDH2RgR6mec5Q13ZETo_U-sNFQYDA=s108-c-k-c0x00ffffff-no-rj"
          alt=""
          class="w-5 h-5 rounded-full mr-2"
        />
      </div>
      <h1 class="text-white font-bold text-sm">Jonh Weeks Dev</h1>
      <button type="button" class="bg-black rounded-full">
        <ChevronDown fillColor="#FFFFFF" size="30" />
      </button>
    </div>
  </div>
</template>

<script setup>
import ChevronRight from "icons/ChevronRight.vue";
import ChevronDown from "icons/ChevronDown.vue";
import ChevronLeft from "icons/ChevronLeft.vue";
</script>

<style lang="scss" scoped></style>
