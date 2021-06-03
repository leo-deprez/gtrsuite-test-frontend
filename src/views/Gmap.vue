<template>
  <div class="gmap">
    <div class="gmap__description mb-6">
      Dans cet exercice vous allez devoir réaliser une série de tâches concernant Google Maps en utilisant les plugins
      <a href="https://github.com/diegoazh/gmap-vue" target="_blank">gmap-vue</a> et
      <a href="https://github.com/eregnier/vue2-gmap-custom-marker">vue2-gmap-custom-marker</a> :
      <ul>
        <li>
          <strong>Exercice n°1</strong> : Mettre un marker en place sur la carte et rajouter une interaction de votre
          choix sur ce dernier. (Vous pouvez utiliser l'image <code>src/assets/images/map-marker.svg</code>)
        </li>
        <li>
          <strong>Exercice n°2</strong> : Récupérer le contenu du fichier geojson
          <code>public/data/chambery.geojson</code> et l'afficher sur la carte.
        </li>
      </ul>
    </div>
    <gmap-map
      :center="map.center"
      :zoom="map.zoom"
      ref="gmap"
      :options="map.options"
      map-type-id="roadmap"
      class="gmap__map"
    >
      <gmap-custom-marker :marker="{ lat: 45.5845569, lng: 5.9005165 }">
        <img src="src/assets/images/map-marker.svg">
        <my-component></my-component>
      </gmap-custom-marker>

      <gmap-custom-marker :marker="markers">
        <my-component></my-component>
      </gmap-custom-marker>
    </gmap-map>
  </div>
</template>

<script>
import { sendGetRequest } from '@/services/api.service.js'
import GmapCustomMarker from 'vue2-gmap-custom-marker';


export default {
  name: 'Gmap',
  components: {
      'gmap-custom-marker': GmapCustomMarker
  },
  data() {
    return {
      map: {
        center: { lat: 45.5845569, lng: 5.9005165 },
        marker: null,
        zoom: 13,
        options: {
          disableDefaultUI: true,
          styles: [
            {
              featureType: 'administrative',
              elementType: 'geometry',
              stylers: [
                {
                  color: '#a7a7a7',
                },
              ],
            },
            {
              featureType: 'administrative',
              elementType: 'labels.text.fill',
              stylers: [
                {
                  visibility: 'on',
                },
                {
                  color: '#737373',
                },
              ],
            },
            {
              featureType: 'landscape',
              elementType: 'geometry.fill',
              stylers: [
                {
                  visibility: 'on',
                },
                {
                  color: '#efefef',
                },
              ],
            },
            {
              featureType: 'landscape.natural',
              elementType: 'labels',
              stylers: [
                {
                  visibility: 'off',
                },
              ],
            },
            {
              featureType: 'poi',
              elementType: 'geometry.fill',
              stylers: [
                {
                  visibility: 'on',
                },
                {
                  color: '#dadada',
                },
              ],
            },
            {
              featureType: 'poi',
              elementType: 'labels',
              stylers: [
                {
                  visibility: 'off',
                },
              ],
            },
            {
              featureType: 'poi',
              elementType: 'labels.icon',
              stylers: [
                {
                  visibility: 'off',
                },
              ],
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [
                {
                  color: '#696969',
                },
              ],
            },
            {
              featureType: 'road',
              elementType: 'labels.icon',
              stylers: [
                {
                  visibility: 'off',
                },
              ],
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.fill',
              stylers: [
                {
                  color: '#ffffff',
                },
              ],
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [
                {
                  visibility: 'on',
                },
                {
                  color: '#b3b3b3',
                },
              ],
            },
            {
              featureType: 'road.arterial',
              elementType: 'geometry.fill',
              stylers: [
                {
                  color: '#ffffff',
                },
              ],
            },
            {
              featureType: 'road.arterial',
              elementType: 'geometry.stroke',
              stylers: [
                {
                  color: '#d6d6d6',
                },
              ],
            },
            {
              featureType: 'road.local',
              elementType: 'geometry.fill',
              stylers: [
                {
                  visibility: 'on',
                },
                {
                  color: '#ffffff',
                },
                {
                  weight: 1.8,
                },
              ],
            },
            {
              featureType: 'road.local',
              elementType: 'geometry.stroke',
              stylers: [
                {
                  color: '#d7d7d7',
                },
              ],
            },
            {
              featureType: 'transit',
              elementType: 'all',
              stylers: [
                {
                  color: '#808080',
                },
                {
                  visibility: 'off',
                },
              ],
            },
            {
              featureType: 'water',
              elementType: 'geometry.fill',
              stylers: [
                {
                  color: '#d3d3d3',
                },
              ],
            },
          ],
        },
      },
      popup: false,
    }
  },
  computed: {
    markers() {
      return sendGetRequest('/data/chambery.geojson')
    }
  }
}
</script>

<style lang="scss" scoped>
.gmap {
  display: flex;
  flex-direction: column;
  height: 100%;

  &__map {
    height: 100%;
  }
}
</style>
