screenNumber = "0";
operation = "";
firstOpNumber = parseFloat(0);
ToChange = false;
CanSolve = false;
OpPrec = "";
OpNumPrec = parseFloat(0);
point = false;
easterEgg = false;
Eggsite = "https://th.bing.com/th/id/OIP.WqtFB_uNBwXtVXCh2X76YAHaKG?w=154&h=210&c=7&r=0&o=5&dpr=1.5&pid=1.7";

$("#button1").on("click", function(event) {
  easterEgg = false;
  if (ToChange) {
    screenNumber = "1";
    ToChange = false;
  } else {
    if (screenNumber === "0") {
      screenNumber = "1";
    } else {
      screenNumber = screenNumber + "1";
    };
  };
  point = false;
  changeText("screen", screenNumber);
});

$("#button2").on("click", function(event) {
  easterEgg = false;
  if (ToChange) {
    screenNumber = "2";
    ToChange = false;
  } else {
    if (screenNumber === "0") {
      screenNumber = "2";
    } else {
      screenNumber = screenNumber + "2";
    };
  };
  point = false;
  changeText("screen", screenNumber);
});

$("#button3").on("click", function(event) {
  easterEgg = false;
  if (ToChange) {
    screenNumber = "3";
    ToChange = false;
  } else {
    if (screenNumber === "0") {
      screenNumber = "3";
    } else {
      screenNumber = screenNumber + "3";
    };
  };
  point = false;
  changeText("screen", screenNumber);
});

$("#button4").on("click", function(event) {
  easterEgg = false;
  if (ToChange) {
    screenNumber = "4";
    ToChange = false;
  } else {
    if (screenNumber === "0") {
      screenNumber = "4";
    } else {
      screenNumber = screenNumber + "4";
    };
  };
  point = false;
  changeText("screen", screenNumber);
});

$("#button5").on("click", function(event) {
  easterEgg = false;
  if (ToChange) {
    screenNumber = "5";
    ToChange = false;
  } else {
    if (screenNumber === "0") {
      screenNumber = "5";
    } else {
      screenNumber = screenNumber + "5";
    };
  };
  point = false;
  changeText("screen", screenNumber);
});

$("#button6").on("click", function(event) {
  easterEgg = false;
  if (ToChange) {
    screenNumber = "6";
    ToChange = false;
  } else {
    if (screenNumber === "0") {
      screenNumber = "6";
    } else {
      screenNumber = screenNumber + "6";
    };
  };
  point = false;
  changeText("screen", screenNumber);
});

$("#button7").on("click", function(event) {
  easterEgg = false;
  if (ToChange) {
    screenNumber = "7";
    ToChange = false;
  } else {
    if (screenNumber === "0") {
      screenNumber = "7";
    } else {
      screenNumber = screenNumber + "7";
    };
  };
  point = false;
  changeText("screen", screenNumber);
});

$("#button8").on("click", function(event) {
  easterEgg = false;
  if (ToChange) {
    screenNumber = "8";
    ToChange = false;
  } else {
    if (screenNumber === "0") {
      screenNumber = "8";
    } else {
      screenNumber = screenNumber + "8";
    };
  };
  point = false;
  changeText("screen", screenNumber);
});

$("#button9").on("click", function(event) {
  easterEgg = false;
  if (ToChange) {
    screenNumber = "9";
    ToChange = false;
  } else {
    if (screenNumber === "0") {
      screenNumber = "9";
    } else {
      screenNumber = screenNumber + "9";
    };
  };
  point = false;
  changeText("screen", screenNumber);
});

$("#button0").on("click", function(event) {
  if (easterEgg === true) {
    window.location.replace(Eggsite);
  };
  if (ToChange) {
    screenNumber = "0";
    ToChange = false;
  } else {
    if (screenNumber === "0") {
      screenNumber = "0";
    } else {
      screenNumber = screenNumber + "0";
    };
  };
  point = false;
  changeText("screen", screenNumber);
});

$("#buttonpt").on("click", function(event) {
  console.log(point);
  easterEgg = false;
  if (!(point)) {
    if (ToChange) {
      screenNumber = "0.";
      ToChange = false;
    } else {
      if (screenNumber === "0") {
        screenNumber = "0.";
      } else {
        screenNumber = screenNumber + ".";
      };
    };
    changeText("screen", screenNumber);
    point = true;
  };
});

$("#supp").on("click", function(event) {
  easterEgg = false;
  screenNumber = screenNumber.slice(0, -1);
  if (screenNumber.length === 0) {
    screenNumber = "0";
  };
  if (screenNumber.slice(-1) === ".") {
    point = true;
  } else {
    point = false;
  };
  changeText("screen", screenNumber);
});
$("#eff").on("click", function(event) {
  screenNumber = "0";
  firstOpNumber = 0;
  operation = "";
  ToChange = false;
  OpNumPrec = 0;
  OpPrec = "";
  changeText("screen", screenNumber);
  changeText("OpScreen", operation);
  easterEgg = true;
  point = false;
});

$("#buttonp").on("click", function(event) {
  easterEgg = false;
  if (!(screenNumber === "") && CanSolve) {
    if (operation === "+") {
      screenNumber = firstOpNumber + parseFloat(screenNumber);
      screenNumber = screenNumber.toFixed(2);
      screenNumber.toString();
      if (screenNumber.slice(-1) === "0") {
        if (screenNumber.slice(-2) === "00") {
          screenNumber = screenNumber.slice(0, -3);
        } else {
          screenNumber = screenNumber.slice(0, -1);
        };
      };
    };
    if (operation === "-") {
      screenNumber = firstOpNumber - parseFloat(screenNumber);
      screenNumber = screenNumber.toFixed(2);
      screenNumber.toString();
      if (screenNumber.slice(-1) === "0") {
        if (screenNumber.slice(-2) === "00") {
          screenNumber = screenNumber.slice(0, -3);
        } else {
          screenNumber = screenNumber.slice(0, -1);
        };
      };
    };
    if (operation === "x") {
      screenNumber = firstOpNumber * parseFloat(screenNumber);
      screenNumber = screenNumber.toFixed(2);
      screenNumber.toString();
      if (screenNumber.slice(-1) === "0") {
        if (screenNumber.slice(-2) === "00") {
          screenNumber = screenNumber.slice(0, -3);
        } else {
          screenNumber = screenNumber.slice(0, -1);
        };
      };
    };
    if (operation === ":") {
      screenNumber = firstOpNumber / parseFloat(screenNumber);
      screenNumber = screenNumber.toFixed(2);
      screenNumber.toString();
      if (screenNumber.slice(-1) === "0") {
        if (screenNumber.slice(-2) === "00") {
          screenNumber = screenNumber.slice(0, -3);
        } else {
          screenNumber = screenNumber.slice(0, -1);
        };
      };
    };
    changeText("screen", screenNumber);
    changeText("OpScreen", operation);
    operation = "+";
    firstOpNumber = parseFloat(screenNumber);
    screenNumber = "";
    CanSolve = true;
    ToChange = true;
    changeText("OpScreen", operation);
  } else {
    operation = "+";
    if (!(screenNumber === "")) {
      firstOpNumber = parseFloat(screenNumber);
    };
    ToChange = true;
    changeText("OpScreen", operation);
    screenNumber = "";
    CanSolve = true;
    console.log(screenNumber)
  };
  point = false;
});

$("#buttonm").on("click", function(event) {
  easterEgg = false;
  if (!(screenNumber === "") && CanSolve) {
    if (operation === "+") {
      screenNumber = firstOpNumber + parseFloat(screenNumber);
      screenNumber = screenNumber.toFixed(2);
      screenNumber.toString();
      if (screenNumber.slice(-1) === "0") {
        if (screenNumber.slice(-2) === "00") {
          screenNumber = screenNumber.slice(0, -3);
        } else {
          screenNumber = screenNumber.slice(0, -1);
        };
      };
    };
    if (operation === "-") {
      screenNumber = firstOpNumber - parseFloat(screenNumber);
      screenNumber = screenNumber.toFixed(2);
      screenNumber.toString();
      if (screenNumber.slice(-1) === "0") {
        if (screenNumber.slice(-2) === "00") {
          screenNumber = screenNumber.slice(0, -3);
        } else {
          screenNumber = screenNumber.slice(0, -1);
        };
      };
    };
    if (operation === "x") {
      screenNumber = firstOpNumber * parseFloat(screenNumber);
      screenNumber = screenNumber.toFixed(2);
      screenNumber.toString();
      if (screenNumber.slice(-1) === "0") {
        if (screenNumber.slice(-2) === "00") {
          screenNumber = screenNumber.slice(0, -3);
        } else {
          screenNumber = screenNumber.slice(0, -1);
        };
      };
    };
    if (operation === ":") {
      screenNumber = firstOpNumber / parseFloat(screenNumber);
      screenNumber = screenNumber.toFixed(2);
      screenNumber.toString();
      if (screenNumber.slice(-1) === "0") {
        if (screenNumber.slice(-2) === "00") {
          screenNumber = screenNumber.slice(0, -3);
        } else {
          screenNumber = screenNumber.slice(0, -1);
        };
      };
    };
    changeText("screen", screenNumber);
    changeText("OpScreen", operation);
    operation = "-";
    firstOpNumber = parseFloat(screenNumber);
    screenNumber = "";
    CanSolve = true;
    ToChange = true;
    changeText("OpScreen", operation);
  } else {
    operation = "-";
    if (!(screenNumber === "")) {
      firstOpNumber = parseFloat(screenNumber);
    };
    ToChange = true;
    changeText("OpScreen", operation);
    screenNumber = "";
    CanSolve = true;
  };
  point = false;
});

$("#buttonx").on("click", function(event) {
  easterEgg = false;
  if (!(screenNumber === "") && CanSolve) {
    if (operation === "+") {
      screenNumber = firstOpNumber + parseFloat(screenNumber);
      screenNumber = screenNumber.toFixed(2);
      screenNumber.toString();
      if (screenNumber.slice(-1) === "0") {
        if (screenNumber.slice(-2) === "00") {
          screenNumber = screenNumber.slice(0, -3);
        } else {
          screenNumber = screenNumber.slice(0, -1);
        };
      };
    };
    if (operation === "-") {
      screenNumber = firstOpNumber - parseFloat(screenNumber);
      screenNumber = screenNumber.toFixed(2);
      screenNumber.toString();
      if (screenNumber.slice(-1) === "0") {
        if (screenNumber.slice(-2) === "00") {
          screenNumber = screenNumber.slice(0, -3);
        } else {
          screenNumber = screenNumber.slice(0, -1);
        };
      };
    };
    if (operation === "x") {
      screenNumber = firstOpNumber * parseFloat(screenNumber);
      screenNumber = screenNumber.toFixed(2);
      screenNumber.toString();
      if (screenNumber.slice(-1) === "0") {
        if (screenNumber.slice(-2) === "00") {
          screenNumber = screenNumber.slice(0, -3);
        } else {
          screenNumber = screenNumber.slice(0, -1);
        };
      };
    };
    if (operation === ":") {
      screenNumber = firstOpNumber / parseFloat(screenNumber);
      screenNumber = screenNumber.toFixed(2);
      screenNumber.toString();
      if (screenNumber.slice(-1) === "0") {
        if (screenNumber.slice(-2) === "00") {
          screenNumber = screenNumber.slice(0, -3);
        } else {
          screenNumber = screenNumber.slice(0, -1);
        };
      };
    };
    changeText("screen", screenNumber);
    changeText("OpScreen", operation);
    operation = "x";
    firstOpNumber = parseFloat(screenNumber);
    screenNumber = "";
    CanSolve = true;
    ToChange = true;
    changeText("OpScreen", operation);
  } else {
    operation = "x";
    if (!(screenNumber === "")) {
      firstOpNumber = parseFloat(screenNumber);
    };
    ToChange = true;
    changeText("OpScreen", operation);
    screenNumber = "";
    CanSolve = true;
  };
  point = false;
});

$("#buttond").on("click", function(event) {
  easterEgg = false;
  if (!(screenNumber === "") && CanSolve) {
    if (operation === "+") {
      screenNumber = firstOpNumber + parseFloat(screenNumber);
      screenNumber = screenNumber.toFixed(2);
      screenNumber.toString();
      if (screenNumber.slice(-1) === "0") {
        if (screenNumber.slice(-2) === "00") {
          screenNumber = screenNumber.slice(0, -3);
        } else {
          screenNumber = screenNumber.slice(0, -1);
        };
      };
    };
    if (operation === "-") {
      screenNumber = firstOpNumber - parseFloat(screenNumber);
      screenNumber = screenNumber.toFixed(2);
      screenNumber.toString();
      if (screenNumber.slice(-1) === "0") {
        if (screenNumber.slice(-2) === "00") {
          screenNumber = screenNumber.slice(0, -3);
        } else {
          screenNumber = screenNumber.slice(0, -1);
        };
      };
    };
    if (operation === "x") {
      screenNumber = firstOpNumber * parseFloat(screenNumber);
      screenNumber = screenNumber.toFixed(2);
      screenNumber.toString();
      if (screenNumber.slice(-1) === "0") {
        if (screenNumber.slice(-2) === "00") {
          screenNumber = screenNumber.slice(0, -3);
        } else {
          screenNumber = screenNumber.slice(0, -1);
        };
      };
    };
    if (operation === ":") {
      screenNumber = firstOpNumber / parseFloat(screenNumber);
      screenNumber = screenNumber.toFixed(2);
      screenNumber.toString();
      if (screenNumber.slice(-1) === "0") {
        if (screenNumber.slice(-2) === "00") {
          screenNumber = screenNumber.slice(0, -3);
        } else {
          screenNumber = screenNumber.slice(0, -1);
        };
      };
    };
    changeText("screen", screenNumber);
    changeText("OpScreen", operation);
    operation = ":";
    firstOpNumber = parseFloat(screenNumber);
    screenNumber = "";
    ToChange = true;
    CanSolve = true;
    changeText("OpScreen", operation);
  } else {
    operation = ":";
    if (!(screenNumber === "")) {
      firstOpNumber = parseFloat(screenNumber);
    };
    ToChange = true;
    changeText("OpScreen", operation);
    screenNumber = "";
    CanSolve = true;
  };
  point = false;
});

$("#buttone").on("click", function(event) {
  easterEgg = false;
  console.log(screenNumber)
  if (!(screenNumber === "") && CanSolve) {
    if (operation === "+") {
      OpNumPrec = parseFloat(screenNumber);
      screenNumber = firstOpNumber + parseFloat(screenNumber);
      screenNumber = screenNumber.toFixed(2);
      screenNumber.toString();
      if (screenNumber.slice(-1) === "0") {
        if (screenNumber.slice(-2) === "00") {
          screenNumber = screenNumber.slice(0, -3);
        } else {
          screenNumber = screenNumber.slice(0, -1);
        };
      };
      console.log(OpNumPrec);
      OpPrec = operation;
      console.log(OpPrec);
      operation = "";
      firstOpNumber = 0;
    };
    if (operation === "-") {
      OpNumPrec = parseFloat(screenNumber);
      screenNumber = firstOpNumber - parseFloat(screenNumber);
      screenNumber = screenNumber.toFixed(2);
      screenNumber.toString();
      if (screenNumber.slice(-1) === "0") {
        if (screenNumber.slice(-2) === "00") {
          screenNumber = screenNumber.slice(0, -3);
        } else {
          screenNumber = screenNumber.slice(0, -1);
        };
      };
      OpPrec = operation;
      operation = "";
      firstOpNumber = 0;
    };
    if (operation === "x") {
      OpNumPrec = parseFloat(screenNumber);
      screenNumber = firstOpNumber * parseFloat(screenNumber);
      screenNumber = screenNumber.toFixed(2);
      screenNumber.toString();
      if (screenNumber.slice(-1) === "0") {
        if (screenNumber.slice(-2) === "00") {
          screenNumber = screenNumber.slice(0, -3);
        } else {
          screenNumber = screenNumber.slice(0, -1);
        };
      };
      OpPrec = operation;
      operation = "";
      firstOpNumber = 0;
    };
    if (operation === ":") {
      OpNumPrec = parseFloat(screenNumber);
      screenNumber = firstOpNumber / parseFloat(screenNumber);
      screenNumber = screenNumber.toFixed(2);
      screenNumber.toString();
      if (screenNumber.slice(-1) === "0") {
        if (screenNumber.slice(-2) === "00") {
          screenNumber = screenNumber.slice(0, -3);
        } else {
          screenNumber = screenNumber.slice(0, -1);
        };
      };
      OpPrec = operation;
      operation = "";
      firstOpNumber = 0;
    };
    CanSolve = false;
  } else {
    console.log(OpNumPrec, " ", OpPrec)
    if (OpPrec === "+") {
      screenNumber = OpNumPrec + parseFloat(screenNumber);
      screenNumber = screenNumber.toFixed(2);
      screenNumber.toString();
      if (screenNumber.slice(-1) === "0") {
        if (screenNumber.slice(-2) === "00") {
          screenNumber = screenNumber.slice(0, -3);
        } else {
          screenNumber = screenNumber.slice(0, -1);
        };
      };
    };
    if (OpPrec === "-") {
      screenNumber = parseFloat(screenNumber) - OpNumPrec;
      screenNumber = screenNumber.toFixed(2);
      screenNumber.toString();
      if (screenNumber.slice(-1) === "0") {
        if (screenNumber.slice(-2) === "00") {
          screenNumber = screenNumber.slice(0, -3);
        } else {
          screenNumber = screenNumber.slice(0, -1);
        };
      };
    }; if (OpPrec === "x") {
      screenNumber = OpNumPrec * parseFloat(screenNumber);
      screenNumber = screenNumber.toFixed(2);
      screenNumber.toString();
      if (screenNumber.slice(-1) === "0") {
        if (screenNumber.slice(-2) === "00") {
          screenNumber = screenNumber.slice(0, -3);
        } else {
          screenNumber = screenNumber.slice(0, -1);
        };
      };
    };
    if (OpPrec === ":") {
      screenNumber = parseFloat(screenNumber) / OpNumPrec;
      screenNumber = screenNumber.toFixed(2);
      screenNumber.toString();
      if (screenNumber.slice(-1) === "0") {
        if (screenNumber.slice(-2) === "00") {
          screenNumber = screenNumber.slice(0, -3);
        } else {
          screenNumber = screenNumber.slice(0, -1);
        };
      };
    };
  };
  changeText("screen", screenNumber);
  changeText("OpScreen", operation);
  point = false;
});

function changeText(elId, NewText) {
  var element = document.getElementById(elId);
  element.innerHTML = NewText;
};
