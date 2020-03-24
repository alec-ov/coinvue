<template>
<div>
    <main>
        <div class="coin">
            <div class="coinObmen">
                <h1 class="give">Отдаете</h1>
                <h6 class="comment">Выберите валюту и сумму, которую хотите обменять</h6>
                <div class="select-wrapper">
                    <label>
                        <div class="select-arrow-3"></div>
                        <div class="select-arrow-3"></div>

                        <select id="select"
                            onchange="input(document.getElementById('inputCripto').value, 'out', 'select', 'myselect')">
                            <option value="Bitcoin">Bitcoin</option>
                            <option value="Bitcoin Cash">Bitcoin Cash</option>
                            <option value="Ethereum">Ethereum</option>
                            <option value="Ethereum Classic">Ethereum Classic</option>
                            <option value="Monero">Monero</option>
                            <option value="Ripple">Ripple</option>
                            <option value="Litecoin">Litecoin</option>
                            <option value="Dash">Dash</option>
                            <option value="Zcash">Zcash</option>
                            <option value="Dogecoin">Dogecoin</option>
                            <option value="Stellar">Stellar</option>
                        </select>
                    </label>
                </div>
                <label>
                    <input type="number" step="0.00001" required placeholder="0.0001" id="inputCripto"  min="0.001"
                        oninput="input(this.value, 'out', 'select', 'myselect')"
                        onchange="input(this.value, 'out', 'select', 'myselect')">
                </label>
            </div>
            <div class="coinObmen">
                <h1 class="get">Получаете</h1>
                <h6 class="comment">Выберите валюту для получения</h6>
                <div class="select-wrapper">
                    <div class="select-arrow-3"></div>
                    <div class="select-arrow-3"></div>

                    <label>
                        <select id="myselect"
                            onchange="input(document.getElementById('inputCripto').value, 'out', 'myselect', 'select')">
                            <option value="Bitcoin Cash">Bitcoin Cash</option>
                            <option value="Bitcoin">Bitcoin</option>
                            <option value="Ethereum">Ethereum</option>
                            <option value="Ethereum Classic">Ethereum Classic</option>
                            <option value="Monero">Monero</option>
                            <option value="Ripple">Ripple</option>
                            <option value="Litecoin">Litecoin</option>
                            <option value="Dash">Dash</option>
                            <option value="Zcash">Zcash</option>
                            <option value="Dogecoin">Dogecoin</option>
                            <option value="Stellar">Stellar</option>
                        </select>
                    </label>
                </div>
                <label>
                    <input type="number" step="0.00001" required placeholder="0.00001" id="out" min="0.001"
                        oninput="input(this.value, 'inputCripto', 'myselect', 'select')"
                        onchange="input(this.value, 'inputCriptov', 'myselect', 'select')">
                </label>
            </div>
        </div>
        </div>
        <h2 class="detal">Детали обмена</h2>
        <div style="display: flex; flex-wrap: wrap; margin-top: 2%">
            <div class="inputForm">
                <label>
                    <h6 class="form">Ваш E-mail ящик:</h6>
                    <input type="email" id="Email" required placeholder="Например: name@gmail.com">
                </label>
                <label>
                    <h6 class="form">Кошелёк для получения:</h6>
                    <input type="text" id="monKey" required
                        placeholder="Например: 57hraAvKAqoNSdke84NSIE">
                </label>
            </div>
        </div>
        <button class="submit" type="submit" onclick="getPost()">ОБМЕНЯТЬ</button>
    </main>
    <tableBit></tableBit>
</div>
</template>

<script>
	import tableBit from "@/views/tableBit";
	export default {
		name: "home",
		components: {
			tableBit
		}
	}
</script>

<style scoped>
    *{
    padding: 0;
    margin: 0;
}
h2, h3 {
    font-family: Roboto, sans-serif;
}
header{
    width: 100%;
    height: 60px;
    background-color: #145896;
}
.menu{
    color: #F7F7F7;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.logo{
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 45px;
    margin-top: 8px;
    margin-left: 30px;
}
.navMenu a{
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
    margin-top: 10px;
}
.coin{
    display: flex;
    flex-wrap: wrap;
}
.coinObmen{
    padding-top: 50px;
    padding: 15px;
    width: 360px;
    margin: 0 auto;
}

@media only screen and (min-width: 1100px)
{
    .coinObmen{
        width: 500px;
        margin: 0 auto;
    }
}
@media only screen and (max-width: 600px)
{
    .inputForm{
        margin: 0 auto;
        width: 100% !important;
        padding: 20px;
    }
    .coinObmen{
        width: 100%;
        margin: 0 auto;
    }
    .coinObmen h1 {
        font-size: 80%;
        text-align: center;
    }
    header {
        flex-wrap: wrap;
        justify-content: space-between;
        transition: height 0.3s;
    }
    header:focus-within, header:hover {
        height: fit-content;
    }
    .navMenu {
        flex-direction: column;
        flex-basis: 100%;
    }
    .menu {
        flex-direction: column;
    }
    .logo {
        flex-basis: 100%;
    }
    .navMenu a {
        width: 100%;
        flex-basis: 100%;
        font-size: 130%;
        margin: 0;
        text-align: center;
        display: inline-block;
        padding-right: 0px;
    }
    .cryptoBlock h3 {
        font-size: 18px !important;
    }
    #CurrencyRateHeader {
        font-size: 30px !important;
    }
    .cryptoBlock img {
        margin: 2px !important;
    }
}
#CurrencyRateHeader {
    text-align: center;
    margin-top: 40px;
    font-size: 38px;
}
.cryptoBlock h3 {
    font-size: 30px;
}


.select-arrow-3 {
    position: absolute;
    z-index: -9999;
    border: 8px solid transparent;
    border-bottom: 0;
    right: 8px;
}
.select-arrow-3:nth-child(1) {
    top: 18px;
    border-top-color: #202020;
}
.select-arrow-3:nth-child(2) {
    top: 16px;
    border-top-color: #FFF;
}

#content {
    width: 350px;
    margin: 20px auto;
    padding: 10px;
    border: 1px dotted gray;
}

.select-wrapper {
    position: relative;
    margin: 20px 0;
    border-bottom: 1px solid #6C7231;
    border-radius: 4px;
    transition: 0.4s;
}

.select-wrapper:hover {
    box-shadow: 0 0 3px #808080;
}

.select-wrapper select {
    width: 100%;
    height: 36px;
    padding: 0 20px 0 7px;
    background: transparent;
    border: 0;
    appearance: none;            /* remove arrow        */
    -webkit-appearance: none;    /* remove arrow Chrome */
    -moz-appearance: none;       /* remove arrow FF     */
    font-size: 28px;
    outline:none;
}
.select-wrapper select::-ms-expand{
    display: none;             /* remove arrow IE     */
}


.submit{
    display: block;
    width: 200px;
    height: 50px;
    background-color: #145896;
    border-radius: 50px;

    font-family: Noto Sans, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 23px;
    line-height: 49px;
    color: #F7F7F7;

    transition: 0.4s;
    margin: 50px auto 0;
}
.submit:hover{
    background-color: #F7F7F7;
    border: 2px solid #145896;
    color: #145896;
}

input{
    width: 100%;
    height: 32px;
    border: none;
    border-bottom: 1px solid #145896;
    font-size: 22px;
    outline:none;
    transition: border 0.4s, box-shadow 0.4s, background-color 0.4s;
    border-radius: 2px;
}
input:hover{
    background-color: #ececec;
}
input:focus{
    border-bottom: 1px solid #145896;
    background-color: #ececec;
    box-shadow: inset 0px -2px 0px #145896;
}
.coinObmen h1{
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 54px;
    line-height: 55px;
    color: #145896;
}
.comment{
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 28px;
    color: #0B0B0C;
}
.detal{
    margin-top: 50px;
    text-align: center;
    font-family: Noto Sans, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 33px;
    line-height: 49px;
    color: #145896;
}
.form{
    font-family: Noto Sans, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: #145896;
    margin-top: 30px;
}
.inputForm{
    margin: 0 auto;
    width: 400px;
}

.cryptoBlock {
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;

    margin-top: 50px;

    border-collapse: collapse;
    margin: auto;
}
.cryptoBlock td {
    width: 180px;
    height: 22px;
    background-color: #ffffff;
    padding: 8px;
    transition: color 0.4s, background-color 0.4s, border 0.5s;

    border-top: 1px solid #b9b9b9;
}
.cryptoBlock td span {
    overflow-x: hidden;
    word-break: break-all;
    width: 10px;
    width:min-content;
}
.cryptoBlock td > * {
    vertical-align: middle;
}
.cryptoBlock td > * {
    display: inline-block;
}
.cryptoBlock img{
    width: 35px;
    height: 35px;
    margin: 4px;
}

.CurrencyButton{
    text-align: right;
    color: #fffbfd;
    background-color: #145896 !important;
}
.CurrencyButton img {
    text-align: right;
}
.CurrencyButton:hover {
    background-color: #f0f0f0 !important;
    color: #0B0B0C;
}
.active {
    background-color: #ffffff !important;
    color: #0B0B0C;
    border: 2px gray !important;
    border-right: none !important;
}
.rate {
    padding-left: 15px !important;
    min-width: 128px;
    overflow: hidden;
    width:fit-content !important;
    
    border-left: 1px solid #7e7e7e;
}
th {
    padding: 8px;
}
@media only screen and (max-width: 543px)
{
    .cryptoBlock td span {
        display: none;
    }
    .cryptoBlock br {
        display: none;
    }
    .cryptoBlock td * {
        font-size: 120%;
    }
}

</style>
