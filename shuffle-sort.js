// Color mapping with numbers
const numberColorMapping = {
	1: '#6F98A8',
	2: '#328EAD',
	3: '#2F454E',
	4: '#328EAD',
	5: '#2F454E',
	6: '#BEBEBE',
	7: '#BEBEBE',
	8: '#6F98A8',
	9: '#2F454E'
};

/*
* prepareDivs
*  iterate the numberColorMapping object and prepare divs
* 
*/

const prepareDivs = () => {
	var parent = document.getElementById('sort-shuffle');
	for (let key in numberColorMapping) {
		const iDiv = document.createElement('div');
		iDiv.id = key;
		iDiv.className = 'content';
		iDiv.style.backgroundColor = numberColorMapping[key];

		const iSpan1 = document.createElement('span');
		iSpan1.className = 'color-type';

		const iSpan2 = document.createElement('span');
		iSpan2.className = 'text';
		iSpan2.innerHTML = key;

		iDiv.appendChild(iSpan1);
		iDiv.appendChild(iSpan2);
		parent.appendChild(iDiv);
	}
};

/*
* sortShuffleDivs
*  selectedOption: string ['sort', 'shuffle']
*  Shuffles or sorts child nodes based on their id
* 
*/
const sortShuffleDivs = (selectedOption = 'shuffle') => {
	var parent = document.getElementById('sort-shuffle');
	var items = parent.childNodes;
	var itemsArr = [];
	// Push all child nodes whose nodeType is 1 to new array
	for (var i in items) {
		if (items[i].nodeType == 1) {
			itemsArr.push(items[i]);
		}
	}
	// Shuffle or sort based on option passed
	if (selectedOption == 'shuffle') {
		itemsArr.sort(() => Math.random() - 0.5);
	} else {
		itemsArr.sort((a, b) => {
			return parseInt(a.id) - parseInt(b.id);
		});
	}

	// Append divs to parent div
	itemsArr.map((item) => parent.appendChild(item));
};
