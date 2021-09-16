function letterConverter(score){
    if (score < 50) {
        return 'F'
    } else if (score <= 60) { 
        return 'D'
    } else if (score <= 70) { 
        return 'C'
    } else if (score <= 80) { 
        return 'B'
    } else if (score <= 90) { 
        return 'A'
    } 
}

export default letterConverter