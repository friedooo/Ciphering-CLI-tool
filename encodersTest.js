const { rotCoder, atbashEncoder } = require("./cipherHandler");

console.log("encoding rot test");
console.log(
  rotCoder(`This is secret. Message about "_" symbol!`, 1) ===
    'Uijt jt tfdsfu. Nfttbhf bcpvu "_" tzncpm!' &&
    rotCoder(`This is secret. Message about "_" symbol!`, 4) ===
      'Xlmw mw wigvix. Qiwweki efsyx "_" wcqfsp!' &&
    rotCoder(`This is secret. Message about "_" symbol!`, 7) ===
      'Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!' &&
    rotCoder(`This is secret. Message about "_" symbol!`, 8) ===
      'Bpqa qa amkzmb. Umaaiom ijwcb "_" agujwt!' &&
    rotCoder(`This is secret. Message about "_" symbol!`, 13) ===
      'Guvf vf frperg. Zrffntr nobhg "_" flzoby!'
);

console.log("decoding rot test");

console.log(
  rotCoder(`This is secret. Message about "_" symbol!`, -1) ===
    'Sghr hr rdbqds. Ldrrzfd zants "_" rxlank!' &&
    rotCoder(`This is secret. Message about "_" symbol!`, -4) ===
      'Pdeo eo oaynap. Iaoowca wxkqp "_" ouixkh!' &&
    rotCoder(`This is secret. Message about "_" symbol!`, -7) ===
      'Mabl bl lxvkxm. Fxlltzx tuhnm "_" lrfuhe!' &&
    rotCoder(`This is secret. Message about "_" symbol!`, -8) ===
      'Lzak ak kwujwl. Ewkksyw stgml "_" kqetgd!' &&
    rotCoder(`This is secret. Message about "_" symbol!`, -13) ===
      'Guvf vf frperg. Zrffntr nobhg "_" flzoby!'
);

console.log("Atbash test");

console.log(
  atbashEncoder(`This is secret. Message about "_" symbol!`) ===
    `Gsrh rh hvxivg. Nvhhztv zylfg "_" hbnylo!` &&
    atbashEncoder(`is a monoalphabetic substitution cipher `) ===
      `rh z nlmlzokszyvgrx hfyhgrgfgrlm xrksvi ` &&
    atbashEncoder(`Articles that describe this calculator`) ===
      `Zigrxovh gszg wvhxiryv gsrh xzoxfozgli` &&
    atbashEncoder(`by setting both "a" and "b" to 25. я уеду жить в Лондон`) ===
      `yb hvggrmt ylgs "z" zmw "y" gl 25. я уеду жить в Лондон`
);
