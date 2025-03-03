
# TEST Design System Monorepo


## Development


### Setup

...

### Storybook
...

## Basic commands

...

## Documentation

### Creating New Component

...

### Formatting and linting

...

### Testing

To run the unit tests for our components, run the following:

```
pnpm test
```

### Committing

When making a PR that contains changes that should be included in a package's changelog, be sure to do so by running:

```
pnpm changeset
```

This will generate a uniquely-named Markdown file in the .changeset/ directory, keeping track of version upgrades and update descriptions. We follow semver conventions for versioning, so each change will either be major, minor, or patch.

Make sure that the PR includes the changes made by running this command.

### Conventions and processes

- [Git branches and commits](./docs/git.md)
- [Creating pull requests](./docs/pull-requests.md)
- [Creating a release](./docs/creating-a-release.md)