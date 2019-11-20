const mongoose = require('mongoose')
const Register = require('../models/registerModel')

// create test suit
describe('registration model test', () => {
        //test set up: runs before any test in this case create test-db - before all should go through the test database/test set up,
        beforeAll(async () => {
            try{
                await mongoose.connect('mongodb://localhost:27017/test-db', {useNewUrlParser: true, useUnifiedTopology: true})
                await Register.deleteMany({})
            }
            catch (err) {
                console.log('database error', +err)
            }
        })
        test('should be able to save to the database', async() => {
            const register = new Register({'first_name':'Fanny'})
            await register.save() //async & await

            const items = await Register.find({}) // to fin the items that has been saved, await to wait for a return
            expect(items.length).toBe(1)
            /**When you're writing tests, you often need to check that values meet certain conditions. 
             * expect gives you access to a number of "matchers" that let you validate different things. */

        })

})