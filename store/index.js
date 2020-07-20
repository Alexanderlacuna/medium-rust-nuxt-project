



export const state=()=>(
    {
        counter:0,
        opened:false
    }
)

export const mutations={
    increment(state){
        state.counter++
    },

   

    setopened(state){
        state.opened=!state.opened
    }
}

export const getters={
    getCount:(state)=>{
        return state.counter;
    },
    isOpened:(state)=>{
        return state.opened
    }

}

export const actions={
    addNumber({commit}){
        commit("increment");
    },

    callOpened({commit}){
        commit("setopened")
    }



}