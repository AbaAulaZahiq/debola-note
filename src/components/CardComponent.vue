<script setup>
    import { defineProps } from 'vue'
    const props = defineProps(['data']);
</script>
<template>
    <div class="card-note">
        <h5>{{props.data.title}}</h5>
        <p>{{props.data.content}}</p>
        <div class="info-bar">
            <p class="date-bar">2023-04-05</p>
            <router-link :to="`/${props.data.id}`">
                <div class="edit-btn">Edit</div>
            </router-link>
        </div>
    </div>
</template>

<style lang="css">
    .card-note{
        min-width: 150px;
        max-width: 300px;
        padding: 20px;
        border-radius: 20px;    
        color:  black;
        margin-bottom: 30px;
        position: relative;
        padding-bottom: 100px;
    }
    .card-note h5{
        font-size: 19px;
        font-weight: 600;
        max-height: 40px;
        overflow: hidden;
        margin-bottom: 10px;
    }
    
    .card-note h5{
        font-weight: 600;
        height: 90px;
        overflow: hidden;
    }

    .card-note .info-bar{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-top: 30px;
        position: absolute;
        bottom: 0; left: 0;
        padding: 20px;
    }
    
    .card-note .edit-btn{
        color: white;
        padding: 8px 30px;
        cursor: pointer;
        background-color: #181818;
        border-radius: 50px;
    }

    
   @media only screen and (max-width : 500px){
        .card-note{
            max-width: 100%;
            min-width: 100%;
        }
   }
</style>