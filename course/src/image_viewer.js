
import '../styles/image_viewer.css';
import big from '../assets/big.jpg';
import small from '../assets/small.jpg';

const image = document.createElement('img');
image.src = 'http://lorempixel.com/400/400';

document.body.appendChild(image);

export default () => {
    const smallImg = document.createElement('img');
    smallImg.src = small;

    document.body.appendChild(smallImg);

    const bigImg = document.createElement('img');
    bigImg.src = big;

    document.body.appendChild(bigImg);
};