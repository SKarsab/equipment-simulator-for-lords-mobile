import { EquipmentSlot } from "src/app/equipment-slot/equipment-slot.model";
import { MAINHAND, OFFHAND, HELMET, CHEST, BOOTS, ACCESSORY, JEWEL, LEGENDARY, MYTHIC} from "./constants";

export const defaultEquipmentSlots: EquipmentSlot[] = [
    new EquipmentSlot(MAINHAND, MAINHAND, 
        {type: MAINHAND, 
            rarity: MYTHIC, 
            name: "", 
            imgPath: "/Mainhand.PNG", 
            stats: []
        },
        {
            type: JEWEL,
            rarity: LEGENDARY,
            name: "",
            imgPath: "",
            stats: []
        },
        {
            type: JEWEL,
            rarity: LEGENDARY,
            name: "",
            imgPath: "",
            stats: []
        },
        {
            type: JEWEL,
            rarity: LEGENDARY,
            name: "",
            imgPath: "",
            stats: []
        }),
    new EquipmentSlot(OFFHAND, OFFHAND, 
        {
            type: OFFHAND,
            rarity: MYTHIC,
            name: "",
            imgPath: "/Offhand.PNG",
            stats: []
        },
        {
            type: JEWEL,
            rarity: LEGENDARY,
            name: "",
            imgPath: "",
            stats: []
        },
        {
            type: JEWEL,
            rarity: LEGENDARY,
            name: "",
            imgPath: "",
            stats: []
        },
        {
            type: JEWEL,
            rarity: LEGENDARY,
            name: "",
            imgPath: "",
            stats: []
        }),
    new EquipmentSlot(HELMET, HELMET, 
        {
            type: HELMET,
            rarity: MYTHIC,
            name: "",
            imgPath: "/Helmet.PNG",
            stats: []
        },
        {
            type: JEWEL,
            rarity: LEGENDARY,
            name: "",
            imgPath: "",
            stats: []
        },
        {
            type: JEWEL,
            rarity: LEGENDARY,
            name: "",
            imgPath: "",
            stats: []
        },
        {
            type: JEWEL,
            rarity: LEGENDARY,
            name: "",
            imgPath: "",
            stats: []
        }),
    new EquipmentSlot("Accessory1", ACCESSORY, 
        {
            type: ACCESSORY,
            rarity: MYTHIC,
            name: "",
            imgPath: "/Accessory.PNG",
            stats: []
        },
        {
            type: JEWEL,
            rarity: LEGENDARY,
            name: "",
            imgPath: "",
            stats: []
        },
        {
            type: JEWEL,
            rarity: LEGENDARY,
            name: "",
            imgPath: "",
            stats: []
        },
        {
            type: JEWEL,
            rarity: LEGENDARY,
            name: "",
            imgPath: "",
            stats: []
        }),
    new EquipmentSlot(CHEST, CHEST, 
        {
            type: CHEST,
            rarity: MYTHIC,
            name: "",
            imgPath: "/Chest.PNG",
            stats: []
        },
        {
            type: JEWEL,
            rarity: LEGENDARY,
            name: "",
            imgPath: "",
            stats: []
        },
        {
            type: JEWEL,
            rarity: LEGENDARY,
            name: "",
            imgPath: "",
            stats: []
        },
        {
            type: JEWEL,
            rarity: LEGENDARY,
            name: "",
            imgPath: "",
            stats: []
        }),
    new EquipmentSlot("Accessory2", ACCESSORY, 
        {
            type: ACCESSORY,
            rarity: MYTHIC,
            name: "",
            imgPath: "/Accessory.PNG",
            stats: []
        },
        {
            type: JEWEL,
            rarity: LEGENDARY,
            name: "",
            imgPath: "",
            stats: []
        },
        {
            type: JEWEL,
            rarity: LEGENDARY,
            name: "",
            imgPath: "",
            stats: []
        },
        {
            type: JEWEL,
            rarity: LEGENDARY,
            name: "",
            imgPath: "",
            stats: []
        }),
    new EquipmentSlot(BOOTS, BOOTS, 
        {
            type: BOOTS,
            rarity: MYTHIC,
            name: "",
            imgPath: "/Boots.PNG",
            stats: []
        },
        {
            type: JEWEL,
            rarity: LEGENDARY,
            name: "",
            imgPath: "",
            stats: []
        },
        {
            type: JEWEL,
            rarity: LEGENDARY,
            name: "",
            imgPath: "",
            stats: []
        },
        {
            type: JEWEL,
            rarity: LEGENDARY,
            name: "",
            imgPath: "",
            stats: []
        }),
    new EquipmentSlot("Accessory3", ACCESSORY, 
        {
            type: ACCESSORY,
            rarity: MYTHIC,
            name: "",
            imgPath: "/Accessory.PNG",
            stats: []
        },
        {
            type: JEWEL,
            rarity: LEGENDARY,
            name: "",
            imgPath: "",
            stats: []
        },
        {
            type: JEWEL,
            rarity: LEGENDARY,
            name: "",
            imgPath: "",
            stats: []
        },
        {
            type: JEWEL,
            rarity: LEGENDARY,
            name: "",
            imgPath: "",
            stats: []
        })
];