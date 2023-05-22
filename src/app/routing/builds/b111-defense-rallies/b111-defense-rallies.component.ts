import { Component, OnInit } from '@angular/core';
import { EquipmentSlot } from 'src/app/equipment-slot/equipment-slot.model';
import { IEquipment } from 'src/interfaces/equipment';
import { IStat } from 'src/interfaces/stat';
import { HOME_ROUTE, BENCHMARKS_ROUTE, BASE_SHARED_PATH, PURPLE, MAINHAND, OFFHAND, HELMET, ACCESSORY, CHEST, BOOTS } from 'src/utilities/constants';

@Component({
    selector: 'app-b111-defense-rallies',
    templateUrl: './b111-defense-rallies.component.html',
    styleUrls: ['./b111-defense-rallies.component.css']
})
export class B111DefenseRalliesComponent {
    HOME_PATH: string = HOME_ROUTE;
    BUILD_PATH: string = BENCHMARKS_ROUTE;
    BASE_SHARED_PATH: string = BASE_SHARED_PATH;

    colour: string = PURPLE;
    title: string = '111 Defense Rallies';
    stats: IStat[] = [];
    tierTwoInfantry: string = '10 000 000';
    tierTwoRanged: string = '10 000 000';
    tierTwoCavalry: string = '10 000 000';
    tierFourInfantry: string = '3 000 000';
    tierFourRanged: string = '3 000 000';
    tierFourCavalry: string = '3 000 000';
    tierFourSiege: string = '1 000 000';

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

    build: string ="The focus of this build is to have an even distribution of troop types and stats in your castle because you do not want to have a weak point when defending from rally parties that can cover all 3 troop types. You heavily out power your opponent, but if you have a set up like this, then typically the opponent will call for help and rally together to minimize losses. ";

    notes: string ="This is the closest build in Lords Mobile that can be considered a one size fits all. However, small adjustments should still be made depending on the match-up and information you have in teh situation to give yourself an edge. This includes swapping out certain pieces to raise a specific troop attack, or hp if you suspect the opponent to be rallying a certain blast.";

    strongAgainst: string[] = ['100 Infantry Blast', '010 Ranged Blast', '001 Cavalry Blast'];
    weakAgainst: string[] = ['Rally Parties of 5+ Rallies'];

    equipmentList: EquipmentSlot[] = [
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
            "type": "Offhand",
            "rarity": "Mythic",
            "name": "Winter Mitts",
            "imgPath": "/snowBeast.webp",
            "stats": [
                {
                    "name": "Ranged Atk",
                    "value": 14.00
                },
                {
                    "name": "Infantry Def",
                    "value": 45.50
                },
                {
                    "name": "Army Def",
                    "value": 35.00
                },
                {
                    "name": "Army Max Hp",
                    "value": 35.00
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
            "name": "Skullcrusher",
            "imgPath": "/helldrider.webp",
            "stats": [
                {
                    "name": "Ranged Atk",
                    "value": 21.00
                },
                {
                    "name": "Army Atk",
                    "value": 28.00
                },
                {
                    "name": "Infantry Def",
                    "value": 35.00
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
            "name": "Eternal Codex",
            "imgPath": "/grim.webp",
            "stats": [
                {
                    "name": "Cavalry Atk",
                    "value": 28.00
                },
                {
                    "name": "Ranged Atk",
                    "value": 49.00
                },
                {
                    "name": "Cavalry Max Hp",
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
    ];
}