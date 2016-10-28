var React = require('react');
var ReactDOM = require('react-dom');

var WeaponTable = React.createClass({
  render: function () {
    var specialWeapons = [
      'メガホンレーザー',
      'トルネード',
      'ボムラッシュ',
      'バリア',
      'ダイオウイカ',
      'スーパーセンサー',
      'スーパーショット'
    ];
    var subWeapons = [
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
    return (
      <table className="weaponTable">
        <thead>
          <tr>
            <th></th>
            {
              specialWeapons.map(sp => <th key={sp}>{sp}</th>)
            }
          </tr>
        </thead>
        <tbody>
          {subWeapons.map(sub =>
            <tr key={sub}>
              <th>{sub}</th>
              {
                specialWeapons.map(sp => <td key={sub + sp}>{sub} / {sp}</td>)
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
