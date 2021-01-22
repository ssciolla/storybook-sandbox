import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { CSVInputForm } from './CSVInputForm';

// This default export determines where your story goes in the story list
const moduleDefault = {
    title: 'CSVInputForm',
    component: CSVInputForm,
};

export default moduleDefault;

const Template: Story<ComponentProps<typeof CSVInputForm>> = (args) => (
  <CSVInputForm {...args} />
);

export const FirstStory = Template.bind({});
FirstStory.args = {
  /* the args you need here will depend on your component */
    onSubmit: (data: any) => { 
        console.log("Something's happening here!!!")
        console.log(JSON.stringify(data))
    },
    submitButtonText: 'Submit CSV',
    disabled: false
};
