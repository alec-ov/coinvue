<template>
<div>
    <h2 style="text-align: center; margin-top: 40px;">Курс обмена</h2>
    <table class="cryptoBlock">
        <tr>
            <th>
                <h3>Отдаете</h3>
            </th>
            <th colspan="2">
                <h3>Получаете</h3>
            </th>
        </tr>
        <tr>
            <!--BTC-->
            <td class="CurrencyButton">
                <p><span>Bitcoin</span><br/>BTC</p>
                <img src="../assets/coin/Bitcoin.png">
            </td>
            <td class="BTC rate">
                00.00
            </td>
            <td class="CurrencyDisplay">
                <img src="../assets/coin/Bitcoin.png">
                <p><span>Bitcoin</span><br/>BTC</p>
            </td>
        </tr>
        <tr>
            <!--BTH-->
            <td class="CurrencyButton">
                <p><span>Bitcoin Cash</span><br/>BTC</p>
                <img src="../assets/coin/BitcoinCash.png">
            </td>
            <td class="BTH rate">
                00.00
            </td>
            <td class="CurrencyDisplay">
                <img src="../assets/coin/BitcoinCash.png">
                <p><span>Bitcoin Cash</span><br/>BTC</p>
            </td>
        </tr>
        <tr>
            <!--ETH-->
            <td class="CurrencyButton">
                <p><span>Ethereum</span><br/>ETH</p>
                <img src="../assets/coin/Ethereum.png">
            </td>
            <td class="ETH rate">
                00.00
            </td>
            <td class="CurrencyDisplay">
                <img src="../assets/coin/Ethereum.png">
                <p><span>Ethereum</span><br/>ETH</p>
            </td>
        </tr>
        <tr>
            <!--ETC-->
            <td class="CurrencyButton">
                <p><span>Ethereum Classic</span><br/>ETC</p>
                <img src="../assets/coin/EthereumClassic.svg">
            </td>
            <td class="ETC rate">
                00.00
            </td>
            <td class="CurrencyDisplay">
                <img src="../assets/coin/EthereumClassic.svg">
                <p><span>Ethereum Classic</span><br/>ETC</p>
            </td>
        </tr>
        <tr>
            <!--XMR-->
            <td class="CurrencyButton">
                <p><span>Monero</span><br/>XMR</p>
                <img src="../assets/coin/monero.png">
            </td>
            <td class="XMR rate">
                00.00
            </td>
            <td class="CurrencyDisplay">
                <img src="../assets/coin/monero.png">
                <p><span>Monero</span><br/>XMR</p>
            </td>
        </tr>
        <tr>
            <!--XRP-->
            <td class="CurrencyButton">
                <p><span>Ripple</span><br/>XRP</p>
                <img src="../assets/coin/Ripple.png">
            </td>
            <td class="XRP rate">
                00.00
            </td>
            <td class="CurrencyDisplay">
                <img src="../assets/coin/Ripple.png">
                <p><span>Ripple</span><br/>XRP</p>
            </td>
        </tr>
        <tr>
            <!--LTC-->
            <td class="CurrencyButton">
                <p><span>Litecoin</span><br/>LTC</p>
                <img src="../assets/coin/Litecoin.png">
            </td>
            <td class="LTC rate">
                00.00
            </td>
            <td class="CurrencyDisplay">
                <img src="../assets/coin/Litecoin.png">
                <p><span>Litecoin</span><br/>LTC</p>
            </td>
        </tr>
        <tr>
            <!--DSH-->
            <td class="CurrencyButton">
                <p><span>Dash</span><br/>DSH</p>
                <img src="../assets/coin/Dash.png">
            </td>
            <td class="DSH rate">
                00.00
            </td>
            <td class="CurrencyDisplay">
                <img src="../assets/coin/Dash.png">
                <p><span>Dash</span><br/>DSH</p>
            </td>
        </tr>
        <tr>
            <!--ZEC-->
            <td class="CurrencyButton">
                <p><span>Zcash</span><br/>ZEC</p>
                <img src="../assets/coin/zcash.png">
            </td>
            <td class="ZEC rate">
                00.00
            </td>
            <td class="CurrencyDisplay">
                <img src="../assets/coin/zcash.png">
                <p><span>Zcash</span><br/>ZEC</p>
            </td>
        </tr>
        <tr>
            <!--XDG-->
            <td class="CurrencyButton">
                <p><span>Dogecoin</span><br/>XDG</p>
                <img src="../assets/coin/dogecoin.png">
            </td>
            <td class="XDG rate">
                00.00
            </td>
            <td class="CurrencyDisplay">
                <img src="../assets/coin/dogecoin.png">
                <p><span>Dogecoin</span><br/>XDG</p>
            </td>
        </tr>
        <tr>
            <!--XLM-->
            <td class="CurrencyButton">
                <p><span>Stellar</span><br/>XLM</p>
                <img src="../assets/coin/stellar.png">
            </td>
            <td class="XLM rate">
                00.00
            </td>
            <td class="CurrencyDisplay">
                <img src="../assets/coin/stellar.png">
                <p><span>Stellar</span><br/>XLM</p>
            </td>
        </tr>
    </table>
</div>
</template>

<script>
	export default {
		name: "tabl"
	}
</script>

<style scoped>
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
        min-width: 80px;
        overflow: hidden;
        width:min-content;

        border-left: 1px solid #7e7e7e;
        border-right: 1px solid #7e7e7e;
    }
    th {
        padding: 8px;
    }
</style>