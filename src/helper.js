export function getOrdinal(num) {
    switch (num) {
      case 1:
      case 31: 
        return "st";
      case 2: 
        return "nd";
      case 3:
        return "rd";
      default: 
        return "th";   
    } 
  }