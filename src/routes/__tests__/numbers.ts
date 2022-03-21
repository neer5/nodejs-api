import app from '../../app';
import request from 'supertest';

const numbersArr = [
  {
    input: 3,
    output: 'CXZ'
  },
  {
    input: 5,
    output: 'Tatasoft'
  },
  {
    input: 15,
    output: 'CXZTatasoft'
  },
  {
    input: 7,
    output: -7
  },
  {
    input: -7,
    output: -7
  }
];

// group test using describe
describe('POST /numbers', () => {
  it('returns status code 404 if invalid input is passed', async () => {
    const res = await request(app).post('/numbers').send({ input: 'John' });

    expect(res.statusCode).toEqual(404);
  });

  numbersArr.forEach((numberObj) => {
    it(`returns '${numberObj.output}' if input is passed (${numberObj.input})`, async () => {
      const res = await request(app)
        .post('/numbers')
        .send({ input: numberObj.input });
      expect(res.body.output).toBe(numberObj.output);
      expect(res.statusCode).toEqual(200);
    });
  });
});
