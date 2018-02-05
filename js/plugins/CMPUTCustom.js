/*:
* @plugindesc CMPUT250 Custom Code
* @author Soundless Studios
*
* Plugin Commands:
*  isPlayerStillOnEvent (int)      # Check if the player is currently on the provided event id.
*   Returns: true or false in the D self switch.
*
* @help
* You shouldn't need help.
*/
(function() {

  var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
  Game_Interpreter.prototype.pluginCommand = function(command, args){
    _Game_Interpreter_pluginCommand.call(this, command, args);
    if(command == "isPlayerStillOnEvent"){
      var playerCurrentID = $gameMap.eventIdXy($gamePlayer.x, $gamePlayer.y);
      var providedID = this.eventId();
      if(playerCurrentID === 0){ return; }
      if(providedID == playerCurrentID){
        $gameSelfSwitches.setValue([$gameMap._mapId, providedID, 'D'], true);
      }else{
        $gameSelfSwitches.setValue([$gameMap._mapId, providedID, 'D'], false);
      }
    }
  };

})();
