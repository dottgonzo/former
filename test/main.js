"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const former = require("../index");
const chai = require("chai");
const expect = chai.expect;
const form0 = [
    {
        type: "string",
        label: "Nome",
        value: "",
        position: 1,
        required: true
    },
    {
        type: "email",
        label: "email",
        value: "",
        position: 1,
        required: true
    },
    {
        type: "checkbox",
        label: "zzzzzzzz",
        value: "",
        position: 2,
        required: true
    },
    {
        type: "string",
        label: "Telefono",
        value: "",
        position: 3
    }
];
const formeemail = [
    {
        type: "email",
        label: "Email",
        value: "",
        position: 1,
        required: true
    }
];
const form1 = [
    {
        type: "radio",
        label: "Orario",
        value: "",
        options: [
            {
                label: '09.00-12.00',
                value: '09.00-12.00'
            },
            {
                label: '12.00-15.00',
                value: '12.00-15.00'
            },
            {
                label: '15.00-18.00',
                value: '15.00-18.00'
            }
        ],
        position: 1,
        required: true
    },
    {
        type: "date",
        label: "Dal",
        value: "",
        position: 2,
        required: true
    },
    {
        type: "date",
        label: "Al",
        value: "",
        position: 3,
        required: true
    }
];
const answers0 = [{
        "name": "Nome",
        "value": "",
        "label": "Nome"
    },
    {
        value: "dddd@rr.r",
        label: "email"
    },
    {
        "name": "Telefono",
        "value": "fff",
        "label": "Telefono"
    }];
const answers1 = [{
        "name": "Nome",
        "value": "",
        "label": "Nome"
    },
    {
        value: "dddd@rr.r",
        label: "email"
    },
    {
        "name": "zzzzzzzz",
        "value": "",
        "label": "zzzzzzzz"
    },
    {
        "name": "Telefono",
        "value": "",
        "label": "Telefono"
    }];
const answers2 = [{
        "name": "Nome",
        "value": "dd",
        "label": "Nome"
    },
    {
        value: "dddd@rr.r",
        label: "email"
    },
    {
        "name": "Email",
        "value": "gggg",
        "label": "zzzzzzzz"
    },
    {
        "name": "Telefono",
        "value": "",
        "label": "Telefono"
    }];
const wrongansweremail0 = [
    {
        value: "dddd",
        label: "email"
    }
];
const wrongansweremail1 = [
    {
        value: "dddd@rrr",
        label: "email"
    }
];
const wrongansweremail2 = [
    {
        value: "dddd.rrr",
        label: "email"
    }
];
const wrongansweremail3 = [
    {
        value: "dddd@rrr",
        label: "email"
    }
];
describe('former testing', function () {
    describe('validate simple wrong forms', () => {
        const novalid1 = former.validate(answers0, form0);
        const novalid2 = former.validate(answers1, form0);
        const wrongemail1 = former.validate(wrongansweremail1, formeemail);
        const wrongemail2 = former.validate(wrongansweremail2, formeemail);
        const wrongemail3 = former.validate(wrongansweremail3, formeemail);
        it('not contains ok true', () => {
            expect(novalid1.ok).not.be.ok;
        });
        it('contain errors', () => {
            expect(novalid1.errors).to.be.an('Array');
        });
        it('2 requireds input missing', () => {
            expect(novalid1.errors.length).to.be.eq(2);
        });
        it('1 requireds input missing', () => {
            expect(novalid2.errors.length).to.be.eq(1);
        });
        it('check wrong email dddd', () => {
            expect(wrongemail1.errors.length).to.be.eq(1);
        });
        it('check wrong email dddd@rrr', () => {
            expect(wrongemail2.errors.length).to.be.eq(1);
        });
        it('check wrong email dddd.rrr', () => {
            expect(wrongemail3.errors.length).to.be.eq(1);
        });
    });
    describe('validate simple form', () => {
        const valid1 = former.validate(answers2, form0);
        it('valid simple input strings', () => {
            expect(valid1.ok).to.ok;
        });
    });
});
