var React = require('react');
var ReactDOM = require('react-dom');
var GearDB = require('./gear-db');

var GearSelector = React.createClass({
  onChange: function (e) {
    this.props.onChange(GearDB.theGears.find(function (gear) {
      return gear.name === e.target.value;
    }));
  },

  nodeFromGear: function (gear, i) {
    return (
      <option key={i} gear={gear}>{gear.name}</option>
    );
  },

  render: function () {
    return (
      <div className="gearSelector">
        <div className="label">
          チャレンジするギア:
        </div>
        <div className="forms">
          <select onChange={this.onChange} value={this.props.gear.name}>
            {GearDB.theGears.map(this.nodeFromGear)}
          </select>
        </div>
      </div>
    );
  }
});

var SlotMachine = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      slot1: '-',
      slot2: '-',
      slot3: '-'
    };
  },

  challenge: function (gear) {
    var gearPowers = [
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
      'ボム飛距離アップ'
    ];

    var candidates = [];
    for (var i = 0; i < gearPowers.length; i++) {
      var j = gearPowers[i] === gear.sub ? 10 :
              gearPowers[i] === gear.subrare ? 1 :
              2;
      while (j--) {
        candidates.push(gearPowers[i]);
      }
    }

    var i = Math.floor(Math.random() * candidates.length)

    return candidates[i];
  },

  onClick: function () {
    this.setState({
      count: this.state.count + 1,
      slot1: this.challenge(this.props.gear),
      slot2: this.challenge(this.props.gear),
      slot3: this.challenge(this.props.gear)
    });
  },

  render: function () {
    var classNames = ['slotMachine'];
    if (this.state.slot1 === this.state.slot2 &&
        this.state.slot2 === this.state.slot3) {
      classNames.push('perfect');
    }
    return (
      <div className={classNames.join(' ')}>
        <div className="result">
          <div className="state">
            {this.state.count}回目
          </div>
          <div className="gearPowers">
            <div className="gear slot1">{this.state.slot1}</div>
            <div className="gear slot2">{this.state.slot2}</div>
            <div className="gear slot3">{this.state.slot3}</div>
          </div>
        </div>
        <button onClick={this.onClick}>回す</button>
      </div>
    );
  }
});

var App = React.createClass({
  getInitialState: function () {
    return {
      gear: GearDB.theGears[0]
    };
  },

  onChange: function (gear) {
    this.setState({
      gear: gear
    });
  },

  render: function () {
    return (
      <div className="app">
        <GearSelector onChange={this.onChange} gear={this.state.gear}/>
        <SlotMachine gear={this.state.gear}/>
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('content')
);

// vim: et sts=2 sw=2 fdm=marker
