# 0.12.1

Features:

- Add `Array.keepMapOne` (a8300de)

# 0.12.0

Features:

- Add helpers for `AsyncData<Result>` (6319ada)

# 0.11.1

Fixes:

- Fixed a formatting issue causing an incorrec type (b9af1ee)

# 0.11.0

Fixes:

- Fixed a typing issue with optional keys in `Dict.entries` (bc73bd8)

# 0.10.0

Breaking changes:

- Renamed `future.get` to `future.onResolve` (7fd9442)
- Remove `isPending`, `isCancelled` and `isResolved` from Future (d759e66)

Features:

- Improve discriminating unions (d759e66)

# 0.9.0

Breaking changes:

- Make `Array.keepMap` callback return an option instead of a nullable (ff967f9)

# 0.8.0

Features:

- Add `allFromDict` helpers (04a4662)
- Add `Array.zip` & `Array.unzip` (04a4662)

# 0.7.0

Changes:

- Improve type inference when returning newly constructed `Result`, `Option` or `AsyncData` from a `.match` function (ae74ba8)

# 0.6.4

Fixes:

- Fix flatMap type (fcd4acc)

# 0.6.3

Changes:

- More concise generics on Result-related types (2f9465e)

# 0.6.2

Features:

- Add `option.toResult` for better discoverability (cc8a058)

# 0.6.1

Features:

- Add `Result.fromOption` (6e34a3f)

Changes:

- Make type annotations more compact in IDE (dc320ee)

# 0.6.0

Breaking changes:

- Move from `value` getter to `get` method in `Lazy` (4d26820)

# 0.5.3

Fixes:

- Fixed `get` typing for `Result` type (thanks [@ansavchenco](https://github.com/ansavchenco)!) (54fe9aa)

# 0.5.2

Features:

- Add convenience `get` methods (23592b0)

# 0.5.1

Changes:

- Add inline docs to future (6fd938c)

# 0.5.0

Breaking changes:

- Update internal representation (181feac)

# 0.4.2

Fixes:

- Fixed a failing test (64feaff)

# 0.4.1

Fixes:

- Fixed a compatibility issue with ts-pattern (37337ed)

# 0.4.0

Breaking changes:

- In case of `Error`, `Result` class stores the value in `result.error` (57e254b)

Features:

- Better IDE integration and TypeScript errors (57e254b)

# 0.3.7

Fixes:

- Fix issue with `Lazy` export (10064dc)

# 0.3.6

Changes:

- Add more guarantees on Future (7ba99ec)

# 0.3.5

Changes:

- Remove `Unwrap` type removing guarantees (bb83047)

# 0.3.4

Changes:

- Simplify `Future.mapResult` type (ce2749a)

# 0.3.3

Features:

- Add `Option.all`, `Result.all` & `AsyncData.all` (039eeda)

# 0.3.2

Features:

- Add tap functions on `Option`, `Result` and `AsyncData` for debugging (cb63dcf)
- Add `mapError` and `flatMapError` to `Result` (0d36a03)

# 0.3.1

Changes:

- Improve typing for `Future` (f8d9e12)
- Make `Future.flatMapOk` & `Future.flatMapError` behave like the result ones (f8d9e12)

# 0.3.0

Changes:

- Make `flatMap` aggregate error types with a union (015da3b)

# 0.2.1

Features:

- Reexport `Array` static methods than can be shadowed when importing `Array` from boxed (2dd970b)

# 0.2.0

Changes:

- Better guaratees on `Dict.entries` and `Dict.keys` (Thanks [0xCAFEADD1C7](https://github.com/0xCAFEADD1C7)) (ec67c64, c572dab)
- Better typing for `Result.fromExecution` and `Result.fromPromise` (c25623f)

# 0.1.2

Changes:

- Improve exposed types readability (6fb0128)

# 0.1.1

Changes:

- Improve repository structure (9cd199a)

# 0.1.0

Initial version
