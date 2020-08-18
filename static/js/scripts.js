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
        
        //console.log("Loaded xml");
        window.fun = fun;
    }
})(window);


