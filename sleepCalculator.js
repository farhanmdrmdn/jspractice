const getSleepHours = day => {
    if (day === 'monday') {
      return 8;
    } else if (day === 'tuesday') {
      return 7;
    } else if (day === 'wednesday') {
      return 8;
    } else if (day === 'thursday') {
      return 7;
    } else if (day === 'friday') {
      return 7;
    } else if (day === 'saturday') {
      return 10;
    } else if (day === 'sunday') {
      return 10;
    } else {
      return ('Error!');
    }
  };
  
  const getActualSleepHours = () => 
    getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    
    // Compare between actual and ideal sleep hour.
    if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep.');
    } 
      else if (actualSleepHours > idealSleepHours) {
    console.log('Youre well-rested! You got ' + (actualSleepHours - idealSleepHours) + ' hour more of sleep this week.');
    } 
      else if (actualSleepHours < idealSleepHours) {
    console.log('Youre sleep deprived. You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
    } 
      else {
    console.log('Error.')
    }
  };
  
  calculateSleepDebt();
  
  
  
  
  
  
  
  
  
  
  