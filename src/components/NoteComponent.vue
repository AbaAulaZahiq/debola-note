<script setup>
    import {useRoute} from "vue-router";
    import { defineProps, ref, onMounted } from 'vue'
    
    const {deleteNote, saveNote, id : idtest} = defineProps({
        deleteNote : Function,
        saveNote : Function,
        id : String
    })

    const route = useRoute();
    const id = route.params.id;
    const textarea1 = ref(null); // untuk referensi textarea
    const textarea2 = ref(null); // untuk referensi textarea

    function adjustHeight1() {
        if (!textarea1.value) return false
        textarea1.value.style.height = 'auto'; // Reset tinggi agar dapat menghitung tinggi yang baru
        textarea1.value.style.height = `${textarea1.value.scrollHeight}px`; // Set tinggi sesuai dengan tinggi konten
    }
    function adjustHeight2() {
        if (!textarea2.value) return false
        textarea2.value.style.height = 'auto'; // Reset tinggi agar dapat menghitung tinggi yang baru
        textarea2.value.style.height = `${textarea2.value.scrollHeight}px`; // Set tinggi sesuai dengan tinggi konten
    }
    

    let note = []
    if(id != 'add'){
        let notes = localStorage.getItem('notes_debola')? JSON.parse(localStorage.getItem('notes_debola')) : []
        note = notes.filter(n => n.id == id)[0]
    }

    onMounted(() => {
      if (textarea1.value) {
        textarea1.value.value = note.title ?? ''
        adjustHeight1()
      }
      
      if (textarea2.value) {
        textarea2.value.value = note.content ?? ''
        adjustHeight2()
      }
    });

</script>
<template>
    <div>
        <textarea @input="adjustHeight1" ref="textarea1" placeholder="Musik Penenang Jiwa"></textarea>
        <textarea @input="adjustHeight2" ref="textarea2" placeholder="Yang kusukai dari musik ialah mampu menenangkan pikiran yang bertengkar..."></textarea>
        <div class="btn-group">
            <router-link to="/" class="btn" id="back-btn">Kembali</router-link>
            <div class="btn-group">
                <button type="button" class="btn" id="delete-btn" v-if="id != 'add'" @click="deleteNote(id)">Hapus</button>
                <button type="button" class="btn" id="save-btn" @click="saveNote(id)">Simpan</button>
            </div>
        </div>
    </div>
</template>

<style lang="css">
    textarea{
        outline: none;
        border: none;
        width: 100%;
        height: auto;
        margin-bottom: 30px;
        border-radius: 10px;
        padding: 10px;
        resize: none;
    }
    textarea:first-child{
        font-size: 40px;
        font-weight: bold;
    }
    textarea:nth-child(2){
        font-size: 20px;
    }
    textarea:focus{
        outline: 1px solid black;
    }
    .btn-group{
        display: flex;
        justify-content: space-between;
        gap: 10px;
    }
    .btn{
        color: white;
        padding: 10px 30px;
        cursor: pointer;
        border-radius: 50px;
        outline: none; border: none;
    }
    
    #back-btn{
        background: transparent;
        color: black;
    }
    #delete-btn{
        background: #e74e4e;
    }
    #save-btn{
        background: #000;
    }

    @media only screen and (max-width: 500px){
        .btn-group{gap: 5px;}
        .btn{padding: 10px 20px;}
    }
</style>