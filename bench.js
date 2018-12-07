'use strict'

const benchmark = require('benchmark');
const suite = new benchmark.Suite();

const {intersection} = require('.');
const intersect = require('intersect');
const _ = require('lodash.intersection');

const firstArray = [];
const secondArray = [];

for (let i = 0; i < 20; i++) {
    firstArray.push(Math.random().toString(36).substr(2))
}

for (let i = 0; i < 1000; i++) {
    secondArray.push(Math.random().toString(36).substr(2))
}

suite.add('hiz.intersection', () => {
    intersection(firstArray, secondArray)
});

suite.add('intersect', () => {
    intersect(firstArray, secondArray)
});

suite.add('lodash.intersection', () => {
    _(firstArray, secondArray)
});

suite.on('cycle', cycle);

suite.run();

function cycle (e) {
    console.log(e.target.toString())
}