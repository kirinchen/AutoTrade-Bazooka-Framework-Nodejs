
import { BaseDataProvider } from "../run/DataProvider";
import { Config, CofGet } from "../comm/config/Config";

let c = new Config({
    a: "123"
});
let bd = new BaseDataProvider(c);

test('Config Get', () => {

    var config = new Config({
        a: "af",
        b: "bf",
        c: "cn"
    });

    console.log(config.size() + ":" + config.get('a')+"!!!!");
    expect(config.size() ).toBe(3);
    expect(config.get('a')).toBe("af");
    expect(config.get('b')).toBe("bf");
    expect(config.get('c')).toBe("cn");
    expect(config.get('x', 123)).toBe(123);
    expect(config.get('xx1', 'xxxx')).toBe('xxxx');


});

let conGet: CofGet = new CofGet("test.test","vvvv");

test('Config conGet', () => {

    let v= c.get(conGet);
    expect(v).toBe("vvvv");

});