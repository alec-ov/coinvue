<template>
<div class="kon">
    <div>
        <h1 class="formSize formMargin" style="text-align: center; font-size: 32px">{{Feedback}}</h1>
        <p class="formMargin formSize">{{text}}</p>
        <div class="formMargin">
            <div class="formFlex">
                <img src="../assets/contact/email.png" style="width: 35px"><span class="formSize">{{email}}</span>
            </div>
            <div class="formFlex">
                <img src="../assets/contact/telegramLogo.png" style="width: 35px"><span class="formSize">{{phone}}</span>
            </div>
            <div class="formFlex">
                <img src="../assets/contact/viber.png" style="width: 35px"><span class="formSize">{{phone}}</span>
            </div>
            <div class="formFlex">
                <img src="../assets/contact/whatsapp.png" style="width: 35px"><span class="formSize">{{phone}}</span>
            </div>
        </div>
    </div>
    <div class="formEmail formMargin" style="display: flex; flex-direction: column; padding: 5px">
        <p class="formSize">{{text1}}</p>
        <label class="formMargin formSize">
            <span>{{box}}</span>
            <input class="formSize formInp" required type="email">
        </label>
        <label class="formMargin formSize">
            <span>{{messa}}</span>
            <input class="formSize formInp" required type="text">
        </label>
        <label class="formMargin formSize">
            <span>{{messaT}}</span>
            <textarea class="formSize formText" required name="text"></textarea>
        </label>
        <button class="formButton formSize">{{sub}}</button>
    </div>
</div>
</template>

<script>
	export default {
		name: "cont",
        data(){
			return{
				Feedback: 'Обратная связь',

                text: 'Если у вас возникли какие-либо вопросы, или вы хотите что-нибудь нам\n сообщить - пожалуйста, обратитесь по одному из указанных ниже контактов.',

                text1: 'Или воспользуйтесь нашей формой обратной связи.\n Мы обязательно свяжемся с вами в самое ближайшее время.',

                box: 'Ваш Email для ответа:',
                messa: 'Тема сообщения:',
                messaT: 'Текст сообщения:',

                sub: 'Отправить',

				phone: '+38-098-210-09-63',
                email: 'support@d-obmen.cc',
            }
        }
	}
</script>

<style scoped>
    .kon{
        display: block;
        margin: 0 auto;
        max-width: 412px;
    }

    /* Страничка контактов */
    .formMargin{
        margin-top: 20px;
    }
    .formButton{
        margin: 20px auto 0 auto;
    }
    .formFlex{
        display: flex;
        flex-direction: row;
    }
    .formInp{
        width: 200px;
        height: 18px;
        float: right;
        border-radius: 15px;
        border: 1px solid #0B0B0C;
        padding-left: 5px;
        outline:none;
    }
    .formText{
        width: 260px;
        height: 200px;
        float: right;
        border: 1px solid #0B0B0C;
        outline:none;
        padding: 5px;
    }
</style>