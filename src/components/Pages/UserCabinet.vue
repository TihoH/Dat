<template>
  <div class="my-container-pages">
    <Title>
        Особистий кабінет
    </Title>
    <div class="flex">
        <SidebarCabinet  class="sidebar-cabinet" :isActiveMenu="isActiveMenu" @activeMenu="activeMenuFunc" />
        <div class="ml-5 w-full">
            <MyCabinet @emitClicklink="emitClicklink" class="styleLink" v-if="isActiveMenu === 1" />
            <YourOrders v-if="isActiveMenu === 2" />
            <InfoUser v-if="isActiveMenu === 3"  />
            <UserPassword  v-if="isActiveMenu === 4"/>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Title from '../../components/Title.vue'
import SidebarCabinet from '../UserCabinet/SidebarCabinet.vue';
import MyCabinet from '../../components/UserCabinet/MyCabinet.vue'
import YourOrders from '../../components/UserCabinet/YourOrders.vue'
import InfoUser from '../UserCabinet/InfoUser.vue';
import UserPassword from '../UserCabinet/UserPassword.vue';

const isActiveMenu = ref(1)

function activeMenuFunc(link){
    isActiveMenu.value = link.activeMenu
}

function emitClicklink(item){
    isActiveMenu.value = item.link
    console.log(isActiveMenu.value)
}
</script>

<style lang="scss" scoped >
.sidebar-cabinet{
    width: 100%;
    max-width: 300px;
    height: 300px;
}

</style>