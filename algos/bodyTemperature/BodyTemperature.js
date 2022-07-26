'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'bodyTemperature' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING doctorName
 *  2. INTEGER diagnosisId
 * API URL: https://jsonmock.hackerrank.com/api/medical_records?page={page_no}
 */


async function bodyTemperature(doctorName, diagnosisId) {
    const fetchMedData = await fetch({url: "https://jsonmock.hackerrank.com/api/medical_records", method: "GET"});
    const response = fetchMedData.json().data;
        const temperatures = [];

    for(let i=response.page; i < response.total_pages; i++){
        const fetchMedRecords = await fetch({url: `https://jsonmock.hackerrank.com/api/medical_records?page=${i}`, method: "GET"});
        const res = fetchMedRecords.json().data;
        if(res.doctor === doctorName && res.diagnosis.id === diagnosisId){
            if(temperatures[0] > res.vitals.bodyTemperature) {
                temperatures.unshift(res.vitals.bodyTemperature)
            } else {
                
            
           temperatures.push(res.vitals.bodyTemperature);
            }
        }
    }
    return temperatures;
}

async function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const doctorName = readLine();

    const diagnosisId = parseInt(readLine().trim(), 10);

    const result = await bodyTemperature(doctorName, diagnosisId);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
