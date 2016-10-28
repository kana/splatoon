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
  {main: 'わかばシューター', sub: 'スプラッシュボム', special: 'バリア'},
  {main: 'もみじシューター', sub: 'ポイズンボール', special: 'スーパーセンサー'},
  {main: 'スプラシューター', sub: 'クイックボム', special: 'ボムラッシュ'},
  {main: 'スプラシューターコラボ', sub: 'キューバンボム', special: 'スーパーショット'},
  {main: 'ヒーローシューターレプリカ', sub: 'クイックボム', special: 'ボムラッシュ'},
  {main: 'オクタシューターレプリカ', sub: 'キューバンボム', special: 'スーパーショット'},
  {main: 'スプラシューターワサビ', sub: 'スプラッシュボム', special: 'トルネード'},
  {main: 'プライムシューター', sub: 'スプラッシュボム', special: 'トルネード'},
  {main: 'プライムシューターコラボ', sub: 'ポイントセンサー', special: 'スーパーショット'},
  {main: 'プライムシューターベリー', sub: 'キューバンボム', special: 'ボムラッシュ'},
  {main: 'プロモデラーMG', sub: 'チェイスボム', special: 'スーパーショット'},
  {main: 'プロモデラーRG', sub: 'トラップ', special: 'トルネード'},
  {main: 'プロモデラーPG', sub: 'クイックボム', special: 'ダイオウイカ'},
  {main: 'ジェットスイーパー', sub: 'スプラッシュシールド', special: 'トルネード'},
  {main: 'ジェットスイーパーカスタム', sub: 'クイックボム', special: 'ダイオウイカ'},
  {main: 'デュアルスイーパー', sub: 'スプラッシュボム', special: 'スーパーセンサー'},
  {main: 'デュアルスイーパーカスタム', sub: 'ジャンプビーコン', special: 'メガホンレーザー'},
  {main: 'L3リールガン', sub: 'ポイズンボール', special: 'メガホンレーザー'},
  {main: 'L3リールガンD', sub: 'クイックボム', special: 'ダイオウイカ'},
  {main: 'H3リールガン', sub: 'キューバンボム', special: 'スーパーセンサー'},
  {main: 'H3リールガンD', sub: 'ポイントセンサー', special: 'スーパーショット'},
  {main: 'H3リールガンチェリー', sub: 'スプラッシュシールド', special: 'バリア'},
  {main: 'N-ZAP 85', sub: 'スプラッシュボム', special: 'スーパーセンサー'},
  {main: 'N-ZAP 89', sub: 'スプリンクラー', special: 'トルネード'},
  {main: 'N-ZAP 83', sub: 'ポイントセンサー', special: 'ダイオウイカ'},
  {main: 'シャープマーカー', sub: 'キューバンボム', special: 'ボムラッシュ'},
  {main: 'シャープマーカーネオ', sub: 'クイックボム', special: 'スーパーショット'},
  {main: 'ボールドマーカー', sub: 'ジャンプビーコン', special: 'メガホンレーザー'},
  {main: 'ボールドマーカーネオ', sub: 'ポイントセンサー', special: 'ダイオウイカ'},
  {main: 'ボールドマーカー7', sub: 'スプラッシュボム', special: 'スーパーショット'},
  {main: '.52ガロン', sub: 'スプラッシュシールド', special: 'メガホンレーザー'},
  {main: '.52ガロンデコ', sub: 'チェイスボム', special: 'トルネード'},
  {main: '.96ガロン', sub: 'スプリンクラー', special: 'スーパーセンサー'},
  {main: '.96ガロンデコ', sub: 'スプラッシュシールド', special: 'ダイオウイカ'},
  {main: 'ホットブラスター', sub: 'ポイズンボール', special: 'メガホンレーザー'},
  {main: 'ホットブラスターカスタム', sub: 'ポイントセンサー', special: 'バリア'},
  {main: 'ロングブラスター', sub: 'スプラッシュシールド', special: 'トルネード'},
  {main: 'ロングブラスターカスタム', sub: 'スプラッシュボム', special: 'ダイオウイカ'},
  {main: 'ロングブラスターネクロ', sub: 'クイックボム', special: 'メガホンレーザー'},
  {main: 'ラピッドブラスター', sub: 'トラップ', special: 'バリア'},
  {main: 'ラピッドブラスターデコ', sub: 'キューバンボム', special: 'ボムラッシュ'},
  {main: 'Rブラスターエリート', sub: 'チェイスボム', special: 'スーパーショット'},
  {main: 'Rブラスターエリートデコ', sub: 'ポイズンボール', special: 'メガホンレーザー'},
  {main: 'ノヴァブラスター', sub: 'トラップ', special: 'スーパーショット'},
  {main: 'ノヴァブラスターネオ', sub: 'スプラッシュボム', special: 'ボムラッシュ'},
  {main: 'スプラチャージャー', sub: 'スプラッシュボム', special: 'ボムラッシュ'},
  {main: 'スプラスコープ', sub: 'スプラッシュボム', special: 'ボムラッシュ'},
  {main: 'ヒーローチャージャーレプリカ', sub: 'スプラッシュボム', special: 'ボムラッシュ'},
  {main: 'スプラチャージャーワカメ', sub: 'スプリンクラー', special: 'メガホンレーザー'},
  {main: 'スプラスコープワカメ', sub: 'スプリンクラー', special: 'メガホンレーザー'},
  {main: 'スプラチャージャーベントー', sub: 'スプラッシュシールド', special: 'スーパーセンサー'},
  {main: 'スプラスコープベントー', sub: 'スプラッシュシールド', special: 'スーパーセンサー'},
  {main: 'リッター3K', sub: 'クイックボム', special: 'スーパーセンサー'},
  {main: '3Kスコープ', sub: 'クイックボム', special: 'スーパーセンサー'},
  {main: 'リッター3Kカスタム', sub: 'ジャンプビーコン', special: 'ダイオウイカ'},
  {main: '3Kスコープカスタム', sub: 'ジャンプビーコン', special: 'ダイオウイカ'},
  {main: 'スクイックリンα', sub: 'ポイントセンサー', special: 'バリア'},
  {main: 'スクイックリンβ', sub: 'トラップ', special: 'スーパーショット'},
  {main: 'スクイックリンγ', sub: 'キューバンボム', special: 'ダイオウイカ'},
  {main: '14式竹筒銃・甲', sub: 'スプラッシュシールド', special: 'メガホンレーザー'},
  {main: '14式竹筒銃・乙', sub: 'ポイズンボール', special: 'スーパーセンサー'},
  {main: '14式竹筒銃・丙', sub: 'クイックボム', special: 'トルネード'},
  {main: 'スプラローラー', sub: 'キューバンボム', special: 'メガホンレーザー'},
  {main: 'ヒーローローラーレプリカ', sub: 'キューバンボム', special: 'メガホンレーザー'},
  {main: 'スプラローラーコラボ', sub: 'ジャンプビーコン', special: 'ダイオウイカ'},
  {main: 'スプラローラーコロコロ', sub: 'スプラッシュシールド', special: 'スーパーショット'},
  {main: 'ダイナモローラー', sub: 'スプリンクラー', special: 'スーパーセンサー'},
  {main: 'ダイナモローラーテスラ', sub: 'スプラッシュボム', special: 'トルネード'},
  {main: 'ダイナモローラーバーンド', sub: 'チェイスボム', special: 'メガホンレーザー'},
  {main: 'カーボンローラー', sub: 'クイックボム', special: 'スーパーショット'},
  {main: 'カーボンローラーデコ', sub: 'チェイスボム', special: 'ボムラッシュ'},
  {main: 'パブロ', sub: 'スプリンクラー', special: 'トルネード'},
  {main: 'パブロ・ヒュー', sub: 'トラップ', special: 'バリア'},
  {main: 'パーマネントパブロ', sub: 'スプラッシュボム', special: 'ダイオウイカ'},
  {main: 'ホクサイ', sub: 'ジャンプビーコン', special: 'ダイオウイカ'},
  {main: 'ホクサイ・ヒュー', sub: 'スプラッシュボム', special: 'スーパーショット'},
  {main: 'バケットスロッシャー', sub: 'クイックボム', special: 'トルネード'},
  {main: 'バケットスロッシャーデコ', sub: 'スプラッシュシールド', special: 'ダイオウイカ'},
  {main: 'バケットスロッシャーソーダ', sub: 'スプラッシュボム', special: 'スーパーショット'},
  {main: 'ヒッセン', sub: 'ポイズンボール', special: 'バリア'},
  {main: 'ヒッセン・ヒュー', sub: 'チェイスボム', special: 'スーパーセンサー'},
  {main: 'スクリュースロッシャー', sub: 'スプラッシュボム', special: 'ボムラッシュ'},
  {main: 'スクリュースロッシャーデコ', sub: 'ポイントセンサー', special: 'スーパーショット'},
  {main: 'バレルスピナー', sub: 'スプラッシュシールド', special: 'トルネード'},
  {main: 'バレルスピナーコラボ', sub: 'ポイントセンサー', special: 'ダイオウイカ'},
  {main: 'スプラスピナー', sub: 'キューバンボム', special: 'スーパーショット'},
  {main: 'スプラスピナーコラボ', sub: 'ポイズンボール', special: 'バリア'},
  {main: 'スプラスピナーリペア', sub: 'クイックボム', special: 'ボムラッシュ'},
  {main: 'ハイドラント', sub: 'スプラッシュボム', special: 'スーパーセンサー'},
  {main: 'ハイドラントカスタム', sub: 'スプリンクラー', special: 'バリア'}
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
                        <span key={set.main} className="weapon">
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
