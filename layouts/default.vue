<template>
  <div   class="h-screen " >

    <div class="flex justify-between bg-white py-4 px-24 w-full fixed z-10 bg-opacity-75">
      <div class="flex items-center font-bold text-3xl ">

        <nuxt-link to="/">Medium</nuxt-link>
        
      </div>
      <div class="flex  space-x-6  items-center 
       text-gray-800 font-medium ">

       <div>

         <nuxt-link to="/membership">subscribe</nuxt-link>
         <!-- <a href=""></a> -->
       </div>

       <div>
         <a href="">Write</a>
       </div>
       
       
        <div>

          <button @click="handleCall">signin</button>
          <!-- <a href="" @click="handleCall">signin</a> -->
        </div>
         <div>
           <button class="py-2 px-8 bg-green-700 text-white text-center  rounded-lg">Get started</button>
         </div>
      </div>
    </div>

     <div   v-bind:class="{'hide':isOpened}"  class="h-full ">
       <Nuxt />
     </div>
    
  </div>
 
</template>
<script lang="ts">
import Vue from 'vue';

import {mapGetters,mapActions} from "vuex";
export default Vue.extend({
    data(){

         return {
             opened:true,
         }

     },


  computed:{
    ...mapGetters(["isOpened"])

  },

  methods:{
    ...mapActions(['callOpened']),

    handleCall(){
      this.callOpened();
    }
  }
  
})
</script>
<style>

.hide{
  overflow-y: hidden;
}
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
