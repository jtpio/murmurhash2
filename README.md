# murmurhash2

[![Github Actions Status](https://github.com/jtpio/murmurhash2/workflows/Build/badge.svg)](https://github.com/jtpio/murmurhash2/actions)

MurmurHash2 x86 32-bit implemented in TypeScript, with support for Unicode characters.

## Install

```bash
npm install murmurhash2
```

## Usage

```typescript
import { murmur2 } from 'murmurhash2';

murmur2('Hi there 👋', 12345);
```

## Development

Install nodejs and yarn, then:

```bash
yarn
yarn run build
```

## Tests

The repository contains a couple of sanity tests.

To run the tests:

```bash
yarn run test
```

## Notes

This implementation is largely inspired by the one from Gary Court: https://github.com/garycourt/murmurhash-js

It uses a `TextEncoder` to encode the input string as a `Uint8Array` buffer before performing the calculation.

## References

- [MurmurHash2 by Austin Appleby](https://github.com/aappleby/smhasher/blob/master/src/MurmurHash2.cpp)
- Inspired by: [https://github.com/garycourt/murmurhash-js](https://github.com/garycourt/murmurhash-js)
- [xtensor-stack/xtl implentation](https://github.com/xtensor-stack/xtl/blob/7d41f768787ee6405e3f1b1056e04f6fbd43f8cd/include/xtl/xhash.hpp#L47)
