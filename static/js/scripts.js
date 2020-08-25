(function(window){
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
    var divurl  = "static/snippets/tweets.html"
    urls = {"music":musurl,"home":homeurl,"research":resurl,"brain":brurl,"draw":drawurl,
"contact":conurl,"about":abturl,"essential":essurl,"review":revurl};
    menu = {"music":"musicdraw","home":"home","research":"research","brain":"brain","draw":"musicdraw",
"contact":"contact","about":"dp2","essential":"dp2","review":"dp2"};
    var insertHtml = function (selector, html) {
      var targetElem = document.querySelector(selector);
      targetElem.innerHTML = html;
    };
    var form,email,emailError,fname,lname,fnameError,indate,lnameError,in_dateError;
    var flag = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
    var card,cardError,num,numError;
    function registercomp(){
        form  = document.getElementsByTagName('form')[0];
        //console.log("Hello!!!");
        fname = document.querySelector("#inputname1");
        fnameError = document.querySelector("#inputname1 + #fname");
        fname.addEventListener('input',validate);
        zip = document.querySelector("#inputZip");
        zipError = document.querySelector("#inputZip + #zip");
        zip.addEventListener('input',validate);
        city = document.querySelector("#inputCity");
        cityError = document.querySelector("#inputCity + #city");
        city.addEventListener('input',validate);
        num = document.querySelector("#inputnum");
        numError = document.querySelector("#inputnum + #num");
        num.addEventListener('input',validate);
        card = document.querySelector("#inputcard4");
        cardError = document.querySelector("#inputcard4 + #card");
        card.addEventListener('input',validate);
        indate = document.querySelector("#pickm");
        in_dateError = document.querySelector("#pickm + #in_date");
        indate.addEventListener('input',validate);
        lname = document.querySelector("#inputname2");
        lnameError = document.querySelector("#inputname2 + #lname");
        lname.addEventListener('input',validate);
        email = document.getElementById('inputEmail4');
        emailError = document.querySelector('#inputEmail4 + #email');
        email.addEventListener('input', validate);
        form.addEventListener('submit', submitbut);
    };
    function validate(key){
        //console.log(key);
        if(key.srcElement.id==="inputEmail4"){
            if (email.validity.valid) {
            emailError.innerHTML = ''; 
            emailError.className = 'error';
            flag[0] = 0;
            } else {
                showError(key.srcElement.id);
                //console.log("Showerror");
            }
        }
        if(key.srcElement.id==="inputname1"){
            var regex = /^[A-Z][A-Za-z]*$/ ;
            //console.log(fname.value);
            if(regex.test(fname.value) ){
                fnameError.innerHTML = '';
                fnameError.className = 'error';
                flag[1] = 0;
            }
            else{
                showError(key.srcElement.id);
            }
        }
        if(key.srcElement.id==="inputname2"){
            var regex = /^[A-Z][A-Za-z]*$/ ;
            //console.log(fname.value);
            if(regex.test(lname.value) ){
                lnameError.innerHTML = '';
                lnameError.className = 'error';
                flag[2] = 0;
            }
            else{
                showError(key.srcElement.id);
            }
        }
        if(key.srcElement.id==="pickm"){
            var acdate = new Date(indate.value);
            var curdate = new Date();
            if(acdate>curdate){
                console.log("Date");
                flag[5] = 0;
                in_dateError.innerHTML = "";
                in_dateError.className = "error";
            }
            else{
                showError(key.srcElement.id);
            }
            
        }
        if(key.srcElement.id==="inputcard4"){
            var regex = /^[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/ ;
            //console.log(fname.value);
            if(regex.test(card.value)){
                cardError.innerHTML = '';
                cardError.className = 'error';
                flag[6] = 0;
            }
            else{
                showError(key.srcElement.id);
            }
        }
        if(key.srcElement.id==="inputnum"){
            var regex = /^[7-9][0-9]+[1-9][0-9]*$/ ;
            //console.log(fname.value);
            if(regex.test(num.value) && num.validity.valid ){
                numError.innerHTML = '';
                numError.className = 'error';
                flag[7] = 0;
            }
            else{
                showError(key.srcElement.id);
            }
        }
        if(key.srcElement.id==="inputCity"){
            var regex = /[A-Z][a-z]+\s*[A-Za-z]*$/ ;
            //console.log(fname.value);
            if(regex.test(city.value) && city.validity.valid ){
                cityError.innerHTML = '';
                cityError.className = 'error';
                flag[8] = 0;
            }
            else{
                showError(key.srcElement.id);
            }
        }
        if(key.srcElement.id==="inputZip"){
            var regex = /^[1-9]{1}[0-9]{2}[0-9]{3}$/ ;
            //console.log(fname.value);
            if(regex.test(zip.value) && zip.validity.valid ){
                zipError.innerHTML = '';
                zipError.className = 'error';
                flag[10] = 0;
            }
            else{
                showError(key.srcElement.id);
            }
        }

    };

    function submitbut(event) {
        console.log("Button pressed");
          for(i = 0;i<flag.length;i++){
            if(flag[i]===-1){
                if(i===3){
                    alert("Select your gender");
                }
                else if(i==4){
                    alert("Select your purpose");
                }
                else{
                alert("Please fill up the form correctly",i);
                }
                event.preventDefault();
                console.log(i);
                break;
            }
          }
    };
    fun.radbut = function(ele){
        if(ele.name==="mygroup"){
            flag[4] = 0;
        }
        else{
            flag[3] = 0;
            console.log(ele.value);
        }
    };

        function showError(key) {
                
                if(key === "inputEmail4"){
                        flag[0] = -1;
                  if(email.validity.valueMissing) {
                    emailError.innerHTML = 'You need to enter an e-mail address.';
                  } else if(email.validity.typeMismatch) {
                    emailError.innerHTML = 'Entered value needs to be an e-mail address.';
                  } else if(email.validity.tooShort) {
                    emailError.textContent = `Email should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`;
                  }
                  emailError.className = 'error active';
                }
                if(key === "inputname1"){
                    flag[1] = -1;
                    if(fname.value === ""){
                        fnameError.innerHTML = "You need to enter name.";
                    }
                    else{
                        fnameError.innerHTML = "Ensure first letter is capital and no number/spec characters exists.";
                    }
                    fnameError.className = "error active";
                }
                if(key === "inputname2"){
                    flag[2] = -1;
                    if(fname.value === ""){
                        lnameError.innerHTML = "You need to enter name.";
                    }
                    else{
                        lnameError.innerHTML = "Ensure first letter is capital and no number/spec characters exists.";
                    }
                    lnameError.className = "error active";
                }
                if(key === "pickm"){
                    flag[5] = -1;
                    in_dateError.innerHTML = "Date cannot be before now.";
                    in_dateError.className = "error active";
                }
                if(key === "inputcard4"){
                    flag[6] = -1;
                    if(card.value === ""){
                        cardError.innerHTML = "You need to enter card details.";
                    }
                    else if(card.validity.tooShort) {
                    cardError.textContent = `Card number should be at least ${ card.minLength } characters; you entered ${ card.value.length }.`;
                  }
                    else{
                        cardError.innerHTML = "Enter valid card details.";
                    }
                    cardError.className = "error active";
                }
                if(key === "inputnum"){
                    flag[7] = -1;
                    if(num.value === ""){
                        numError.innerHTML = "You need to enter card details.";
                    }
                    else if(num.validity.tooShort) {
                    numError.textContent = `Number should be at least ${ num.minLength } characters; you entered ${ num.value.length }.`;
                    } else if(num.validity.tooLong) {
                    numError.textContent = `Number should be at most ${ num.maxLength } characters; you entered ${ num.value.length }.`;
                    }
                    else{
                        numError.innerHTML = "Enter valid card details.";
                    }
                    numError.className = "error active";
                }
                if(key === "inputCity"){
                    flag[8] = -1;
                    if(city.value === ""){
                        cityError.innerHTML = "You need to enter city.";
                    }
                    else{
                        cityError.innerHTML = "Enter valid city.";
                    }
                    cityError.className = "error active";
                }
                if(key === "inputZip"){
                    flag[10] = -1;
                    if(zip.value === "" || zip.value===null){
                        zipError.innerHTML = "You need to enter ZipCode.";
                    }
                    else{
                        zipError.innerHTML = "Enter valid Zip.";
                    }
                    zipError.className = "error active";
                }
        };
        fun.sel = function(){
            var temp = document.querySelector("#inputState");
            tempError = document.querySelector("#inputState + #state");
            if(temp.value==="" || temp.value===null){
                flag[9] = -1;
                tempError.innerHTML = "Select valid State."
                tempError.className = "error active"
            }
            else{
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

    function refresh(){
        //xmlurl  = "static/js/tweets.xml";
        xmlurl = "/getxml";
        $ajaxUtils.sendGetRequest(
        xmlurl,
        function (myxml) {
            window.xml = new DOMParser().parseFromString(myxml,"text/xml");
            console.log("XML loaded");
            setDivs();
        },
        false,false);
        

    };
    function switchactive(menuit){
        if(fun.lastact !== undefined){
            var classes = document.querySelector("#"+fun.lastact).className;
            classes = classes.replace(new RegExp("active", "g"), "");
            document.querySelector("#"+fun.lastact).className = classes; 
        }
        var classes = document.querySelector("#"+menuit).className;
        if(classes.indexOf("active") === -1){
            classes+=" active";
        }
        document.querySelector("#"+menuit).className = classes;
        fun.lastact = menuit;

    };
    fun.show = function(urlkey){
        var url = urls[urlkey];
        var actmenu = menu[urlkey];
        switchactive(actmenu)
        $ajaxUtils.sendGetRequest(
            url,
            function(response){
                document.querySelector("#maincontent").innerHTML = response;
                if(urlkey==="contact"){
                    //console.log("Contact")
                    registercomp();
                }
            },false,false);
        if(urlkey=="review"){
            refresh();
        }

    };
    document.addEventListener('DOMContentLoaded',fun.show("home"),false,false);

        //console.log("Home loaded");
    //window.onload = showHome();

    fun.callsave = function (){
        myxml = window.xml;
        console.log(myxml);
        if(typeof window.XMLSerializer == "undefined") {
                throw new Error("No modern XML serializer found.");
            }
            var s = new XMLSerializer();
            //console.log(myxml.childNodes[1]);
            var xmlString = s.serializeToString( myxml.childNodes[1] );
            xmlString  = "<?xml version = '1.0' encoding = 'utf-8' ?>\n<!DOCTYPE tweets SYSTEM 'tweets.dtd'>\n" + xmlString;
            fileName = "tweets.xml";
            save(xmlString,fileName);
    };
    var save = function (text,fileName){
        var a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        var data = new Blob([text], {type: 'text/xml'});
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
    fun.viewXML = function (){
        myxml = window.xml;
        //console.log(myxml);
        if(typeof window.XMLSerializer == "undefined") {
                throw new Error("No modern XML serializer found.");
            }
            var s = new XMLSerializer();
            var xmlString = s.serializeToString( myxml.childNodes[1] );
            xmlString  = "<?xml version = '1.0' encoding = 'utf-8' ?>\n<!DOCTYPE tweets SYSTEM 'tweets.dtd'>\n" + xmlString;
            fileName = "tweets.xml";
            //console.log(xmlString);
            var data = new Blob([xmlString], {type: 'text/xml'});
            var textFile = null;
            if (textFile !== null) {
                window.URL.revokeObjectURL(textFile);
            }
            textFile = window.URL.createObjectURL(data);
            window.open(textFile);

    };

    fun.addxml = function (){
        var mydate = new Date();
        var date = mydate.getDate() + "-" + (mydate.getMonth()+1) + "-" + mydate.getFullYear();
        //console.log(date);
        var time = mydate.getHours() + ":"+mydate.getMinutes();
        //console.log(time);
        myxml = window.xml;
        var text = document.querySelector("#input_review").value
        
        
        if(text !== ""){
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
    function store(){
        myxml = window.xml;
        if(typeof window.XMLSerializer == "undefined") {
                throw new Error("No modern XML serializer found.");
            }
            var s = new XMLSerializer();
            var xmlString = s.serializeToString( myxml.childNodes[1] );
            xmlString  = "<?xml version = '1.0' encoding = 'utf-8' ?>\n<!DOCTYPE tweets SYSTEM 'tweets.dtd'>\n" + xmlString;
           $.ajax({
              type : 'POST',
              url : "/putxml",
              datatype: 'string',
              data : {'data':xmlString}
            });
    };

    fun.report = function(id){
        node = window.xml.childNodes[1].children[parseInt(id)];
        //console.log(node);
        node.setAttribute("report","True");
        store();
        setDivs();
        //console.log(text);
            
    }

    function setDivs(){
        //myxml = window.xml;
        toInsert = "";
        var temp,date,time,text;
        $ajaxUtils.sendGetRequest(
        divurl,
        function (snippet) {
            //console.log(snippet);
            //console.log(typeof snippet);
            for (i=0; i < window.xml.childNodes[1].children.length; i++){
                temp = ""
                if(window.xml.childNodes[1].children[i].getAttribute("report")==="False"){
                    text = window.xml.childNodes[1].children[i].children[0].innerHTML;
                    date = window.xml.childNodes[1].children[i].children[1].innerHTML;
                    time = window.xml.childNodes[1].children[i].children[2].innerHTML;
                    temp = insertProperty(snippet,"tweets",text);
                    temp = insertProperty(temp,"funct","fun.report('"+(i)+"')");
                    temp = insertProperty(temp,"date",date);
                    temp = insertProperty(temp,"time",time);
                    toInsert = toInsert + temp; 
                }
            }
            //console.log(toInsert);
            insertHtml("#mycontent",toInsert);
        },
        false,false);


        
        //document.addEventListener('DOMContentLoaded',registercomp(),false,false);
         
        
        
        //console.log("Loaded xml");
        window.fun = fun;
    }
})(window);


