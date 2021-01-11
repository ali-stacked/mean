export interface CovidInterface {
    date: string;
    states:number;
    positive: number;
    negative: number;
    pending: number;
    hospitalizedCurrently:number;
    hospitalizedCumulative:number;
    inIcuCurrently:number;
    inIcuCumulative:number;
    onVentilatorCurrently:number;
    onVentilatorCumulative:number;
    recovered:number;
    dateChecked:string;
    death:number;
    hospitalized:number;
    totalTestResults: number;
    lastModified: string;
    total:number;
    posNeg:number;
    deathIncrease:number;
    hospitalizedIncrease:number;
    negativeIncrease: number;
    positiveIncrease:number;
    totalTestResultsIncrease:number;
}

export interface cvArr {
    covid:any[];
}
