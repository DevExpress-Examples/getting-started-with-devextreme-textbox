import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Content from '../TextBoxContent.vue';

describe('Content', () => {
  it('renders properly', () => {
    const wrapper = mount(Content);
    expect(wrapper.text()).toContain('TextBox');
  });
});
