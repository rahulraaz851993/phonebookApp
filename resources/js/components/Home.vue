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
  
  <a class="panel-block" v-for="item,key in lists">
    <span class="column is-3">
      {{ item.brand_name }}
    </span>
    <span class="column is-3">
      {{ item.mobile_name }}
    </span>
    <span class="column is-3">
      {{ item.price }}
    </span>
    <span class="panel-icon  column is-1" title="Delete">
      <i class="has-text-danger fa fa-trash" aria-hidden="true"></i>
    </span>
    <span class="panel-icon  column is-1" title="Edit">
      <i class="has-text-info fa fa-edit" aria-hidden="true" @click="editPhonebookModel(key)"></i>
    </span>
    <span class="panel-icon  column is-1" title="View">
      <i class="has-text-primary fa fa-eye" aria-hidden="true" @click="showPhonebookDetails(key)"></i>
    </span>
  </a>
</nav>

<!-- Add Model here -->
<Add :showModel="addActive" @closeAddModel = "closeAddPhoneModel"></Add>

<!-- View Model here -->
<ViewModel :showViewModel="showActive" @closeViewModel = "closeViewPhoneModel"></ViewModel>

<!-- Edit Model here -->
<edit-model :showModel="editActive" @closeAddModel = "closeAddPhoneModel"></edit-model>

</div>
</template>

<script>
const Add = require('./Add.vue').default;
const ViewModel = require('./View.vue').default;
const editModel = require('./Edit.vue').default;

export default {
  components : { Add, ViewModel, editModel },
  data(){
    return{
      addActive : '',
      showActive : '',
      editActive : '',
      lists : {},
      errors : {}
    }
  },
  mounted(){
    axios.post('getPhonebooks')
    .then((response) => this.lists = response.data.phonebooks)
    .catch((error) => this.errors = error.response.data.errors);
  },
  methods : {
    addPhone : function(){
      this.addActive = 'is-active';
    },
    showPhonebookDetails : function(index){
      this.showActive = 'is-active';
      this.$children[1].list = this.lists[index];
    },
    closeAddPhoneModel : function(){
      this.addActive = this.editActive = '';
    },
    closeViewPhoneModel : function(){
      this.showActive = '';
    },
    editPhonebookModel(key){
      this.editActive = 'is-active';
      this.$children[2].list = this.lists[key];
    }
  }
}
</script>