<template>
  <div class="seo">
    <div class="seo__description mb-6">
      Dans cet exercice vous devez analyser l'image ci-dessous et expliquer ce que vous appliqueriez en termes de
      semantique SEO (h1, h2, meta, etc...). Vous devez également donner un exemple de données structurées pour cette
      page au format JSON-LD en vous basant sur la structure
      <a href="https://schema.org/docs/documents.html" target="_blank">Schema.org</a>.
    </div>
    <v-img :src="require('@/assets/images/seo.png')" />
  </div>
</template>

<script>
export default {
  name: 'Seo',
}
</script>
