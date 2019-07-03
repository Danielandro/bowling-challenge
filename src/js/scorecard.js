var Scorecard = function BowlingScorecard() {
  this.playerScore = 0;
  this.frame = [];
  this.frameScore = 0;
};

Scorecard.prototype.totalScore = function totalScore() {
  return this.playerScore;
};

Scorecard.prototype.currentFrame = function () {
  return this.frame;
};

Scorecard.prototype.roll = function (pins) {
  this.playerScore += pins;
  this.frame.push(pins);
};