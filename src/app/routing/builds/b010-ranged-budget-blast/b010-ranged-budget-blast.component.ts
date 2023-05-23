import { Component, OnInit } from '@angular/core';
import { EquipmentSlot } from 'src/app/equipment-slot/equipment-slot.model';
import { IEquipment } from 'src/interfaces/equipment';
import { IStat } from 'src/interfaces/stat';
import { HOME_ROUTE, BENCHMARKS_ROUTE, BASE_SHARED_PATH, PURPLE, MAINHAND, OFFHAND, HELMET, ACCESSORY, CHEST, BOOTS } from 'src/utilities/constants';

@Component({
    selector: 'app-b010-ranged-budget-blast',
    templateUrl: './b010-ranged-budget-blast.component.html',
    styleUrls: ['./b010-ranged-budget-blast.component.css']
})
export class B010RangedBudgetBlastComponent implements OnInit {
    HOME_PATH: string = HOME_ROUTE;
    BUILD_PATH: string = BENCHMARKS_ROUTE;
    BASE_SHARED_PATH: string = BASE_SHARED_PATH;

    colour: string = PURPLE;
    title: string = '010 Ranged Budget Blast';
    stats: IStat[] = [];
    fillerInfantry: string = '0';
    fillerRanged: string = '2 000 000';
    fillerCavalry: string = '0';
    leadInf: string = '4';
    leadRanged: string = '374 992';
    leadCav: string = '4';

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

    introduction: string ="Blasts should mostly be used against castles where you already know the opponent's frontline as a wrong rally can also lead to disastrous deaths for everyone involved. However, they can and should be used on wonders as supporting rallies or when the opponent uses a composition that leads itself to be susceptible to a blast such as 505.";

    build: string ="A ranged blast, like an infantry and cavalry blast have very simple purposes. The focus of a ranged blast is to deal as much damage to the opponent's infantry troops as possible. When countering an enemy, a 2.375m rally of ranged can yield tremendous results.";

    notes: string ="The blast should always be feathered with ~4+ of infantry and cavalry including other tiers so that your main force is at the back. This has a few benefits such as dragging the timer for battle on a little longer which increases the likeliness of you surviving, and reducing the amount of damage taken as the opponent's first 2 volleys of ranged fire in combat will target the other squads in the front with only 4 troops instead of your main force. An entire volley will be wasted on 4 troops. Additionally, always send ~1000+ siege if you are not confident you will walk away alive from the rally.";

    strongAgainst: string[] = ['Countered Frontline', 'Supporting Rallies'];
    weakAgainst: string[] = ['Non-countered Frontline', '111 Even Mix'];

    equipmentList: EquipmentSlot[] = [
        new EquipmentSlot(
        MAINHAND,
        MAINHAND,
        {
            "type": "Mainhand",
            "rarity": "Mythic",
            "name": "Wyrm Rod",
            "imgPath": "/jade.webp",
            "stats": [
                {
                    "name": "Ranged Atk",
                    "value": 35.00
                },
                {
                    "name": "Ranged Max Hp",
                    "value": 24.50
                },
                {
                    "name": "Timber Production Rate",
                    "value": 70.00
                }
            ]
        },
        {
            "type": "Jewel",
            "rarity": "Legendary",
            "name": "Wyrm Jewel",
            "imgPath": "/jade.webp",
            "stats": [
                {
                    "name": "Ranged Atk",
                    "value": 10.00
                },
                {
                    "name": "Ranged Def",
                    "value": 10.00
                }
            ]
        },
        {
            "type": "Jewel",
            "rarity": "Legendary",
            "name": "Ranged Attack Jewel",
            "imgPath": "/rangedAtk.webp",
            "stats": [
                {
                    "name": "Ranged Atk",
                    "value": 20.00
                }
            ]
        },
        {
            "type": "Jewel",
            "rarity": "Legendary",
            "name": "Grim Jewel",
            "imgPath": "/grim.webp",
            "stats": [
                {
                    "name": "Ranged Max Hp",
                    "value": 15.00
                },
                {
                    "name": "Travel Speed",
                    "value": 5.00
                }
            ]
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
            "type": "Jewel",
            "rarity": "Legendary",
            "name": "Wyrm Jewel",
            "imgPath": "/jade.webp",
            "stats": [
                {
                    "name": "Ranged Atk",
                    "value": 10.00
                },
                {
                    "name": "Ranged Def",
                    "value": 10.00
                }
            ]
        },
        {
            "type": "Jewel",
            "rarity": "Legendary",
            "name": "Ranged Attack Jewel",
            "imgPath": "/rangedAtk.webp",
            "stats": [
                {
                    "name": "Ranged Atk",
                    "value": 20.00
                }
            ]
        },
        {
            "type": "Jewel",
            "rarity": "Legendary",
            "name": "Grim Jewel",
            "imgPath": "/grim.webp",
            "stats": [
                {
                    "name": "Ranged Max Hp",
                    "value": 15.00
                },
                {
                    "name": "Travel Speed",
                    "value": 5.00
                }
            ]
        }
        ),
        new EquipmentSlot(
        HELMET,
        HELMET,
        {
            "type": "Helmet",
            "rarity": "Mythic",
            "name": "Wyrmbone Coronet",
            "imgPath": "/jade.webp",
            "stats": [
                {
                    "name": "Ranged Atk",
                    "value": 45.50
                },
                {
                    "name": "Army Max Hp",
                    "value": 17.50
                },
                {
                    "name": "Ranged Def",
                    "value": 28.00
                },
                {
                    "name": "Research Speed",
                    "value": 14.00
                }
            ]
        },
        {
            "type": "Jewel",
            "rarity": "Legendary",
            "name": "Wyrm Jewel",
            "imgPath": "/jade.webp",
            "stats": [
                {
                    "name": "Ranged Atk",
                    "value": 10.00
                },
                {
                    "name": "Ranged Def",
                    "value": 10.00
                }
            ]
        },
        {
            "type": "Jewel",
            "rarity": "Legendary",
            "name": "Ranged Attack Jewel",
            "imgPath": "/rangedAtk.webp",
            "stats": [
                {
                    "name": "Ranged Atk",
                    "value": 20.00
                }
            ]
        },
        {
            "type": "Jewel",
            "rarity": "Legendary",
            "name": "Grim Jewel",
            "imgPath": "/grim.webp",
            "stats": [
                {
                    "name": "Ranged Max Hp",
                    "value": 15.00
                },
                {
                    "name": "Travel Speed",
                    "value": 5.00
                }
            ]
        }
        ),
        new EquipmentSlot(
        'Accessory1',
        ACCESSORY,
        {
            "type": "Accessory",
            "rarity": "Mythic",
            "name": "Blight Ring",
            "imgPath": "/maggot.webp",
            "stats": [
                {
                    "name": "Ranged Atk",
                    "value": 19.60
                },
                {
                    "name": "Army Def",
                    "value": 21.00
                },
                {
                    "name": "Army Max Hp",
                    "value": 21.00
                },
                {
                    "name": "Wall Def",
                    "value": 35.00
                }
            ]
        },
        {
            "type": "Jewel",
            "rarity": "Legendary",
            "name": "Wyrm Jewel",
            "imgPath": "/jade.webp",
            "stats": [
                {
                    "name": "Ranged Atk",
                    "value": 10.00
                },
                {
                    "name": "Ranged Def",
                    "value": 10.00
                }
            ]
        },
        {
            "type": "Jewel",
            "rarity": "Legendary",
            "name": "Ranged Attack Jewel",
            "imgPath": "/rangedAtk.webp",
            "stats": [
                {
                    "name": "Ranged Atk",
                    "value": 20.00
                }
            ]
        },
        {
            "type": "Jewel",
            "rarity": "Legendary",
            "name": "Grim Jewel",
            "imgPath": "/grim.webp",
            "stats": [
                {
                    "name": "Ranged Max Hp",
                    "value": 15.00
                },
                {
                    "name": "Travel Speed",
                    "value": 5.00
                }
            ]
        }
        ),
        new EquipmentSlot(
        CHEST,
        CHEST,
        {
            "type": "Chest",
            "rarity": "Mythic",
            "name": "Deathly Mantle",
            "imgPath": "/grim.webp",
            "stats": [
                {
                    "name": "Ranged Atk",
                    "value": 28.00
                },
                {
                    "name": "Trap Atk",
                    "value": 21.00
                },
                {
                    "name": "Army Def",
                    "value": 21.00
                }
            ]
        },
        {
            "type": "Jewel",
            "rarity": "Legendary",
            "name": "Wyrm Jewel",
            "imgPath": "/jade.webp",
            "stats": [
                {
                    "name": "Ranged Atk",
                    "value": 10.00
                },
                {
                    "name": "Ranged Def",
                    "value": 10.00
                }
            ]
        },
        {
            "type": "Jewel",
            "rarity": "Legendary",
            "name": "Ranged Attack Jewel",
            "imgPath": "/rangedAtk.webp",
            "stats": [
                {
                    "name": "Ranged Atk",
                    "value": 20.00
                }
            ]
        },
        {
            "type": "Jewel",
            "rarity": "Legendary",
            "name": "Grim Jewel",
            "imgPath": "/grim.webp",
            "stats": [
                {
                    "name": "Ranged Max Hp",
                    "value": 15.00
                },
                {
                    "name": "Travel Speed",
                    "value": 5.00
                }
            ]
        }
        ),
        new EquipmentSlot(
        'Accessory2',
        ACCESSORY,
        {
            "type": "Accessory",
            "rarity": "Mythic",
            "name": "Blight Ring",
            "imgPath": "/maggot.webp",
            "stats": [
                {
                    "name": "Ranged Atk",
                    "value": 19.60
                },
                {
                    "name": "Army Def",
                    "value": 21.00
                },
                {
                    "name": "Army Max Hp",
                    "value": 21.00
                },
                {
                    "name": "Wall Def",
                    "value": 35.00
                }
            ]
        },
        {
            "type": "Jewel",
            "rarity": "Legendary",
            "name": "Wyrm Jewel",
            "imgPath": "/jade.webp",
            "stats": [
                {
                    "name": "Ranged Atk",
                    "value": 10.00
                },
                {
                    "name": "Ranged Def",
                    "value": 10.00
                }
            ]
        },
        {
            "type": "Jewel",
            "rarity": "Legendary",
            "name": "Ranged Attack Jewel",
            "imgPath": "/rangedAtk.webp",
            "stats": [
                {
                    "name": "Ranged Atk",
                    "value": 20.00
                }
            ]
        },
        {
            "type": "Jewel",
            "rarity": "Legendary",
            "name": "Grim Jewel",
            "imgPath": "/grim.webp",
            "stats": [
                {
                    "name": "Ranged Max Hp",
                    "value": 15.00
                },
                {
                    "name": "Travel Speed",
                    "value": 5.00
                }
            ]
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
            "type": "Jewel",
            "rarity": "Legendary",
            "name": "Wyrm Jewel",
            "imgPath": "/jade.webp",
            "stats": [
                {
                    "name": "Ranged Atk",
                    "value": 10.00
                },
                {
                    "name": "Ranged Def",
                    "value": 10.00
                }
            ]
        },
        {
            "type": "Jewel",
            "rarity": "Legendary",
            "name": "Ranged Attack Jewel",
            "imgPath": "/rangedAtk.webp",
            "stats": [
                {
                    "name": "Ranged Atk",
                    "value": 20.00
                }
            ]
        },
        {
            "type": "Jewel",
            "rarity": "Legendary",
            "name": "Grim Jewel",
            "imgPath": "/grim.webp",
            "stats": [
                {
                    "name": "Ranged Max Hp",
                    "value": 15.00
                },
                {
                    "name": "Travel Speed",
                    "value": 5.00
                }
            ]
        }
        ),
        new EquipmentSlot(
        'Accessory3',
        ACCESSORY,
        {
            "type": "Accessory",
            "rarity": "Mythic",
            "name": "Blight Ring",
            "imgPath": "/maggot.webp",
            "stats": [
                {
                    "name": "Ranged Atk",
                    "value": 19.60
                },
                {
                    "name": "Army Def",
                    "value": 21.00
                },
                {
                    "name": "Army Max Hp",
                    "value": 21.00
                },
                {
                    "name": "Wall Def",
                    "value": 35.00
                }
            ]
        },
        {
            "type": "Jewel",
            "rarity": "Legendary",
            "name": "Wyrm Jewel",
            "imgPath": "/jade.webp",
            "stats": [
                {
                    "name": "Ranged Atk",
                    "value": 10.00
                },
                {
                    "name": "Ranged Def",
                    "value": 10.00
                }
            ]
        },
        {
            "type": "Jewel",
            "rarity": "Legendary",
            "name": "Ranged Attack Jewel",
            "imgPath": "/rangedAtk.webp",
            "stats": [
                {
                    "name": "Ranged Atk",
                    "value": 20.00
                }
            ]
        },
        {
            "type": "Jewel",
            "rarity": "Legendary",
            "name": "Grim Jewel",
            "imgPath": "/grim.webp",
            "stats": [
                {
                    "name": "Ranged Max Hp",
                    "value": 15.00
                },
                {
                    "name": "Travel Speed",
                    "value": 5.00
                }
            ]
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
            "type": "Jewel",
            "rarity": "Legendary",
            "name": "Wyrm Jewel",
            "imgPath": "/jade.webp",
            "stats": [
                {
                    "name": "Ranged Atk",
                    "value": 10.00
                },
                {
                    "name": "Ranged Def",
                    "value": 10.00
                }
            ]
        },
        {
            "type": "Jewel",
            "rarity": "Legendary",
            "name": "Ranged Attack Jewel",
            "imgPath": "/rangedAtk.webp",
            "stats": [
                {
                    "name": "Ranged Atk",
                    "value": 20.00
                }
            ]
        },
        {
            "type": "Jewel",
            "rarity": "Legendary",
            "name": "Grim Jewel",
            "imgPath": "/grim.webp",
            "stats": [
                {
                    "name": "Ranged Max Hp",
                    "value": 15.00
                },
                {
                    "name": "Travel Speed",
                    "value": 5.00
                }
            ]
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
            "type": "Jewel",
            "rarity": "Legendary",
            "name": "Wyrm Jewel",
            "imgPath": "/jade.webp",
            "stats": [
                {
                    "name": "Ranged Atk",
                    "value": 10.00
                },
                {
                    "name": "Ranged Def",
                    "value": 10.00
                }
            ]
        },
        {
            "type": "Jewel",
            "rarity": "Legendary",
            "name": "Ranged Attack Jewel",
            "imgPath": "/rangedAtk.webp",
            "stats": [
                {
                    "name": "Ranged Atk",
                    "value": 20.00
                }
            ]
        },
        {
            "type": "Jewel",
            "rarity": "Legendary",
            "name": "Grim Jewel",
            "imgPath": "/grim.webp",
            "stats": [
                {
                    "name": "Ranged Max Hp",
                    "value": 15.00
                },
                {
                    "name": "Travel Speed",
                    "value": 5.00
                }
            ]
        }
        ),
        new EquipmentSlot(
        CHEST,
        CHEST,
        {
            "type": "Chest",
            "rarity": "Mythic",
            "name": "Hardened Carapace",
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
                    "name": "Army Def",
                    "value": 14.00
                }
            ]
        },
        {
            "type": "Jewel",
            "rarity": "Legendary",
            "name": "Wyrm Jewel",
            "imgPath": "/jade.webp",
            "stats": [
                {
                    "name": "Ranged Atk",
                    "value": 10.00
                },
                {
                    "name": "Ranged Def",
                    "value": 10.00
                }
            ]
        },
        {
            "type": "Jewel",
            "rarity": "Legendary",
            "name": "Ranged Attack Jewel",
            "imgPath": "/rangedAtk.webp",
            "stats": [
                {
                    "name": "Ranged Atk",
                    "value": 20.00
                }
            ]
        },
        {
            "type": "Jewel",
            "rarity": "Legendary",
            "name": "Grim Jewel",
            "imgPath": "/grim.webp",
            "stats": [
                {
                    "name": "Ranged Max Hp",
                    "value": 15.00
                },
                {
                    "name": "Travel Speed",
                    "value": 5.00
                }
            ]
        }
        ),
        new EquipmentSlot(
            'Accessory1',
            ACCESSORY,
            {
                "type": "Accessory",
                "rarity": "Mythic",
                "name": "Wyrm Seal",
                "imgPath": "/jade.webp",
                "stats": [
                    {
                        "name": "Ranged Atk",
                        "value": 22.40
                    },
                    {
                        "name": "Siege Engine Atk",
                        "value": 21.00
                    },
                    {
                        "name": "Army Max Hp",
                        "value": 11.20
                    },
                    {
                        "name": "Stone Production Rate",
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
                "type": "Jewel",
                "rarity": "Legendary",
                "name": "Terror Jewel",
                "imgPath": "/terror.webp",
                "stats": [
                    {
                        "name": "Infantry Atk",
                        "value": 10.00
                    },
                    {
                        "name": "Infantry Def",
                        "value": 10.00
                    }
                ]
            },
            {
                "type": "Jewel",
                "rarity": "Legendary",
                "name": "Trojan Jewel",
                "imgPath": "/mecha.webp",
                "stats": [
                    {
                        "name": "Infantry Max Hp",
                        "value": 15.00
                    },
                    {
                        "name": "Travel Speed",
                        "value": 5.00
                    }
                ]
            }
        )
    ];
}