import React from 'react';

import classes from './Select.css';

const select = () => {

  const optionList = ['CodePen', 'Dribbble', 'Behance', 'HackerRank', 'StackOverflow', 'FreeCodeCamp'];

  
  
  const selectOptions = optionList.map((option, index) => {
    return (
      <div key={index} className={classes.Option}>
        <input className={[classes.CS, classes.Top].join(' ')} type="radio" name="platform" value={option.toLowerCase()} />
        <input className={[classes.CS, classes.Bottom].join(' ')} type="radio" name="platform" value={option.toLowerCase()} />
        <i className="fab fa-codepen"></i>
        <span className={classes.Label}>{option}</span>
        <span className={classes.OptVal}>{option}</span>
      </div>
    );
  });

  return (
    <form className={classes.AppCover}>
      <div className={classes.SelectBox}>
        <input type="checkbox" className={classes.OptionsViewButton} />
        <div className={[classes.Brd, classes.SelectButton].join(' ')}>
          <div className={classes.SelectedValue}>
            <span>Select a platform</span>
          </div>
          <div className={classes.Chevrons}>
            <i className="fas fa-chevron-up"></i>
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
        <div className={classes.Options}>
          {selectOptions}
          {/* <div className={classes.Option}>
            <input className={[classes.CS, classes.Top].join(' ')} type="radio" name="platform" value="codepen" />
            <input className={[classes.CS, classes.Bottom].join(' ')} type="radio" name="platform" value="codepen" />
            <i className="fab fa-codepen"></i>
            <span className={classes.Label}>CodePen</span>
            <span className={classes.OptVal}>CodePen</span>
          </div>
          <div className={classes.Option}>
            <input className={[classes.CS, classes.Top].join(' ')} type="radio" name="platform" value="dribbble" />
            <input className={[classes.CS, classes.Bottom].join(' ')} type="radio" name="platform" value="dribbble" />
            <i className="fab fa-dribbble"></i>
            <span className={classes.Label}>Dribbble</span>
            <span className={classes.OptVal}>Dribbble</span>
          </div>
        <div className={classes.Option}>
          <input className={[classes.CS, classes.Top].join(' ')} type="radio" name="platform" value="behance" />
          <input className={[classes.CS, classes.Bottom].join(' ')} type="radio" name="platform" value="behance" />
          <i className="fab fa-behance"></i>
          <span className={classes.Label}>Behance</span>
          <span className={classes.OptVal}>Behance</span>
        </div>
        <div className={classes.Option}>
          <input className={[classes.CS, classes.Top].join(' ')} type="radio" name="platform" value="hackerrank" />
          <input className={[classes.CS, classes.Bottom].join(' ')} type="radio" name="platform" value="hackerrank" />
          <i className="fab fa-hackerrank"></i>
          <span className={classes.Label}>HackerRank</span>
          <span className={classes.OptVal}>HackerRank</span>
        </div>
        <div className={classes.Option}>
          <input className={[classes.CS, classes.Top].join(' ')} type="radio" name="platform" value="stackoverflow" />
          <input className={[classes.CS, classes.Bottom].join(' ')} type="radio" name="platform" value="stackoverflow" />
          <i className="fab fa-stack-overflow"></i>
          <span className={classes.Label}>StackOverflow</span>
          <span className={classes.OptVal}>StackOverflow</span>
        </div>
        <div className={classes.Option}>
          <input className={[classes.CS, classes.Top].join(' ')} type="radio" name="platform" value="freecodecamp" />
          <input className={[classes.CS, classes.Bottom].join(' ')} type="radio" name="platform" value="freecodecamp" />
          <i className="fab fa-free-code-camp"></i>
          <span className={classes.Label}>FreeCodeCamp</span>
          <span className={classes.OptVal}>FreeCodeCamp</span>
        </div> */}
          <div className={classes.OptionBg}></div>
        </div>
      </div>
    </form>
  );
}

export default select;