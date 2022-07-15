import Vuex from 'vuex';
import one from "../data/one.js";

export default()=>{
        return new Vuex.Store({
            state:{
                one
            },

            mutations:{
                appenduser(state,paylod){
                    state.one.push(paylod);
                },
                removes(state,data){
                    state.one.splice(data,1);
                }


            },

            actions:{
                addUser(context, paylod){
                    context.commit('appenduser', paylod);
                },

                remove(context, data){
                    context.commit('removes', data);
                }

            },

            // can use of getters for filter 
            getters:{
                usersCont(state){
                    let users = state.one;
                    return users.length;
                }
            }
        });
};
