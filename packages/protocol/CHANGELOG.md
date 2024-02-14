# @tbdex/protocol

## 0.27.1

### Patch Changes

- [#7](https://github.com/leordev/tbdex-js-releases/pull/7) [`d3a921a`](https://github.com/leordev/tbdex-js-releases/commit/d3a921a225a4c7f0c6e33b88631c80cf9de3243d) Thanks [@leordev](https://github.com/leordev)! - Just a small patch on protocol

## 0.27.0

### Minor Changes

- d555bdb: wooohooo testing

## 0.26.4

### Patch Changes

- a6f6a70: Everything patched

## 0.26.3

## 0.26.2

### Patch Changes

- 72ea381: Protocol changes test

## 0.26.1

### Patch Changes

- d783380: Test protocol patch bump

## 0.26.0

### Minor Changes

- Testing changesets

## 0.25.0

### Minor Changes

- 1b48ad1: Simplify types, inheritance structure, and API

### Patch Changes

- 552675c: Upgrade @noble/hashes to 1.3.3

## 0.24.0

### Minor Changes

- c471b3d: Upgrading web5 versions in protocol and http-client

### Patch Changes

- 550fe94: Replaces karma testing library with web-test-runner

## 0.23.0

### Patch Changes

- a7bc582: make required claims nullable
- 5631d32: Replace pex implementation with web5
- c3610ed: Adds more checks to validate an RFQ against a provided Offering

## 0.22.1

### Patch Changes

- 2f4c096: bump @web5/credentials dependency

## 0.22.0

### Minor Changes

- bef3ae7: Refactored `sign` to take `PortableDid` as an argument instead of `privateKeyJwk` and `kid`

## 0.21.0

### Minor Changes

- 415b234: - Added requester DID in filter passed to `ExchangesApi.getExchanges`. Prior to this change, there was no way to prevent returning exchanges that the requester wasn't a participant of
  - Added `did:dht` resolution
  - Fixed `DevTools.createJwt`

## 0.20.0

No changes

## 0.19.0

No changes

## 0.18.0

## 0.17.0

### Minor Changes

- 547124f: Test CI semver automation

## 0.16.0

Replaced CBOR with [JSON Canonicalization Scheme](https://datatracker.ietf.org/doc/html/rfc8785)

Using CBOR for deterministic serialization proved to be more difficult than originally anticipated specifically because of the lack of consistent implementations of the same CBOR sorting algorithm.

Related: <https://github.com/TBD54566975/tbdex/pull/177>

---

Refactored `Crypto`:

- Prior to this PR, `sign` allowed for either `detachedPayload` as a base64url string or `payload` as an object. If `detachedPayload` was provided, the resulting signature would be a detached JWS. If `payload` was provided, it would be JSON serialized and base64url encoded. Looking back, this felt awkward and confusing. Refactored such that `payload` is _always_ expected to be a `UInt8Array` and `detached` is now a boolean.
- Refactored `verify` similar to ^
- Added a bit more detail to TSDoc

Generally speaking, `Crypto.sign`, and `Crypto.verify` still feel conflated and a bit janky. This is largely because they support tbdex signatures (compact detached JWS) _in addition to_ JWTs. Ideally, `Crypto` would be specific to tbdex related cryptography only with most of the core cryptographic functionality coming from `@web5/crypto`. The current state of both methods is largely a holdover until `@web5/crypto` is updated
