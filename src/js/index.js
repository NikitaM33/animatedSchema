window.addEventListener('load', function () {
    const tap = document.querySelector('.tap');
    const pipe2 = document.querySelector('.horizontal-pipe2');
    const pipe3 = document.querySelector('.vertical-pipe3');
    const water = document.querySelector('.water');
    const turbine = document.querySelector('.gear__turbine');
    const displayContainer = document.querySelector('.gear__value-display-container');
    const waterValueCounter = document.querySelectorAll('.gear__num');

    let waterValue = 0;
    const waterCounterValue1 = '0850';
    const waterCounterValue2 = '1350';
    const waterCounterValue3 = '2000';
    let splitedWaterCounter = null;


    tap.addEventListener('click', (e) => {
        e.preventDefault();

        if (waterValue === 0) {
            waterValue = 1;
            pipe2.classList.add('tapOn');
            pipe3.classList.add('verticalTapOn');
            water.classList.add('value1');
            turbine.classList.add('speed1');
            displayContainer.innerHTML = `
                <div class="display__value"></div>
                <div class="display__value"></div>
            `;
            splitedWaterCounter = waterCounterValue1.split('');


            for (let i = 0; i < waterValueCounter.length; i++) {
                for (let j = 0; j < splitedWaterCounter[i].length; j++) {
                    waterValueCounter[i].innerHTML = splitedWaterCounter[i];
                }
            }

        } else if (waterValue === 1) {
            waterValue = 2;
            water.classList.remove('value1');
            water.classList.add('value2');
            turbine.classList.remove('speed1');
            turbine.classList.add('speed2');
            displayContainer.innerHTML += `
                <div class="display__value"></div>
                <div class="display__value"></div>
            `;

            splitedWaterCounter = waterCounterValue2.split('');


            for (let i = 0; i < waterValueCounter.length; i++) {
                for (let j = 0; j < splitedWaterCounter[i].length; j++) {
                    waterValueCounter[i].innerHTML = splitedWaterCounter[i];
                }
            }
        } else if (waterValue === 2) {
            waterValue = 3;
            water.classList.remove('value2');
            water.classList.add('value3');
            turbine.classList.remove('speed2');
            turbine.classList.add('speed3');
            displayContainer.innerHTML += `
                <div class="display__value"></div>
                <div class="display__value"></div>
            `;

            splitedWaterCounter = waterCounterValue3.split('');


            for (let i = 0; i < waterValueCounter.length; i++) {
                for (let j = 0; j < splitedWaterCounter[i].length; j++) {
                    waterValueCounter[i].innerHTML = splitedWaterCounter[i];
                }
            }
        } else if (waterValue === 3) {
            waterValue = 0;
            water.classList.remove('value3');
            water.classList.add('value0');
            turbine.classList.remove('speed3');
            turbine.classList.add('speed0');
            displayContainer.innerHTML = '';
            pipe2.classList.remove('tapOn');
            pipe3.classList.remove('verticalTapOn');

            splitedWaterCounter = waterCounterValue3.split('');

            for (let i = 0; i < waterValueCounter.length; i++) {
                for (let j = 0; j < splitedWaterCounter[i].length; j++) {
                    waterValueCounter[i].innerHTML = 0;
                }
            }
        }
    })
});