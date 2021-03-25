import React, {FC} from 'react';
import {Typography} from "@material-ui/core";

interface Props {
    headerText: string;
}

const PageHeader: FC<Props> = ({headerText}) => {
    return (
        <>
            <Typography variant={"h2"}>{headerText}</Typography>
        </>
    )
}
export default PageHeader;