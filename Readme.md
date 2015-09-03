Angular module wrap Eve Online In-Game-Browser javascript.

Note: Not all browser functions are wrapped atm!

## Install

```
bower install angular-eve-igb --save
```

## Usage

```
app = angular.module('app', ['trichner.angular-eve-igb']);

...

app.controller('MyController', function(EveIGB){

	// if in IGB, the 'add contact' dialog should pop up, otherwise nothing happens :)
    EveIGB.addContact(3003981);

    // if in IGB shows the character dialog for the specified characterId, otherwise nothing happens
    EveIGB.showCharacter(3003981);

});
```

