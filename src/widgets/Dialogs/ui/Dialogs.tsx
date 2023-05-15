import React from 'react';
import {SearchChart} from "shared/ui/SearchChart/SearchChart";
import {DialogList} from "widgets/DialogList";

export const Dialogs = () => {
    return (
        <div>
            <SearchChart />
            <DialogList />
        </div>
    );
};