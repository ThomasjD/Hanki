console.log('Was clicked')
this.setState({
  username: "Thomas",
  decks:
    {
      rock:
        [
          {question: "encomiable?", answer: "praisworthy"},
          {question: "viciado?", answer: "foul, unbreathable"}
        ],
      verb:
        [
          {question: "imponerse?", answer: "prevail, win"},
          {question: "precariedad?", answer: "uncertainty"}
        ]
      },
  cards:
    [
        {deck: "adj", question: "encomiable?", answer: "praisworthy"},
        {deck: "adj", question: "viciado", answer: event.target.value},
        {deck: "verbs", question: "imponerse?", answer: "prevail, win"},
        {deck: "verbs", question: "precariedad?", answer: "uncertainty"}
    ],
   showCard: false,
   showDecks: false
})
