<template>
  <div>
    <p-dialog
      v-model:visible="show"
      :draggable="false"
      modal
      @after-hide="closeDialog"
      :style="{ width: '20rem' }"
      :closable="false"
    >
      <h3>{{ msg }}</h3>
      <p>Iremos direcioná-lo para página de cadastro.</p>
      <i
        class="pi pi-spin pi-spinner"
        style="font-size: 2rem; color: rgb(61, 169, 252)"
      >
      </i>
      {{ timerCount }}
      <button @click="redirect()">Redirecionar</button>
      
    </p-dialog>
  </div>
  
</template>
      
<script>

import PDialog from "primevue/dialog";

setTimeout(function() {
      window.location.href = "/login"
  },8000);  

export default {
  components: { PDialog },

  data() {
    return {
      show: true,
      msg: "Email Confirmado!",
      timerCount: 8,
    }
  },

  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--;
          }, 1000);
        }
      },
      immediate: true,
    },
  },
  methods: { 
    redirect(){
      this.$router.push("/cursos");
    },      
  },
}

</script>

<style scoped>
h3 {
  color: green;
}
p {
  color: black;
  font-size: 19px;
}
</style>
