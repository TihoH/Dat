<template>
    <form class="p-3 bg-gray-200 rounded-2xl flex flex-col gap-2">
        <p>
            <span>Старий пароль</span>
            <input type="text" name="" id="">
        </p>
        <p>
            <span>Новий пароль</span>
            <input type="text" name="" id="">
        </p>
        <p>
            <span>Підтвердити пароль</span>
            <input type="text" name="" id="">
        </p>
        <div>
      <button class="bg-orange-600 py-2 px-10 text-white rounded-2xl mt-3">
        Підтвердити
      </button>
    </div>
    </form>
</template>

<script setup>

</script>

<style lang="scss" scoped>
p{
    display: flex;
    flex-direction: column;

    input{
        max-width: 300px;
        height: 35px;
        border-radius: 20px;
        padding: 0px 10px;
    }
}
</style>