let departurePlanet = "Trái Đất";
let mission = "Khám phá Vũ trụ K16";
let crew = ["Huy","Thuy","Ha"];

function launchShip(crewMembers) {
   return `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crewMembers} sẽ đồng hành cùng bạn trong chuyến phiêu lưu "${mission}"!`;

}
let welcomeMessage = launchShip(crew);
console.log(welcomeMessage);


function calculateDistance(speed,time){
     const distance = speed*time;
     return distance;
}
console.log("Khoảng cách đi được là",calculateDistance(1000,24));


function convertTimeToHex(time){
    const convertTime = time.toString(16);
    return convertTime;

}
console.log("Sau khi chuyển đổi là :",convertTimeToHex(120));

function decryptCode(code){

 let decryptedMessage ="";
 for (let i = 0; i < code.length; i++){
     const char = code[i];
      if (char >= 'a' && char <= 'z'){
        decryptedMessage += char.toUpperCase();
      }
      else
      {
        decryptedMessage += char.toLowerCase();
      }

 }
 return decryptedMessage;
}
console.log(decryptCode("K16 Challenge World")); 

function returnToEarth(){
    console.log("Chuẩn bị trở về trái đất");
}

returnToEarth();