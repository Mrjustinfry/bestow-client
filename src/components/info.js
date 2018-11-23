import React from 'react';

import SignupForm from './signupForm';

import './signupForm.css';
import './info.css';

export default function Info() {
    return (
            <div className="info">
              <div className="infoHeadBox">
                <h1 className="infoHead">Welcome to Bestow!</h1>
                <h2 className="tag">...it's where your things go</h2>
              </div>
              <div className="infoWhatBox">
                <h3 className="question">What is Bestow?</h3>
                <p>   Do you ever wonder what happened to that book you lent to your best friend? Or maybe you left your cookie tray at your
                aunt's house on Thanksgiving and never got it back. Did you borrow something and can't remember who you borrowed it from?
                Bestow is here to keep track of all of the things you've borrowed or bestowed! With Bestow you'll never lose track of your
                belongings again. It's easy to use and simple to sign up.
                 </p>
              </div>
              <div className="infoHowBox">
                <h3 className="question">How does Bestow work?</h3>
                <p>   Once you log in, you'll be taken to your list of belongings. To add a new item to your list, just click the
                <img src="./addBtn.png" alt="add button" /> on the bottom right corner. Enter the information about the item.
                <img src="./who.png" alt="who icon" /> is where you enter the name of the person that you either borrowed from or bestowed
                to, <img src="./what.png" alt="what icon" /> is where you enter what the item is, and <img src="./when.png" alt="when icon" />
                is where you enter the date it was borrowed or bestowed, then click either <img src="./borrowed.png" alt="borrowed" />
                or <img src="./bestowed.png" alt="bestowed" /> and it will be added to your list. The color of the item in your list will
                let you know if it is <span classsName="blue"> borrowed</span> or <span className="purple">bestowed</span>. You can filter the
                 items by clicking on the icons at the top of the screen. <img src="./who.png" alt="who icon" /> will sort by the person's name,
                  <img src="./what.png" alt="what icon" /> will sort by the name of the item, and <img src="./when.png" alt="when icon" />
                  will sort by the date. If you click the item in the list it will exand to give you the full details of the item and the
                  option to <img src="./edit.png" alt="edit icon" /> edit the information or <img src="./trash.png" alt="trash icon" />
                  remove the item once it has returned to it's rightful owner.</p>
              </div>
              <div className="infoSignupBox">
                <h3 className="question">Sounds great! How do I get started?</h3>
                <p>That's easy! Just sign up!</p>
                <SignupForm />
              </div>
              <footer className="infoFoot">&#169; <span className="me">Mr.Justin(Fry);</span> 2018</footer>
            </div>
    );
  };
