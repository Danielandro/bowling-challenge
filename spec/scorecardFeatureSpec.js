describe('Scorecard features', function (){
  var scorecard;

  beforeEach(function () {
    scorecard = new Scorecard();
  });

  describe('Calculating game scores', function (){
    it('roll a gutter game', function (){
      for (var i = 0; i < 20; i++) {
        scorecard.roll(0);
      }

      expect(scorecard.playerScore).toEqual(0);
    }); 
    
    it('roll all ones', function (){
      for(var i = 0; i < 20; i++) {
        scorecard.roll(1);
      }

      expect(scorecard.playerScore).toEqual(20);
    });
    
  });
});
