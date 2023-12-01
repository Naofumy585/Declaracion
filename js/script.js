const btnSi = document.getElementById('si');
        const btnNo = document.getElementById('no');

        document.addEventListener('click', handleButtonClick);
        document.addEventListener('touchstart', handleButtonClick);

        function handleButtonClick(e) {
            if (e.target === btnSi) {
                Swal.fire({
                    title: 'TE AMOOO MUSHOOOOOO mi🦆 , voy a dar lo mejor de mi para hacerte feliz :3',
                    confirmButtonText: 'YEII :3',
                    width: 600,
                    padding: '3em',
                    color: '#716add',
                    background: 'rgba(207, 208, 218, 1)',
                    backdrop: `
                      rgba(0,0,123,0.4)
                      url("/img/cat.gif")
                      left top
                      no-repeat
                    `
                }).then((result) => {
                    if (result.isConfirmed) {
                        let phoneNumber = "+529161659580";
                        openWhatsApp(phoneNumber, "¡Sip :3");
                    }
                });
            } else if (e.target === btnNo) {
                moveButtonRandomly(btnNo);
            }
        }

function openWhatsApp(phoneNumber, message) {
    let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}

document.addEventListener('mouseover', e => {
    if (e.target == btnNo) {
        btnNo.style.left = `${numeroRandon(left1, left2, 'left')}%`;
        btnNo.style.top = `${numeroRandon(top1, top2, 'top')}%`;
    }
});
function moveButtonRandomly(button) {
    let left = `${Math.floor(Math.random() * 93)}%`;
    let top = `${Math.floor(Math.random() * 93)}%`;

    button.style.left = left;
    button.style.top = top;
}

let left1 = 0, left2 = 0, top1 = 0, top2 = 0;

let numeroRandon = (x1, x2, direccion) => {
    let nRamdom = Math.floor(Math.random() * (+92 + 1 - +0)) + +0;
    x1 = nRamdom;

    if ((x1 - x2) <= 10 && (x1 - x2) >= 0) {
        if ((x1 + 10) > 92) {
            x1 -= 8;
        } else {
            x1 += 8;
        }
    }
    if ((x1 - x2) >= -10 && (x1 - x2) <= 0) {
        if ((x1 + 20) > 92) {
            x1 -= 20;
        } else {
            x1 += 20;
        }
    }
    if (direccion === "left") {
        left1 = x1;
        left2 = x1;
        console.log('l: ', left1, left2)
        return left1;
    }
    if (direccion === "top") {
        top1 = x1;
        top2 = x1;
        console.log('t: ', top1, top2)
        return top1;
    }
}