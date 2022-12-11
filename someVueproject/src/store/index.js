import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const user = {
    namespaced:true,
    actions:{},
    mutations:{
        LOGIN:function(state,value)
        {
            state.nowUser = value
        },
        EXIT:function(state)
        {
            state.nowUser = ''
        }
    },
    state:{
        nowUser:''
    },
    getters:{}
}

const b = {
    namespaced:true,
    actions:{},
    mutations:{},
    state:{},
    getters:{}
}

const store = new Vuex.Store({
    modules:{
        userPart:user,
        bPart:b
    }
})

export default store