import copyCodeBlock from '@pickra/copy-code-block';
import { cssOverrides } from './../../.storybook/copyCodeBlockOverrides';
import './select.css';

// Create option html content
let Options = ['initial', 'option 1', 'option 2', 'option 3'];
let OptionsString = "";

Options.forEach(function (option) {
	OptionsString = OptionsString + '<option value="'+option+'">'+option+'</option>';
});

const InitialHtml = `<select class="select">
	${OptionsString}
</select>
`;
export const Initial = () => InitialHtml + copyCodeBlock(InitialHtml, cssOverrides);

const DisabledHtml = `<select class="select" disabled>
${OptionsString}
</select>`;
export const Disabled = () => DisabledHtml + copyCodeBlock(DisabledHtml, cssOverrides);

const IconHtml = `<select class="select select--icon">
${OptionsString}
</select>`;
export const Icon = () => IconHtml + copyCodeBlock(IconHtml, cssOverrides);

export default { title: 'Select' };