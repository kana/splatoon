var React = require('react');
var ReactDOM = require('react-dom');
var GearDB = require('./gear-db');

var GearPowerSelector = React.createClass({
  onChange: function (e) {
    this.props.onChange(e.target.value);
  },

  render: function () {
    return (
      <div className="gearPowerSelector">
        <label>
          欲しいギアパワー:
          <select onChange={this.onChange} value={this.props.gearPower}>
            <option value="(全て)">(全て)</option>
            <option value="攻撃力アップ">攻撃力アップ</option>
            <option value="防御力アップ">防御力アップ</option>
            <option value="インク効率アップ(メイン)">インク効率アップ(メイン)</option>
            <option value="インク効率アップ(サブ)">インク効率アップ(サブ)</option>
            <option value="インク回復力アップ">インク回復力アップ</option>
            <option value="ヒト移動速度アップ">ヒト移動速度アップ</option>
            <option value="イカダッシュ速度アップ">イカダッシュ速度アップ</option>
            <option value="スペシャル増加量アップ">スペシャル増加量アップ</option>
            <option value="スペシャル時間延長">スペシャル時間延長</option>
            <option value="復活時間短縮">復活時間短縮</option>
            <option value="スペシャル減少量ダウン">スペシャル減少量ダウン</option>
            <option value="スーパージャンプ時間短縮">スーパージャンプ時間短縮</option>
            <option value="ボム飛距離アップ">ボム飛距離アップ</option>
            <option value="ラストスパート">ラストスパート</option>
            <option value="スタートダッシュ">スタートダッシュ</option>
            <option value="逆境強化">逆境強化</option>
            <option value="カムバック">カムバック</option>
            <option value="マーキングガード">マーキングガード</option>
            <option value="イカニンジャ">イカニンジャ</option>
            <option value="うらみ">うらみ</option>
            <option value="スタートレーダー">スタートレーダー</option>
            <option value="ボムサーチ">ボムサーチ</option>
            <option value="安全シューズ">安全シューズ</option>
            <option value="ステルスジャンプ">ステルスジャンプ</option>
          </select>
        </label>
      </div>
    );
  }
});

var GearList = React.createClass({
  gearsOf: function (type) {
    return this.props.gears.filter(function (gear) {
      return gear.type === type;
    });
  },

  render: function () {
    return (
      <table className="gearList">
        <GearListOfType type="アタマ"
          gearPower={this.props.gearPower}
          gears={this.gearsOf("アタマ")}/>
        <GearListOfType type="フク"
          gearPower={this.props.gearPower}
          gears={this.gearsOf("フク")}/>
        <GearListOfType type="クツ"
          gearPower={this.props.gearPower}
          gears={this.gearsOf("クツ")}/>
      </table>
    );
  }
});

var GearListOfType = React.createClass({
  nodeFromGear: function (gear) {
    return (
      <tr key={gear.name}>
        <td>{gear.name}</td>
        <td className={gear.main === this.props.gearPower ? 'matched' : ''}>{gear.main}</td>
        <td className={gear.sub === this.props.gearPower ? 'matched' : ''}>{gear.sub}</td>
        <td className={gear.subrare === this.props.gearPower ? 'matched' : ''}>{gear.subrare}</td>
        <td>{gear.brand}</td>
      </tr>
    );
  },

  render: function () {
    return (
      <tbody>
        <tr>
          <th colSpan="5">{this.props.type}</th>
        </tr>
        <tr>
          <th>名前</th>
          <th>メイン</th>
          <th>サブ+</th>
          <th>サブ-</th>
          <th>ブランド</th>
        </tr>
        {this.props.gears.map(this.nodeFromGear)}
      </tbody>
    );
  }
});

var App = React.createClass({
  getInitialState: function () {
    var gearPower = this.gearPowerFromId(location.hash.substring(1));
    return {
      gearPower: gearPower,
      gears: this.findGearsFor(gearPower),
    };
  },

  idFromGearPowerTable: {
    '攻撃力アップ': 'damage-up',
    '防御力アップ': 'defense-up',
    'インク効率アップ(メイン)': 'ink-saver-main',
    'インク効率アップ(サブ)': 'ink-saver-sub',
    'インク回復力アップ': 'ink-recovery-up',
    'ヒト移動速度アップ': 'run-speed-up',
    'イカダッシュ速度アップ': 'swim-speed-up',
    'スペシャル増加量アップ': 'special-charge-up',
    'スペシャル時間延長': 'special-duration-up',
    '復活時間短縮': 'quick-respawn',
    'スペシャル減少量ダウン': 'special-saver',
    'スーパージャンプ時間短縮': 'quick-super-jump',
    'ボム飛距離アップ': 'bomb-range-up',
    'ラストスパート': 'last-ditch-effort',
    'スタートダッシュ': 'opening-gambit',
    '逆境強化': 'tenacity',
    'カムバック': 'comeback',
    'マーキングガード': 'cold-blooded',
    'イカニンジャ': 'ninja-squid',
    'うらみ': 'haunt',
    'スタートレーダー': 'recon',
    'ボムサーチ': 'bomb-sniffer',
    '安全シューズ': 'ink-resistance-up',
    'ステルスジャンプ': 'stealth-jump'
  },

  idFromGearPower: function (gearPower) {
    return this.idFromGearPowerTable[gearPower];
  },

  gearPowerFromId: function (id) {
    for (var gearPower in this.idFromGearPowerTable) {
      if (id === this.idFromGearPowerTable[gearPower])
        return gearPower;
    }
    return '(全て)';
  },

  findGearsFor: function (gearPower) {
    var orderFromGearType = {
      'アタマ': 1,
      'フク': 2,
      'クツ': 3
    };
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
    var matchedGears = GearDB.theGears.filter(function (gear) {
      return orderFromGearPower[gearPower] === undefined ||
             gear.main === gearPower || gear.sub === gearPower;
    });
    var mapped = matchedGears.map(function (gear, i) {
      return {
        index: i,
        value: [
          orderFromGearType[gear.type],
          gear.main === gearPower ? 1 : 2,
          gear.sub === gearPower ? 1 : 2,
          orderFromGearPower[gear.main],
          orderFromGearPower[gear.sub],
          gear.name
        ].join(':')
      };
    });
    mapped.sort(function (a, b) {
      return a.value < b.value ? -1 :
             a.value === b.value ? 0 : 1;
    });
    var sortedGears = mapped.map(function (x){
      return matchedGears[x.index];
    });
    return sortedGears;
  },

  onChange: function (gearPower) {
    this.setState({
      gearPower: gearPower,
      gears: this.findGearsFor(gearPower)
    });
    var id = this.idFromGearPower(gearPower);
    history.replaceState(
      null,
      'Splatoon Gear Finder | ' + gearPower,
      id === undefined ? location.pathname : '#' + id
    );
  },

  render: function () {
    return (
      <div className="app">
        <GearPowerSelector onChange={this.onChange} gearPower={this.state.gearPower}/>
        <GearList gears={this.state.gears} gearPower={this.state.gearPower}/>
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('content')
);

// vim: et sts=2 sw=2 fdm=marker
