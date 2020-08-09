window.onload = () => {
    let counter = 0,
        limit = 25,
        interval = setInterval(randomName, 117.5);
    let listOne = document.getElementById("listOne"),
        listTwo = document.getElementById("listTwo"),
        listThree = document.getElementById("listThree");
    listTwo.start = limit + 1;
    listThree.start = limit * 2 + 1;

    function randomName() {
        let randomName = faker.name.findName();
        let randomHTML = "<li>" + randomName + "</li>";
        let mobile = window.innerWidth < 1000;

        if (counter < limit) {
            listOne.innerHTML += randomHTML;
        } else if (counter < limit * 2 && !mobile) {
            listTwo.innerHTML += randomHTML;
        } else if (counter < limit * 3 && !mobile) {
            listThree.innerHTML += randomHTML;
        } else {
            clearInterval(interval);
            alert("I am not your biggest fan :)");
        }

        counter++;
    }
}

