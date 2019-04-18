const hobbitsDb = require('./hobbitsModel.js')
const db = require('../data/dbConfig.js');
describe('hobbits model', () =>{

    
    describe('insert()', () =>{
        afterEach(async () =>{
            await db('hobbits').truncate()
        })

        it('should insert the provided hobbits into the db', async()=>{
            await hobbitsDb.insert({name: 'Hariet'})
            await hobbitsDb.insert({name: 'Elmer'})

            const hobbits = await db('hobbits')
            expect(hobbits).toHaveLength(2)
        })

        it('should insert the provided hobbit into the db', async() =>{
            let hobbit = await hobbitsDb.insert({name:'Hariet'})
            expect (hobbit.name).toBe('Hariet')

            hobbit = await hobbitsDb.insert({name: 'fuckli'})
            expect(hobbit.name).toBe('fuckli')
        })
    })
})