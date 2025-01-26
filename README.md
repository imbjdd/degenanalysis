
[![All Contributors](https://img.shields.io/github/all-contributors/ethereum/ethereum-org-website?color=orange&style=flat-square)](#contributors-)

<div align="center" style="margin-top: 1em; margin-bottom: 3em;">
  <a href="https://ethereum.org"><img alt="ethereum logo" src="./public/Degen Analysis.png" alt="ethereum.org" height="240"></a>
  <h1>👋 Welcome Degens to Degen Analysis</h1>
</div>

>[!WARNING]
> The project is under development and is not yet finished. Some features may be missing or unstable.

This is the repo for the [degenanalysis](https://degenanalysis.vercel.app/) website. The goal of the [website](https://degenanalysis.vercel.app/) is to **analyze smart contracts** and search for **existing audits**. Check an example [here](https://degenanalysis.vercel.app/opendata).

Core values of the projects include Open Data. Learn more on [degenanalysis](https://degenanalysis.vercel.app/opendata).

<hr style="margin-top: 3em; margin-bottom: 3em;">

## Table of contents

- [What is the project about](#features)
- [How to locally install the project](#features)
- [The Degen Analysis's stack](#features)
- [How to contribute](#features)


## What is the project about


### Features

- Show existing Audits for a Smart Contract
- Detects type of Smart Contract
- (soon) ~~Use [slither](https://github.com/crytic/slither) to automatically analyse Smart Contract~~

## How to locally install the project

### Using NPM

```bash
  git clone https://github.com/imbjdd/degenanalysis
  cd degenanalysis
  npm install
  npm run dev
```
    
### Environment Variables

To run this project, you will need to add the following environment variables to your .env file

- `NEXT_PUBLIC_SUPABASE_URL`

- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

- `INFURA_KEY`

## The Degen Analysis's stack

- [React](https://react.dev/) - library for web and native user interfaces
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind.css](https://tailwindcss.com/) - utility-first CSS framework
- [Shadcn/UI](https://ui.shadcn.com/) - accessible and customizable components that you can copy and paste into your app
- [Supabase](https://supabase.com/) - open source Firebase alternative
- [Infura](https://www.infura.io/) - powerful suite of high availability blockchain APIs and developer tools

## How to contribute

Contributions are always welcome! Feel free to submit issues or pull requests.

## License

[MIT](https://choosealicense.com/licenses/mit/)