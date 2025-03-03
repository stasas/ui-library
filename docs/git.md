# Git conventions

- [Git conventions](#git-conventions)
  - [Branches](#branches)
    - [Branching strategy](#branching-strategy)
    - [Branch naming](#branch-naming)
      - [Examples](#examples)
  - [Commits](#commits)
    - [Commit messages](#commit-messages)


The following sections describe how we handle branches and commit messages.

## Branches

### Branching strategy

1. A core `develop` branch representing the latest work
2. A `main` branch for releasing stable versions
3. Short-lived development branches off of `develop`

### Branch naming

The TEST branching strategy resembles [Gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow), and the branch names correspond fairly closely. Name your branches using the following format:

```
<branch type>/<summary>
```

Where `<branch type>` is typically one of:

- `feature`: A new component, new capability of a component, and so on
- `bugfix`: Fixing the intended functionality or display of a component
- `docs`: Adding documentation for a component, process, and so on
- `hotfix`: A quick bugfix to address something recently merged

#### Examples

- `bugfix/focus-toasts`
- `feature/radio-button`
- `hotfix/missing-alt-attrs`
- `docs/code-review-process`

Other types may make sense too, so this isn't a hard-and-fast rule:

- `experiment/try-using-latest-litelement`
- `brand/add-color-guidelines`

## Commits

### Commit messages

Commits must follow the [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/) to create a coherent commit history and help communicate intent to TEST consumers. The commit message convention is structured as follows:

```
type(scope?): description

[body?]

[footer(s)?]
```

The **type** of the commit describes the nature of the work you're committing. You can choose one of the following values:

- `build`
- `chore`
- `ci`
- `docs`
- `feat`
- `fix`
- `perf`
- `refactor`
- `revert`
- `style`
- `test`

The **scope** represents the area to which your change pertains, such as a component. The **description** of your message should be a brief statement using imperative tense describing the work you did.

Imagine you fixed a bug in the Button component. Your commit would look something like the following:

```
fix(button): remove platform-native styling
```

If a change needs context, consider adding a full commit body which includes those details rather than saving it for a pull request:

```
fix(text-input): set focus on input element

When focusing on a <text-input>, focus was
initially falling on the text label rather than the
input itself. This was due to the way the focus API
works in IE11.
```

You can do this readily in most IDEs. If you're using Git from the command line, you can also either exclude the `-m` flag, which will open your editor to author the commit message, or by specifying `-m` twice—the first for the summary and the second for the body.

If your commit includes breaking changes, be sure to include a footer in your message starting with `BREAKING CHANGE:` followed by details on the change:

```
refactor(tokens): rename color design tokens

BREAKING CHANGE: remove the word `brand` from color tokens
```