/////////// --------- CANVAS ------- ///////////

let canvaWidth = document.getElementById("Scene").clientWidth
let canvaHeight = document.getElementById("Scene").clientHeight


var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Events = Matter.Events,
    Composite = Matter.Composite,
    Composites = Matter.Composites,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Bodies = Matter.Bodies;

// create engine
var engine = Engine.create(),
    world = engine.world;

// create renderer
var render = Render.create({
    element: document.getElementById("Scene"),
    engine: engine,
    options: {
        width: canvaWidth,
        height: canvaHeight,
        wireframes: false,
        background: "transparent"
    }
});


Render.run(render);

// create runner
var runner = Runner.create();
Runner.run(runner, engine);

// add WALLS
Composite.add(world, [
    // walls
    Bodies.rectangle(canvaWidth / 2, 0, canvaWidth, 50, { isStatic: true, render: { opacity: 0 } }),
    Bodies.rectangle(canvaWidth / 2, canvaHeight, canvaWidth, 50, { isStatic: true, render: { opacity: 0 } }),
    Bodies.rectangle(canvaWidth, canvaHeight / 2, 50, canvaHeight, { isStatic: true, render: { opacity: 0 } }),
    Bodies.rectangle(0, canvaHeight / 2, 50, canvaHeight, { isStatic: true, render: { opacity: 0 } })
]);

//STORE PARAS CSS HTML
const physObjDom = document.querySelectorAll(".phys")
//CREATE A MATTER EQUIVALENT TO PARAS
const physObj = [];
for (let i = 0; i < physObjDom.length; i++) {
    let para = Bodies.rectangle(physObjDom[i].offsetLeft + physObjDom[i].offsetWidth / 2 + physObjDom[i].parentElement.offsetLeft, physObjDom[i].offsetTop + physObjDom[i].parentElement.offsetTop, physObjDom[i].offsetWidth, physObjDom[i].clientHeight, { render: { opacity: 1 } })
    
    physObj.push(para)

}
Composite.add(world, physObj);

//Composite.add(world, stack);
engine.gravity.y = 0;


for (let i = 0; i < physObjDom.length; i++) {
    physObjDom[i].style.position = "absolute"
}

document.querySelector(".paragraphe").style.left = -80 + "px"
document.querySelector(".paragraphe").style.top = 0
document.querySelector(".paragraphe").style.position = "absolute"



// const museumSections = document.querySelectorAll(".museum-section")
// for(let i = 0; i < museumSections.length; i++){
//     museumSections[i].style.left = 0
//     museumSections[i].style.top = 0
//     museumSections[i].style.position = "absolute"
// }

// const museums = document.querySelectorAll(".museum")
// for(let i = 0; i < museums.length; i++){
//     museums[i].style.left = 0
//     museums[i].style.top = 0
//     museums[i].style.position = "absolute"
// }





if (true) {
    // add mouse control
    var mouse = Mouse.create(render.canvas),

        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 1,
                render: {
                    visible: false
                }
            }
        });

    mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
    mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);

    Composite.add(world, mouseConstraint);


    // keep the mouse in sync with rendering
    render.mouse = mouse;
}

update();

function update() {

    //MOVE HTML P TO MATTER P
    for (let i = 0; i < physObjDom.length; i++) {
        physObjDom[i].style.transform = "translate( " +
            ((physObj[i].position.x - physObjDom[i].offsetWidth / 2)) +
            "px, " +
            (physObj[i].position.y - physObjDom[i].clientHeight / 2) +
            "px )";
        physObjDom[i].style.transform += "rotate( " + physObj[i].angle + "rad )";
    }


    window.requestAnimationFrame(update);
}

