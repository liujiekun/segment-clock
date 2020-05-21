var ClockJS = {
  createNodes: function createNodes () {
    var allUnit = document.querySelector('.allUnit');
    var dotUnit = document.querySelector('.dotUnit');
    var body = document.body;
    body.removeChild(allUnit);
    body.removeChild(dotUnit);// 删掉第一个
    for (let i = 0; i < 6; i++) {
      let newNode = allUnit.cloneNode(true);
      body.appendChild(newNode);
      if (i % 2 == 1 && i < 5) {
        let dotNode = dotUnit.cloneNode(true);
        body.appendChild(dotNode);
      }
    }
  },
  arr: {
    0: [1, 1, 1, 0, 1, 1, 1],
    1: [0, 0, 0, 0, 0, 1, 1],
    2: [0, 1, 1, 1, 1, 1, 0],
    3: [0, 0, 1, 1, 1, 1, 1],
    4: [1, 0, 0, 1, 0, 1, 1],
    5: [1, 0, 1, 1, 1, 0, 1],
    6: [1, 1, 1, 1, 1, 0, 1],
    7: [0, 0, 1, 0, 0, 1, 1],
    8: [1, 1, 1, 1, 1, 1, 1],
    9: [1, 0, 1, 1, 1, 1, 1],
  },
  changeSegment: function changeSegment (node, arr) {
    var segments = node.querySelectorAll('.unit');
    for (let i = 0, len = segments.length; i < len; i++) {
      var visible = arr[i] ? 'visible' : 'hidden';
      segments[i].style.visibility = visible;
    }
  },
  createChangeUnitFn: function createChangeUnitFn () {
    var obj = {};
    return (timeStr, arr) => {
      var units = document.querySelectorAll('.allUnit');
      for (let i = 0, len = units.length; i < len; i++) {
        if (obj[i] != arr[timeStr[i]]) { // 不相等的才刷新
          this.changeSegment(units[i], arr[timeStr[i]])
          obj[i] = arr[timeStr[i]]
        }
      }
    }
  },
  changeDotUnit: function changeDotUnit () {
    var units = document.querySelectorAll('.dotUnit');
    for (let i = 0, len = units.length; i < len; i++) {
      let unit = units[i];
      let visible = unit.style.visibility;
      unit.style.visibility = visible == 'visible' ? 'hidden' : 'visible';
    }
  },
  getFormatedTime: function getFormatedTime () {
    var dateNow = new Date();
    var hour = dateNow.getHours();
    hour = hour > 10 ? hour : ('0' + hour)
    var minute = dateNow.getMinutes();
    minute = minute > 10 ? minute : ('0' + minute)
    var second = dateNow.getSeconds();
    second = second > 10 ? second : ('0' + second)
    return `${hour}${minute}${second}`
  },
  init: function init () {
    this.createNodes();
    var changeUnit = this.createChangeUnitFn()
    setInterval(() => {
      this.changeDotUnit();
      changeUnit(this.getFormatedTime(), this.arr);
    }, 500)
  }
}
