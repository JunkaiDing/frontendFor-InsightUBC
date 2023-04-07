
const transformQueyParam = ({course, datasetID}) => {
    return {
        "WHERE": {
            "IS": {
                [`${datasetID}_dept`]: course
            }
        },
        "OPTIONS": {
            "COLUMNS": [
                `${datasetID}_dept`,
                `${datasetID}_id`,
                `${datasetID}_avg`,
            ],
            "ORDER": `${datasetID}_avg`
        }
    }
}

export {
    transformQueyParam
}
    