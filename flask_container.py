from flask import Flask, render_template,url_for,request
import mysql
from mysql.connector import Error

app = Flask('__name__',template_folder = "")
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0


@app.route('/')
@app.route('/index.html')
def index():
    return render_template('index.html')

@app.route('/getxml',methods = ['GET'])
def getmydata():
    try:
        conn = mysql.connector.connect(host = "127.0.0.1",port = 3307,
            database = "calm_db",user = 'root',password = '')
        cur = conn.cursor();
        cur.execute("SELECT * FROM tweets")
        res = cur.fetchone()[1];
        cur.close()
        conn.close()
        return res
    except:
        return -1

@app.route('/putxml',methods = ['POST'])
def postmydata():
    data = request.form['data']
    try:

        conn = mysql.connector.connect(host = "127.0.0.1",port = 3307,
            database = "calm_db",user = 'root',password = '')
        cur = conn.cursor();
        cur.execute("UPDATE tweets SET tweet = %s WHERE id = %s",(data,1))
        print(cur.rowcount)
        conn.commit()
        cur.close()
        conn.close()
        return "Success"
    except:
        return "Fail"


