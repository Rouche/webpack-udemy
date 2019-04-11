
import sum from './sum';
import $ from 'jquery';

const total = sum(4, 8);

$('#mydiv').append('Total : ' + total);

$('#my-btn').click(() => {
    System.import('./image_viewer').then( module => {
        module.default();
    });
});
