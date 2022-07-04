import { Meta, StoryFn } from '@storybook/html';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/html/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: '占位',
} as Meta;

export const Primary: StoryFn = (): HTMLButtonElement => {
  const btn = document.createElement('button');
  btn.innerText = 'Button';

  btn.className = [
    'storybook-button',
    'storybook-button--medium',
  ].join(' ');

  return btn;
};