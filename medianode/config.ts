
export default {
    debug: true,
    log: true,
    ultraDebug: false,
    endpoint: ['127.0.0.1','192.168.1.105'],
    maxMediaPort: 60000,
    minMediaPort: 40000,
    capabilities: {
        audio: {
            codecs: ['opus'],
            rtcpfbs: [
                { 'id': 'transport-cc' },
            ],
            extensions: [
                'urn:ietf:params:rtp-hdrext:ssrc-audio-level',
                'urn:ietf:params:rtp-hdrext:sdes:mid',
                'urn:ietf:params:rtp-hdrext:sdes:rtp-stream-id',
                'urn:ietf:params:rtp-hdrext:sdes:repaired-rtp-stream-id',
                'http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01'
            ]
        },
        video: {
            codecs: ['h264'],
            //codecs: ['h264;level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e034'],
            rtx: true,
            rtcpfbs: [
                { 'id': 'goog-remb'},
                { 'id': 'transport-cc' },
                { 'id': 'ccm', 'params': ['fir'] },
                { 'id': 'nack' },
                { 'id': 'nack', 'params': ['pli'] }
            ],
            extensions: [
                'urn:ietf:params:rtp-hdrext:toffset',
                'urn:3gpp:video-orientation',
                'urn:ietf:params:rtp-hdrext:sdes:mid',
                'urn:ietf:params:rtp-hdrext:sdes:rtp-stream-id',
                'urn:ietf:params:rtp-hdrext:sdes:repaired-rtp-stream-id',
                'urn:ietf:params:rtp-hdrext:framemarking',
                'http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time',
                'http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01',
            ]
        }
    }
}
