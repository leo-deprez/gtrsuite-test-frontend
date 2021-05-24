import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Home.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Hello World'
    const wrapper = shallowMount(Home, {
      data() {
        return {
          msg,
        }
      },
      mocks: {
        $t: () => {},
      },
    })
    expect(wrapper.find('.home__title').text()).toEqual(msg)
  })
})
