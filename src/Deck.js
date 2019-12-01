function shuffle(array) {
    const copiedArray = array.slice(0)
    for (let i = 0; i < array.length - 1; i++) {
        let randomIndex = Math.floor(Math.random() * (i + 1))
        let temp = copiedArray[i]
        copiedArray[i] = copiedArray[randomIndex]
        copiedArray[randomIndex] = temp
    }
    return copiedArray
}
export const initializedDeck = function () {
    let cards = [
        {
            id: 1,
            colorCode: "#913CCD",
            type: "purple"
        },
        {
            id: 2,
            colorCode: "#F05F74",
            type: "pink"
        },
        {
            id: 3,
            colorCode: "#F76D3C",
            type: "orange"
        },
        {
            id: 4,
            colorCode: "#F7D842",
            type: "yellow"
        },
        {
            id: 5,
            colorCode: "#2ba7c2",
            type: "teal"
        },
        {
            id: 6,
            colorCode: "#98CA4A",
            type: "green"
        },
        {
            id: 7,
            colorCode: "#829098",
            type: "grey"
        },
        {
            id: 8,
            colorCode: "#5381E6",
            type: "blue"
        }
    ]

    // return shuffle(cards)
    return cards
}

export const cards = [
    {
        id: 1,
        colorCode: "#913CCD",
        type: "purple"
    },
    {
        id: 2,
        colorCode: "#F05F74",
        type: "pink"
    },
    {
        id: 3,
        colorCode: "#F76D3C",
        type: "orange"
    },
    {
        id: 4,
        colorCode: "#F7D842",
        type: "yellow"
    },
    {
        id: 5,
        colorCode: "#2ba7c2",
        type: "teal"
    },
    {
        id: 6,
        colorCode: "#98CA4A",
        type: "green"
    },
    {
        id: 7,
        colorCode: "#829098",
        type: "grey"
    },
    {
        id: 8,
        colorCode: "#5381E6",
        type: "blue"
    }
]