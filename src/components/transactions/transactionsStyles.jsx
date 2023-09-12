import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    container: {
        margin: "auto",
        padding: 40,
        width: "fit-content",
        boxShadow: "rgba(0, 0, 0, 0.32) 0px 4px 21px 4px",
        borderRadius: 10,
    },
    tableRow: {
        background: "#c8f4f2",
        "&:nth-child(even)": {
            background: "#ebfafa",
        }
    },
    tableHeader: {
        padding: "10px 20px",
        background: "#4ecac4",
    },
    tableData: {
        padding: "10px 20px",
        textAlign: "center",
        "&:nth-child(1)": {
            fontWeight: 600,
        }
    }

})