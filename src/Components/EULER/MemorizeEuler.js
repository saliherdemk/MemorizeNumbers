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


//2.71828182845904523536028747135266249775724709369995957496696
//7627724076630353547594571382178525166427427466391932003059921
//81741359662904357290033429526059563073813232862794349076323382988075319525101901


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
                <div className="info">&nbsp;&nbsp;Memorize Euler's Number</div>
                <div className="forsvg">
                    Euler
                </div>
                <div className="max-score">{localStorage.getItem("MaxMemorizeEulerScore")}</div>
                <div className="score">Score: </div>
                <div className="again">Press <kbd>Space</kbd> for play again!</div>

                <div className="lovely">
                    <h1 className="three">2.</h1><div className="displaySpans" ><span style={{ color: 'white' }} id="firstSpan">7</span></div>
                    <textarea onChange={this.handleChange} className="inpPI" type="text" name="name"></textarea>
                </div>

            </>

        )

    }



}

//<h1>{this.state.aim}</h1>
export default MemorizeEuler



