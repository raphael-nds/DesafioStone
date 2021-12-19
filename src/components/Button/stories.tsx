import { Story, Meta } from '@storybook/react'
import Button, { ButtonProps } from '.'

import ArrowRight from 'assets/arrow-left-right.svg'

export default {
   title: 'Button',
   component: Button,
   args: {
      children: 'Button',
      width: 'fit-content'
   }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

export const withIcon: Story<ButtonProps> = (args) => (
   <div
      style={{
         display: 'flex',
         alignContent: 'center',
         justifyContent: 'center'
      }}
   >
      <Button {...args} />
      <div style={{ marginLeft: 20 }}>
         <Button {...args} typeButton="ghost" />
      </div>
   </div>
)
withIcon.args = {
   iconLeft: ArrowRight
}

export const withLoading: Story<ButtonProps> = (args) => (
   <div
      style={{
         display: 'flex',
         alignContent: 'center',
         justifyContent: 'center'
      }}
   >
      <Button {...args} isLoading />
   </div>
)
withLoading.args = {
   iconLeft: ArrowRight,
   width: '200px'
}

export const withArrowRight: Story<ButtonProps> = (args) => (
   <div
      style={{
         display: 'flex',
         alignContent: 'center',
         justifyContent: 'center'
      }}
   >
      <Button {...args} />
   </div>
)
withArrowRight.args = {
   arrowRight: true
}
