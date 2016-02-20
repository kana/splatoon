var React = require('react');
var ReactDOM = require('react-dom');

var theGears = [  // {{{
  {type: "アタマ", name: "スカッシュバンド",              main: "攻撃力アップ",             sub: "スーパージャンプ時間短縮", subrare: "復活時間短縮",             brand: "アイロニック"},
  {type: "アタマ", name: "サムライヘルメット",            main: "攻撃力アップ",             sub: "-",                        subrare: "-",                        brand: "amiibo"},
  {type: "アタマ", name: "ダイバーゴーグル",              main: "攻撃力アップ",             sub: "スペシャル時間延長",       subrare: "インク効率アップ(サブ)",   brand: "フォーリマ"},
  {type: "アタマ", name: "でんせつのぼうし",              main: "攻撃力アップ",             sub: "-",                        subrare: "-",                        brand: "アタリメイド"},
  {type: "アタマ", name: "ヤコメッシュ",                  main: "防御力アップ",             sub: "スペシャル増加量アップ",   subrare: "スペシャル時間延長",       brand: "ヤコ"},
  {type: "アタマ", name: "スプラッシュゴーグル",          main: "防御力アップ",             sub: "スペシャル時間延長",       subrare: "インク効率アップ(サブ)",   brand: "フォーリマ"},
  {type: "アタマ", name: "チャリキング帽",                main: "防御力アップ",             sub: "インク回復力アップ",       subrare: "スーパージャンプ時間短縮", brand: "アロメ"},
  {type: "アタマ", name: "パワードマスク",                main: "防御力アップ",             sub: "-",                        subrare: "-",                        brand: "amiibo"},
  {type: "アタマ", name: "ショートビーニー",              main: "インク効率アップ(メイン)", sub: "防御力アップ",             subrare: "攻撃力アップ",             brand: "シグレニ"},
  {type: "アタマ", name: "スゲ",                          main: "インク効率アップ(メイン)", sub: "防御力アップ",             subrare: "攻撃力アップ",             brand: "シグレニ"},
  {type: "アタマ", name: "スタジオヘッドホン",            main: "インク効率アップ(メイン)", sub: "スペシャル時間延長",       subrare: "インク効率アップ(サブ)",   brand: "フォーリマ"},
  {type: "アタマ", name: "サファリハット",                main: "インク効率アップ(メイン)", sub: "インク効率アップ(サブ)",   subrare: "インク回復力アップ",       brand: "ホッコリー"},
  {type: "アタマ", name: "エイズリーバンダナ",            main: "インク効率アップ(サブ)",   sub: "イカダッシュ速度アップ",   subrare: "防御力アップ",             brand: "クラーゲス"},
  {type: "アタマ", name: "ビバレッジキャップ",            main: "インク効率アップ(サブ)",   sub: "復活時間短縮",             subrare: "スペシャル減少量ダウン",   brand: "ホタックス"},
  {type: "アタマ", name: "ランニングバンド",              main: "インク効率アップ(サブ)",   sub: "スペシャル減少量ダウン",   subrare: "スペシャル増加量アップ",   brand: "エゾッコ"},
  {type: "アタマ", name: "オーロラヘッドホン",            main: "インク効率アップ(サブ)",   sub: "スペシャル時間延長",       subrare: "インク効率アップ(サブ)",   brand: "フォーリマ"},
  {type: "アタマ", name: "フグベルハット",                main: "インク回復力アップ",       sub: "インク効率アップ(サブ)",   subrare: "インク回復力アップ",       brand: "ホッコリー"},
  {type: "アタマ", name: "ヘッドバンド ホワイト",         main: "インク回復力アップ",       sub: "攻撃力アップ",             subrare: "インク効率アップ(メイン)", brand: "バトロイカ"},
  {type: "アタマ", name: "トレジャーメット",              main: "インク回復力アップ",       sub: "スペシャル時間延長",       subrare: "インク効率アップ(サブ)",   brand: "フォーリマ"},
  {type: "アタマ", name: "サイクルメット",                main: "インク回復力アップ",       sub: "復活時間短縮",             subrare: "スペシャル減少量ダウン",   brand: "ホタックス"},
  {type: "アタマ", name: "キャディ サンバイザー",         main: "ヒト移動速度アップ",       sub: "スーパージャンプ時間短縮", subrare: "復活時間短縮",             brand: "アイロニック"},
  {type: "アタマ", name: "ヒーローヘッズ レプリカ",       main: "ヒト移動速度アップ",       sub: "-",                        subrare: "-",                        brand: "アタリメイド"},
  {type: "アタマ", name: "テンタクルズメット",            main: "ヒト移動速度アップ",       sub: "スペシャル時間延長",       subrare: "インク効率アップ(サブ)",   brand: "フォーリマ"},
  {type: "アタマ", name: "キャンプキャップ",              main: "イカダッシュ速度アップ",   sub: "防御力アップ",             subrare: "攻撃力アップ",             brand: "シグレニ"},
  {type: "アタマ", name: "イカパッチン",                  main: "イカダッシュ速度アップ",   sub: "-",                        subrare: "-",                        brand: "amiibo"},
  {type: "アタマ", name: "カモメッシュ",                  main: "イカダッシュ速度アップ",   sub: "インク効率アップ(サブ)",   subrare: "インク回復力アップ",       brand: "ホッコリー"},
  {type: "アタマ", name: "ナイトビジョン",                main: "イカダッシュ速度アップ",   sub: "スペシャル時間延長",       subrare: "インク効率アップ(サブ)",   brand: "フォーリマ"},
  {type: "アタマ", name: "ヤキフグ サンバイザー",         main: "スペシャル増加量アップ",   sub: "インク効率アップ(サブ)",   subrare: "インク回復力アップ",       brand: "ホッコリー"},
  {type: "アタマ", name: "イカベーダーキャップ",          main: "スペシャル増加量アップ",   sub: "復活時間短縮",             subrare: "スペシャル減少量ダウン",   brand: "ホタックス"},
  {type: "アタマ", name: "ダテコンタクト",                main: "スペシャル増加量アップ",   sub: "インク回復力アップ",       subrare: "スーパージャンプ時間短縮", brand: "アロメ"},
  {type: "アタマ", name: "キャンプハット",                main: "スペシャル時間延長",       sub: "防御力アップ",             subrare: "攻撃力アップ",             brand: "シグレニ"},
  {type: "アタマ", name: "イカンカン クラシック",         main: "スペシャル時間延長",       sub: "復活時間短縮",             subrare: "スペシャル減少量ダウン",   brand: "ホタックス"},
  {type: "アタマ", name: "アローバンド ホワイト",         main: "スペシャル時間延長",       sub: "スペシャル減少量ダウン",   subrare: "スペシャル増加量アップ",   brand: "エゾッコ"},
  {type: "アタマ", name: "クロブチ レトロ",               main: "復活時間短縮",             sub: "インク効率アップ(メイン)", subrare: "ヒト移動速度アップ",       brand: "ジモン"},
  {type: "アタマ", name: "バックワードキャップ",          main: "復活時間短縮",             sub: "スペシャル減少量ダウン",   subrare: "スペシャル増加量アップ",   brand: "エゾッコ"},
  {type: "アタマ", name: "イヤーマフ",                    main: "復活時間短縮",             sub: "スペシャル時間延長",       subrare: "インク効率アップ(サブ)",   brand: "フォーリマ"},
  {type: "アタマ", name: "2ラインメッシュ",               main: "スペシャル減少量ダウン",   sub: "イカダッシュ速度アップ",   subrare: "防御力アップ",             brand: "クラーゲス"},
  {type: "アタマ", name: "ジェットキャップ",              main: "スペシャル減少量ダウン",   sub: "インク効率アップ(サブ)",   subrare: "インク回復力アップ",       brand: "ホッコリー"},
  {type: "アタマ", name: "イカスカルマスク",              main: "スペシャル減少量ダウン",   sub: "スペシャル時間延長",       subrare: "インク効率アップ(サブ)",   brand: "フォーリマ"},
  {type: "アタマ", name: "スケボーメット",                main: "スペシャル減少量ダウン",   sub: "復活時間短縮",             subrare: "スペシャル減少量ダウン",   brand: "ホタックス"},
  {type: "アタマ", name: "イカンカン",                    main: "スーパージャンプ時間短縮", sub: "復活時間短縮",             subrare: "スペシャル減少量ダウン",   brand: "ホタックス"},
  {type: "アタマ", name: "エゾッコメッシュ",              main: "スーパージャンプ時間短縮", sub: "スペシャル減少量ダウン",   subrare: "スペシャル増加量アップ",   brand: "エゾッコ"},
  {type: "アタマ", name: "マルベッコー",                  main: "スーパージャンプ時間短縮", sub: "イカダッシュ速度アップ",   subrare: "防御力アップ",             brand: "クラーゲス"},
  {type: "アタマ", name: "ボンボンニット",                main: "スーパージャンプ時間短縮", sub: "インク効率アップ(メイン)", subrare: "ヒト移動速度アップ",       brand: "ジモン"},
  {type: "アタマ", name: "ウーニーズBBキャップ",          main: "ボム飛距離アップ",         sub: "復活時間短縮",             subrare: "スペシャル減少量ダウン",   brand: "ホタックス"},
  {type: "アタマ", name: "テッカサイクルキャップ",        main: "ボム飛距離アップ",         sub: "スーパージャンプ時間短縮", subrare: "復活時間短縮",             brand: "アイロニック"},
  {type: "アタマ", name: "サンサンサンバイザー",          main: "ボム飛距離アップ",         sub: "インク回復力アップ",       subrare: "スーパージャンプ時間短縮", brand: "アロメ"},
  {type: "アタマ", name: "タコゾネススコープ",            main: "ボム飛距離アップ",         sub: "-",                        subrare: "-",                        brand: "アタリメイド"},
  {type: "アタマ", name: "パイロットゴーグル",            main: "ボム飛距離アップ",         sub: "スペシャル時間延長",       subrare: "インク効率アップ(サブ)",   brand: "フォーリマ"},
  {type: "アタマ", name: "バスケバンド",                  main: "スタートダッシュ",         sub: "スーパージャンプ時間短縮", subrare: "復活時間短縮",             brand: "アイロニック"},
  {type: "アタマ", name: "イカ娘ずきん",                  main: "スタートダッシュ",         sub: "-",                        subrare: "-",                        brand: "侵略！イカ娘"},
  {type: "アタマ", name: "ボーダービーニー",              main: "スタートダッシュ",         sub: "インク効率アップ(メイン)", subrare: "ヒト移動速度アップ",       brand: "ジモン"},
  {type: "アタマ", name: "チドリキャップ",                main: "スタートダッシュ",         sub: "復活時間短縮",             subrare: "スペシャル減少量ダウン",   brand: "ホタックス"},
  {type: "アタマ", name: "モンゴウベレー",                main: "スタートダッシュ",         sub: "スペシャル時間延長",       subrare: "インク効率アップ(サブ)",   brand: "フォーリマ"},
  {type: "アタマ", name: "イロメガネ",                    main: "ラストスパート",           sub: "スペシャル減少量ダウン",   subrare: "スペシャル増加量アップ",   brand: "エゾッコ"},
  {type: "アタマ", name: "ロブスターブーニー",            main: "ラストスパート",           sub: "スペシャル時間延長",       subrare: "インク効率アップ(サブ)",   brand: "フォーリマ"},
  {type: "アタマ", name: "オクタグラス",                  main: "ラストスパート",           sub: "インク効率アップ(サブ)",   subrare: "インク回復力アップ",       brand: "ホッコリー"},
  {type: "アタマ", name: "タレサン18K",                   main: "ラストスパート",           sub: "ヒト移動速度アップ",       subrare: "イカダッシュ速度アップ",   brand: "ロッケンベルグ"},
  {type: "アタマ", name: "バイザーメット",                main: "ラストスパート",           sub: "復活時間短縮",             subrare: "スペシャル減少量ダウン",   brand: "ホタックス"},
  {type: "アタマ", name: "ウインターボンボン",            main: "逆境強化",                 sub: "復活時間短縮",             subrare: "スペシャル減少量ダウン",   brand: "ホタックス"},
  {type: "アタマ", name: "アローバンド ブラック",         main: "逆境強化",                 sub: "スペシャル減少量ダウン",   subrare: "スペシャル増加量アップ",   brand: "エゾッコ"},
  {type: "アタマ", name: "アーマーメット レプリカ",       main: "逆境強化",                 sub: "-",                        subrare: "-",                        brand: "アタリメイド"},
  {type: "アタマ", name: "サッカーバンド",                main: "逆境強化",                 sub: "インク回復力アップ",       subrare: "スーパージャンプ時間短縮", brand: "アロメ"},
  {type: "アタマ", name: "タコマスク",                    main: "逆境強化",                 sub: "スペシャル時間延長",       subrare: "インク効率アップ(サブ)",   brand: "フォーリマ"},
  {type: "アタマ", name: "テニスバンド",                  main: "カムバック",               sub: "インク回復力アップ",       subrare: "スーパージャンプ時間短縮", brand: "アロメ"},
  {type: "アタマ", name: "5パネルキャップ",               main: "カムバック",               sub: "スペシャル減少量ダウン",   subrare: "スペシャル増加量アップ",   brand: "エゾッコ"},
  {type: "アタマ", name: "タイショウのはちまき",          main: "カムバック",               sub: "-",                        subrare: "-",                        brand: "ファミ通"},
  {type: "アタマ", name: "イカノルディック",              main: "カムバック",               sub: "復活時間短縮",             subrare: "スペシャル減少量ダウン",   brand: "ホタックス"},
  {type: "アタマ", name: "フェイスゴーグル",              main: "カムバック",               sub: "スペシャル時間延長",       subrare: "インク効率アップ(サブ)",   brand: "フォーリマ"},
  {type: "フク",   name:  "アイロニックレイヤード",       main: "攻撃力アップ",             sub: "スーパージャンプ時間短縮", subrare: "復活時間短縮",             brand: "アイロニック"},
  {type: "フク",   name:  "アオサドーレ",                 main: "攻撃力アップ",             sub: "スペシャル増加量アップ",   subrare: "スペシャル時間延長",       brand: "ヤコ"},
  {type: "フク",   name:  "かくれパイレーツ",             main: "攻撃力アップ",             sub: "インク回復力アップ",       subrare: "スーパージャンプ時間短縮", brand: "アロメ"},
  {type: "フク",   name:  "カレッジスウェット ネイビー",  main: "攻撃力アップ",             sub: "インク効率アップ(メイン)", subrare: "ヒト移動速度アップ",       brand: "ジモン"},
  {type: "フク",   name:  "ロッケンベルグT ブラック",     main: "攻撃力アップ",             sub: "ヒト移動速度アップ",       subrare: "イカダッシュ速度アップ",   brand: "ロッケンベルグ"},
  {type: "フク",   name:  "イカ娘ノースリーブ",           main: "攻撃力アップ",             sub: "-",                        subrare: "-",                        brand: "侵略！イカ娘"},
  {type: "フク",   name:  "ボーダーネイビー",             main: "攻撃力アップ",             sub: "インク効率アップ(メイン)", subrare: "ヒト移動速度アップ",       brand: "ジモン"},
  {type: "フク",   name:  "スタジャンロゴマシ",           main: "攻撃力アップ",             sub: "スペシャル減少量ダウン",   subrare: "スペシャル増加量アップ",   brand: "エゾッコ"},
  {type: "フク",   name:  "エゾッコラグラン",             main: "防御力アップ",             sub: "スペシャル減少量ダウン",   subrare: "スペシャル増加量アップ",   brand: "エゾッコ"},
  {type: "フク",   name:  "ニクショクT",                  main: "防御力アップ",             sub: "インク効率アップ(サブ)",   subrare: "インク回復力アップ",       brand: "ホッコリー"},
  {type: "フク",   name:  "ミントT",                      main: "防御力アップ",             sub: "復活時間短縮",             subrare: "スペシャル減少量ダウン",   brand: "ホタックス"},
  {type: "フク",   name:  "ヤキフグ8bit ブラック",        main: "防御力アップ",             sub: "インク効率アップ(サブ)",   subrare: "インク回復力アップ",       brand: "ホッコリー"},
  {type: "フク",   name:  "FCカラスミ",                   main: "防御力アップ",             sub: "スペシャル増加量アップ",   subrare: "スペシャル時間延長",       brand: "ヤコ"},
  {type: "フク",   name:  "ベイビークラゲシャツ",         main: "防御力アップ",             sub: "インク効率アップ(メイン)", subrare: "ヒト移動速度アップ",       brand: "ジモン"},
  {type: "フク",   name:  "チャリキングジャージ",         main: "防御力アップ",             sub: "インク回復力アップ",       subrare: "スーパージャンプ時間短縮", brand: "アロメ"},
  {type: "フク",   name:  "レトロジャッジ",               main: "防御力アップ",             sub: "攻撃力アップ",             subrare: "インク効率アップ(メイン)", brand: "バトロイカ"},
  {type: "フク",   name:  "オータムネル",                 main: "インク効率アップ(メイン)", sub: "ヒト移動速度アップ",       subrare: "イカダッシュ速度アップ",   brand: "ロッケンベルグ"},
  {type: "フク",   name:  "ベクトルパターン レッド",      main: "インク効率アップ(メイン)", sub: "スペシャル増加量アップ",   subrare: "スペシャル時間延長",       brand: "ヤコ"},
  {type: "フク",   name:  "レイニーブルーT",              main: "インク効率アップ(メイン)", sub: "イカダッシュ速度アップ",   subrare: "防御力アップ",             brand: "クラーゲス"},
  {type: "フク",   name:  "レイヤード ブラック",          main: "インク効率アップ(メイン)", sub: "攻撃力アップ",             subrare: "インク効率アップ(メイン)", brand: "バトロイカ"},
  {type: "フク",   name:  "イカセーラー ホワイト",        main: "インク効率アップ(メイン)", sub: "スペシャル時間延長",       subrare: "インク効率アップ(サブ)",   brand: "フォーリマ"},
  {type: "フク",   name:  "ギンガムチェック アカ",        main: "インク効率アップ(メイン)", sub: "スペシャル減少量ダウン",   subrare: "スペシャル増加量アップ",   brand: "エゾッコ"},
  {type: "フク",   name:  "イカホワイト",                 main: "インク効率アップ(サブ)",   sub: "攻撃力アップ",             subrare: "インク効率アップ(メイン)", brand: "バトロイカ"},
  {type: "フク",   name:  "パールドットT",                main: "インク効率アップ(サブ)",   sub: "復活時間短縮",             subrare: "スペシャル減少量ダウン",   brand: "ホタックス"},
  {type: "フク",   name:  "バスケジャージ アウェイ",      main: "インク効率アップ(サブ)",   sub: "スーパージャンプ時間短縮", subrare: "復活時間短縮",             brand: "アイロニック"},
  {type: "フク",   name:  "マルエリシャツ",               main: "インク効率アップ(サブ)",   sub: "ヒト移動速度アップ",       subrare: "イカダッシュ速度アップ",   brand: "ロッケンベルグ"},
  {type: "フク",   name:  "ヤマビコT ブルー",             main: "インク効率アップ(サブ)",   sub: "防御力アップ",             subrare: "攻撃力アップ",             brand: "シグレニ"},
  {type: "フク",   name:  "タコゾネスプロテクター",       main: "インク効率アップ(サブ)",   sub: "-",                        subrare: "-",                        brand: "アタリメイド"},
  {type: "フク",   name:  "チョコガサネ",                 main: "インク効率アップ(サブ)",   sub: "スペシャル増加量アップ",   subrare: "スペシャル時間延長",       brand: "ヤコ"},
  {type: "フク",   name:  "おどるイカアロハ",             main: "インク回復力アップ",       sub: "スペシャル時間延長",       subrare: "インク効率アップ(サブ)",   brand: "フォーリマ"},
  {type: "フク",   name:  "グレープT",                    main: "インク回復力アップ",       sub: "復活時間短縮",             subrare: "スペシャル減少量ダウン",   brand: "ホタックス"},
  {type: "フク",   name:  "バトロングホワイト",           main: "インク回復力アップ",       sub: "攻撃力アップ",             subrare: "インク効率アップ(メイン)", brand: "バトロイカ"},
  {type: "フク",   name:  "シロシャツ",                   main: "インク回復力アップ",       sub: "インク効率アップ(メイン)", subrare: "ヒト移動速度アップ",       brand: "ジモン"},
  {type: "フク",   name:  "スクールブレザー",             main: "インク回復力アップ",       sub: "-",                        subrare: "-",                        brand: "amiibo"},
  {type: "フク",   name:  "ロゴマシマシアロハ",           main: "インク回復力アップ",       sub: "スペシャル減少量ダウン",   subrare: "スペシャル増加量アップ",   brand: "エゾッコ"},
  {type: "フク",   name:  "ロッケンベルグT ホワイト",     main: "インク回復力アップ",       sub: "ヒト移動速度アップ",       subrare: "イカダッシュ速度アップ",   brand: "ロッケンベルグ"},
  {type: "フク",   name:  "フォレストダウン",             main: "インク回復力アップ",       sub: "防御力アップ",             subrare: "攻撃力アップ",             brand: "シグレニ"},
  {type: "フク",   name:  "イカノメT ブラック",           main: "ヒト移動速度アップ",       sub: "インク回復力アップ",       subrare: "スーパージャンプ時間短縮", brand: "アロメ"},
  {type: "フク",   name:  "ウーニーズBBシャツ",           main: "ヒト移動速度アップ",       sub: "スーパージャンプ時間短縮", subrare: "復活時間短縮",             brand: "アイロニック"},
  {type: "フク",   name:  "クラーゲス528",                main: "ヒト移動速度アップ",       sub: "イカダッシュ速度アップ",   subrare: "防御力アップ",             brand: "クラーゲス"},
  {type: "フク",   name:  "マリンボーダー",               main: "ヒト移動速度アップ",       sub: "インク効率アップ(メイン)", subrare: "ヒト移動速度アップ",       brand: "ジモン"},
  {type: "フク",   name:  "F-190",                        main: "ヒト移動速度アップ",       sub: "スペシャル時間延長",       subrare: "インク効率アップ(サブ)",   brand: "フォーリマ"},
  {type: "フク",   name:  "オレンジボーダーラガー",       main: "ヒト移動速度アップ",       sub: "スペシャル増加量アップ",   subrare: "スペシャル時間延長",       brand: "ヤコ"},
  {type: "フク",   name:  "ガチガサネ",                   main: "ヒト移動速度アップ",       sub: "攻撃力アップ",             subrare: "インク効率アップ(メイン)", brand: "バトロイカ"},
  {type: "フク",   name:  "カレッジスウェット グレー",    main: "イカダッシュ速度アップ",   sub: "インク効率アップ(メイン)", subrare: "ヒト移動速度アップ",       brand: "ジモン"},
  {type: "フク",   name:  "チドリメロンＴ",               main: "イカダッシュ速度アップ",   sub: "復活時間短縮",             subrare: "スペシャル減少量ダウン",   brand: "ホタックス"},
  {type: "フク",   name:  "ハラグロラグラン",             main: "イカダッシュ速度アップ",   sub: "ヒト移動速度アップ",       subrare: "イカダッシュ速度アップ",   brand: "ロッケンベルグ"},
  {type: "フク",   name:  "マルフグT",                    main: "イカダッシュ速度アップ",   sub: "インク効率アップ(サブ)",   subrare: "インク回復力アップ",       brand: "ホッコリー"},
  {type: "フク",   name:  "ラインT ホワイト",             main: "イカダッシュ速度アップ",   sub: "-",                        subrare: "-",                        brand: "KOG"},
  {type: "フク",   name:  "ヒーロージャケット レプリカ",  main: "イカダッシュ速度アップ",   sub: "-",                        subrare: "-",                        brand: "アタリメイド"},
  {type: "フク",   name:  "マウンテンダウン",             main: "イカダッシュ速度アップ",   sub: "防御力アップ",             subrare: "攻撃力アップ",             brand: "シグレニ"},
  {type: "フク",   name:  "カモガサネ",                   main: "スペシャル増加量アップ",   sub: "攻撃力アップ",             subrare: "インク効率アップ(メイン)", brand: "バトロイカ"},
  {type: "フク",   name:  "サニーオレンジT",              main: "スペシャル増加量アップ",   sub: "イカダッシュ速度アップ",   subrare: "防御力アップ",             brand: "クラーゲス"},
  {type: "フク",   name:  "レタード オレンジ",            main: "スペシャル増加量アップ",   sub: "インク効率アップ(メイン)", subrare: "ヒト移動速度アップ",       brand: "ジモン"},
  {type: "フク",   name:  "ウラスカジャン",               main: "スペシャル増加量アップ",   sub: "スペシャル減少量ダウン",   subrare: "スペシャル増加量アップ",   brand: "エゾッコ"},
  {type: "フク",   name:  "サムライジャケット",           main: "スペシャル増加量アップ",   sub: "-",                        subrare: "-",                        brand: "amiibo"},
  {type: "フク",   name:  "アーマージャケット レプリカ",  main: "スペシャル増加量アップ",   sub: "-",                        subrare: "-",                        brand: "アタリメイド"},
  {type: "フク",   name:  "ミスターベースボール",         main: "スペシャル増加量アップ",   sub: "インク効率アップ(サブ)",   subrare: "インク回復力アップ",       brand: "ホッコリー"},
  {type: "フク",   name:  "アイロニックロング",           main: "スペシャル時間延長",       sub: "スーパージャンプ時間短縮", subrare: "復活時間短縮",             brand: "アイロニック"},
  {type: "フク",   name:  "イカゴッチンベスト",           main: "スペシャル時間延長",       sub: "イカダッシュ速度アップ",   subrare: "防御力アップ",             brand: "クラーゲス"},
  {type: "フク",   name:  "イカブラック",                 main: "スペシャル時間延長",       sub: "攻撃力アップ",             subrare: "インク効率アップ(メイン)", brand: "バトロイカ"},
  {type: "フク",   name:  "パイレーツボーダー",           main: "スペシャル時間延長",       sub: "インク効率アップ(メイン)", subrare: "ヒト移動速度アップ",       brand: "ジモン"},
  {type: "フク",   name:  "リールロールスウェット",       main: "スペシャル時間延長",       sub: "スペシャル減少量ダウン",   subrare: "スペシャル増加量アップ",   brand: "エゾッコ"},
  {type: "フク",   name:  "ジップアップ グリーン",        main: "スペシャル時間延長",       sub: "インク効率アップ(サブ)",   subrare: "インク回復力アップ",       brand: "ホッコリー"},
  {type: "フク",   name:  "マウンテンベリー",             main: "スペシャル時間延長",       sub: "防御力アップ",             subrare: "攻撃力アップ",             brand: "シグレニ"},
  {type: "フク",   name:  "イカライダーWHITE",            main: "スペシャル時間延長",       sub: "ヒト移動速度アップ",       subrare: "イカダッシュ速度アップ",   brand: "ロッケンベルグ"},
  {type: "フク",   name:  "トリコロールラガー",           main: "復活時間短縮",             sub: "スペシャル増加量アップ",   subrare: "スペシャル時間延長",       brand: "ヤコ"},
  {type: "フク",   name:  "わかばイカT",                  main: "復活時間短縮",             sub: "攻撃力アップ",             subrare: "インク効率アップ(メイン)", brand: "バトロイカ"},
  {type: "フク",   name:  "タイショウのまえかけ",         main: "復活時間短縮",             sub: "-",                        subrare: "-",                        brand: "ファミ通"},
  {type: "フク",   name:  "パワードスーツ",               main: "復活時間短縮",             sub: "-",                        subrare: "-",                        brand: "amiibo"},
  {type: "フク",   name:  "ボーダーホワイト",             main: "復活時間短縮",             sub: "インク効率アップ(メイン)", subrare: "ヒト移動速度アップ",       brand: "ジモン"},
  {type: "フク",   name:  "FCジャージー",                 main: "復活時間短縮",             sub: "スーパージャンプ時間短縮", subrare: "復活時間短縮",             brand: "アイロニック"},
  {type: "フク",   name:  "イカスカジャン",               main: "復活時間短縮",             sub: "スペシャル減少量ダウン",   subrare: "スペシャル増加量アップ",   brand: "エゾッコ"},
  {type: "フク",   name:  "ジップアップ カモ",            main: "復活時間短縮",             sub: "インク効率アップ(サブ)",   subrare: "インク回復力アップ",       brand: "ホッコリー"},
  {type: "フク",   name:  "ドカンT ブラック",             main: "スペシャル減少量ダウン",   sub: "-",                        subrare: "-",                        brand: "KOG"},
  {type: "フク",   name:  "レイヤード ホワイト",          main: "スペシャル減少量ダウン",   sub: "攻撃力アップ",             subrare: "インク効率アップ(メイン)", brand: "バトロイカ"},
  {type: "フク",   name:  "グリーンＴ",                   main: "スペシャル減少量ダウン",   sub: "スペシャル時間延長",       subrare: "インク効率アップ(サブ)",   brand: "フォーリマ"},
  {type: "フク",   name:  "バスケジャージ ホーム",        main: "スペシャル減少量ダウン",   sub: "スーパージャンプ時間短縮", subrare: "復活時間短縮",             brand: "アイロニック"},
  {type: "フク",   name:  "ベクトルラインガサネ",         main: "スペシャル減少量ダウン",   sub: "スペシャル増加量アップ",   subrare: "スペシャル時間延長",       brand: "ヤコ"},
  {type: "フク",   name:  "イカジャマイカ",               main: "スペシャル減少量ダウン",   sub: "復活時間短縮",             subrare: "スペシャル減少量ダウン",   brand: "ホタックス"},
  {type: "フク",   name:  "タイシャツ",                   main: "スペシャル減少量ダウン",   sub: "インク効率アップ(メイン)", subrare: "ヒト移動速度アップ",       brand: "ジモン"},
  {type: "フク",   name:  "フェスＴ",                     main: "スペシャル減少量ダウン",   sub: "攻撃力アップ",             subrare: "インク効率アップ(メイン)", brand: "バトロイカ"},
  {type: "フク",   name:  "イカスタンシャツ",             main: "スーパージャンプ時間短縮", sub: "イカダッシュ速度アップ",   subrare: "防御力アップ",             brand: "クラーゲス"},
  {type: "フク",   name:  "ハラシロラグラン",             main: "スーパージャンプ時間短縮", sub: "ヒト移動速度アップ",       subrare: "イカダッシュ速度アップ",   brand: "ロッケンベルグ"},
  {type: "フク",   name:  "ベクトルパターン グレー",      main: "スーパージャンプ時間短縮", sub: "スペシャル増加量アップ",   subrare: "スペシャル時間延長",       brand: "ヤコ"},
  {type: "フク",   name:  "マスタードガサネ",             main: "スーパージャンプ時間短縮", sub: "攻撃力アップ",             subrare: "インク効率アップ(メイン)", brand: "バトロイカ"},
  {type: "フク",   name:  "ヤマビコボーダー",             main: "スーパージャンプ時間短縮", sub: "防御力アップ",             subrare: "攻撃力アップ",             brand: "シグレニ"},
  {type: "フク",   name:  "バニーポップ ブラック",        main: "スーパージャンプ時間短縮", sub: "スペシャル減少量ダウン",   subrare: "スペシャル増加量アップ",   brand: "エゾッコ"},
  {type: "フク",   name:  "ブロックストライプシャツ",     main: "スーパージャンプ時間短縮", sub: "インク効率アップ(メイン)", subrare: "ヒト移動速度アップ",       brand: "ジモン"},
  {type: "フク",   name:  "ミックスシャツグレー",         main: "スーパージャンプ時間短縮", sub: "スペシャル減少量ダウン",   subrare: "スペシャル増加量アップ",   brand: "エゾッコ"},
  {type: "フク",   name:  "イカバッテン マスタード",      main: "ボム飛距離アップ",         sub: "攻撃力アップ",             subrare: "インク効率アップ(メイン)", brand: "バトロイカ"},
  {type: "フク",   name:  "カモフラパープル",             main: "ボム飛距離アップ",         sub: "スペシャル増加量アップ",   subrare: "スペシャル時間延長",       brand: "ヤコ"},
  {type: "フク",   name:  "シャンブレーシャツ",           main: "ボム飛距離アップ",         sub: "インク効率アップ(メイン)", subrare: "ヒト移動速度アップ",       brand: "ジモン"},
  {type: "フク",   name:  "ギンガムチェック ミドリ",      main: "ボム飛距離アップ",         sub: "スペシャル減少量ダウン",   subrare: "スペシャル増加量アップ",   brand: "エゾッコ"},
  {type: "フク",   name:  "ホッコリー ネイビー",          main: "ボム飛距離アップ",         sub: "インク効率アップ(サブ)",   subrare: "インク回復力アップ",       brand: "ホッコリー"},
  {type: "フク",   name:  "イカセーラー ブルー",          main: "ボム飛距離アップ",         sub: "スペシャル時間延長",       subrare: "インク効率アップ(サブ)",   brand: "フォーリマ"},
  {type: "フク",   name:  "イカライダーBLACK",            main: "ボム飛距離アップ",         sub: "ヒト移動速度アップ",       subrare: "イカダッシュ速度アップ",   brand: "ロッケンベルグ"},
  {type: "フク",   name:  "イカノボリベスト",             main: "マーキングガード",         sub: "イカダッシュ速度アップ",   subrare: "防御力アップ",             brand: "クラーゲス"},
  {type: "フク",   name:  "イカノメT ライトブルー",       main: "マーキングガード",         sub: "インク回復力アップ",       subrare: "スーパージャンプ時間短縮", brand: "アロメ"},
  {type: "フク",   name:  "よもぎポロ",                   main: "マーキングガード",         sub: "インク効率アップ(メイン)", subrare: "ヒト移動速度アップ",       brand: "ジモン"},
  {type: "フク",   name:  "イカリスウェット",             main: "マーキングガード",         sub: "攻撃力アップ",             subrare: "インク効率アップ(メイン)", brand: "バトロイカ"},
  {type: "フク",   name:  "テッカサイクルシャツ",         main: "マーキングガード",         sub: "スーパージャンプ時間短縮", subrare: "復活時間短縮",             brand: "アイロニック"},
  {type: "フク",   name:  "アーバンベスト ナイト",        main: "マーキングガード",         sub: "インク効率アップ(サブ)",   subrare: "インク回復力アップ",       brand: "ホッコリー"},
  {type: "フク",   name:  "さくらエビポロ",               main: "イカニンジャ",             sub: "インク効率アップ(メイン)", subrare: "ヒト移動速度アップ",       brand: "ジモン"},
  {type: "フク",   name:  "ソウショクT",                  main: "イカニンジャ",             sub: "インク効率アップ(サブ)",   subrare: "インク回復力アップ",       brand: "ホッコリー"},
  {type: "フク",   name:  "ボーダーモスグリーン",         main: "イカニンジャ",             sub: "防御力アップ",             subrare: "攻撃力アップ",             brand: "シグレニ"},
  {type: "フク",   name:  "エゾッコパーカー アズキ",      main: "イカニンジャ",             sub: "スペシャル減少量ダウン",   subrare: "スペシャル増加量アップ",   brand: "エゾッコ"},
  {type: "フク",   name:  "スクールジャージー",           main: "イカニンジャ",             sub: "スーパージャンプ時間短縮", subrare: "復活時間短縮",             brand: "アイロニック"},
  {type: "フク",   name:  "ガチホワイト",                 main: "イカニンジャ",             sub: "攻撃力アップ",             subrare: "インク効率アップ(メイン)", brand: "バトロイカ"},
  {type: "フク",   name:  "イカバッテンロング",           main: "うらみ",                   sub: "攻撃力アップ",             subrare: "インク効率アップ(メイン)", brand: "バトロイカ"},
  {type: "フク",   name:  "ヤマビコT アイボリー",         main: "うらみ",                   sub: "防御力アップ",             subrare: "攻撃力アップ",             brand: "シグレニ"},
  {type: "フク",   name:  "F-010",                        main: "うらみ",                   sub: "スペシャル時間延長",       subrare: "インク効率アップ(サブ)",   brand: "フォーリマ"},
  {type: "フク",   name:  "アーバンベスト イエロー",      main: "うらみ",                   sub: "インク効率アップ(サブ)",   subrare: "インク回復力アップ",       brand: "ホッコリー"},
  {type: "フク",   name:  "ヴィンテージチェック",         main: "うらみ",                   sub: "ヒト移動速度アップ",       subrare: "イカダッシュ速度アップ",   brand: "ロッケンベルグ"},
  {type: "フク",   name:  "タコT",                        main: "うらみ",                   sub: "アタリメイド",             subrare: "-",                        brand: "-"},
  {type: "フク",   name:  "カレッジラグラン",             main: "スタートレーダー",         sub: "インク効率アップ(メイン)", subrare: "ヒト移動速度アップ",       brand: "ジモン"},
  {type: "フク",   name:  "ピンポンポロ",                 main: "スタートレーダー",         sub: "スペシャル減少量ダウン",   subrare: "スペシャル増加量アップ",   brand: "エゾッコ"},
  {type: "フク",   name:  "ヤキフグ8bit ホワイト",        main: "スタートレーダー",         sub: "インク効率アップ(サブ)",   subrare: "インク回復力アップ",       brand: "ホッコリー"},
  {type: "フク",   name:  "ガチブラック",                 main: "スタートレーダー",         sub: "攻撃力アップ",             subrare: "インク効率アップ(メイン)", brand: "バトロイカ"},
  {type: "フク",   name:  "レタード グリーン",            main: "スタートレーダー",         sub: "インク効率アップ(メイン)", subrare: "ヒト移動速度アップ",       brand: "ジモン"},
  {type: "フク",   name:  "マウンテンオリーブ",           main: "スタートレーダー",         sub: "防御力アップ",             subrare: "攻撃力アップ",             brand: "シグレニ"},
  {type: "クツ",   name:  "シアンビーンズ",               main: "攻撃力アップ",             sub: "インク回復力アップ",       subrare: "スーパージャンプ時間短縮", brand: "アロメ"},
  {type: "クツ",   name:  "レイニーシャボン",             main: "攻撃力アップ",             sub: "防御力アップ",             subrare: "攻撃力アップ",             brand: "シグレニ"},
  {type: "クツ",   name:  "アケビコンフォート",           main: "攻撃力アップ",             sub: "イカダッシュ速度アップ",   subrare: "防御力アップ",             brand: "クラーゲス"},
  {type: "クツ",   name:  "イカヤキチップ",               main: "防御力アップ",             sub: "ヒト移動速度アップ",       subrare: "イカダッシュ速度アップ",   brand: "ロッケンベルグ"},
  {type: "クツ",   name:  "グリッチョ ブルー",            main: "防御力アップ",             sub: "スペシャル減少量ダウン",   subrare: "スペシャル増加量アップ",   brand: "エゾッコ"},
  {type: "クツ",   name:  "スリッポン チドリ",            main: "防御力アップ",             sub: "イカダッシュ速度アップ",   subrare: "防御力アップ",             brand: "クラーゲス"},
  {type: "クツ",   name:  "オレンジアローズ",             main: "インク効率アップ(メイン)", sub: "スペシャル増加量アップ",   subrare: "スペシャル時間延長",       brand: "ヤコ"},
  {type: "クツ",   name:  "シーホースHi レッド",          main: "インク効率アップ(メイン)", sub: "スーパージャンプ時間短縮", subrare: "復活時間短縮",             brand: "アイロニック"},
  {type: "クツ",   name:  "パワードレッグス",             main: "インク効率アップ(メイン)", sub: "-",                        subrare: "-",                        brand: "amiibo"},
  {type: "クツ",   name:  "アーマーブーツ レプリカ",      main: "インク効率アップ(メイン)", sub: "-",                        subrare: "-",                        brand: "アタリメイド"},
  {type: "クツ",   name:  "ブルーベリーコンフォート",     main: "インク効率アップ(サブ)",   sub: "イカダッシュ速度アップ",   subrare: "防御力アップ",             brand: "クラーゲス"},
  {type: "クツ",   name:  "スクールローファー",           main: "インク効率アップ(サブ)",   sub: "-",                        subrare: "-",                        brand: "amiibo"},
  {type: "クツ",   name:  "グリッチョ グリーン 限定版",   main: "インク効率アップ(サブ)",   sub: "スペシャル減少量ダウン",   subrare: "スペシャル増加量アップ",   brand: "エゾッコ"},
  {type: "クツ",   name:  "ベリベリホワイト",             main: "インク効率アップ(サブ)",   sub: "インク効率アップ(メイン)", subrare: "ヒト移動速度アップ",       brand: "ジモン"},
  {type: "クツ",   name:  "キャンバスHi モロヘイヤ",      main: "インク回復力アップ",       sub: "イカダッシュ速度アップ",   subrare: "防御力アップ",             brand: "クラーゲス"},
  {type: "クツ",   name:  "シーホース ホワイト",          main: "インク回復力アップ",       sub: "スーパージャンプ時間短縮", subrare: "復活時間短縮",             brand: "アイロニック"},
  {type: "クツ",   name:  "ジョーズモカシン",             main: "インク回復力アップ",       sub: "インク効率アップ(メイン)", subrare: "ヒト移動速度アップ",       brand: "ジモン"},
  {type: "クツ",   name:  "トレッキングライト",           main: "インク回復力アップ",       sub: "防御力アップ",             subrare: "攻撃力アップ",             brand: "シグレニ"},
  {type: "クツ",   name:  "ウミウシパープル",             main: "ヒト移動速度アップ",       sub: "インク回復力アップ",       subrare: "スーパージャンプ時間短縮", brand: "アロメ"},
  {type: "クツ",   name:  "オイスタークロッグ",           main: "ヒト移動速度アップ",       sub: "イカダッシュ速度アップ",   subrare: "防御力アップ",             brand: "クラーゲス"},
  {type: "クツ",   name:  "レイニーアセロラ",             main: "ヒト移動速度アップ",       sub: "防御力アップ",             subrare: "攻撃力アップ",             brand: "シグレニ"},
  {type: "クツ",   name:  "シーホースHi ゴールド",        main: "ヒト移動速度アップ",       sub: "スーパージャンプ時間短縮", subrare: "復活時間短縮",             brand: "アイロニック"},
  {type: "クツ",   name:  "タイショウのげた",             main: "ヒト移動速度アップ",       sub: "-",                        subrare: "-",                        brand: "ファミ通"},
  {type: "クツ",   name:  "グリッチョ オレンジ",          main: "イカダッシュ速度アップ",   sub: "スペシャル減少量ダウン",   subrare: "スペシャル増加量アップ",   brand: "エゾッコ"},
  {type: "クツ",   name:  "ラバーソール ホワイト",        main: "イカダッシュ速度アップ",   sub: "ヒト移動速度アップ",       subrare: "イカダッシュ速度アップ",   brand: "ロッケンベルグ"},
  {type: "クツ",   name:  "イカ娘シューズ",               main: "イカダッシュ速度アップ",   sub: "-",                        subrare: "-",                        brand: "侵略！イカ娘"},
  {type: "クツ",   name:  "シーホース ブラックレザー",    main: "イカダッシュ速度アップ",   sub: "スーパージャンプ時間短縮", subrare: "復活時間短縮",             brand: "アイロニック"},
  {type: "クツ",   name:  "ウミウシブルー",               main: "スペシャル増加量アップ",   sub: "インク回復力アップ",       subrare: "スーパージャンプ時間短縮", brand: "アロメ"},
  {type: "クツ",   name:  "キャンバス クマノミ",          main: "スペシャル増加量アップ",   sub: "イカダッシュ速度アップ",   subrare: "防御力アップ",             brand: "クラーゲス"},
  {type: "クツ",   name:  "シーホースHi ゾンビ",          main: "スペシャル増加量アップ",   sub: "スーパージャンプ時間短縮", subrare: "復活時間短縮",             brand: "アイロニック"},
  {type: "クツ",   name:  "ラバーソール ターコイズ",      main: "スペシャル増加量アップ",   sub: "ヒト移動速度アップ",       subrare: "イカダッシュ速度アップ",   brand: "ロッケンベルグ"},
  {type: "クツ",   name:  "ロッキンホワイト",             main: "スペシャル増加量アップ",   sub: "ヒト移動速度アップ",       subrare: "イカダッシュ速度アップ",   brand: "ロッケンベルグ"},
  {type: "クツ",   name:  "シーホースHi パープル",        main: "スペシャル時間延長",       sub: "スーパージャンプ時間短縮", subrare: "復活時間短縮",             brand: "アイロニック"},
  {type: "クツ",   name:  "サムライシューズ",             main: "スペシャル時間延長",       sub: "-",                        subrare: "-",                        brand: "amiibo"},
  {type: "クツ",   name:  "トレッキングカスタム",         main: "スペシャル時間延長",       sub: "防御力アップ",             subrare: "攻撃力アップ",             brand: "シグレニ"},
  {type: "クツ",   name:  "ホワイトアローズ",             main: "スペシャル時間延長",       sub: "スペシャル増加量アップ",   subrare: "スペシャル時間延長",       brand: "ヤコ"},
  {type: "クツ",   name:  "イカスミチップ",               main: "復活時間短縮",             sub: "ヒト移動速度アップ",       subrare: "イカダッシュ速度アップ",   brand: "ロッケンベルグ"},
  {type: "クツ",   name:  "ブラックビーンズ",             main: "復活時間短縮",             sub: "インク回復力アップ",       subrare: "スーパージャンプ時間短縮", brand: "アロメ"},
  {type: "クツ",   name:  "チョコクロッグ",               main: "復活時間短縮",             sub: "イカダッシュ速度アップ",   subrare: "防御力アップ",             brand: "クラーゲス"},
  {type: "クツ",   name:  "モトクロスブーツ",             main: "復活時間短縮",             sub: "ヒト移動速度アップ",       subrare: "イカダッシュ速度アップ",   brand: "ロッケンベルグ"},
  {type: "クツ",   name:  "キャンバス ホワイト",          main: "スペシャル減少量ダウン",   sub: "イカダッシュ速度アップ",   subrare: "防御力アップ",             brand: "クラーゲス"},
  {type: "クツ",   name:  "タコゾネスブーツ",             main: "スペシャル減少量ダウン",   sub: "-",                        subrare: "-",                        brand: "アタリメイド"},
  {type: "クツ",   name:  "ロッキンイエロー",             main: "スペシャル減少量ダウン",   sub: "ヒト移動速度アップ",       subrare: "イカダッシュ速度アップ",   brand: "ロッケンベルグ"},
  {type: "クツ",   name:  "ウミウシレッド",               main: "スペシャル減少量ダウン",   sub: "インク回復力アップ",       subrare: "スーパージャンプ時間短縮", brand: "アロメ"},
  {type: "クツ",   name:  "スリッポン レッド",            main: "スーパージャンプ時間短縮", sub: "イカダッシュ速度アップ",   subrare: "防御力アップ",             brand: "クラーゲス"},
  {type: "クツ",   name:  "ヒーローキックス レプリカ",    main: "スーパージャンプ時間短縮", sub: "-",                        subrare: "-",                        brand: "アタリメイド"},
  {type: "クツ",   name:  "ヌバックブーツ レッド",        main: "スーパージャンプ時間短縮", sub: "ヒト移動速度アップ",       subrare: "イカダッシュ速度アップ",   brand: "ロッケンベルグ"},
  {type: "クツ",   name:  "ミルキーダウンブーツ",         main: "スーパージャンプ時間短縮", sub: "インク回復力アップ",       subrare: "スーパージャンプ時間短縮", brand: "アロメ"},
  {type: "クツ",   name:  "シャークモカシン",             main: "ボム飛距離アップ",         sub: "インク効率アップ(メイン)", subrare: "ヒト移動速度アップ",       brand: "ジモン"},
  {type: "クツ",   name:  "スリッポン ブルー",            main: "ボム飛距離アップ",         sub: "イカダッシュ速度アップ",   subrare: "防御力アップ",             brand: "クラーゲス"},
  {type: "クツ",   name:  "ピンクビーンズ",               main: "ボム飛距離アップ",         sub: "インク回復力アップ",       subrare: "スーパージャンプ時間短縮", brand: "アロメ"},
  {type: "クツ",   name:  "ヌバックブーツ イエロー",      main: "ボム飛距離アップ",         sub: "ヒト移動速度アップ",       subrare: "イカダッシュ速度アップ",   brand: "ロッケンベルグ"},
  {type: "クツ",   name:  "キャンバス バナナ",            main: "ボムサーチ",               sub: "イカダッシュ速度アップ",   subrare: "防御力アップ",             brand: "クラーゲス"},
  {type: "クツ",   name:  "シーホース イエロー",          main: "ボムサーチ",               sub: "スーパージャンプ時間短縮", subrare: "復活時間短縮",             brand: "アイロニック"},
  {type: "クツ",   name:  "トレッキングプロ",             main: "ボムサーチ",               sub: "防御力アップ",             subrare: "攻撃力アップ",             brand: "シグレニ"},
  {type: "クツ",   name:  "ユデスパイカ",                 main: "ボムサーチ",               sub: "スペシャル増加量アップ",   subrare: "スペシャル時間延長",       brand: "ヤコ"},
  {type: "クツ",   name:  "ロッキンチェリー",             main: "ボムサーチ",               sub: "ヒト移動速度アップ",       subrare: "イカダッシュ速度アップ",   brand: "ロッケンベルグ"},
  {type: "クツ",   name:  "ウミウシイエロー",             main: "安全シューズ",             sub: "インク回復力アップ",       subrare: "スーパージャンプ時間短縮", brand: "アロメ"},
  {type: "クツ",   name:  "ベリベリレッド",               main: "安全シューズ",             sub: "インク効率アップ(メイン)", subrare: "ヒト移動速度アップ",       brand: "ジモン"},
  {type: "クツ",   name:  "キャンバスHi トマト",          main: "安全シューズ",             sub: "イカダッシュ速度アップ",   subrare: "防御力アップ",             brand: "クラーゲス"},
  {type: "クツ",   name:  "レアスパイカ",                 main: "安全シューズ",             sub: "スペシャル増加量アップ",   subrare: "スペシャル時間延長",       brand: "ヤコ"},
  {type: "クツ",   name:  "モトクロス ソリッドブルー",    main: "安全シューズ",             sub: "ヒト移動速度アップ",       subrare: "イカダッシュ速度アップ",   brand: "ロッケンベルグ"},
  {type: "クツ",   name:  "キャンバスHi マッシュルーム",  main: "ステルスジャンプ",         sub: "イカダッシュ速度アップ",   subrare: "防御力アップ",             brand: "クラーゲス"},
  {type: "クツ",   name:  "ラバーソール チェリー",        main: "ステルスジャンプ",         sub: "ヒト移動速度アップ",       subrare: "イカダッシュ速度アップ",   brand: "ロッケンベルグ"},
  {type: "クツ",   name:  "レイニーモスグリーン",         main: "ステルスジャンプ",         sub: "防御力アップ",             subrare: "攻撃力アップ",             brand: "シグレニ"},
  {type: "クツ",   name:  "アイスダウンブーツ",           main: "ステルスジャンプ",         sub: "インク回復力アップ",       subrare: "スーパージャンプ時間短縮", brand: "アロメ"},
  {type: "クツ",   name:  "クレイジーアローズ",           main: "ステルスジャンプ",         sub: "スペシャル増加量アップ",   subrare: "スペシャル時間延長",       brand: "ヤコ"}
];  // }}}

var anyGear = {type: "-", name: "(なんでも)", main: "-", sub: "-", subrare: "-", brand: "-"};

var GearPowerSetSelector = React.createClass({
  onChange: function (value, index) {
    var newGearPowers = this.props.gearPowers.slice();
    newGearPowers[index] = value;
    this.props.onChange(
      newGearPowers.filter(function (gearPower) {
        return gearPower !== "-";
      })
    );
  },

  nodeFromGearPower: function (gearPower, i) {
    return (
      <GearPowerSelector
        key={i}
        index={i}
        onChange={this.onChange}
        gearPower={gearPower}
        restrictedGearPowers={this.calculateRestrictedGearPowers()}
      />
    );
  },

  calculateRestrictedGearPowers: function () {
    var t = {};
    for (var i = 0; i < this.props.gearPowers.length; i++) {
      t[this.props.gearPowers[i]] = (t[this.props.gearPowers[i]] || 0) + 1;
    }

    var restrictedGearPowers = [];
    for (var gearPower in t) {
      if (3 <= t[gearPower]) {
        restrictedGearPowers.push(gearPower);
      }
    }

    return restrictedGearPowers;
  },

  render: function () {
    return (
      <div className="gearPowerSetSelector">
        <div className="label">
          欲しいギアパワー:
        </div>
        <div className="forms">
          {this.props.gearPowers.map(this.nodeFromGearPower)}
          {this.props.gearPowers.length < 6 &&
            this.nodeFromGearPower("-", this.props.gearPowers.length)}
        </div>
      </div>
    );
  }
});

var GearPowerSelector = React.createClass({
  onChange: function (e) {
    this.props.onChange(e.target.value, this.props.index);
  },

  deselect: function (e) {
    this.props.onChange('-', this.props.index);
  },

  nodeFromGearPower: function (gearPower) {
    return (
      <option
        key={gearPower}
        value={gearPower}
        disabled={this.props.restrictedGearPowers.indexOf(gearPower) !== -1}
      >{gearPower}</option>
    );
  },

  render: function () {
    return (
      <div className={
        [
          'gearPowerSelector',
          'matched-' + (this.props.index + 1)
        ].join(' ')
      }>
        <select onChange={this.onChange} value={this.props.gearPower}>
          {
            [
              '-',
              '攻撃力アップ',
              '防御力アップ',
              'インク効率アップ(メイン)',
              'インク効率アップ(サブ)',
              'インク回復力アップ',
              'ヒト移動速度アップ',
              'イカダッシュ速度アップ',
              'スペシャル増加量アップ',
              'スペシャル時間延長',
              '復活時間短縮',
              'スペシャル減少量ダウン',
              'スーパージャンプ時間短縮',
              'ボム飛距離アップ',
              'ラストスパート',
              'スタートダッシュ',
              '逆境強化',
              'カムバック',
              'マーキングガード',
              'イカニンジャ',
              'うらみ',
              'スタートレーダー',
              'ボムサーチ',
              '安全シューズ',
              'ステルスジャンプ',
            ].map(this.nodeFromGearPower)
          }
        </select>
        {
          this.props.gearPower !== '-' &&
          <button className="deselect" onClick={this.deselect}>×</button>
        }
     </div>
   );
  }
});

var GearSetList = React.createClass({
  nodeFromGearSet: function (gearSet) {
    var remainingGearPowers = this.props.gearPowers.slice();
    var currentGearPowers = [
      gearSet.headgear.main,
      gearSet.headgear.sub,
      gearSet.clothing.main,
      gearSet.clothing.sub,
      gearSet.shoes.main,
      gearSet.shoes.sub
    ];
    var matchings = [];
    for (var i = 0; i < currentGearPowers.length; i++) {
      var j = remainingGearPowers.indexOf(currentGearPowers[i]);
      if (0 <= j)
        remainingGearPowers[j] = null;
      matchings.push(j + 1);
    }
    return (
      <tr key={gearSet.headgear.name + ':' + gearSet.clothing.name + ':' + gearSet.shoes.name}>
        <td>{gearSet.headgear.name}</td>
        <td className={'matched-' + matchings[0]}>{gearSet.headgear.main}</td>
        <td className={'matched-' + matchings[1]}>{gearSet.headgear.sub}</td>
        <td>{gearSet.clothing.name}</td>
        <td className={'matched-' + matchings[2]}>{gearSet.clothing.main}</td>
        <td className={'matched-' + matchings[3]}>{gearSet.clothing.sub}</td>
        <td>{gearSet.shoes.name}</td>
        <td className={'matched-' + matchings[4]}>{gearSet.shoes.main}</td>
        <td className={'matched-' + matchings[5]}>{gearSet.shoes.sub}</td>
      </tr>
    );
  },

  render: function () {
    var firstlyShownRowCount = 100;
    var gearSets =
      this.props.showAllGearSets ?
      this.props.gearSets :
      this.props.gearSets.slice(0, firstlyShownRowCount);
    return (
      <table className="gearSetList">
        <thead>
          <tr>
            <th colSpan="3">アタマ</th>
            <th colSpan="3">フク</th>
            <th colSpan="3">クツ</th>
          </tr>
          <tr>
            <th>名前</th>
            <th>メイン</th>
            <th>サブ</th>
            <th>名前</th>
            <th>メイン</th>
            <th>サブ</th>
            <th>名前</th>
            <th>メイン</th>
            <th>サブ</th>
          </tr>
        </thead>
        <tbody>
          {gearSets.map(this.nodeFromGearSet)}
          {
            // It is heavy to show too many rows at once.
            1 <= gearSets.length &&
            firstlyShownRowCount < this.props.gearSets.length &&
            !this.props.showAllGearSets &&
            <tr>
              <td colSpan="9">
                <label className="showAllGearSets">
                  <input type="checkbox" onChange={this.props.onCheckedShowAllGearSets}/>
                  全てのギアの組み合わせを表示する
                </label>
              </td>
            </tr>
          }
        </tbody>
      </table>
    );
  }
});

var App = React.createClass({
  getInitialState: function () {
    var gearPowers = this.gearPowersFromId(location.hash.substring(1));
    return {
      gearPowers: gearPowers,
      gearSets: this.findGearSetsFor(gearPowers),
    };
  },

  makeCountMap: function (xs) {
    var countMap = {};
    for (var i = 0; i < xs.length; i++) {
      var x = xs[i];
      countMap[x] = (countMap[x] || 0) + 1;
    }
    return countMap;
  },

  calculateRequiredGearPowerData: function (gearPowers) {
    var countMap = this.makeCountMap(gearPowers);
    var names = [];
    for (var gearPower in countMap) {
      names.push(gearPower);
    }
    return {
      countMap: countMap,
      names: names
    };
  },

  calculateRequiredKey: function (required, gearPowers) {
    var countMap = this.makeCountMap(gearPowers);
    var bits = 0;
    for (var i = 0; i < required.names.length; i++) {
      bits |= ((1 << (countMap[required.names[i]] || 0)) - 1) << (3 * i);
    }
    return bits;
  },

  findGearSetsFor: function (gearPowers) {
    if (gearPowers.length < 1)
      return [];

    var required = this.calculateRequiredGearPowerData(gearPowers);
    var calculateRequiredKey = this.calculateRequiredKey;
    var requiredKey = calculateRequiredKey(required, gearPowers);
    var candidateGears =
      theGears.filter(function (gear) {
        return required.countMap[gear.main] || required.countMap[gear.sub];
      });
    var candidateHeadgears =
      candidateGears.filter(function (gear) {
        return gear.type === 'アタマ';
      }).concat([anyGear]);
    var candidateClothings =
      candidateGears.filter(function (gear) {
        return gear.type === 'フク';
      }).concat([anyGear]);
    var candidateShoes =
      candidateGears.filter(function (gear) {
        return gear.type === 'クツ';
      }).concat([anyGear]);

    var gearSets = [];
    candidateHeadgears.forEach(function (headgear) {
      candidateClothings.forEach(function (clothing) {
        candidateShoes.forEach(function (shoes) {
          var gearPowers = [
            headgear.main,
            headgear.sub,
            clothing.main,
            clothing.sub,
            shoes.main,
            shoes.sub
          ];
          var key = calculateRequiredKey(required, gearPowers);
          if ((key & requiredKey) === requiredKey){
            gearSets.push({
              headgear: headgear,
              clothing: clothing,
              shoes: shoes
            });
          }
        });
      });
    });
    return this.sortGearSets(this.deleteVerboseGearSets(gearSets), required);
  },

  deleteVerboseGearSets: function (gearSets) {
    var genericGearSets = gearSets.filter(function (gearSet) {
      return gearSet.headgear === anyGear ||
             gearSet.clothing === anyGear ||
             gearSet.shoes === anyGear;
    });
    if (genericGearSets.length === 0)
      return gearSets;

    // TODO: Delete less generic gear sets if more generic gear set exists.
    return gearSets.filter(function (gearSet) {
      return !genericGearSets.some(function (g) {
        return gearSet !== g &&
               (g.headgear === anyGear || g.headgear === gearSet.headgear) &&
               (g.clothing === anyGear || g.clothing === gearSet.clothing) &&
               (g.shoes === anyGear || g.shoes === gearSet.shoes);
      });
    });
  },

  sortGearSets: function (gearSets, required) {
    var orderFromGearPower = {
      '攻撃力アップ': '01',
      '防御力アップ': '02',
      'インク効率アップ(メイン)': '03',
      'インク効率アップ(サブ)': '04',
      'インク回復力アップ': '05',
      'ヒト移動速度アップ': '06',
      'イカダッシュ速度アップ': '07',
      'スペシャル増加量アップ': '08',
      'スペシャル時間延長': '09',
      '復活時間短縮': '10',
      'スペシャル減少量ダウン': '11',
      'スーパージャンプ時間短縮': '12',
      'ボム飛距離アップ': '13',
      'ラストスパート': '14',
      'スタートダッシュ': '15',
      '逆境強化': '16',
      'カムバック': '17',
      'マーキングガード': '18',
      'イカニンジャ': '19',
      'うらみ': '20',
      'スタートレーダー': '21',
      'ボムサーチ': '22',
      '安全シューズ': '23',
      'ステルスジャンプ': '24',
      '-': '99'
    };
    var mapped = gearSets.map(function (gearSet, i) {
      var countMap = JSON.parse(JSON.stringify(required.countMap));
      return {
        index: i,
        value: [
          gearSet.shoes === anyGear ? 1 : 2,
          gearSet.clothing === anyGear ? 1 : 2,
          gearSet.headgear === anyGear ? 1 : 2,

          countMap[gearSet.headgear.main]-- > 0 ? 1 : 2,
          countMap[gearSet.headgear.sub]-- > 0 ? 1 : 2,
          orderFromGearPower[gearSet.headgear.main],
          orderFromGearPower[gearSet.headgear.sub],
          gearSet.headgear.name,

          countMap[gearSet.clothing.main]-- > 0 ? 1 : 2,
          countMap[gearSet.clothing.sub]-- > 0 ? 1 : 2,
          orderFromGearPower[gearSet.clothing.main],
          orderFromGearPower[gearSet.clothing.sub],
          gearSet.clothing.name,

          countMap[gearSet.shoes.main]-- > 0 ? 1 : 2,
          countMap[gearSet.shoes.sub]-- > 0 ? 1 : 2,
          orderFromGearPower[gearSet.shoes.main],
          orderFromGearPower[gearSet.shoes.sub],
          gearSet.shoes.name
        ].join(':')
      };
    });
    mapped.sort(function (a, b) {
      return a.value < b.value ? -1 :
             a.value === b.value ? 0 : 1;
    });
    var sortedGearSets = mapped.map(function (x){
      return gearSets[x.index];
    });
    return sortedGearSets;
  },

  gearPowerList: [
    '攻撃力アップ',
    '防御力アップ',
    'インク効率アップ(メイン)',
    'インク効率アップ(サブ)',
    'インク回復力アップ',
    'ヒト移動速度アップ',
    'イカダッシュ速度アップ',
    'スペシャル増加量アップ',
    'スペシャル時間延長',
    '復活時間短縮',
    'スペシャル減少量ダウン',
    'スーパージャンプ時間短縮',
    'ボム飛距離アップ',
    'ラストスパート',
    'スタートダッシュ',
    '逆境強化',
    'カムバック',
    'マーキングガード',
    'イカニンジャ',
    'うらみ',
    'スタートレーダー',
    'ボムサーチ',
    '安全シューズ',
    'ステルスジャンプ',
  ],

  idFromGearPowers: function (gearPowers) {
    var gpl = this.gearPowerList;
    var a = 'a'.charCodeAt(0);
    return (
      gearPowers
      .map(function (gearPower) {
        return String.fromCharCode(a + gpl.indexOf(gearPower));
      })
      .join('')
    );
  },

  gearPowersFromId: function (id) {
    var gearPowers = [];
    var a = 'a'.charCodeAt(0);
    for (var i = 0; i < id.length; i++) {
      var j = id.charCodeAt(i) - a;
      if (0 <= j && j < this.gearPowerList.length)
        gearPowers.push(this.gearPowerList[j]);
    }
    return gearPowers;
  },

  onChangeGearPowers: function (newGearPowers) {
    this.setState({
      gearPowers: newGearPowers,
      gearSets: this.findGearSetsFor(newGearPowers),
      showAllGearSets: false
    });
    var id = this.idFromGearPowers(newGearPowers);
    history.replaceState(
      null,
      'Splatoon Gear Coordinator',
      id === null ? location.pathname : '#' + id
    );
  },

  onCheckedShowAllGearSets: function () {
    this.setState({
      showAllGearSets: true
    });
  },

  render: function () {
    return (
      <div className="app">
        <GearPowerSetSelector onChange={this.onChangeGearPowers} gearPowers={this.state.gearPowers}/>
        <GearSetList
          gearSets={this.state.gearSets}
          gearPowers={this.state.gearPowers}
          showAllGearSets={this.state.showAllGearSets}
          onCheckedShowAllGearSets={this.onCheckedShowAllGearSets}
        />
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('content')
);

// vim: et sts=2 sw=2 fdm=marker
