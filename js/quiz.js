/*variable om te onthouden of een persoon al de vraag heeft beantwoord*/
var q1_is = 0;
var q2_is = 0;
var q3_is = 0;
var q4_is = 0;
var q5_is = 0;
var q6_is = 0;
var q7_is = 0;
var q8_is = 0;
/*houdt bij hoeveel goede antwoorden er zijn gegeven*/
var good_ans = 0;

/*de functie aanvraag die wordt aangeroepen als een vraag wordt beantwoord*/
function q1(ans) {
    if (q1_is == 0) {
        q1_is = 1;
        if (ans == 3) {
		    document.getElementById("q1_dis").innerHTML = "Goed";
            good_ans = good_ans + 1;
	    } else {
		    document.getElementById("q1_dis").innerHTML = "Fout";
	    }
    } else {
        alert("je hebt de vraag al beantwoord");
    }
};

function q2(ans) {
    if (q2_is == 0) {
        q2_is = 1;
        if (ans == 2) {
		    document.getElementById("q2_dis").innerHTML = "Goed";
            good_ans = good_ans + 1;
	    } else {
		    document.getElementById("q2_dis").innerHTML = "Fout";
	    }
    } else {
        alert("je hebt de vraag al beantwoord");
    }
};

function q3(ans) {
    if (q3_is == 0) {
        q3_is = 1;
        if (ans == 1) {
		    document.getElementById("q3_dis").innerHTML = "Goed";
            good_ans = good_ans + 1;
	    } else {
		    document.getElementById("q3_dis").innerHTML = "Fout";
	    }
    } else {
        alert("je hebt de vraag al beantwoord");
    }
};

function q4(ans) {
    if (q4_is == 0) {
        q4_is = 1;
        if (ans == 3) {
		    document.getElementById("q4_dis").innerHTML = "Goed";
            good_ans = good_ans + 1;
	    } else {
		    document.getElementById("q4_dis").innerHTML = "Fout";
	    }
    } else {
        alert("je hebt de vraag al beantwoord");
    }
};

function q5(ans) {
    if (q5_is == 0) {
        q5_is = 1;
        if (ans == 3) {
		    document.getElementById("q5_dis").innerHTML = "Goed";
            good_ans = good_ans + 1;
	    } else {
		    document.getElementById("q5_dis").innerHTML = "Fout";
	    }
    } else {
        alert("je hebt de vraag al beantwoord");
    }
};

function q6(ans) {
    if (q6_is == 0) {
        q6_is = 1;
        if (ans == 2) {
		    document.getElementById("q6_dis").innerHTML = "Goed";
            good_ans = good_ans + 1;
	    } else {
		    document.getElementById("q6_dis").innerHTML = "Fout";
	    }
    } else {
        alert("je hebt de vraag al beantwoord");
    }
};

function q7(ans) {
    if (q7_is == 0) {
        q7_is = 1;
        if (ans == 2) {
		    document.getElementById("q7_dis").innerHTML = "Goed";
            good_ans = good_ans + 1;
	    } else {
		    document.getElementById("q7_dis").innerHTML = "Fout";
	    }
    } else {
        alert("je hebt de vraag al beantwoord");
    }
};

function q8(ans) {
    if (q8_is == 0) {
        q8_is = 1;
        if (ans == 3) {
		    document.getElementById("q8_dis").innerHTML = "Goed";
            good_ans = good_ans + 1;
	    } else {
		    document.getElementById("q8_dis").innerHTML = "Fout";
	    }
    } else {
        alert("Je hebt de vraag al beantwoord");
    }
};

/*bereekend de uitslag van de quiz*/
function check_score() {
    if (good_ans <= 2) {
        document.getElementById("score_dis").innerHTML = "Je hebt er " + good_ans + " van de 8 goed, je bent een noob maar geef niet op." + document.getElementById("score_dis").innerHTML;
    } else if (good_ans <= 4) {
        document.getElementById("score_dis").innerHTML = "Je hebt er " + good_ans + " van de 8 goed, je bent een rookey." + document.getElementById("score_dis").innerHTML;
    } else if (good_ans <= 7) {
        document.getElementById("score_dis").innerHTML = "Je hebt er " + good_ans + " van de 8 goed! je bent een Pro!" + document.getElementById("score_dis").innerHTML;
    } else {
        document.getElementById("score_dis").innerHTML = "Je hebt er " + good_ans + " van de 8 goed! je bent een echte goeroe!" + document.getElementById("score_dis").innerHTML;
    }
};
