import './button.css';

export default { title: 'button' };

export const initial = () => '<button class="button">' + buttonText+'</button>';
export const large = () => '<button class="button button--large">' + buttonText + '</button>';
export const disabled = () => '<button class="button" disabled>' + buttonText + '</button>';

const buttonText = "Button text";