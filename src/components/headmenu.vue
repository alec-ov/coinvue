<template>
    <div class="menu">
        <span class="logo">BizChange24</span>
        <div class="navMenu">
            <div><router-link to="/home" class="nav">Обмен</router-link></div>
            <div><router-link to="/rezerv" class="nav">Резервы</router-link></div>
            <div><router-link to="/cont" class="nav">Контакты</router-link></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "headmenu",
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .menu{
        color: #F7F7F7;
        display: flex;
        flex-direction: row;
    }
    .logo{
        font-family: Roboto, sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 28px;
        line-height: 45px;
        margin-top: 8px;
        margin-left: 30px;
        flex-basis: 70%;
    }
    .nav{
        font-family: Roboto, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 27px;
        margin: auto 0;
        color: #F7F7F7;
        padding-right: 20px;
        text-decoration: none;
    }
    .navMenu{
        display: flex;
        flex-direction: row;
        margin-top: 15px;
        flex-basis: 30%;
    }
</style>
