<template>
<div>
    <h2 id="CurrencyRateHeader">Курс обмена</h2>
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
                <p><span>Bitcoin</span></br>BTC</p>
                <img src="images/Bitcoin.png">
            </td>
            <td class="BTC rate">
                00.00
            </td>
            <td class="CurrencyDisplay">
                <img src="images/Bitcoin.png">
                <p><span>Bitcoin</span></br>BTC</p>
            </td>
        </tr>
        <tr>
            <!--BTH-->
            <td class="CurrencyButton">
                <p><span>Bitcoin Cash</span></br>BTC</p>
                <img src="images/BitcoinCash.png">
            </td>
            <td class="BTH rate">
                00.00
            </td>
            <td class="CurrencyDisplay">
                <img src="images/BitcoinCash.png">
                <p><span>Bitcoin Cash</span></br>BTC</p>
            </td>
        </tr>
        <tr>
            <!--ETH-->
            <td class="CurrencyButton">
                <p><span>Ethereum</span></br>ETH</p>
                <img src="images/Ethereum.png">
            </td>
            <td class="ETH rate">
                00.00
            </td>
            <td class="CurrencyDisplay">
                <img src="images/Ethereum.png">
                <p><span>Ethereum</span></br>ETH</p>
            </td>
        </tr>
        <tr>
            <!--ETC-->
            <td class="CurrencyButton">
                <p><span>Ethereum Classic</span></br>ETC</p>
                <img src="images/EthereumClassic.svg">
            </td>
            <td class="ETC rate">
                00.00
            </td>
            <td class="CurrencyDisplay">
                <img src="images/EthereumClassic.svg">
                <p><span>Ethereum Classic</span></br>ETC</p>
            </td>
        </tr>
        <tr>
            <!--XMR-->
            <td class="CurrencyButton">
                <p><span>Monero</span></br>XMR</p>
                <img src="images/monero.png">
            </td>
            <td class="XMR rate">
                00.00
            </td>
            <td class="CurrencyDisplay">
                <img src="images/monero.png">
                <p><span>Monero</span></br>XMR</p>
            </td>
        </tr>
        <tr>
            <!--XRP-->
            <td class="CurrencyButton">
                <p><span>Ripple</span></br>XRP</p>
                <img src="images/Ripple.png">
            </td>
            <td class="XRP rate">
                00.00
            </td>
            <td class="CurrencyDisplay">
                <img src="images/Ripple.png">
                <p><span>Ripple</span></br>XRP</p>
            </td>
        </tr>
        <tr>
            <!--LTC-->
            <td class="CurrencyButton">
                <p><span>Litecoin</span></br>LTC</p>
                <img src="images/Litecoin.png">
            </td>
            <td class="LTC rate">
                00.00
            </td>
            <td class="CurrencyDisplay">
                <img src="images/Litecoin.png">
                <p><span>Litecoin</span></br>LTC</p>
            </td>
        </tr>
        <tr>
            <!--DSH-->
            <td class="CurrencyButton">
                <p><span>Dash</span></br>DSH</p>
                <img src="images/Dash.png">
            </td>
            <td class="DSH rate">
                00.00
            </td>
            <td class="CurrencyDisplay">
                <img src="images/Dash.png">
                <p><span>Dash</span></br>DSH</p>
            </td>
        </tr>
        <tr>
            <!--ZEC-->
            <td class="CurrencyButton">
                <p><span>Zcash</span></br>ZEC</p>
                <img src="images/zcash.png">
            </td>
            <td class="ZEC rate">
                00.00
            </td>
            <td class="CurrencyDisplay">
                <img src="images/zcash.png">
                <p><span>Zcash</span></br>ZEC</p>
            </td>
        </tr>
        <tr>
            <!--XDG-->
            <td class="CurrencyButton">
                <p><span>Dogecoin</span></br>XDG</p>
                <img src="images/dogecoin.png">
            </td>
            <td class="XDG rate">
                00.00
            </td>
            <td class="CurrencyDisplay">
                <img src="images/dogecoin.png">
                <p><span>Dogecoin</span></br>XDG</p>
            </td>
        </tr>
        <tr>
            <!--XLM-->
            <td class="CurrencyButton">
                <p><span>Stellar</span></br>XLM</p>
                <img src="images/stellar.png">
            </td>
            <td class="XLM rate">
                00.00
            </td>
            <td class="CurrencyDisplay">
                <img src="images/stellar.png">
                <p><span>Stellar</span></br>XLM</p>
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
