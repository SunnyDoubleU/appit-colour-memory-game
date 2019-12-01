export const shuffle = (array) => {
    const copiedArray = array.slice(0)
    for (let i = 0; i < array.length - 1; i++) {
        let randomIndex = Math.floor(Math.random() * (i + 1))
        let temp = copiedArray[i]
        copiedArray[i] = copiedArray[randomIndex]
        copiedArray[randomIndex] = temp
    }
    return copiedArray
}

export const setScore = (name, score) => {
    var oldScores = getScore()
    var scoreData = {
        "name": name,
        "score": score
    }
    if (oldScores === null) {
        localStorage.setItem("allScores", JSON.stringify([scoreData]))
    } else if (oldScores.length > 0) {
        oldScores.push(scoreData)
        localStorage.setItem("allScores", JSON.stringify(oldScores))
    }
    return name
}


export const getScore = () => {
    var scores = JSON.parse(localStorage.getItem("allScores"))
    if (scores !== null && scores.length > 1) {
        scores.sort((a, b) => Number(b.score) - Number(a.score));
        return scores
    } else {
        return JSON.parse(localStorage.getItem("allScores"))
    }

}