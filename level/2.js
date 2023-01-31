oS.Init({
    PName: [oPeashooter, oSunFlower],
    ZName: [oZombie, oZombie2, oZombie3],
    PicArr: function () {
        var a = oCherryBomb.prototype, b = a.PicArr;
        return ["images/interface/SodRollCap.png", "images/interface/SodRoll.png", "images/interface/sod3row.png", "images/interface/background1unsodded_1.jpg", b[a.CardGif], b[a.NormalGif]]
    }(),
    backgroundImage: "images/interface/background1unsodded_1.jpg",
    LF: [0, 0, 1, 1, 1, 0],
    CanSelectCard: 0,
    LevelName: "Bài 1-2",
    LargeWaveFlag: {6: $("imgFlag1")},
    LoadMusic: function () {
        NewEle("oEmbed", "embed", "width:0;height:0", {src: "music/Look up at the.mp3"}, EDAll)
    },
    InitLawnMower: function () {
        var a = 5;
        while (--a > 1) {
            CustomSpecial(oLawnCleaner, a, -1)
        }
    },
    StartGame: function () {
        NewImg("sod3row", "images/interface/sod3row.png", "left:119px;top:163px;clip:rect(0,46px,330px,0);z-index:1", EDAll);
        NewImg("SodRoll_1", "images/interface/SodRoll.png", "left:132px;top:128px;z-index:1", EDAll);
        NewImg("SodRollCap_1", "images/interface/SodRollCap.png", "left:127px;top:211px;z-index:1", EDAll);
        NewImg("SodRoll_2", "images/interface/SodRoll.png", "left:132px;top:348px;z-index:1", EDAll);
        NewImg("SodRollCap_2", "images/interface/SodRollCap.png", "left:127px;top:431px;z-index:1", EDAll);
        (function (e, h, b, d, c, g, a, f) {
            e += 15;
            h += 16;
            d += 16;
            $("sod3row").style.clip = "rect(0," + e + "px,330px,0)";
            SetStyle($("SodRoll_1"), {left: h + "px", width: --b + "px", height: "141px"});
            SetStyle($("SodRoll_2"), {left: h + "px", width: b + "px", height: "141px"});
            SetStyle($("SodRollCap_1"), {left: d + "px", width: --c + "px", height: --g + "px", top: ++a + "px"});
            SetStyle($("SodRollCap_2"), {left: d + "px", width: c + "px", height: g + "px", top: ++f + "px"});
            e < 766 ? oSym.addTask(3, arguments.callee, [e, h, b, d, c, g, a, f]) : (ClearChild($("SodRoll_1"), $("SodRoll_2"), $("SodRollCap_1"), $("SodRollCap_2")), (function () {
                ClearChild($("oEmbed"));
                NewEle("oEmbed", "embed", "width:0;height:0", {src: "music/UraniwaNi.mp3"}, EDAll);
                oS.InitLawnMower();
                SetVisible($("dFlagMeter"));
                PrepareGrowPlants(function () {
                    NewEle("DivTeach", "div", 0, 0, EDAll);
                    oP.Monitor({
                        ar: [0], f: function (l) {
                            var m = oS.C + 1;
                            switch (l) {
                                case 0:
                                    innerText($("DivTeach"), "Hướng dương là cực kỳ quan trọng, và nói chung các loài ngoài cùng bên trái");
                                    NewImg("PointerUD", "images/interface/PointerUP.gif", "top:120px;left:50px", EDAll);
                                    oSym.addTask(10, arguments.callee, [++l]);
                                    break;
                                case 1:
                                    var j = oGd.$, i;
                                    for (i in j) {
                                        if (j[i].EName == "oSunFlower") {
                                            innerText($("DivTeach"), "Ít nhất là ba hoa hướng dương trồng！");
                                            oSym.addTask(10, arguments.callee, [++l]).addTask(2500, function () {
                                                oP.AddZombiesFlag();
                                                SetVisible($("dFlagMeterContent"))
                                            }, []);
                                            return
                                        }
                                    }
                                    oSym.addTask(10, arguments.callee, [l]);
                                    break;
                                case 2:
                                    var j = oGd.$, i, k = 0;
                                    for (i in j) {
                                        j[i].EName == "oSunFlower" && (++k)
                                    }
                                    k > 1 && (innerText($("DivTeach"), "Hướng dương, bạn càng nhận được, nhanh hơn mặt trời！"), ++l);
                                    oSym.addTask(10, arguments.callee, [l]);
                                    break;
                                default:
                                    var j = oGd.$, i, k = 0;
                                    for (i in j) {
                                        j[i].EName == "oSunFlower" && (++k)
                                    }
                                    k > 2 ? (innerText($("DivTeach"), "Bây giờ bạn có được ánh nắng mặt trời với đất trồng cây khác！"), SetStyle($("PointerUD"), {
                                        left: "50px",
                                        top: "60px"
                                    }), oSym.addTask(500, SetNone, [$("PointerUD"), $("DivTeach")])) : oSym.addTask(10, arguments.callee, [3])
                            }
                            return l
                        }
                    });
                    BeginCool();
                    AutoProduceSun(25)
                })
            })())
        })(65, 132, 68, 127, 73, 71, 211, 431)
    }
}, {
    ArZ: [oZombie, oZombie, oZombie, oZombie, oZombie, oZombie, oZombie2, oZombie2, oZombie3, oZombie3],
    FlagNum: 6,
    SumToZombie: {1: 10, "default": 10},
    FlagToSumNum: {a1: [3, 5], a2: [1, 2, 4]},
    FlagToMonitor: {5: [ShowFinalWave, 0]},
    FlagToEnd: function () {
        NewImg("imgSF", "images/card/plants/CherryBomb.png", "left:827px;top:220px", EDAll, {
            onclick: function () {
                GetNewCard(this, oCherryBomb, 3)
            }
        });
        EditImg($("PointerUD"), 0, "images/interface/PointerDown.gif", {left: "836px", top: "185px", display: "block"})
    }
});