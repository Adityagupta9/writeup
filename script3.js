let buttonss = document.getElementsByClassName("but");
let ap = [buttonss[0], buttonss[1]];

for (let i = 0; i < ap.length; i++) {
  ap[i].onclick = () => {
    let ao = 0;
    console.log(ao);

    let p2 = new Promise((resolve, reject) => {
      let div1 = document.createElement("div");
      let dot = 0;
      let intervalId = setInterval(() => {
        dot = (dot + 1) % 4;
        div1.textContent = "Fetching" + ".".repeat(dot);
      }, 100); // Adjust the interval time as needed
      div1.className="jk"
      document.body.appendChild(div1)
      setTimeout(() => {
          clearInterval(intervalId);
          document.body.removeChild(div1);
        }, 3000); // Adjust the time as needed
      
      for (let i = 0; i < ap.length; i++) {
        ap[i].onclick = null;
      }
    })
    let p3 = new Promise((resolve, reject) => {
      setTimeout(()=>{
        let div4 = document.createElement("div");
            let dot = 0;
            let intervalId = setInterval(() => {
              dot = (dot + 1) % 4;
              div4.textContent = "Data Fetched Sucessfully" + ".".repeat(dot);
            }, 100); // Adjust the interval time as needed
            div4.className="jk"
            document.body.appendChild(div4)
        },3000);
      })
      let p4 = new Promise((resolve, reject) => {
      setTimeout(()=>{
        let div5 = document.createElement("div");
            let dot = 0;
            let intervalId = setInterval(() => {
              dot = (dot + 1) % 4;
              div5.textContent = "Routing" + ".".repeat(dot);
            }, 100); // Adjust the interval time as needed
            div5.className="jk"
            document.body.appendChild(div5)
        },6000);
      })
    let p5 = new Promise((resolve, reject) => {
    setTimeout(()=>{
      let div6 = document.createElement("div");
          let dot = 0;
          let intervalId = setInterval(() => {
            dot = (dot + 1) % 4;
            div6.textContent = "Android v.13.1.2" + ".".repeat(dot);
          }, 100); // Adjust the interval time as needed
          div6.className="jk"
          document.body.appendChild(div6)
      },9000);
    })
    let p6 = new Promise((resolve, reject) => {
    setTimeout(()=>{
      let div7 = document.createElement("div");
          let dot = 0;
          let intervalId = setInterval(() => {
            dot = (dot + 1) % 4;
            div7.textContent = "IP:192.158.1.38" + ".".repeat(dot);
          }, 100); // Adjust the interval time as needed
          div7.className="jk"
          document.body.appendChild(div7)
      },10000);
    })
    let p12 = new Promise((resolve, reject) => {
    setTimeout(()=>{
      let div10 = document.createElement("div");
            let randomOTP = generateRandomOTP();
            div10.textContent = "OTP: " + randomOTP;
          ; // Adjust the interval time as needed
          div10.className="jk"
          document.body.appendChild(div10)
      },12000);
    })
    

    let div11 = document.createElement("div");
    div11.className = "jk";
    document.body.appendChild(div11);

    setInterval(() => {
      div11.textContent = "Time code: " + getCurrentTime();
    }, 15000);

    let p7 = new Promise((resolve, reject) => {
    setTimeout(()=>{
      const now = new Date()
      let div8 = document.createElement("div");
          let dot = 0;
          let intervalId = setInterval(() => {
            dot = (dot + 1) % 4;
            div8.textContent = "Current Datecode:"+getCurrentDate() + ".".repeat(dot);
          }, 100); // Adjust the interval time as needed
          div8.className="jk"
          document.body.appendChild(div8)
      },17000);
    })
    let p8 = new Promise((resolve, reject) => {
      setTimeout(()=>{
        let progressDiv = document.createElement("div");
        progressDiv.className = "progress-bar";
        document.body.appendChild(progressDiv);
        let startTime = Date.now();
        let endTime = startTime + 5000;
        let intervalId = setInterval(() => {
          let currentTime = Date.now();
          let progress = Math.min((currentTime - startTime) / (endTime - startTime), 1);
          progressDiv.style.width = `${progress * 100}%`;

          if (currentTime >= endTime) {
            clearInterval(intervalId);
            document.body.removeChild(progressDiv);
          }
        }, 100);
      },19000)
      
    })
    let p9 = new Promise((resolve, reject) => {
    setTimeout(()=>{
      let div9 = document.createElement("div");
          let dot = 0;
          let intervalId = setInterval(() => {
            dot = (dot + 1) % 4;
            div9.textContent = "Sucessfully Transfered"
          }, 100); // Adjust the interval time as needed
          div9.className="jk"
          document.body.appendChild(div9)
      alert("Your sms are forwaded")
      },24000);
      
    })
    
    

}
}
function getCurrentDate() {
  const now = new Date();
  const day = now.getDate().toString().padStart(2, '0');
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const year = now.getFullYear();
  return `${day}:${month}:${year}`;
}



let p = new Promise((resolve,reject)=>{

    let div = document.createElement("div")
    let dot = 0;
    let intervalId = setInterval(()=>{
      dot = (dot+1)%4
      div.textContent="Computing" + ".".repeat(dot)
    },100)
    div.className="jk"
    document.body.appendChild(div)
})
function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}
function generateRandomOTP() {
  return Math.floor(1000 + Math.random() * 9000);
}
document.styleSheets[0].insertRule('.progress-bar { height: 20px; background-color: rgb(0,255,0); width: 0%; }', 0);
