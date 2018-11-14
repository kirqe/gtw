(function () {
  function buildCsv() {
    var source = document.querySelector('#source').value.split("\n")
    var result = document.querySelectorAll('#result_box span')
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
    var rightRow = document.querySelector('#gt-lang-right')
    var csvBtn = document.createElement('a');
    csvBtn.setAttribute('class', 'csv-btn')
    var text = document.createTextNode("Save this deck")
    csvBtn.appendChild(text);
    rightRow.appendChild(csvBtn);
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
