import copyCodeBlock from '@pickra/copy-code-block';
import { cssOverrides } from './../../.storybook/copyCodeBlockOverrides';
import './button.css';

const ButtonText = "Button text";

const InitialHtml = `<button class="button">${ButtonText}</button>`;
export const Initial = () => InitialHtml + copyCodeBlock(InitialHtml, cssOverrides);

const LargeHtml = `<button class="button button--large">${ButtonText}</button>`;
export const Large = () => LargeHtml + copyCodeBlock(LargeHtml, cssOverrides);

const DisabledHtml = `<button class="button" disabled>${ButtonText}</button>`;
export const Disabled = () => DisabledHtml + copyCodeBlock(DisabledHtml, cssOverrides);

export default { title: 'Button' };