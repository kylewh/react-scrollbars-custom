import React                              from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { Scrollbar }                      from "react-scrollbars-custom";

export default function createTests(scrollbarWidth) {
    describe("getset", () => {
        let node;
        beforeEach(() => {
            node = document.createElement("div");
            document.body.appendChild(node);
        });
        afterEach(() => {
            unmountComponentAtNode(node);
            document.body.removeChild(node);
        });

        let sbRender = (cb) => render(<Scrollbar style={ {width: 100, height: 100} }>
                    <div style={ {width: 200, height: 200} }></div>
                </Scrollbar>,
                node,
                cb);

        describe("getters", function () {
            it("should return scrollTop",
               (done) => sbRender(function () {
                   this.scrollTop = 50;
                   expect(this.scrollTop).to.be.equal(50);
                   expect(this.content.scrollTop).to.be.equal(50);

                   done();
               }));

            it("should return scrollLeft",
               (done) => sbRender(function () {
                   this.scrollLeft = 50;
                   expect(this.scrollLeft).to.be.equal(50);
                   expect(this.content.scrollLeft).to.be.equal(50);

                   done();
               }));

            it("should return scrollHeight",
               (done) => sbRender(function () {
                   expect(this.scrollHeight).to.be.equal(200);
                   expect(this.content.scrollHeight).to.be.equal(200);

                   done();
               }));

            it("should return scrollWidth",
               (done) => sbRender(function () {
                   expect(this.scrollWidth).to.be.equal(200);
                   expect(this.content.scrollWidth).to.be.equal(200);

                   done();
               }));

            it("should return clientHeight",
               (done) => sbRender(function () {
                   expect(this.clientHeight).to.be.equal(92);
                   expect(this.content.clientHeight).to.be.equal(92);

                   done();
               }));

            it("should return clientWidth",
               (done) => sbRender(function () {
                   expect(this.clientWidth).to.be.equal(92);
                   expect(this.content.clientWidth).to.be.equal(92);

                   done();
               }));
        });

        describe("setters", function () {
            it("scrollTop/scrollToTop/scrollToBottom",
               (done) => sbRender(function () {
                   this.scrollTop = 50;
                   expect(this.scrollTop).to.be.equal(50);
                   expect(this.content.scrollTop).to.be.equal(50);
                   this.scrollToTop();
                   expect(this.content.scrollTop).to.be.equal(0);
                   this.scrollToBottom();
                   expect(this.content.scrollTop).to.be.equal(this.content.scrollHeight - this.content.clientHeight);

                   done();
               }));

            it("scrollLeft/scrollToLeft/scrollToRight",
               (done) => sbRender(function () {
                   this.scrollLeft = 50;
                   expect(this.scrollLeft).to.be.equal(50);
                   expect(this.content.scrollLeft).to.be.equal(50);
                   this.scrollToLeft();
                   expect(this.content.scrollLeft).to.be.equal(0);
                   this.scrollToRight();
                   expect(this.content.scrollLeft).to.be.equal(this.content.scrollWidth - this.content.clientWidth);

                   done();
               }));

            it("scrollHeight should not be settable",
               (done) => sbRender(function () {
                   expect(() => {this.scrollHeight = 0;}).to.throw(TypeError);

                   done();
               }));

            it("scrollWidth should not be settable",
               (done) => sbRender(function () {
                   expect(() => {this.scrollWidth = 0;}).to.throw(TypeError);

                   done();
               }));

            it("clientHeight should not be settable",
               (done) => sbRender(function () {
                   expect(() => {this.clientHeight = 0;}).to.throw(TypeError);

                   done();
               }));

            it("clientWidth should not be settable",
               (done) => sbRender(function () {
                   expect(() => {this.clientWidth = 0;}).to.throw(TypeError);

                   done();
               }));
        });
    });
}
