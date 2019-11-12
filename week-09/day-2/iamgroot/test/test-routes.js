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