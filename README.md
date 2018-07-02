* https://qiita.com/IganinTea/items/aec8f2b15b203946a2c4
* https://github.com/iga-yamaguchi/php-docker-sample

上記URLのDocker laravel環境を使いました。

## 環境構築
```
docker-compose build
docker-compose up
```

`http://localhost:8080/` にアクセスし、laravelのトップページが表示されればOK

## DBマイグレーション
```
docker-compose exec php php ./sample/artisan migrate
```

#### 上記マイグレーション実行で「SQLSTATE[HY000] [2054] The server requested authentication method unknown to the client のエラー表示される場合

https://symfoware.blog.fc2.com/blog-entry-2160.html

## scaffoldをVueからReactに変更
