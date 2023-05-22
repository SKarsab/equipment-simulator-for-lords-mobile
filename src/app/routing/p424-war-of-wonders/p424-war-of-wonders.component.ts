import { Component, OnInit } from '@angular/core';
import { EquipmentSlot } from 'src/app/equipment-slot/equipment-slot.model';
import { IEquipment } from 'src/interfaces/equipment';
import { IStat } from 'src/interfaces/stat';
import { HOME_ROUTE, BENCHMARKS_ROUTE, BASE_SHARED_PATH, ORANGE, MAINHAND, OFFHAND, HELMET, ACCESSORY, CHEST, BOOTS } from 'src/utilities/constants';

@Component({
  selector: 'app-p424-war-of-wonders',
  templateUrl: './p424-war-of-wonders.component.html',
  styleUrls: ['./p424-war-of-wonders.component.css']
})
export class P424WarOfWondersComponent implements OnInit {
    HOME_PATH: string = HOME_ROUTE;
    BUILD_PATH: string = BENCHMARKS_ROUTE;
    BASE_SHARED_PATH: string = BASE_SHARED_PATH;

    colour: string = ORANGE;
    title: string = "424 War of Wonders";
    stats: IStat[] = [];
    fillerInfantry: string = "800 000";
    fillerRanged: string = "400 000";
    fillerCavalry: string = "800 000";
    lead: string = "375 000";

    ngOnInit(): void {
        this.equipmentList.forEach(slot => {
            this.addStats(slot.currentEquipment);
            this.addStats(slot.currentJewel1);
            this.addStats(slot.currentJewel2);
            this.addStats(slot.currentJewel3);
        })
    }

    // DESCRIPTION :
    //  Adds the new equipment or jewel to the stats array. Existing names are added together, 
    //  while new names are pushed to the array
    // PARAMETERS  :
    //  newEquipment - the selected equipment (E.g. "Wyrmbone Coronet", "Infantry Attack Jewel")
    addStats(newEquipment: IEquipment)
    {
        newEquipment.stats.forEach(newStat => 
        {
        if (this.stats.some(existingStat => existingStat.name === newStat.name))
        {
            const index = this.stats.findIndex(existingStat => existingStat.name === newStat.name);
            this.stats[index].value = this.stats[index].value + newStat.value;
        }
        else
        {
            this.stats.push({ name: newStat.name, value: newStat.value });
        }
        })
    }

    introduction: string = "Ever since the update that brought counter mechanics to the game, wonders have been dominated by mixed rally compositions. Blasts/spears need to be extraordinarily high in stats in order to burn other rally leads off wonders when counter stats can go up 60% bonus. A mixed 424 composition with as little as a 500 000 frontline can demolish a full countered blast/spear of 2.375m. That being said, that doesn't mean blasts are useless, they have their role in castle rallies and supporting rallies in wonders.";

    build: string = "Most wonder rallies are in a ranged phalanx, or ranged wedge. This leads to 424 or other equipment builds and formations that focus on infantry and cavalry to heavily outperform ranged builds on average. The focus of this build is to clear the enemy frontline ranged troops with your infantry and then leave the remaining enemy infantry/cavalry for your cavalry and ranged.";

    notes: string = "This build is especially effective because most rally leads with mythic monster gear will have heavier ranged and infantry stats with ambrosial cups, blight rings, skullcrusher, and dragon talon boots. A heavy infantry/cavalry build will dominate the competition until the enemy rally lead breaks into half champion gear or above.";

    strongAgainst: string[] = ["111 Even Mix", "424 of Lower Stats"];
    weakAgainst: string[] = ["442"];

    equipmentList: EquipmentSlot[] = [
        new EquipmentSlot(MAINHAND, MAINHAND, 
            {
                type: "Mainhand",
                rarity: "Mythic",
                name: "Champion Edge",
                imgPath: "/champ1.webp",
                stats: [
                    {
                        name: "Cavalry Atk",
                        value: 49.00
                    },
                    {
                        name: "Army Atk",
                        value: 21.00
                    },
                    {
                        name: "Army Def",
                        value: 23.80
                    },
                    {
                        name: "Research Speed",
                        value: 21.00
                    }
                ]
            },
            {
                type: "Jewel",
                rarity: "Legendary",
                name: "Infantry Attack Jewel",
                imgPath: "/infAtk.webp",
                stats: [
                    {
                        name: "Infantry Atk",
                        value: 20.00
                    }
                ]
            },
            {
                type: "Jewel",
                rarity: "Legendary",
                name: "Champion Jewel",
                imgPath: "/champ.webp",
                stats: [
                    {
                        name: "Army Max Hp",
                        value: 15.00
                    },
                    {
                        name: "Travel Speed",
                        value: 20.00
                    }
                ]
            },
            {
                type: "Jewel",
                rarity: "Legendary",
                name: "Cavalry Attack Jewel",
                imgPath: "/cavAtk.webp",
                stats: [
                    {
                        name: "Cavalry Atk",
                        value: 20.00
                    }
                ]
            }),
        new EquipmentSlot(OFFHAND, OFFHAND, 
            {
            type: "Offhand",
            rarity: "Mythic",
            name: "Champion Light",
            imgPath: "/champ2.webp",
            stats: [
                {
                    name: "Infantry Atk",
                    value: 49.00
                },
                {
                    name: "Cavalry Atk",
                    value: 42.00
                },
                {
                    name: "Army Def",
                    value: 28.00
                },
                {
                    name: "Training Speed",
                    value: 14.00
                }
            ]
            },
            {
            type: "Jewel",
            rarity: "Legendary",
            name: "Infantry Attack Jewel",
            imgPath: "/infAtk.webp",
            stats: [
                {
                    name: "Infantry Atk",
                    value: 20.00
                }
            ]
            },
            {
            type: "Jewel",
            rarity: "Legendary",
            name: "Champion Jewel",
            imgPath: "/champ.webp",
            stats: [
                {
                    name: "Army Max Hp",
                    value: 15.00
                },
                {
                    name: "Travel Speed",
                    value: 20.00
                }
            ]
            },
            {
            type: "Jewel",
            rarity: "Legendary",
            name: "Cavalry Attack Jewel",
            imgPath: "/cavAtk.webp",
            stats: [
                {
                    name: "Cavalry Atk",
                    value: 20.00
                }
            ]
            }),
        new EquipmentSlot(HELMET, HELMET, 
            {
            type: "Helmet",
            rarity: "Mythic",
            name: "Champion Helm",
            imgPath: "/champ1.webp",
            stats: [
                {
                    name: "Cavalry Atk",
                    value: 49.00
                },
                {
                    name: "Army Atk",
                    value: 14.00
                },
                {
                    name: "Army Max Hp",
                    value: 49.00
                },
                {
                    name: "Gold Production Rate",
                    value: 105.00
                }
            ]
            },
            {
            type: "Jewel",
            rarity: "Legendary",
            name: "Infantry Attack Jewel",
            imgPath: "/infAtk.webp",
            stats: [
                {
                    name: "Infantry Atk",
                    value: 20.00
                }
            ]
            },
            {
            type: "Jewel",
            rarity: "Legendary",
            name: "Champion Jewel",
            imgPath: "/champ.webp",
            stats: [
                {
                    name: "Army Max Hp",
                    value: 15.00
                },
                {
                    name: "Travel Speed",
                    value: 20.00
                }
            ]
            },
            {
            type: "Jewel",
            rarity: "Legendary",
            name: "Cavalry Attack Jewel",
            imgPath: "/cavAtk.webp",
            stats: [
                {
                    name: "Cavalry Atk",
                    value: 20.00
                }
            ]
            }),
        new EquipmentSlot("Accessory1", ACCESSORY, 
            {
            type: "Accessory",
            rarity: "Mythic",
            name: "Ambrosial Cup",
            imgPath: "/bon.webp",
            stats: [
                {
                    name: "Infantry Atk",
                    value: 35.00
                },
                {
                    name: "Ranged Atk",
                    value: 35.00
                },
                {
                    name: "Infantry Max Hp",
                    value: 21.00
                },
                {
                    name: "Ranged Max Hp",
                    value: 21.00
                }
            ]
            },
            {
            type: "Jewel",
            rarity: "Legendary",
            name: "Infantry Attack Jewel",
            imgPath: "/infAtk.webp",
            stats: [
                {
                    name: "Infantry Atk",
                    value: 20.00
                }
            ]
            },
            {
            type: "Jewel",
            rarity: "Legendary",
            name: "Ranged Attack Jewel",
            imgPath: "/rangedAtk.webp",
            stats: [
                {
                    name: "Ranged Atk",
                    value: 20.00
                }
            ]
            },
            {
            type: "Jewel",
            rarity: "Legendary",
            name: "Champion Jewel",
            imgPath: "/champ.webp",
            stats: [
                {
                    name: "Army Max Hp",
                    value: 15.00
                },
                {
                    name: "Travel Speed",
                    value: 20.00
                }
            ]
            }),
        new EquipmentSlot(CHEST, CHEST, 
            {
            type: "Chest",
            rarity: "Mythic",
            name: "Champion Plate",
            imgPath: "/champ1.webp",
            stats: [
                {
                    name: "Ranged Atk",
                    value: 56.00
                },
                {
                    name: "Army Def",
                    value: 59.50
                },
                {
                    name: "Army Max Hp",
                    value: 35.00
                },
                {
                    name: "Reduced Upkeep",
                    value: 72.80
                }
            ]
            },
            {
            type: "Jewel",
            rarity: "Legendary",
            name: "Infantry Attack Jewel",
            imgPath: "/infAtk.webp",
            stats: [
                {
                    name: "Infantry Atk",
                    value: 20.00
                }
            ]
            },
            {
            type: "Jewel",
            rarity: "Legendary",
            name: "Ranged Attack Jewel",
            imgPath: "/rangedAtk.webp",
            stats: [
                {
                    name: "Ranged Atk",
                    value: 20.00
                }
            ]
            },
            {
            type: "Jewel",
            rarity: "Legendary",
            name: "Champion Jewel",
            imgPath: "/champ.webp",
            stats: [
                {
                    name: "Army Max Hp",
                    value: 15.00
                },
                {
                    name: "Travel Speed",
                    value: 20.00
                }
            ]
            }),
        new EquipmentSlot("Accessory2", ACCESSORY, 
            {
            type: "Accessory",
            rarity: "Mythic",
            name: "Ambrosial Cup",
            imgPath: "/bon.webp",
            stats: [
                {
                    name: "Infantry Atk",
                    value: 35.00
                },
                {
                    name: "Ranged Atk",
                    value: 35.00
                },
                {
                    name: "Infantry Max Hp",
                    value: 21.00
                },
                {
                    name: "Ranged Max Hp",
                    value: 21.00
                }
            ]
            },
            {
            type: "Jewel",
            rarity: "Legendary",
            name: "Infantry Attack Jewel",
            imgPath: "/infAtk.webp",
            stats: [
                {
                    name: "Infantry Atk",
                    value: 20.00
                }
            ]
            },
            {
            type: "Jewel",
            rarity: "Legendary",
            name: "Ranged Attack Jewel",
            imgPath: "/rangedAtk.webp",
            stats: [
                {
                    name: "Ranged Atk",
                    value: 20.00
                }
            ]
            },
            {
            type: "Jewel",
            rarity: "Legendary",
            name: "Champion Jewel",
            imgPath: "/champ.webp",
            stats: [
                {
                    name: "Army Max Hp",
                    value: 15.00
                },
                {
                    name: "Travel Speed",
                    value: 20.00
                }
            ]
            }),
        new EquipmentSlot(BOOTS, BOOTS, 
            {
            type: "Boots",
            rarity: "Mythic",
            name: "Champion Stride",
            imgPath: "/champ1.webp",
            stats: [
                {
                    name: "Infantry Atk",
                    value: 56.00
                },
                {
                    name: "Army Atk",
                    value: 14.00
                },
                {
                    name: "Army Max Hp",
                    value: 30.80
                },
                {
                    name: "Travel Speed",
                    value: 70.00
                }
            ]
            },
            {
            type: "Jewel",
            rarity: "Legendary",
            name: "Infantry Attack Jewel",
            imgPath: "/infAtk.webp",
            stats: [
                {
                    name: "Infantry Atk",
                    value: 20.00
                }
            ]
            },
            {
            type: "Jewel",
            rarity: "Legendary",
            name: "Champion Jewel",
            imgPath: "/champ.webp",
            stats: [
                {
                    name: "Army Max Hp",
                    value: 15.00
                },
                {
                    name: "Travel Speed",
                    value: 20.00
                }
            ]
            },
            {
            type: "Jewel",
            rarity: "Legendary",
            name: "Cavalry Attack Jewel",
            imgPath: "/cavAtk.webp",
            stats: [
                {
                    name: "Cavalry Atk",
                    value: 20.00
                }
            ]
            }),
        new EquipmentSlot("Accessory3", ACCESSORY, 
            {
            type: "Accessory",
            rarity: "Mythic",
            name: "Ambrosial Cup",
            imgPath: "/bon.webp",
            stats: [
                {
                    name: "Infantry Atk",
                    value: 35.00
                },
                {
                    name: "Ranged Atk",
                    value: 35.00
                },
                {
                    name: "Infantry Max Hp",
                    value: 21.00
                },
                {
                    name: "Ranged Max Hp",
                    value: 21.00
                }
            ]
            },
            {
            type: "Jewel",
            rarity: "Legendary",
            name: "Infantry Attack Jewel",
            imgPath: "/infAtk.webp",
            stats: [
                {
                    name: "Infantry Atk",
                    value: 20.00
                }
            ]
            },
            {
            type: "Jewel",
            rarity: "Legendary",
            name: "Ranged Attack Jewel",
            imgPath: "/rangedAtk.webp",
            stats: [
                {
                    name: "Ranged Atk",
                    value: 20.00
                }
            ]
            },
            {
            type: "Jewel",
            rarity: "Legendary",
            name: "Champion Jewel",
            imgPath: "/champ.webp",
            stats: [
                {
                    name: "Army Max Hp",
                    value: 15.00
                },
                {
                    name: "Travel Speed",
                    value: 20.00
                }
            ]
            })
        ];

    alternativeList: EquipmentSlot[] = [
        new EquipmentSlot(MAINHAND, MAINHAND, 
            {
                type: "Mainhand",
                rarity: "Mythic",
                name: "Kraken's Anchor",
                imgPath: "/tidalTitan.webp",
                stats: [
                    {
                        "name": "Infantry Atk",
                        "value": 35.00
                    },
                    {
                        "name": "Cavalry Atk",
                        "value": 35.00
                    },
                    {
                        "name": "Cavalry Max Hp",
                        "value": 18.20
                    },
                    {
                        "name": "Infantry Def",
                        "value": 18.20
                    }
                ]
            },
            {
                type: "Jewel",
                rarity: "Legendary",
                name: "Infantry Attack Jewel",
                imgPath: "/infAtk.webp",
                stats: [
                    {
                        name: "Infantry Atk",
                        value: 20.00
                    }
                ]
            },
            {
                type: "Jewel",
                rarity: "Legendary",
                name: "Champion Jewel",
                imgPath: "/champ.webp",
                stats: [
                    {
                        name: "Army Max Hp",
                        value: 15.00
                    },
                    {
                        name: "Travel Speed",
                        value: 20.00
                    }
                ]
            },
            {
                type: "Jewel",
                rarity: "Legendary",
                name: "Cavalry Attack Jewel",
                imgPath: "/cavAtk.webp",
                stats: [
                    {
                        name: "Cavalry Atk",
                        value: 20.00
                    }
                ]
            }),
        new EquipmentSlot(OFFHAND, OFFHAND,
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
                type: "Jewel",
                rarity: "Legendary",
                name: "Infantry Attack Jewel",
                imgPath: "/infAtk.webp",
                stats: [
                    {
                        name: "Infantry Atk",
                        value: 20.00
                    }
                ]
            },
            {
                type: "Jewel",
                rarity: "Legendary",
                name: "Ranged Attack Jewel",
                imgPath: "/rangedAtk.webp",
                stats: [
                    {
                        name: "Ranged Atk",
                        value: 20.00
                    }
                ]
            },
            {
                type: "Jewel",
                rarity: "Legendary",
                name: "Champion Jewel",
                imgPath: "/champ.webp",
                stats: [
                    {
                        name: "Army Max Hp",
                        value: 15.00
                    },
                    {
                        name: "Travel Speed",
                        value: 20.00
                    }
                ]
            }),
        new EquipmentSlot(HELMET, HELMET, 
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
                type: "Jewel",
                rarity: "Legendary",
                name: "Infantry Attack Jewel",
                imgPath: "/infAtk.webp",
                stats: [
                    {
                        name: "Infantry Atk",
                        value: 20.00
                    }
                ]
            },
            {
                type: "Jewel",
                rarity: "Legendary",
                name: "Champion Jewel",
                imgPath: "/champ.webp",
                stats: [
                    {
                        name: "Army Max Hp",
                        value: 15.00
                    },
                    {
                        name: "Travel Speed",
                        value: 20.00
                    }
                ]
            },
            {
                type: "Jewel",
                rarity: "Legendary",
                name: "Cavalry Attack Jewel",
                imgPath: "/cavAtk.webp",
                stats: [
                    {
                        name: "Cavalry Atk",
                        value: 20.00
                    }
                ]
            }),
        new EquipmentSlot(CHEST, CHEST, 
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
                type: "Jewel",
                rarity: "Legendary",
                name: "Infantry Attack Jewel",
                imgPath: "/infAtk.webp",
                stats: [
                    {
                        name: "Infantry Atk",
                        value: 20.00
                    }
                ]
            },
            {
                type: "Jewel",
                rarity: "Legendary",
                name: "Champion Jewel",
                imgPath: "/champ.webp",
                stats: [
                    {
                        name: "Army Max Hp",
                        value: 15.00
                    },
                    {
                        name: "Travel Speed",
                        value: 20.00
                    }
                ]
            },
            {
                type: "Jewel",
                rarity: "Legendary",
                name: "Cavalry Attack Jewel",
                imgPath: "/cavAtk.webp",
                stats: [
                    {
                        name: "Cavalry Atk",
                        value: 20.00
                    }
                ]
            })
        ];
}