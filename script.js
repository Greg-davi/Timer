document.getElementById('15').addEventListener('click', () => {
    document.getElementById('timer').innerText = "00:00:15";
    document.getElementById('15').classList.toggle('active');
    document.getElementById('30').classList.remove('active');
    document.getElementById('1').classList.remove('active');
    document.getElementById('reset').classList.remove('active');

    // Set the timer duration to 15 seconds
    var endTime = new Date();
    endTime.setSeconds(endTime.getSeconds() + 15); // Add 15 seconds to the current time
    document.getElementById('start').addEventListener('click', () => {
        startTimer(endTime); // Start the timer
        
    });

});

document.getElementById('30').addEventListener('click', () => {
    document.getElementById('timer').innerText = "00:00:30";

    document.getElementById('30').classList.toggle('active');
    document.getElementById('15').classList.remove('active');
    document.getElementById('1').classList.remove('active');
    document.getElementById('reset').classList.remove('active');

    // Set the timer duration to 30 seconds
    var endTime = new Date();
    endTime.setSeconds(endTime.getSeconds() + 30); // Add 30 seconds to the current time
    document.getElementById('start').addEventListener('click', () => {
        startTimer(endTime); // Start the timer
        
    });

});

document.getElementById('1').addEventListener('click', () => {
    document.getElementById('timer').innerText = "00:01:00";
    document.getElementById('1').classList.toggle('active');
    document.getElementById('30').classList.remove('active');
    document.getElementById('15').classList.remove('active');
    document.getElementById('reset').classList.remove('active');

    // Set the timer duration to 1 minute
    var endTime = new Date();
    endTime.setMinutes(endTime.getMinutes() + 1); // Add 1 minute to the current time
    document.getElementById('start').addEventListener('click', () => {
        startTimer(endTime); // Start the timer
        
    });

});





// document.getElementById('reset').addEventListener('click', () => {
//     document.getElementById('timer').innerText = "00:00:00";
//     document.getElementById('buttons').style.display = 'flex';
//     document.getElementById('reset').classList.toggle('active');

//     // Remove any active class from the buttons

//     document.getElementById('15').classList.remove('active');
//     document.getElementById('30').classList.remove('active');
//     document.getElementById('1').classList.remove('active');



// });


document.getElementById('reset').addEventListener('click', () => {
    document.getElementById('timer').innerText = "00:00:00";
    document.getElementById('buttons').style.display = 'flex';
    document.getElementById('reset').classList.toggle('active');

    // Remove any active class from the buttons
    document.getElementById('15').classList.remove('active');
    document.getElementById('30').classList.remove('active');
    document.getElementById('1').classList.remove('active');

    // Add event listener to start button to start the countdown again
    document.getElementById('start').addEventListener('click', () => {
        var selectedTime = document.getElementById('timer').innerText;
        var hours = parseInt(selectedTime.substring(0, 2));
        var minutes = parseInt(selectedTime.substring(3, 5));
        var seconds = parseInt(selectedTime.substring(6, 8));

        var endTime = new Date();
        endTime.setHours(endTime.getHours() + hours);
        endTime.setMinutes(endTime.getMinutes() + minutes);
        endTime.setSeconds(endTime.getSeconds() + seconds);

        startTimer(endTime);
        this.removeEventListener('click', startOnce);
    });
});



function startTimer() {
    document.getElementById('buttons').style.display = 'none';
    endTime = new Date();

    // Set the timer duration based on the active button
    if (document.getElementById('15').classList.contains('active')) {
        endTime.setSeconds(endTime.getSeconds() + 15); // Add 15 seconds to the current time
    } else if (document.getElementById('30').classList.contains('active')) {
        endTime.setSeconds(endTime.getSeconds() + 30); // Add 30 seconds to the current time
    } else if (document.getElementById('1').classList.contains('active')) {
        endTime.setMinutes(endTime.getMinutes() + 1); // Add 1 minute to the current time
    }

    var intervalId = setInterval(function () {
        var currentTime = new Date();
        var remainingTime = endTime - currentTime;

        var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        // Add leading zeros if necessary
        hours = ('0' + hours).slice(-2);
        minutes = ('0' + minutes).slice(-2);
        seconds = ('0' + seconds).slice(-2);

        var timerDisplay = hours + ':' + minutes + ':' + seconds;
        document.getElementById('timer').innerText = timerDisplay;

        // When the countdown is over, display a message or take appropriate action
        if (remainingTime <= 0) {
            clearInterval(intervalId); // Stop the interval
            document.getElementById('timer').innerText = "Time's up!";
        }
    }, );
    document.getElementById('reset').addEventListener('click', () => {
        clearInterval(intervalId); // Stop the interval
    });
                
}