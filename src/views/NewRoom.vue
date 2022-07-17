<template>
    <div class="create">
        <div class="create__header">
            <div class="create__header_title">Добавление аренды</div>
        </div>
        <div class="create__main">
            <div class="create__item">
                <div class="create__item_title">Название квартиры</div>
                <input type="text" class="create__info-main_input input" v-model="room.title">
            </div>
            <div class="create__item">
                <div class="create__item_title">Адрес</div>
                <input type="text" class="create__info-main_input input" style="margin-left: 125px" v-model="room.address">
            </div>

            <div class="create__item">
                <div class="create__item_title">Карта</div>
                <input type="number" style="margin-left: 125px" class="create__info-main_input input">
            </div>

            <div style="display: flex; justify-content: space-between;">
                <div class="create__item-balckons">
                    <div class="create__item">
                        <svg @click="room.has_balcony = !room.has_balcony" :class="{'active': room.has_balcony == true}" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
                        <div class="create__item_title">Балкон</div>
                    </div>

                    <div class="create__item">
                        <div class="create__item_title">Количество комнат</div>
                        <input class="create__info-main_input" style="margin-left: 22px" type="number" v-model="room.room_count">
                    </div>

                    <div class="create__item">
                        <div class="create__item_title">Количество кроватей</div>
                        <input class="create__info-main_input" type="number" v-model="room.bed_count">
                    </div>

                    <div class="create__item">
                        <svg @click="room.washing_machine = !room.washing_machine" :class="{'active': room.washing_machine}" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
                        <div class="create__item_title">Стиральная машина</div>
                    </div>

                    <div class="create__item">
                        <svg @click="room.fridge = !room.fridge" :class="{'active': room.fridge}" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
                        <div class="create__item_title">Холодильник</div>
                    </div>

                    <div class="create__item">
                        <svg @click="room.children = !room.children" :class="{'active': room.children}" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
                        <div class="craete__item_title">Можно с детьми</div>
                    </div>

                    <div class="create__item">
                        <svg @click="room.smoking = !room.smoking" :class="{'active': room.smoking}" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
                        <div class="craete__item_title">Разрешено курить</div>
                    </div>

                    <div class="create__item">
                        <svg @click="room.noise = !room.noise" :class="{'active': room.noise}" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
                        <div class="craete__item_title">Разрешен шум после 22:00</div>
                    </div>
                </div>

                <div class="create__item-count">
                    <div class="create__item">
                        <svg @click="room.has_loggia = !room.has_loggia" :class="{'active': room.has_loggia}" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
                        <div class="create__item_title">Лоджиа</div>
                    </div>

                    <div class="create__item">
                        <div class="create__item_title">Максимальное количество гостей</div>
                        <input class="create__info-main_input" type="number" v-model="room.guest_count">
                    </div>

                    <div class="create__item">
                        <div class="create__item_title">Количетсво санузлов</div>
                        <input style="margin-left: 100px" class="create__info-main_input" type="number" v-model="room.restroom_count">
                    </div>

                    <div class="create__item">
                        <svg @click="room.dishwasher = !room.dishwasher" :class="{'active': room.dishwasher}" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
                        <div class="create__item_title">Посудомойка</div>
                    </div>

                    <div class="create__item">
                        <svg @click="room.tv = !room.tv" :class="{'active': room.tv}" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
                        <div class="create__item_title">Телевизор</div>
                    </div>

                    <div class="create__item">
                        <svg @click="room.air_conditioner = !room.air_conditioner" :class="{'active': room.air_conditioner}" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
                        <div class="create__item_title">Кондиционер</div>
                    </div>

                    <div class="create__item">
                        <svg @click="room.animals = !room.animals" :class="{'active': room.animals}" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
                        <div class="craete__item_title">Можно с животными</div>
                    </div>
                    
                    <div class="create__item">
                        <svg @click="room.party = !room.party" :class="{'active': room.party}" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
                        <div class="craete__item_title">Разрешены вечеринки </div>
                    </div>
                </div>
            </div>
            <div class="info-price" style="margin-top: 40px">
                    <div class="info-price__item" style="display: flex;">
                        <div class="info-price__item_title">Кроткосрочная стоимость</div>
                        <input style="margin-left: 50px" class="create__info-main_input" type="number" v-model="room.price_short">
                    </div>
                    <div class="info-price__item" style="display: flex; margin-top: 20px">
                        <div class="info-price__item_title">Долгосрочная стоимость</div>
                        <input style="margin-left: 60px" class="create__info-main_input" type="number" v-model="room.price_long">
                    </div>
            </div>

            <div style="margin-top: 10px; display: flex; justify-content: flex-end; padding: 20px 20px 20px 0px">
                <div style="background: #4073ff; padding: 5px 20px; border-radius: 5px; color: #FFFFFF; cursor: pointer;" @click="createRoom">Отправить</div>
            </div>
        </div>
    </div>
</template>

<script>
import {ref, onMounted} from "vue"

import {useProduct} from "@/composition/useProduct.js"
export default {


    setup(props, {emit}) {
        const {postRoom}=useProduct()
        const room = ref({
            title: "",
            address: "",

            lat: 12.34,
            lon: 56.78,
            area: 78.91,

            has_balcony: false,
            has_loggia: false,
            
            room_count: 1,
            guest_count: 1,
            bed_count: 1,
            restroom_count: 1,

            washing_machine: false,
            fridge: false,
            tv: false,
            dishwasher: false,
            air_conditioner: false,

            children: false,
            animals: false,
            smoking: false,
            noise: false,
            party: false,

            price_short: 2000,
            price_long: 1000,
        })

        const createRoom = () => {
            postRoom(room.value)
        }
        return{
            room,
            createRoom,
        }
    }
}
</script>

<style scoped>
    .create {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  height: 100%;
  border-top: 1px solid #D6D6D6;
}

.create__header {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  padding: 20px;
}

.create__header_title {
  font-size: 18px;
  font-weight: 700;
  color: #101827;
}

.create__header_button {
  background: #4496E8;
  border: 1px solid #101827;
  padding: 5px 10px 5px 20px;
  border-radius: 5px;
  color: #FFFFFF;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  font-size: 14px;
}

.create__header_button img {
  margin-left: 10px;
}

.create__header_button:hover {
  background: #4073ff;
}

.create__main {
  padding: 0px 20px;
  max-width: 100%;
}

.create__item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  margin-top: 10px;
}

.create__item svg {
  background: #FFFFFF;
  border: 1px solid #000000;
  border-radius: 3px;
  margin-right: 5px;
  cursor: pointer;
}

.create__item_convenence {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.create__item_convenence .create__item {
  margin-right: 40px;
}

.create__item_rules {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.create__item_rules .create__item {
  margin-right: 20px;
}

.create__item-count {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

.create__item-balckons {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

.create__info-main_input {
  margin-left: 5px;
  border-radius: 2px;
  padding: 5px;
  background: #FFFFFF;
  width: 200px;
  box-shadow: 5px 5px 10px 5px #00000039;
}

.input {
  margin-left: 20px;
  box-shadow: 5px 5px 10px 5px #00000039;
}

.active {
  background: #4073ff !important;
}

</style>