(function() {

    const cursor = document.createElement('div')
    cursor.id = 'cursor'
    cursor.className = 'fade'

    let timeout

    function handleMouseDown(event) {
        cursor.classList.add('mousedown')
    }

    function handleMouseUp(event) {
        cursor.classList.remove('mousedown')
    }

    function handleMouseEnter(event) {
        if (isInteractive(event.target)) cursor.classList.add('interactive')
    }

    function handleMouseLeave(event) {
        if (isInteractive(event.target)) cursor.classList.remove('interactive')
    }

    function handleMouseMove(event) {
        clearTimeout(timeout)
        cursor.classList.remove('fade')
        const top = event.pageY - (cursor.clientHeight / 2)
        const left = event.pageX - (cursor.clientWidth / 2)
        cursor.style.top = top + 'px'
        cursor.style.left = left + 'px'
        timeout = setTimeout(function() { cursor.classList.add('fade') }, 1500)
    }

    function isInteractive(el) {
        return !!(el.closest('a') || el.closest('button'))
    }

    // initialize
    window.addEventListener('mousemove', handleMouseMove)
    document.documentElement.addEventListener('mousedown', handleMouseDown, { capture: true })
    document.documentElement.addEventListener('mouseup', handleMouseUp, { capture: true })
    document.documentElement.addEventListener('mouseenter', handleMouseEnter, {capture: true })
    document.documentElement.addEventListener('mouseleave', handleMouseLeave, {capture: true })
    document.body.appendChild(cursor)
})()