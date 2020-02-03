import './select.css';

export default { title: 'select' };

export const initial = () => '<select class="select">' + optionsString + '</select > ';
export const disabled = () => '<select class="select" disabled>' + optionsString + '</select>';
export const icon = () => '<select class="select select--icon">' + optionsString + '</select > ';

// Create option html content
let options = ['initial', 'option 1', 'option 2', 'option 3'];
let optionsString = "";

options.forEach(function (option) {
	optionsString = optionsString + '<option value="'+option+'">'+option+'</option>';
});