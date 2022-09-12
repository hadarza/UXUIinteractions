import {images} from '../../constants/index'
export const items = [
    {
        itemText: "עמוד הבית",
        itemLink: "/",
        "sons":null
    },{
        itemText: "פרויקטיים",
        itemLink: "/Projects" ,
        "sons":null},
    {
        itemText: "שירותים",
        itemLink: "/service" ,
        "sons":null},
    {
        itemText: "אודות",
        itemLink: "/portfolio" ,
        "sons":null},
    {
        itemText: "צור קשר", 
        itemLink: "/contact", 
        "sons":[
            {
                itemText: "ילד 1", 
                itemLink: "/Child1", 
                category:"תכונות",
                subItemText:"הסבר ילד 1",
                img:images.cup
            },{
                itemText: "ילד 2", 
                itemLink: "/Child2", 
                category:"תכונות",
                subItemText:"הסבר ילד 1",
                img:images.cup
            },{
                itemText: "ילד 3", 
                itemLink: "/Child3", 
                category:"תכונות",
                subItemText:"הסבר ילד 1",
                img:images.cup


            },
            {
                itemText: "ילד 4", 
                itemLink: "/Child4", 
                category:"קטגורייה",
                subItemText:"הסבר ילד 1",
                img: images.cup


            },{
                itemText: "ילד 5", 
                itemLink: "/Child5", 
                category:"מידע",
                subItemText:"הסבר ילד 1",
                img: images.cup

            },
            {
                itemText: "ילד 6", 
                itemLink: "/Child6",
                category:"קטגורייה",
                subItemText:"הסבר ילד 1",
                img: images.cup
            },
            {
                itemText: "ילד 7", 
                itemLink: "/Child7",
                category:"מידע",
                subItemText:"הסבר ילד 1",
                img: images.cup
            }

        ]
    },
]