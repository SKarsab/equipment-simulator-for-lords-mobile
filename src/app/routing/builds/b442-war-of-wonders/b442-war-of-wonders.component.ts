import { Component, OnInit } from '@angular/core';
import { EquipmentSlot } from 'src/app/equipment-slot/equipment-slot.model';
import { IEquipment } from 'src/interfaces/equipment';
import { IStat } from 'src/interfaces/stat';
import { HOME_ROUTE, BENCHMARKS_ROUTE, BASE_SHARED_PATH, ORANGE, MAINHAND, OFFHAND, HELMET, ACCESSORY, CHEST, BOOTS } from 'src/utilities/constants';

@Component({
    selector: 'app-b442-war-of-wonders',
    templateUrl: './b442-war-of-wonders.component.html',
    styleUrls: ['./b442-war-of-wonders.component.css'],
})
export class B442WarOfWondersComponent implements OnInit {
    HOME_PATH: string = HOME_ROUTE;
    BUILD_PATH: string = BENCHMARKS_ROUTE;
    BASE_SHARED_PATH: string = BASE_SHARED_PATH;

    colour: string = ORANGE;
    title: string = '442 War of Wonders';
    stats: IStat[] = [];
    fillerInfantry: string = '800 000';
    fillerRanged: string = '800 000';
    fillerCavalry: string = '400 000';
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

    introduction: string ="Ever since the update that brought counter mechanics to the game, wonders have been dominated by mixed rally compositions. Blasts/spears need to be extraordinarily high in stats in order to burn other rally leads off wonders when counter stats can go up 60% bonus. A mixed 442 composition with as little as a 500 000 frontline can demolish a full countered blast/spear of 2.375m. That being said, that doesn't mean blasts are useless, they have their role in castle rallies and supporting rallies in wonders.";

    build: string ="Most wonder rallies are in a ranged phalanx, or ranged wedge. This is why the current meta are builds such as 424 or others that focus heavily on infantry and cavalry. The focus of this build is to counter the meta builds by clearing out the opponent's frontline ranged troops with your infantry and then deal enough damage to the opponent's overwhelming amount of cavalry before their infantry squads get to the frontline. Your advantage in ranged stats and numbers will cause too much damage to the opponent's troop morale to recover resulting in the opponent losing and burning off the wonder.";

    notes: string ="If your ranged stats are not high enough, then the battle will drag on too long, allowing the opponent's infantry squads to reach the frontline and decimate your ranged troops. As this build is weak on cavalry stats, and numbers, it will not be able to keep up with your morale loss as your ranged squads thin out. It is important to invest heavily in both infantry and ranged for this build as it is a race against the clock.";

    strongAgainst: string[] = ['424', '111 Even Mix'];
    weakAgainst: string[] = ['244', '100 Infantry Blast if taken in ranged phalanx'];

    equipmentList: EquipmentSlot[] = [
        new EquipmentSlot(
        MAINHAND,
        MAINHAND,
        {
            type: 'Mainhand',
            rarity: 'Mythic',
            name: 'Champion Blade',
            imgPath: '/champ2.webp',
            stats: [
            {
                name: 'Infantry Atk',
                value: 28.0,
            },
            {
                name: 'Ranged Atk',
                value: 28.0,
            },
            {
                name: 'Army Atk',
                value: 21.0,
            },
            {
                name: 'Army Def',
                value: 23.8,
            },
            {
                name: 'Research Speed',
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
        }
        ),
        new EquipmentSlot(
        OFFHAND,
        OFFHAND,
        {
            type: 'Offhand',
            rarity: 'Mythic',
            name: 'Champion Lamp',
            imgPath: '/champ1.webp',
            stats: [
            {
                name: 'Infantry Atk',
                value: 42.0,
            },
            {
                name: 'Ranged Atk',
                value: 49.0,
            },
            {
                name: 'Army Def',
                value: 28.0,
            },
            {
                name: 'Training Speed',
                value: 14.0,
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
        }
        ),
        new EquipmentSlot(
        HELMET,
        HELMET,
        {
            type: 'Helmet',
            rarity: 'Mythic',
            name: 'Champion Visor',
            imgPath: '/champ2.webp',
            stats: [
            {
                name: 'Infantry Atk',
                value: 35.0,
            },
            {
                name: 'Ranged Atk',
                value: 35.0,
            },
            {
                name: 'Army Atk',
                value: 14.0,
            },
            {
                name: 'Army Max Hp',
                value: 28.0,
            },
            {
                name: 'Gold Production Rate',
                value: 105.0,
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
        }
        ),
        new EquipmentSlot(
        'Accessory1',
        ACCESSORY,
        {
            type: 'Accessory',
            rarity: 'Mythic',
            name: 'Ambrosial Cup',
            imgPath: '/bon.webp',
            stats: [
            {
                name: 'Infantry Atk',
                value: 35.0,
            },
            {
                name: 'Ranged Atk',
                value: 35.0,
            },
            {
                name: 'Infantry Max Hp',
                value: 21.0,
            },
            {
                name: 'Ranged Max Hp',
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
        }
        ),
        new EquipmentSlot(
        CHEST,
        CHEST,
        {
            type: 'Chest',
            rarity: 'Mythic',
            name: 'Champion Plate',
            imgPath: '/champ1.webp',
            stats: [
            {
                name: 'Ranged Atk',
                value: 56.0,
            },
            {
                name: 'Army Def',
                value: 59.5,
            },
            {
                name: 'Army Max Hp',
                value: 35.0,
            },
            {
                name: 'Reduced Upkeep',
                value: 72.8,
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
        }
        ),
        new EquipmentSlot(
        'Accessory2',
        ACCESSORY,
        {
            type: 'Accessory',
            rarity: 'Mythic',
            name: 'Ambrosial Cup',
            imgPath: '/bon.webp',
            stats: [
            {
                name: 'Infantry Atk',
                value: 35.0,
            },
            {
                name: 'Ranged Atk',
                value: 35.0,
            },
            {
                name: 'Infantry Max Hp',
                value: 21.0,
            },
            {
                name: 'Ranged Max Hp',
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
        }
        ),
        new EquipmentSlot(
        BOOTS,
        BOOTS,
        {
            type: 'Boots',
            rarity: 'Mythic',
            name: 'Champion Boots',
            imgPath: '/champ2.webp',
            stats: [
            {
                name: 'Ranged Atk',
                value: 56.0,
            },
            {
                name: 'Army Atk',
                value: 14.0,
            },
            {
                name: 'Army Max Hp',
                value: 30.8,
            },
            {
                name: 'Travel Speed',
                value: 70.0,
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
        }
        ),
        new EquipmentSlot(
        'Accessory3',
        ACCESSORY,
        {
            type: 'Accessory',
            rarity: 'Mythic',
            name: 'Ambrosial Cup',
            imgPath: '/bon.webp',
            stats: [
            {
                name: 'Infantry Atk',
                value: 35.0,
            },
            {
                name: 'Ranged Atk',
                value: 35.0,
            },
            {
                name: 'Infantry Max Hp',
                value: 21.0,
            },
            {
                name: 'Ranged Max Hp',
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
        }
        ),
    ];

    alternativeList: EquipmentSlot[] = [
        new EquipmentSlot(
        MAINHAND,
        MAINHAND,
        {
            type: 'Mainhand',
            rarity: 'Mythic',
            name: 'Skullcrusher',
            imgPath: '/helldrider.webp',
            stats: [
            {
                name: 'Ranged Atk',
                value: 21.0,
            },
            {
                name: 'Army Atk',
                value: 28.0,
            },
            {
                name: 'Infantry Def',
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