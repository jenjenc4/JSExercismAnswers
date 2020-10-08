//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

 export const reverseString = (orgString) => //function adopts the name of variable reverseString..input
//cont. goes into parameters.  //other module "spec" can see it. JS is being exported out to spec
{
  let ans = "";  //that's my answer and it will be passed out..let a memory location be this name..
  for (let element = orgString.length-1; element > -1; element--)  //element is referring to position of char. length-1 says start at the last character of string
  //if i wanted to start on the first character then org.String.length-0 ..decrement is countdown. post decerments//pre decerment
  {
    ans += orgString[element] //I have to output the ans and called it ans..bracket says i just want a position. 
    //shorthand for anst = ans + orgString [element]  concatnate two strings together.  
    
    }
    return ans
  
};


