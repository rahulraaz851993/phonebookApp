<template>
<div>
<nav class="panel column is-offset-2 is-8">
  <p class="panel-heading">
    Phonebook App
     <button class="button is-link is-outlined" @click="addPhone">
      Add New
    </button>
  </p>
  <div class="panel-block">
    <p class="control has-icons-left">
      <input class="input" type="text" placeholder="Search">
      <span class="icon is-left">
        <i class="fa fa-search" aria-hidden="true"></i>
      </span>
    </p>
  </div>
  
  <a class="panel-block">
    <span class="column is-9">
      marksheet
    </span>
    <span class="panel-icon  column is-1">
      <i class="has-text-danger fa fa-trash" aria-hidden="true"></i>
    </span>
    <span class="panel-icon  column is-1">
      <i class="has-text-info fa fa-edit" aria-hidden="true"></i>
    </span>
    <span class="panel-icon  column is-1">
      <i class="has-text-primary fa fa-eye" aria-hidden="true"></i>
    </span>
  </a>
</nav>

<!-- Add Model here -->
<Add :showModel="addActive" @closeAddModel = "closeAddPhoneModel"></Add>
</div>
</template>

<script>
const Add = require('./Add.vue').default;

export default {
  components : { Add },
  data(){
    return{
      addActive : '',
    }
  },
  methods : {
    addPhone : function(){
      this.addActive = 'is-active';
    },
    closeAddPhoneModel : function(){
      this.addActive = '';
    }
  }
}
</script>