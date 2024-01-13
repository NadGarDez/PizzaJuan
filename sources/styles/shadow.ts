
type shadowType ={
    principalShadow:any,
    lightShadow:any
}

export const shadows: shadowType = {
    principalShadow: {
        shadowColor: "#706262",
        shadowOffset: {
        width: 0,
        height: 4,
        },
        shadowOpacity:  0.19,
        shadowRadius: 5.62,
        elevation: 6
    },

    lightShadow: {
        shadowColor: "#706262",
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity:  0.16,
        shadowRadius: 1.51,
        elevation: 2
    }
}