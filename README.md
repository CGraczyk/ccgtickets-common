# @ccgtickets/common

Source repository for the shared npm package used by the TicketingApp services.

## Purpose

This package contains shared middleware, error classes, and types that are published to npm as `@ccgtickets/common`.

`auth` and `tickets` consume the published package, not a local workspace link. That keeps the package boundary explicit and lets the services install independently from the library source.

## Local development

If you are working from the parent `ticketingApp` repository, initialize the submodule with Git and then install dependencies here:

```bash
git submodule update --init --recursive common
cd common
npm ci
```

If you are working inside this repo directly, install dependencies with:

```bash
npm ci
```

## Publish flow

Publish a new patch release with:

```bash
npm run pub
```

That script:

1. creates a commit in this repo
2. bumps the package version
3. builds both ESM and CJS outputs
4. prompt a login to npm
5. publishes the package to npm

## Updating dependent services

After publishing a new version, go back to the parent `ticketingApp` root and run:

```bash
npm run bump
```

That refreshes `@ccgtickets/common` in the service packages that currently depend on it.
