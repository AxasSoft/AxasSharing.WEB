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
            Мои квартиры
          </a>
        </li>
      </ol>
    </nav>
    <!-- end nav -->
    <div class="mt-5 w-full">
      <h1 class="text-2xl text-gray-900 dark:text-gray-200 font-medium">
        Мои квартиры
      </h1>
    </div>
    <div
      class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border shadow"
    >
      <h2 class="font-bold text-lg text-gray-800 dark:text-gray-200">
        Мои квартиры
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
              <th scope="col" class="uppercase px-6 py-3">Адрес</th>
              <th scope="col" class="uppercase px-6 py-3">Кроткосрочная цена</th>
              <th scope="col" class="uppercase px-6 py-3">Долгосрочная цена</th>
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
                    {{ rent.title }}
                </td>
                <td class="px-6 py-4">
                    {{rent.address}}
                </td>
                <td class="px-6 py-4">
                    {{rent.price_short}}
                </td>
                <td class="px-6 py-4">
                    {{rent.price_long}}
                </td>
                <td class="px-6 py-4">
                <span
                  class="text-green-800 bg-green-300 px-3 py-1 rounded-md"
                  v-if="rent.status == 'Свободна'"
                >
                  {{ rent.status }}
                </span>
                <span
                  class="text-purple-800 bg-purple-300 px-3 py-1 rounded-md"
                  v-else-if="rent.status == 'Забронирована'"
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
      const {getRooms} = useArend()

      const dataUser = ref(null)
      const rents = ref(null)
      onMounted(() => {
        getRooms()
        .then((r) => {
          rents.value = r.data.data
        })
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
            categories: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
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
            name: "Revenue",
            data: [30, 40, 45, 50, 49, 60, 70, 91],
          },
          {
            name: "Revenue (Previous period)",
            data: [20, 34, 45, 55, 79, 87, 90, 98],
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
            name: "Product 1",
            data: [30, 40, 45, 50, 49, 60, 70, 91],
          },
          {
            name: "Product 2",
            data: [20, 34, 45, 55, 79, 87, 90, 98],
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
