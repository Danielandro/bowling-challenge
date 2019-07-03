describe('Scorecard', function (){
  var bowlingScorecard;

  beforeEach(function (){
    scorecard = new Scorecard();
  });

  describe('Before game starts', function (){
    it('Total score is 0', function (){
      expect(scorecard.totalScore()).toEqual(0);
    });

    it('Player is in first frame', function (){
      expect(scorecard.currentFrame().length).toEqual(0);
    });

    it('There are no rolls in the frame', function (){
      expect(scorecard.currentFrame()).toEqual([]);
    });

    it('Frame score is 0', function (){
      expect(scorecard.frameScore).toEqual(0);
    });
  });  
});
