<template>
<div v-bind:class="{'hide':isOpened}">

  <div   v-if="isOpened" class="  transition ease-in-out duration-150 absolute bg-white  control bg-opacity-75 z-30 " > 

     

  <div class="bg-white max-w-2xl mx-auto container flex flex-col items-center shadow-lg  border  border-gray-200">

    
       <div>
      <div class=" px-10 py-10  cursor-pointer " @click="callOpened">
         <span class="text-blue-500 "><font-awesome-icon :icon="['fas','times',]"/></span>

      </div>
    </div>
     <div class="pb-10 font-semibold text-xl">
       <h3>Welcome back</h3>
     </div>
    <div class="flex  justify-center  px-20 ">
      <p class="text-center">
        Sign to get personalized story remmendations follow authors 
        and topics you love and interact  with storiess
      </p>
    </div>
    <div class="space-y-6 mt-4 flex flex-col items-center" >
      <div>
      <button class=" space-x-3 px-10 rounded-lg py-3 border border-gray-600" >
         <span class="text-green-600"><font-awesome-icon :icon="['fab','google']"/></span>
       <span> Sign in with Google</span>
      </button>
    </div>
     <div>
      <button class="space-x-3 px-10 rounded-lg py-3 border border-gray-600">
        <span  class="text-blue-700"><font-awesome-icon :icon="['fab','facebook-square',]"/></span>
          
       <span>Signin with facebook</span>
      </button>
    </div>
      <div>
      <button class="space-x-3 px-10 rounded-lg py-3 border border-gray-600" >
          <span class="text-blue-500"><font-awesome-icon :icon="['fab','twitter',]"/></span>
        <span>Sign in with Facebook</span>
      </button>
    </div>
    <div>

    
      <button  class="space-x-3 px-10 rounded-lg py-3 border border-gray-600">

        <span>  <font-awesome-icon  :icon="['fab','apple']"/></span>
        <span>Sign in with Apple</span>
        
        
      </button>
    </div>
    <div>
      <button  class="space-x-3 px-10 rounded-lg py-3 border border-gray-600">
       <span class="text-gray-500">  <font-awesome-icon  :icon="['fas','envelope']"/></span>

       <span>Sign with email</span>
      </button>
    </div>

    <div>
      <a href="">no account <span class="text-green-600">create one</span></a>
    </div>

    <div>
      <p class="text-sm text-gray-700 text-center mx-20 py-8">to make our work easier work,we log user data and
        share  it with services providers.Click "Sign In" above
        accept mediums  <span>Terms of service</span>
        <span>&Private policy</span>
      </p>
    </div>
    </div>
  </div>

  </div>


  <div>
    <section class="container  flex  flex-col  justify-center items-center  ">

      <!-- section on the header -->
 <div class="max-w-4xl text-center py-20">

   <div class=" flex  flex-col  space-y-1 ">
       <h2 class=" text-gray-800 lg:tracking-tight lg:text-6xl font-bold text-center
        self-center font-sans">Get smarter about what matters to you</h2>
       <p class="font-semibold lg:text-lg text-gray-900">Select  what you're into.we'll help you find great things to read</p>
   </div>

 </div>

 <!-- it ends here -->


 <div class="flex   space-x-2 flex-wrap  space-y-1 max-w-4xl mx-auto ">
  <div class="flex space-x-1 bg-gray-200 px-5 py-1 rounded-full">
    <h3 class="px-2 bg-black text-white rounded-full text-center self-center">#</h3>
    <h3 class="self-center">Future</h3>
  </div>
   <div class="flex space-x-1 bg-gray-400 px-5 py-2 rounded-full">
    <h3 class="px-2 bg-black text-white rounded-full">#</h3>
    <h3 class="self-center">Future</h3>
  </div>
   <div class="flex space-x-1 bg-gray-400 px-5 py-2 rounded-full">
    <h3 class="px-2 bg-black text-white rounded-full">#</h3>
    <h3 class="self-center">Future</h3>
  </div>
   <div class="flex space-x-1 bg-gray-400 px-5 py-2 rounded-full">
    <h3 class="px-2 bg-black text-white rounded-full">#</h3>
    <h3 class="self-center">Future</h3>
  </div>
   <div class="flex space-x-1 bg-gray-400 px-5 py-2 rounded-full">
    <h3 class="px-2 bg-black text-white rounded-full">#</h3>
    <h3 class="self-center">Future</h3>
  </div>
   <div class="flex space-x-1 bg-gray-400 px-5 py-2 rounded-full">
    <h3 class="px-2 bg-black text-white rounded-full">#</h3>
    <h3 class="self-center">Future</h3>
  </div>
   <div class="flex space-x-1 bg-gray-400 px-5 py-2 rounded-full">
    <h3 class="px-2 bg-black text-white rounded-full">#</h3>
    <h3 class="self-center">Future</h3>
  </div>
   <div class="flex space-x-1 bg-gray-400 px-5 py-2 rounded-full">
    <h3 class="px-2 bg-black text-white rounded-full">#</h3>
    <h3 class="self-center">Future</h3>
  </div>
   <div class="flex space-x-1 bg-gray-400 px-5 py-2 rounded-full">
    <h3 class="px-2 bg-black text-white rounded-full">#</h3>
    <h3 class="self-center">Future</h3>
  </div>
   <div class="flex space-x-1 bg-gray-400 px-5 py-2 rounded-full">
    <h3 class="px-2 bg-black text-white rounded-full">#</h3>
    <h3 class="self-center">Future</h3>
  </div>
   <div class="flex space-x-1 bg-gray-400 px-5 py-2 rounded-full">
    <h3 class="px-2 bg-black text-white rounded-full">#</h3>
    <h3 class="self-center">Future</h3>
  </div>
   <div class="flex space-x-1 bg-gray-400 px-5 py-2 rounded-full">
    <h3 class="px-2 bg-black text-white rounded-full">#</h3>
    <h3 class="self-center">Future</h3>
  </div>
   <div class="flex space-x-1 bg-gray-400 px-5 py-2 rounded-full">
    <h3 class="px-2 bg-black text-white rounded-full">#</h3>
    <h3 class="self-center">Future</h3>
  </div>
   <div class="flex space-x-1 bg-gray-400 px-5 py-2 rounded-full">
    <h3 class="px-2 bg-black text-white rounded-full">#</h3>
    <h3 class="self-center">Future</h3>
  </div>
 </div>

 <div>
  <div class="py-5 flex flex-col">
    <button class=" text-center px-10 lg:px-32 py-4  bg-green-600 text-white rounded-lg mb-4">Get Started</button>
    <p class="text-center self-center">Already have an acount?<span class= "text-green-800"> Sign in</span></p>
  </div>
 </div>

  </section>


<div class="container">
  <div class="py-16 max-w-5xl mx-auto flex justify-around text-gray-600 text-xl">
    <div class="flex space-x-1">
   <span class="text-green-600  ">
      <font-awesome-icon :icon="['fas','check-circle',]"/>
   </span>
    <h3 >World-class publications </h3>
    </div>
     <div class="flex">
    <span class="text-green-600">
      <font-awesome-icon :icon="['fas','check-circle',]"/>
    </span>
    <h3>Undiscovered voices </h3>
    </div>
     <div class="flex">
     <span class="text-green-600">
      <font-awesome-icon :icon="['fas','check-circle',]"/>
    </span>
    <h3>Topic you love</h3>
    </div>

    <div>
      <h3  class="font-semibold text-black">All medium,all for you</h3>
    </div>

  </div>

  <div class="px-16">
    <h2 class=" tracking-wide lg:text-6xl font-semibold capitalize py-2 text-gray-800">No ads.No problems.</h2>
    <p class=" text-xl text-gray-700">Your privacy stays yours.we don't sell data or target  you with  ads.Ever.</p>

    <div class="flex flex-row  justify-evenly py-8 " >

      <div class="w-1/2 ">
        <div class=" h-full flex items-end py-4 px-2">
          <button class=  "  px-32  py-4  bg-green-600  text-white font-semibold">Get Started</button>
        </div>

      </div>
      <div class=" w-1/2  space-y-8"> 
        <h3 class="font-bold text-xl">we  do things very differently</h3>
        <div >
          <p class=" leading-loose text-gray-700  text-xl">
         
              <q>
                Medium is not like any other platform on the internet.
               Our sole purpose is to help you find compelling ideas, knowledge, 
               and perspectives. We don’t serve ads—we serve you, the curious reader
                who loves to learn new things. Medium is home to thousands of
                 independent voices, and we combine humans and technology to 
                 find the best reading for you—and filter out the rest
              </q>
            
          </p>
        </div>
      </div>
    </div>

   
  </div>


  <div class="container">
   <div class="grid-rows-6 " >
     <div class="flex justify-center  ">


       <hr>
       horizontal line goes here

     </div>

     <div class="grid grid-rows- my-12 " >

       <div class="grid grid-cols-12  px-10 "> 



       <div  class="col-span-5 ">
          <h2 class="text-left text-6xl font-bold z-20 ">  120 million curious readers and growing</h2>
       </div>

       <div class="bg-green-300   col-span-7   -ml-32 bg-opacity-75  grid grid-rows-2 ">
         <h2 class="text-center items-center justify-center px-32 py-16 font-semibold text-2xl ">
         <q>
             Medium is a great place to read and learn from a wide range of authors. It’s not muddied up by ads. It’s not fake news. It feels like one of the few pure places to go online.
         </q>
         </h2>

       </div>
       </div>


     </div>
   </div>

   <div class="my-10">
     <div  class="flex  py-12 flex-col  items-center space-y-6 justify-center ">
       <h3 class="font-semibold text-lg">Our Subsription.Unlimited ideas</h3>

     <div class=" text-gray-700 text-center text-lg">
         <p>Read  unlimited  stories  with an optional Subsription of $5/months.</p>
       <p>If it's is not you.Cancel any time</p>
     </div>
     </div>
   </div>

   <div class=" text-center pb-4">
     line here
   </div>
  </div>

  <div  class="container2  ">
    <h3 class="text-6xl font-semibold text-center leading-tight">
      Expand you reading .
    </h3>
    <h3 class="text-6xl font-semibold text-center">
     Expand your mind.
    </h3>

    <div  class="text-center py-4 my-16">
      <button class="py-5 font-semibold px-32 bg-green-600 text-white">Get Started</button>
    </div>

  </div>




</div>
  <div class="container3 bg-black text-white w-screen pl-1">
    <div class=" py-12 px-16">

      <h3>Logo here</h3>

      <div class="flex space-x-6  pt-5">
        <div>
          <a href="">Get started</a>
        </div>
        <div>
          <a href="">Subscribe</a>
        </div>

         <div>
          <a href="">have an acount?Sign in</a>
        </div>
      </div>
       <div class="flex space-x-6  pt-5">
        <div>
          <a href="">About medium</a>
        </div>
        <div>
          <a href="">Write</a>
        </div>

         <div>
          <a href="">Gift </a>
        </div>
        <div>
          <a href="">Help </a>
        </div>
           <div>
          <a href="">Press contacts </a>
        </div>
           <div>
          <a href="">Career</a>
        </div>
           <div>
          <a href="">legal</a>
        </div>
        
      </div>

      <div class=" mt-2">
       <a href="" class="text-gray-600">Get the medium app</a>
      </div>

      <div class="py-16 text-sm text-gray-600">
        &copy;2020;medium corporation
      </div>

    </div>

  </div>

  </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import {mapGetters,mapActions} from "vuex";
export default Vue.extend({

  computed:{

    ...mapGetters(['isOpened'])

  },
  methods:{

    ...mapActions(["callOpened"]),

  },

      data(){

         return {
             opened:false,
         }

     },

})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.hide {
   overflow-y: hidden;
}
.control{
  min-width: 100vw;
  min-height: 100vh;
}
.container2{
  min-height: 50vh;

}
.container3{
  min-height: 60vh;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  /* display: flex;
  justify-content: center;
  align-items: center;
  text-align: center; */
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
