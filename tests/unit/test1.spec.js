// Libraries
import Vue from 'vue'
import Vuetify from 'vuetify'

// Components
import Test1 from '@/components/Tests/Test1.vue'

// Utilities
import { createLocalVue, mount } from '@vue/test-utils'

Vue.use(Vuetify)

describe('Test1.vue', () => {
  const localVue = createLocalVue()
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('description de ce que vous testez', async () => {
    const wrapper = mount(Test1, {
      localVue,
      vuetify,
    })

    // Completer ce test
  })
  // Rajouter d'autre tests si nécessaire
})
