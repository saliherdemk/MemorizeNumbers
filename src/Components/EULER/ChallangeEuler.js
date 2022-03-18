import React, { Component, } from "react";
import SpecificNumbers from "../../utils/utils";

const absarr = SpecificNumbers.euler();

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
        document.querySelector(".here").addEventListener('click', () => {
            window.location.reload(true)
        })
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
                <div className="foreulersvg">
                    <svg width="326" height="348" viewBox="0 0 112 127" fill="none" className="respsvg">
                        <path d="M25.3584 71.8252C24.7249 76.3499 24.4082 80.1055 24.4082 83.0918C24.4082 91.1458 27.2588 98.0234 32.96 103.725C38.6611 109.335 45.584 112.141 53.7285 112.141C60.2441 112.141 66.4883 110.828 72.4609 108.204C78.5241 105.489 87.4831 99.5618 99.3379 90.4219L102.188 94.3584C80.7412 115.625 60.2894 126.258 40.833 126.258C27.6208 126.258 17.6663 122.095 10.9697 113.77C4.27311 105.444 0.924805 96.2588 0.924805 86.2139C0.924805 72.7301 5.08757 58.9297 13.4131 44.8125C21.7386 30.6953 32.1908 19.7454 44.7695 11.9629C57.3483 4.08984 70.2891 0.15332 83.5918 0.15332C93.1842 0.15332 100.288 2.09896 104.903 5.99023C109.519 9.88151 111.826 14.4967 111.826 19.8359C111.826 27.347 108.84 34.5413 102.867 41.4189C94.9941 50.3779 83.4108 57.6175 68.1172 63.1377C57.9818 66.848 43.7288 69.7438 25.3584 71.8252ZM26.3086 65.1738C39.7018 63.6354 50.6064 61.0111 59.0225 57.3008C70.1533 52.3236 78.4788 46.3962 83.999 39.5186C89.6097 32.5505 92.415 25.9443 92.415 19.7002C92.415 15.8994 91.1934 12.8226 88.75 10.4697C86.3971 8.11686 83.0036 6.94043 78.5693 6.94043C69.3389 6.94043 59.5202 11.8724 49.1133 21.7363C38.7969 31.5098 31.1953 45.9889 26.3086 65.1738Z" fill="#C0C0C0" />
                    </svg>

                </div>
                <div className="max-score">{localStorage.getItem("MaxChallangeEulerScore")}</div>
                <div className="score">Score: </div>
                <div className="again">Press <kbd className="sp">Space</kbd><button className="here"><kbd>Here</kbd></button> for play again!</div>

                <div className="lovely">
                    <h1 className="three">2.</h1><div className="displaySpans" ></div>
                    <textarea onChange={this.handleChange} className="inpGOLD" inputmode="numeric" type="text" name="name"></textarea>
                </div>

            </>

        )

    }



}

export default ChallangeEuler



