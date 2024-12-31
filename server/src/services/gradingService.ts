type GradeParams = {
    graderType: string;
    graderConfig?: any;
    responseText: string;
    expectedOutput?: string;
    inputMessage: string;
  };
  
  export function gradeResponse(params: GradeParams): number {
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
  
  function exactMatchGrader(response: string, expected?: string): number {
    if (!expected) return 0;
    return response.trim() === expected.trim() ? 1 : 0;
  }
  
  function containsKeywordsGrader(response: string, config: any): number {
    if (!config || !config.keywords) return 0;
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
  