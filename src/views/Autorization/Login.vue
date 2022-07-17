<template>
<div class="login">
    <div class="login__wrapper">
        <div class="login__aut">
            <form class="login__form" v-if="loginData.tel == ''">
                 <!-- <img style="width: 150px" src="@/assets/AxasLogoGreen.svg" alt=""> -->
                <div style="width: 500px; font-size: 78px; color: #FFFFFF; ">AxasSharing</div>
                <div class="login__form_title">Вход</div>
                <div class="input-container ic1">
                    <input id="firstname"  class="input" type="tel" readonly onfocus="this.removeAttribute('readonly')" placeholder=" " v-model="form.tel"/>
                    <div class="cut"></div>
                    <label for="firstname" class="placeholder">Номер телефона</label>
                </div>
                            <!-- v-maska="'+7 (###) ###-##-##'" -->
                <div class="login__forgot">
                    <a class="login__forgot_name pointer" @click="routerPush('Recover')">Забыли пароль ?</a>
                </div>
                <div class="login__buttons">
                    <div class="login__buttons_login" @click="verifyTel">Отправить</div>
                </div>
            </form>

            <form class="login__form" v-if="loginData.tel != ''">
                 <!-- <img style="width: 150px" src="@/assets/AxasLogoGreen.svg" alt=""> -->
                <div style="width: 500px; font-size: 78px; color: #FFFFFF;">AxasHouse</div>
                <div class="login__form_title">Вход</div>
                <div class="input-container ic2">
                    <input id="firstname" class="input" type="tel" readonly onfocus="this.removeAttribute('readonly')" placeholder=" " v-model="form.code"/>
                    <div class="cutQ"></div>
                    <label for="firstname" class="placeholder">Код</label>
                </div>
                <div class="login__forgot">
                    <a class="login__forgot_tel pointer" @click="loginData.tel = ''">Изменить номер</a>
                    <a class="login__forgot_name pointer" @click="routerPush('Recover')">Забыли пароль ?</a>
                </div>
                <div class="login__buttons">
                    <div class="login__buttons_login" @click="login">Войти</div>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import {
    ref, onMounted
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
            verifyTelPost, loginUser,
        } = useLogin()

        const form = ref({
            tel: "",
            code: "",
        })

        const loginData = ref({
            tel: '',
            code: '',
        })

        const login = () => {
            loginUser(form.value)
                .then(() => {
                    localStorage.setItem("Token", '00bc794f4949f95063a0c49c45ec62c1d020555eac7fca1b06e524dd21d7fb26')
                    routerPush('Dashboard')
                })
                .catch(() => {
                    alert("Пожалуйста проверьте правильность введенного кода")
                })
        }

        const verifyTel = () => {
            verifyTelPost({
                tel: form.value.tel
            })
            .then(() => {
                loginData.value.tel = form.value.tel
            })
        }

        onMounted(() => {
            document.addEventListener('keydown', function(e) {
                if (e.code == 'Enter') {
                    login()
                }
            });

            console.log(loginData.value.tel)
        })
        return {
            routerPush,

            form,
            loginData,

            login,

            verifyTel,
        }
    }
});
</script>

<style scoped>
    .login__wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  background: #15172b;
  height: 100vh;
}

.login__aut {
  width: 100%;
  height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  background: #15172b;
  align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.login__form {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

.login__form .input-container {
  height: 50px;
  position: relative;
  width: 55%;
}

.login__form .ic1 {
  margin-top: 20px;
}

.login__form .ic2 {
  margin-top: 20px;
}

.login__form .input {
  background-color: #303245;
  border-radius: 5px;
  border: 0;
  color: #FFFFFF;
  font-size: 18px;
  height: 100%;
  outline: 0;
  padding: 4px 20px 0;
  width: 100%;
}

.login__form .cut {
  background-color: #15172b;
  border-radius: 5px;
  height: 20px;
  left: 20px;
  position: absolute;
  top: -20px;
  -webkit-transform: translateY(0);
          transform: translateY(0);
  -webkit-transition: -webkit-transform 200ms;
  transition: -webkit-transform 200ms;
  transition: transform 200ms;
  transition: transform 200ms, -webkit-transform 200ms;
  width: 115px;
}

.login__form .cutQ {
  background-color: #15172b;
  border-radius: 5px;
  height: 20px;
  left: 20px;
  position: absolute;
  top: -20px;
  -webkit-transform: translateY(0);
          transform: translateY(0);
  -webkit-transition: -webkit-transform 200ms;
  transition: -webkit-transform 200ms;
  transition: transform 200ms;
  transition: transform 200ms, -webkit-transform 200ms;
  width: 42px;
}

.login__form .cut-short {
  width: 50px;
}

.login__form .input:focus ~ .cut, .login__form .input:focus ~ .cutQ,
.login__form .input:not(:placeholder-shown) ~ .cut, .login__form .input:not(:placeholder-shown) ~ .cutQ {
  -webkit-transform: translateY(14px);
          transform: translateY(14px);
}

.login__form .placeholder {
  color: #65657b;
  left: 20px;
  line-height: 14px;
  pointer-events: none;
  position: absolute;
  -webkit-transform-origin: 0 50%;
          transform-origin: 0 50%;
  -webkit-transition: color 200ms, -webkit-transform 200ms;
  transition: color 200ms, -webkit-transform 200ms;
  transition: transform 200ms, color 200ms;
  transition: transform 200ms, color 200ms, -webkit-transform 200ms;
  top: 20px;
}

.login__form .input:focus ~ .placeholder,
.login__form .input:not(:placeholder-shown) ~ .placeholder {
  -webkit-transform: translateY(-23px) translateX(10px) scale(0.75);
          transform: translateY(-23px) translateX(10px) scale(0.75);
}

.login__form .input:not(:placeholder-shown) ~ .placeholder {
  color: #9797a1;
}

.login__form .input:focus ~ .placeholder {
  color: #396cf8;
}

.login__form_title {
  font-size: 26px;
  font-weight: 600;
  margin-top: 50px;
  color: #FFFFFF;
  text-transform: uppercase;
}

.login__form_email {
  margin-top: 30px;
  border: none;
  border-bottom: 1px solid #7e7e7e;
  font-size: 16px;
  width: 350px;
  padding: 20px 10px 5px;
}

.login__form_password {
  margin-top: 20px;
  border: none;
  border-bottom: 1px solid #7e7e7e;
  font-size: 16px;
  width: 350px;
  padding: 20px 10px 5px;
}

.login__logo {
  width: 50%;
  height: 100vh;
  background: #333;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  overflow: hidden;
  /* &_img{
            width: 25em;
            z-index: 2;
            position: absolute;
        } */
}

.login__logo_line {
  background-color: #282828;
  -webkit-transform: rotate(15deg);
          transform: rotate(15deg);
  width: 30.5%;
  height: 135%;
}

.login__logo_title {
  color: #4496E8;
  font-size: 104px;
  position: absolute;
}

.login__forgot {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  margin-top: 30px;
}

.login__forgot_name {
  color: #4496E8;
  text-decoration: none;
  margin-top: 10px;
}

.login__forgot_tel {
  color: #FFFFFF;
  text-decoration: none;
  text-decoration: underline;
}

.login__buttons {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  margin-top: 20px;
}

.login__buttons_login {
  background-color: #4496E8;
  color: #fff;
  -webkit-box-shadow: 0 4px 9.6px 0.4px #396cf875;
          box-shadow: 0 4px 9.6px 0.4px #396cf875;
  border: none;
  padding: 10px 60px;
  border-radius: 5px;
  font-size: 18px;
  text-transform: uppercase;
  cursor: pointer;
}

@media screen and (max-width: 1150px) {
  .login__wrapper {
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
        -ms-flex-direction: column-reverse;
            flex-direction: column-reverse;
  }
  .login__aut {
    width: 100%;
    height: 93vh;
  }
  .login__form_title {
    font-size: 26px;
    font-weight: 600;
    text-transform: uppercase;
  }
  .login__logo {
    width: 100%;
    height: 7vh;
  }
  .login__logo_line {
    display: none;
  }
  .login__logo_img {
    width: 25em;
    z-index: 2;
  }
  .login__logo_title {
    font-size: 54px;
    position: block;
  }
  .login__forgot {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    margin-top: 30px;
  }
  .login__forgot_name {
    color: #4496E8;
    text-decoration: none;
  }
  .login__forgot_tel {
    color: #FFFFFF;
    text-decoration: none;
    text-decoration: underline;
  }
}

@media screen and (max-width: 550px) {
  .login__logo_img {
    width: 15em;
    z-index: 2;
  }
  .login__forgot {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    margin-top: 30px;
  }
  .login__forgot_name {
    color: #4496E8;
    text-decoration: none;
  }
  .login__forgot_tel {
    color: #FFFFFF;
    text-decoration: none;
    text-decoration: underline;
  }
}
</style>