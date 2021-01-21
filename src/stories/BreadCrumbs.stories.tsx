import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { BreadCrumbs } from './BreadCrumbs';

// This default export determines where your story goes in the story list
const moduleDefault = {
    title: 'BreadCrumbs',
    component: BreadCrumbs,
};

export default moduleDefault;

const Template: Story<ComponentProps<typeof BreadCrumbs>> = (args) => (
  <BreadCrumbs {...args} />
);

export const FirstStory = Template.bind({});
FirstStory.args = {
  /* the args you need here will depend on your component */
  crumbs: [
      { name: 'Home', path: '/home/'},
      { name: 'More Specific Page', path: '/specific/'}
  ]
};
