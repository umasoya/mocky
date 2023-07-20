# mocky

apiのstubサーバー

## 環境変数

| 変数名       | 意味                                                       |
| ------------ | ---------------------------------------------------------- |
| `MOCKY_PORT` | 割り当てたいホスト側のポートを指定する。(デフォルトは3000) |

## 起動方法

```sh
docker compose up -d
```

## paths

| path  | method                             | status code  | description                                                                                                                                |
| ----- | ---------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| /200  | GET<br />POST<br />PUT<br />DELETE | 200          | `200 OK` を返します                                                                                                                        |
| /404  | GET<br />POST<br />PUT<br />DELETE | 404          | `404 Not Found` を返します                                                                                                                 |
| /json | GET                                | 200<br />500 | `filename` で渡したファイルを'files'ディレクトリから探し､その中身をjsonとして返します<br />ファイルが見つからない場合は500エラーを返します |
| /json | POST                               | 200<br />500 | POSTしたjsonをオウム返しします<br />何もPOSTしなかったりjson以外をPOSTした場合は500エラーを返します                                        |

## example

**ホストから /json にPOST**

環境変数で割り当てポートを変更している場合は `:3000` の部分を書き換えてください。

```sh
curl -X POST -H "Content-Type: application/json" -d '{"name": "John", "email": "john@test.com"}' localhost:3000/json
# {"name":"John","email":"john@test.com"}
```

**他のdockerコンテナからPOST**

対象のコンテナとmockyが同一のdockerネットワークに接続している前提｡

```sh
curl -X POST -H "Content-Type: application/json" -d '{"name": "John", "email": "john@test.com"}' mocky:3000/json
# {"name":"John","email":"john@test.com"}
```

**ホストから /json にGET**

サーバーから返したいjsonを作成して､ レスポンスとして受け取る｡

```sh
# profile.json を作成
echo '{"name": "Emma", "age": "25", "gender": "woman"}' > files/profile.json

# profile.jsonをレスポンスとして受け取る
curl -G -d filename=profile.json 'localhost:3000/json'
# or
curl 'localhost:3000/json?filename=profile.json'
```