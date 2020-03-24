<template>
    <div>
        <h1>{{application}}</h1>
        <h5>{{applicationComment}}</h5>
        <div>
            <h3>{{give}}</h3>
            <img src="">
            <span></span>
            <span></span>
        </div>
        <div>
            <h3>{{translate}}</h3>
            <span></span>
        </div>
        <div>
            <h3>{{youGet}}</h3>
            <img src="">
            <span></span>
            <span></span>
        </div>
        <div>
            <h3>{{youTranslate}}</h3>
            <span></span>
        </div>
    </div>
    <div>
        <div>
            <span>Войти в свою программу-клиент</span>
        </div>
        <div>
            <span>Сделать перевод по реквизитам (<a>Показать QR код)</a>)</span>
        </div>
        <div>
            <span>Кошелек Monero: #e83e8c</span>
            <span>41yUTiWAEV7Hpxswzj1wg5KCSc1Ng4iJfJ44Lf7VrNgkWcFoLLJsUk2WQUpsxdQtAi2WJzPEX3indNk1eaHGtaHw4ZMTVF3</span>
            <span>На сумму: 23 xmr #ec0000</span>
        </div>

    </div>
</template>

<script>
	export default {
		name: "oplata",
        data(){
			return{
				application: 'Заявка',
				applicationComment: 'Пожалуйста, проверьте введенные Вами данные и следуйте по шагам указанным ниже.',

                give: 'Вы отдаете:',
                youGet: 'Вы получаете:',

				translate: 'Перевести на:',
                youTranslate: 'Получаете на:',



            }
        }
	}
</script>

<style scoped>

</style>