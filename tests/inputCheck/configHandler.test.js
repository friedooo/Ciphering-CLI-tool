const { expect } = require("@jest/globals");
const { rotCoder, atbashEncoder } = require("../../cipherHandler");

describe("cipherHandlers testing", () => {
  test("check Rot Encoder", () => {
    const checkStr = `This is secret. Message about "_" symbol!`;

    expect(rotCoder(checkStr, 1)).toBe(
      `Uijt jt tfdsfu. Nfttbhf bcpvu "_" tzncpm!`
    );
    expect(rotCoder(checkStr, 4)).toBe(
      `Xlmw mw wigvix. Qiwweki efsyx "_" wcqfsp!`
    );
    expect(rotCoder(checkStr, 7)).toBe(
      `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`
    );
    expect(rotCoder(checkStr, 13)).toBe(
      `Guvf vf frperg. Zrffntr nobhg "_" flzoby!`
    );
  });

  test("check Rot Decoder", () => {
    const checkStr = `This is secret. Message about "_" symbol!`;

    expect(rotCoder(checkStr, -1)).toBe(
      `Sghr hr rdbqds. Ldrrzfd zants "_" rxlank!`
    );
    expect(rotCoder(checkStr, -4)).toBe(
      `Pdeo eo oaynap. Iaoowca wxkqp "_" ouixkh!`
    );
    expect(rotCoder(checkStr, -7)).toBe(
      `Mabl bl lxvkxm. Fxlltzx tuhnm "_" lrfuhe!`
    );
    expect(rotCoder(checkStr, -13)).toBe(
      `Guvf vf frperg. Zrffntr nobhg "_" flzoby!`
    );
  });

  test("check Atbash", () => {
    expect(atbashEncoder(`This is secret. Message about "_" symbol!`)).toBe(
      `Gsrh rh hvxivg. Nvhhztv zylfg "_" hbnylo!`
    );
    expect(atbashEncoder(`is a monoalphabetic substitution cipher `)).toBe(
      `rh z nlmlzokszyvgrx hfyhgrgfgrlm xrksvi `
    );
    expect(atbashEncoder(`Articles that describe this calculator`)).toBe(
      `Zigrxovh gszg wvhxiryv gsrh xzoxfozgli`
    );
    expect(
      atbashEncoder(`by setting both "a" and "b" to 25. я уеду жить в Лондон`)
    ).toBe(`yb hvggrmt ylgs "z" zmw "y" gl 25. я уеду жить в Лондон`);
  });
});
