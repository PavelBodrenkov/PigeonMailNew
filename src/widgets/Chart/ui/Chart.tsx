import React from 'react';
import cls from './Chart.module.scss';
import {SearchChart} from "shared/ui/SearchChart/SearchChart";
import {ChartList} from "widgets/ChartList";

export const Chart = () => {
    return (
        <div>
            <SearchChart />
            <ChartList />
        </div>
    );
};
