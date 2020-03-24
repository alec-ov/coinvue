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
    .coin{
        display: flex;
        flex-wrap: wrap;
    }
    .coinObmen{
        padding: 15px;
        width: 35%;
        min-width: 360px;
        margin: 0 auto;
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
    .give{
        font-family: Roboto, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 54px;
        line-height: 55px;
        color: #145896;
    }
    .get{
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
    .inpEmail{
        width: 340px;
        height: 32px;
        border: none;
        border-bottom: 1px solid #0B0B0C;
        font-size: 18px;
        outline:none;
    }
    .inpkey{
        width: 340px;
        height: 32px;
        border: none;
        border-bottom: 1px solid #0B0B0C;
        font-size: 18px;
        outline:none;
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
    }

</style>
