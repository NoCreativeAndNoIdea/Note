import type { StoryFn } from '@storybook/react'

const DemoMenu = () => {
  return <div> demo menu</div>
}

export default {
  title: 'Note/Menu',
  component: DemoMenu
}

export const Default: StoryFn = ({ width }) => (
  <div
    style={{
      width: width,
      height: width
    }}
  >
    <DemoMenu />
  </div>
)
Default.args = {
  width: 100
}
