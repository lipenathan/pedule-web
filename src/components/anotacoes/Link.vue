<template>
  <div class="inputs">
    <input type="text" placeholder="URL" v-model="link.url" @focusout="updateValue()">
    <input type="text" placeholder="Descrição" v-model="link.descricao" @focusout="updateValue()" > 
  </div>
</template>

<script>
export default {
    data() {
    return {
     link:{
      url: "",
      descricao: ""
     } 
    };
  },
  props: {
    // link: {
    //   url: "",
    //   descricao: ""
    // },
    update: false
  },
  methods: {
    setLink(){
      if(this.update){
        link.url = link.url
        link.descricao = link.descricao
      } 
    },
    updateValue(){
      this.$emit("updateValue", this.link)
    }
  },
  created(){
    this.setLink()
  }
}
</script>

<style scoped>
input,input:focus {
  width: 80%;
  display: block;
  border-style: none;
  outline: none;
  background-color: rgb(249, 192, 139);
  margin: 0 6px;
 
}
.inputs {
  width: 100%;
  border: solid 1px gray;
  border-radius: 10px;
}

</style>