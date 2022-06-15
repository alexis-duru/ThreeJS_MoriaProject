gsap.registerPlugin(Draggable, InertiaPlugin);

let clampSkew = gsap.utils.clamp(-10, 10);

class DraggableImg {
  constructor(Image) {
    let proxy = document.createElement("div"),
        tracker = InertiaPlugin.track(proxy, "x")[0],
        skewTo = gsap.quickTo(Image, "skewX"),
        updateSkew = () => {
          let vx = tracker.get("x");
          skewTo(clampSkew(vx / -50));
          !vx && !this.drag.isPressed && gsap.ticker.remove(updateSkew);
        },
        align = () => gsap.set(proxy, {x: gsap.getProperty(Image, "x"), y: gsap.getProperty(Image, "y"), width: Image.offsetWidth, height: Image.offsetHeight, position: "absolute", pointerEvents: "none", top: Image.offsetTop, left: Image.offsetLeft}),
        xTo = gsap.quickTo(Image, "x", {duration: 0.5}),
        yTo = gsap.quickTo(Image, "y", {duration: 0.5});
    
    // make the proxy sit right on top and add it to the DOM so that bounds work
    align();
    Image.parentNode.append(proxy);
    
    this.drag = Draggable.create(proxy, {
      type: "x,y",
      trigger: Image,
      bounds: ".content__drag-area",
      edgeResistance: 0.6,
      onPressInit() {
        align();
        xTo.tween.pause();
        yTo.tween.pause();
        gsap.ticker.add(updateSkew);
      },
      onPress() {
        Image.style.zIndex = proxy.style.zIndex;
      },
      onDrag() {
        xTo(this.x);
        yTo(this.y);
      },
      onThrowUpdate() {
        xTo(this.x);
        yTo(this.y);
      },
      inertia: true
    })[0];
  }
}

let draggables = gsap.utils.toArray(".img-drag").map(el => new DraggableImg(el));

const menuItems = [...document.querySelectorAll('.menu-item')];

menuItems.forEach(item => {
    // console.log(item)
    let word = item.children[0].children[0].innerText.split('');
    item.children[0].innerHTML = '';
    word.forEach((letter, idx) => {
        item.children[0].innerHTML += `<span style="--index: ${idx};">${letter}</span>`;
    })

    //CLONE LETTERS//
    let cloneDiv = item.children[0].cloneNode(true);
    cloneDiv.style.position = 'absolute';
    cloneDiv.style.left = '0';
    cloneDiv.style.top = '0';
    item.appendChild(cloneDiv)
})