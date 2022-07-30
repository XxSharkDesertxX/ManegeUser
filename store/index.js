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
                    localStorage.setItem("newuser", JSON.stringify(state.one));
                },
                removes(state,data){
                    state.one.splice(data,1);
                    localStorage.setItem("newuser", JSON.stringify(state.one));
                },
                save(state){
                    let data = JSON.parse(localStorage.getItem("newuser"));
                    state.one = data;
                }


            },

            actions:{
                addUser(context, paylod){
                    context.commit('appenduser', paylod);
                },

                remove(context, data){
                    context.commit('removes', data);
                },

                save(context){
                    context.commit('save');
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
