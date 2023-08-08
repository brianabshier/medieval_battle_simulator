# medieval_battle_simulator
A text based simulation written in HTML, JavaScript, and CSS that takes two medieval armies and simulates a battle between them.

--VERSION HISTORY--
v0.9.8
08/03/2023
- Added Army Templates - Prefilled troop compositions based on historical armies
- Ability to collapse/expand the troop composition table to save screen space
- Additional Formatting and UI Changes

v0.9.7
07/11/2023
- Additional tuning to troop weights
- Morale Feature implemented - High, Avg, Low Morale impacts troop efficacy. 
- Additional Formatting and UI Changes

v0.9.3
07/6/2023
- Color coded more of the results to quickly identify sides
- Battle Victory Qualifiers Improved
- Added more names for possible armies, locations, commanders, and notables
- Added a 'Randomize All' button to fill all fields
- Further fine tuned battle simulation
- Troop counts are now in multiples of 10
- Added Mechanical Artillery (Trebuchets, Mangonels, Catapults, Ballistae, etc)
- Aded descriptions of troops and their biggest advantages/disadvantages when hovering over troop name.

v0.9.2
07/2/2023
- Victory Counter added - keeps track of attacker wins, defender wins, and indecisive battles.
- Battle Victory Qualifiers Improved
- 'Last Stand' option - increases the severity of the casualty count. Simulates a desparate fight to the last.

v0.9.1
06/30/2023
- Battle Victory Qualifiers Added
- Limitations on how many casualties a force can inflict based on their own manpower

v0.9.0
06/29/2023
- Randomizer Buttons for All Fields
- Link to Changelog/Documentation
- Pushed to Static Site for Testing


--DOCUMENTATION--

HOW IT WORKS:
This rudimentary simulator determines the outcome of an imaginary battle between two medieval armies based on their initial strength, the scenario, the weather, and the number of troops remaining after the battle.

The code checks if the first army is stronger and has more troops remaining than the second army. If this is the case, it declares the first army as the winner.

If the first condition is not met, the code checks if the second army is stronger and has more troops remaining than the first army. If this is true, it declares the second army as the winner.

If neither of the above conditions is met, it means both armies have an equal strength. In this case, the code compares the number of troops remaining. If one army has more troops remaining than the other, it declares that army as the winner and sets the color class accordingly.

If none of the conditions are met, the code declares the battle as indecisive, with no clear winner, and sets the color class to a default value (black).

Overall, this code helps determine the outcome of the battle and sets certain variables based on the conditions met, such as the winner's title, the routed army, and the color class for display purposes.

HOW TROOPS WORK:

The code calculates the total number of troops in the attacking army and the defending army.

It then calculates a bonus for the attacking army and the defending army based on the difference in the total number of troops. The larger the difference, the greater the bonus. This bonus represents the morale or strategic advantage that a larger force might have.

The code calculates the strength of the attacking army and the defending army by multiplying the total number of troops with a factor that takes into account the bonus. This factor represents the combined strength and morale of the troops.

The code assigns specific troop weights for different types of troops based on the terrain of the battle. For example, certain types of troops might be more effective on plains compared to other types.

The troop weights are used to further modify the strength of the attacking army and the defending army. Each type of troop has a specific weight that affects its effectiveness in the given terrain. The higher the weight, the more effective the troops are in that terrain.
	
The weather weights are used to further modify the strength of the attacking army and the defending army. Each type of troop has a specific weather weight that affects its effectiveness fighting in the weather selected. This is applied in addition to the terrain weight. 

Overall, this code calculates the strength of the attacking and defending armies, taking into account factors such as the size of the armies, bonuses based on troop numbers, and the impact of weather and terrain on troop efficacy. These calculations help simulate the outcome of a battle based on these factors.
