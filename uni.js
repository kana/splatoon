var React = require('react');
var ReactDOM = require('react-dom');
var ReactTimerMixin = require('react-timer-mixin');
var GearDB = require('./gear-db');

var theGears = (function () {
  var gears = GearDB.theGears.slice();
  var mapped = gears.map(function (gear, i) {
    return {
      index: i,
      value: gear.name
    };
  });
  mapped.sort(function (a, b) {
    return a.value.localeCompare(b.value);
  });
  return mapped.map(function (x) {
    return gears[x.index];
  });
})();

var GearSelector = React.createClass({
  onChange: function (e) {
    this.props.onChange(theGears.find(function (gear) {
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
            {theGears.map(this.nodeFromGear)}
          </select>
        </div>
      </div>
    );
  }
});

var SlotMachine = React.createClass({
  mixins: [ReactTimerMixin],

  makeInitialState: function () {
    return {
      count: 0,
      slot1: '-',
      slot2: '-',
      slot3: '-'
    };
  },

  getInitialState: function () {
    return this.makeInitialState();
  },

  componentWillReceiveProps: function () {
    this.setState(this.makeInitialState());
  },

  availableGearPowers: [
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
  ],

  challenge: function (gear) {
    var gearPowers = this.availableGearPowers;
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

  challengeOnce: function () {
    var newState = {
      count: this.state.count + 1,
      slot1: this.challenge(this.props.gear),
      slot2: this.challenge(this.props.gear),
      slot3: this.challenge(this.props.gear)
    };
    this.setState(newState);
    return newState;
  },

  challengeForPerfectGearPowers: function () {
    var newState = this.challengeOnce();
    if (newState.slot1 !== newState.slot2 ||
        newState.slot2 !== newState.slot3) {
      this.setTimeout(
        function () {
          this.challengeForPerfectGearPowers();
        },
        10
      );
    }
  },

  challengeForRareGearPowers: function () {
    var newState = this.challengeOnce();
    if (newState.slot1 !== newState.slot2 ||
        newState.slot2 !== newState.slot3 ||
        newState.slot3 === this.props.gear.sub) {
      this.setTimeout(
        function () {
          this.challengeForRareGearPowers();
        },
        10
      );
    }
  },

  challengeForExtremeGearPowers: function () {
    var newState = this.challengeOnce();
    if (newState.slot1 !== newState.slot2 ||
        newState.slot2 !== newState.slot3 ||
        newState.slot3 !== this.props.gear.main) {
      this.setTimeout(
        function () {
          this.challengeForExtremeGearPowers();
        },
        10
      );
    }
  },

  render: function () {
    var classNames = ['slotMachine'];
    if (this.state.count !== 0 &&
        this.state.slot1 === this.state.slot2 &&
        this.state.slot2 === this.state.slot3) {
      classNames.push('perfect');
    }
    var canBeExtreme =
      this.availableGearPowers.indexOf(this.props.gear.main) !== -1;
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
        <button onClick={this.challengeOnce}>回す</button>
        <button onClick={this.challengeForPerfectGearPowers}>何か揃うまで回す</button>
        <button onClick={this.challengeForRareGearPowers}>凄いのが揃うまで回す</button>
        <button onClick={this.challengeForExtremeGearPowers}
          disabled={!canBeExtreme}>極まったのが揃うまで回す</button>
      </div>
    );
  }
});

var App = React.createClass({
  getInitialState: function () {
    return {
      gear: theGears[0]
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
