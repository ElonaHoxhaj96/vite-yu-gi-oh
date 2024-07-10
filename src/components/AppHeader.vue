<script>
export default{
    name: 'AppHeader',
    props: ['message']
}
</script>

<template>
    <header>
        <div id="logo"> <img src="../assets/OIP.jpeg" alt=""></div>
        <h1>{{message}}</h1>
    </header>
</template>


<style lang="scss" scoped>
@use '../style/general.scss';
header{
    display: flex;
}
    img{
        width: 60px;
    }
    h1{
        color: black;
    }
</style>