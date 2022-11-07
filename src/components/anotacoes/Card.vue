<template>
    <div class="card" data-bs-toggle="modal" data-bs-target="#myModal">
        
        <div class="titulo">
            {{ anotacao.titulo }}
        </div>
        <div class="descricao">
            {{ anotacao.descricao }}
        </div>
    </div>
</template>
  
<script>
import AnotacoesModal from '@/components/anotacoes/AnotacoesModal.vue'

export default {
    components: { AnotacoesModal },
    data() {
        return {

        }


    },
    props: {
        anotacao: {
            titulo: String,
            descricao: String
        }
    },

    methods: {
        
    }

}
</script>
  
<style lang="scss" scoped>
$button: rgb(61, 169, 252, );
$card: rgb(249, 192, 139);

.card {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 0.9rem .7rem;
    justify-content: center;
    background-color: $card;
    width: 30%;
    height: 40%;
    border-radius: 0.7rem;
    border: none;
    box-shadow: 0px 10px 10px #00000056;
    cursor: pointer;

}

.titulo {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    font-weight: 800;
    font-size: 1.1rem;

    height: 40%;

}
.descricao {
    font-weight: 500;
    display: flex;
    align-items: flex-start;
    justify-content: center;

    height: 50%;
}
</style>