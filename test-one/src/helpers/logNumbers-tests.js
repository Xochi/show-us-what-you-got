import LogNumbers from "./logNumbers";
import sinon from "sinon";
import { expect } from "chai";

describe("logNumbers", () => {
    let logNumbers;
    let consoleLogSpy;
    const lengthArg = 100;
    // let consoleLogSpy;

    before(() => {
        logNumbers = new LogNumbers();

        consoleLogSpy = new sinon.spy(console, "log");
    });

    after(() => {
        consoleLogSpy.restore();
    });

    it("logNumbers has a printAll method", () => {

        expect(logNumbers).to.have.a.property('printAll');
        
    });

    it("console.log should be called and be a string", () => {

      expect(console.log).to.be.called;
      expect(console.log.value).to.be.a.string;


    });
});
