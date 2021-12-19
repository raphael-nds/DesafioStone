import { Story, Meta } from '@storybook/react'
import { TextField, TextFieldProps } from '.'

export default {
   title: 'Form/TextField',
   component: TextField,
   args: {
      placeholder: 'input'
   }
} as Meta

export const Default: Story<TextFieldProps> = (args) => <TextField {...args} />

export const withInitialValue: Story<TextFieldProps> = (args) => (
   <TextField {...args} />
)
withInitialValue.args = {
   defaultValue: '',
   mask: 'monetary'
}
