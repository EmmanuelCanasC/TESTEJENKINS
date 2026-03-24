const request = require('supertest');
const app = require('../server');

describe('GET /suma', () => {
    it('debería sumar correctamente', async () => {
        const res = await request(app).get('/suma?a=2&b=3');

        expect(res.statusCode).toBe(200);
        expect(res.body.resultado).toBe(5);
    });
});