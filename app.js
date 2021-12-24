document.addEventListener('DOMContentLoaded',()=>{
const button1=document.getElementById('button1');
button1.addEventListener('click',()=>{
  const sitton=document.getElementById('Sitton').value;
  const munda=document.getElementById('Munda').value;
  const iska=document.getElementById('Iska').value;
  const rohi=document.getElementById('Rohi').value;
  const dhandi=document.getElementById('Dhandi').value;
  const hotton=document.getElementById('Hotton').value;
  var idArray=[sitton,munda,iska,rohi,dhandi,hotton];
  noArray=[];
  symbolArray=[];
  for (let i=0;i<6;i++){
    noArray.push(getRandomNo());
  }
  for (let i of noArray){
    symbolArray.push(roll(i));
  }
  document.getElementById('image1').innerHTML=`<img src="image/${symbolArray[0]}.png"/>`;
  document.getElementById('image2').innerHTML=`<img src="image/${symbolArray[1]}.png"/>`;
  document.getElementById('image3').innerHTML=`<img src="image/${symbolArray[2]}.png"/>`;
  document.getElementById('image4').innerHTML=`<img src="image/${symbolArray[3]}.png"/>`;
  document.getElementById('image5').innerHTML=`<img src="image/${symbolArray[4]}.png"/>`;
  document.getElementById('image6').innerHTML=`<img src="image/${symbolArray[5]}.png"/>`;
  var FlagNo = getOccurrence(symbolArray, 'Flag')
  var MaskNo = getOccurrence(symbolArray, 'Mask')
  var HeartNo = getOccurrence(symbolArray, 'Heart')
  var SpadeNo = getOccurrence(symbolArray, 'Spade')
  var DiamondNo = getOccurrence(symbolArray, 'Diamond')
  var ClubNo = getOccurrence(symbolArray, 'Club')
  var resultString = "";
  if (FlagNo>1){
    resultString += ` Flag: ${FlagNo}` 
  }
  if (MaskNo>1){
    resultString += ` Mask: ${MaskNo}` 
  }
  if (HeartNo>1){
    resultString += ` Heart: ${HeartNo}` 
  }
  if (SpadeNo>1){
    resultString += ` Spade: ${SpadeNo}` 
  }
  if (DiamondNo>1){
    resultString += ` Diamond: ${DiamondNo}` 
  }
  if (ClubNo>1){
    resultString += ` Club: ${ClubNo}` 
  }
  document.querySelector('h3').textContent=resultString;
});
});

function roll(no){
  switch (no) {
    case 1:
      return "Flag";
      break;
    case 2:
      return "Mask";
      break;
    case 3:
      return "Spade";
      break;
    case 4:
      return "Heart";
      break;
    case 5:
      return "Club";
      break;
    default:
      return "Diamond";
  }
}

function elCounter(array,el){
  return array.filter(i=>i===el).length;
}

function getRandomNo(){
  return Math.floor(Math.random()*6+1);
}

function getOccurrence(array, value) {
  var count = 0;
  array.forEach((v) => (v === value && count++));
  return count;
}
