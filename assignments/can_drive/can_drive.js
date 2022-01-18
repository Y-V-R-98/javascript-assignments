function CanDrive(hasDrivingLiscence, isTired, isSober) {
    // Write you code here
    if (hasDrivingLiscence === false){
        return("You cannot drive")
    } else {
        if (isTired == true) {
            return("You shouldn't drive")
        } else {
            if (isSober == true) {
                return("You can drive")
            } else {
                return("You shouldn't drive")
            }
        }
    }
}

module.exports = CanDrive;
