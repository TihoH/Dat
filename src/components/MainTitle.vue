<template>
  <div class="main-wrapper flex justify-between relative ">
    <div class="my-container">
      <div
        class="main-wrapper__title h-full flex flex-col justify-center items-start"
      >
       <div>
        <h1 class="font-semibold flex items-center">
          <span
            ><img src="../assets/image/Main/Vector.png" width="30" alt=""
          /></span>
          Аграрный
        </h1>
        <h3 class="title-store__add-icon font-light">інтернет-магазин</h3>
        <p class="my-2">
          Основна сфера діяльності – дистрибуція насіння, засобів захисту
          рослин, мінеральних макро - та мікродобрив
        </p>
       </div>
        <router-link
          to="About"
          class="border py-2 px-10 rounded-xl bg-red-500 text-white hover:bg-transparent hover:border-red-500 hover:text-black transition hover:shadow-xl"
        >
          Про компанію
        </router-link>
      </div>
    </div>
    <img
      class="main-wrapper__bg-right absolute right-0 bottom-0"
      src="../assets/image/Main/MaskGroup.png"
      alt="title image"
    />
  </div>
</template>

<style lang="scss" scoped>
.main-wrapper {
  min-height: 800px;
  background-image: url("../assets/image/Main/bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
}
.main-wrapper__bg-right {
  max-width: 700px;
  width: 50%;
  max-height: 650px;
}
.main-wrapper__title {
  p {
    max-width: 500px;
  }
}
h1 {
  font-size: 50px;
}
h3 {
  font-size: 40px;
}


@media screen and (max-width: 724px) {
  .main-wrapper__bg-right {
    max-width: 700px;
    width: 100%;
    bottom: 80px;
  }
  .main-wrapper__title{
    justify-content: flex-start;
    justify-content: space-between;
  }
  .main-wrapper{
    padding: 20px;
    padding-top: 140px;
  }
}
</style>