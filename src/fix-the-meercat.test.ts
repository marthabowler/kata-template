import fixTheMeercat from "./fix-the-meercat";

test("Returns array in reverse order", () => {
    expect(fixTheMeercat(["tail", "body", "head"])).toStrictEqual(["head", "body", "tail"]);
    expect(fixTheMeercat(["tails", "body", "heads"])).toStrictEqual(["heads", "body", "tails"]);
    expect(fixTheMeercat(["bottom", "middle", "top"])).toStrictEqual(["top", "middle", "bottom"]);
    expect(fixTheMeercat(["lower legs", "torso", "upper legs"])).toStrictEqual(["upper legs", "torso", "lower legs"]);
    expect(fixTheMeercat(["ground", "rainbow", "sky"])).toStrictEqual(["sky", "rainbow", "ground"]);
});