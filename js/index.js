const asyncGetCall = async () => {
    try {
        const response = await fetch('https://arcane-stream-30681.herokuapp.com/state');
        const data = await response.json();

        var state = data[0].state
        if (state === 'green') {
            var element = document.getElementById("container");
            element.style.backgroundColor = 'green';
        } else if (state === 'red') {
            var element = document.getElementById("container");
            element.style.backgroundColor = 'red';
        }
    } catch (error) {
        return error
    }
}

setInterval('asyncGetCall()', 3000);