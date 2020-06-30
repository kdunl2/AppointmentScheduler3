import React, {Fragment} from "react";
import ScheduleSelector from 'react-schedule-selector'
import anime from 'animejs'
import arrow from '../img/arrow.png'
import carrot from '../img/carrot.png'
import {Spinner} from 'spin.js';
import * as FilePond from 'filepond';


// var todayStart = new Date();
// var dayStart = todayStart.getDay() 

var todayStart = new Date();
var diff = todayStart.getDate() - todayStart.getDay() + (todayStart.getDay() === 0 ? -6 : 1);
var dayStart = todayStart.setDate(diff)
// var dayStart1 = dayStart.getFullYear()+'-'+(dayStart.getMonth()+1)+'-'+dayStart.getDate();
// var dayStart = dayStart1.getDay() 
class InputAppointment extends React.Component {
   
            state = { schedule: [],
                      changed: false,
                      changePage: "",
                      date: dayStart,
                      weekCount: 0,
                      newDate: true,
                      sizePage: false,
                      imagePage: false,
                    //   namePage: false
                      
                      
                    }
                     
     
    componentDidMount(){



        var today = new Date();
        var day = today.getDay() || 7; 
        if( day !== 1 ){    
 
        today.setHours(-24 * (day - 1));
        console.log(today);
        this.setState({
            date: today
        })
        console.log(today);
            }
            // Wrap every letter in a span
var textWrapper = document.querySelector('.ml9 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

if(this.state.changePage !== true){
    anime.timeline({loop: true})
  .add({
    targets: '.ml9 .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.ml9',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 5000
  });
}

 


            }

            componentDidUpdate(){
                if(document.querySelector(".filepond--root") !== null){
                    document.querySelector(".filepond--root").remove()
                }
                if(this.state.changePage === true || this.state.sizePage === true ){
                    var textWrapper2 = document.querySelector('.ml9 .letters');
                    textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
                    
                    
                        anime.timeline({loop: true})
                      .add({
                        targets: '.ml9 .letter',
                        scale: [0, 1],
                        duration: 1500,
                        elasticity: 600,
                        delay: (el, i) => 45 * (i+1)
                      }).add({
                        targets: '.ml9',
                        opacity: 0,
                        duration: 1000,
                        easing: "easeOutExpo",
                        delay: 3000
                      });
                }

                if(this.state.imagePage === true && this.state.namePage !== true){
                    // Create a multi file upload component
const pond = FilePond.create({
    multiple: true,
    name: 'filepond'
});

// Add it to the DOM
document.body.appendChild(pond.element);
                }
            } 

     nextInput = () => {
         setTimeout(() => {
            document.querySelector(".nameContainer").classList.add("slideOut");

         }, 700);
        //  debugger
        this.setState({
            changed: true
        })
        setTimeout(() => {
            this.setState({
                changePage: true
            })
        }, 1200);
    }
    renderCustomDateCell = (time, selected, innerRef) => (
        <div style={{ textAlign: 'center' }} ref={innerRef}>
          {selected ? '💖' : '❌'}
        </div>
      )

      handleChange = newSchedule => {
        this.setState({ schedule: newSchedule })
        console.log(this.state.schedule);
      }

      changeDateForward = () => {
        var myDate = new Date(this.state.date);
        var nextWeek = new Date(myDate.getTime() + 7 * 24 * 60 * 60 * 1000);
        this.setState({
            date: nextWeek,
            newDate: !this.state.newDate
            // weekCount: weekCount + 1
        })
        
        setTimeout(() => {
            this.setState({
                newDate: !this.state.newDate
                
            })
        }, 1000);
      }


      changeDateBackward = () => {
        var myDate = new Date(this.state.date);
        var nextWeek = new Date(myDate.getTime() - 7 * 24 * 60 * 60 * 1000);
        this.setState({
            date: nextWeek,
            newDate: !this.state.newDate
            // weekCount: weekCount + 1
        })
        
        setTimeout(() => {
            this.setState({
                newDate: !this.state.newDate
                
            })
        }, 1000);
      }

      getSize = () => {
        this.setState({
            sizePage: true
        })
      }

      getImage = () => {
          this.setState({
              imagePage: true
          })
      }

      getName = () => {
        
        this.setState({
            namePage: true
        })
        

    }

render(){
    var myDate = this.state.date
    var newDate = myDate;
    console.log(this.state);
    // console.log(newDate.getDate());
    return(
        <Fragment>
        <h1 className = "text-center mt-5 title">New Appointment</h1>
        <form>
            {this.state.selectStyle?
            <div>
            
        {this.state.changePage ?
        <div>
        <h1 class="ml9 avail">
        <span class="text-wrapper">
            <span class="letters">When are you availible?</span>
            
        </span>
        
        </h1>
        <div className="carrotDiv">
        <img className = "carrotLeft" src={carrot} alt="arrow" onClick={this.changeDateBackward}/>
            <img className = "carrotRight" src={carrot} alt="arrow" onClick={this.changeDateForward}/>
            </div>
        {this.state.newDate ? 
        <div>
            <ScheduleSelector
            selection={this.state.schedule}
            numDays={5}
            minTime={8}
            maxTime={18}
            onChange={this.handleChange}
            renderDateCell={this.renderCustomDateCell}
            startDate={this.state.date}
    
            />
            <img className = "arrow" src={arrow} alt="arrow" onClick={this.changeDate}/>
            </div>
            :
            // <ScheduleSelector
            // selection={this.state.schedule}
            // numDays={5}
            // minTime={8}
            // maxTime={18}
            // onChange={this.handleChange}
            // renderDateCell={this.renderCustomDateCell}
            // startDate={this.state.date}
    
            // />
            <div>
                <div class="loader">Loading...</div>
            </div>
            
        }
            
        </div>
        :
        <div>
        <div className="nameContainer">
        <h1 class="ml9">
            <span class="text-wrapper">
                <span class="letters">Whats your name?</span>
                
            </span>
        </h1>
            <div className="slide-left">
                <label className="nameText" for="name">Name:</label>
                <input type="text" id="name" name="name" className="name"/>
                <input id="toggle-heart" type="checkbox"/>
                <label className= "heart"  for="toggle-heart" aria-label="like" onClick={this.nextInput}>❤</label>
            </div>
            <div>
        {this.state.changed ? 
            <div className = "moveOn">
                <h1 className = "great">
                    Great!
                </h1>
            </div> :
            <div></div> 
            }
            </div>
            </div>
            </div>
        }
        </div> :
        <div>
        {this.state.sizePage? <div>
            {this.state.imagePage ? <div>
                {this.state.namePage? 
                    <div>
                        {this.state.setApptDay ? 
                                    <div>
                                    <h1 class="ml9 avail">
                                    <span class="text-wrapper">
                                        <span class="letters">When are you availible?</span>
                                        
                                    </span>
                                    
                                    </h1>
                                    <div className="carrotDiv">
                                    <img className = "carrotLeft" src={carrot} alt="arrow" onClick={this.changeDateBackward}/>
                                        <img className = "carrotRight" src={carrot} alt="arrow" onClick={this.changeDateForward}/>
                                        </div>
                                    {this.state.newDate ? 
                                    <div>
                                        <ScheduleSelector
                                        selection={this.state.schedule}
                                        numDays={5}
                                        minTime={8}
                                        maxTime={18}
                                        onChange={this.handleChange}
                                        renderDateCell={this.renderCustomDateCell}
                                        startDate={this.state.date}
                                
                                        />
                                        <img className = "arrow" src={arrow} alt="arrow" onClick={this.changeDate}/>
                                        </div>
                                        :
                                        // <ScheduleSelector
                                        // selection={this.state.schedule}
                                        // numDays={5}
                                        // minTime={8}
                                        // maxTime={18}
                                        // onChange={this.handleChange}
                                        // renderDateCell={this.renderCustomDateCell}
                                        // startDate={this.state.date}
                                
                                        // />
                                        <div>
                                            <div class="loader">Loading...</div>
                                        </div>
                                        
                                    }
                                        
                                    </div>
                        :
                        
                       
                       <div>
                       <div className="nameContainer">
                       <h1 class="ml9">
                           <span class="text-wrapper">
                               <span class="letters">Whats your name?</span>
                               
                           </span>
                       </h1>
                           <div className="slide-left">
                               <label className="nameText" for="name">Name:</label>
                               <input type="text" id="name" name="name" className="name"/>
                               <input id="toggle-heart" type="checkbox"/>
                               <label className= "heart"  for="toggle-heart" aria-label="like" onClick={this.nextInput}>❤</label>
                           </div>
                           <div>
                       {this.state.changed ? 
                           <div className = "moveOn">
                               <h1 className = "great">
                                   Great!
                               </h1>
                           </div> :
                           <div>
                               
                           </div> 
                           }
                           </div>
                           </div>
                           </div>
                            }
                            </div>
                           :
                <div className="sizeContainer">
            <h1 class="ml9 styleText">
            <span class="text-wrapper">
                <span class="letters"> Do you have a picture?</span>
                
            </span>
        </h1>
        <img className = "arrow" src={arrow} alt="arrow" onClick={this.getName}/>

        </div>
}
            </div> :
            <div className="sizeContainer">
            <h1 class="ml9 styleText">
            <span class="text-wrapper">
                <span class="letters">  What size?</span>
                
            </span>
        </h1>
        <div className = "hairstyleContainer">
            {/* <div className = "hairstyle box">

            <h1> Wash and set</h1>

            </div> */}
                        <div class="box" onClick={this.getImage}>
                            <h1> 
                                Small
                            </h1>
                        </div>
                        <div class="box">
                            <h1> 
                                Medium
                            </h1>
                        </div>
                        <div class="box">
                            <h1> 
                                Large
                            </h1>
                        </div>

            
            </div>
            </div>
}
        </div> :
        <div>
        <div className="styleContainer">
        <h1 class="ml9 styleText">
            <span class="text-wrapper">
                <span class="letters">What are you looking to get done?</span>
                
            </span>
        </h1>
            <div className = "hairstyleContainer">
            {/* <div className = "hairstyle box">

            <h1> Wash and set</h1>

            </div> */}
                        <div class="box" onClick={this.getSize}>
                            <h1> 
                                Wash and Set
                            </h1>
                        </div>
                        <div class="box" onClick={this.getSize}>
                            <h1> 
                                Knotless Box Braids
                            </h1>
                        </div>
                        <div class="box" onClick={this.getSize}>
                            <h1> 
                                Passion Twist
                            </h1>
                        </div>
                        <div class="box" onClick={this.getSize}>
                            <h1> 
                                Sew-In
                            </h1>
                        </div>
            
            </div>
            

            </div>
            
        </div>
        }
        </div>
}

        </form>
        </Fragment>
    )
    }
}

export default InputAppointment;