getCss.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css");

  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log("成功了");
        const style = document.createElement("style");
        style.innerHTML = request.response;
        document.head.appendChild(style);
      } else {
        alert("加载失败");
      }
    }
  };
  request.send();
};

getJs.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");

  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log("好了");
        const script = document.createElement("script");
        script.innerHTML = request.response;
        document.body.appendChild(script);
      } else {
        alert("加载失败");
      }
    }
  };

  request.send();
};

getHtml.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log("ok");
        const div = document.createElement("div");
        div.innerHTML = request.response;
        document.body.appendChild(div);
      } else {
        alert("加载失败");
      }
    }
  };
  request.send();
};
getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const dom = request.responseXML;
      const text = dom.getElementsByTagName("warning")[0].textContent;
      console.log(text.trim());
    }
  };
  request.send();
};
getJson.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log(typeof request.response);
        console.log(request.response);
        const object = JSON.parse(request.response);
        myName.textContent = object.name; //进入网站显示欢迎xxx
        console.log(typeof object);
        console.log(object);
      }
    }
  };

  request.send();
  //json 有6钟数据结构，js有7种所以转换容易出错
  //   try {
  //     object = JSON.parse(`{"name": "make"}`);
  //   }catch(error){//用于Json数据转换时的检查错误
  //       console.log(error);//打印出错误原因error

  //       object={'name':'fa'}//不就措施，如果错误object就等于后面的赋值
  //   };
};
let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const array = JSON.parse(request.response);
      array.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.id;
        xxx.appendChild(li);
      });
      n += 1;
    }
  };
  request.send();
};
