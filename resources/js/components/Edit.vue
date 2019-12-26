<template>
 <div class="modal" :class="showModel">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Modal title</p>
      <button class="delete" aria-label="close" @click="close"></button>
    </header>
    <section class="modal-card-body">
      <div class="field">
      <div class="control">
        <input class="input" type="text" :class="{'is-danger':errors.brand_name}" placeholder="Brand Name" v-model="list.brand_name">
        <small v-if="errors.brand_name" class="has-text-danger">{{errors.brand_name[0]}}</small>
      </div>
      </div>
      <div class="field">
      <div class="control">
        <input class="input" type="text" :class="{'is-danger':errors.mobile_name}" placeholder="Model Name" v-model="list.mobile_name">
        <small v-if="errors.mobile_name" class="has-text-danger">{{errors.mobile_name[0]}}</small>
      </div>
      </div>
      <div class="field">
      <div class="control">
        <input class="input" type="text" :class="{'is-danger':errors.price}" placeholder="Price" v-model="list.price">
        <small v-if="errors.price" class="has-text-danger">{{errors.price[0]}}</small>
      </div>
      </div>
      <div class="field">
      <div class="control">
        <input class="input" type="text" placeholder="Warranty In Months" v-model="list.warranty">
      </div>
      </div>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success" @click="savePhoneDetails">Update</button>
      <button class="button" @click="close">Cancel</button>
    </footer>
  </div>
</div>
</template>

<script>
export default {
  props : [
    'showModel'
  ],
  data(){
    return {
      list : {},
      errors : {}
    }
  },
  methods : {
    close : function(){
      this.$emit('closeAddModel');
    },
    savePhoneDetails : function(){
      var $this = this;
      axios({
        method: 'post',
        url: 'phonebook',
        data: this.list
      })
      .then(function(response){
        Object.keys($this.list).forEach(function(key,index) {
        $this.list[key] = '';
        });
        $this.close();
      })
      .catch(function (error) {   //If any error in then function then catch also execute.
      console.log(error.response);
        $this.errors = error.response.data.errors;
      });
    }
  }
}
</script>