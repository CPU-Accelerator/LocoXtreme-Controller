// PASTE THIS INTO THE CONOLE
let gamepadConnected = false;
    let animationFrameId;
  
    function connectGamepad() {
      if (gamepadConnected) return "Gamepad Connected!";
  
      gamepadConnected = true;

      window.addEventListener("gamepadconnected", handleGamepadConnected);
    }
  
    function handleGamepadConnected(event) {
      const gamepad = event.gamepad;
      console.log("Gamepad connected:", gamepad);
  
      function updateGamepadState() {
        const gamepads = navigator.getGamepads();
        const gamepad = gamepads[0]; // Assuming only one gamepad is connected
  
        if (gamepad.axes[0] > 0.1) {
          window.RTurn = 1 - gamepad.axes[0]
        } else if (gamepad.axes[0] < -0.1) {
          window.LTurn = 1 - (gamepad.axes[0] * -1)
        } else {
          window.RTurn = 0
          window.LTurn = 0
        }
        window.Forward = gamepad.buttons[7].value
        window.Backward = gamepad.buttons[6].value
        console.log(window.RTurn, window.LTurn, window.Forward, window.Backward)
        // Handle axis values
        const axisThreshold = 0.1;
        
      }
  
      // Start updating the gamepad state
      const interval = setInterval(updateGamepadState, 16);
    }
    connectGamepad();