(function () {
  function buildCsv() {
    var source = document.querySelector('#source').value.split("\n").filter((w) => w != "")
    var result = document.querySelectorAll('.translation span')
    var csv = ""

    result = Object.values(result).map((word) => word.innerText)

    for (var i = 0; i < source.length; i++) {
      csv += `${source[i]}; ${result[i]}\n`
    }
    return csv
  }

  function getDate() {
    var d = new Date()
    return `${d.getHours()}.${d.getMinutes()}-${d.getDate()}.${d.getMonth()}.${d.getFullYear()}`
  }

  function addCsvButton() {
    var btnsRow = document.querySelector('.input-button-container')
    var csvBtn = document.createElement('a');
    csvBtn.setAttribute('class', 'csv-btn')
    var text = document.createTextNode("Save words")
    csvBtn.appendChild(text);
    btnsRow.appendChild(csvBtn);
  }

  function init() {
    addCsvButton()
    var csvBtn = document.querySelector('.csv-btn')
    csvBtn.addEventListener('click', (e) => {
      let csv = buildCsv()
      csvBtn.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(csv));
      csvBtn.setAttribute('download', `words-${getDate()}.csv`);
    })
  }

  init()
})();
