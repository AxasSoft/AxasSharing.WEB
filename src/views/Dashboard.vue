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
            Статистика
          </a>
        </li>
      </ol>
    </nav>
    <!-- end nav -->
    <div class="mt-5 w-full">
      <h1 class="text-2xl text-gray-900 dark:text-gray-200 font-medium">
        Статистика
      </h1>
    </div>
    <!-- grid wrapper card -->
    <div
      class="wrapper-card grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-2 mt-5"
    >
      <!-- card  -->
      <div
        class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 shadow flex"
      >
        <div class="p-2 max-w-sm">
          <div
            class="bg-orange-200 rounded-full w-14 h-14 text-lg p-3 text-orange-600 mx-auto"
          >
            <span class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="30px"
                height="30px"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M10 16V8a2 2 0 0 1 2-2h9V5c0-1.1-.9-2-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-1h-9a2 2 0 0 1-2-2zm3-8c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h9V8h-9zm3 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div class="block p-2 w-full">
          <p class="font-semibold text-gray-900 dark:text-gray-200 text-xl">
            278 000 ₽
          </p>
          <h2 class="font-normal text-gray-400 text-md mt-1">Всего заработано</h2>
        </div>
      </div>
      <!-- end card -->
      <div
        class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 shadow flex"
      >
        <div class="p-2 max-w-sm">
          <div
            class="bg-green-200 rounded-full w-14 h-14 text-lg p-3 text-green-600 mx-auto"
          >
            <span class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="30px"
                height="30px"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M5 22h14a2 2 0 0 0 2-2V9a1 1 0 0 0-1-1h-3v-.777c0-2.609-1.903-4.945-4.5-5.198A5.005 5.005 0 0 0 7 7v1H4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2zm12-12v2h-2v-2h2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm-2 3h2v2H7v-2z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div class="block p-2 w-full">
          <p class="font-semibold text-gray-900 dark:text-gray-200 text-xl">
            15
          </p>
          <h2 class="font-normal text-gray-400 text-md mt-1">Арендовали</h2>
        </div>
      </div>
      <!-- end card -->
      <div
        class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 shadow flex"
      >
        <div class="p-2 max-w-sm">
          <div
            class="bg-red-200 rounded-full w-14 h-14 text-lg p-3 text-red-600 mx-auto"
          >
            <span class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="30px"
                height="30px"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 32 32"
              >
                <path
                  fill="none"
                  d="M8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0ZM20.5 12.5A4.5 4.5 0 1 1 16 8a4.5 4.5 0 0 1 4.5 4.5Z"
                />
                <path
                  fill="currentColor"
                  d="M26.749 24.93A13.99 13.99 0 1 0 2 16a13.899 13.899 0 0 0 3.251 8.93l-.02.017c.07.084.15.156.222.239c.09.103.187.2.28.3c.28.304.568.596.87.87c.092.084.187.162.28.242c.32.276.649.538.99.782c.044.03.084.069.128.1v-.012a13.901 13.901 0 0 0 16 0v.012c.044-.031.083-.07.128-.1c.34-.245.67-.506.99-.782c.093-.08.188-.159.28-.242c.302-.275.59-.566.87-.87c.093-.1.189-.197.28-.3c.071-.083.152-.155.222-.24ZM16 8a4.5 4.5 0 1 1-4.5 4.5A4.5 4.5 0 0 1 16 8ZM8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0Z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div class="block p-2 w-full">
          <p class="font-semibold text-gray-900 dark:text-gray-200 text-xl">
            364
          </p>
          <h2 class="font-normal text-gray-400 text-md mt-1">
            Уникальных посетителей
          </h2>
        </div>
      </div>
      <!-- end card -->
      <div
        class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 shadow flex"
      >
        <div class="p-2 max-w-sm">
          <div
            class="bg-purple-200 rounded-full w-14 h-14 text-lg p-3 text-purple-600 mx-auto"
          >
            <span class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="30px"
                height="30px"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 16 16"
              >
                <g fill="currentColor">
                  <path d="M15 13v1H1.5l-.5-.5V0h1v13h13Z" />
                  <path
                    d="M13 3.207L7.854 8.354h-.708L5.5 6.707l-3.646 3.647l-.708-.708l4-4h.708L7.5 7.293l5.146-5.147h.707l2 2l-.707.708L13 3.207Z"
                  />
                </g>
              </svg>
            </span>
          </div>
        </div>

        <div class="block p-2 w-full">
          <p class="font-semibold text-gray-900 dark:text-gray-200 text-xl">
            1 300
          </p>
          <h2 class="font-normal text-gray-400 text-md mt-1">Просмотры</h2>
        </div>
      </div>
      <!-- end card -->
    </div>
    <!-- end wrapper card -->
    <div class="mt-2 lg:flex block lg:gap-2">
      <div
        class="bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border shadow"
      >
        <h2 class="font-bold text-lg text-gray-800 dark:text-gray-200">
          График продаж
        </h2>
        <p class="text-gray-400 font-lexend font-normal">
          Количество продаж за текущий год
        </p>
        <span class="float-right mr-20">
          <h2 class="text-red-500 -mt-12 flex">
            <span class="mr-2"> 15.9% </span
            ><span>
              <Icon icon="akar-icons:arrow-down" />
            </span>
          </h2>
        </span>
        <span class="float-right">
          <h2 class="text-green-500 -mt-12 flex">
            <span class="mr-2"> 87.9% </span
            ><span>
              <Icon icon="akar-icons:arrow-up" />
            </span>
          </h2>
        </span>
        <br />
        <apexchart
          width="100%"
          height="380"
          type="area"
          :options="optionsArea"
          :series="seriesArea"
          :sparkline="{
            enabled: true,
          }"
        ></apexchart>
        <br />
        <hr />
      </div>
    </div>
    <div class="mt-2 lg:flex block lg:gap-2">
      <div
        class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border shadow"
      >
        <h2 class="font-bold text-lg text-gray-800 dark:text-gray-200">
          1 780
        </h2>
        <p class="text-gray-400 font-lexend font-normal">
          Аренд вашего жилья
        </p>
        <span class="float-right">
          <h2 class="text-green-500 -mt-12 flex">
            <span class="mr-2"> 27.9% </span
            ><span>
              <Icon icon="akar-icons:arrow-up" />
            </span>
          </h2>
        </span>
        <div class="wrapper-chart mt-5">
          <apexchart
            width="100%"
            height="380"
            type="bar"
            :options="optionsBar"
            :series="seriesBar"
          ></apexchart>
        </div>
      </div>
      <div
        class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border shadow"
      >
        <h2 class="font-bold text-lg text-gray-800 dark:text-gray-200">
          271
        </h2>
        <p class="text-gray-400 font-lexend font-normal">Посетителей за неделю</p>
        <span class="float-right">
          <h2 class="text-green-500 -mt-12 flex">
            <span class="mr-2"> 47.9% </span
            ><span>
              <Icon icon="akar-icons:arrow-up" />
            </span>
          </h2>
        </span>
        <div class="wrapper-chart mt-5">
          <apexchart
            width="100%"
            height="380"
            type="area"
            :options="optionsVisitor"
            :series="seriesVisitor"
          ></apexchart>
        </div>
      </div>
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

    data() {
      return {
        // for more guide apexchart.js
        // https://apexcharts.com/docs/chart-types/line-chart/

        // chart data area
        optionsArea: {
          xaxis: {
            categories: [1, 2, 3, 4, 5, 6, 7,],
          },
          fontFamily: "Segoe UI, sans-serif",
          stroke: {
            curve: "straight",
          },

          markers: {
            size: 0,
          },
          yaxis: {
            show: false,
          },
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.7,
              opacityTo: 0.9,
              stops: [0, 90, 100],
            },
          },
        },

        chart: {
          fontFamily: "lexend, sans-serif",
        },

        seriesArea: [
          {
            name: "Просмотры",
            data: [30, 40, 45, 50, 49, 60, 70],
          },
          {
            name: "Аренды",
            data: [20, 34, 45, 55, 79, 87, 90],
          },
        ],
        optionsBar: {
          chart: {
            toolbar: {
              show: false,
            },
            zoom: {
              enabled: false,
            },
            sparkline: {
              enabled: true,
            },
          },
          legend: {
            show: false,
          },
          xaxis: {
            show: false,
          },
          yaxis: {
            show: false,
          },
          colors: ["#4f46e5", "#DC2626"],
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "straight",
          },
        },

        seriesBar: [
          {
            name: "Кварира 90кв м.",
            data: [30, 40, 45, 50, 49, 60, 70,],
          },
          {
            name: "Квартира 36кв м.",
            data: [20, 34, 45, 55, 79, 87, 90,],
          },
        ],
        optionsVisitor: {
          chart: {
            toolbar: {
              show: false,
            },
            zoom: {
              enabled: false,
            },
            sparkline: {
              enabled: true,
            },
          },
          legend: {
            show: false,
          },
          xaxis: {
            show: false,
          },
          yaxis: {
            show: false,
          },
          colors: ["#4f46e5"],
          dataLabels: {
            enabled: false,
          },
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.7,
              opacityTo: 0.9,
              stops: [0, 90, 100],
            },
          },
          stroke: {
            curve: "smooth",
          },
        },

        seriesVisitor: [
          {
            name: "Visitor ",
            data: [30, 40, 45, 50, 49, 60, 70, 91],
          },
        ],
        optionsDonut: {
          chart: {
            type: "donut",
          },
          legend: false,
          dataLabels: {
            enabled: false,
          },
          labels: ["admin", "SuperAdmin", "User", "Costumer"],
        },

        seriesDonut: [20, 15, 63, 83],
        tableTransaction: [
          {
            transaction: "Квартира 90кв м.",
            datetime: "12.06.2022 - 14.06.2022",
            amount: "19 000 Р.",
            statusTransaction: "completed",
          },
          {
            transaction: "Квартира 65кв м.",
            datetime: "18.07.2022 - 19.07.2022",
            amount: "8 000 Р.",
            statusTransaction: "completed",
          },
          {
            transaction: "Payment from Alfiah Gipta Jannatil Hasanah",
            datetime: "May 5, 2022",
            amount: "Rp.150.000",
            statusTransaction: "progress",
          },
          {
            transaction: "Payment failed from #046577",
            datetime: "May 5, 2022",
            amount: "Rp.180.000",
            statusTransaction: "cancelled",
          },
        ],
      };
      // end chart data line
    },
    components: {
      Icon,
    },
    mounted() {},
  };
</script>
