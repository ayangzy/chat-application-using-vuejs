<template>
    <div class="new-message">
        <form @submit.prevent="addMessage">
            <label for="new message">New Message(Enter to add a message): </label>
            <input type="text" name="new-message" v-model="newMessage">
           <p v-if="feedback" class="red-text">{{feedback}}</p>
        </form>
    </div>
</template>



<script>
import db from '@/firebase/init'

export default {
    
    name: 'NewMessge',
    props: ['name'],

    data(){
        return{
            newMessage: null,
            feedback: null,
        }
    },

    methods: {
        addMessage(){
            if(this.newMessage){

                //add message to firestore
                db.collection('message').add({
                    content: this.newMessage,
                    name: this.name,
                    timestamp: Date.now(),

                }).catch(err =>{
                    console.log(err)
                })

                this.newMessage = null
                this.feedback = null
            }else{
                this.feedback = 'You must enter a message to send one'
            }
        }
    }
}
</script>

