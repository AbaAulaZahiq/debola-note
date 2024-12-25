<script setup>
    import { defineProps } from 'vue'
    import { useRouter, useRoute } from 'vue-router'
    
    const props = defineProps(['searchNote'])
    const router = useRoute();
</script>
<template>
    <header>
        <h2>Debola Notes</h2>
        <!--<div class="search-bar">
            <input type="text" id="search-input" placeholder="Cari catatan Anda...">
            <div class="" @click="searchNote()">
                <img src="../../public/" alt="">
            </div>
        </div>-->

        <router-link :to="`/add`" v-if="router.path == '/'">
            <div class="add-btn">Baru</div>
        </router-link>
    </header>
</template>

<style lang="css">
    header{
        width: 100%;
        margin-bottom: 30px;
        padding-top: 20px;
        height: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .search-bar{
        width: 300px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .search-bar input{ 
        width: 85%;
        outline: none;
        padding: 10px 20px;
        border: 1px solid rgba(0, 0, 0, .2);
        border-radius: 30px;
    }
    
    .search-bar div{ 
        width: 40px;
        height: 40px;
        padding: 10px;
        border: 1px solid rgba(0, 0, 0, .2);
        border-radius: 50%;
        cursor: pointer;
    }
</style>