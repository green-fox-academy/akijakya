'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('groot endpoint', (t) => {
    request(app)
        .get('/groot')
        .expect('Content-Type', /json/)
        .expect(404)
        .end(function (err, res) {
        t.error(err, 'No error');
        t.same(res.body.error, "I am Groot!", 'I am Groot! error message');
        t.end();
        });
});

test('groot endpoint with message', (t) => {
    request(app)
        .get('/groot?message=randommessage')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
        t.error(err, 'No error');
        t.same(res.body.received, "randommessage", '"randommessage" message');
        t.same(res.body.translated, "I am Groot!", '"I am Groot" message');
        t.end();
        });
});

test('yondu endpoint with positive integers', (t) => {
    request(app)
        .get('/yondu?distance=100.0&time=10.0')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
        t.error(err, 'No error');
        t.equal(res.body.distance, 100.0, 'should be 100.0 as float');
        t.equal(res.body.time, 10.0, 'should be 10.0 as float');
        t.equal(res.body.speed, 10.0, 'should be 10.0 as float');
        t.end();
        });
});