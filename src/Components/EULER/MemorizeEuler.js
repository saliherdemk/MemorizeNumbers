import React, { Component, } from "react";

const EULER1 = 7182818284590452
const EULER2 = 3536028747135266
const EULER3 = 2497757247093699
const EULER4 = 9595749669676277
const EULER5 = 2407663035354759
const EULER6 = 4571382178525166
const EULER7 = 42742746639193
const EULER8 = 200305992181741
const EULER9 = 3596629043572900
const EULER10 = 334295260595630
const EULER11 = 738132328627943
const EULER12 = 490763233829880
const EULER13 = 75319525101901

const arr1 = EULER1.toString().split("")
const arr2 = EULER2.toString().split("")
const arr3 = EULER3.toString().split("")
const arr4 = EULER4.toString().split("")
const arr5 = EULER5.toString().split("")
const arr6 = EULER6.toString().split("")
const arr7 = EULER7.toString().split("")
const arr8 = EULER8.toString().split("")
const arr9 = EULER9.toString().split("")
const arr10 = EULER10.toString().split("")
const arr11 = EULER11.toString().split("")
const arr12 = EULER12.toString().split("")
const arr13 = EULER13.toString().split("")

const absarr = [].concat(arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8, arr9, arr10, arr11, arr12, arr13)

class MemorizeEuler extends Component {
    state = {
        aim: ["7"],
        score: 2,
        current: null,
    };

    componentDidMount() {
        document.addEventListener('keypress', (e) => {
            if (e.code === "Space") {
                window.location.reload(true)
            }
        })
        document.querySelector(".here").addEventListener('click', () => {
            window.location.reload(true)
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
                        if (localStorage.getItem("MaxMemorizeEulerScore")) {
                            if (localStorage.getItem("MaxMemorizeEulerScore") < absscore) {
                                localStorage.setItem("MaxMemorizeEulerScore", absscore)
                            }
                        } else {
                            localStorage.setItem("MaxMemorizeEulerScore", absscore)
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
                <div className="info">&nbsp;&nbsp;Memorize Euler's Number</div>
                <div className="foreulersvg">
                    <svg width="326" height="348" viewBox="0 0 112 127" fill="none" className="respsvg">
                        <path d="M25.3584 71.8252C24.7249 76.3499 24.4082 80.1055 24.4082 83.0918C24.4082 91.1458 27.2588 98.0234 32.96 103.725C38.6611 109.335 45.584 112.141 53.7285 112.141C60.2441 112.141 66.4883 110.828 72.4609 108.204C78.5241 105.489 87.4831 99.5618 99.3379 90.4219L102.188 94.3584C80.7412 115.625 60.2894 126.258 40.833 126.258C27.6208 126.258 17.6663 122.095 10.9697 113.77C4.27311 105.444 0.924805 96.2588 0.924805 86.2139C0.924805 72.7301 5.08757 58.9297 13.4131 44.8125C21.7386 30.6953 32.1908 19.7454 44.7695 11.9629C57.3483 4.08984 70.2891 0.15332 83.5918 0.15332C93.1842 0.15332 100.288 2.09896 104.903 5.99023C109.519 9.88151 111.826 14.4967 111.826 19.8359C111.826 27.347 108.84 34.5413 102.867 41.4189C94.9941 50.3779 83.4108 57.6175 68.1172 63.1377C57.9818 66.848 43.7288 69.7438 25.3584 71.8252ZM26.3086 65.1738C39.7018 63.6354 50.6064 61.0111 59.0225 57.3008C70.1533 52.3236 78.4788 46.3962 83.999 39.5186C89.6097 32.5505 92.415 25.9443 92.415 19.7002C92.415 15.8994 91.1934 12.8226 88.75 10.4697C86.3971 8.11686 83.0036 6.94043 78.5693 6.94043C69.3389 6.94043 59.5202 11.8724 49.1133 21.7363C38.7969 31.5098 31.1953 45.9889 26.3086 65.1738Z" fill="#C0C0C0" />
                    </svg>
                </div>
                <div className="max-score">{localStorage.getItem("MaxMemorizeEulerScore")}</div>
                <div className="score">Score: </div>
                <div className="again">Press <kbd className="sp">Space</kbd><button className="here"><kbd>Here</kbd></button> for play again!</div>

                <div className="lovely">
                    <h1 className="three">2.</h1><div className="displaySpans" ><span style={{ color: 'white' }} id="firstSpan">7</span></div>
                    <textarea onChange={this.handleChange} className="inpPI" inputMode="numeric" type="text" name="name"></textarea>
                </div>

            </>

        )

    }

}

export default MemorizeEuler



