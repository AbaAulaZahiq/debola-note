<script setup>
import { useRouter, RouterView } from 'vue-router'
import { reactive, render } from 'vue'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import router from './router';

let notes = reactive([])
let notesExist = localStorage.getItem('notes_debola')
if(!notesExist){
  let storedNotes = [
    {
        id : 1,
        title : 'modi cum aliquid suscipit dignissimos aperiam eum ipsam sint ',
        content : 'Lorem ipsumt maxime itaque veniam modi cum aliquid suscipit dignissimos aperiam eum ipsam sint provident et debitis aut nemo error, quam quae.'
    },
    {
        id : 2,
        title : 'modi sam sint ',
        content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto fugit maxime itaque t maxime itaque veniam modi cum aliquid suscipit veniam modi cum aliquid suscipit dignissimos aperiam eum ipsam sint provident et debitis aut nemo error, quam quae.'
    },
    {
        id : 3,
        title : 'modi cum  eum ipsam sint ',
        content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto fugit maxime itaque veniam modi cum aliquid suscipit dignissimos aperiam eum ipsam sint provident et debitis aut nemo error, quam quae.'
    },
    {
        id : 4,
        title : 'Musik penenang jiwa ',
        content : 'aku jatuh cinta pada nada, irama, dan makna. Semua bersatu padu dalam suara indah. Menghanyutkan jiwa, melebur lara'
    }
  ]
  localStorage.setItem('notes_debola', JSON.stringify(storedNotes))
  Object.assign(notes, storedNotes) //ganti nilai dengan object assign supaya reactive tetap berjalan
}else{
  Object.assign(notes, JSON.parse(notesExist)) //ganti nilai dengan object assign supaya reactive tetap berjalan
  localStorage.setItem('notes_debola', notesExist)
}

function searchNote() {
  let searchInput = document.getElementById('search-input')
  let notesFromLS = localStorage.getItem('notes_debola')? JSON.parse(localStorage.getItem('notes_debola')) : []
  let newNotes = notesFromLS.filter( note => {
    note.title.includes(searchInput.value)
  })
}

function saveNote(id) {
  let inputs = document.querySelectorAll('textarea')
  let data = {
    title : inputs[0].value,
    content : inputs[1].value,
  }
  if(id == 'add'){
    data['id'] = Math.round(Math.random() * 100000)
    notes.push(data)
    localStorage.setItem('notes_debola', JSON.stringify(notes))
    router.push({ name: 'note', params: { id : data.id } })   
  }else{  
    notes = notes.map(note => {
      if(note.id == id){
        note.title = data.title
        note.content = data.content
      }

      return note
    });
  }
  localStorage.setItem('notes_debola', JSON.stringify(notes))
  renderNotes()
}

function renderNotes() {
  //ambil notes yag tersedia saat ini
  let notesExist = localStorage.getItem('notes_debola')? JSON.parse(localStorage.getItem('notes_debola')) : []
  notes.value = notesExist
}


function deleteNote(id) {
  let confimation = confirm('Anda yakin ingin menghapus catatan ini?')
  if(!confimation)return false
  
  let notesFromLS = localStorage.getItem('notes_debola')? JSON.parse(localStorage.getItem('notes_debola')) : []
  notes = notesFromLS.filter(note => note.id != id)
  localStorage.setItem('notes_debola', JSON.stringify(notes))
  router.push('/')
}
</script>

<template>
  <HeaderComponent :searchNote="searchNote" />

  <!--:key="$route.fullPath" digunakan untuk merender ulang komponen beserta parameter di url-->
  <RouterView :key="$route.fullPath" :notes="notes" :deleteNote="deleteNote" :saveNote="saveNote" />
  <FooterComponent/>
</template>

<style scoped>

@media (min-width: 1024px) {

}
</style>
