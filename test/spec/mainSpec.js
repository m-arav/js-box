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

});
