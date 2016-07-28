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

  });

  it('moves',function(){
    var oldPosition = box.position();
    $(document).trigger('keydown');
    var newPosition = box.position();
    expect(newPosition.top).not.toBe(oldPosition.top);
    expect(newPosition.left).not.toBe(oldPosition.left);
  });
});
