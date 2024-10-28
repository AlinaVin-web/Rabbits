'use strict';

const blocks = document.querySelectorAll('.square-body .block');

const changeValue = (curr, next) => {
    const currValue = curr.querySelector('.block-number');
    const nextValue = next.querySelector('.block-number');
    const tempValue = nextValue.textContent;
    nextValue.textContent = currValue.textContent;
    currValue.textContent = tempValue;
}

document.body.addEventListener('click', (e) => {
    const arrow = e.target.closest('.arrow');
    if (arrow) {
        const block = e.target.closest('.block');
        for (let key in blocks) {
            if (blocks[key] === block) {
                key = +key;
                switch (arrow.classList[1]) {
                    case 'right':
                        if (key < 24) {
                            changeValue(block, blocks[key + 1]);
                        }
                        break;
                    case 'left':
                        if (key > 0) {
                            changeValue(block, blocks[key - 1]);
                        }
                        break;
                    case 'top':
                        if (key > 4) {
                            changeValue(block, blocks[key - 5]);
                        }
                        break;
                    case 'bottom':
                        if (key < 20) {
                            changeValue(block, blocks[key + 5]);
                        }
                        break;
                }
                break;
            }
        };
    } else if (e.target.matches('button.btn-reset')) {
        blocks.forEach((elem, key) => {
            elem.querySelector('.block-number').textContent = key + 1;
        });
    }
});
