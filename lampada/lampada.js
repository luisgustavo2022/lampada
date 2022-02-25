const turnOnOff = document.getElementById ( 'turnOnOff' );

const lamp = document.getElementById ( 'lamp' );

function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1
}

function lampOn () {
    if ( !isLampBroken ()  ) {
        lamp.src = './lampadas/ligada.jpg';
    }
}

function lampOff () {
    if ( !isLampBroken () ) {
        lamp.src = './lampadas/desligada.jpg';
    }
}

function lampBroken () {
    lamp.src = './lampadas/quebrada.jpg';
}
function lampOnOff () {
    if (turnOnOff.textContent === 'Ligar'){
    lampOn();
    turnOnOff.textContent = 'Desligar';
    }else{
        lampOff();
        turnOnOff.textContent = 'Ligar';
    }

}
function isLampOn () {
    return lamp.src.indexOf ('ligada') > -1
}

turnOnOff.addEventListener ( 'click', lampOnOff );

lamp.addEventListener ( 'mouseover', lampOn );
lamp.addEventListener ( 'mouseleave', lampOff );
lamp.addEventListener ( 'dblclick', lampBroken );

