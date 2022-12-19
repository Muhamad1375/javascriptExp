function pick(arr) {
      const idx = Math.floor(Math.random() * values.length);
      return arr[idx];
}

function getCard() {
      const values = [
            '2',
            '3', 
            '4', 
            '5', 
            '6', 
            '7', 
            '8', 
            '9', 
            '10',
            'J',
            'Q', 
            'K', 
            'A'
        ];

      const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
      return {value: pick(values), suit: pick(suits) };

}