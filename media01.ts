import * as program from 'commander'
import * as dotenv from 'dotenv'


import MediaServer from './media/server'

const media01 = new MediaServer({
    endpoint: '127.0.0.1'
})

media01.start(6001, '0.0.0.0', () => {

    console.log('media server start on', 6001)
})








