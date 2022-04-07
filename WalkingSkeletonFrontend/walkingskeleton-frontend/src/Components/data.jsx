import React, { useState } from "react";
import dataService from "../Services/dataService";
import { useQuery, useQueryClient } from "react-query";

function Data() {

    //#region initdata
    const queryClient = useQueryClient();

    const { data, isLoading } = useQuery('get', dataService.getTweets());

    //#endregion initdata
    return (
        <React.Fragment>
            <div>
                <h1>Hello World!</h1>
            </div>
            <div>

            </div>
        </React.Fragment>
    );
}



export default Data;
