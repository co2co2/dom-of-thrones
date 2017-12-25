function scene4() {
  // Setup Stage
  stage = document.querySelector('#stage')
  lake = document.querySelector('#kings-landing')
  lakeImgSrc = lake.getAttribute('src')
  stageImg = document.querySelector('#stage-img')
  stageImg.setAttribute('src', lakeImgSrc)

// Setup Cast
// cersei
cerseiContainer = document.createElement('div')
stage.append(cerseiContainer);
cerseiContainer.style.position = 'absolute';
cerseiContainer.style.width = '10%';
cerseiContainer.style.height ='37%';
cerseiContainer.style.top = '50%';
cerseiContainer.style.left = '70%';

cersei = document.querySelector('#cersei')
cerseiContainer.append(cersei)
redDress= document.querySelector('#red-dress')
cerseiContainer.append(redDress)
cersei.style.width = '60%';
cersei.style.position = 'absolute'
cersei.style.top = 0
cersei.style.left ='20%'
redDress.style.position = 'absolute'
redDress.style.bottom = 0

jaimeContainer = document.createElement('div')
stage.append(jaimeContainer);

jaimeContainer.style.position = 'absolute';
jaimeContainer.style.width = '10%';
jaimeContainer.style.height ='36%';
jaimeContainer.style.top = '50%';
jaimeContainer.style.left = '30%';
jaime = document.querySelector('#jaime')
jaimeContainer.append(jaime)
robes = document.querySelector('#brown-robes')
jaimeContainer.append(robes)
jaime.style.width = '55%';
jaime.style.position = 'absolute'
jaime.style.top = 0
jaime.style.left = '20%'
robes.style.position = 'absolute'
robes.style.bottom = 0
// Stage direction 1

frame(function() {
  jaimeContainer.style.top = '50%';
  jaimeContainer.style.left = '30%';

})

frame(function() {
  jaimeContainer.style.top = '40%';
  jaimeContainer.style.left = '50%';

})
frame(function() {
  jaimeContainer.style.top = '50%';
  jaimeContainer.style.left = '75%';
  jaimeContainer.style.transform = 'rotateY(180deg)'

})

frame(function() {
  cerseiContainer.style.top = '50%';
  cerseiContainer.style.left = '30%';
  // cerseiContainer.style.transform = 'rotateY(180deg)'

})

frame(function() {
  cerseiContainer.style.top = '50%';
  cerseiContainer.style.left = '40%';
  cerseiContainer.style.transform = 'rotateY(180deg)'

})
frame(function() {
  jaimeContainer.style.top = '60%';
  jaimeContainer.style.left = '55%';



})
//
frame(function() {
  cerseiContainer.style.top = '60%';
  cerseiContainer.style.left = '50%';



//
})
frame(function() {
  cerseiContainer.style.top = '80%';
  cerseiContainer.style.left = '50%';
//
})

frame(function() {
  jaimeContainer.style.top = '80%';
  jaimeContainer.style.left = '55%';
})


frame(function() {
  cerseiContainer.style.top = '90%';
  cerseiContainer.style.left = '50%';
//
})

frame(function() {
  jaimeContainer.style.top = '90%';
  jaimeContainer.style.left = '55%';
})

frame(function() {
  cerseiContainer.style.top = '100%';
  cerseiContainer.style.left = '50%';
//
})
frame(function() {
  jaimeContainer.style.top = '100%';
  jaimeContainer.style.left = '55%';
})

}
