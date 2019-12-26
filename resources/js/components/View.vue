<template>
<div class="modal" :class="showViewModel">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Modal title</p>
      <button class="delete" aria-label="close" @click="close"></button>
    </header>
    <section class="modal-card-body">
      <div class="field">
      <div class="control">
        <input class="input" type="text" v-model="list.brand_name" readonly>
      </div>
      </div>
      <div class="field">
      <div class="control">
        <input class="input" type="text" v-model="list.mobile_name" readonly>
      </div>
      </div>
      <div class="field">
      <div class="control">
        <input class="input" type="text" v-model="list.price" readonly>
      </div>
      </div>
      <div class="field">
      <div class="control">
        <input class="input" type="text" v-model="list.warranty" readonly>
      </div>
      </div>
    </section>
    <footer class="modal-card-foot">
      <button class="button" @click="close">Cancel</button>
    </footer>
  </div>
</div>
</template>

<script>
export default {
    props : [
        'showViewModel'
    ],
    data(){
      return {
        list : {},
      }
    },
    methods : {
        close : function(){
         this.$emit('closeViewModel');
        }
    }
}
</script>