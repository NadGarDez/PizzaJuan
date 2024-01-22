
type shadowType ={
    principalShadow:any,
    lightShadow:any,
    other:any
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
    },
    other: {

shadowColor: "#000000",
shadowOffset: {
  width: 0,
  height: 1,
},
shadowOpacity:  0.15,
shadowRadius: 1.00,
elevation: 1
    }
}