<template>
  <!-- App -->
  <div class="flex bg-packed font-lexend dark:bg-gray-900">
    <div
      id="sidebar-scroll"
      class="flex-sidebar lg:flex-auto w-sidebar lg:block hidden bg-white dark:bg-gray-800 border-r-2 dark:border-gray-700 h-screen lg:z-0 z-40 overflow-auto lg:relative fixed"
    >
      <Sidebar/>
    </div>
    <div class="flex-auto w-full overflow-auto h-screen" id="body-scroll">
      <Header v-if="showLogin"/>
      <router-view />
      <Footer v-if="showLogin"/>
    </div>
  </div>

  <!-- end app -->
</template>

<script>
  // vue Components
  import Sidebar from "@/components/Sidebar";
  import Header from "@/components/Header";
  import Footer from "@/components/Footer";
  // npm-js
  import Scrollbar from "smooth-scrollbar";

  export default {
    name: "App",

    components: {
      Header,
      Footer,
      Sidebar,
    },
    data() {
      return {
        showLogin: true
      }
    },
    watch(){
      if(this.$route.name == "login"){
        this.showLogin = false
      }
    },
    mounted() {
      Scrollbar.init(document.querySelector("#body-scroll"));

      setTimeout(() => {
        var alert_dis = document.querySelectorAll(".alert-dismiss");
        alert_dis.forEach((x) =>
          x.addEventListener("click", function () {
            x.parentElement.classList.add("hidden");
          })
        );
      }, 100);

      if(this.$route.path == "/autorization/login"){
        this.showLogin = true
      }

      // var acc = document.getElementsByClassName("accordion");
      // var i;
      // for (i = 0; i < acc.length; i++) {
      //   acc[i].addEventListener("click", function () {
      //     this.classList.toggle("active");
      //     var panel = this.nextElementSibling;
      //     if (panel.style.display === "block") {
      //       panel.style.display = "none";
      //       this.classList.remove("bg-gray-100");
      //       this.classList.add("bg-transparent");
      //     } else {
      //       panel.style.display = "block";
      //       this.classList.add("bg-gray-100");
      //       this.classList.remove("bg-transparent");
      //     }
      //   });
      // }
    },
  };
</script>
