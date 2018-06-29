var pList = [`You're the best. 👑`, `You're the kindest. 😉`, `Happy birthday.`];
$(`button`).on(`mouseover`, () => {
    $(`button`).animate({'width': '200px' }, { duration:200 })
})
$(`button`).on(`mouseout`, () => {
    $(`button`).animate({'width': '125.17' }, { duration:200 })
})
$(`button`).on(`click`, () => {
    (!$(`.content:has('p')`).length) ? $(`.content`).append(`<p>${pList[0]}</p>`): ``
    $(`p:eq(0)`).hide().fadeIn()
    $(`button`).remove()
    $(`p:eq(0)`).on(`click`, () => {
        (!$(`p:eq(1)`).length) ? $(`.content`).append(`<p>${pList[1]}</p>`): ``
        $(`p:eq(1)`).hide().fadeIn()
        $(`p:eq(1)`).on(`click`, () => {
            (!$(`p:eq(2)`).length) ? $(`.content`).append(`<p>${pList[2]}</p>`): ``
            if(!$(`#cake`).length) $(`p:eq(2)`).append(` <div id="cake">🎂</div>`)
            $(`p:eq(2)`).hide().fadeIn()
            $(`p:eq(2)`).on(`click`, () => {
                if (!$(`.content:has('audio')`).length) {
                    $(`.content`).append(`<audio src="sound.mp3"></audio>`)
                    $(`audio`)[0].currentTime = 35
                    $(`audio`)[0].play()
                    $(`#cake`).addClass(`rotating`)
                    var refreshIntervalId = setInterval(() => {
                        function rand() {
                            return 100 + Math.round(Math.random() * 100);
                        }
                        var bgColor = `rgb(${rand()},${rand()},255, 0.8)`
                        $(`.wrapper`).css(`background`, bgColor)
                    }, 550)
                    setTimeout(() => {
                        $(`p:eq(2)`).after(`<button>Stop music</button>`)
                        $(`button`).css(`animation`, `0`)
                        $(`button`).css(`opacity`, `0.3`)
                        $(`button`).on(`click`, () => {
                            $(`audio`).remove()
                            $(`#cake`).removeClass(`rotating`)
                            $(`button`).remove()
                            clearInterval(refreshIntervalId)
                        })
                    }, 500)
                }
            })
        })
    })
})