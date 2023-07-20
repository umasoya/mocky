# mocky

apiのstubサーバー

## 環境変数

| 変数名 | 意味 |
| -- | -- |
| `MOCKY_PORT` | 割り当てたいホスト側のポートを指定する。(デフォルトは3000) |

## 起動方法

```sh
docker compose up -d
```

## 使い方

`/json` にjsonをPOSTするとオウム返ししてくれます。

### ホストからPOST

環境変数で割り当てポートを変更している場合は `:3000` の部分を書き換えてください。

```sh
curl -X POST -H "Content-Type: application/json" -d '{"name": "umasoya", "email": "umasoya.0331@gmail.com"}' localhost:3000/json
# {"name":"umasoya","email":"umasoya.0331@gmail.com"}
```

### 他のdockerコンテナからPOST

```sh
curl -X POST -H "Content-Type: application/json" -d '{"name": "umasoya", "email": "umasoya.0331@gmail.com"}' mocky:3000/json
# {"name":"souma","email":"souma.y@e-channel.co.jp"}
```
