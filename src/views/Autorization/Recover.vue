<template>
<div class="recover">
    <div class="recover__wrapper">
        <div class="recover__aut">
            <div class="recover__form">
                <!-- <img src="@/assets/franklins_logo.svg" alt=""> -->
                <div style="width: 500px; font-size: 78px; color: #FFFFFF;">AxasHouse</div>
                <div class="recover__form_title">Сброс пароля</div>
                <div class="input-container ic1">
                    <input id="firstname" class="input" type="text" placeholder=" " v-model="form.email"/>
                    <div class="cut"></div>
                    <label for="firstname" class="placeholder">Email</label>
                </div>

                <div class="recover__forgot">
                    <a class="recover__forgot_name pointer" @click="routerPush('Login')">Войти</a>
                </div>
                <div class="recover__buttons">
                    <div class="recover__buttons_login" @click="recover('Login')">Сбросить пароль</div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    ref
} from 'vue';
import { useRouter } from "vue-router"
import {
    useLogin
} from '@/composition/useLogin.js';

export default ({
    setup() {
        const router = useRouter()
        const routerPush = (name) => {
            router.push({
                name: name
            })
        }
        const {
            recoveruser
        } = useLogin()

        const form = ref({
            email: "",
        })

        const recover = (name) => {
            recoveruser(form.value)
                .then(() => {
                    routerPush(name)
                })
                .catch(() => {
                    alert("Bad")
                })
        }
        return {
            routerPush,

            form,
            recover,
        }
    }
});
</script>

<style lang="scss" src="@/styles/autorization/recover.scss"></style>
