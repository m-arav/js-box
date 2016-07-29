// To set path for jasmine correctly
var path = '';
if (typeof window.__karma__ !== 'undefined') {
  path += 'base/'
}
jasmine.getFixtures().fixturesPath = path + 'test/fixtures/';


// Test code

describe('The div', function(){

  beforeEach(function(){

    loadFixtures('index.html');
    box = $('.box');
    $.holdReady(false);
    oldPosition = box.position();

  });

  it('moves down',function(){
    var key = $.Event('keydown');
    key.keyCode = 40;
    $(document).trigger(key);
    var newPosition = box.position();
    expect(newPosition.top).toBe(oldPosition.top + 30);
  });
  it('moves left',function(){
    var key = $.Event('keydown');
    key.keyCode = 37;
    $(document).trigger(key);
    var newPosition = box.position();
    expect(newPosition.left).toBe(oldPosition.left - 30);
  });
  it('moves up',function(){
    var key = $.Event('keydown');
    key.keyCode = 38;
    $(document).trigger(key);
    var newPosition = box.position();
    expect(newPosition.top).toBe(oldPosition.top - 30);
  });
  it('moves right',function(){
    var key = $.Event('keydown');
    key.keyCode = 39;
    $(document).trigger(key);
    var newPosition = box.position();
    expect(newPosition.left).toBe(oldPosition.left + 30);
  });

  it('Validates next move - should not move up', function() {
    var key = $.Event('keydown');
    key.keyCode = 38;
    expect(validateMove(key, 100, 100, { top: 25, left: 25 })).toBe(false);
  });

});

describe('Move Validation', function(){

  it('should not move up', function() {
      var key = $.Event('keydown');
      key.keyCode = 38;
      expect(validateMove(key, 100, 100, { top: 25, left: 25 })).toBe(false);
    });

  it('should not move down', function() {
        var key = $.Event('keydown');
        key.keyCode = 40;
        expect(validateMove(key, 100, 100, { top: 75, left: 75 })).toBe(false);
      });

  it('should not move left', function() {
        var key = $.Event('keydown');
        key.keyCode = 37;
        expect(validateMove(key, 100, 100, { top: 10, left: 10 })).toBe(false);
      });


  it('should not move right', function() {
          var key = $.Event('keydown');
          key.keyCode = 39;
          expect(validateMove(key, 100, 100, { top: 50, left: 75 })).toBe(false);
        });

  it('should down', function() {
          var key = $.Event('keydown');
          key.keyCode = 40;
          expect(validateMove(key, 100, 100, { top: 50, left: 75 })).toBe(false);
        });

});
