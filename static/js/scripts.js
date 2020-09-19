(function (window) {

    $("#navbarToggle").blur(function (event) {
        var screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            $("#navbarSupportedContent").collapse('hide');
        }
    });
    fun = {}
    var homeurl = "static/snippets/home.html";
    var resurl = "static/snippets/research.html";
    var brurl = "static/snippets/brain.html";
    var musurl = "static/snippets/music.html";
    var drawurl = "static/snippets/draw.html";
    var conurl = "static/snippets/contact.html";
    var abturl = "static/snippets/about.html";
    var essurl = "static/snippets/essential.html";
    var revurl = "static/snippets/reviews.html";
    var divurl = "static/snippets/tweets.html"
    var urls = {
        "music": musurl, "home": homeurl, "research": resurl, "brain": brurl, "draw": drawurl,
        "contact": conurl, "about": abturl, "essential": essurl, "review": revurl
    };
    var menu = {
        "music": "musicdraw", "home": "home", "research": "research", "brain": "brain", "draw": "musicdraw",
        "contact": "contact", "about": "dp2", "essential": "dp2", "review": "dp2"
    };
    var insertHtml = function (selector, html) {
        var targetElem = document.querySelector(selector);
        targetElem.innerHTML = html;
    };
    var availableTags = [
        "CalmYourMind",
        "SelfCare",
        "Therapy",
        "Awareness"
    ];

    var form, email, emailError, fname, lname, fnameError, indate, lnameError, in_dateError;
    var flag = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
    var card, cardError, num, numError;
    function registercomp() {
        $(".widget button").button({
            classes: {
                "ui-button": "btn btn-primary"
            }
        });
        //form = document.getElementsByTagName('form')[0];
        //console.log("Hello!!!");
        fname = document.querySelector("#inputname1");
        fnameError = document.querySelector("#inputname1 + #fname");
        $("#inputname1").on('input', validate);
        zip = document.querySelector("#inputZip");
        zipError = $("#inputZip + #zip");
        $("#inputZip").on('input', validate);
        city = document.querySelector("#inputCity");
        cityError = document.querySelector("#inputCity + #city");
        $("#inputCity").on('input', validate);
        num = document.querySelector("#inputnum");
        numError = document.querySelector("#inputnum + #num");
        $("#inputnum").on('input', validate);
        card = document.querySelector("#inputcard4");
        cardError = document.querySelector("#inputcard4 + #card");
        $("#inputcard4").on('input', validate);
        indate = document.querySelector("#pickm");
        in_dateError = document.querySelector("#pickm + #in_date");
        $("#pickm").on('input', validate);
        lname = document.querySelector("#inputname2");
        lnameError = document.querySelector("#inputname2 + #lname");
        $("#inputname2").on('input', validate);
        email = document.querySelector('#inputEmail4');
        //console.log(email);
        emailError = document.querySelector('#inputEmail4 + #email');
        $('#inputEmail4').on('input', validate);
        //form.addEventListener('submit', submitbut);
    };
    function validate(key) {
        //console.log(key);
        if (key.srcElement === undefined) {
            key.srcElement = key.originalEvent.srcElement;
        }
        //console.log(key);
        if (key.srcElement.id === "inputEmail4") {
            //console.log("Email");
            if (email.validity.valid) {
                //console.log("Email correct");
                emailError.innerHTML = '';
                emailError.className = 'error';
                flag[0] = 0;
            } else {
                showError(key.srcElement.id);
                //console.log("Showerror");
            }
        }
        if (key.srcElement.id === "inputname1") {
            var regex = /^[A-Z][A-Za-z]*$/;
            //console.log(fname.value);
            if (regex.test(fname.value)) {
                fnameError.innerHTML = '';
                fnameError.className = 'error';
                flag[1] = 0;
            }
            else {
                showError(key.srcElement.id);
            }
        }
        if (key.srcElement.id === "inputname2") {
            var regex = /^[A-Z][A-Za-z]*$/;
            //console.log(fname.value);
            if (regex.test(lname.value)) {
                lnameError.innerHTML = '';
                lnameError.className = 'error';
                flag[2] = 0;
            }
            else {
                showError(key.srcElement.id);
            }
        }
        if (key.srcElement.id === "pickm") {
            var acdate = new Date(indate.value);
            var curdate = new Date();
            if (acdate > curdate) {
                console.log("Date");
                flag[5] = 0;
                in_dateError.innerHTML = "";
                in_dateError.className = "error";
            }
            else {
                showError(key.srcElement.id);
            }

        }
        if (key.srcElement.id === "inputcard4") {
            var regex = /^[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/;
            //console.log(fname.value);
            if (regex.test(card.value)) {
                cardError.innerHTML = '';
                cardError.className = 'error';
                flag[6] = 0;
            }
            else {
                showError(key.srcElement.id);
            }
        }
        if (key.srcElement.id === "inputnum") {
            var regex = /^[7-9][0-9]+[1-9][0-9]*$/;
            //console.log(fname.value);
            if (regex.test(num.value) && num.validity.valid) {
                numError.innerHTML = '';
                numError.className = 'error';
                flag[7] = 0;
            }
            else {
                showError(key.srcElement.id);
            }
        }
        if (key.srcElement.id === "inputCity") {
            var regex = /[A-Z][a-z]+\s*[A-Za-z]*$/;
            //console.log(fname.value);
            if (regex.test(city.value) && city.validity.valid) {
                cityError.innerHTML = '';
                cityError.className = 'error';
                flag[8] = 0;
            }
            else {
                showError(key.srcElement.id);
            }
        }
        if (key.srcElement.id === "inputZip") {
            var regex = /^[1-9]{1}[0-9]{2}[0-9]{3}$/;
            //console.log(fname.value);
            if (regex.test(zip.value) && zip.validity.valid) {
                zipError.innerHTML = '';
                zipError.className = 'error';
                flag[10] = 0;
            }
            else {
                showError(key.srcElement.id);
            }
        }

    };

    fun.submitbut = function () {
        //console.log("Button pressed");
        for (i = 0; i < flag.length; i++) {
            if (flag[i] === -1) {
                if (i === 3) {
                    alert("Select your gender");
                }
                else if (i == 4) {
                    alert("Select your purpose");
                }
                else {
                    alert("Please fill up the form correctly");
                }
                //event.preventDefault();
                console.log(i);
                return false;
            }
        }
        var send_data = new Object();
        send_data.fname = fname.value;
        send_data.lname = lname.value;
        send_data.gender = $('input[name=Gender]:checked').val()
        send_data.reason = $('input[name=Purpose]:checked').val()
        send_data.num_people = document.querySelector("#ControlSelect1").value;
        send_data.date = indate.value;
        send_data.email = email.value;
        send_data.card_num = card.value;
        send_data.contact = num.value;
        send_data.city = city.value;
        send_data.state = document.querySelector("#inputState").value;
        send_data.zip = zip.value;
        send_data.promo = document.querySelector("#promo").value;

        mydata = JSON.stringify(send_data);
        //console.log(send_data);

        $.ajax({
            type: 'POST',
            url: "/putjson",
            datatype: 'json',
            data: { 'data': mydata }
        }).done(function (msg) {
            alert("Data Saved: " + msg);
        });

        //event.preventDefault();
        try {
            var disp = JSON.stringify($("#myform").serializeArray())
            alert(disp);
            //console.log($("#myform").serializeArray());
            alert("Thank you for reaching out to us! We will reach out shortly");
        }
        catch (err) {
            console.log(err);
            console.log($("#myform"));
        }
        return true;
        //show("home");
    };
    fun.radbut = function (ele) {
        if (ele.name === "Purpose") {
            flag[4] = 0;
        }
        else {
            flag[3] = 0;
            //console.log(ele.value);
        }
    };

    function showError(key) {

        if (key === "inputEmail4") {
            flag[0] = -1;
            if (email.validity.valueMissing) {
                emailError.innerHTML = 'You need to enter an e-mail address.';
            } else if (email.validity.typeMismatch) {
                emailError.innerHTML = 'Entered value needs to be an e-mail address.';
            } else if (email.validity.tooShort) {
                emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
            }
            emailError.className = 'error active';
        }
        if (key === "inputname1") {
            flag[1] = -1;
            if (fname.value === "") {
                fnameError.innerHTML = "You need to enter name.";
            }
            else {
                fnameError.innerHTML = "Ensure first letter is capital and no number/spec characters exists.";
            }
            fnameError.className = "error active";
        }
        if (key === "inputname2") {
            flag[2] = -1;
            if (fname.value === "") {
                lnameError.innerHTML = "You need to enter name.";
            }
            else {
                lnameError.innerHTML = "Ensure first letter is capital and no number/spec characters exists.";
            }
            lnameError.className = "error active";
        }
        if (key === "pickm") {
            flag[5] = -1;
            in_dateError.innerHTML = "Date cannot be before now.";
            in_dateError.className = "error active";
        }
        if (key === "inputcard4") {
            flag[6] = -1;
            if (card.value === "") {
                cardError.innerHTML = "You need to enter card details.";
            }
            else if (card.validity.tooShort) {
                cardError.textContent = `Card number should be at least ${card.minLength} characters; you entered ${card.value.length}.`;
            }
            else {
                cardError.innerHTML = "Enter valid card details.";
            }
            cardError.className = "error active";
        }
        if (key === "inputnum") {
            flag[7] = -1;
            if (num.value === "") {
                numError.innerHTML = "You need to enter card details.";
            }
            else if (num.validity.tooShort) {
                numError.textContent = `Number should be at least ${num.minLength} characters; you entered ${num.value.length}.`;
            } else if (num.validity.tooLong) {
                numError.textContent = `Number should be at most ${num.maxLength} characters; you entered ${num.value.length}.`;
            }
            else {
                numError.innerHTML = "Enter valid card details.";
            }
            numError.className = "error active";
        }
        if (key === "inputCity") {
            flag[8] = -1;
            if (city.value === "") {
                cityError.innerHTML = "You need to enter city.";
            }
            else {
                cityError.innerHTML = "Enter valid city.";
            }
            cityError.className = "error active";
        }
        if (key === "inputZip") {
            flag[10] = -1;
            if (zip.value === "" || zip.value === null) {
                zipError.innerHTML = "You need to enter ZipCode.";
            }
            else {
                zipError.innerHTML = "Enter valid Zip.";
            }
            zipError.className = "error active";
        }
    };
    fun.sel = function () {
        var temp = document.querySelector("#inputState");
        tempError = document.querySelector("#inputState + #state");
        if (temp.value === "" || temp.value === null) {
            flag[9] = -1;
            tempError.innerHTML = "Select valid State."
            tempError.className = "error active"
        }
        else {
            flag[9] = 0;
            tempError.innerHTML = ""
            tempError.className = "error"
        }
    }


    var insertProperty = function (string, propName, propValue) {
        var propToReplace = "{{" + propName + "}}";
        string = string
            .replace(new RegExp(propToReplace, "g"), propValue);
        return string;
    };

    function refresh() {
        //xmlurl  = "static/js/tweets.xml";
        xmlurl = "/getxml";
        $ajaxUtils.sendGetRequest(
            xmlurl,
            function (myxml) {
                window.xml = new DOMParser().parseFromString(myxml, "text/xml");
                console.log("XML loaded");
                setDivs();
            },
            false, false);


    };
    function switchactive(menuit) {
        if (fun.lastact !== undefined) {
            var classes = document.querySelector("#" + fun.lastact).className;
            classes = classes.replace(new RegExp("active", "g"), "");
            document.querySelector("#" + fun.lastact).className = classes;
        }
        var classes = document.querySelector("#" + menuit).className;
        if (classes.indexOf("active") === -1) {
            classes += " active";
        }
        document.querySelector("#" + menuit).className = classes;
        fun.lastact = menuit;

    };
    fun.show = function (urlkey) {
        var url = urls[urlkey];
        var actmenu = menu[urlkey];
        switchactive(actmenu);
        $("#maincontent").fadeOut(800, function () {
            $ajaxUtils.sendGetRequest(
                url,
                function (response) {
                    $("#maincontent").html(response).fadeIn(800);
                    if (urlkey === "contact") {
                        //console.log("Contact")
                        registercomp();
                        $('#wrapper').dialog({
                            autoOpen: false,
                            title: 'Basic Dialog'
                        });
                    }
                    if (urlkey == "review") {
                        refresh();
                        $("#input_review").autocomplete({
                            source: availableTags
                        });
                    }
                    if (urlkey == "draw") {
                        $("#green_row").draggable();
                        $("#backgrounds>div>div").droppable({
                            drop: function (event, ui) {
                                $(this)
                                    .toggleClass("wclass")
                                    .toggleClass("backdrop");

                            }
                        });
                        var t = "";
                        for (i = 1; i < 13; i++) {
                            t = t + "#mygreen" + String(i) + ",";
                        }
                        t = t.slice(0, -1);
                        console.log(t);
                        $(t).mouseover(function (event) {
                            var col = $("#" + event.originalEvent.srcElement.id).css("backgroundColor");
                            var op = $("#" + event.originalEvent.srcElement.id).css("opacity");
                            $("#temp").css("backgroundColor", col);
                            $("#temp").css("opacity", op);
                            $("#temp").show();
                        });
                        $("#temp").dblclick(function (event) {
                            $("#temp").hide();
                        })
                    }
                }, false, false);
        });
    }
    $(document).ready(fun.show("home"));

    //console.log("Home loaded");
    //window.onload = showHome();

    fun.callsave = function () {
        myxml = window.xml;
        console.log(myxml);
        if (typeof window.XMLSerializer == "undefined") {
            throw new Error("No modern XML serializer found.");
        }
        var s = new XMLSerializer();
        //console.log(myxml.childNodes[1]);
        var xmlString = s.serializeToString(myxml.childNodes[1]);
        xmlString = "<?xml version = '1.0' encoding = 'utf-8' ?>\n<!DOCTYPE tweets SYSTEM 'tweets.dtd'>\n" + xmlString;
        fileName = "tweets.xml";
        save(xmlString, fileName);
    };
    var save = function (text, fileName) {
        var a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        var data = new Blob([text], { type: 'text/xml' });
        var textFile = null;
        if (textFile !== null) {
            window.URL.revokeObjectURL(textFile);
        }

        textFile = window.URL.createObjectURL(data);
        a.href = textFile;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(textFile);
    };
    fun.viewXML = function () {
        myxml = window.xml;
        //console.log(myxml);
        if (typeof window.XMLSerializer == "undefined") {
            throw new Error("No modern XML serializer found.");
        }
        var s = new XMLSerializer();
        var xmlString = s.serializeToString(myxml.childNodes[1]);
        xmlString = "<?xml version = '1.0' encoding = 'utf-8' ?>\n<!DOCTYPE tweets SYSTEM 'tweets.dtd'>\n" + xmlString;
        fileName = "tweets.xml";
        //console.log(xmlString);
        var data = new Blob([xmlString], { type: 'text/xml' });
        var textFile = null;
        if (textFile !== null) {
            window.URL.revokeObjectURL(textFile);
        }
        textFile = window.URL.createObjectURL(data);
        window.open(textFile);

    };

    fun.addxml = function () {
        $("#maincontent").slideUp(500);
        var mydate = new Date();
        var date = mydate.getDate() + "-" + (mydate.getMonth() + 1) + "-" + mydate.getFullYear();
        //console.log(date);
        var time = mydate.getHours() + ":" + mydate.getMinutes();
        //console.log(time);
        myxml = window.xml;
        var text = document.querySelector("#input_review").value


        if (text !== "") {
            var num = myxml.childNodes[1].children.length + 1;

            var newel = myxml.createElement("tweet");
            newAtt1 = myxml.createAttribute("id");
            newAtt1.nodeValue = num;
            newAtt2 = myxml.createAttribute("report");
            newAtt2.nodeValue = "False";
            newel.setAttributeNode(newAtt1);
            newel.setAttributeNode(newAtt2);
            newc1 = myxml.createElement("text");
            newc1.innerHTML = text;
            newc2 = myxml.createElement("date");
            newc2.innerHTML = date;
            newc3 = myxml.createElement("time");
            newc3.innerHTML = time;
            newel.appendChild(newc1);
            newel.appendChild(newc2);
            newel.appendChild(newc3);
            myxml.childNodes[1].appendChild(newel);
            console.log(myxml);
            window.xml = myxml;
            setDivs();
            store();
            document.querySelector("#input_review").value = "";
        }
    };
    function store() {
        myxml = window.xml;
        if (typeof window.XMLSerializer == "undefined") {
            throw new Error("No modern XML serializer found.");
        }
        var s = new XMLSerializer();
        var xmlString = s.serializeToString(myxml.childNodes[1]);
        xmlString = "<?xml version = '1.0' encoding = 'utf-8' ?>\n<!DOCTYPE tweets SYSTEM 'tweets.dtd'>\n" + xmlString;
        $.ajax({
            type: 'POST',
            url: "/putxml",
            datatype: 'string',
            data: { 'data': xmlString }
        });
    };

    fun.report = function (id) {
        node = window.xml.childNodes[1].children[parseInt(id)];
        //console.log(node);
        node.setAttribute("report", "True");
        store();
        setDivs();
        //console.log(text);

    }
    // run the currently selected effect
    function runEffect(key) {
        // Run the effect
        //console.log(key);
        var y = $(key);
        for (i = 0; i < y.length; i++) {
            $(y[i]).fadeIn(15000);
        }
        function callback(event) {
            setTimeout(function () {
                $(y[i]).removeAttr("style").hide().fadeIn();
            }, 1000);
        };
        //$(key).effect("Fade", {}, 500, callback);
    };


    function setDivs() {
        //myxml = window.xml;
        toInsert = "";
        var temp, date, time, text;
        var t = "";
        $ajaxUtils.sendGetRequest(
            divurl,
            function (snippet) {
                //console.log(snippet);
                //console.log(typeof snippet);
                for (i = 0; i < window.xml.childNodes[1].children.length; i++) {
                    temp = ""
                    if (window.xml.childNodes[1].children[i].getAttribute("report") === "False") {
                        text = window.xml.childNodes[1].children[i].children[0].innerHTML;
                        date = window.xml.childNodes[1].children[i].children[1].innerHTML;
                        time = window.xml.childNodes[1].children[i].children[2].innerHTML;
                        temp = insertProperty(snippet, "tweets", text);
                        temp = insertProperty(temp, "funct", "fun.report('" + (i) + "')");
                        temp = insertProperty(temp, "date", date);
                        temp = insertProperty(temp, "time", time);
                        temp = insertProperty(temp, "name", "box" + String(i));
                        toInsert = toInsert + temp;
                        t = t + "#box" + String(i) + ",";
                    }
                }
                //console.log(toInsert);
                insertHtml("#mycontent", toInsert);
                $("#maincontent").slideDown(1500);
                $("#mycontent").hide().fadeIn(2500);
                $("#mycontent").selectable();
                //t = t.slice(0, -1);
                //runEffect(t);
                //return false;
            },
            false, false);



        //document.addEventListener('DOMContentLoaded',registercomp(),false,false);



        //console.log("Loaded xml");
        window.fun = fun;
    }
})(window);


