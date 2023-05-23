import { Component, OnInit } from '@angular/core';
import { EquipmentSlot } from 'src/app/equipment-slot/equipment-slot.model';
import { IEquipment } from 'src/interfaces/equipment';
import { IStat } from 'src/interfaces/stat';
import { HOME_ROUTE, BENCHMARKS_ROUTE, BASE_SHARED_PATH, GOLD, MAINHAND, OFFHAND, HELMET, ACCESSORY, CHEST, BOOTS } from 'src/utilities/constants';

@Component({
    selector: 'app-b111-war-of-wonders',
    templateUrl: './b111-war-of-wonders.component.html',
    styleUrls: ['./b111-war-of-wonders.component.css']
})
export class B111WarOfWondersComponent implements OnInit {
    HOME_PATH: string = HOME_ROUTE;
    BUILD_PATH: string = BENCHMARKS_ROUTE;
    BASE_SHARED_PATH: string = BASE_SHARED_PATH;

    colour: string = GOLD;
    title: string = '111 War of Wonders';
    stats: IStat[] = [];
    fillerInfantry: string = '680 000';
    fillerRanged: string = '660 000';
    fillerCavalry: string = '660 000';
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

    introduction: string ="Ever since the update that brought counter mechanics to the game, wonders have been dominated by mixed rally compositions. Blasts/spears need to be extraordinarily high in stats in order to burn other rally leads off wonders when counter stats can go up 60% bonus. A mixed 111 composition with as little as a 500 000 frontline can demolish a full countered blast/spear of 2.375m. That being said, that doesn't mean blasts are useless, they have their role in castle rallies and supporting rallies in wonders.";

    build: string ="The focus of this build is to have an even distribution of troop types in your wonder because you do not have a specialized build set up yet, you heavily out power your opponent, or you don't want to reveal information yet and are trying to bait information out of your opponent. Typically this build is weaker than others even with similar gear, however, it is also a safer option. With an even mix 111 you will not deal significant damage but you will also take less losses unless you are heavily out geared by your opponent.";

    notes: string ="This is not a good one size fits all build. There is no such build in Lords Mobile. This build should only be used in situations you are confident in a victory as there is less micro-management required, or you don't want to reveal your build to your opponent yet. However, this build excels at dealing with supporting rally blasts from other rally leads that hit your wonder first in order to weaken you for their allies because you have an equal distribution of troops and stats. You should not attempt to take more than one hit with this build as you'll likely get your leader captured on the second battle.";

    strongAgainst: string[] = ['100 Infantry Blast', '010 Ranged Blast', '001 Cavalry Blast'];
    weakAgainst: string[] = ['424', '442', '244'];

    equipmentList: EquipmentSlot[] = [
        new EquipmentSlot(
        MAINHAND,
        MAINHAND,
        {
            "type": "Mainhand",
            "rarity": "Mythic",
            "name": "Champion Edge",
            "imgPath": "/champ1.webp",
            "stats": [
                {
                    "name": "Cavalry Atk",
                    "value": 49.00
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
            "name": "Champion Light",
            "imgPath": "/champ2.webp",
            "stats": [
                {
                    "name": "Infantry Atk",
                    "value": 49.00
                },
                {
                    "name": "Cavalry Atk",
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
            "name": "Bumble Helm",
            "imgPath": "/queenBee.webp",
            "stats": [
                {
                    "name": "Cavalry Atk",
                    "value": 42.00
                },
                {
                    "name": "Ranged Atk",
                    "value": 42.00
                },
                {
                    "name": "Army Max Hp",
                    "value": 28.00
                }
            ]
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
            "name": "Ambrosial Cup",
            "imgPath": "/bon.webp",
            "stats": [
                {
                    "name": "Infantry Atk",
                    "value": 35.00
                },
                {
                    "name": "Ranged Atk",
                    "value": 35.00
                },
                {
                    "name": "Infantry Max Hp",
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
            "name": "Firewall Plate",
            "imgPath": "/mecha.webp",
            "stats": [
                {
                    "name": "Infantry Atk",
                    "value": 28.00
                },
                {
                    "name": "Cavalry Atk",
                    "value": 42.00
                },
                {
                    "name": "Siege Engine Atk",
                    "value": 42.00
                },
                {
                    "name": "Army Max Hp",
                    "value": 21.00
                }
            ]
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
            "name": "Ambrosial Cup",
            "imgPath": "/bon.webp",
            "stats": [
                {
                    "name": "Infantry Atk",
                    "value": 35.00
                },
                {
                    "name": "Ranged Atk",
                    "value": 35.00
                },
                {
                    "name": "Infantry Max Hp",
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
            "name": "Storm Tasset",
            "imgPath": "/tidalTitan.webp",
            "stats": [
                {
                    "name": "Infantry Atk",
                    "value": 42.00
                },
                {
                    "name": "Cavalry Atk",
                    "value": 42.00
                },
                {
                    "name": "Army Def",
                    "value": 28.00
                },
                {
                    "name": "Army Max Hp",
                    "value": 14.00
                }
            ]
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
            "name": "Ambrosial Cup",
            "imgPath": "/bon.webp",
            "stats": [
                {
                    "name": "Infantry Atk",
                    "value": 35.00
                },
                {
                    "name": "Ranged Atk",
                    "value": 35.00
                },
                {
                    "name": "Infantry Max Hp",
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
            "name": "Frostwing Greatsword",
            "imgPath": "/frostwing.webp",
            "stats": [
                {
                    "name": "Infantry Atk",
                    "value": 28.00
                },
                {
                    "name": "Cavalry Atk",
                    "value": 28.00
                },
                {
                    "name": "Ranged Atk",
                    "value": 17.50
                }
            ]
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
            "name": "Beast Helm",
            "imgPath": "/saber.webp",
            "stats": [
                {
                    "name": "Infantry Atk",
                    "value": 42.00
                },
                {
                    "name": "Cavalry Atk",
                    "value": 35.00
                },
                {
                    "name": "Army Max Hp",
                    "value": 21.00
                },
                {
                    "name": "Travel Speed",
                    "value": 49.00
                }
            ]
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
            "name": "Dragon's Talons",
            "imgPath": "/blackwing.webp",
            "stats": [
                {
                    "name": "Infantry Atk",
                    "value": 28.00
                },
                {
                    "name": "Ranged Atk",
                    "value": 42.00
                },
                {
                    "name": "Army Max Hp",
                    "value": 21.00
                }
            ]
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
}