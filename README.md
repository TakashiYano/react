# 概要

## 技術

- JavaScript

  - 命令的な View で DOM 操作を行う
  - [関数宣言(function OR arrow)](https://qiita.com/suin/items/a44825d253d023e31e4d)
    - [アロー関数の方が TypeScript で型定義をするときに楽なことがある(Next.js の SSR・SSG・ISR などを用いる時)](https://nextjs.org/docs/basic-features/typescript)

- TypeScript

  - イベント処理の型推論

  ```
  type Props = {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    onkeypress: (event: React.KeyboardEvent<HTMLInputElement>) => void
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => void
    onFocus: (event: React.FocusEvent<HTMLInputElement>) => void
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
    onClickDiv: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  }
  ```

- [React](https://ja.reactjs.org/docs/getting-started.html)

  - 難しいところ
    - URL と画面の紐づけ(ルーティング)を自分で記述する必要がある
    - CSS Modules を使う際に webpack の設定を記述する必要がある
    - サーバーサイドレンダリングを実現する事が難しい
  - 特徴
    - 宣言的な View で、状態の変化を意識せずにデータさえ与えたら勝手に View が変わるため、メンテナンス性が高い
    - 親からコンポーネントを呼び出すときに少しデータを変えることによって、同じコンポーネントだけど表示は変えることが出来る
    - コンポーネントの中に状態を閉じ込めることによって、ユーザーのアクションを作ることが出来たり、他のコンポーネントに影響を与えないで UI を作ることが出来る
    - コンポーネントの再レンダリングを管理することによって、ユーザーがアクションを起こした時やページが切り替わった時に、コンポーネントを再び描画させることなくパフォーマンスの高いサイトを作ることが出来る
  - map 構文
    - 一意となるように key を指定する必要がある(重複がないことを確認するため)
    - データの増減が容易＋修正が全箇所に反映される
    - データと処理の部分は分けるように意識することで可読性が高くなる(リファクタリング)
  - [絶対パスインポート](https://nextjs.org/docs/advanced-features/module-path-aliases)：tsconfig.json と.vscode/settings.json に設定する
  - [イベント(クリックイベントなど)](https://ja.reactjs.org/docs/events.html)：
    ユーザーのアクションによるイベント
    - 引数が必要になる場合は内部に関数宣言した方が良い
    - 関数宣言を内部に行うと、コンポーネントが再レンダリングされる段階でメソッドも再生成される：useCallback(第 2 引数が必要)で回避する
  - [イベント](https://ja.reactjs.org/docs/events.html)：
    何かしらのタイミングで起こしたいイベント -ページが読み込まれた際のイベント：useEffect(第 2 引数が必要)でマウント時(DOM 操作)の処理をかける(コンポーネントのライフサイクル)
    - DOM 要素に直接アクセスするようなことはなるべく控える(body タグなどの next.js 管轄外は可)
  - useCallback・useEffect・useMemo の第 2 引数
    - 変数を入れると変数が変更されたタイミングで、改めて処理が走る
    - 前回の状態を解除して新しく何かしらの処理をさせたいとき：Cleanup Function と第 2 引数の変数を用いて処理を行う
  - useMemo・useCallback に対する考え方
    - React のコンポーネント内で何か定義するときは、全てに対して useMemo、関数だったら useCallback を用いる(関数を再生成させるか・させないべきかというのをハンドルできるかどうかなのでそれを意識づけるため)
  - 状態管理
    - React のコンポーネントは、状態が変化しないとコンポーネントが再レンダリングされない：useState を使って state の管理を行う
    - 親が再レンダリングされたタイミングで、子コンポーネントが受け取っている props の値が変わると再レンダリングされる
  - [スプレッド構文](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
    - [破壊的メソッド](https://jsprimer.net/basic/array/#mutable-immutable)を使うのは NG：スプレッド構文を用いて配列やオブジェクトもイミュータブルに扱う
      - ミュータブル(一度値を作成した後に変更できる)：配列・オブジェクトのデフォルト
      - イミュータブル(一度値を作成した後に変更できない)：文字列・数値のデフォルト
  - [カスタムフック](https://ja.reactjs.org/docs/hooks-custom.html)を用いて処理の共通化
    - フックを呼び出すのはトップレベルのみ
    - フックを呼び出すのは React の関数内のみ
      - React の関数であることを区別するために名前は use で始めるべき
    - フックで分けることで UI の自由度が高くなる
  - state のリフトアップ：ページ間やコンポーネント間で値を共通化
    - Redux, Recoil
    - Context
    - Apollo Client
  - page 間の状態共通化
    - \_app に State を定義して、それを各ページに props として渡す
    - コンポーネントに Props として渡したものが各ページに Props として渡る
    - 状態を定義してそれをコンポーネントに渡すことによって各ページで状態を共通化できる
  - component 間の状態共通化
    - 親のコンポーネントに State を定義して子コンポーネントに渡す
  - 非同期処理(ローディング・エラーの状態)
    - 外部のパッケージに任せる方が楽(SWR・React Query)
    - API エンドポイント(API の叩き先)
  - [useReducer](https://ja.reactjs.org/docs/hooks-reference.html#usereducer)
    - (state, action) => newState という型のレデューサ(reducer)を受け取り、現在の state を dispatch メソッドとペアにして返す
    - コールバックの代わりに dispatch を下位コンポーネントに渡せるようになるため、複数階層にまたがって更新を発生させるようなコンポーネントではパフォーマンスの最適化にもなる
    - メリット
      - 宣言的にどういうアクションが起こるか一目でわかる
      - useState の場合は状態がいくつあるか予想がつかない
    - [TypeScript(型定義)](https://www.webopixel.net/javascript/1647.html)
    - reducer
      - 現在の state と、新しい action を受け取って新しい state を返す
      - 新しい state を返す方法が dispatch
    - dispatch
      - dispatch を使って新しい action を発生させ、既存の state と組み合わせて新しい state を生み出す
  - [Validation(React hook form)](https://react-hook-form.com/advanced-usage/#main)
    - カスタムフックは、検証メソッドとしてyup/Joiと簡単に統合でき、検証リゾルバー内で使用できる
      - メモ化された検証スキーマを定義します（または、依存関係がない場合はコンポーネントの外部で定義します）
      - 検証スキーマを渡すことにより、カスタムフックを使用します
      - 検証リゾルバーをuseFormフックに渡します
    - 外部パッケージ
      - [yup](https://github.com/jquense/yup)
      - [joi](https://github.com/sideway/joi)
      - [zod](https://github.com/colinhacks/zod)
  - [Optional chaining](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
    - undefinedだった場合はそのままundefinedで、title等があるときにはそのtitle等を表示させる

- [SWR](https://swr.vercel.app/ja)

  - オプション
    - React Suspense モードを有効にする
    - 内部の fetch の実装をオーバーライドする fetcher
      - fetcher が機能しないと、条件分岐が意図したとおりに機能せず return まで通る
    - 初期値をどうするか(initialData)
    - ユーザーがオフラインからオンラインに戻った時に自動的に fetch をさせる(revalidateOnReconnect)
    - 定期的な間隔で非同期処理を行いたいとき(ポーリングの間隔：refreshInterval)
  - 条件付きフェッチ
    - 条件付きでデータを取得するにはnullを使用する
  - 連続データフェッチ
    - データを取得してその取得したデータを基に、さらにfetchを行ってデータを表示させる

- [Next.js](https://nextjs.org/docs)

  - 特徴
    - 画像の最適化・国際化対応・Next.js Analytics・Hybrid SSG and SSR・Static Generation・TypeScript サポート・Fast Refresh・API Routes・Bundling
    - Zero Config で設定ファイルを記述する必要がない
    - ファイルの規則に沿って、ルーティングが自動生成される
    - ビルトインで最初から CSS Modules を使うことが出来る。CSS Modules を使うことで CSS の管理が容易になる。CSS のクラス名が被らないように一意の値を割り振る。絶対にクラスセレクターでなければならない。メンテナンス性の高いアプリケーション開発を行うことが可能になる
    - Link コンポーネントによって読み込みが必要な部分だけで済み、Prefetch によりリンク先のデータをバックグラウンドで読み込むため、高速なページ遷移が実現できる
    - [useRouter](https://nextjs.org/docs/api-reference/next/router)
    - API Route(サーバーレスファンクション)
      - 簡易的なサーバーを立ち上げることが出来る
    - next/image
      - next.js が用意しているイメージコンポーネント
      - パフォーマンスの最適化
  - [ファイルシステムルーティング](https://nextjs-ja-translation-docs.vercel.app/docs/routing/introduction)
    - Nested Routes
      - ディレクトリをネストしていけば対応できる
    - Index Routes
      - ディレクトリのルートとしてルーティングする
    - 動的 Routes
      - 動的なセグメントにマッチさせたければ、[].拡張子を使う
  - [next-seo](https://github.com/garmeeh/next-seo)
    - Next.jsプロジェクトでのSEOの管理を容易にするプラグイン
    - SEO属性を追加したいページに含めることで機能する
    - ページのSEOプロパティを持つ構成オブジェクトをページに渡す

- API・非同期処理

  - [{JSON}Placeholder](https://jsonplaceholder.typicode.com/)

- [React Hot Toast](https://react-hot-toast.com/)

  - Toast に特化したライブラリ(パッケージ)
  - 軽量で TypeScript 対応もありヘッドレスもできる
  - 他にも[Material UI](https://material-ui.com/ja/components/snackbars/)や[ChakraUI](https://chakra-ui.com/docs/feedback/toast)が Toast を実装：Material UI は状態管理を行う必要があり、Chakra UI は hooks を呼び出す必要がある
  - Tailwind CSS を使用していて、Toast 実装のために material UI を導入することはパフォーマンスの低下：React Hot Toast を用いる

- [classcat](https://github.com/jorgebucaran/classcat)

  - className を条件で出し分ける時に便利なライブラリ
  - バンドルサイズが小さく、頻繁に開発されている
  - 疑似ライブラリ：classnames・clsx

- ライブラリを選ぶ時の基準
  - 頻繁にメンテナンスされているか
  - リリース日の最新がいつなのか
  - TypeScript の型定義があるか(index.d.ts)
  - TypeScript で開発されているか
  - [BUNDLEPHOBIA](https://bundlephobia.com/)でサイズを見る
