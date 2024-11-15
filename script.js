
   let questions= [
      {
        "question": "Was ist die Hauptstadt von Frankreich?",
        "answer": "Berlin",
        "answer":  "Madrid",
        "answer":  "Paris",
        "answer": "Rom",
        "rightAnswer": 2
      },
      {
        "question": "Welches Element hat das chemische Symbol 'O'?",
        "answer": "Gold",
        "answer": "Sauerstoff",
        "answer": "Wasserstoff",
        "answer":  "Eisen",
        "rightAnswer": 1
      },
      {
        "question": "Wer schrieb 'Faust'?",
        "answer": "Johann Wolfgang von Goethe",
        "answer":  "Friedrich Schiller",
        "answer":  "Heinrich Heine",
        "answer": "Thomas Mann",
        "rightAnswer": 0
      },
      {
        "question": "Welcher Planet ist der Sonne am nächsten?",
        "answer":"Venus",
        "answer": "Mars",
        "answer": "Merkur",
        "answer":"Jupiter",
        "rightAnswer": 2
      },
      {
        "question:": "In welchem Jahr begann der Zweite Weltkrieg?",
        "answer":"1914",
        "answer": "1939",
        "answer": "1945",
        "answer": "1961",
        "rightAnswer": 1
      }
    ];


    let currentQuestion = 0;

    function init() {
       document.getElementById('all_questions').innerHTML= questions.length;

       showQuestion();
    }
    function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('questiontext').innerHTML = question['question'] ;
        
    }