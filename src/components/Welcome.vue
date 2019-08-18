<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="grey-text">Welcome Guest</h2>
        <form @submit.prevent="enterChat">
          <div class="field text">
           
            <input type="text" name="name" v-model="name" placeholder="Enter your name" class="center-align">
          </div>
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
         <div>
            <button class="btn tea">Enter Chat</button>
         </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
     name: null,
     feedback: null,

    }
  },

  methods:{
    enterChat(){
      if(this.name){
        this.feedback = null
        this.$router.push({name: 'Chat', params: {name: this.name}})
      }else{
        this.feedback = 'You must enter a name'
      }
    }
  }
}
</script>

<style>
.welcome{
  max-width: 400px;
  margin-top: 100px;
}

.welcome h2{
  font-size: 2em;
}
.welcome button{
  margin: 30px auto;
}
</style>

