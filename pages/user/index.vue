<template>
  <section class="container bg-gray-100 bg-opacity-25 ">
    <div class="bg-white shadow-lg  container4 md:w-1/2 mt-10 border border-gray-800">

    <div>
      <div class="flex justify-end px-10 py-10">
         <span class="text-blue-500 "><font-awesome-icon :icon="['fab','twitter',]"/></span>

      </div>
    </div>
     <div class="pb-10 font-semibold text-xl">
       <h3>Welcome back</h3>
     </div>
    <div class="flex  justify-center  px-20 ">
      <p class="text-center">
        Sign to get personalized story remmendations follow authors 
        and topics you love and interact  with stories
      </p>
    </div>
    <div class="space-y-6 mt-4">
      <div>
      <button class=" space-x-3 px-10 rounded-lg py-3 border border-gray-600">
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
      <p class="text-sm text-gray-700 text-center mx-20">to make our work easier work,we log user data and
        share  it with services providers.Click "Sign In" above
        accept mediums  <span>Terms of service</span>
        <span>&Private policy</span>
      </p>
    </div>
    </div>
   
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/


.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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
