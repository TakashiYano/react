# 概要

## 技術

- [React Hot Toast](https://react-hot-toast.com/)
  - Toast に特化したライブラリ(パッケージ)
  - 軽量で TypeScript 対応もありヘッドレスもできる。
  - 他にも[Material UI](https://material-ui.com/ja/components/snackbars/)や[ChakraUI](https://chakra-ui.com/docs/feedback/toast)が Toast を実装している。
  - Material UI は状態管理を行う必要があり、Chakra UI は hooks を呼び出す必要あり。
  - Tailwind CSS を使用していて、Toast 実装のために material UI を導入することはサイズが大きくなり、あまり好ましくない。
