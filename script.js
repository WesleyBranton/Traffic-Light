/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

function changeToGreen() {
    var red = document.getElementById('red');
    var green = document.getElementById('green');

    red.className = 'off';
    green.className = 'on';

    window.setTimeout(changeToYellow, 5000);
}

function changeToYellow() {
    var yellow = document.getElementById('yellow');
    var green = document.getElementById('green');

    green.className = 'off';
    yellow.className = 'on';

    window.setTimeout(changeToRed, 2000);
}

function changeToRed() {
    var red = document.getElementById('red');
    var yellow = document.getElementById('yellow');

    yellow.className = 'off';
    red.className = 'on';

    window.setTimeout(changeToGreen, 5000);
}