function scene3() {
console.log('Executing scene 3!')
  // Setup Stage
  stage = document.querySelector('#stage')
  woods = document.querySelector('#trees')
  woodsImgSrc = woods.getAttribute('src')
  stageImg = document.querySelector('#stage-img')
  stageImg.setAttribute('src', woodsImgSrc)

  // Setup Cast

  // Danerys
  danerysContainer = document.createElement('div')
  stage.append(danerysContainer);
  danerysContainer.style.position = 'absolute';
  danerysContainer.style.width = '10%';
  danerysContainer.style.height ='37%';
  danerysContainer.style.top = '50%';
  danerysContainer.style.left = '30%';
  danerys = document.querySelector('#danerys')
  danerysContainer.append(danerys)
  blueDress = document.querySelector('#blue-dress')
  danerysContainer.append(blueDress)
  danerys.style.width = '60%';
  danerys.style.position = 'absolute'
  danerys.style.top = 0
  danerys.style.left ='15%'
  blueDress.style.position = 'absolute'
  blueDress.style.bottom = 0


  // Drogo
  drogoContainer = document.createElement('div')
  stage.append(drogoContainer);
  drogoContainer.style.position = 'absolute';
  drogoContainer.style.width = '10%';
  drogoContainer.style.height ='37%';
  drogoContainer.style.top = '50%';
  drogoContainer.style.left = '70%';
  drogo = document.querySelector('#drogo')
  drogoContainer.append(drogo)
  naked = document.querySelector('#bulky-man')
  drogoContainer.append(naked)
  drogo.style.width = '70%';
  drogo.style.position = 'absolute'
  drogo.style.top = 0
  drogo.style.left = '20%'
  naked.style.position = 'absolute'
  naked.style.bottom = 0

  // Setup Props

  // dragon's egg
  egg = document.querySelector('#egg')
  egg.style.position = 'absolute'
  egg.style.height = '10%'
  egg.style.top = '65%'
  egg.style.left = '30%'
  stage.append(egg)


  // Prop 2

  // Action!

  // Stage direction 1

  frame(function() {
    egg.style.top = '65%'
    egg.style.left = '30%'


  })
  frame(function() {
    egg.style.top = '40%'
    egg.style.left = '45%'
    egg.style.transform = 'rotateZ(220deg)'

  })

  frame(function() {
    egg.style.top = '50%'
    egg.style.left = '65%'
    egg.style.transform = 'rotateZ(360deg)'

  })

  frame(function(){
    egg.style.top = '70%'
    egg.style.left ='75%'
    egg.style.transform = 'rotateZ(220deg)'
  })

  // Stage direction 2

  frame(function() {
    egg.style.top = '70%'
    egg.style.left ='75%'
  })

  frame(function() {
    egg.style.top = '65%'
    egg.style.left = '30%'
  })

}
