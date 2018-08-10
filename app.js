function starString(num) {
    let str = ""
    for(let i = 0; i < num; i++) {
        str += "*"
    }
    return str
}

let stars = starString(8)
console.log(stars)
console.log("=====================")

function drawStars(arr) {
    let str = ""
    for(let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string') {
            let first = arr[i].charAt(0)
            for(let x = 0; x < arr[i].length; x++) {
                str += first.toLowerCase();
            }
        } else {
            for(let z = 0; z < arr[i]; z++) {
                str += "*"
            }
        }
        str += "\n"
    }
    return str
}

let x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
console.log(drawStars(x))
