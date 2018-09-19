const nock = require('nock');

module.exports = () => {
    nock('https://api.easypost.com:443', {encodedQueryParams:true})
        .post('/v2/addresses', 'address%5Bstreet1%5D=417%20MONTGOMERY%20ST&address%5Bstreet2%5D=FLOOR%205&address%5Bcity%5D=SAN%20FRANCISCO&address%5Bstate%5D=CA&address%5Bzip%5D=94104&address%5Bcountry%5D=US&address%5Bcompany%5D=EasyPost&address%5Bphone%5D=415-123-4567')
        .reply(201, [ '1f8b08000000000000038491c16ec2300c865fa5ca79480d2474f4562198260d3a5176d82e9597b85aa636a9d2308d21de7d4ed13870d92dfefc39fe959c98d12c67a07dad32aeb5ce10b1e1a299f1855202b8e4c8e77aaee58cdd31f7fe892a905f68ed711808298f1050d710f134e5d9245d4cb8dca7692e649edebf9173e8f5bf8e850e596e0f6d4b77baae077b247905c3f1d90d81842178c4c0090a9e259b72bb7f2837abdd6b52edafdd2975d74f65b94b648c6642bca32ab6c97a576c978fd5b21c550a437c5950f1637a3a2e044f459c70071b7c1c7aa9a8ec3f9cc571a1e4d39990f38c207660dabfa49dd35108384654e0bd415f37a04c3b2ebf58f45446a30d06ae830d6af4d0d601beebf803173a46bb615fe84d631404e3ecc0f2d3f9fc0b0000ffff', '0300ca9bbf93b4010000' ], [ 'X-Frame-Options',
            'SAMEORIGIN',
            'X-XSS-Protection',
            '1; mode=block',
            'X-Content-Type-Options',
            'nosniff',
            'X-EP-Request-UUID',
            '7cacc316-9442-472b-a42c-94030fc7c0c6',
            'Cache-Control',
            'no-cache, no-store, must-revalidate, private',
            'Pragma',
            'no-cache',
            'Expires',
            '0',
            'Location',
            '/api/v2/addresses/adr_c71ddd7eeef14f319cc4a151e16d6d53',
            'Content-Type',
            'application/json; charset=utf-8',
            'X-Runtime',
            '0.024947',
            'Content-Encoding',
            'gzip',
            'Transfer-Encoding',
            'chunked',
            'X-Node',
            'web6sj',
            'X-Node',
            '95e3eafc54',
            'X-Node',
            'easypost',
            'X-Backend',
            'easypost',
            'X-Proxied',
            'intlb2sj 44721f5b1e',
            'Connection',
            'close',
            'X-Proxied',
            'intlb2wdc 44721f5b1e',
            'X-Proxied',
            'extlb2wdc, 934cd196c5',
            'Strict-Transport-Security',
            'max-age=15768000; includeSubDomains; preload' ]);
}
;
