
# node-grab

A command line utility for grabbing the tip of repos off of GitHub

## Install

```bash
$ npm install -g node-grab
```

## Usage

```
grab <owner> <repo> [--branch=<branch>] [--https|--ssh] [--target=target]
```

This tool will "grab" the latest commit from the given github repo, but only the tip; None of the history will come with it. This is useful for starting new projects from a template, or if you want a copy of a library to use, but don't need to know the projects entire 5 year history.

```bash
$ grab UmbraEngineering node-grab
```


