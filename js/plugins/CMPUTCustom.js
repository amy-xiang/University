/*:
* @plugindesc CMPUT250 Custom Code
* @author Soundless Studios
*
* Plugin Commands:
*  isPlayerOnEvent (int)      # Check if the player is currently on the provided event id.
*   Returns: true or false if player is on the event. Nothing will happen if invalid ids.
*
* @help
* You shouldn't need help.
*/
(function() {

  var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
  Game_Interpreter.prototype.pluginCommand = function(command, args){
    _Game_Interpreter_pluginCommand.call(this, command, args);
    if(command == "isPlayerOnEvent"){
      var providedID = args[0];
      if(providedID == null || providedID <= 0){ console.log("Invalid providedID"); return; }
      var playerCurrentID = $gameMap.eventIdXy($gamePlayer.x, $gamePlayer.y);
      if(playerCurrentID === 0){ return; }
      if(providedID == playerCurrentID){
        $gameSelfSwitches.setValue([$gameMap._mapId, providedID, 'D'], true);
      }else{
        $gameSelfSwitches.setValue([$gameMap._mapId, providedID, 'D'], false);
      }
    }
  };

})();
