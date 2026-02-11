const clickMeGif = document.querySelector('#clickMeGif');
const audio = document.querySelector('#audio');
const speaker = document.querySelector('#speaker');
const speakerBtns = document.querySelectorAll('.speaker-btns');
const heartparts = document.querySelectorAll('.heartparts');
const quesForm = document.querySelector('#ques1')
const btns = document.querySelector('#btns')
const btnYes = document.querySelector('#btnYes')
const btnNo = document.querySelector('#btnNo')
const quesImg = document.querySelector('#quesImg')
const quesVid = document.querySelector('#quesVid')
const vidSrc = document.querySelector('#vidSrc');
const audSrc = document.querySelector('#audSrc')

const noImgs = ['RDT_20250306_1151297066707208464930959.jpg',
    'dog-crying-meme-doggo-crys.gif',
    'RDT_20251228_1825538146583486309720453.jpg',
    'RDT_20260101_1658274641171666507859075.jpg',
    'RDT_20260101_165320182685803705940803.jpg',
]

const textArr = [
    'Hi baby, Will you be my Valentine?!?!?',
    'Do you even love me?!?!',
    'Really!!!!',
    'Sudhar jao',
    'I am telling you.....'
]

let index = 0;

clickMeGif.addEventListener('click', () => {
    audio.play();
    speaker.style.display = 'flex'
    clickMeGif.style.scale = 0;

    setTimeout(() => {
        heartparts[0].style.translate = '-100% 0%'
        heartparts[1].style.translate = '100% 0%'
    }, 1500);

    setTimeout(() => {
        quesForm.style.display = 'flex'
    }, 2000);
    setTimeout(() => {
        quesForm.style.opacity = '1'
    }, 2500);
})

speakerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        let type = btn.getAttribute('data-type')

        if (type === 'off') {
            speakerBtns[0].style.display = 'none';
            speakerBtns[1].style.display = 'block';
            audio.muted = true;
        } else {
            speakerBtns[1].style.display = 'none';
            speakerBtns[0].style.display = 'block';
            audio.muted = false;
        }
    })
})


btnYes.addEventListener('click', () => {

    // quesImg.setAttribute('src', './static/RDT_20250505_1000534451280169518417393.jpg')
    // audSrc.setAttribute('src', './static/achi_baat.mp3')
    quesImg.style.display = 'none'
    quesVid.style.display = 'block'
    quesVid.load()
    quesVid.play()

    audio.load()
    // audio.play()


    audio.addEventListener('ended', (e) => {
        //     if (audSrc.getAttribute('src') === './static/achi_baat.mp3') {
        //         quesImg.setAttribute('src', './static/EUR_4KvVAAA8Chs.jpg');
        //         audSrc.setAttribute('src', './static/sun.mp3')
        //         audio.load()
        //         audio.play()
        //     }

        if (audSrc.getAttribute('src') === './static/yes.mp3') {
            quesForm.style.opacity = '0'

            setTimeout(() => {
                quesForm.style.display = 'none'
                btns.style.display = 'flex'
                document.querySelector('#question').style.display = 'block'
                quesImg.setAttribute('src', './static/RDT_20251129_0254007077486280727805450.jpg')
                index = 0;
                yesScale = 1;

                btnYes.style.position = "relative";
                btnYes.style.top = "unset";
                btnYes.style.left = "unset";
                btnYes.style.transform = `unset`;

                audSrc.setAttribute('src', './static/careless_whisper_sax_loop.mp3')
                audio.load()
            }, 500);

            setTimeout(() => {
                heartparts[0].style.translate = '0% 0%'
                heartparts[1].style.translate = '0% 0%'
            }, 1000);

            setTimeout(() => {
                speaker.style.display = 'none'
                clickMeGif.style.scale = 1;
            }, 1500);

        }
    })

    btns.style.display = 'none'
    document.querySelector('#question').style.display = 'none'

    quesVid.addEventListener('ended', () => {
        quesVid.style.display = 'none'
        audSrc.setAttribute('src', './static/yes.mp3')
        quesImg.setAttribute('src', './static/ChatGPT Image Feb 3, 2026, 08_17_52 AM.png')
        quesImg.style.display = 'block'
        audio.load()
        audio.play()
    })


    setTimeout(() => {

    }, 3000);

    setTimeout(() => {
        quesImg.setAttribute('src', './static/ChatGPT Image Feb 3, 2026, 09_03_07 PM.png')
    }, 9500)

    setTimeout(() => {
        quesImg.setAttribute('src', './static/ChatGPT Image Feb 3, 2026, 09_09_42 PM.png')

    }, 19500);

    setTimeout(() => {
        quesImg.setAttribute('src', './static/amor-happy-valentines-day.gif')
    }, 24000);
})

let yesScale = 1;

btnYes.style.position = "relative"
btnYes.style.transformOrigin = "center center";
btnYes.style.transition = "transform 0.3s ease";

btnNo.addEventListener('click', () => {

    if (index < noImgs.length) {
        quesImg.setAttribute('src', `./static/${noImgs[index % noImgs.length]}`)
        document.querySelector('#question').innerText = textArr[index % textArr.length];
    } else {
        yesScale += 2;

        if (btnYes.style.position !== "fixed") {
            btnYes.style.position = "fixed";
            btnYes.style.top = "50%";
            btnYes.style.left = "50%";
            btnYes.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
        } else {
            btnYes.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
        }

    }


    if (index == 0) {
        audSrc.setAttribute('src', './static/bang.mp3');
        audio.load()
    }
    audio.pause()
    audio.currentTime = 0
    audio.play()
    index++;
})