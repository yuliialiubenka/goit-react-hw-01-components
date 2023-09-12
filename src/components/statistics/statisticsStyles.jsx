import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    container: {
        margin: "auto",
        padding: 40,
        width: "fit-content",
        boxShadow: "rgba(0, 0, 0, 0.32) 0px 4px 21px 4px",
        borderRadius: 10,
    },
    title: {
        fontSize: 30,
        textAlign: "center",
        marginBottom: 24,
    },
    list: {
        display: "flex",
        gap: 20,
    },
    listItem: {
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: 20,
        borderRadius: 10,
        textAlign: "center",
        width: "calc((100% - 4 * 20px) / 5)"
    },
    label: {
        fontSize: 18
    },
    percentage: {
        fontSize: 24,
        fontWeight: 600,
    }
});