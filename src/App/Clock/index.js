import React, { useState, useEffect } from "react";
import { useCurrentDate } from "./useCurrentDate";
import { StyledClock } from "./styled";

export const Clock = () => {
    const date = useCurrentDate();

    return (
        <StyledClock>
            {date.toLocaleString(undefined, {
                weekday: "long",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                day: "numeric",
                month: "long",
            })}
        </StyledClock>
    )
};

export default Clock;
