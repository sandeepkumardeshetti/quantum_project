import efficiencyImg from '../images/efficiency.jpg'
import qualityImg from '../images/quality.jpg'
import {BsTruck} from 'react-icons/bs'
import {FaIndustry} from 'react-icons/fa'
import {RiTeamLine} from 'react-icons/ri'
import {GiShakingHands} from 'react-icons/gi'
import retroMark from '../images/retroMark.png'
import retroPro from '../images/retro-mark-pro.png'
import retroExtreme from '../images/retro-extreme.png'
import retroUltra from '../images/retro-ultra.png'

// import retroMarkTablePro from '../images/table1.png'
import retroMarkTable from '../images/retro_mark_table.png';
import retroProTable from '../images/retro_pro_table.png';
import retroUltraTable from '../images/retro_ultra_table.png';
import retroExtremeTable from '../images/retro_extreme_table.png';





export const practicesData = [
    {
        title : 'Reliability',
        image : `${efficiencyImg}`,
        description : 'We know that Reliability  is key in this industry. We work hard to offer a seamless service at a competitive rate for our clients.'
    },
    {
        title : 'Quality',
        image : `${qualityImg}`,
        description : 'We always strive to give best products and services to our clients. our first priority is quality.',
    },
    {
        title : 'Trustworthy',
        image : `${efficiencyImg}`,
        description : 'We’re honest, transparent and committed to doing what’s best for our clients. We have built our business on this level of integrity.'
    },
]

export const heroHomeData = {
    title : 'Safe and Reliable Marking Solutions',
    subtitle : 'Diversified Service, Unvarying Quality.',
    description : 'From early 2013 holding experience more than 10 years in the road safety industry. Expertise in markets like National Highways, State Roads, Military, Airport markings, Industrial Markings etc accompanied aspect being customer satisfaction. Known for the best customer satisfaction and responsiveness, company always held its position and respect high in the customer point of view.',
    button : 'CONTACT US'
}

export const heroServicesData = {
    title : 'Our Services',
    subtitle : 'Diversified Service, Unvarying Quality.',
    description : 'Our salespeople, all have hands-on, in house production experience and field application knowledge. You can be assured of expert guidance and support in choosing which product is best for your applications. Combined with an expert staff of engineers, factory trained representatives, customer service team; Quantum Industries offers you extreme performance.',
    button : 'CONTACT US'
}

export const heroAboutUsData = {
    title : 'About Us',
    subtitle : 'Diversified Service, Unvarying Quality.',
    description : 'Here at Quantum, we pride ourselves on our friendly and approachable service. We welcome you to get to know us and how we strive to be the very best Road marking partner for you.',
    button : 'CONTACT US'
}

export const heroContactData = {
    title : 'Contact',
    subtitle : 'Diversified Service, Unvarying Quality.',
    description : 'We promise outstanding service and competitive pricing, get in touch with us to find out how we can help your company with all your Road Marking needs.',
    button : 'View our services'
}

export const heroProductsData = {
    title : 'Our Products',
        subtitle : 'Diversified Service, Unvarying Quality.',
        description : 'Quantum Industries focuses on developing the road marking products in compliance with the International Standards fulfilling environmental requirements. Quantum Industries, an ISO 9001:2015 certified company commits to deliver high quality and trade assurance.',
        button : 'CONTACT US'
}

export const heroRetroMarkData = {
    title : 'Retro Mark Products',
    subtitle : 'Diversified Service, Unvarying Quality.',
    description : 'RETRO MARK is a high quality thermoplastic road marking product available in a wide range ofperformance levels to meet all the requirements as specified by the client and National HighwayAuthorities on roads for traffic delineation, advisory markings and mandatory markings as specified.',
    button : 'CONTACT US'
}

 export const servicesArr = [
    { id : 'service1',
        icon : <FaIndustry size="85px" color="#1ae6d5" />,
    title :  "Industry",
    description : "State of the art  fully automated plant is a blend of man and machine , with annual capacity of 45,000 MT . "}
    ,
    {id : 'service2',icon : <GiShakingHands size="85px" color="#1ae6d5" />,
    title :  "Team Of Experts",
    description : "Industry experts who are passionate about their work, have excelled in  field of Road Marking , project management professionals (PMP), and tactical specialists."},
    {id : 'service3',icon :  <RiTeamLine size="85px" color="#1ae6d5" /> ,
    title :  "In House Application Teams ",
    description : "QUANTUM INDUSTRIES is the brand that provides in-house team of professionally trained Application teams  for Nation Highways , Express Ways."},
    
   
    { id : 'service4',
        icon : <BsTruck size="85px" color="#1ae6d5" />,
    title :  "Last-Minute Delivery",
    description : "We provide high-quality, time-focused and expertly coordinated last-minute and multi-drop delivery. We have a solid reputation for customer satisfaction."}
]


export const aboutUsData = [
    {
        id : "aboutUs1",
        title : "Quantum Industries",
        description : "We Quantum Industries departed our journey with ISO 9001:2015 certification with more than 10 years of Industry experience in Thermoplastic Road Markings. We hold eminent position for providing the best products in road safety industry in INDIA. Expertise in markets like National Highways, State Roads, Military, Airport markings, Industrial Markings etc accompanied aspect being customer satisfaction.Having factory in Hyderabad,With cutting edge fully automatic production plant capacity of 45000 Metric Tones annually with strictest testing standards and R&D. Our Thermoplastic Road Marking Material are formulated with the highest quality of raw material to provide long life and excellent visibility even after extended use. Our manufacturing standards comply to MORTH, MOST 803.4 and other International Standards as per user requirement.Our Production facilities are capable to meet the local demand and export enquiries as well. We have been into various projects including NHAI, State Highways, PWD works and urban roads over a wide range in INDIA."
    },
    {
        id : "aboutUs2",
                title : "RESEARCH AND DEVELOPMENT",
                description : "our R&D lab supports major innovation initiatives for Quantum Industries. These include extensive customer application simulation testing, design of experiment testing, prototyping, as well as analysis and engineering of Thermoplastic Paints."
    },
    {
        id : "aboutUs3",
                title : "CUSTOMER SERVICE",
                description : "Our salespeople, all have hands-on, in house production experience and field application knowledge.You can be assured of expert guidance and support in choosing which product is best for your applications. Combined with an expert staff of engineers, factory trained representatives, customer service team; Quantum Industries offers you extreme performance."
    }
]

export const retroProductsData = [
    {
        id : "RETROMARK",
        image : `${retroMark}`,
        productName : "RETRO MARK",
        colors : "Colors : White/Yellow",
        description : "RETRO MARK is a high quality thermoplastic road marking product available in a wide range of performance levels to meet all the requirements as specified by the client ...",
        button : "Know More",

    },
    {
        id : "RETROPRO",
        image : `${retroPro}`,
        productName : "RETRO MARK PRO",
        colors : "Colors : White/Yellow",
        description : "RetroMark Pro is reflective thermoplastic road marking product available in a wide range of performance and composition specifications....",
        button : "Know More",

    },
    {
        id : "RETROEXTREME",
        image : `${retroExtreme}`,
        productName : "RETRO MARK EXTREME",
        colors : "Colors : White/Yellow",
        description : "Retro Mark extreme is retro reflective thermoplastic road marking product available in compliance with MoRTH 803..4 AASHOTO M 249 specifications....",
        button : "Know More",

    },
    {
        id : "RETROULTRA",
        image : `${retroUltra}`,
        productName : "RETRO MARK ULTRA",
        colors : "Colors : White/Yellow",
        description : "Retro Mark ULTRA is retro reflective thermoplastic road marking product available in compliance with BS 3262 specifications....",
        button : "Know More",

    },
]

export const retroProductsFullData = [
    {
        id : "RETROMARK",
        productName : "RETRO MARK",
        image : `${retroMark}`,
        table : `${retroMarkTable}`,
        description : "RETRO MARK is a high quality thermoplastic road marking product available in a wide range of performance levels to meet all the requirements specified by the client and National Highway Authorities on roads for traffic delineation, advisory markings and mandatory markings as specified.RETRO MARK consists of a special thermoplastic binder systems that are made from resins that come from renewable sources. The combination of exact composition of a RETRO MARK grade and the drop on beads results in good output for markings with best visibility and durability. In compliance with Indian Road Marking Standards, RETRO MARK is considered as the best commercial grade. This is very effective for city traffic, roads connecting to Highways and for rural urban roads. RETRO MARK always promises to deliver the best results of Whiteness and reflection.",
        keyFeatures : ["Better Whiteness", "Quick Drying Time", "Skid Resistance", "Cost Effective","Eco-friendly"
    ]

    },
    {
        id : "RETROPRO",
        productName : "RETRO MARK PRO",
        image : `${retroPro}`,
        table : `${retroProTable}`,
        description : "RETRO MARK PRO is specially formulated thermoplastic road marking product available to fulfil Indian Commercial Standards for major projects with improved reflectivity and binding strength.User friendly formulation of RETRO MARK PRO grade results in good adhesion and reflectivity to the segment of clients keen on reflection at cost effective price. Hence it is recommended majorly for Projects, National Highways, State Highways to redefine the safety for road users and is economical. RETRO MARK PRO always promises to deliver the best results of improved reflectivity.",
        keyFeatures : ["Better Whiteness", "High Night Reflection", " Strong Adhesion", "Skid Resistance",
    "Extended Durability","Eco-friendly"
    ]

    },
    {
        id : "RETROEXTREME",
        productName : "RETRO MARK EXTREME",
        image : `${retroExtreme}`,
        table : `${retroExtremeTable}`,
        description : "RETRO MARK EXTREME is retro reflective thermoplastic road marking product available in compliance with MORTH 803.4, AASHTO M249 specifications and is formulated to fulfil Indian/International Standards.RETRO MARK EXTREME is formulated to meet pure specifications of MORTH 803.4, AASHTO M 249 grades using top quality binders and user friendly formulation resulting extreme adhesion and retro-reflectivity. Specialized formulation provides extreme durability, crack resistance, abrasion resistance, and adhesion even in adverse conditions. Hence it is highly recommended for National Highways, State Highways and major projects to redefine the extreme safety for road users.",
        keyFeatures : ["Extreme Whiteness Eco-friendly", "Extreme Reflection", "Extreme Adhesion", " Extended Durability","Eco-friendly"
    ]

    },

    {
        id : "RETROULTRA",
        productName : "RETRO MARK ULTRA",
        image : `${retroUltra}`,
        table : `${retroUltraTable}`,
        description : "RETRO MARK ULTRA is reflective thermoplastic road marking product available in compliance with BS 3262 specifications to meet all global climatic conditions and country demands. In compliance with BS 3262: 1989 Part 1specifications, RETRO MARK ULTRA differentiates with the whiteness of the material and durability of paint. Reliability on all kinds of roads with high whiteness is the added advantage. RETRO MARK ULTRA is formulated using high quality binders resulting good adhesion to asphalt and concrete substrates, has excellent bead retention and retro-reflectivity and is impervious to the effects of petroleum products like oil, grease.diesel, etc. on road surfaces. These properties make RETRO MARK ULTRA extremely durable on Express highways, National Highways, State roads and highly dense traffic areas such as inner city streets, urban roadways & Export Enquiries as well.",
        keyFeatures : [" Superior Night reflection ", "Superior Whiteness", "Skid Resistance", "Skid Resistance",
       "Eco-friendly Extended usage life","Superior Adhesion"
    ]

    }

]