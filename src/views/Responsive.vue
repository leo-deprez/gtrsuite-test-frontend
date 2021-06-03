<template>
  <div class="responsive">
    <div class="responsive__description mb-6">
      Dans cet exercice vous devez adapter le contenu ci-dessous pour qu'il soit compatible sur mobile, tablette et
      résolutions supérieures.<br />
      Pour ce faire, vous devez rajouter le style SCSS manquant (au
      <a href="https://www.alticreation.com/blog/bem-pour-le-css/" target="_blank">format BEM</a>) dans le fichier
      <code>src/views/Responsive.vue</code> en vous basant sur les maquettes
      <a href="responsive-mobile.png" target="_blank">mobile</a>,
      <a href="responsive-tablet.png" target="_blank">tablette</a> et
      <a href="responsive-desktop.png" target="_blank">desktop</a>.<br />
      <strong>Attention :</strong> Vous ne devez pas modifier le HTML.
    </div>
    <div class="mx-n4 mb-4 mx-sm-n6 mb-sm-n6">
      <!-- Début de la section à designer -->
      <div class="responsive__header">
        <v-icon class="responsive__header__menu-toggle">mdi-menu</v-icon>
        <div class="responsive__header__logo">
          <img :src="require('@/assets/images/logo-dark.svg')" width="150" class="responsive__header__logo__img" />
        </div>
        <div class="responsive__header__navigation">
          <div class="responsive__header__navigation__item" v-for="(item, idx) in menu" :key="`navigation-${idx}`">
            <v-icon class="responsive__header__navigation__item__icon">
              {{ item.icon }}
            </v-icon>
            <span class="responsive__header__navigation__item__label">
              {{ item.text }}
            </span>
          </div>
        </div>
      </div>
      <div class="responsive__container">
        <div class="responsive__container__top">
          <div class="responsive__container__top--align-start">
            <div class="responsive__container__top__title">Titre de la page</div>
            <div class="responsive__container__top__breadcrumb">
              <v-icon class="responsive__container__top__breadcrumb__home" color="#b6b6c3">mdi-home</v-icon>
              <div
                class="responsive__container__top__breadcrumb__item"
                v-for="(item, idx) in breadcrumb"
                :key="`breadcrumb-${idx}`"
              >
                <div class="responsive__container__top__breadcrumb__item__separator">•</div>
                {{ item }}
              </div>
            </div>
          </div>
          <div class="responsive__container__top--align-end">
            <v-btn elevation="2" rounded class="responsive__container__top__cta"> Ajouter un élément </v-btn>
          </div>
        </div>
        <div class="responsive__container__elements">
          <v-card
            class="responsive__container__elements__item"
            v-for="(element, idx) in elements"
            :key="`element-${idx}`"
            outlined
          >
            <v-img
              :src="element.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="element.title"></v-card-title>
            </v-img>
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </div>
      <div class="responsive__navigation-mobile">
        <div class="responsive__navigation-mobile__item" v-for="(item, idx) in menu" :key="`menu-${idx}`">
          <v-icon class="responsive__navigation-mobile__item__icon">
            {{ item.icon }}
          </v-icon>
          <span class="responsive__navigation-mobile__item__label">
            {{ item.text }}
          </span>
        </div>
      </div>
      <!-- Fin de la section à designer -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Responsive',
  data() {
    return {
      breadcrumb: ['Lien 1', 'Lien 2', 'Lien 3'],
      menu: [
        {
          text: 'Menu 1',
          icon: 'mdi-alpha-a-circle',
        },
        {
          text: 'Menu 2',
          icon: 'mdi-alpha-b-circle',
        },
        {
          text: 'Menu 3',
          icon: 'mdi-alpha-c-circle',
        },
        {
          text: 'Menu 4',
          icon: 'mdi-alpha-d-circle',
        },
      ],
      elements: [
        {
          title: 'Titre 1',
          src: 'https://picsum.photos/200/300',
        },
        {
          title: 'Titre 2',
          src: 'https://picsum.photos/200/300',
        },
        {
          title: 'Titre 3',
          src: 'https://picsum.photos/200/300',
        },
        {
          title: 'Titre 4',
          src: 'https://picsum.photos/200/300',
        },
        {
          title: 'Titre 5',
          src: 'https://picsum.photos/200/300',
        },
        {
          title: 'Titre 6',
          src: 'https://picsum.photos/200/300',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>

.responsive {
  position: relative;
  margin-bottom: 50px;

  &__header {
    display: flex;
    align-items: center;
    background: rgb(220, 220, 220);
    padding: 15px;

    &__menu-toggle {
      flex: 0 0 auto;

      @media (min-width: 992px) {
        display: none;
      }
    }

    &__logo {
      flex: 1 0 auto;

      @media (min-width: 992px) {
        flex: 0 1 auto;
        margin-right: 50px;
      }

      &__img {
        display: block;
        margin: auto;
      }
    }

    &__navigation {
      display: none;
      gap: 20px;

      @media (min-width: 992px) {
        display: flex;
      }

      &__item {
        &__label {
          font-size: 14px;
        }
      }
    }
  }

  &__container {

    &__top {
      display: flex;
      flex-direction: column;
      padding: 15px;

      @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }

      &__title {
        margin-bottom: 5px;
        font-size: 20px;
      }

      &__breadcrumb {
        display: flex;
        flex-direction: row;
        gap: 10px;
        align-items: center;

        &__item {
          display: flex;
          flex-direction: row;
          gap: 10px;
          color: rgb(182, 182, 195);
          font-size: 14px;
        }
      }

      &--align-end {
        display: flex;
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
        justify-content: flex-end;
        z-index: 1;
        margin-bottom: 50px;
        padding: 15px;

        @media (min-width: 768px) {
          position: relative;
          margin: 0;
          padding: 0;
        }
      }
    }

    &__elements {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
      padding: 15px;

      @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
      }

      @media (min-width: 992px) {
        grid-template-columns: 1fr 1fr 1fr;
      }

      &__item {
        border: 1px solid rgb(182, 182, 195);
      }
    }
  }


  &__navigation-mobile {
    display: flex;
    position: fixed;
    bottom: 0;
    justify-content: space-around;
    border-top: 1px solid rgb(182, 182, 195);
    background: white;
    width: 100%;

    @media (min-width: 992px) {
      display: none;
    }

    &__item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 5px;

      &__label {
        font-size: 12px;
      }
    }
  }
}
</style>
