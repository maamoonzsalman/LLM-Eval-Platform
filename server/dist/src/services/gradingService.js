"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gradeResponse = gradeResponse;
function gradeResponse(params) {
    const { graderType } = params;
    switch (graderType) {
        case 'exact-match':
            return exactMatchGrader(params.responseText, params.expectedOutput);
        case 'contains-keywords':
            return containsKeywordsGrader(params.responseText, params.graderConfig);
        // etc...
        default:
            return 0;
    }
}
function exactMatchGrader(response, expected) {
    if (!expected)
        return 0;
    return response.trim() === expected.trim() ? 1 : 0;
}
function containsKeywordsGrader(response, config) {
    if (!config || !config.keywords)
        return 0;
    const text = response.toLowerCase();
    let matches = 0;
    for (const kw of config.keywords) {
        if (text.includes(kw.toLowerCase())) {
            matches++;
        }
    }
    // you could scale or do partial scoring
    return matches;
}
