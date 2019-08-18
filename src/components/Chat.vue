<template>
    <div class="chat container">
    <h2 class="indigo-text center-align">Chat Application</h2>
    <div class="card">
        <div class="card-content">
            <ul class="messages">
                <li v-for="msg in message" :key="msg.id">
                    <span class="indigo-text">{{ msg.name }} : </span>
                    <span class="grey-text text-darken-3">{{ msg.content }}</span>
                     <span class="grey-text time">{{ msg.timestamp }}</span>
                </li>
            </ul>
        </div>

        <div class="card-action"> 
            <NewMessage :name="name"/>
        </div>
    </div>
    </div>
</template>

<script>
import NewMessage from '@/components/NewMessage'
import db from '@/firebase/init'
import moment from 'moment'
export default {
    name: 'Chat',

    props: ['name'],

    components:{
        NewMessage
    },

    data(){
        return{
            message: [],
        }
    },
    created(){
        let ref = db.collection('message').orderBy('timestamp')

        ref.onSnapshot(snapshot =>{
         snapshot.docChanges().forEach(change =>{
             if(change.type =='added'){
                 let doc = change.doc
                this.message.push({
                    id: doc.id,
                    name: doc.data().name,
                    content: doc.data().content,
                    timestamp: moment(doc.data().timestamp).format('llll'),

                })

             }
         })   
        })
    }
}
</script>


<style>
.chat h2{
    margin-bottom: 40px;
    font-size: 2.6em;
}

.chat span{
    font-size: 1.4em;
}

.chat .time{
    display: block;
    font-size: 1.2em;
}

.messages{
    max-height: 300px;
    overflow: auto;
}


</style>


