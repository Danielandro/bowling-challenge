describe('Scorecard', function () {
  var bowlingScorecard;

  beforeEach(function () {
    bowlingScorecard = new BowlingScorecard();
  });

  describe('Before game starts', function () {
    it('Total score is zero', function () {
      expect(bowlingScorecard.totalScore()).toEqual(0);
    });
  });
});
