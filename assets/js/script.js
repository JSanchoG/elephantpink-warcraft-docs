function call_aura() {
  Swal.fire(
    "Info about aura towers",
    "Aura towers have different effects on units or towers, the same aura (even on different levels) doesn't stack, but similiar auras from the large-aura and short-aura tower stack, for example: &quot;the attackspeed aura from the Short-Aura Tower stacks with the attackspeed aura from the Long-Aura Tower&quot;.",
    "info"
  );
}
function upgrades(entity) {
  switch (entity) {
    case "priest":
      Swal.fire(
        "Priest upgrades",
        "<b>Priest rank 1</b><br>Increases the current Hitpoints by 1.<br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 1s <i class='fas fa-solid fa-ruler'></i> 650 <i class='fas fa-solid fa-coins'></i> 5</div><b>Priest rank 2</b><br>Increases the current Hitpoints by 4.<br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 1s <i class='fas fa-solid fa-ruler'></i> 650 <i class='fas fa-solid fa-coins'></i> 20</div><b>Priest rank 3</b><br>Increases the current Hitpoints by 16.<br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 1s <i class='fas fa-solid fa-ruler'></i> 650 <i class='fas fa-solid fa-coins'></i> 80</div><b>Priest rank 4</b><br>Increases the current Hitpoints by 36.<br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 1s <i class='fas fa-solid fa-ruler'></i> 650 <i class='fas fa-solid fa-coins'></i> 180</div><b>Priest rank 5</b><br>Increases the current Hitpoints by 64.<br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 1s <i class='fas fa-solid fa-ruler'></i> 650 <i class='fas fa-solid fa-coins'></i> 320</div><b>Priest rank 6</b><br>Increases the current Hitpoints by 100.<br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 1s <i class='fas fa-solid fa-ruler'></i> 650 <i class='fas fa-solid fa-coins'></i> 500</div><b>Priest rank 7</b><br>Increases the current Hitpoints by 144.<br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 1s <i class='fas fa-solid fa-ruler'></i> 650 <i class='fas fa-solid fa-coins'></i> 720</div><b>Priest rank 8</b><br>Increases the current Hitpoints by 196.<br><div><i class='fas fa-solid fa-clock'></i> 1s <i class='fas fa-solid fa-ruler'></i> 650 <i class='fas fa-solid fa-coins'></i> 980</div>",
        "info"
      );
      break;
    case "alchemist":
      Swal.fire(
        "Alchemist upgrades",
        "<b>Alchemist rank 1</b><br>(Priest Upgrade)<br><span style='font-size:0.9em'>Increases the Health of all units in 300 AOE with every hit by 1.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 1s <i class='fas fa-solid fa-ruler'></i> 650 <i class='fas fa-solid fa-coins'></i> 20</div><b>Alchemist rank 2</b><br><span style='font-size:0.9em'>Increases the Health of all units in 300 AOE with every hit by 4.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 1s <i class='fas fa-solid fa-ruler'></i> 650 <i class='fas fa-solid fa-coins'></i> 20</div><b>Alchemist rank 3</b><br><span style='font-size:0.9em'>Increases the Health of all units in 300 AOE with every hit by 16.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 1s <i class='fas fa-solid fa-ruler'></i> 650 <i class='fas fa-solid fa-coins'></i> 180</div><b>Alchemist rank 4</b><br><span style='font-size:0.9em'>Increases the Health of all units in 300 AOE with every hit by 36.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 1s <i class='fas fa-solid fa-ruler'></i> 650 <i class='fas fa-solid fa-coins'></i> 180</div><b>Alchemist rank 5</b><br><span style='font-size:0.9em'>Increases the Health of all units in 300 AOE with every hit by 64.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 1s <i class='fas fa-solid fa-ruler'></i> 650 <i class='fas fa-solid fa-coins'></i> 500</div>",
        "info"
      );
      break;
    case "witchdoctor":
      Swal.fire(
        "Witchdoctor upgrades",
        "<b>Witchdoctor rank 1</b><br>(Priest Upgrade)<br><span style='font-size:1em'>Places a healing ward lasting 10s and healing for 1hp/s</span><br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 10s <i class='fas fa-solid fa-ruler'></i> 650 <i class='fas fa-solid fa-coins'></i> 20</div><b>Witchdoctor rank 2</b><br><span style='font-size:1em'>Places down a healing ward that heals nearby units by 4hp/s, lasts 10s. (heal has 500 AOE) Multiple healing wards don't stack!</b></span><br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 10s <i class='fas fa-solid fa-ruler'></i> 650 <i class='fas fa-solid fa-coins'></i> 80</div><b>Witchdoctor rank 3</b><br><span style='font-size:1em'>Places down a healing ward that heals nearby units by 9hp/s, lasts 10s. (heal has 500 AOE) Multiple healing wards don't stack!</span><br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 10s <i class='fas fa-solid fa-ruler'></i> 650 <i class='fas fa-solid fa-coins'></i> 180</div>",
        "info"
      );
      break;
    case "weaponsmith":
      Swal.fire(
        "Weaponsmith upgrades",
        "<b>Weaponsmith rank 1</b><br><span style='font-size:1em'>Increases the current Damage by 1.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 5s <i class='fas fa-solid fa-ruler'></i> 500 <i class='fas fa-solid fa-coins'></i> 20</div><b>Weaponsmith rank 2</b><br><span style='font-size:1em'>Increases the damage with every hit by 4.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 4s <i class='fas fa-solid fa-ruler'></i> 500 <i class='fas fa-solid fa-coins'></i> 80</div><b>Weaponsmith rank 3</b><br><span style='font-size:1em'>Increases the damage with every hit by 9.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 4s <i class='fas fa-solid fa-ruler'></i> 500 <i class='fas fa-solid fa-coins'></i> 180</div><b>Weaponsmith rank 4</b><br><span style='font-size:1em'>Increases the damage with every hit by 16.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 4s <i class='fas fa-solid fa-ruler'></i> 500 <i class='fas fa-solid fa-coins'></i> 320</div><b>Weaponsmith rank 5</b><br><span style='font-size:1em'>Increases the damage with every hit by 25.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 4s <i class='fas fa-solid fa-ruler'></i> 500 <i class='fas fa-solid fa-coins'></i> 500</div><b>Weaponsmith rank 6</b><br><span style='font-size:1em'>Increases the damage with every hit by 36.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 4s <i class='fas fa-solid fa-ruler'></i> 500 <i class='fas fa-solid fa-coins'></i> 720</div>",
        "info"
      );
      break;
    case "weapontrainer":
      Swal.fire(
        "Weapontrainer upgrades",
        "<b>Weapontrainer rank 1</b><br>(Weaponsmith Upgrade)<br><span style='font-size:0.85em'>Increases the damage of all units in 300 AOE with every hit by 1.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 4s <i class='fas fa-solid fa-ruler'></i> 500 <i class='fas fa-solid fa-coins'></i> 60</div><b>Weapontrainer rank 2</b><br><span style='font-size:0.85em'>Increases the damage of all units in 300 AOE with every hit by 4.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 4s <i class='fas fa-solid fa-ruler'></i> 500 <i class='fas fa-solid fa-coins'></i> 135</div><b>Weapontrainer rank 3</b><br><span style='font-size:0.85em'>Increases the damage of all units in 300 AOE with every hit by 9.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 4s <i class='fas fa-solid fa-ruler'></i> 500 <i class='fas fa-solid fa-coins'></i> 240</div><b>Weapontrainer rank 4</b><br><span style='font-size:0.85em'>Increases the damage of all units in 300 AOE with every hit by 16.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 4s <i class='fas fa-solid fa-ruler'></i> 500 <i class='fas fa-solid fa-coins'></i> 375</div><b>Weapontrainer rank 5</b><br><span style='font-size:0.85em'>Increases the damage of all units in 300 AOE with every hit by 25.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 4s <i class='fas fa-solid fa-ruler'></i> 500 <i class='fas fa-solid fa-coins'></i> 540</div>",
        "info"
      );
      break;
    case "armorsmith":
      Swal.fire(
        "Armorsmith upgrades",
        "<b>Armorsmith rank 1</b><br><span style='font-size:1em'>Increases the current Armor by 1.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 5s <i class='fas fa-solid fa-ruler'></i> 500 <i class='fas fa-solid fa-coins'></i> 22</div><b>Armorsmith rank 2</b><br><span style='font-size:1em'>Increases the armor with every hit by 4.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 4s <i class='fas fa-solid fa-ruler'></i> 500 <i class='fas fa-solid fa-coins'></i> 84</div><b>Armorsmith rank 3</b><br><span style='font-size:1em'>Increases the armor with every hit by 9.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 4s <i class='fas fa-solid fa-ruler'></i> 500 <i class='fas fa-solid fa-coins'></i> 189</div><b>Armorsmith rank 4</b><br><span style='font-size:1em'>Increases the armor with every hit by 16.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 4s <i class='fas fa-solid fa-ruler'></i> 500 <i class='fas fa-solid fa-coins'></i> 336</div><b>Armorsmith rank 5</b><br><span style='font-size:1em'>Increases the armor with every hit by 25.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 4s <i class='fas fa-solid fa-ruler'></i> 500 <i class='fas fa-solid fa-coins'></i> 525</div><b>Armorsmith rank 6</b><br><span style='font-size:1em'>Increases the armor with every hit by 36.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 4s <i class='fas fa-solid fa-ruler'></i> 500 <i class='fas fa-solid fa-coins'></i> 756</div>",
        "info"
      );
      break;
    case "armortrainer":
      Swal.fire(
        "Armortrainer upgrades",
        "<b>Armortrainer rank 1</b><br>(Armorsmith Upgrade)<br><span style='font-size:0.9em'>Increases the armor of all units in 300 AOE with every hit by 1.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 4s <i class='fas fa-solid fa-ruler'></i> 500 <i class='fas fa-solid fa-coins'></i> 64</div><b>Armortrainer rank 2</b><br><span style='font-size:0.9em'>Increases the armor of all units in 300 AOE with every hit by 4.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 4s <i class='fas fa-solid fa-ruler'></i> 500 <i class='fas fa-solid fa-coins'></i> 144</div><b>Armortrainer rank 3</b><br><span style='font-size:0.9em'>Increases the armor of all units in 300 AOE with every hit by 9.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 4s <i class='fas fa-solid fa-ruler'></i> 500 <i class='fas fa-solid fa-coins'></i> 256</div><b>Armortrainer rank 4</b><br><span style='font-size:0.9em'>Increases the armor of all units in 300 AOE with every hit by 16.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 4s <i class='fas fa-solid fa-ruler'></i> 500 <i class='fas fa-solid fa-coins'></i> 400</div><b>Armortrainer rank 5</b><br><span style='font-size:0.9em'>Increases the armor of all units in 300 AOE with every hit by 25.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 4s <i class='fas fa-solid fa-ruler'></i> 500 <i class='fas fa-solid fa-coins'></i> 576</div>",
        "info"
      );
      break;
    case "rulebreaker":
      Swal.fire(
        "Rulebreaker upgrades",
        "<b>Rulebreaker rank 1</b><br><span style='font-size:1em'>Sets the current Hitpoints to 25.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 5s <i class='fas fa-solid fa-ruler'></i> 650 <i class='fas fa-solid fa-coins'></i> 20</div><b>Rulebreaker rank 2</b><br><span style='font-size:1em'>Sets the current Hitpoints to 50.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 5s <i class='fas fa-solid fa-ruler'></i> 650 <i class='fas fa-solid fa-coins'></i> 40</div><b>Rulebreaker rank 3</b><br><span style='font-size:1em'>Sets the current Hitpoints to 150.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 5s <i class='fas fa-solid fa-ruler'></i> 650 <i class='fas fa-solid fa-coins'></i> 80</div><b>Rulebreaker rank 4</b><br><span style='font-size:1em'>Sets the current Hitpoints to 250.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 5s <i class='fas fa-solid fa-ruler'></i> 650 <i class='fas fa-solid fa-coins'></i> 160</div>",
        "info"
      );
      break;
    case "fast_rulebreaker":
      Swal.fire(
        "Fast Rulebreaker upgrades",
        "<b>Fast rulebreaker rank 1</b><br>(Rulebreaker Upgrade)<br><span style='font-size:1em'>Sets the current Hitpoints to 25.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 2s <i class='fas fa-solid fa-ruler'></i> 650 <i class='fas fa-solid fa-coins'></i> 40</div><b>Fast rulebreaker rank 2</b><br><span style='font-size:1em'>Sets the current Hitpoints to 50.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 2s <i class='fas fa-solid fa-ruler'></i> 650 <i class='fas fa-solid fa-coins'></i> 80</div><b>Fast rulebreaker rank 3</b><br><span style='font-size:1em'>Sets the current Hitpoints to 150.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 2s <i class='fas fa-solid fa-ruler'></i> 650 <i class='fas fa-solid fa-coins'></i> 160</div><b>Fast rulebreaker rank 4</b><br><span style='font-size:1em'>Sets the current Hitpoints to 250.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 2s <i class='fas fa-solid fa-ruler'></i> 650 <i class='fas fa-solid fa-coins'></i> 320</div>",
        "info"
      );
      break;
    case "frostmage":
      Swal.fire(
        "Frostmage upgrades",
        "<b>Frostmage rank 1</b><br><span style='font-size:1em'>Slows the attacked unit for 1 second.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 2s <i class='fas fa-solid fa-ruler'></i> 600 <i class='fas fa-solid fa-coins'></i> 10</div><b>Frostmage rank 2</b><br><span style='font-size:1em'>Slows the attacked unit for 5 seconds.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 2s <i class='fas fa-solid fa-ruler'></i> 600 <i class='fas fa-solid fa-coins'></i> 20</div><b>Frostmage rank 3</b><br><span style='font-size:1em'>Slows units in 100 AOE for 5 seconds.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 2s <i class='fas fa-solid fa-ruler'></i> 600 <i class='fas fa-solid fa-coins'></i> 30</div><b>Frostmage rank 4</b><br><span style='font-size:1em'>Slows units in 250 AOE for 6 seconds.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-clock'></i> 2s <i class='fas fa-solid fa-ruler'></i> 800 <i class='fas fa-solid fa-coins'></i> 40</div>",
        "info"
      );
      break;
    case "short_aura-tower":
      Swal.fire(
        "Short Aura-tower upgrades",
        "<b>Short Attackspeed-Aura rank 1</b><br><span style='font-size:1em'>Increases the attackspeed of attached towers by 20%.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-coins'></i> Free (Aura-Tower Upgrade)</div><b>Short Attackspeed-Aura rank 2</b><br><span style='font-size:1em'>Increases the attackspeed of attached towers by 40%.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-coins'></i> 225</div><b>Short Attackspeed-Aura rank 3</b><br><span style='font-size:1em'>Increases the attackspeed of attached towers by 60%.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-coins'></i> 300</div><b>Short Attackspeed-Aura rank 4</b><br><span style='font-size:1em'>Increases the attackspeed of attached towers by 80%.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-coins'></i> 375</div><b>Short Attackspeed-Aura rank 5</b><br><span style='font-size:1em'>Increases the attackspeed of attached towers by 100%.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-coins'></i> 450</div>",
        "info"
      );
      break;
    case "long_aura-tower":
      Swal.fire(
        "Short Aura-tower upgrades",
        "<b>Short Attackspeed-Aura rank 1</b><br><span style='font-size:1em'>Increases the attackspeed of attached towers by 20%.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-coins'></i> Free (Aura-Tower Upgrade)</div><b>Short Attackspeed-Aura rank 2</b><br><span style='font-size:1em'>Increases the attackspeed of attached towers by 40%.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-coins'></i> 225</div><b>Short Attackspeed-Aura rank 3</b><br><span style='font-size:1em'>Increases the attackspeed of attached towers by 60%.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-coins'></i> 300</div><b>Short Attackspeed-Aura rank 4</b><br><span style='font-size:1em'>Increases the attackspeed of attached towers by 80%.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-coins'></i> 375</div><b>Short Attackspeed-Aura rank 5</b><br><span style='font-size:1em'>Increases the attackspeed of attached towers by 100%.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-coins'></i> 450</div>",
        "info"
      );
      Swal.fire({
        title: "Long Aura-tower upgrades",
        showDenyButton: true,
        confirmButtonText: "Attackspeed-Aura",
        confirmButtonColor: "#3085d6",
        denyButtonText: `Slow-Aura`,
        denyButtonColor: "#3085d6",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            "Long Aura-tower upgrades",
            "<b>Long Attackspeed-Aura rank 1</b><br><span style='font-size:1em'>Increases the attackspeed of towers in 900 AOE by 5%.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-coins'></i> Free (Long Aura-Tower Upgrade)</div><b>Long Attackspeed-Aura rank 2</b><br><span style='font-size:1em'>Increases the attackspeed of towers in 900 AOE by 10%.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-coins'></i> 225</div><b>Long Attackspeed-Aura rank 3</b><br><span style='font-size:1em'>Increases the attackspeed of towers in 900 AOE by 15%.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-coins'></i> 300</div><b>Long Attackspeed-Aura rank 4</b><br><span style='font-size:1em'>Increases the attackspeed of towers in 900 AOE by 20%.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-coins'></i> 375</div><b>Long Attackspeed-Aura rank 5</b><br><span style='font-size:1em'>Increases the attackspeed of towers in 900 AOE by 25%.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-coins'></i> 450</div>",
            "info"
          );
        } else if (result.isDenied) {
          Swal.fire(
            "Long Aura-tower upgrades",
            "<b>Long Slow-Aura rank 1</b><br><span style='font-size:1em'>Decreases the movementspeed of units in 900 AOE by 5%.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-coins'></i> Free (Long Aura-Tower Upgrade)</div><b>Long Slow-Aura rank 2</b><br><span style='font-size:1em'>Decreases the movementspeed of units in 900 AOE by 10%.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-coins'></i> 225</div><b>Long Slow-Aura rank 3</b><br><span style='font-size:1em'>Decreases the movementspeed of units in 900 AOE by 15%.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-coins'></i> 300</div><b>Long Slow-Aura rank 4</b><br><span style='font-size:1em'>Decreases the movementspeed of units in 900 AOE by 20%.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-coins'></i> 375</div><b>Long Slow-Aura rank 5</b><br><span style='font-size:1em'>Decreases the movementspeed of units in 900 AOE by 25%.</span><br><div class='upgradesdn'><i class='fas fa-solid fa-coins'></i> 450</div>",
            "info"
          );
        }
      });
      break;
    case "evolution-tower":
      Swal.fire(
        "Evolution-tower upgrades",
        "<div class='row-upgr'><div class='column-upgr'><b>Captain-Evolution</b><br><span style='font-size:1em'>Changes one Footman into a Captain<br><span class='text-danger'>ONLY WORKS ON FULL HEALTH UNITS</span></span><br><div class='upgradesdn text-muted'>Max HP: 5000 (+4750)<br>Damage: 1<br>Attackspeed: 0.8 (-0.2)<br>Armor: 3 (+2)</div><b>Archer-Evolution</b><br><span style='font-size:1em'>Changes one Footman into an Archer<br><span class='text-danger'>ONLY WORKS ON FULL HEALTH UNITS</span></span><br><div class='upgradesdn text-muted'>Max HP: 3000 (+2750)<br>Damage: 2 (+1)<br>Range: 650<br>Attackspeed: 1.0<br>Armor: 1</div><b>Shaman-Evolution</b><br><span style='font-size:1em'>Changes one Footman into a Shaman<br><span class='text-danger'>ONLY WORKS ON FULL HEALTH UNITS</span></span><br><div class='upgradesdn text-muted'>Max HP: 500 (+250)<br>Damage: 1<br>Range: 450<br>Attackspeed: 1.0<br>Armor: 1</div></div><div class='column-upgr'><b>Mage-Evolution</b><br><span style='font-size:1em'>Changes one Footman into a Mage<br><span class='text-danger'>ONLY WORKS ON FULL HEALTH UNITS</span></span><br><div class='upgradesdn text-muted'>Max HP: 4000 (+3750)<br>Damage: 1<br>Range: 550<br>Attackspeed: 1.0<br>Armor: 1</div><b>Spell Breaker-Evolution</b><br><span style='font-size:1em'>Changes one Footman into a Spell Breaker<br><span class='text-danger'>ONLY WORKS ON FULL HEALTH UNITS</span></span><br><div class='upgradesdn text-muted'>Max HP: 7000 (+6750)<br>Damage: 1<br>Range: 650<br>Attackspeed: 1.0<br>Armor: 3 (+2)</div><b>Abomination-Evolution</b><br><span style='font-size:1em'>Changes one Footman into an Abomination<br><span class='text-danger'>ONLY WORKS ON FULL HEALTH UNITS</span></span><br><div class='upgradesdn text-muted'>Max HP: 3000 (+2750)<br>Damage: 3 (+2)<br>Range: 650<br>Attackspeed: 32.0<br>Armor: 1</div></div></div>"
        // "info"
      );
      break;
  }
}
// upgrades("priest");
// upgrades("alchemist");
// upgrades("witchdoctor");
// upgrades("weaponsmith");
// upgrades("weapontrainer");
// upgrades("armorsmith");
// upgrades("armortrainer");
// upgrades("rulebreaker");
// upgrades("fast_rulebreaker");
// upgrades("frostmage");
// upgrades("short_aura-tower");
// upgrades("long_aura-tower");
// upgrades("evolution-tower");
