import React, { Component, } from "react";

const EULER1 = 182818284590452
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

class ChallangeEuler extends Component {
    state = {
        aim: "7",
        score: 0,
        current: null,
    };

    componentDidMount() {
        document.querySelector('textarea').focus();
        document.addEventListener('keypress', (e) => {
            if (e.code === "Space") {
                window.location.reload(true)
            }
        })
    }

    handleChange = (e) => {

        var str = e.target.value.toString().slice(-1);
        var all = str.split("")

        this.setState({

            current: (e.target.value).toString().slice(-1)
        }, () => {
            console.log(absarr)

            all.forEach(element => {
                var displaySpans = document.querySelector('.displaySpans')
                var newspan = document.createElement('span')
                newspan.innerHTML = element
                if ((this.state.aim) === (this.state.current)) {
                    newspan.style.color = "#ffea00"
                    this.setState({
                        score: this.state.score + 1
                    }, () => {
                        document.querySelector('.score').innerHTML = "Score: " + this.state.score
                        if (localStorage.getItem("MaxChallangeEulerScore")) {
                            if (localStorage.getItem("MaxChallangeEulerScore") < this.state.score) {
                                localStorage.setItem("MaxChallangeEulerScore", this.state.score)
                            }
                        } else {
                            localStorage.setItem("MaxChallangeEulerScore", this.state.score)
                        }
                    })
                } else {
                    var popup = document.createElement('span')
                    popup.innerHTML = this.state.aim
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

            this.setState({
                aim: ((this.state.aim + absarr.shift().toString()))
            }, () => {

                this.setState({
                    aim: (this.state.aim).toString().slice(-1),

                })
            })

        })

    }

    render() {
        return (
            <>
                <div className="info">&nbsp;&nbsp;Euler's Number Challenge</div>
                <div className="forsvg">
                    EULER

                </div>
                <div className="max-score">{localStorage.getItem("MaxChallangeEulerScore")}</div>
                <div className="score">Score: </div>
                <div className="again">Press <kbd>Space</kbd> for play again!</div>

                <div className="lovely">
                    <h1 className="three">2.</h1><div className="displaySpans" ></div>
                    <textarea onChange={this.handleChange} className="inpGOLD" type="text" name="name"></textarea>
                </div>

            </>

        )

    }



}

//<h1>{this.state.aim}</h1>
export default ChallangeEuler



