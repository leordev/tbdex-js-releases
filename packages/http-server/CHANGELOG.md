# @tbdex/http-server

## 0.27.3

## 0.27.2

## 0.27.1

## 0.27.0

### Minor Changes

- d555bdb: wooohooo testing

## 0.26.4

### Patch Changes

- a6f6a70: Everything patched

## 0.26.3

### Patch Changes

- 10ad047: patching server test

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
  - @tbdex/http-client@0.25.0

## 0.24.0

### Minor Changes

- 01fc636: JWT creation and verification

### Patch Changes

- Updated dependencies [550fe94]
- Updated dependencies [c471b3d]
- Updated dependencies [01fc636]
  - @tbdex/http-client@0.24.0
  - @tbdex/protocol@0.24.0

## 0.23.0

### Patch Changes

- 941e8f6: Improve http-server error handling and test coverage
- 47105ca: Removes HttpResponse and ErrorResponse types from http-client package
- Updated dependencies [a7bc582]
- Updated dependencies [5631d32]
- Updated dependencies [9e1015e]
- Updated dependencies [47105ca]
- Updated dependencies [c3610ed]
  - @tbdex/protocol@0.23.0
  - @tbdex/http-client@0.23.0

## 0.22.1

### Patch Changes

- Updated dependencies [2f4c096]
  - @tbdex/protocol@0.22.1
  - @tbdex/http-client@0.22.1

## 0.22.0

### Patch Changes

- Updated dependencies [bef3ae7]
  - @tbdex/http-client@0.22.0
  - @tbdex/protocol@0.22.0

## 0.21.0

### Minor Changes

- 415b234: - Added requester DID in filter passed to `ExchangesApi.getExchanges`. Prior to this change, there was no way to prevent returning exchanges that the requester wasn't a participant of
  - Added `did:dht` resolution
  - Fixed `DevTools.createJwt`

### Patch Changes

- Updated dependencies [415b234]
  - @tbdex/http-client@0.21.0
  - @tbdex/protocol@0.21.0

## 0.20.0

### Minor Changes

- 563e036: export `CallbackError`

### Patch Changes

- @tbdex/protocol@0.20.0
- @tbdex/http-client@0.20.0

## 0.19.0

### Minor Changes

- Restructure error messages as ErrorDetail type
- Handle http-server callback errors and pass offering to RFQ handler

### Patch Changes

- @tbdex/protocol@0.19.0
- @tbdex/http-client@0.19.0

## 0.18.0

### Minor Changes

- Get Exchanges filter field name change from exchangeId to id

### Patch Changes

- Updated dependencies
  - @tbdex/http-client@0.18.0
  - @tbdex/protocol@0.18.0

## 0.17.0

### Minor Changes

- 547124f: Test CI semver automation

### Patch Changes

- Updated dependencies [547124f]
  - @tbdex/http-client@0.17.0
  - @tbdex/protocol@0.17.0

## 0.16.0

Updated dependencies

- `@tbdex/http-client@0.16.0`
- `@tbdex/protocol@0.16.0`

## 0.15.1

### Patch Changes

- 3daa119: Patch get-func-name audit failure
- Updated dependencies [3daa119]
  - @tbdex/http-client@0.15.1
  - @tbdex/protocol@0.15.1

## 0.15.0

### Minor Changes

- f085285: initialize `api` in constructor of `TbdexHttpServer`. This allows consumers to attach their own custom endpoints if needed like so:

  ```typescript
  import { TbdexHttpServer } from "@tbdex/http-server";

  const server = new TbdexHttpServer();

  server.api.post("/some-custom-endpoint", (req, res) => {
    console.log("hi");

    return res.sendStatus(202);
  });

  await server.listen(9000, () => {
    console.log("Server listening on port 9000");
  });
  ```

### Patch Changes

- Updated dependencies [0d05bb1]
  - @tbdex/http-client@0.15.0
  - @tbdex/protocol@0.15.0
