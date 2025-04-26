const pronoun = ['the','our'];
const adj = ['great', 'big' ];
const noun = ['jogger','racoon'];
const domin = ['.com','.net','.us','.io']


for (let i = 0; i<pronoun.length; i++) {
    for (let j = 0; j<adj.length; j++){
        for (let k = 0; k<noun.length; k++){
            for (let r = 0; r<domin.length; r++){
        console.log( pronoun[i] + adj[j] + noun[k] + domin[r]);
      }
    }
  }
}