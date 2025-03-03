# @tbdex/http-client

## 0.27.3

### Patch Changes

- [`433b71a`](https://github.com/leordev/tbdex-js-releases/commit/433b71af98298101cd895f0d6d255326b62b7027) Thanks [@leordev](https://github.com/leordev)! - Testing next with sha release

## 0.27.2

### Patch Changes

- [`e70c7d5`](https://github.com/leordev/tbdex-js-releases/commit/e70c7d5d7e5a1afbf3e79f7862177e5bf447337d) Thanks [@leordev](https://github.com/leordev)! - another bump

- [`02d8f1a`](https://github.com/leordev/tbdex-js-releases/commit/02d8f1af49d3edf34ca24cc3a85df5c81b0c6391) Thanks [@leordev](https://github.com/leordev)! - Testing RC

## 0.27.1

### Patch Changes

- [#9](https://github.com/leordev/tbdex-js-releases/pull/9) [`83be3f4`](https://github.com/leordev/tbdex-js-releases/commit/83be3f451370ac22fc977d72b1626235fb0c940b) Thanks [@leordev](https://github.com/leordev)! - Huge patch on http-client, be ready

## 0.27.0

### Minor Changes

- d555bdb: wooohooo testing

## 0.26.4

### Patch Changes

- a6f6a70: Everything patched

## 0.26.3

## 0.26.2

## 0.26.1

## 0.26.0

### Minor Changes

- Testing changesets

## 0.25.0

### Minor Changes

- 1b48ad1: Simplify types, inheritance structure, and API

### Patch Changes

- Updated dependencies [552675c]
- Updated dependencies [1b48ad1]
  - @tbdex/protocol@0.25.0

## 0.24.0

### Minor Changes

- c471b3d: Upgrading web5 versions in protocol and http-client
- 01fc636: JWT creation and verification

### Patch Changes

- 550fe94: Replaces karma testing library with web-test-runner
- Updated dependencies [550fe94]
- Updated dependencies [c471b3d]
  - @tbdex/protocol@0.24.0

## 0.23.0

### Minor Changes

- 9e1015e: Introduces custom errors types and breaking changes: functions now throw instead of return on failure

### Patch Changes

- 47105ca: Removes HttpResponse and ErrorResponse types from http-client package
- Updated dependencies [a7bc582]
- Updated dependencies [5631d32]
- Updated dependencies [c3610ed]
  - @tbdex/protocol@0.23.0

## 0.22.1

### Patch Changes

- Updated dependencies [2f4c096]
  - @tbdex/protocol@0.22.1

## 0.22.0

### Minor Changes

- bef3ae7: Refactored `generateRequestToken` to take `PortableDid` as an argument instead of `privateKeyJwk` and `kid`

### Patch Changes

- Updated dependencies [bef3ae7]
  - @tbdex/protocol@0.22.0

## 0.21.0

### Minor Changes

- 415b234: - Added requester DID in filter passed to `ExchangesApi.getExchanges`. Prior to this change, there was no way to prevent returning exchanges that the requester wasn't a participant of
  - Added `did:dht` resolution
  - Fixed `DevTools.createJwt`

### Patch Changes

- Updated dependencies [415b234]
  - @tbdex/protocol@0.21.0

## 0.20.0

### Patch Changes

- @tbdex/protocol@0.20.0

## 0.19.0

### Patch Changes

- @tbdex/protocol@0.19.0

## 0.18.0

### Minor Changes

- Get Exchanges filter field name change from exchangeId to id

### Patch Changes

- @tbdex/protocol@0.18.0

## 0.17.0

### Minor Changes

- 547124f: Test CI semver automation

### Patch Changes

- Updated dependencies [547124f]
  - @tbdex/protocol@0.17.0

## 0.16.0

Updated request token generation to use refactored `Crypto` functions

---

Updated dependencies

- `@tbdex/http-client@0.16.0`
- `@tbdex/protocol@0.16.0`
