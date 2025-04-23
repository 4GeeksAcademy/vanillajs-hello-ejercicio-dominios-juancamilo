const pronoun = ['the','our'];
const adj = ['great', 'big' ];
const noun = ['jogger','racoon'];
const domin = ['.com','.net','.us','.io']


for (i = 0; i<pronoun.length; i++) {
    for (j = 0; j<adj.length; j++){
        for (k = 0; k<noun.length; k++){
            for (r = 0; r<domin.length; r++){
        console.log( pronoun[i] + adj[j] + noun[k] + domin[r]);
      }
    }
  }
}