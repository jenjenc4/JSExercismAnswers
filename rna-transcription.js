//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
// We're going to get dna and return rna

export const toRna = (dna) => 
{
 // throw new Error("Remove this statement and implement this function<-- this means we write 
 //the body of the funtion since they gave us the name of the funciton and the function call. 
 //command d to edit all lines that are similar to the highligted intant.. shift alt f
 //The outcome we want is a string not one thing (hence we dont do a return)
 //for flow control--use may use diff statemetns like if, switchstatement// 
 let rna = "" //we call the value an empty string.. a string w no characters
 for  (let num =0; num <dna.length; num++)
  {
     let char = dna.charAt(num)
 
   if ( char == 'G') 
    {  
   // to c
   rna = rna + "C"  //concatnating at end of string + C
    }
    else if ( char == 'C')
    {
      //to G
      rna = rna + "G"
    }
    else if (char == 'T')
    {
      //to A
      rna = rna + "A"
    }
    else if (char == 'A')
    {
    //to U
    rna = rna + "U"
    }
  }
  return rna
}
