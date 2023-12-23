PlayerEvents.loggedIn(event => {
  if (!event.hasGameStage('overworld')
    && !event.hasGameStage('the_nether')
    && !event.hasGameStage('the_other')
    && !event.hasGameStage('the_end')) {
    event.addGameStage('overworld');
  }
  if (!event.hasGameStage('shelf')
    && !event.hasGameStage('hellshelf')
    && !event.hasGameStage('deepshelf')
    && !event.hasGameStage('endshelf')) {
    event.addGameStage('shelf');
  }
});

PlayerEvents.advancement(event => {
  const advancement = event.getAdvancement();

  const handleEpicSpellbook = () => {
    if (!event.hasGameStage('epic_ink') && !event.hasGameStage('legendary_ink')) {
      event.addGameStage('epic_ink');
      if (event.hasGameStage('common_ink')) {
        event.removeGameStage('common_ink')
      }
      if (event.hasGameStage('uncommon_ink')) {
        event.removeGameStage('uncommon_ink')
      }
      if (event.hasGameStage('rare_ink')) {
        event.removeGameStage('rare_ink')
      }
    }
  }

  const handleLegendarySpellbook = () => {
    if (!event.hasGameStage('legendary_ink')) {
      event.addGameStage('legendary_ink');
      if (event.hasGameStage('common_ink')) {
        event.removeGameStage('common_ink')
      }
      if (event.hasGameStage('uncommon_ink')) {
        event.removeGameStage('uncommon_ink')
      }
      if (event.hasGameStage('rare_ink')) {
        event.removeGameStage('rare_ink')
      }
      if (event.hasGameStage('epic_ink')) {
        event.removeGameStage('epic_ink')
      }
    }
  }

  switch (advancement) {
    case 'minecraft:story/enter_the_nether':
      if (!event.hasGameStage('the_nether') && !event.hasGameStage('the_other') && !event.hasGameStage('the_end')) {
        event.addGameStage('the_nether');
        if (event.hasGameStage('overworld')) {
          event.removeGameStage('overworld')
        }
      }
      break;
    case 'meatsalad:the_other':
      if (!event.hasGameStage('the_other') && !event.hasGameStage('the_end')) {
        event.addGameStage('the_other');
        if (event.hasGameStage('overworld')) {
          event.removeGameStage('overworld')
        }
        if (event.hasGameStage('the_nether')) {
          event.removeGameStage('the_nether')
        }
      }
      break;
    case 'minecraft:story/enter_the_end':
      if (!event.hasGameStage('the_end')) {
        event.addGameStage('the_end');
        if (event.hasGameStage('overworld')) {
          event.removeGameStage('overworld')
        }
        if (event.hasGameStage('the_nether')) {
          event.removeGameStage('the_nether')
        }
        if (event.hasGameStage('the_other')) {
          event.removeGameStage('the_other')
        }
      }
      break;
    case 'cataclysm:kill_ender_guardian':
      if (!event.hasGameStage('kill_ender_guardian')) {
        event.addGameStage('kill_ender_guardian')
      }
      break;
    case 'cataclysm:kill_ignis':
      if (!event.hasGameStage('kill_ignis')) {
        event.addGameStage('kill_ignis')
      }
      break;
    case 'apotheosis:enchanting/hellshelf':
      if (!event.hasGameStage('hellshelf') && !event.hasGameStage('deepshelf') && !event.hasGameStage('endshelf')) {
        event.addGameStage('hellshelf');
        if (event.hasGameStage('shelf')) {
          event.removeGameStage('shelf')
        }
      }
      break;
    case 'apotheosis:enchanting/deepshelf':
      if (!event.hasGameStage('deepshelf') && !event.hasGameStage('endshelf')) {
        event.addGameStage('deepshelf');
        if (event.hasGameStage('shelf')) {
          event.removeGameStage('shelf')
        }
        if (event.hasGameStage('hellshelf')) {
          event.removeGameStage('hellshelf')
        }
      }
      break;
    case 'apotheosis:enchanting/endshelf':
      if (!event.hasGameStage('endshelf')) {
        event.addGameStage('endshelf');
        if (event.hasGameStage('shelf')) {
          event.removeGameStage('shelf')
        }
        if (event.hasGameStage('hellshelf')) {
          event.removeGameStage('hellshelf')
        }
        if (event.hasGameStage('deepshelf')) {
          event.removeGameStage('deepshelf')
        }
      }
      break;
    case 'irons_spellbooks:irons_spellbooks/spell_book_iron':
      if (!event.hasGameStage('common_ink') && !event.hasGameStage('uncommon_ink') && !event.hasGameStage('rare_ink')
          && !event.hasGameStage('epic_ink') && !event.hasGameStage('legendary_ink')) {
        event.addGameStage('common_ink');
        event.addGameStage('uncommon_ink');
      }
      break;
    case 'irons_spellbooks:irons_spellbooks/spell_book_gold':
      if (!event.hasGameStage('rare_ink') && !event.hasGameStage('epic_ink') && !event.hasGameStage('legendary_ink')) {
        event.addGameStage('rare_ink');
        if (event.hasGameStage('common_ink')) {
          event.removeGameStage('common_ink')
        }
        if (event.hasGameStage('uncommon_ink')) {
          event.removeGameStage('uncommon_ink')
        }
      }
      break;
    case 'irons_spellbooks:irons_spellbooks/spell_book_blaze':
      handleEpicSpellbook();
      break;
    case 'irons_spellbooks:irons_spellbooks/spell_book_diamond':
      handleEpicSpellbook();
      break;
    case 'irons_spellbooks:irons_spellbooks/spell_book_druidic':
      handleEpicSpellbook();
      break;
    case 'irons_spellbooks:irons_spellbooks/spell_book_villager':
      handleEpicSpellbook();
      break;
    case 'irons_spellbooks:irons_spellbooks/spell_book_dragon':
      handleLegendarySpellbook();
    break;
      case 'irons_spellbooks:irons_spellbooks/spell_book_netherite':
      handleLegendarySpellbook();
      break;
  }
});