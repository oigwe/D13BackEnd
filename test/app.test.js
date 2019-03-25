
const request = require('supertest')

jest.mock('pg-promise')
const pg_promise = require("pg-promise")
pg_promise.mockImplementation(() => {
    return function() {
        return {
            any: () => Promise.resolve({'test': 1})
        }
    }
})
const {app,} = require('../app')


test('test designed to fail', done => {
    request(app)
      .get('/')
      .then(response => {
            expect(response.status).toBe(404)
            done()
      })
})