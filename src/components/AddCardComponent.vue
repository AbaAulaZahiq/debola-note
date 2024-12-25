<template>
    <div class="card-note" id="add-card-note">
        <h5>Buat Catatan Baru</h5>
        <p>Ceritakan hal menarik hari ini, atau buat daftar belanjaan untu hari esok.</p>
        <div class="info-bar">
            <router-link :to="`/add`">
                <div class="add-btn">Baru</div>
            </router-link>
        </div>
    </div>
</template>

<style lang="css">
    #add-card-note{
        min-width: 240px;
        max-width: 300px;
        padding: 20px;
        border-radius: 20px;    
        color:  black;
        margin-bottom: 30px;
        position: relative;
        padding-bottom: 100px;
        background: transparent;
        border: 1px dashed black;
    }
    #add-card-note h5{
        font-size: 19px;
        font-weight: 600;
        max-height: 55px;
        overflow: hidden;
        margin-bottom: 10px;
    }
    
    #add-card-note h5{
        font-weight: 600;
        height: 90px;
        overflow: hidden;
    }

    #add-card-note .info-bar{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-top: 30px;
        position: absolute;
        bottom: 0; left: 0;
        padding: 20px;
    }
    
   @media only screen and (max-width : 500px){
        #add-card-note {
            max-width: 100%;
            min-width: 100%;
        }
   }
</style>