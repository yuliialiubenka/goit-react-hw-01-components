import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    section: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 80,
        "&:nth-child(1)": {
            paddingTop: 80,
        }
    }
});