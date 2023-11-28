<template>
    <div class=" header">
        <div class="button menu">Menu</div>
        <img src="../assets/Screenshot 2023-11-24 051350.png" alt="ciao">
        <div class="button contact">Contattaci</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>
.header{
    background: #0c0c29;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    margin: 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
}

.button{
    border-radius: 25px;
    padding: 0.2rem 0.5rem;
    font-weight: bold;
}
.menu{
    background: white;  
}
.contact{
    background: #72ecfc;
  
}
</style>