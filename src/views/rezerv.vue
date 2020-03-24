<template>
<div>
    <h1 class="formSize formMargin">Резервы нашего обменника</h1>
    <div id="rez">
        <div class="bitRez">
            <img src="../assets/coin/Bitcoin.png">
            <span class="nameCoin">{{BtcName}}</span>
            <span class="rezCoin">{{BtcNumber}}<span>{{Btc}}</span></span>
        </div>
        <div class="bitRez">
            <img src="../assets/coin/BitcoinCash.png">
            <span class="nameCoin">{{BthName}}</span>
            <span class="rezCoin">{{BthNumber}}<span>{{Bth}}</span></span>
        </div>
        <div class="bitRez">
            <img src="../assets/coin/Ethereum.png">
            <span class="nameCoin">{{EthName}}</span>
            <span class="rezCoin">{{EthNumber}}<span>{{Eth}}</span></span>
        </div>
        <div class="bitRez">
            <img src="../assets/coin/EthereumClassic.svg">
            <span class="nameCoin">{{EtcName}}</span>
            <span class="rezCoin">{{EtcNumber}}<span>{{Etc}}</span></span>
        </div>
        <div class="bitRez">
            <img src="../assets/coin/monero.png">
            <span class="nameCoin">{{XmrName}}</span>
            <span class="rezCoin">{{XmrNumber}}<span>{{Xmr}}</span></span>
        </div>
        <div class="bitRez">
            <img src="../assets/coin/Ripple.png">
            <span class="nameCoin">{{XrpName}}</span>
            <span class="rezCoin">{{XrpNumber}}<span>{{Xrp}}</span></span>
        </div>
        <div class="bitRez">
            <img src="../assets/coin/Litecoin.png">
            <span class="nameCoin">{{LtcName}}</span>
            <span class="rezCoin">{{LtcNumber}}<span>{{Ltc}}</span></span>
        </div>
        <div class="bitRez">
            <img src="../assets/coin/Dash.png">
            <span class="nameCoin">{{DshName}}</span>
            <span class="rezCoin">{{DshNumber}}<span>{{Dsh}}</span></span>
        </div>
        <div class="bitRez">
            <img src="../assets/coin/zcash.png">
            <span class="nameCoin">{{ZecName}}</span>
            <span class="rezCoin">{{ZecNumber}}<span>{{Zec}}</span></span>
        </div>
        <div class="bitRez">
            <img src="../assets/coin/dogecoin.png">
            <span class="nameCoin">{{XdgName}}</span>
            <span class="rezCoin">{{XdgNumber}}<span>{{Xdg}}</span></span>
        </div>
        <div class="bitRez">
            <img src="../assets/coin/stellar.png">
            <span class="nameCoin">{{XlmName}}</span>
            <span class="rezCoin">{{XlmNumber}}<span>{{Xlm}}</span></span>
        </div>
    </div>
</div>
</template>

<script>
	export default {
		name: "rezerv",
        data(){
			return{
				Btc:'BTC',
				BtcName:'Bitcoin',
                BtcNumber: '10',

				Bth:'BTH',
				BthName:'Bitcoin Cash',
				BthNumber: '354',

				Eth:'ETH',
				EthName:'Ethereum',
				EthNumber: '453',

				Etc:'ETC',
				EtcName:'Ethereum Classic',
				EtcNumber: '345',

				Xmr:'XMR',
				XmrName:'Monero',
				XmrNumber: '345534',

				Xrp:'XRP',
				XrpName:'Ripple',
				XrpNumber: '546544',

				Ltc:'LTC',
				LtcName:'Litecoin',
				LtcNumber: '546546',

				Dsh:'DSH',
				DshName:'Dash',
				DshNumber: '45645',

				Zec:'ZEC',
				ZecName:'Zcash',
				ZecNumber: '546456',

				Xdg:'XDG',
				XdgName:'Dogecoin',
				XdgNumber: '342324',

				Xlm:'XLM',
				XlmName:'Stellar',
				XlmNumber: '456456',
            }
        }
	}
</script>

<style scoped>
    #rez{
        display: block;
        margin-top: 50px;
        margin-left: 50px;
    }
    .bitRez{
        font-family: Roboto, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        display: flex;
        flex-direction: row;
        margin-top: 30px;
    }
    .bitRez > img{
        width: 35px;
        margin-right: 20px;
    }
    .rezCoin{
        margin-right: 40px;
    }
    .rezCoin > span{
        margin-left: 15px;
    }
    .nameCoin{
        margin: auto 0;
        flex-basis: 95%;
    }
</style>