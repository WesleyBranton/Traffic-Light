/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

// Change traffic light to green
function toGreen() {
    light.red.classList.remove('on');
    light.green.classList.add('on');

    window.setTimeout(toYellow, 5000);
}

// Change traffic light to yellow
function toYellow() {
    light.green.classList.remove('on');
    light.yellow.classList.add('on');

    window.setTimeout(toRed, 2000);
}

// Change traffic light to red
function toRed() {
    light.yellow.classList.remove('on');
    light.red.classList.add('on');

    window.setTimeout(toGreen, 5000);
}

// Object to store lights in
const light = {};

window.addEventListener('load', () => {
    // Add each like to the light object
    light.red = document.getElementById('red');
    light.yellow = document.getElementById('yellow');
    light.green = document.getElementById('green');

    // Start running the light
    toRed();
});
