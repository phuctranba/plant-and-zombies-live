let ZName = [oZombie, oZombie2, oZombie3, oConeheadZombie, oPoleVaultingZombie, oBucketheadZombie, oFlagZombie, oFootballZombie, oNewspaperZombie, oScreenDoorZombie]

ipcRenderer.on('comment', (e, data) => {
    let arrParam = data.comment.split("-")
    if (arrParam.length === 2 && Number.isInteger(parseInt(arrParam[0])) && Number.isInteger(parseInt(arrParam[1]))) {
        if (parseInt(arrParam[0]) <= 5 && parseInt(arrParam[0]) >= 1 && parseInt(arrParam[1]) >= 1 && parseInt(arrParam[1]) <= 10) {
            BirthZombie(data.nickname || "", ZName[arrParam[1] - 1], 150, arrParam[0]);
        }
    }
})

document.addEventListener("keydown", function (e) {
    console.log(e.ctrlKey + "-" + e.code);
    if (e.ctrlKey && !e.code.includes("ontrol")) {
        switch (e.code) {
            case "Digit1": {
                BirthZombie(randomString(10), oZombie, 150, 1);
                break;
            }
            case "Digit2": {
                BirthZombie(randomString(10), oZombie, 150, 2);
                break;
            }
            case "Digit3": {
                BirthZombie(randomString(10), oZombie, 150, 3);
                break;
            }
            case "Digit4": {
                BirthZombie(randomString(10), oZombie, 150, 4);
                break;
            }
            case "Digit5": {
                BirthZombie(randomString(10), oZombie, 150, 5);
                break;
            }
            case "KeyQ": {
                BirthZombie(randomString(10), oPoleVaultingZombie, 150, 1);
                break;
            }
            case "KeyW": {
                BirthZombie(randomString(10), oPoleVaultingZombie, 150, 2);
                break;
            }
            case "KeyE": {
                BirthZombie(randomString(10), oPoleVaultingZombie, 150, 3);
                break;
            }
            case "KeyR": {
                BirthZombie(randomString(10), oPoleVaultingZombie, 150, 4);
                break;
            }
            case "KeyT": {
                BirthZombie(randomString(10), oPoleVaultingZombie, 150, 5);
                break;
            }
            case "KeyA": {
                BirthZombie(randomString(10), oFootballZombie, 150, 1);
                break;
            }
            case "KeyS": {
                BirthZombie(randomString(10), oFootballZombie, 150, 2);
                break;
            }
            case "KeyD": {
                BirthZombie(randomString(10), oFootballZombie, 150, 3);
                break;
            }
            case "KeyF": {
                BirthZombie(randomString(10), oFootballZombie, 150, 4);
                break;
            }
            case "KeyG": {
                BirthZombie(randomString(10), oFootballZombie, 150, 5);
                break;
            }
            case "KeyZ": {
                BirthZombie(randomString(10), oScreenDoorZombie, 150, 1);
                break;
            }
            case "KeyX": {
                BirthZombie(randomString(10), oScreenDoorZombie, 150, 2);
                break;
            }
            case "KeyC": {
                BirthZombie(randomString(10), oScreenDoorZombie, 150, 3);
                break;
            }
            case "KeyV": {
                BirthZombie(randomString(10), oScreenDoorZombie, 150, 4);
                break;
            }
            case "KeyB": {
                BirthZombie(randomString(10), oScreenDoorZombie, 150, 5);
                break;
            }
        }
    }

})