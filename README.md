# B4Bcoin Message Verification and Signing for B4Bcore




b4bcore-message adds support for verifying and signing b4bcoin messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main b4bcore repo](https://github.com/B4Bcoin/b4bcore) for more information.

## Getting Started

```sh
npm install b4bcore-message
```

```sh
bower install b4bcore-message
```

To sign a message:

```javascript
var b4bcore = require('b4bcore-lib');
var Message = require('b4bcore-message');

var privateKey = b4bcore.PrivateKey.fromWIF('5K2DxqJ9kLFL3hF3KEWDftAig3TyAXenDxpr27PaLBieuSFo5PQ');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'BGRsG7UQc3AmvdrhPDngpPjvTNhJQFeHYj';
var signature = 'G5cFMHRysjcxkBJ7mol8l3cjPbFQFQ68fNqTGehTO9/cLNUaflt3gQT//yAUp5fqWF0snDlZYkXJoooazBicRTg=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/B4Bcoin/b4bcore/blob/master/CONTRIBUTING.md) on the main b4bcore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/B4Bcoin/b4bcore/blob/master/LICENSE).
