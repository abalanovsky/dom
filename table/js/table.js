const table = document.createElement('table')
for (let i = 0; i < 10; i++) {
    const tableRow = document.createElement('tr')
    table.appendChild(tableRow)
    for (let x = 1; x <= 10; x++) {
        const tableData = document.createElement('td')
        tableData.innerText = `${(10 * i) + x}`
        tableRow.appendChild(tableData)
    }
}
document.body.appendChild(table)
