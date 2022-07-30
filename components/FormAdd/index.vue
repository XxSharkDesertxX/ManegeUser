<template>
  <v-form v-model="valid" >
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="ages"
            label="Age user"
            type="number"
            :rules="rulesAge"
            :counter="3"
            required
          ></v-text-field>
        </v-col>
      </v-row>
         <v-btn class=" mt-2" @click.prevent="submitHandler">
             <v-icon>
                    mdi-check-circle
             </v-icon>
        </v-btn>
    </v-container>
  </v-form>
</template>

<script>
import { mapActions } from "vuex";
import { mapState } from "vuex";

  export default {
    data: () => ({
      valid: false,
      firstname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      ages: "" ,
      rulesAge:[
        v => !!v || "Age is required",
        v => v.length <= 3 || "Age must be in 3 number"
      ]
    }),

    computed:{
        ...mapState([
          'one'
        ])
    },

    methods:{
        ...mapActions([
            'addUser',
        ]),
        submitHandler(){
            
            if (this.firstname.length == 0) {
                return this.firstname
            }

            if (this.ages.length === 0) {
                return this.ages
            }

            const name = this.firstname;
            const age = this.ages;
            const id = this.one.length;
            

          
            const paylod = {
                name,
                age,
                id,
                img:"https://th.bing.com/th/id/R.898a454aed8eda454fd4ea6d11d27ebb?rik=KxVePyS8%2bDRP%2bA&pid=ImgRaw&r=0",
                
            }

         this.addUser(paylod)
         this.firstname ='',
         this.ages = ''
        },

    }
   
  }
</script>