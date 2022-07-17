<template>
  <div class="dashboard p-4">
    <nav class="flex" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <li class="inline-flex items-center">
          <a
            href="#"
            class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <svg
              class="mr-2 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
              ></path>
            </svg>
            Текущие аренды
          </a>
        </li>
      </ol>
    </nav>
    <!-- end nav -->
    <div class="mt-5 w-full">
      <h1 class="text-2xl text-gray-900 dark:text-gray-200 font-medium">
        Текущие аренды
      </h1>
    </div>
    <div
      class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border shadow"
    >
      <h2 class="font-bold text-lg text-gray-800 dark:text-gray-200">
        Информация об арендах
      </h2>
      <p class="text-gray-400 font-lexend font-normal">
       <!--  This is a list of latest transactions -->
      </p>
      <div class="wrapping-table mt-10">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400 lg:overflow-auto overflow-x-scroll"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="uppercase px-6 py-3">Наименование</th>
              <th scope="col" class="uppercase px-6 py-3">Дата размещения</th>
              <th scope="col" class="uppercase px-6 py-3">Адрес</th>
              <th scope="col" class="uppercase px-6 py-3">Стоимость</th>
              <th scope="col" class="uppercase px-6 py-3">Статус</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="rent in rents"
              :key="rent.id">
                <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50"
                v-if="rent.status != 'Прошедшая' && rent"
                >
                <td class="px-6 py-4">
                    {{ rent.flat.title }}
                </td>
                <td class="px-6 py-4">
                    {{ new Date(rent.start_at * 1000).toLocaleDateString() }} - {{ new Date(rent.end_at * 1000).toLocaleDateString() }}
                </td>
                <td class="px-6 py-4">
                    {{rent.flat.address}}
                </td>
                <td class="px-6 py-4">
                    {{ (rent.total_price).toLocaleString('ru')}}₽
                </td>
                <td class="px-6 py-4">
                <span
                  class="text-green-800 bg-green-300 px-3 py-1 rounded-md"
                  v-if="rent.status == 'Предстоящая'"
                >
                  {{ rent.status }}
                </span>
                <span
                  class="text-purple-800 bg-purple-300 px-3 py-1 rounded-md"
                  v-else-if="rent.status == 'Текущая'"
                >
                  {{ rent.status }}
                </span>
                <span
                  class="text-red-800 bg-red-300 px-3 py-1 rounded-md"
                  v-else
                >
                  {{ rent.status }}
                </span>
              </td>
                </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import { Icon } from "@iconify/vue";
    import {useArend} from "@/composition/useArend.js"
  import {ref, onMounted} from "vue"
  export default {
    name: "Dashboard",

    setup(){
      const {getArends, rents} = useArend()

      const dataUser = ref(null)

      onMounted(() => {
        getArends()
      })
      return{
        rents
      }
    },
    components: {
      Icon,
    },
    mounted() {},
  };
</script>
