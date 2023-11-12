<template>
  <div class="flex justify-center items-center">
    <img src="../assets/image/Main/Vector.png" alt="icon" />
    <h1 class="title m-4">
      <slot></slot>
    </h1>
    <img src="../assets/image/Main/Vector2.png" alt="icon" />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.title {
  font-size: 50px;
}
img {
  height: 35px;
  margin-top: 14px;
}
</style>