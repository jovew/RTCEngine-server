export default  {
    server: {
        secret: 'test_secret',
        externalUrl: 'http://127.0.0.1:3888/'
    },
    redis: {
        host: '127.0.0.1',
        port: 6379
    },

    database: {
        type:'postgres', // change to mysql
        host: 'localhost',
        port: 5432,
        username: 'user',
        password: 'password',
        database: 'rtcengine_db'
    },

    iceServers: [
        // {
        //     host: '47.107.97.230',
        //     port: 3478,
        //     secret: 'rtcEngine',
        //     transports: ['udp', 'tcp']
        // },
    ],
    
    serverRelay: true,  // true or false

    medianode: [
        {
            name: 'medianode01',
            node: '127.0.0.1:6001',
            domain: 'media01.dot.cc'
        },
        // {
        //     name: 'medianode02',
        //     node: '127.0.0.1:6002',
        //     domain: 'media01.dot.cc'
        // }
    ]
}
