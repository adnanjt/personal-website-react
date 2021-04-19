import React from "react";
import { Typography } from "@material-ui/core";

export const Today = () => {
    const date = new Date();
    const hour = date.getHours();
    const time = `${
        (hour < 4 && "night") ||
        (hour < 12 && "morning") ||
        (hour < 18 && "afternoon") ||
        (hour < 22 && "evening") ||
        "night"
    }`;
    const days = [
        "weekend",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "weekend",
    ];
    const day = days[date.getDay()];

    return (
        <Typography variant="h5" component="h2" gutterBottom>
            Have a good {day === "weekend" ? day : time}.
        </Typography>
    );
};
