# 概要

## 技術

- JavaScript

  - 命令的な View で DOM 操作を行う。

- [React](https://ja.reactjs.org/docs/getting-started.html)

  - URL と画面の紐づけ(ルーティング)を自分で記述する必要がある。
  - CSS Modules を使う際に webpack の設定を記述する必要がある。
  - サーバーサイドレンダリングを実現する事が難しい。
  - 宣言的な View で、状態の変化を意識せずにデータさえ与えたら勝手に View が変わるため、メンテナンス性が高い。
  - 親からコンポーネントを呼び出すときに少しデータを変えることによって、同じコンポーネントだけど表示は変えることが出来る。
  - コンポーネントの中に状態を閉じ込めることによって、ユーザーのアクションを作ることが出来たり、他のコンポーネントに影響を与えないで UI を作ることが出来る。
  - コンポーネントの再レンダリングを管理することによって、ユーザーがアクションを起こした時やページが切り替わった時に、コンポーネントを再び描画させることなくパフォーマンスの高いサイトを作ることが出来る。
  - 子コンポーネントは必ず 1 つの div を返すとする。(React.Fragment を使用しない)

- [Next.js](https://nextjs.org/docs)

  - 画像の最適化・国際化対応・Next.js Analytics・Hybrid SSG and SSR・Static Generation・TypeScript サポート・Fast Refresh・API Routes・Bundling
  - Zero Config で設定ファイルを記述する必要がない。
  - ファイルの規則に沿って、ルーティングが自動生成される。
  - ビルトインで最初から CSS Modules を使うことが出来る。CSS Modules を使うことで CSS の管理が容易になる。CSS のクラス名が被らないように一意の値を割り振る。絶対にクラスセレクターでなければならない。メンテナンス性の高いアプリケーション開発を行うことが可能になる。

- [React Hot Toast](https://react-hot-toast.com/)
  - Toast に特化したライブラリ(パッケージ)
  - 軽量で TypeScript 対応もありヘッドレスもできる。
  - 他にも[Material UI](https://material-ui.com/ja/components/snackbars/)や[ChakraUI](https://chakra-ui.com/docs/feedback/toast)が Toast を実装している。
  - Material UI は状態管理を行う必要があり、Chakra UI は hooks を呼び出す必要あり。
  - Tailwind CSS を使用していて、Toast 実装のために material UI を導入することはサイズが大きくなり、あまり好ましくない。
