var copyRecursiveSync = function(src, dest) 
{
  var _path = [];
  var _newDest = path.dirname(dest);
  _path.push(_newDest);

  while(path.dirname(_newDest) != _newDest)
  {
    _newDest = path.dirname(_newDest);
    if(_newDest.indexOf(NECTAR_PATH) == 0)
    {
      _path.push(_newDest);
    }
  }

  for(var i = _path.length; i > -1; i--)
  {
    try 
    {
      fs.mkdirSync(_path[i]);
    }
    catch(e){}
  }
  fs.copyFileSync(src, dest); 
};

module.exports = copyRecursiveSync;