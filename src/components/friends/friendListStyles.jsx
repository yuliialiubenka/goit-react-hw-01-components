import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    container: {
        margin: "auto",
        padding: 40,
        width: "fit-content",
        boxShadow: "rgba(0, 0, 0, 0.32) 0px 4px 21px 4px",
        borderRadius: 10,
    },
    list: {
        display: "flex",
        flexDirection: "column",
        gap: 12,
    },
    item: {
        display: "flex",
        gap: 12,
        alignItems: "center",
        padding: 10,
        borderRadius: 10,
        background: "#4ecac4",
    },
    status: {
        display: "block",
        width: 16,
        height: 16,
        borderRadius: "50%",
        background: "#f27373",
        "&[data-is-online='true']": {
            background: "#aef4ae",
        }
    },
    avatar: {
        background: "#c8f4f2",
        borderRadius: "50%"
    },
    name: {
        fontWeight: 600,
        minWidth: 200
    }
});
