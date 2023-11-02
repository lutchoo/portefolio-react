import { useState, useEffect } from "react";

export function Textload() {
    const [text, setText] = useState('');
    const words = ["Developer", "Freelancer", "Designer"];
    let wordIndex = 0;
    let letterIndex = 0;
  
    const textload = () => {
      const currentWord = words[wordIndex];
      const currentText = currentWord.slice(0, letterIndex + 1);
      setText(currentText);
      letterIndex++;
  
      if (letterIndex > currentWord.length) {
        letterIndex = 0;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }
  
    useEffect(() => {
      textload();
      const interval = setInterval(textload, 200); // Mettez à jour le texte toutes les 1000 millisecondes
  
      // Nettoyer le setInterval lors du démontage du composant
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    return(
        <h2> i'am {text}</h2>
    )
}