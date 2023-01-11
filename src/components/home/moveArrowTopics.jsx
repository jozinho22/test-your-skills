function moveArrowTopics() {
    const moving = document.getElementById("arrowTopics");
    moving.style.position = "absolute";
 
    let defaultPos = 0;
    let leftPos = 0;
    let dir = 1;
    function move() {
        if( leftPos === 8) {
            dir = -1;
        } else if(leftPos === -8) {
            dir = 1;
        }
        leftPos += 1 * dir;
        defaultPos += leftPos;
        moving.style.left = `${defaultPos}px`;
        requestAnimationFrame(move);
    }
    requestAnimationFrame(move);
}

export default moveArrowTopics;