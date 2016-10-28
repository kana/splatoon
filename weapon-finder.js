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
  {type: 'shooter', main: 'わかばシューター', sub: 'スプラッシュボム', special: 'バリア'},
  {type: 'shooter', main: 'もみじシューター', sub: 'ポイズンボール', special: 'スーパーセンサー'},
  {type: 'shooter', main: 'スプラシューター', sub: 'クイックボム', special: 'ボムラッシュ'},
  {type: 'shooter', main: 'スプラシューターコラボ', sub: 'キューバンボム', special: 'スーパーショット'},
  {type: 'shooter', main: 'ヒーローシューターレプリカ', sub: 'クイックボム', special: 'ボムラッシュ'},
  {type: 'shooter', main: 'オクタシューターレプリカ', sub: 'キューバンボム', special: 'スーパーショット'},
  {type: 'shooter', main: 'スプラシューターワサビ', sub: 'スプラッシュボム', special: 'トルネード'},
  {type: 'shooter', main: 'プライムシューター', sub: 'スプラッシュボム', special: 'トルネード'},
  {type: 'shooter', main: 'プライムシューターコラボ', sub: 'ポイントセンサー', special: 'スーパーショット'},
  {type: 'shooter', main: 'プライムシューターベリー', sub: 'キューバンボム', special: 'ボムラッシュ'},
  {type: 'shooter', main: 'プロモデラーMG', sub: 'チェイスボム', special: 'スーパーショット'},
  {type: 'shooter', main: 'プロモデラーRG', sub: 'トラップ', special: 'トルネード'},
  {type: 'shooter', main: 'プロモデラーPG', sub: 'クイックボム', special: 'ダイオウイカ'},
  {type: 'shooter', main: 'ジェットスイーパー', sub: 'スプラッシュシールド', special: 'トルネード'},
  {type: 'shooter', main: 'ジェットスイーパーカスタム', sub: 'クイックボム', special: 'ダイオウイカ'},
  {type: 'shooter', main: 'デュアルスイーパー', sub: 'スプラッシュボム', special: 'スーパーセンサー'},
  {type: 'shooter', main: 'デュアルスイーパーカスタム', sub: 'ジャンプビーコン', special: 'メガホンレーザー'},
  {type: 'shooter', main: 'L3リールガン', sub: 'ポイズンボール', special: 'メガホンレーザー'},
  {type: 'shooter', main: 'L3リールガンD', sub: 'クイックボム', special: 'ダイオウイカ'},
  {type: 'shooter', main: 'H3リールガン', sub: 'キューバンボム', special: 'スーパーセンサー'},
  {type: 'shooter', main: 'H3リールガンD', sub: 'ポイントセンサー', special: 'スーパーショット'},
  {type: 'shooter', main: 'H3リールガンチェリー', sub: 'スプラッシュシールド', special: 'バリア'},
  {type: 'shooter', main: 'N-ZAP 85', sub: 'スプラッシュボム', special: 'スーパーセンサー'},
  {type: 'shooter', main: 'N-ZAP 89', sub: 'スプリンクラー', special: 'トルネード'},
  {type: 'shooter', main: 'N-ZAP 83', sub: 'ポイントセンサー', special: 'ダイオウイカ'},
  {type: 'shooter', main: 'シャープマーカー', sub: 'キューバンボム', special: 'ボムラッシュ'},
  {type: 'shooter', main: 'シャープマーカーネオ', sub: 'クイックボム', special: 'スーパーショット'},
  {type: 'shooter', main: 'ボールドマーカー', sub: 'ジャンプビーコン', special: 'メガホンレーザー'},
  {type: 'shooter', main: 'ボールドマーカーネオ', sub: 'ポイントセンサー', special: 'ダイオウイカ'},
  {type: 'shooter', main: 'ボールドマーカー7', sub: 'スプラッシュボム', special: 'スーパーショット'},
  {type: 'shooter', main: '.52ガロン', sub: 'スプラッシュシールド', special: 'メガホンレーザー'},
  {type: 'shooter', main: '.52ガロンデコ', sub: 'チェイスボム', special: 'トルネード'},
  {type: 'shooter', main: '.96ガロン', sub: 'スプリンクラー', special: 'スーパーセンサー'},
  {type: 'shooter', main: '.96ガロンデコ', sub: 'スプラッシュシールド', special: 'ダイオウイカ'},
  {type: 'blaster', main: 'ホットブラスター', sub: 'ポイズンボール', special: 'メガホンレーザー'},
  {type: 'blaster', main: 'ホットブラスターカスタム', sub: 'ポイントセンサー', special: 'バリア'},
  {type: 'blaster', main: 'ロングブラスター', sub: 'スプラッシュシールド', special: 'トルネード'},
  {type: 'blaster', main: 'ロングブラスターカスタム', sub: 'スプラッシュボム', special: 'ダイオウイカ'},
  {type: 'blaster', main: 'ロングブラスターネクロ', sub: 'クイックボム', special: 'メガホンレーザー'},
  {type: 'blaster', main: 'ラピッドブラスター', sub: 'トラップ', special: 'バリア'},
  {type: 'blaster', main: 'ラピッドブラスターデコ', sub: 'キューバンボム', special: 'ボムラッシュ'},
  {type: 'blaster', main: 'Rブラスターエリート', sub: 'チェイスボム', special: 'スーパーショット'},
  {type: 'blaster', main: 'Rブラスターエリートデコ', sub: 'ポイズンボール', special: 'メガホンレーザー'},
  {type: 'blaster', main: 'ノヴァブラスター', sub: 'トラップ', special: 'スーパーショット'},
  {type: 'blaster', main: 'ノヴァブラスターネオ', sub: 'スプラッシュボム', special: 'ボムラッシュ'},
  {type: 'charger', main: 'スプラチャージャー', sub: 'スプラッシュボム', special: 'ボムラッシュ'},
  {type: 'charger', main: 'スプラスコープ', sub: 'スプラッシュボム', special: 'ボムラッシュ'},
  {type: 'charger', main: 'ヒーローチャージャーレプリカ', sub: 'スプラッシュボム', special: 'ボムラッシュ'},
  {type: 'charger', main: 'スプラチャージャーワカメ', sub: 'スプリンクラー', special: 'メガホンレーザー'},
  {type: 'charger', main: 'スプラスコープワカメ', sub: 'スプリンクラー', special: 'メガホンレーザー'},
  {type: 'charger', main: 'スプラチャージャーベントー', sub: 'スプラッシュシールド', special: 'スーパーセンサー'},
  {type: 'charger', main: 'スプラスコープベントー', sub: 'スプラッシュシールド', special: 'スーパーセンサー'},
  {type: 'charger', main: 'リッター3K', sub: 'クイックボム', special: 'スーパーセンサー'},
  {type: 'charger', main: '3Kスコープ', sub: 'クイックボム', special: 'スーパーセンサー'},
  {type: 'charger', main: 'リッター3Kカスタム', sub: 'ジャンプビーコン', special: 'ダイオウイカ'},
  {type: 'charger', main: '3Kスコープカスタム', sub: 'ジャンプビーコン', special: 'ダイオウイカ'},
  {type: 'charger', main: 'スクイックリンα', sub: 'ポイントセンサー', special: 'バリア'},
  {type: 'charger', main: 'スクイックリンβ', sub: 'トラップ', special: 'スーパーショット'},
  {type: 'charger', main: 'スクイックリンγ', sub: 'キューバンボム', special: 'ダイオウイカ'},
  {type: 'charger', main: '14式竹筒銃・甲', sub: 'スプラッシュシールド', special: 'メガホンレーザー'},
  {type: 'charger', main: '14式竹筒銃・乙', sub: 'ポイズンボール', special: 'スーパーセンサー'},
  {type: 'charger', main: '14式竹筒銃・丙', sub: 'クイックボム', special: 'トルネード'},
  {type: 'roller', main: 'スプラローラー', sub: 'キューバンボム', special: 'メガホンレーザー'},
  {type: 'roller', main: 'ヒーローローラーレプリカ', sub: 'キューバンボム', special: 'メガホンレーザー'},
  {type: 'roller', main: 'スプラローラーコラボ', sub: 'ジャンプビーコン', special: 'ダイオウイカ'},
  {type: 'roller', main: 'スプラローラーコロコロ', sub: 'スプラッシュシールド', special: 'スーパーショット'},
  {type: 'roller', main: 'ダイナモローラー', sub: 'スプリンクラー', special: 'スーパーセンサー'},
  {type: 'roller', main: 'ダイナモローラーテスラ', sub: 'スプラッシュボム', special: 'トルネード'},
  {type: 'roller', main: 'ダイナモローラーバーンド', sub: 'チェイスボム', special: 'メガホンレーザー'},
  {type: 'roller', main: 'カーボンローラー', sub: 'クイックボム', special: 'スーパーショット'},
  {type: 'roller', main: 'カーボンローラーデコ', sub: 'チェイスボム', special: 'ボムラッシュ'},
  {type: 'brush', main: 'パブロ', sub: 'スプリンクラー', special: 'トルネード'},
  {type: 'brush', main: 'パブロ・ヒュー', sub: 'トラップ', special: 'バリア'},
  {type: 'brush', main: 'パーマネントパブロ', sub: 'スプラッシュボム', special: 'ダイオウイカ'},
  {type: 'brush', main: 'ホクサイ', sub: 'ジャンプビーコン', special: 'ダイオウイカ'},
  {type: 'brush', main: 'ホクサイ・ヒュー', sub: 'スプラッシュボム', special: 'スーパーショット'},
  {type: 'slosher', main: 'バケットスロッシャー', sub: 'クイックボム', special: 'トルネード'},
  {type: 'slosher', main: 'バケットスロッシャーデコ', sub: 'スプラッシュシールド', special: 'ダイオウイカ'},
  {type: 'slosher', main: 'バケットスロッシャーソーダ', sub: 'スプラッシュボム', special: 'スーパーショット'},
  {type: 'slosher', main: 'ヒッセン', sub: 'ポイズンボール', special: 'バリア'},
  {type: 'slosher', main: 'ヒッセン・ヒュー', sub: 'チェイスボム', special: 'スーパーセンサー'},
  {type: 'slosher', main: 'スクリュースロッシャー', sub: 'スプラッシュボム', special: 'ボムラッシュ'},
  {type: 'slosher', main: 'スクリュースロッシャーデコ', sub: 'ポイントセンサー', special: 'スーパーショット'},
  {type: 'splatling', main: 'バレルスピナー', sub: 'スプラッシュシールド', special: 'トルネード'},
  {type: 'splatling', main: 'バレルスピナーコラボ', sub: 'ポイントセンサー', special: 'ダイオウイカ'},
  {type: 'splatling', main: 'バレルスピナーリミックス', sub: 'スプリンクラー', special: 'メガホンレーザー'},
  {type: 'splatling', main: 'スプラスピナー', sub: 'キューバンボム', special: 'スーパーショット'},
  {type: 'splatling', main: 'スプラスピナーコラボ', sub: 'ポイズンボール', special: 'バリア'},
  {type: 'splatling', main: 'スプラスピナーリペア', sub: 'クイックボム', special: 'ボムラッシュ'},
  {type: 'splatling', main: 'ハイドラント', sub: 'スプラッシュボム', special: 'スーパーセンサー'},
  {type: 'splatling', main: 'ハイドラントカスタム', sub: 'スプリンクラー', special: 'バリア'}
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
