var React = require('react');
var ReactDOM = require('react-dom');

var SpecialWeapons = [
  'メガホンレーザー',
  'トルネード',
  'ボムラッシュ',
  'バリア',
  'ダイオウイカ',
  'スーパーセンサー',
  'スーパーショット'
];

var SubWeapons = [
  'スプラッシュボム',
  'キューバンボム',
  'クイックボム',
  'チェイスボム',
  'ポイントセンサー',
  'ポイズンボール',
  'トラップ',
  'ジャンプビーコン',
  'スプリンクラー',
  'スプラッシュシールド'
];

var WeaponSets = [
  {type: 'shooter', main: 'わかばシューター', sub: 'スプラッシュボム', special: 'バリア', penalty: '中'},
  {type: 'shooter', main: 'もみじシューター', sub: 'ポイズンボール', special: 'スーパーセンサー', penalty: '小'},
  {type: 'shooter', main: 'スプラシューター', sub: 'クイックボム', special: 'ボムラッシュ', penalty: '小'},
  {type: 'shooter', main: 'スプラシューターコラボ', sub: 'キューバンボム', special: 'スーパーショット', penalty: '大'},
  {type: 'shooter', main: 'ヒーローシューターレプリカ', sub: 'クイックボム', special: 'ボムラッシュ', penalty: '小'},
  {type: 'shooter', main: 'オクタシューターレプリカ', sub: 'キューバンボム', special: 'スーパーショット', penalty: '大'},
  {type: 'shooter', main: 'スプラシューターワサビ', sub: 'スプラッシュボム', special: 'トルネード', penalty: '中'},
  {type: 'shooter', main: 'プライムシューター', sub: 'スプラッシュボム', special: 'トルネード', penalty: '小'},
  {type: 'shooter', main: 'プライムシューターコラボ', sub: 'ポイントセンサー', special: 'スーパーショット', penalty: '小'},
  {type: 'shooter', main: 'プライムシューターベリー', sub: 'キューバンボム', special: 'ボムラッシュ', penalty: '中'},
  {type: 'shooter', main: 'プロモデラーMG', sub: 'チェイスボム', special: 'スーパーショット', penalty: '小'},
  {type: 'shooter', main: 'プロモデラーRG', sub: 'トラップ', special: 'トルネード', penalty: '小'},
  {type: 'shooter', main: 'プロモデラーPG', sub: 'クイックボム', special: 'ダイオウイカ', penalty: '中'},
  {type: 'shooter', main: 'ジェットスイーパー', sub: 'スプラッシュシールド', special: 'トルネード', penalty: '小'},
  {type: 'shooter', main: 'ジェットスイーパーカスタム', sub: 'クイックボム', special: 'ダイオウイカ', penalty: '小'},
  {type: 'shooter', main: 'デュアルスイーパー', sub: 'スプラッシュボム', special: 'スーパーセンサー', penalty: '小'},
  {type: 'shooter', main: 'デュアルスイーパーカスタム', sub: 'ジャンプビーコン', special: 'メガホンレーザー', penalty: '小'},
  {type: 'shooter', main: 'L3リールガン', sub: 'ポイズンボール', special: 'メガホンレーザー', penalty: '小'},
  {type: 'shooter', main: 'L3リールガンD', sub: 'クイックボム', special: 'ダイオウイカ', penalty: '中'},
  {type: 'shooter', main: 'H3リールガン', sub: 'キューバンボム', special: 'スーパーセンサー', penalty: '小'},
  {type: 'shooter', main: 'H3リールガンD', sub: 'ポイントセンサー', special: 'スーパーショット', penalty: '小'},
  {type: 'shooter', main: 'H3リールガンチェリー', sub: 'スプラッシュシールド', special: 'バリア', penalty: '小'},
  {type: 'shooter', main: 'N-ZAP 85', sub: 'スプラッシュボム', special: 'スーパーセンサー', penalty: '小'},
  {type: 'shooter', main: 'N-ZAP 89', sub: 'スプリンクラー', special: 'トルネード', penalty: '小'},
  {type: 'shooter', main: 'N-ZAP 83', sub: 'ポイントセンサー', special: 'ダイオウイカ', penalty: '中'},
  {type: 'shooter', main: 'シャープマーカー', sub: 'キューバンボム', special: 'ボムラッシュ', penalty: '小'},
  {type: 'shooter', main: 'シャープマーカーネオ', sub: 'クイックボム', special: 'スーパーショット', penalty: '小'},
  {type: 'shooter', main: 'ボールドマーカー', sub: 'ジャンプビーコン', special: 'メガホンレーザー', penalty: '小'},
  {type: 'shooter', main: 'ボールドマーカーネオ', sub: 'ポイントセンサー', special: 'ダイオウイカ', penalty: '小'},
  {type: 'shooter', main: 'ボールドマーカー7', sub: 'スプラッシュボム', special: 'スーパーショット', penalty: '小'},
  {type: 'shooter', main: '.52ガロン', sub: 'スプラッシュシールド', special: 'メガホンレーザー', penalty: '中'},
  {type: 'shooter', main: '.52ガロンデコ', sub: 'チェイスボム', special: 'トルネード', penalty: '小'},
  {type: 'shooter', main: '.96ガロン', sub: 'スプリンクラー', special: 'スーパーセンサー', penalty: '大'},
  {type: 'shooter', main: '.96ガロンデコ', sub: 'スプラッシュシールド', special: 'ダイオウイカ', penalty: '小'},
  {type: 'blaster', main: 'ホットブラスター', sub: 'ポイズンボール', special: 'メガホンレーザー', penalty: '小'},
  {type: 'blaster', main: 'ホットブラスターカスタム', sub: 'ポイントセンサー', special: 'バリア', penalty: '中'},
  {type: 'blaster', main: 'ロングブラスター', sub: 'スプラッシュシールド', special: 'トルネード', penalty: '小'},
  {type: 'blaster', main: 'ロングブラスターカスタム', sub: 'スプラッシュボム', special: 'ダイオウイカ', penalty: '小'},
  {type: 'blaster', main: 'ロングブラスターネクロ', sub: 'クイックボム', special: 'メガホンレーザー', penalty: '小'},
  {type: 'blaster', main: 'ラピッドブラスター', sub: 'トラップ', special: 'バリア', penalty: '小'},
  {type: 'blaster', main: 'ラピッドブラスターデコ', sub: 'キューバンボム', special: 'ボムラッシュ', penalty: '小'},
  {type: 'blaster', main: 'Rブラスターエリート', sub: 'チェイスボム', special: 'スーパーショット', penalty: '小'},
  {type: 'blaster', main: 'Rブラスターエリートデコ', sub: 'ポイズンボール', special: 'メガホンレーザー', penalty: '小'},
  {type: 'blaster', main: 'ノヴァブラスター', sub: 'トラップ', special: 'スーパーショット', penalty: '小'},
  {type: 'blaster', main: 'ノヴァブラスターネオ', sub: 'スプラッシュボム', special: 'ボムラッシュ', penalty: '大'},
  {type: 'charger', main: 'スプラチャージャー', sub: 'スプラッシュボム', special: 'ボムラッシュ', penalty: '大'},
  {type: 'charger', main: 'スプラスコープ', sub: 'スプラッシュボム', special: 'ボムラッシュ', penalty: '大'},
  {type: 'charger', main: 'ヒーローチャージャーレプリカ', sub: 'スプラッシュボム', special: 'ボムラッシュ', penalty: '大'},
  {type: 'charger', main: 'スプラチャージャーワカメ', sub: 'スプリンクラー', special: 'メガホンレーザー', penalty: '中'},
  {type: 'charger', main: 'スプラスコープワカメ', sub: 'スプリンクラー', special: 'メガホンレーザー', penalty: '中'},
  {type: 'charger', main: 'スプラチャージャーベントー', sub: 'スプラッシュシールド', special: 'スーパーセンサー', penalty: '中'},
  {type: 'charger', main: 'スプラスコープベントー', sub: 'スプラッシュシールド', special: 'スーパーセンサー', penalty: '中'},
  {type: 'charger', main: 'リッター3K', sub: 'クイックボム', special: 'スーパーセンサー', penalty: '中'},
  {type: 'charger', main: '3Kスコープ', sub: 'クイックボム', special: 'スーパーセンサー', penalty: '中'},
  {type: 'charger', main: 'リッター3Kカスタム', sub: 'ジャンプビーコン', special: 'ダイオウイカ', penalty: '中'},
  {type: 'charger', main: '3Kスコープカスタム', sub: 'ジャンプビーコン', special: 'ダイオウイカ', penalty: '中'},
  {type: 'charger', main: 'スクイックリンα', sub: 'ポイントセンサー', special: 'バリア', penalty: '小'},
  {type: 'charger', main: 'スクイックリンβ', sub: 'トラップ', special: 'スーパーショット', penalty: '小'},
  {type: 'charger', main: 'スクイックリンγ', sub: 'キューバンボム', special: 'ダイオウイカ', penalty: '中'},
  {type: 'charger', main: '14式竹筒銃・甲', sub: 'スプラッシュシールド', special: 'メガホンレーザー', penalty: '小'},
  {type: 'charger', main: '14式竹筒銃・乙', sub: 'ポイズンボール', special: 'スーパーセンサー', penalty: '小'},
  {type: 'charger', main: '14式竹筒銃・丙', sub: 'クイックボム', special: 'トルネード', penalty: '大'},
  {type: 'roller', main: 'スプラローラー', sub: 'キューバンボム', special: 'メガホンレーザー', penalty: '小'},
  {type: 'roller', main: 'ヒーローローラーレプリカ', sub: 'キューバンボム', special: 'メガホンレーザー', penalty: '小'},
  {type: 'roller', main: 'スプラローラーコラボ', sub: 'ジャンプビーコン', special: 'ダイオウイカ', penalty: '中'},
  {type: 'roller', main: 'スプラローラーコロコロ', sub: 'スプラッシュシールド', special: 'スーパーショット', penalty: '小'},
  {type: 'roller', main: 'ダイナモローラー', sub: 'スプリンクラー', special: 'スーパーセンサー', penalty: '大'},
  {type: 'roller', main: 'ダイナモローラーテスラ', sub: 'スプラッシュボム', special: 'トルネード', penalty: '大'},
  {type: 'roller', main: 'ダイナモローラーバーンド', sub: 'チェイスボム', special: 'メガホンレーザー', penalty: '中'},
  {type: 'roller', main: 'カーボンローラー', sub: 'クイックボム', special: 'スーパーショット', penalty: '中'},
  {type: 'roller', main: 'カーボンローラーデコ', sub: 'チェイスボム', special: 'ボムラッシュ', penalty: '小'},
  {type: 'brush', main: 'パブロ', sub: 'スプリンクラー', special: 'トルネード', penalty: '小'},
  {type: 'brush', main: 'パブロ・ヒュー', sub: 'トラップ', special: 'バリア', penalty: '小'},
  {type: 'brush', main: 'パーマネントパブロ', sub: 'スプラッシュボム', special: 'ダイオウイカ', penalty: '小'},
  {type: 'brush', main: 'ホクサイ', sub: 'ジャンプビーコン', special: 'ダイオウイカ', penalty: '小'},
  {type: 'brush', main: 'ホクサイ・ヒュー', sub: 'スプラッシュボム', special: 'スーパーショット', penalty: '小'},
  {type: 'slosher', main: 'バケットスロッシャー', sub: 'クイックボム', special: 'トルネード', penalty: '小'},
  {type: 'slosher', main: 'バケットスロッシャーデコ', sub: 'スプラッシュシールド', special: 'ダイオウイカ', penalty: '小'},
  {type: 'slosher', main: 'バケットスロッシャーソーダ', sub: 'スプラッシュボム', special: 'スーパーショット', penalty: '小'},
  {type: 'slosher', main: 'ヒッセン', sub: 'ポイズンボール', special: 'バリア', penalty: '中'},
  {type: 'slosher', main: 'ヒッセン・ヒュー', sub: 'チェイスボム', special: 'スーパーセンサー', penalty: '小'},
  {type: 'slosher', main: 'スクリュースロッシャー', sub: 'スプラッシュボム', special: 'ボムラッシュ', penalty: '小'},
  {type: 'slosher', main: 'スクリュースロッシャーデコ', sub: 'ポイントセンサー', special: 'スーパーショット', penalty: '小'},
  {type: 'splatling', main: 'バレルスピナー', sub: 'スプラッシュシールド', special: 'トルネード', penalty: '小'},
  {type: 'splatling', main: 'バレルスピナーコラボ', sub: 'ポイントセンサー', special: 'ダイオウイカ', penalty: '中'},
  {type: 'splatling', main: 'バレルスピナーリミックス', sub: 'スプリンクラー', special: 'メガホンレーザー', penalty: '小'},
  {type: 'splatling', main: 'スプラスピナー', sub: 'キューバンボム', special: 'スーパーショット', penalty: '小'},
  {type: 'splatling', main: 'スプラスピナーコラボ', sub: 'ポイズンボール', special: 'バリア', penalty: '大'},
  {type: 'splatling', main: 'スプラスピナーリペア', sub: 'クイックボム', special: 'ボムラッシュ', penalty: '小'},
  {type: 'splatling', main: 'ハイドラント', sub: 'スプラッシュボム', special: 'スーパーセンサー', penalty: '小'},
  {type: 'splatling', main: 'ハイドラントカスタム', sub: 'スプリンクラー', special: 'バリア', penalty: '小'}
];

var WeaponTable = React.createClass({
  has: function (set, sub, sp) {
    return set.sub === sub && set.special === sp;
  },

  render: function () {
    return (
      <table className="weaponTable">
        <thead>
          <tr>
            <th></th>
            {
              SpecialWeapons.map(sp => <th key={sp}>{sp}</th>)
            }
          </tr>
        </thead>
        <tbody>
          {SubWeapons.map(sub =>
            <tr key={sub}>
              <th>{sub}</th>
              {
                SpecialWeapons.map(sp =>
                  <td key={sub + sp}>
                    {
                      WeaponSets
                      .filter(set => this.has(set, sub, sp))
                      .map(set =>
                        <span key={set.main} className={'weapon ' + set.type}>
                          {set.main}
                        </span>
                      )
                    }
                  </td>
                )
              }
            </tr>
          )}
        </tbody>
      </table>
    );
  }
});

var App = React.createClass({
  render: function () {
    return (
      <div className="app">
        <WeaponTable/>
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('content')
);

// vim: et sts=2 sw=2 fdm=marker
