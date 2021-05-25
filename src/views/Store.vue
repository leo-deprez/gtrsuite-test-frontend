<template>
  <div class="store">
    <div class="store__description mb-6">
      Dans cet exercice vous devez récupérer les données de cette API
      <a href="https://jsonplaceholder.typicode.com/todos" target="_blank">https://jsonplaceholder.typicode.com/todos</a
      >, les stocker dans le module du store <code>src/store/modules/request.store.js</code> et afficher ces données
      dans le composant Vuetify
      <a href="https://vuetifyjs.com/en/components/data-tables/" target="_blank"><code>v-data-table</code></a
      >.<br />
      Le but de cet exercice est d'évaluer votre capacité à récupérer une donnée distante de manière asynchrone, de
      stocker son contenu dans le store de <a href="https://vuex.vuejs.org/" target="_blank">Vuex</a> et de le récupérer
      dans les vues/composants d'une applicaiton Vue.js.<br />
      Pour ce faire, vous devez rajouter le code manquant dans les fichier <code>src/views/Store.vue</code> et
      <code>src/store/modules/request.store.js</code>.<br />
      <em
        >Note : Pour vous aider, vous pouvez utiliser la fonction <code>sendGetRequest</code> du fichier
        <code>src/services/api.service.js</code> (utilisant
        <a href="https://axios-http.com/" target="_blank">Axios</a>).</em
      >
    </div>
    <v-data-table
      class="store__data-table"
      :headers="headers"
      :items="items"
      :loading="items.length ? false : true"
      loading-text="Chargement des données... Veuillez patienter"
    >
    </v-data-table>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Store',
  data() {
    return {
      headers: [],
    }
  },
  computed: {
    ...mapState({}),
    items() {
      return []
    },
  },
  methods: {
    ...mapActions({}),
  },
}
</script>
