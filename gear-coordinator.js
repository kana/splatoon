var React = require('react');
var ReactDOM = require('react-dom');
var GearDB = require('./gear-db');

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
      GearDB.theGears.filter(function (gear) {
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
