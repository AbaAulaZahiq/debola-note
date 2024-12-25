<script setup>
    import CardComponent from './CardComponent.vue'
    import AddCardComponent from './AddCardComponent.vue'
    import { defineProps } from 'vue'
    
    let {notes} = defineProps({notes : Array})

    function getBackgroundCard() {
        let backgroundClass = ['bg-yellow', 'bg-orange', 'bg-red', 'bg-blue', 'bg-green', 'bg-purple']
        return backgroundClass[Math.floor(Math.random() * 5)]
    }
    
</script>
<template>    
    <div>
        <h1 class="subtitle">Notes</h1>
        <div class="container">
            <CardComponent v-for="note in notes" :data="note" :class="getBackgroundCard()" />
            <AddCardComponent/>
        </div>
    </div> 
</template>

<style lang="css">
   .subtitle{
        font-weight: 500;
        font-size: 50px
   }
   .container{
        margin-top: 30px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px
   }

   
   @media only screen and (max-width : 800px){
        .container{
            grid-template-columns: repeat(3, 1fr);
        }
   }

   @media only screen and (max-width : 700px){
        .container{
            grid-template-columns: repeat(2, 1fr);
        }
   }
   
   @media only screen and (max-width : 500px){
        .container{
            grid-template-columns: repeat(1, 1fr);
        }
   }
</style>