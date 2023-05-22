import { Component, OnInit } from '@angular/core';
import { EquipmentSlot } from 'src/app/equipment-slot/equipment-slot.model';
import { IEquipment } from 'src/interfaces/equipment';
import { IStat } from 'src/interfaces/stat';
import { HOME_ROUTE, BENCHMARKS_ROUTE, BASE_SHARED_PATH, ORANGE, MAINHAND, OFFHAND, HELMET, ACCESSORY, CHEST, BOOTS } from 'src/utilities/constants';

@Component({
    selector: 'app-b244-war-of-wonders',
    templateUrl: './b244-war-of-wonders.component.html',
    styleUrls: ['./b244-war-of-wonders.component.css']
})
export class B244WarOfWondersComponent {
    HOME_PATH: string = HOME_ROUTE;
    BUILD_PATH: string = BENCHMARKS_ROUTE;
    BASE_SHARED_PATH: string = BASE_SHARED_PATH;

    colour: string = ORANGE;
    title: string = '244 War of Wonders';
    stats: IStat[] = [];
    fillerInfantry: string = '400 000';
    fillerRanged: string = '800 000';
    fillerCavalry: string = '800 000';
    lead: string = '375 000';

    ngOnInit(): void {
        this.equipmentList.forEach((slot) => {
            this.addStats(slot.currentEquipment);
            this.addStats(slot.currentJewel1);
            this.addStats(slot.currentJewel2);
            this.addStats(slot.currentJewel3);
        });
    }

    // DESCRIPTION :
    //  Adds the new equipment or jewel to the stats array. Existing names are added together,
    //  while new names are pushed to the array
    // PARAMETERS  :
    //  newEquipment - the selected equipment (E.g. "Wyrmbone Coronet", "Infantry Attack Jewel")
    addStats(newEquipment: IEquipment) {
        newEquipment.stats.forEach((newStat) => {
        if (this.stats.some((existingStat) => existingStat.name === newStat.name)) {
            const index = this.stats.findIndex((existingStat) => existingStat.name === newStat.name);
            this.stats[index].value = this.stats[index].value + newStat.value;
        } 
        else {
            this.stats.push({ name: newStat.name, value: newStat.value });
        }
        });
    }

    introduction: string ="Ever since the update that brought counter mechanics to the game, wonders have been dominated by mixed rally compositions. Blasts/spears need to be extraordinarily high in stats in order to burn other rally leads off wonders when counter stats can go up 60% bonus. A mixed 244 composition with as little as a 500 000 frontline can demolish a full countered blast/spear of 2.375m. That being said, that doesn't mean blasts are useless, they have their role in castle rallies and supporting rallies in wonders.";

    build: string ="Most wonder rallies are in a ranged phalanx, or ranged wedge. This is why the current meta are builds such as 424 or others that focus heavily on infantry and cavalry. The counter to the meta builds is 442 that aim to end the battle quickly. The focus of this build is to counter 442 by clearing out the opponent's frontline infantry troops with your cavalry allowing your ranged troops to stay untouched and wreak havoc on the opponent in order to win. The loss of the opponent's infantry will be a significant hit to their troop morale, and your ranged will be able to finish the battle by picking off their leftover cavalry squads that rush forward to the frontline.";

    notes: string ="Similarly to 442, If your cavalry stats are not high enough, then the battle will drag on too long, allowing the opponent's frontline infantry squads to tank too much damage and slow down your ranged squads from attacking the opponents cavalry squads that rush forward. As this build is weak on infantry stats, and numbers, it will not be able to keep up with your morale loss as your cavalry squads thin out from the opponents ranged power. It is important to invest heavily in both cavalry and ranged for this build as it is a race against the clock.";

    strongAgainst: string[] = ['442', '111 Even Mix'];
    weakAgainst: string[] = ['424', '010 Ranged Blast if taken in cavalry phalanx'];

    equipmentList: EquipmentSlot[] = [
        new EquipmentSlot(
        MAINHAND,
        MAINHAND,
        {
            "type": "Mainhand",
            "rarity": "Mythic",
            "name": "Champion Greatsword",
            "imgPath": "/champ3.webp",
            "stats": [
                {
                    "name": "Cavalry Atk",
                    "value": 28.00
                },
                {
                    "name": "Ranged Atk",
                    "value": 28.00
                },
                {
                    "name": "Army Atk",
                    "value": 21.00
                },
                {
                    "name": "Army Def",
                    "value": 23.80
                },
                {
                    "name": "Research Speed",
                    "value": 21.00
                }
            ]
        },
        {
            type: 'Jewel',
            rarity: 'Legendary',
            name: 'Champion Jewel',
            imgPath: '/champ.webp',
            stats: [
            {
                name: 'Army Max Hp',
                value: 15.0,
            },
            {
                name: 'Travel Speed',
                value: 20.0,
            },
            ],
        },
        {
            type: 'Jewel',
            rarity: 'Legendary',
            name: 'Ranged Attack Jewel',
            imgPath: '/rangedAtk.webp',
            stats: [
            {
                name: 'Ranged Atk',
                value: 20.0,
            },
            ],
        },
        {
            type: 'Jewel',
            rarity: 'Legendary',
            name: 'Cavalry Attack Jewel',
            imgPath: '/cavAtk.webp',
            stats: [
            {
                name: 'Cavalry Atk',
                value: 20.0,
            },
            ],
        }
        ),
        new EquipmentSlot(
        OFFHAND,
        OFFHAND,
        {
            "type": "Offhand",
            "rarity": "Mythic",
            "name": "Champion Katar",
            "imgPath": "/champ3.webp",
            "stats": [
                {
                    "name": "Cavalry Atk",
                    "value": 49.00
                },
                {
                    "name": "Ranged Atk",
                    "value": 42.00
                },
                {
                    "name": "Army Def",
                    "value": 28.00
                },
                {
                    "name": "Training Speed",
                    "value": 14.00
                }
            ]
        },
        {
            type: 'Jewel',
            rarity: 'Legendary',
            name: 'Champion Jewel',
            imgPath: '/champ.webp',
            stats: [
            {
                name: 'Army Max Hp',
                value: 15.0,
            },
            {
                name: 'Travel Speed',
                value: 20.0,
            },
            ],
        },
        {
            type: 'Jewel',
            rarity: 'Legendary',
            name: 'Ranged Attack Jewel',
            imgPath: '/rangedAtk.webp',
            stats: [
            {
                name: 'Ranged Atk',
                value: 20.0,
            },
            ],
        },
        {
            type: 'Jewel',
            rarity: 'Legendary',
            name: 'Cavalry Attack Jewel',
            imgPath: '/cavAtk.webp',
            stats: [
            {
                name: 'Cavalry Atk',
                value: 20.0,
            },
            ],
        }
        ),
        new EquipmentSlot(
        HELMET,
        HELMET,
        {
            "type": "Helmet",
            "rarity": "Mythic",
            "name": "Champion Armet",
            "imgPath": "/champ3.webp",
            "stats": [
                {
                    "name": "Cavalry Atk",
                    "value": 35.00
                },
                {
                    "name": "Ranged Atk",
                    "value": 35.00
                },
                {
                    "name": "Army Atk",
                    "value": 14.00
                },
                {
                    "name": "Army Max Hp",
                    "value": 28.00
                },
                {
                    "name": "Gold Production Rate",
                    "value": 105.00
                }
            ]
        },
        {
            type: 'Jewel',
            rarity: 'Legendary',
            name: 'Champion Jewel',
            imgPath: '/champ.webp',
            stats: [
            {
                name: 'Army Max Hp',
                value: 15.0,
            },
            {
                name: 'Travel Speed',
                value: 20.0,
            },
            ],
        },
        {
            type: 'Jewel',
            rarity: 'Legendary',
            name: 'Ranged Attack Jewel',
            imgPath: '/rangedAtk.webp',
            stats: [
            {
                name: 'Ranged Atk',
                value: 20.0,
            },
            ],
        },
        {
            type: 'Jewel',
            rarity: 'Legendary',
            name: 'Cavalry Attack Jewel',
            imgPath: '/cavAtk.webp',
            stats: [
            {
                name: 'Cavalry Atk',
                value: 20.0,
            },
            ],
        }
        ),
        new EquipmentSlot(
        'Accessory1',
        ACCESSORY,
        {
            "type": "Accessory",
            "rarity": "Mythic",
            "name": "Polar Ring",
            "imgPath": "/arcticFlipper.webp",
            "stats": [
                {
                    "name": "Cavalry Atk",
                    "value": 35.00
                },
                {
                    "name": "Ranged Atk",
                    "value": 35.00
                },
                {
                    "name": "Cavalry Max Hp",
                    "value": 21.00
                },
                {
                    "name": "Ranged Max Hp",
                    "value": 21.00
                }
            ]
        },
        {
            type: 'Jewel',
            rarity: 'Legendary',
            name: 'Champion Jewel',
            imgPath: '/champ.webp',
            stats: [
            {
                name: 'Army Max Hp',
                value: 15.0,
            },
            {
                name: 'Travel Speed',
                value: 20.0,
            },
            ],
        },
        {
            type: 'Jewel',
            rarity: 'Legendary',
            name: 'Ranged Attack Jewel',
            imgPath: '/rangedAtk.webp',
            stats: [
            {
                name: 'Ranged Atk',
                value: 20.0,
            },
            ],
        },
        {
            type: 'Jewel',
            rarity: 'Legendary',
            name: 'Cavalry Attack Jewel',
            imgPath: '/cavAtk.webp',
            stats: [
            {
                name: 'Cavalry Atk',
                value: 20.0,
            },
            ],
        }
        ),
        new EquipmentSlot(
        CHEST,
        CHEST,
        {
            "type": "Chest",
            "rarity": "Mythic",
            "name": "Champion Cuirass",
            "imgPath": "/champ3.webp",
            "stats": [
                {
                    "name": "Cavalry Atk",
                    "value": 42.00
                },
                {
                    "name": "Army Atk",
                    "value": 14.00
                },
                {
                    "name": "Army Def",
                    "value": 49.00
                },
                {
                    "name": "Army Max Hp",
                    "value": 21.00
                },
                {
                    "name": "Reduced Upkeep",
                    "value": 72.80
                }
            ]
        },
        {
            type: 'Jewel',
            rarity: 'Legendary',
            name: 'Champion Jewel',
            imgPath: '/champ.webp',
            stats: [
            {
                name: 'Army Max Hp',
                value: 15.0,
            },
            {
                name: 'Travel Speed',
                value: 20.0,
            },
            ],
        },
        {
            type: 'Jewel',
            rarity: 'Legendary',
            name: 'Ranged Attack Jewel',
            imgPath: '/rangedAtk.webp',
            stats: [
            {
                name: 'Ranged Atk',
                value: 20.0,
            },
            ],
        },
        {
            type: 'Jewel',
            rarity: 'Legendary',
            name: 'Cavalry Attack Jewel',
            imgPath: '/cavAtk.webp',
            stats: [
            {
                name: 'Cavalry Atk',
                value: 20.0,
            },
            ],
        }
        ),
        new EquipmentSlot(
        'Accessory2',
        ACCESSORY,
        {
            "type": "Accessory",
            "rarity": "Mythic",
            "name": "Polar Ring",
            "imgPath": "/arcticFlipper.webp",
            "stats": [
                {
                    "name": "Cavalry Atk",
                    "value": 35.00
                },
                {
                    "name": "Ranged Atk",
                    "value": 35.00
                },
                {
                    "name": "Cavalry Max Hp",
                    "value": 21.00
                },
                {
                    "name": "Ranged Max Hp",
                    "value": 21.00
                }
            ]
        },
        {
            type: 'Jewel',
            rarity: 'Legendary',
            name: 'Champion Jewel',
            imgPath: '/champ.webp',
            stats: [
            {
                name: 'Army Max Hp',
                value: 15.0,
            },
            {
                name: 'Travel Speed',
                value: 20.0,
            },
            ],
        },
        {
            type: 'Jewel',
            rarity: 'Legendary',
            name: 'Ranged Attack Jewel',
            imgPath: '/rangedAtk.webp',
            stats: [
            {
                name: 'Ranged Atk',
                value: 20.0,
            },
            ],
        },
        {
            type: 'Jewel',
            rarity: 'Legendary',
            name: 'Cavalry Attack Jewel',
            imgPath: '/cavAtk.webp',
            stats: [
            {
                name: 'Cavalry Atk',
                value: 20.0,
            },
            ],
        }
        ),
        new EquipmentSlot(
        BOOTS,
        BOOTS,
        {
            "type": "Boots",
            "rarity": "Mythic",
            "name": "Champion Greaves",
            "imgPath": "/champ3.webp",
            "stats": [
                {
                    "name": "Cavalry Atk",
                    "value": 56.00
                },
                {
                    "name": "Army Atk",
                    "value": 14.00
                },
                {
                    "name": "Army Max Hp",
                    "value": 30.80
                },
                {
                    "name": "Travel Speed",
                    "value": 70.00
                }
            ]
        },
        {
            type: 'Jewel',
            rarity: 'Legendary',
            name: 'Champion Jewel',
            imgPath: '/champ.webp',
            stats: [
            {
                name: 'Army Max Hp',
                value: 15.0,
            },
            {
                name: 'Travel Speed',
                value: 20.0,
            },
            ],
        },
        {
            type: 'Jewel',
            rarity: 'Legendary',
            name: 'Ranged Attack Jewel',
            imgPath: '/rangedAtk.webp',
            stats: [
            {
                name: 'Ranged Atk',
                value: 20.0,
            },
            ],
        },
        {
            type: 'Jewel',
            rarity: 'Legendary',
            name: 'Cavalry Attack Jewel',
            imgPath: '/cavAtk.webp',
            stats: [
            {
                name: 'Cavalry Atk',
                value: 20.0,
            },
            ],
        }
        ),
        new EquipmentSlot(
        'Accessory3',
        ACCESSORY,
        {
            "type": "Accessory",
            "rarity": "Mythic",
            "name": "Polar Ring",
            "imgPath": "/arcticFlipper.webp",
            "stats": [
                {
                    "name": "Cavalry Atk",
                    "value": 35.00
                },
                {
                    "name": "Ranged Atk",
                    "value": 35.00
                },
                {
                    "name": "Cavalry Max Hp",
                    "value": 21.00
                },
                {
                    "name": "Ranged Max Hp",
                    "value": 21.00
                }
            ]
        },
        {
            type: 'Jewel',
            rarity: 'Legendary',
            name: 'Champion Jewel',
            imgPath: '/champ.webp',
            stats: [
            {
                name: 'Army Max Hp',
                value: 15.0,
            },
            {
                name: 'Travel Speed',
                value: 20.0,
            },
            ],
        },
        {
            type: 'Jewel',
            rarity: 'Legendary',
            name: 'Ranged Attack Jewel',
            imgPath: '/rangedAtk.webp',
            stats: [
            {
                name: 'Ranged Atk',
                value: 20.0,
            },
            ],
        },
        {
            type: 'Jewel',
            rarity: 'Legendary',
            name: 'Cavalry Attack Jewel',
            imgPath: '/cavAtk.webp',
            stats: [
            {
                name: 'Cavalry Atk',
                value: 20.0,
            },
            ],
        }
        ),
    ];

    alternativeList: EquipmentSlot[] = [
        new EquipmentSlot(
        MAINHAND,
        MAINHAND,
        {
            "type": "Mainhand",
            "rarity": "Mythic",
            "name": "Nectar Orb",
            "imgPath": "/queenBee.webp",
            "stats": [
                {
                    "name": "Cavalry Atk",
                    "value": 35.00
                },
                {
                    "name": "Ranged Atk",
                    "value": 35.00
                },
                {
                    "name": "Ranged Max Hp",
                    "value": 14.00
                },
                {
                    "name": "Cavalry Def",
                    "value": 14.00
                }
            ]
        },
        {
            type: 'Jewel',
            rarity: 'Legendary',
            name: 'Champion Jewel',
            imgPath: '/champ.webp',
            stats: [
            {
                name: 'Army Max Hp',
                value: 15.0,
            },
            {
                name: 'Travel Speed',
                value: 20.0,
            },
            ],
        },
        {
            type: 'Jewel',
            rarity: 'Legendary',
            name: 'Ranged Attack Jewel',
            imgPath: '/rangedAtk.webp',
            stats: [
            {
                name: 'Ranged Atk',
                value: 20.0,
            },
            ],
        },
        {
            type: 'Jewel',
            rarity: 'Legendary',
            name: 'Cavalry Attack Jewel',
            imgPath: '/cavAtk.webp',
            stats: [
            {
                name: 'Cavalry Atk',
                value: 20.0,
            },
            ],
        }
        ),
        new EquipmentSlot(
        OFFHAND,
        OFFHAND,
        {
            type: 'Offhand',
            rarity: 'Mythic',
            name: 'Winter Mitts',
            imgPath: '/snowBeast.webp',
            stats: [
            {
                name: 'Ranged Atk',
                value: 14.0,
            },
            {
                name: 'Infantry Def',
                value: 45.5,
            },
            {
                name: 'Army Def',
                value: 35.0,
            },
            {
                name: 'Army Max Hp',
                value: 35.0,
            },
            ],
        },
        {
            type: 'Jewel',
            rarity: 'Legendary',
            name: 'Champion Jewel',
            imgPath: '/champ.webp',
            stats: [
            {
                name: 'Army Max Hp',
                value: 15.0,
            },
            {
                name: 'Travel Speed',
                value: 20.0,
            },
            ],
        },
        {
            type: 'Jewel',
            rarity: 'Legendary',
            name: 'Ranged Attack Jewel',
            imgPath: '/rangedAtk.webp',
            stats: [
            {
                name: 'Ranged Atk',
                value: 20.0,
            },
            ],
        },
        {
            type: 'Jewel',
            rarity: 'Legendary',
            name: 'Cavalry Attack Jewel',
            imgPath: '/cavAtk.webp',
            stats: [
            {
                name: 'Cavalry Atk',
                value: 20.0,
            },
            ],
        }
        ),
        new EquipmentSlot(
        HELMET,
        HELMET,
        {
            type: 'Helmet',
            rarity: 'Mythic',
            name: 'Bumble Helm',
            imgPath: '/queenBee.webp',
            stats: [
            {
                name: 'Cavalry Atk',
                value: 42.0,
            },
            {
                name: 'Ranged Atk',
                value: 42.0,
            },
            {
                name: 'Army Max Hp',
                value: 28.0,
            },
            ],
        },
        {
            type: 'Jewel',
            rarity: 'Legendary',
            name: 'Champion Jewel',
            imgPath: '/champ.webp',
            stats: [
            {
                name: 'Army Max Hp',
                value: 15.0,
            },
            {
                name: 'Travel Speed',
                value: 20.0,
            },
            ],
        },
        {
            type: 'Jewel',
            rarity: 'Legendary',
            name: 'Ranged Attack Jewel',
            imgPath: '/rangedAtk.webp',
            stats: [
            {
                name: 'Ranged Atk',
                value: 20.0,
            },
            ],
        },
        {
            type: 'Jewel',
            rarity: 'Legendary',
            name: 'Cavalry Attack Jewel',
            imgPath: '/cavAtk.webp',
            stats: [
            {
                name: 'Cavalry Atk',
                value: 20.0,
            },
            ],
        }
        ),
        new EquipmentSlot(
        CHEST,
        CHEST,
        {
            type: 'Chest',
            rarity: 'Mythic',
            name: 'Firewall Plate',
            imgPath: '/mecha.webp',
            stats: [
            {
                name: 'Infantry Atk',
                value: 28.0,
            },
            {
                name: 'Cavalry Atk',
                value: 42.0,
            },
            {
                name: 'Siege Engine Atk',
                value: 42.0,
            },
            {
                name: 'Army Max Hp',
                value: 21.0,
            },
            ],
        },
        {
            type: 'Jewel',
            rarity: 'Legendary',
            name: 'Infantry Attack Jewel',
            imgPath: '/infAtk.webp',
            stats: [
            {
                name: 'Infantry Atk',
                value: 20.0,
            },
            ],
        },
        {
            type: 'Jewel',
            rarity: 'Legendary',
            name: 'Champion Jewel',
            imgPath: '/champ.webp',
            stats: [
            {
                name: 'Army Max Hp',
                value: 15.0,
            },
            {
                name: 'Travel Speed',
                value: 20.0,
            },
            ],
        },
        {
            type: 'Jewel',
            rarity: 'Legendary',
            name: 'Cavalry Attack Jewel',
            imgPath: '/cavAtk.webp',
            stats: [
            {
                name: 'Cavalry Atk',
                value: 20.0,
            },
            ],
        }
        ),
    ];
}