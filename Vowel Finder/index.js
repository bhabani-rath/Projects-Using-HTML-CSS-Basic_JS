function vowel() {
        var char = document.getElementById("inp1");
        var output = document.getElementById("out1");
        var data;

        if (
          char.value === "a" ||
          char.value === "e" ||
          char.value === "i" ||
          char.value === "o" ||
          char.value === "u"
        ) {
          data = "Given Character Is Vowel.";
        } else if (
          (char.value >= "a" && char.value <= "z") ||
          (char.value >= "A" && char.value <= "Z")
        ) {
          data = "Given Character Is Consonant.";
        } else {
          data = "Given Character Is Not A Letter.";
        }

        output.value = data;
      }