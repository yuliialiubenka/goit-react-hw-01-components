import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    container: {
        margin: "auto",
        padding: 40,
        width: "fit-content",
        display: "flex",
        gap: 40,
        boxShadow: "rgba(0, 0, 0, 0.32) 0px 4px 21px 4px",
        borderRadius: 10,
    },
    avatar: {
        borderRadius: 10,
        boxShadow: "rgba(0, 0, 0, 0.32) 0px 4px 21px 4px",
    },
    infoWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    description: {
        display: "flex",
        flexDirection: "column",
        gap: 20
    },
    stats: {
        display: "flex",
        flexDirection: "column",
        gap: 4,
    },
    statsItem: {
        display: "flex",
        gap: 12,
        "& span:nth-child(1)": {
            fontWeight: 700,
        }
    },
    username: {
        fontSize: 30,
    },
    tag: {
        fontStyle: "italic",
    },
    location: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        fontStyle: 'italic',
        "&:before": {
            content: '""',
            display: "block",
            width: 24,
            height: 24,
            backgroundRepeat: "no-repeat",
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' id='location'%3E%3Cpath d='M12,2a8,8,0,0,0-8,8c0,5.4,7.05,11.5,7.35,11.76a1,1,0,0,0,1.3,0C13,21.5,20,15.4,20,10A8,8,0,0,0,12,2Zm0,17.65c-2.13-2-6-6.31-6-9.65a6,6,0,0,1,12,0C18,13.34,14.13,17.66,12,19.65ZM12,6a4,4,0,1,0,4,4A4,4,0,0,0,12,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,12Z'%3E%3C/path%3E%3C/svg%3E")`,
        }
    }
});