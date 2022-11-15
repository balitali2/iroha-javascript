# `@iroha2/data-model`

The `@iroha2/data-model` packages contains generated SCALE-definitions for Iroha 2 Data Model.

## Target version

This package targets `hyperledger/iroha` at current `iroha2-lts` branch, which has a hash `e3cd89bd2b6bef0d822900eb71a1854c7b86e2aa`.

## Installation

The packages are published under the `@iroha2` scope into Iroha Nexus Registry.
To install `data-model` with `npm`/`pnpm`:

1. Configure your package manager to fetch scoped packages from Nexus Registry.

   ```ini
   # FILE: .npmrc
   @iroha2:registry=https://nexus.iroha.tech/repository/npm-group/
   ```

2. Install the `data-model` package:

   ```bash
   npm i @iroha2/data-model
   ```

## Known issues

### Entries ordering in `BTreeMap` and `BTreeSet`

In Rust, these structs assume that items are `PartialOrd`-ordered while encoding to ensure consistency for signatures creation. The JS library doesn't provide this feature and you should put entries in the correct order by yourself.