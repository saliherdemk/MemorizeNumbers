import React, { Component, } from "react";

const GOLD1 = 61803398874989484
const GOLD2 = 8204586834365638
const GOLD3 = 1177203091798057
const GOLD4 = 6286213544862270
const GOLD5 = 5260462818902449
const GOLD6 = 7072072041893911
const GOLD7 = 3748475408807538
const GOLD8 = 6891752126633862
const GOLD9 = 2235369317931800
const GOLD10 = 6076672635443338
const GOLD11 = 9086595939582905
const GOLD12 = 6383226613199282
const GOLD13 = 90267880


const arr1 = GOLD1.toString().split("")
const arr2 = GOLD2.toString().split("")
const arr3 = GOLD3.toString().split("")
const arr4 = GOLD4.toString().split("")
const arr5 = GOLD5.toString().split("")
const arr6 = GOLD6.toString().split("")
const arr7 = GOLD7.toString().split("")
const arr8 = GOLD8.toString().split("")
const arr9 = GOLD9.toString().split("")
const arr10 = GOLD10.toString().split("")
const arr11 = GOLD11.toString().split("")
const arr12 = GOLD12.toString().split("")
const arr13 = GOLD13.toString().split("")

const absarr = [].concat(arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8, arr9, arr10, arr11, arr12, arr13)

class ChallangeGOLD extends Component {
    state = {
        aim: ["6"],
        score: 2,
        current: null,
    };

    componentDidMount() {
        document.addEventListener('keypress', (e) => {
            if (e.code === "Space") {
                window.location.reload(true)
            }
        })
        //If user change page before waiting 1s, app doesn't find innerhtml
        setTimeout(() => {
            document.querySelector('.displaySpans').innerHTML = ''
            document.querySelector("textarea").focus()
        }, 1000);

    }


    handleChange = (e) => {

        var str = e.target.value.toString().slice(-1);
        var all = str.split("")

        this.setState({

            current: (e.target.value).toString().slice(-1)
        }, () => {

            all.forEach(element => {
                var displaySpans = document.querySelector('.displaySpans')
                var newspan = document.createElement('span')
                newspan.innerHTML = element
                var answer = this.state.aim.shift()

                if (answer === (this.state.current)) {
                    newspan.style.color = "#ffea00"
                    if (this.state.aim.length === 0) {
                        var absscore = parseInt(this.state.score) - 1
                        document.querySelector('.score').innerHTML = "Score: " + absscore
                        if (localStorage.getItem("MaxMemorizeGOLDScore")) {
                            if (localStorage.getItem("MaxMemorizeGOLDScore") < absscore) {
                                localStorage.setItem("MaxMemorizeGOLDScore", absscore)
                            }
                        } else {
                            localStorage.setItem("MaxMemorizeGOLDScore", absscore)
                        }
                        setTimeout(() => {
                            this.setState({
                                aim: absarr.slice(0, this.state.score),
                                score: this.state.score + 1,
                                current: null
                            }, () => {
                                var txt = document.querySelector("textarea")
                                txt.value = ''
                                displaySpans.innerHTML = ''
                                var aim = this.state.aim
                                var counter = 0
                                txt.disabled = true
                                aim.forEach(function (el, index) {
                                    setTimeout(() => {
                                        var newsp = document.createElement('span')
                                        newsp.innerHTML = el
                                        newsp.style.color = "white"
                                        displaySpans.appendChild(newsp)
                                        counter += 1
                                        if (counter === aim.length) {
                                            setTimeout(() => {
                                                displaySpans.innerHTML = ''
                                                txt.disabled = false
                                                txt.focus()
                                            }, 300);
                                        }

                                    }, (index) * 500);
                                    console.log(counter)

                                })

                            })

                        }, 100);

                    }

                } else {
                    var popup = document.createElement('span')
                    popup.innerHTML = answer
                    popup.style.position = "absolute"
                    popup.style.display = "block"
                    popup.style.color = "#ffea00"
                    popup.style.fontSize = "xx-large"

                    newspan.appendChild(popup)
                    newspan.style.color = "red"
                    document.querySelector("textarea").disabled = "true"
                    document.querySelector('.again').style.visibility = "visible"
                }
                displaySpans.appendChild(newspan)
            });



        })

    }

    render() {
        return (
            <>
                <div className="info">&nbsp;&nbsp;Memorize Golden Ratio</div>
                <div className="forsvg">
                <svg width="400" height="348" viewBox="0 0 200 148" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.13074 143.7C4.13074 106.901 16.6571 71.6097 38.9541 45.5889C61.2512 19.5682 91.4925 4.94987 123.025 4.94987" stroke="#C0C0C0" strokeWidth="2.66667" />
                        <path d="M196.509 90.7052C196.509 67.9614 188.767 46.1492 174.986 30.0669C161.205 13.9847 142.514 4.94975 123.025 4.94975" stroke="#C0C0C0" strokeWidth="2.66667" />
                        <path d="M151.098 143.7C163.142 143.7 174.692 138.117 183.208 128.178C191.724 118.24 196.509 104.76 196.509 90.7053" stroke="#C0C0C0" strokeWidth="2.66667" />
                        <path d="M123.025 110.94C123.025 119.628 125.983 127.961 131.248 134.105C136.512 140.248 143.652 143.7 151.098 143.7" stroke="#C0C0C0" strokeWidth="2.66667" />
                        <path d="M123.026 110.94C123.026 105.573 124.852 100.427 128.104 96.6319C131.356 92.8372 135.766 90.7054 140.364 90.7054" stroke="#C0C0C0" strokeWidth="2.66667" />
                        <path d="M151.098 103.231C151.098 101.586 150.82 99.9575 150.281 98.4377C149.741 96.918 148.951 95.5372 147.954 94.374C146.957 93.2109 145.774 92.2882 144.472 91.6587C143.169 91.0293 141.774 90.7053 140.364 90.7053" stroke="#C0C0C0" strokeWidth="2.66667" />
                        <path d="M151.098 103.231C151.098 104.243 150.927 105.246 150.595 106.181C150.263 107.116 149.776 107.966 149.163 108.682C148.55 109.397 147.822 109.965 147.02 110.353C146.219 110.74 145.36 110.939 144.492 110.939" stroke="#C0C0C0" strokeWidth="2.66667" />
                        <path d="M140.364 106.122C140.364 106.754 140.471 107.381 140.678 107.965C140.886 108.55 141.19 109.081 141.573 109.528C141.957 109.976 142.412 110.331 142.913 110.573C143.413 110.815 143.95 110.939 144.492 110.939" stroke="#C0C0C0" strokeWidth="2.66667" />
                        <path d="M140.364 106.122C140.364 105.355 140.625 104.62 141.09 104.078C141.554 103.536 142.184 103.231 142.841 103.231" stroke="#C0C0C0" strokeWidth="2.66667" />
                        <path d="M142.841 106.122V103.231" stroke="#C0C0C0" strokeWidth="2.66667" />
                        <path d="M144.492 106.122H140.364" stroke="#C0C0C0" strokeWidth="2.66667" />
                        <path d="M142.841 105.158H144.492" stroke="#C0C0C0" strokeWidth="2.66667" />
                        <path d="M143.667 105.158V106.122" stroke="#C0C0C0" strokeWidth="2.66667" />
                        <path d="M144.492 103.231V110.939" stroke="#C0C0C0" strokeWidth="2.66667" />
                        <path d="M140.364 103.231H151.098" stroke="#C0C0C0" strokeWidth="2.66667" />
                        <path d="M140.364 110.94V90.7053" stroke="#C0C0C0" strokeWidth="2.66667" />
                        <path d="M151.098 110.94H123.025" stroke="#C0C0C0" strokeWidth="2.66667" />
                        <path d="M151.098 90.7053V143.7" stroke="#C0C0C0" strokeWidth="2.66667" />
                        <path d="M123.025 90.6564H196.551" stroke="#C0C0C0" strokeWidth="2.66667" />
                        <path d="M123.025 143.7V4.94975" stroke="#C0C0C0" strokeWidth="2.66667" />
                        <path d="M4.13077 143.7V4.82214" stroke="#C0C0C0" strokeWidth="2.66667" />
                        <path d="M196.509 143.573V4.82216" stroke="#C0C0C0" strokeWidth="2.66667" />
                        <path d="M4.13065 4.82202H196.618" stroke="#C0C0C0" strokeWidth="2.66667" />
                        <path d="M4.13065 143.7H196.618" stroke="#C0C0C0" strokeWidth="2.66667" />
                        <path d="M144.492 105.158C144.492 104.647 144.318 104.157 144.009 103.796C143.699 103.434 143.279 103.231 142.841 103.231" stroke="#C0C0C0" strokeWidth="2.66667" />
                        <path d="M144.492 105.158C144.492 105.285 144.471 105.41 144.43 105.527C144.388 105.644 144.327 105.75 144.251 105.84C144.174 105.929 144.083 106 143.983 106.049C143.883 106.097 143.775 106.122 143.667 106.122" stroke="#C0C0C0" strokeWidth="2.66667" />
                        <path d="M142.843 105.157C142.843 105.283 142.864 105.409 142.906 105.525C142.947 105.642 143.008 105.749 143.084 105.838C143.161 105.928 143.252 105.998 143.352 106.047C143.452 106.095 143.56 106.12 143.668 106.12" stroke="#C0C0C0" strokeWidth="2.66667" />
                    </svg>
                </div>
                <div className="max-score">{localStorage.getItem("MaxMemorizeGOLDScore")}</div>
                <div className="score">Score: </div>
                <div className="again">Press <kbd>Space</kbd> for play again!</div>

                <div className="lovelypi">
                    <h1 className="three">1.</h1><div className="displaySpans" ><span style={{ color: 'white' }} id="firstSpan">6</span></div>
                    <textarea onChange={this.handleChange} className="inpPI" type="text" name="name"></textarea>
                </div>

            </>

        )

    }



}

//<h1>{this.state.aim}</h1>
export default ChallangeGOLD



