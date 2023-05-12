let currentSquareSelected = null;
let squareBox = document.getElementById("sq-box");
for (let i = 1; squareBox.childElementCount >= i; i++) {
    let element = document.getElementById(`sq-${i}`);
    element.onclick = () => {
        if (currentSquareSelected != null && currentSquareSelected != `sq-${i}`) {
            return alert("Atenção! Já há um quadrado selecionado. Desselecione-o antes de selecionar outro");
        } else if (currentSquareSelected == `sq-${i}`) {
            setSquareMovableToDefault(element);
            currentSquareSelected = null;
            this.onkeydown = null;
            return null;
        }
        currentSquareSelected = `sq-${i}`;
        setSquareMovableElementStyle(element)
        this.onkeydown = (event) => {
            var k = event.keyCode;
            movement = {
                updown: function () {
                    var y = parseInt(getComputedStyle(element).top);
                    if (k == 38 || k == 87) {
                        y -= 3;
                    } else if (k == 40 || k == 83) {
                        y += 3;
                    }
                    return y + "px";
                },
                leftright: function () {
                    var x = parseInt(getComputedStyle(element).left);
                    if (k == 37 || k == 65) {
                        x -= 3;
                    } else if (k == 39 || k == 68) {
                        x += 3;
                    }
                    return x + "px";
                }
            };
            element.style.top = movement.updown();
            element.style.left = movement.leftright();
        }
    }
}
function setSquareMovableToDefault(element) {
    element.style.borderColor = "black";
    element.style.position = 'static';
}

function setSquareMovableElementStyle(element) {
    element.style.borderColor = "yellow";
    element.style.position = 'absolute';
    element.style.left = "50%";
    element.style.bottom = '50%';
}