/*:
* @plugindesc CMPUT250 Custom Code
* @author Soundless Studios
*
* Plugin Commands:
*  isPlayerStillOnEvent      # Check if the player is currently on the provided event id.
*   Returns: true or false in the D self switch.
*
*  isEventOverlapping (int)  # Check if an event is overlapping the caller.
*   Returns: true or false in the D self switch.
*  changeSwitchValue (int) (A/B/C/D) (boolean)  # Check if an event is overlapping the caller.
*   Returns: true or false in the D self switch.
*
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
    }else if(command == "isEventOverlapping"){
      var selfID = this.eventId();
      var otherID = args[0];
      if($gameMap.event(selfID).x == $gameMap.event(otherID).x && $gameMap.event(selfID).y == $gameMap.event(otherID).y){
        $gameSelfSwitches.setValue([$gameMap._mapId, selfID, 'D'], true);
      }else{
        $gameSelfSwitches.setValue([$gameMap._mapId, selfID, 'D'], false);
      }
    }else if(command == "changeSwitchValue"){
      var providedEvent = args[0];
      if(providedEvent != null && providedEvent >= 0){
        if(args[2] == 'true'){
          $gameSelfSwitches.setValue([$gameMap._mapId, providedEvent, args[1]], true);
        }else{
          $gameSelfSwitches.setValue([$gameMap._mapId, providedEvent, args[1]], false);
        }
      }else{
        console.log("Unknown Event Provided!")
      }
    }
  };

})();
