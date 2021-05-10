function showHoroscop() {
    const yourHoroscop = document.getElementById('birthMonth').value
    if (yourHoroscop == "JAN") {
        resOne.innerHTML = "<img src=\'assets/img/icon_aquarius.png\' width=\'auto\'>"
        resTwo.innerHTML = "A Q U A R I U S"
        resThree.innerHTML = "Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great…"
    } else if (yourHoroscop == "FEB") {
        resOne.innerHTML = "<img src=\'assets/img/icon_pisces.png\' width=\'auto\'>"
        resTwo.innerHTML = "P I S C E S"
        resThree.innerHTML = "Communication is very important today—written, spoken, and even nonverbal body language will all…"
    } else if (yourHoroscop == "MAR") {
        resOne.innerHTML = "<img src=\'assets/img/icon_aries.png\' width=\'auto\'>"
        resTwo.innerHTML = "A R I E S"
        resThree.innerHTML = "Today your patience might be tested when one or more of your projects gets put on hold by someone…"
    } else if (yourHoroscop == "APR") {
        resOne.innerHTML = "<img src=\'assets/img/icon_taurus.png\' width=\'auto\'>"
        resTwo.innerHTML = "T A U R U S"
        resThree.innerHTML = "Your intense energy makes you a great candidate for a leadership position right now, so if you are…"
    } else if (yourHoroscop == "MAY") {
        resOne.innerHTML = "<img src=\'assets/img/icon_gemini.png\' width=\'auto\'>"
        resTwo.innerHTML = "G E M I N I"
        resThree.innerHTML = "If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that…"
    } else if (yourHoroscop == "JUN") {
        resOne.innerHTML = "<img src=\'assets/img/icon_cancer.png\' width=\'auto\'>"
        resTwo.innerHTML = "C A N C E R"
        resThree.innerHTML = "Too many different elements in your life are overlapping with each other right now—and it's your…"
    } else if (yourHoroscop == "JUL") {
        resOne.innerHTML = "<img src=\'assets/img/icon_leo.png\' width=\'auto\'>"
        resTwo.innerHTML = "L E O"
        resThree.innerHTML = "The issues you'll be dealing with today are very complicated ones—you will have to navigate your…"
    } else if (yourHoroscop == "AUG") {
        resOne.innerHTML = "<img src=\'assets/img/icon_virgo.png\' width=\'auto\'>"
        resTwo.innerHTML = "V I R G O"
        resThree.innerHTML = "You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all…"
    } else if (yourHoroscop == "SEPT") {
        resOne.innerHTML = "<img src=\'assets/img/icon_libra.png\' width=\'auto\'>"
        resTwo.innerHTML = "L I B R A"
        resThree.innerHTML = "Pick a cultural event that's coming up and get some tickets for it today. You guys, are just awesome!"
    } else if (yourHoroscop == "OCT") {
        resOne.innerHTML = "<img src=\'assets/img/icon_scorpio.png\' width=\'auto\'>"
        resTwo.innerHTML = "S C O R P I O"
        resThree.innerHTML = "Someone will challenge a belief that you've held for a very long time today—and they will say an…"
    } else if (yourHoroscop == "NOV") {
        resOne.innerHTML = "<img src=\'assets/img/icon_sagittarius.png\' width=\'auto\'>"
        resTwo.innerHTML = "S A G I T T A R U S"
        resThree.innerHTML = "Someone in your life needs to step up and take on more responsibility—and you need to tell them to…"
    } else if (yourHoroscop == "DEC") {
        resOne.innerHTML = "<img src=\'assets/img/icon_capricorn.png\' width=\'auto\'>"
        resTwo.innerHTML = "C A P R I C O R N"
        resThree.innerHTML = "Breaking the rules is not always a bad thing—especially if the rules limit your creativity."
    }
}



