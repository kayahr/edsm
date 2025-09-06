import type {
    StationMarketResponse, StationOutfittingResponse, StationShipyardResponse, SystemBodiesResponse, SystemFactionsResponse, SystemStationsResponse,
    SystemTrafficResponse
} from "../../main/api/system.js";

export const colonia: SystemBodiesResponse = {
    id: 3384966,
    id64: 3238296097059,
    name: "Colonia",
    url: "https://www.edsm.net/en/system/bodies/id/3384966/name/Colonia",
    bodyCount: 32,
    bodies: [
        {
            id: 17858,
            id64: 3238296097059,
            bodyId: 0,
            name: "Colonia",
            discovery: {
                commander: "Vorrash",
                date: "2016-10-25 17:21:35"
            },
            type: "Star",
            subType: "F (White) Star",
            parents: null,
            distanceToArrival: 0,
            isMainStar: true,
            isScoopable: true,
            age: 3414,
            spectralClass: "F4",
            luminosity: "Vab",
            absoluteMagnitude: 3.395905,
            solarMasses: 1.453125,
            solarRadius: 1.3793944385334291,
            surfaceTemperature: 6844,
            orbitalPeriod: null,
            semiMajorAxis: null,
            orbitalEccentricity: null,
            orbitalInclination: null,
            argOfPeriapsis: null,
            rotationalPeriod: 2.4749871022569447,
            rotationalPeriodTidallyLocked: false,
            axialTilt: 0,
            belts: [
                {
                    name: "Colonia A Belt",
                    type: "Metal Rich",
                    mass: 8929100000000000,
                    innerRadius: 11925000,
                    outerRadius: 190800000
                }
            ],
            updateTime: "2021-01-16 12:49:22"
        },
        {
            id: 84104,
            id64: 36032035315061027n,
            bodyId: 1,
            name: "Colonia 1",
            discovery: {
                commander: "buck satan",
                date: "2016-10-26 05:11:25"
            },
            type: "Planet",
            subType: "Metal-rich body",
            parents: [
                {
                    Star: 0
                }
            ],
            distanceToArrival: 13,
            isLandable: false,
            gravity: 2.224648301965268,
            earthMasses: 1.802388,
            radius: 5740.8735,
            surfaceTemperature: 2618,
            surfacePressure: 166.55622995312115,
            volcanismType: "Major Silicate Vapour Geysers",
            atmosphereType: "Hot thick Silicate vapour",
            atmosphereComposition: {
                Silicates: 100
            },
            solidComposition: {
                Metal: 100,
                Ice: 0,
                Rock: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 1.2493519181481483,
            semiMajorAxis: 0.025971017411969086,
            orbitalEccentricity: 1.0e-6,
            orbitalInclination: -0.001146,
            argOfPeriapsis: 90.871507,
            rotationalPeriod: 1.2680229784722221,
            rotationalPeriodTidallyLocked: true,
            axialTilt: 0.48361,
            updateTime: "2025-09-06 06:02:25"
        },
        {
            id: 19811,
            id64: 468377599542628643n,
            bodyId: 13,
            name: "Colonia 2",
            discovery: {
                commander: "buck satan",
                date: "2016-10-26 05:12:07"
            },
            type: "Planet",
            subType: "Class III gas giant",
            parents: [
                {
                    Star: 0
                }
            ],
            distanceToArrival: 1010,
            isLandable: false,
            gravity: 6.331089358906819,
            earthMasses: 913.946655,
            radius: 76631.216,
            surfaceTemperature: 390,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: {
                Hydrogen: 72.86,
                Helium: 27.14
            },
            solidComposition: null,
            terraformingState: "Not terraformable",
            orbitalPeriod: 859.9178451630787,
            semiMajorAxis: 2.0245654797420856,
            orbitalEccentricity: 0.000635,
            orbitalInclination: 0.013808,
            argOfPeriapsis: 16.706132,
            rotationalPeriod: 1.1208140598611112,
            rotationalPeriodTidallyLocked: false,
            axialTilt: 0.383997,
            rings: [
                {
                    name: "Colonia 2 A Ring",
                    type: "Metal Rich",
                    mass: 220970000000,
                    innerRadius: 115770,
                    outerRadius: 145680
                },
                {
                    name: "Colonia 2 B Ring",
                    type: "Rocky",
                    mass: 2651700000000,
                    innerRadius: 145780,
                    outerRadius: 337840
                }
            ],
            reserveLevel: "Pristine",
            updateTime: "2025-09-06 04:50:05"
        },
        {
            id: 17266,
            id64: 576463990599520547n,
            bodyId: 16,
            name: "Colonia 2 a",
            discovery: {
                commander: "buck satan",
                date: "2016-10-26 05:14:55"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 13
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 1011,
            isLandable: true,
            gravity: 0.11895634757417474,
            earthMasses: 0.002984,
            radius: 1010.159875,
            surfaceTemperature: 285,
            surfacePressure: 0,
            volcanismType: "Minor Metallic Magma",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 91.12,
                Metal: 8.88,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 1.062901014525463,
            semiMajorAxis: 0.002854002054198021,
            orbitalEccentricity: 0.001361,
            orbitalInclination: 0.002177,
            argOfPeriapsis: 80.721334,
            rotationalPeriod: 1.0629120405902779,
            rotationalPeriodTidallyLocked: false,
            axialTilt: 0.517441,
            materials: {
                Iron: 18.52,
                Sulphur: 18.2,
                Carbon: 15.3,
                Nickel: 14.01,
                Phosphorus: 9.8,
                Chromium: 8.33,
                Manganese: 7.65,
                Zinc: 5.03,
                Molybdenum: 1.21,
                Ruthenium: 1.14,
                Mercury: 0.81
            },
            updateTime: "2025-09-06 04:50:05"
        },
        {
            id: 46238,
            id64: 612492787618484515n,
            bodyId: 17,
            name: "Colonia 2 b",
            discovery: {
                commander: "buck satan",
                date: "2016-10-26 05:14:14"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 13
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 1007,
            isLandable: false,
            gravity: 0.10951772860912264,
            earthMasses: 0.002339,
            radius: 932.0890625,
            surfaceTemperature: 527,
            surfacePressure: 0.4110544272785591,
            volcanismType: "No volcanism",
            atmosphereType: "Hot Water",
            atmosphereComposition: {
                Water: 100
            },
            solidComposition: {
                Rock: 91.12,
                Metal: 8.88,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 3.717122047592593,
            semiMajorAxis: 0.006575004694163137,
            orbitalEccentricity: 0.005294,
            orbitalInclination: 0.082334,
            argOfPeriapsis: 269.341106,
            rotationalPeriod: 3.717160002534722,
            rotationalPeriodTidallyLocked: true,
            axialTilt: -0.382279,
            updateTime: "2025-09-06 04:50:05"
        },
        {
            id: 46240,
            id64: 648521584637448483n,
            bodyId: 18,
            name: "Colonia 2 c",
            discovery: {
                commander: "buck satan",
                date: "2016-10-26 05:13:31"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 13
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 1008,
            isLandable: false,
            gravity: 0.11072859991232531,
            earthMasses: 0.002417,
            radius: 942.308125,
            surfaceTemperature: 522,
            surfacePressure: 0.42028401030347895,
            volcanismType: "No volcanism",
            atmosphereType: "Hot Water",
            atmosphereComposition: {
                Water: 100
            },
            solidComposition: {
                Rock: 91.12,
                Metal: 8.88,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 5.457698815949074,
            semiMajorAxis: 0.008494005897123375,
            orbitalEccentricity: 0.00133,
            orbitalInclination: 0.066005,
            argOfPeriapsis: 159.294819,
            rotationalPeriod: 5.457756125034722,
            rotationalPeriodTidallyLocked: true,
            axialTilt: -0.298328,
            updateTime: "2025-09-06 04:50:05"
        },
        {
            id: 46241,
            id64: 720579178675376419n,
            bodyId: 20,
            name: "Colonia 2 d",
            discovery: {
                commander: "buck satan",
                date: "2016-10-26 05:15:47"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 13
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 1015,
            isLandable: false,
            gravity: 0.16046187990625888,
            earthMasses: 0.007169,
            radius: 1348.117875,
            surfaceTemperature: 552,
            surfacePressure: 0.8825474185837652,
            volcanismType: "No volcanism",
            atmosphereType: "Hot Water",
            atmosphereComposition: {
                Water: 100
            },
            solidComposition: {
                Rock: 91.12,
                Metal: 8.88,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 19.782378717708333,
            semiMajorAxis: 0.02004301484700945,
            orbitalEccentricity: 0.007577,
            orbitalInclination: -0.891923,
            argOfPeriapsis: 245.049702,
            rotationalPeriod: 19.782583020497686,
            rotationalPeriodTidallyLocked: false,
            axialTilt: -0.198098,
            updateTime: "2025-09-06 04:50:05"
        },
        {
            id: 19383,
            id64: 828665569732268323n,
            bodyId: 23,
            name: "Colonia 3",
            discovery: {
                commander: "Abish",
                date: "2016-10-26 03:35:59"
            },
            type: "Star",
            subType: "Y (Brown dwarf) Star",
            parents: [
                {
                    Null: 22
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 1542,
            isMainStar: false,
            isScoopable: false,
            age: 3414,
            spectralClass: "Y3",
            luminosity: "V",
            absoluteMagnitude: 21.798279,
            solarMasses: 0.015625,
            solarRadius: 0.07321166355140186,
            surfaceTemperature: 460,
            orbitalPeriod: 177.13442858722223,
            semiMajorAxis: 0.04795625653503169,
            orbitalEccentricity: 0.031548,
            orbitalInclination: 5.671652,
            argOfPeriapsis: 312.773651,
            rotationalPeriod: 0.5822270067129629,
            rotationalPeriodTidallyLocked: false,
            axialTilt: 1.983615,
            rings: [
                {
                    name: "Colonia 3 A Ring",
                    type: "Rocky",
                    mass: 5858700000000,
                    innerRadius: 78206,
                    outerRadius: 619230
                }
            ],
            reserveLevel: null,
            updateTime: "2025-09-06 06:57:43"
        },
        {
            id: 19310,
            id64: 900723163770196259n,
            bodyId: 25,
            name: "Colonia 3 a",
            discovery: {
                commander: "buck satan",
                date: "2016-10-26 05:06:17"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Star: 23
                },
                {
                    Null: 22
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 1538,
            isLandable: false,
            gravity: 0.17576270266539576,
            earthMasses: 0.009347,
            radius: 1470.812375,
            surfaceTemperature: 996,
            surfacePressure: 105.8907574636072,
            volcanismType: "Minor Metallic Magma",
            atmosphereType: "Hot thick Water",
            atmosphereComposition: {
                Water: 100
            },
            solidComposition: {
                Rock: 91.12,
                Metal: 8.88,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 1.2396160099189815,
            semiMajorAxis: 0.005796004048826813,
            orbitalEccentricity: 0.000165,
            orbitalInclination: 0.050764,
            argOfPeriapsis: 51.715744,
            rotationalPeriod: 1.2396279141435185,
            rotationalPeriodTidallyLocked: false,
            axialTilt: 0.386993,
            updateTime: "2025-09-06 06:57:42"
        },
        {
            id: 84059,
            id64: 936751960789160227n,
            bodyId: 26,
            name: "Colonia 3 b",
            discovery: {
                commander: "buck satan",
                date: "2016-10-26 05:06:57"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Star: 23
                },
                {
                    Null: 22
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 1535,
            isLandable: false,
            gravity: 0.16599859339855003,
            earthMasses: 0.007915,
            radius: 1392.700625,
            surfaceTemperature: 954,
            surfacePressure: 97.893224771774,
            volcanismType: "Major Rocky Magma",
            atmosphereType: "Hot thick Sulphur dioxide",
            atmosphereComposition: {
                Water: 96.46,
                "Sulphur dioxide": 3.19,
                Silicates: 0.18
            },
            solidComposition: {
                Rock: 91.12,
                Metal: 8.88,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 1.819290013773148,
            semiMajorAxis: 0.007485005224562332,
            orbitalEccentricity: 9.9e-5,
            orbitalInclination: -0.08686,
            argOfPeriapsis: 210.624838,
            rotationalPeriod: 1.8193069752546298,
            rotationalPeriodTidallyLocked: true,
            axialTilt: 0.439878,
            updateTime: "2025-09-06 06:57:43"
        },
        {
            id: 22483,
            id64: 972780757808124195n,
            bodyId: 27,
            name: "Colonia 3 c",
            discovery: {
                commander: "buck satan",
                date: "2016-10-26 05:07:26"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Star: 23
                },
                {
                    Null: 22
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 1537,
            isLandable: true,
            gravity: 0.2701837086431679,
            earthMasses: 0.032055,
            radius: 2196.86225,
            surfaceTemperature: 243,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 90.68,
                Metal: 9.32,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 3.241189927962963,
            semiMajorAxis: 0.011000007295850501,
            orbitalEccentricity: 0.000548,
            orbitalInclination: -0.210848,
            argOfPeriapsis: 51.643149,
            rotationalPeriod: 3.241221971018519,
            rotationalPeriodTidallyLocked: false,
            axialTilt: 0.969059,
            materials: {
                Iron: 19.24,
                Sulphur: 18.74,
                Carbon: 15.76,
                Nickel: 14.55,
                Phosphorus: 10.09,
                Manganese: 7.95,
                Germanium: 5.49,
                Vanadium: 4.72,
                Molybdenum: 1.26,
                Yttrium: 1.15,
                Tungsten: 1.06
            },
            updateTime: "2025-09-06 06:57:43"
        },
        {
            id: 16835,
            id64: 1008809554827088163n,
            bodyId: 28,
            name: "Colonia 3 c a",
            discovery: {
                commander: "buck satan",
                date: "2016-10-26 05:08:17"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 27
                },
                {
                    Star: 23
                },
                {
                    Null: 22
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 1537,
            isLandable: true,
            gravity: 0.10804116083753366,
            earthMasses: 0.002444,
            radius: 959.2691875,
            surfaceTemperature: 243,
            surfacePressure: 0,
            volcanismType: "Major Silicate Vapour Geysers",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 96.88,
                Metal: 3.12,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 0.22388499368055556,
            semiMajorAxis: 3.400002476029895e-5,
            orbitalEccentricity: 0,
            orbitalInclination: 84.874246,
            argOfPeriapsis: 29.878372,
            rotationalPeriod: 0.2322629930324074,
            rotationalPeriodTidallyLocked: false,
            axialTilt: -0.143819,
            materials: {
                Sulphur: 20.92,
                Iron: 18.46,
                Carbon: 17.59,
                Nickel: 13.96,
                Phosphorus: 11.26,
                Manganese: 7.62,
                Vanadium: 4.53,
                Zirconium: 2.14,
                Antimony: 1.29,
                Niobium: 1.26,
                Tin: 0.96
            },
            updateTime: "2025-09-06 06:57:43"
        },
        {
            id: 84076,
            id64: 1044838351846052131n,
            bodyId: 29,
            name: "Colonia 3 d",
            discovery: {
                commander: "buck satan",
                date: "2016-10-26 05:08:45"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Star: 23
                },
                {
                    Null: 22
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 1544,
            isLandable: true,
            gravity: 0.19684593733497693,
            earthMasses: 0.012982,
            radius: 1637.91775,
            surfaceTemperature: 233,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 91.12,
                Metal: 8.88,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 7.2550091340625,
            semiMajorAxis: 0.01882201265540673,
            orbitalEccentricity: 4.3e-5,
            orbitalInclination: -0.014324,
            argOfPeriapsis: 164.956267,
            rotationalPeriod: 7.255079005185185,
            rotationalPeriodTidallyLocked: true,
            axialTilt: -0.476577,
            materials: {
                Iron: 19.67,
                Sulphur: 19.33,
                Carbon: 16.25,
                Nickel: 14.88,
                Phosphorus: 10.41,
                Germanium: 5.66,
                Zinc: 5.35,
                Vanadium: 4.83,
                Niobium: 1.34,
                Antimony: 1.2,
                Tungsten: 1.08
            },
            updateTime: "2025-09-06 06:57:43"
        },
        {
            id: 22852,
            id64: 1080867148865016099n,
            bodyId: 30,
            name: "Colonia 4",
            discovery: {
                commander: "Bosko",
                date: "2016-10-25 15:56:23"
            },
            type: "Planet",
            subType: "Class III gas giant",
            parents: [
                {
                    Null: 22
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 1466,
            isLandable: false,
            gravity: 199.4793949679778,
            earthMasses: 2010.460327,
            radius: 20248.052,
            surfaceTemperature: 611,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: {
                Hydrogen: 72.86,
                Helium: 27.14
            },
            solidComposition: null,
            terraformingState: "Not terraformable",
            orbitalPeriod: 177.13442858722223,
            semiMajorAxis: 0.12412487751465034,
            orbitalEccentricity: 0.031548,
            orbitalInclination: 5.671652,
            argOfPeriapsis: 132.773656,
            rotationalPeriod: 200.55288721118058,
            rotationalPeriodTidallyLocked: false,
            axialTilt: 0.025747,
            rings: [
                {
                    name: "Colonia 4 A Ring",
                    type: "Metallic",
                    mass: 8072300000,
                    innerRadius: 55669,
                    outerRadius: 57981
                },
                {
                    name: "Colonia 4 B Ring",
                    type: "Rocky",
                    mass: 82884000000,
                    innerRadius: 58081,
                    outerRadius: 77840
                }
            ],
            reserveLevel: "Pristine",
            updateTime: "2025-09-06 06:03:45"
        },
        {
            id: 84401,
            id64: 1224982336940871971n,
            bodyId: 34,
            name: "Colonia 5",
            discovery: {
                commander: "buck satan",
                date: "2016-10-26 19:29:38"
            },
            type: "Planet",
            subType: "Class IV gas giant",
            parents: [
                {
                    Null: 33
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 2554,
            isLandable: false,
            gravity: 31.12273673313665,
            earthMasses: 3334.705811,
            radius: 66019.828,
            surfaceTemperature: 915,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: {
                Hydrogen: 72.86,
                Helium: 27.14
            },
            solidComposition: null,
            terraformingState: "Not terraformable",
            orbitalPeriod: 349.3785306259491,
            semiMajorAxis: 0.0008850807725996598,
            orbitalEccentricity: 0.179857,
            orbitalInclination: 4.195254,
            argOfPeriapsis: 275.411942,
            rotationalPeriod: 0.785086001087963,
            rotationalPeriodTidallyLocked: false,
            axialTilt: -0.181327,
            rings: [
                {
                    name: "Colonia 5 A Ring",
                    type: "Metal Rich",
                    mass: 82442000000,
                    innerRadius: 120050,
                    outerRadius: 150770
                },
                {
                    name: "Colonia 5 B Ring",
                    type: "Metal Rich",
                    mass: 2454600000000,
                    innerRadius: 150870,
                    outerRadius: 520080
                }
            ],
            reserveLevel: "Pristine",
            updateTime: "2025-09-06 04:50:05"
        },
        {
            id: 84460,
            id64: 1333068727997763875n,
            bodyId: 37,
            name: "Colonia 5 a",
            discovery: {
                commander: "buck satan",
                date: "2016-10-26 19:32:41"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 34
                },
                {
                    Null: 33
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 2555,
            isLandable: true,
            gravity: 0.1380403762176711,
            earthMasses: 0.004619,
            radius: 1166.689875,
            surfaceTemperature: 313,
            surfacePressure: 0,
            volcanismType: "Metallic Magma",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 91.12,
                Metal: 8.88,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 0.9593080246296296,
            semiMajorAxis: 0.004103002730914539,
            orbitalEccentricity: 0.000473,
            orbitalInclination: 0.053228,
            argOfPeriapsis: 237.584169,
            rotationalPeriod: 0.9593120363888888,
            rotationalPeriodTidallyLocked: true,
            axialTilt: -0.272851,
            materials: {
                Iron: 18.39,
                Sulphur: 18.07,
                Carbon: 15.19,
                Nickel: 13.91,
                Phosphorus: 9.73,
                Chromium: 8.27,
                Manganese: 7.59,
                Germanium: 5.29,
                Niobium: 1.26,
                Molybdenum: 1.2,
                Antimony: 1.12
            },
            updateTime: "2025-09-06 04:50:05"
        },
        {
            id: 84446,
            id64: 1369097525016727843n,
            bodyId: 38,
            name: "Colonia 5 b",
            discovery: {
                commander: "buck satan",
                date: "2016-10-26 19:34:39"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 34
                },
                {
                    Null: 33
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 2557,
            isLandable: false,
            gravity: 0.13809650444777372,
            earthMasses: 0.004614,
            radius: 1165.82125,
            surfaceTemperature: 528,
            surfacePressure: 0.65266908771774,
            volcanismType: "Minor Water Magma",
            atmosphereType: "Hot Water",
            atmosphereComposition: {
                Water: 100
            },
            solidComposition: {
                Rock: 90.97,
                Metal: 9.03,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 3.514408099432871,
            semiMajorAxis: 0.009751007256626013,
            orbitalEccentricity: 0.006736,
            orbitalInclination: 0.018392,
            argOfPeriapsis: 98.41192,
            rotationalPeriod: -3.5144240755324074,
            rotationalPeriodTidallyLocked: false,
            axialTilt: -1.946286,
            updateTime: "2025-09-06 04:50:05"
        },
        {
            id: 84437,
            id64: 1405126322035691811n,
            bodyId: 39,
            name: "Colonia 5 c",
            discovery: {
                commander: "buck satan",
                date: "2016-10-26 19:35:36"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 34
                },
                {
                    Null: 33
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 2557,
            isLandable: true,
            gravity: 0.10913942728418277,
            earthMasses: 0.002317,
            radius: 929.301625,
            surfaceTemperature: 243,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 91.12,
                Metal: 8.88,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 5.410751810775463,
            semiMajorAxis: 0.01300100832558374,
            orbitalEccentricity: 0.007599,
            orbitalInclination: -1.253861,
            argOfPeriapsis: 218.396501,
            rotationalPeriod: 5.410777304236111,
            rotationalPeriodTidallyLocked: false,
            axialTilt: -0.266461,
            materials: {
                Iron: 19.53,
                Sulphur: 19.19,
                Carbon: 16.13,
                Nickel: 14.77,
                Phosphorus: 10.33,
                Chromium: 8.78,
                Vanadium: 4.8,
                Arsenic: 2.51,
                Cadmium: 1.52,
                Molybdenum: 1.28,
                Yttrium: 1.17
            },
            updateTime: "2025-09-06 04:50:05"
        },
        {
            id: 84468,
            id64: 1441155119054655779n,
            bodyId: 40,
            name: "Colonia 5 d",
            discovery: {
                commander: "buck satan",
                date: "2016-10-26 19:36:09"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 34
                },
                {
                    Null: 33
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 2547,
            isLandable: true,
            gravity: 0.13414177277359857,
            earthMasses: 0.004246,
            radius: 1134.729875,
            surfaceTemperature: 222,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 91.12,
                Metal: 8.88,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 12.21946475130787,
            semiMajorAxis: 0.022379015482450984,
            orbitalEccentricity: 0.000665,
            orbitalInclination: 2.352278,
            argOfPeriapsis: 206.477657,
            rotationalPeriod: 12.219521697662037,
            rotationalPeriodTidallyLocked: false,
            axialTilt: -0.241708,
            materials: {
                Iron: 19.36,
                Sulphur: 19.02,
                Carbon: 16,
                Nickel: 14.64,
                Phosphorus: 10.24,
                Chromium: 8.71,
                Germanium: 5.57,
                Arsenic: 2.49,
                Cadmium: 1.5,
                Molybdenum: 1.26,
                Ruthenium: 1.2
            },
            updateTime: "2025-09-06 04:50:05"
        },
        {
            id: 84417,
            id64: 1477183916073619747n,
            bodyId: 41,
            name: "Colonia 5 e",
            discovery: {
                commander: "buck satan",
                date: "2016-10-26 19:31:55"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 34
                },
                {
                    Null: 33
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 2545,
            isLandable: true,
            gravity: 0.15266438978718053,
            earthMasses: 0.00616,
            radius: 1281.16775,
            surfaceTemperature: 211,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 90.67,
                Metal: 9.33,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 20.17812872375,
            semiMajorAxis: 0.031265023519304005,
            orbitalEccentricity: 0.005945,
            orbitalInclination: -1.948515,
            argOfPeriapsis: 327.510248,
            rotationalPeriod: 20.17821978136574,
            rotationalPeriodTidallyLocked: true,
            axialTilt: 0.545094,
            materials: {
                Iron: 19.1,
                Sulphur: 18.6,
                Carbon: 15.64,
                Nickel: 14.45,
                Phosphorus: 10.01,
                Chromium: 8.59,
                Germanium: 5.44,
                Vanadium: 4.69,
                Molybdenum: 1.25,
                Ruthenium: 1.18,
                Tungsten: 1.05
            },
            updateTime: "2025-09-06 04:50:05"
        },
        {
            id: 84425,
            id64: 1513212713092583715n,
            bodyId: 42,
            name: "Colonia 5 e a",
            discovery: {
                commander: "buck satan",
                date: "2016-10-26 19:31:50"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 41
                },
                {
                    Planet: 34
                },
                {
                    Null: 33
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 2545,
            isLandable: true,
            gravity: 0.06217903254799908,
            earthMasses: 0.000476,
            radius: 558.040875,
            surfaceTemperature: 211,
            surfacePressure: 0,
            volcanismType: "Minor Metallic Magma",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 96.88,
                Metal: 3.12,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 1.2410109931712963,
            semiMajorAxis: 6.10000421612017e-5,
            orbitalEccentricity: 0,
            orbitalInclination: 61.788685,
            argOfPeriapsis: 120.369271,
            rotationalPeriod: 1.2880379968981481,
            rotationalPeriodTidallyLocked: true,
            axialTilt: 0.453799,
            materials: {
                Sulphur: 20.4,
                Iron: 18,
                Carbon: 17.15,
                Nickel: 13.61,
                Phosphorus: 10.98,
                Chromium: 8.09,
                Germanium: 5.97,
                Zirconium: 2.09,
                Cadmium: 1.4,
                Niobium: 1.23,
                Yttrium: 1.08
            },
            updateTime: "2025-09-06 04:50:05"
        },
        {
            id: 52985,
            id64: 1549241510111547683n,
            bodyId: 43,
            name: "Colonia 6",
            discovery: {
                commander: "buck satan",
                date: "2016-10-26 19:30:12"
            },
            type: "Planet",
            subType: "High metal content world",
            parents: [
                {
                    Null: 33
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 2577,
            isLandable: false,
            gravity: 3.081908281146951,
            earthMasses: 14.144292,
            radius: 13663.604,
            surfaceTemperature: 1369,
            surfacePressure: 29199.75792746114,
            volcanismType: "Major Silicate Vapour Geysers",
            atmosphereType: "Hot thick Water",
            atmosphereComposition: {
                Water: 99.25,
                Ammonia: 0.25,
                Methane: 0.25
            },
            solidComposition: {
                Rock: 64.76,
                Metal: 31.57,
                Ice: 0.06
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 349.3785306259491,
            semiMajorAxis: 0.20867106609643743,
            orbitalEccentricity: 0.179857,
            orbitalInclination: 4.195254,
            argOfPeriapsis: 95.411947,
            rotationalPeriod: 1.057571112951389,
            rotationalPeriodTidallyLocked: false,
            axialTilt: -0.235733,
            updateTime: "2025-09-06 04:50:05"
        },
        {
            id: 54094,
            id64: 1585270307130511651n,
            bodyId: 44,
            name: "Colonia 7",
            discovery: {
                commander: "buck satan",
                date: "2016-10-26 19:38:03"
            },
            type: "Star",
            subType: "Y (Brown dwarf) Star",
            parents: [
                {
                    Star: 0
                }
            ],
            distanceToArrival: 3736,
            isMainStar: false,
            isScoopable: false,
            age: 3414,
            spectralClass: "Y4",
            luminosity: "V",
            absoluteMagnitude: 22.895828,
            solarMasses: 0.011719,
            solarRadius: 0.06805419410496046,
            surfaceTemperature: 388,
            orbitalPeriod: 5984.637679325232,
            semiMajorAxis: 7.379932214979715,
            orbitalEccentricity: 0.016545,
            orbitalInclination: 0.070245,
            argOfPeriapsis: 234.886271,
            rotationalPeriod: 0.8808980525694445,
            rotationalPeriodTidallyLocked: false,
            axialTilt: 0.322508,
            rings: [
                {
                    name: "Colonia 7 A Ring",
                    type: "Metallic",
                    mass: 412080000000,
                    innerRadius: 101890,
                    outerRadius: 170690
                },
                {
                    name: "Colonia 7 B Ring",
                    type: "Rocky",
                    mass: 6527600000000,
                    innerRadius: 170790,
                    outerRadius: 570410
                }
            ],
            reserveLevel: null,
            updateTime: "2025-09-06 04:50:05"
        },
        {
            id: 52871,
            id64: 1693356698187403555n,
            bodyId: 47,
            name: "Colonia 7 a",
            discovery: {
                commander: "buck satan",
                date: "2016-10-26 19:41:21"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Star: 44
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 3729,
            isLandable: true,
            gravity: 0.1771365093841947,
            earthMasses: 0.009524,
            radius: 1478.904625,
            surfaceTemperature: 128,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 90.86,
                Metal: 9.14,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 6.499880786851851,
            semiMajorAxis: 0.016113011521774287,
            orbitalEccentricity: 0.000217,
            orbitalInclination: 0.400154,
            argOfPeriapsis: 126.100441,
            rotationalPeriod: -6.500004060439815,
            rotationalPeriodTidallyLocked: false,
            axialTilt: -2.851923,
            materials: {
                Iron: 18.39,
                Sulphur: 17.98,
                Carbon: 15.12,
                Nickel: 13.91,
                Phosphorus: 9.68,
                Chromium: 8.27,
                Manganese: 7.6,
                Germanium: 5.26,
                Cadmium: 1.43,
                Tellurium: 1.36,
                Tungsten: 1.01
            },
            updateTime: "2025-09-06 04:50:05"
        },
        {
            id: 52897,
            id64: 1729385495206367523n,
            bodyId: 48,
            name: "Colonia 7 a a",
            discovery: {
                commander: "buck satan",
                date: "2016-10-26 19:42:24"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 47
                },
                {
                    Star: 44
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 3729,
            isLandable: true,
            gravity: 0.059964551497888985,
            earthMasses: 0.000427,
            radius: 538.20925,
            surfaceTemperature: 128,
            surfacePressure: 0,
            volcanismType: "Major Silicate Vapour Geysers",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 96.88,
                Metal: 3.12,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 0.49997799925925923,
            semiMajorAxis: 3.8000025095183387e-5,
            orbitalEccentricity: 0,
            orbitalInclination: -72.096711,
            argOfPeriapsis: 38.884526,
            rotationalPeriod: 0.5110520176273148,
            rotationalPeriodTidallyLocked: true,
            axialTilt: -0.079162,
            materials: {
                Sulphur: 19.76,
                Iron: 17.44,
                Carbon: 16.62,
                Nickel: 13.19,
                Phosphorus: 10.64,
                Chromium: 7.84,
                Germanium: 5.78,
                Zinc: 4.74,
                Tellurium: 1.5,
                Cadmium: 1.35,
                Molybdenum: 1.14
            },
            updateTime: "2025-09-06 04:50:05"
        },
        {
            id: 54177,
            id64: 1765414292225331491n,
            bodyId: 49,
            name: "Colonia 7 b",
            discovery: {
                commander: "buck satan",
                date: "2016-10-26 19:40:30"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Star: 44
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 3721,
            isLandable: true,
            gravity: 0.1478906947659214,
            earthMasses: 0.00565,
            radius: 1246.632125,
            surfaceTemperature: 128,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 91.12,
                Metal: 8.88,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 11.483889556041667,
            semiMajorAxis: 0.02354901632945769,
            orbitalEccentricity: 0.001063,
            orbitalInclination: -0.013465,
            argOfPeriapsis: 316.984544,
            rotationalPeriod: 11.484106833773149,
            rotationalPeriodTidallyLocked: true,
            axialTilt: 0.246335,
            materials: {
                Iron: 19.63,
                Sulphur: 19.28,
                Carbon: 16.22,
                Nickel: 14.85,
                Phosphorus: 10.38,
                Manganese: 8.11,
                Zinc: 5.33,
                Arsenic: 2.52,
                Niobium: 1.34,
                Yttrium: 1.17,
                Tin: 1.17
            },
            updateTime: "2025-09-06 04:50:05"
        },
        {
            id: 84545,
            id64: 1801443089244295459n,
            bodyId: 50,
            name: "Colonia 7 c",
            discovery: {
                commander: "buck satan",
                date: "2016-10-26 19:43:07"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Star: 44
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 3747,
            isLandable: true,
            gravity: 0.26336614990049345,
            earthMasses: 0.029988,
            radius: 2152.1785,
            surfaceTemperature: 128,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 91.12,
                Metal: 8.88,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 59.649700091944446,
            semiMajorAxis: 0.07063004707925298,
            orbitalEccentricity: 0.000385,
            orbitalInclination: -0.010772,
            argOfPeriapsis: 185.317867,
            rotationalPeriod: 59.65083082287037,
            rotationalPeriodTidallyLocked: true,
            axialTilt: 0.032617,
            materials: {
                Iron: 18.57,
                Sulphur: 18.25,
                Carbon: 15.34,
                Nickel: 14.05,
                Phosphorus: 9.82,
                Chromium: 8.35,
                Manganese: 7.67,
                Vanadium: 4.56,
                Cadmium: 1.44,
                Antimony: 1.13,
                Mercury: 0.81
            },
            updateTime: "2025-09-06 04:50:05"
        },
        {
            id: 84589,
            id64: 1837471886263259427n,
            bodyId: 51,
            name: "Colonia 7 d",
            discovery: {
                commander: "buck satan",
                date: "2016-10-26 19:44:15"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Star: 44
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 3700,
            isLandable: true,
            gravity: 0.20754967372922636,
            earthMasses: 0.01513,
            radius: 1722.038875,
            surfaceTemperature: 128,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 91.12,
                Metal: 8.88,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 94.6722945405324,
            semiMajorAxis: 0.09610206810068588,
            orbitalEccentricity: 0.00258,
            orbitalInclination: -1.187913,
            argOfPeriapsis: 80.73858,
            rotationalPeriod: 94.67408720552083,
            rotationalPeriodTidallyLocked: false,
            axialTilt: -0.377938,
            materials: {
                Iron: 18.49,
                Sulphur: 18.17,
                Carbon: 15.28,
                Nickel: 13.99,
                Phosphorus: 9.78,
                Chromium: 8.32,
                Manganese: 7.64,
                Zinc: 5.03,
                Cadmium: 1.44,
                Molybdenum: 1.21,
                Technetium: 0.66
            },
            updateTime: "2025-09-06 04:50:05"
        },
        {
            id: 84603,
            id64: 1873500683282223395n,
            bodyId: 52,
            name: "Colonia 7 e",
            discovery: {
                commander: "buck satan",
                date: "2016-10-26 19:44:58"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Star: 44
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 3788,
            isLandable: true,
            gravity: 0.21526143699735165,
            earthMasses: 0.01681,
            radius: 1782.31825,
            surfaceTemperature: 128,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 91.12,
                Metal: 8.88,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 156.0641314696412,
            semiMajorAxis: 0.13410708834337706,
            orbitalEccentricity: 0.001438,
            orbitalInclination: 1.145514,
            argOfPeriapsis: 58.429488,
            rotationalPeriod: 1.066144022962963,
            rotationalPeriodTidallyLocked: false,
            axialTilt: -0.346026,
            materials: {
                Iron: 19.57,
                Sulphur: 19.23,
                Carbon: 16.17,
                Nickel: 14.8,
                Phosphorus: 10.35,
                Manganese: 8.08,
                Germanium: 5.63,
                Arsenic: 2.52,
                Molybdenum: 1.28,
                Ruthenium: 1.21,
                Tin: 1.16
            },
            updateTime: "2025-09-06 04:50:05"
        },
        {
            id: 84622,
            id64: 1909529480301187363n,
            bodyId: 53,
            name: "Colonia 7 f",
            discovery: {
                commander: "buck satan",
                date: "2016-10-26 19:46:22"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Star: 44
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 3657,
            isLandable: true,
            gravity: 0.22196075294998505,
            earthMasses: 0.018362,
            radius: 1834.45225,
            surfaceTemperature: 128,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 91.12,
                Metal: 8.88,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 226.16210497087962,
            semiMajorAxis: 0.17173711991000284,
            orbitalEccentricity: 0.000244,
            orbitalInclination: -4.089028,
            argOfPeriapsis: 192.627672,
            rotationalPeriod: 2.1724679110416667,
            rotationalPeriodTidallyLocked: false,
            axialTilt: 0.135441,
            materials: {
                Iron: 20.15,
                Sulphur: 19.79,
                Carbon: 16.65,
                Nickel: 15.24,
                Phosphorus: 10.66,
                Chromium: 9.06,
                Arsenic: 2.59,
                Zirconium: 2.34,
                Antimony: 1.23,
                Tin: 1.2,
                Tungsten: 1.11
            },
            updateTime: "2025-09-06 04:50:05"
        },
        {
            id: 84527,
            id64: 1981587074339115299n,
            bodyId: 55,
            name: "Colonia 7 g",
            discovery: {
                commander: "buck satan",
                date: "2016-10-26 19:38:48"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Star: 44
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 3586,
            isLandable: true,
            gravity: 0.34713384676882525,
            earthMasses: 0.065551,
            radius: 2771.569,
            surfaceTemperature: 128,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 91.12,
                Metal: 8.88,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 565.9868733750463,
            semiMajorAxis: 0.3165592120430695,
            orbitalEccentricity: 0.049942,
            orbitalInclination: 0.559952,
            argOfPeriapsis: 344.317622,
            rotationalPeriod: 1.0575679961458333,
            rotationalPeriodTidallyLocked: false,
            axialTilt: -0.069152,
            materials: {
                Iron: 18.96,
                Sulphur: 18.63,
                Carbon: 15.67,
                Nickel: 14.34,
                Phosphorus: 10.03,
                Chromium: 8.53,
                Germanium: 5.45,
                Vanadium: 4.66,
                Cadmium: 1.47,
                Yttrium: 1.13,
                Tin: 1.13
            },
            updateTime: "2025-09-06 04:50:05"
        },
        {
            id: 84670,
            id64: 2197759856452899107n,
            bodyId: 61,
            name: "Colonia 8",
            discovery: {
                commander: "buck satan",
                date: "2016-10-26 19:49:11"
            },
            type: "Planet",
            subType: "Icy body",
            parents: [
                {
                    Star: 0
                }
            ],
            distanceToArrival: 5037,
            isLandable: false,
            gravity: 16.311106842278477,
            earthMasses: 267.789246,
            radius: 25842.788,
            surfaceTemperature: 206,
            surfacePressure: 204413011.94121885,
            volcanismType: "Water Geysers",
            atmosphereType: "Thick Water",
            atmosphereComposition: {
                Water: 98.41,
                Ammonia: 0.53,
                Methane: 0.53
            },
            solidComposition: {
                Ice: 70.35,
                Rock: 19.88,
                Metal: 9.77
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 9569.735300761691,
            semiMajorAxis: 10.09160922088512,
            orbitalEccentricity: 0.000423,
            orbitalInclination: 0.02607,
            argOfPeriapsis: 99.65455,
            rotationalPeriod: 1.5807299305324074,
            rotationalPeriodTidallyLocked: false,
            axialTilt: -2.336266,
            rings: [
                {
                    name: "Colonia 8 A Ring",
                    type: "Icy",
                    mass: 5229600000,
                    innerRadius: 41819,
                    outerRadius: 224380
                }
            ],
            reserveLevel: "Pristine",
            updateTime: "2025-09-06 04:50:05"
        }
    ]
};

export const berenices1: SystemBodiesResponse = {
    id: 5410650,
    id64: 84054348506,
    name: "24 Comae Berenices",
    url: "https://www.edsm.net/en/system/bodies/id/5410650/name/24+Comae+Berenices",
    bodyCount: 35,
    bodies: [
        {
            id: 212651232,
            id64: 84054348506,
            bodyId: 0,
            name: "24 Comae Berenices",
            discovery: {
                commander: "Miskatonic Uni",
                date: "2020-06-16 23:23:25"
            },
            type: "Star",
            subType: "A (Blue-White) Star",
            parents: null,
            distanceToArrival: 0,
            isMainStar: true,
            isScoopable: true,
            age: 1384,
            spectralClass: "A3",
            luminosity: "V",
            absoluteMagnitude: -2.62825,
            solarMasses: 1.972656,
            solarRadius: 1.5516356923076924,
            surfaceTemperature: 9015,
            orbitalPeriod: null,
            semiMajorAxis: null,
            orbitalEccentricity: null,
            orbitalInclination: null,
            argOfPeriapsis: null,
            rotationalPeriod: 0.8100136998032408,
            rotationalPeriodTidallyLocked: false,
            axialTilt: 0,
            updateTime: "2020-06-16 23:23:26"
        },
        {
            id: 212651554,
            id64: 36028881073312474n,
            bodyId: 1,
            name: "24 Comae Berenices 1",
            discovery: {
                commander: "Molan Ryke",
                date: "2020-06-16 23:35:15"
            },
            type: "Planet",
            subType: "Class V gas giant",
            parents: [
                {
                    Star: 0
                }
            ],
            distanceToArrival: 241,
            isLandable: false,
            gravity: 3.524159506024019,
            earthMasses: 476.215881,
            radius: 74141.04,
            surfaceTemperature: 2039,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: {
                Hydrogen: 71.89,
                Helium: 28.11
            },
            solidComposition: null,
            terraformingState: "Not terraformable",
            orbitalPeriod: 86.38078898743056,
            semiMajorAxis: 0.4799913981864516,
            orbitalEccentricity: 0.01,
            orbitalInclination: -2.68039,
            argOfPeriapsis: 171.338243,
            rotationalPeriod: 86.47242944377315,
            rotationalPeriodTidallyLocked: false,
            axialTilt: -0.099779,
            updateTime: "2020-06-16 23:35:15"
        },
        {
            id: 212651516,
            id64: 252201663187096282n,
            bodyId: 7,
            name: "24 Comae Berenices 2",
            discovery: {
                commander: "Molan Ryke",
                date: "2020-06-16 23:47:03"
            },
            type: "Planet",
            subType: "Class III gas giant",
            parents: [
                {
                    Star: 0
                }
            ],
            distanceToArrival: 3260,
            isLandable: false,
            gravity: 3.487637794833565,
            earthMasses: 475.843628,
            radius: 74499.088,
            surfaceTemperature: 603,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: {
                Hydrogen: 71.89,
                Helium: 28.11
            },
            solidComposition: null,
            terraformingState: "Not terraformable",
            orbitalPeriod: 4277.8341168606485,
            semiMajorAxis: 6.472985828613001,
            orbitalEccentricity: 0.018948,
            orbitalInclination: 0.135888,
            argOfPeriapsis: 176.554752,
            rotationalPeriod: 0.5250201226157407,
            rotationalPeriodTidallyLocked: false,
            axialTilt: -0.127314,
            rings: [
                {
                    name: "24 Comae Berenices 2 A Ring",
                    type: "Rocky",
                    mass: 45945000000,
                    innerRadius: 129300,
                    outerRadius: 271790
                }
            ],
            reserveLevel: "Pristine",
            updateTime: "2020-06-16 23:47:03"
        },
        {
            id: 212655327,
            id64: 324259257225024218n,
            bodyId: 9,
            name: "24 Comae Berenices 2 a",
            discovery: {
                commander: "Miskatonic Uni",
                date: "2020-06-16 23:24:48"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 7
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 3261,
            isLandable: true,
            gravity: 0.10527959957549898,
            earthMasses: 0.002079,
            radius: 896.271625,
            surfaceTemperature: 566,
            surfacePressure: 0,
            volcanismType: "Minor Metallic Magma",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 90.99,
                Metal: 9.01,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 1.1202547354282408,
            semiMajorAxis: 0.0023777979914373876,
            orbitalEccentricity: 0.000676,
            orbitalInclination: -0.000259,
            argOfPeriapsis: 282.922439,
            rotationalPeriod: -1.120276747824074,
            rotationalPeriodTidallyLocked: false,
            axialTilt: -2.984975,
            materials: {
                Iron: 20.46,
                Sulphur: 19.96,
                Carbon: 16.78,
                Nickel: 15.48,
                Phosphorus: 10.75,
                Germanium: 5.87,
                Vanadium: 5.03,
                Arsenic: 2.63,
                Niobium: 1.4,
                Tungsten: 1.12,
                Polonium: 0.53
            },
            updateTime: "2020-06-16 23:45:22"
        },
        {
            id: 212656325,
            id64: 360288054243988186n,
            bodyId: 10,
            name: "24 Comae Berenices 2 b",
            discovery: {
                commander: "Miskatonic Uni",
                date: "2020-06-16 23:24:50"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 7
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 3261,
            isLandable: false,
            gravity: 0.06542142078454845,
            earthMasses: 0.000509,
            radius: 562.578875,
            surfaceTemperature: 563,
            surfacePressure: 0,
            volcanismType: "Major Rocky Magma",
            atmosphereType: "Sulphur dioxide",
            atmosphereComposition: {
                "Sulphur dioxide": 90,
                Silicates: 5,
                Oxygen: 3
            },
            solidComposition: {
                Rock: 91.04,
                Metal: 8.96,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 1.808466458761574,
            semiMajorAxis: 0.003272181643569744,
            orbitalEccentricity: 0.002898,
            orbitalInclination: -0.007754,
            argOfPeriapsis: 77.540464,
            rotationalPeriod: 1.8085018431712963,
            rotationalPeriodTidallyLocked: false,
            axialTilt: -0.373731,
            updateTime: "2020-06-16 23:50:42"
        },
        {
            id: 212654982,
            id64: 396316851262952154n,
            bodyId: 11,
            name: "24 Comae Berenices 2 c",
            discovery: {
                commander: "Miskatonic Uni",
                date: "2020-06-16 23:24:57"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 7
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 3261,
            isLandable: true,
            gravity: 0.13983615299906166,
            earthMasses: 0.00479,
            radius: 1180.43625,
            surfaceTemperature: 557,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 91.04,
                Metal: 8.96,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 7.3093687080671295,
            semiMajorAxis: 0.008302655529924598,
            orbitalEccentricity: 0.005143,
            orbitalInclination: 0.026562,
            argOfPeriapsis: 184.139981,
            rotationalPeriod: 7.309512134224537,
            rotationalPeriodTidallyLocked: false,
            axialTilt: -0.010473,
            materials: {
                Iron: 19.76,
                Sulphur: 19.29,
                Carbon: 16.22,
                Nickel: 14.94,
                Phosphorus: 10.38,
                Chromium: 8.89,
                Vanadium: 4.85,
                Arsenic: 2.54,
                Yttrium: 1.18,
                Tungsten: 1.08,
                Mercury: 0.86
            },
            updateTime: "2020-06-16 23:43:33"
        },
        {
            id: 212654638,
            id64: 432345648281916122n,
            bodyId: 12,
            name: "24 Comae Berenices 2 d",
            discovery: {
                commander: "Miskatonic Uni",
                date: "2020-06-16 23:24:59"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 7
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 3264,
            isLandable: true,
            gravity: 0.12981807924668867,
            earthMasses: 0.003849,
            radius: 1098.223875,
            surfaceTemperature: 556,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 90.97,
                Metal: 9.03,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 11.935571415555556,
            semiMajorAxis: 0.011513107796367184,
            orbitalEccentricity: 0.00349,
            orbitalInclination: -0.047809,
            argOfPeriapsis: 332.394342,
            rotationalPeriod: 11.935804944942129,
            rotationalPeriodTidallyLocked: false,
            axialTilt: -0.253089,
            materials: {
                Iron: 19.05,
                Sulphur: 18.58,
                Carbon: 15.62,
                Nickel: 14.41,
                Phosphorus: 10,
                Chromium: 8.57,
                Germanium: 5.46,
                Zinc: 5.18,
                Niobium: 1.3,
                Tin: 1.13,
                Technetium: 0.68
            },
            updateTime: "2020-06-16 23:42:00"
        },
        {
            id: 212654202,
            id64: 504403242319844058n,
            bodyId: 14,
            name: "24 Comae Berenices 2 e",
            discovery: {
                commander: "Miskatonic Uni",
                date: "2020-06-16 23:25:03"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Null: 13
                },
                {
                    Planet: 7
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 3259,
            isLandable: true,
            gravity: 0.1032865203957755,
            earthMasses: 0.001966,
            radius: 879.9428125,
            surfaceTemperature: 555,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 91.04,
                Metal: 8.96,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 1.6638611753819446,
            semiMajorAxis: 2.391803210480455e-5,
            orbitalEccentricity: 0.103304,
            orbitalInclination: 0.170503,
            argOfPeriapsis: 258.183008,
            rotationalPeriod: 2.6143663305208333,
            rotationalPeriodTidallyLocked: false,
            axialTilt: 0.429169,
            materials: {
                Iron: 18.45,
                Sulphur: 18.01,
                Carbon: 15.14,
                Nickel: 13.95,
                Phosphorus: 9.69,
                Chromium: 8.3,
                Manganese: 7.62,
                Zinc: 5.01,
                Cadmium: 1.43,
                Niobium: 1.26,
                Ruthenium: 1.14
            },
            updateTime: "2020-06-16 23:39:32"
        },
        {
            id: 212654285,
            id64: 540432039338808026n,
            bodyId: 15,
            name: "24 Comae Berenices 2 f",
            discovery: {
                commander: "Miskatonic Uni",
                date: "2020-06-16 23:25:06"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Null: 13
                },
                {
                    Planet: 7
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 3259,
            isLandable: false,
            gravity: 0.09064488016255302,
            earthMasses: 0.001338,
            radius: 774.8915625,
            surfaceTemperature: 555,
            surfacePressure: 0,
            volcanismType: "Rocky Magma",
            atmosphereType: "Sulphur dioxide",
            atmosphereComposition: {
                "Sulphur dioxide": 90,
                Silicates: 5,
                Oxygen: 3
            },
            solidComposition: {
                Rock: 91.04,
                Metal: 8.96,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 1.6638611753819446,
            semiMajorAxis: 3.51325562236963e-5,
            orbitalEccentricity: 0.103304,
            orbitalInclination: 0.170503,
            argOfPeriapsis: 78.183014,
            rotationalPeriod: 2.1571200597569447,
            rotationalPeriodTidallyLocked: false,
            axialTilt: -0.151126,
            updateTime: "2020-06-16 23:40:13"
        },
        {
            id: 212651591,
            id64: 648518430395699930n,
            bodyId: 18,
            name: "24 Comae Berenices 3",
            discovery: {
                commander: "Molan Ryke",
                date: "2020-06-16 23:54:52"
            },
            type: "Planet",
            subType: "Class III gas giant",
            parents: [
                {
                    Null: 17
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 4299,
            isLandable: false,
            gravity: 3.205969617723569,
            earthMasses: 424.838776,
            radius: 73420.424,
            surfaceTemperature: 518,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: {
                Hydrogen: 71.89,
                Helium: 28.11
            },
            solidComposition: null,
            terraformingState: "Not terraformable",
            orbitalPeriod: 161.04812837309026,
            semiMajorAxis: 0.00030327320339878345,
            orbitalEccentricity: 0.094739,
            orbitalInclination: -6.087661,
            argOfPeriapsis: 157.115999,
            rotationalPeriod: 0.797075370486111,
            rotationalPeriodTidallyLocked: false,
            axialTilt: 0.252949,
            rings: [
                {
                    name: "24 Comae Berenices 3 A Ring",
                    type: "Metallic",
                    mass: 235400000000,
                    innerRadius: 121140,
                    outerRadius: 152850
                },
                {
                    name: "24 Comae Berenices 3 B Ring",
                    type: "Rocky",
                    mass: 1579400000000,
                    innerRadius: 152950,
                    outerRadius: 280030
                }
            ],
            reserveLevel: "Pristine",
            updateTime: "2020-06-16 23:54:52"
        },
        {
            id: 212651610,
            id64: 756604821452591834n,
            bodyId: 21,
            name: "24 Comae Berenices 3 a",
            discovery: {
                commander: "Molan Ryke",
                date: "2020-06-16 23:54:52"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 18
                },
                {
                    Null: 17
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 4298,
            isLandable: true,
            gravity: 0.1570986493267374,
            earthMasses: 0.006733,
            radius: 1320.391125,
            surfaceTemperature: 488,
            surfacePressure: 0,
            volcanismType: "Metallic Magma",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 91.04,
                Metal: 8.96,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 1.0357769620138888,
            semiMajorAxis: 0.0021730130799807565,
            orbitalEccentricity: 0.002297,
            orbitalInclination: -0.00287,
            argOfPeriapsis: 351.568179,
            rotationalPeriod: 0.9497934262847223,
            rotationalPeriodTidallyLocked: false,
            axialTilt: 0.104808,
            materials: {
                Iron: 19.07,
                Sulphur: 18.62,
                Carbon: 15.65,
                Nickel: 14.42,
                Phosphorus: 10.02,
                Chromium: 8.58,
                Germanium: 5.48,
                Vanadium: 4.68,
                Niobium: 1.3,
                Yttrium: 1.14,
                Tungsten: 1.05
            },
            updateTime: "2020-06-16 23:54:52"
        },
        {
            id: 212651646,
            id64: 792633618471555802n,
            bodyId: 22,
            name: "24 Comae Berenices 3 b",
            discovery: {
                commander: "Molan Ryke",
                date: "2020-06-16 23:54:52"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 18
                },
                {
                    Null: 17
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 4296,
            isLandable: true,
            gravity: 0.1426736034801134,
            earthMasses: 0.005047,
            radius: 1199.580375,
            surfaceTemperature: 481,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 90.58,
                Metal: 9.42,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 4.802785054953704,
            semiMajorAxis: 0.006042457861660126,
            orbitalEccentricity: 0.014286,
            orbitalInclination: -0.073632,
            argOfPeriapsis: 333.941073,
            rotationalPeriod: 4.6672084273611105,
            rotationalPeriodTidallyLocked: false,
            axialTilt: -0.487152,
            materials: {
                Iron: 19.11,
                Sulphur: 18.49,
                Carbon: 15.55,
                Nickel: 14.45,
                Phosphorus: 9.95,
                Chromium: 8.59,
                Germanium: 5.44,
                Vanadium: 4.69,
                Niobium: 1.31,
                Molybdenum: 1.25,
                Ruthenium: 1.18
            },
            updateTime: "2020-06-16 23:54:52"
        },
        {
            id: 212651654,
            id64: 828662415490519770n,
            bodyId: 23,
            name: "24 Comae Berenices 3 b a",
            discovery: {
                commander: "Molan Ryke",
                date: "2020-06-16 23:54:52"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 22
                },
                {
                    Planet: 18
                },
                {
                    Null: 17
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 4296,
            isLandable: true,
            gravity: 0.058470071502560984,
            earthMasses: 0.000397,
            radius: 525.5486875,
            surfaceTemperature: 481,
            surfacePressure: 0,
            volcanismType: "Major Silicate Vapour Geysers",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 96.85,
                Metal: 3.15,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 0.43987452431712964,
            semiMajorAxis: 2.8729622986057644e-5,
            orbitalEccentricity: 0,
            orbitalInclination: -30.585775,
            argOfPeriapsis: 209.138743,
            rotationalPeriod: 0.4568521583564815,
            rotationalPeriodTidallyLocked: false,
            axialTilt: 0.146595,
            materials: {
                Sulphur: 19.54,
                Iron: 17.34,
                Carbon: 16.43,
                Nickel: 13.12,
                Phosphorus: 10.52,
                Chromium: 7.8,
                Manganese: 7.16,
                Zinc: 4.71,
                Cadmium: 1.35,
                Ruthenium: 1.07,
                Tungsten: 0.95
            },
            updateTime: "2020-06-16 23:54:52"
        },
        {
            id: 212651628,
            id64: 864691212509483738n,
            bodyId: 24,
            name: "24 Comae Berenices 3 c",
            discovery: {
                commander: "Molan Ryke",
                date: "2020-06-16 23:54:52"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 18
                },
                {
                    Null: 17
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 4295,
            isLandable: true,
            gravity: 0.12873021740208024,
            earthMasses: 0.003759,
            radius: 1089.884375,
            surfaceTemperature: 479,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 91.04,
                Metal: 8.96,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 8.946735066944445,
            semiMajorAxis: 0.009148036733173234,
            orbitalEccentricity: 0.039777,
            orbitalInclination: 0.49567,
            argOfPeriapsis: 25.572081,
            rotationalPeriod: 8.785523433391203,
            rotationalPeriodTidallyLocked: false,
            axialTilt: 0.179026,
            materials: {
                Iron: 19.51,
                Sulphur: 19.05,
                Carbon: 16.02,
                Nickel: 14.76,
                Phosphorus: 10.26,
                Chromium: 8.78,
                Zinc: 5.3,
                Zirconium: 2.27,
                Cadmium: 1.52,
                Niobium: 1.33,
                Ruthenium: 1.21
            },
            updateTime: "2020-06-16 23:54:52"
        },
        {
            id: 212651662,
            id64: 900720009528447706n,
            bodyId: 25,
            name: "24 Comae Berenices 4",
            discovery: {
                commander: "Molan Ryke",
                date: "2020-06-16 23:25:19"
            },
            type: "Planet",
            subType: "High metal content world",
            parents: [
                {
                    Null: 17
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 4325,
            isLandable: true,
            gravity: 1.483469206800528,
            earthMasses: 2.056956,
            radius: 7510.308,
            surfaceTemperature: 473,
            surfacePressure: 0,
            volcanismType: "Minor Metallic Magma",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 67,
                Metal: 33,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 161.04812837309026,
            semiMajorAxis: 0.06263110345075319,
            orbitalEccentricity: 0.094739,
            orbitalInclination: -6.087661,
            argOfPeriapsis: 337.115994,
            rotationalPeriod: 80.71879704749999,
            rotationalPeriodTidallyLocked: false,
            axialTilt: -0.49988,
            materials: {
                Iron: 22.88,
                Nickel: 17.31,
                Sulphur: 16.21,
                Carbon: 13.63,
                Phosphorus: 8.73,
                Zinc: 6.22,
                Vanadium: 5.62,
                Germanium: 4.77,
                Cadmium: 1.78,
                Molybdenum: 1.49,
                Yttrium: 1.37
            },
            rings: [
                {
                    name: "24 Comae Berenices 4 A Ring",
                    type: "Metal Rich",
                    mass: 17414000000,
                    innerRadius: 46524,
                    outerRadius: 52281
                },
                {
                    name: "24 Comae Berenices 4 B Ring",
                    type: "Rocky",
                    mass: 100640000000,
                    innerRadius: 52381,
                    outerRadius: 77592
                }
            ],
            reserveLevel: "Pristine",
            updateTime: "2020-06-16 23:54:52"
        },
        {
            id: 212657308,
            id64: 1008806400585339610n,
            bodyId: 28,
            name: "24 Comae Berenices 4 a",
            discovery: {
                commander: "Miskatonic Uni",
                date: "2020-06-16 23:25:20"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 25
                },
                {
                    Null: 17
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 4325,
            isLandable: true,
            gravity: 0.04669475168129113,
            earthMasses: 0.000186,
            radius: 402.5380625,
            surfaceTemperature: 473,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 91.04,
                Metal: 8.96,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 4.646769897256944,
            semiMajorAxis: 0.001000000721212939,
            orbitalEccentricity: 0.000414,
            orbitalInclination: 2.383869,
            argOfPeriapsis: 44.710504,
            rotationalPeriod: 4.647109598472222,
            rotationalPeriodTidallyLocked: false,
            axialTilt: -0.120898,
            materials: {
                Iron: 18.55,
                Sulphur: 18.11,
                Carbon: 15.23,
                Nickel: 14.03,
                Phosphorus: 9.75,
                Chromium: 8.34,
                Manganese: 7.66,
                Germanium: 5.33,
                Cadmium: 1.44,
                Tin: 1.1,
                Polonium: 0.48
            },
            updateTime: "2020-06-16 23:54:52"
        },
        {
            id: 235192814,
            id64: 72057678092276442n,
            bodyId: 2,
            name: "24 Comae Berenices A",
            discovery: {
                commander: "nebularprism",
                date: "2020-08-31 10:07:15"
            },
            type: "Star",
            subType: "K (Yellow-Orange giant) Star",
            parents: [
                {
                    Null: 1
                },
                {
                    Null: 0
                }
            ],
            distanceToArrival: 0,
            isMainStar: true,
            isScoopable: true,
            age: 5224,
            spectralClass: "K5",
            luminosity: "III",
            absoluteMagnitude: -1.344528,
            solarMasses: 0.734375,
            solarRadius: 29.7012620790798,
            surfaceTemperature: 4393,
            orbitalPeriod: 38.62369598613426,
            semiMajorAxis: 0.07506296657338721,
            orbitalEccentricity: 0.083796,
            orbitalInclination: -59.26203,
            argOfPeriapsis: 261.460488,
            rotationalPeriod: 118.22884539502314,
            rotationalPeriodTidallyLocked: false,
            axialTilt: 0,
            updateTime: "2025-01-13 17:39:59"
        },
        {
            id: 235192994,
            id64: 180144069149168346n,
            bodyId: 5,
            name: "24 Comae Berenices ABC 1",
            discovery: {
                commander: "nebularprism",
                date: "2020-08-31 10:08:34"
            },
            type: "Planet",
            subType: "Class IV gas giant",
            parents: [
                {
                    Null: 0
                }
            ],
            distanceToArrival: 1122,
            isLandable: false,
            gravity: 7.275544222937564,
            earthMasses: 1055.345093,
            radius: 76815.528,
            surfaceTemperature: 850,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: {
                Hydrogen: 73.26,
                Helium: 26.74
            },
            solidComposition: null,
            terraformingState: "Not terraformable",
            orbitalPeriod: 1047.4778780782638,
            semiMajorAxis: 2.296301026247361,
            orbitalEccentricity: 0.000398,
            orbitalInclination: -0.003761,
            argOfPeriapsis: 199.601873,
            rotationalPeriod: 1.3431880885532408,
            rotationalPeriodTidallyLocked: false,
            axialTilt: 0.455659,
            updateTime: "2025-01-13 17:49:15"
        },
        {
            id: 235193000,
            id64: 216172866168132314n,
            bodyId: 6,
            name: "24 Comae Berenices ABC 1 a",
            discovery: {
                commander: "nebularprism",
                date: "2020-08-31 10:08:37"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 5
                },
                {
                    Null: 0
                }
            ],
            distanceToArrival: 1120,
            isLandable: true,
            gravity: 0.09189760921572675,
            earthMasses: 0.001391,
            radius: 784.686125,
            surfaceTemperature: 720,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 90.95,
                Metal: 9.05,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 2.422780764328704,
            semiMajorAxis: 0.00518579448604224,
            orbitalEccentricity: 0.000299,
            orbitalInclination: 0.030329,
            argOfPeriapsis: 349.181267,
            rotationalPeriod: 2.422816890474537,
            rotationalPeriodTidallyLocked: true,
            axialTilt: -0.350267,
            materials: {
                Iron: 19.8,
                Sulphur: 19.2,
                Carbon: 16.15,
                Nickel: 14.98,
                Phosphorus: 10.34,
                Chromium: 8.9,
                Vanadium: 4.86,
                Arsenic: 2.53,
                Niobium: 1.35,
                Tin: 1.18,
                Technetium: 0.71
            },
            updateTime: "2025-01-13 17:49:33"
        },
        {
            id: 235193004,
            id64: 252201663187096282n,
            bodyId: 7,
            name: "24 Comae Berenices ABC 1 b",
            discovery: {
                commander: "nebularprism",
                date: "2020-08-31 10:08:39"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 5
                },
                {
                    Null: 0
                }
            ],
            distanceToArrival: 1122,
            isLandable: true,
            gravity: 0.10138010827740579,
            earthMasses: 0.001859,
            radius: 863.67,
            surfaceTemperature: 710,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 90.95,
                Metal: 9.05,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 5.939108216099537,
            semiMajorAxis: 0.009428009631334278,
            orbitalEccentricity: 1.0e-5,
            orbitalInclination: -0.552709,
            argOfPeriapsis: 127.419832,
            rotationalPeriod: 5.939197949756944,
            rotationalPeriodTidallyLocked: true,
            axialTilt: -0.280623,
            materials: {
                Iron: 19.05,
                Sulphur: 18.48,
                Carbon: 15.54,
                Nickel: 14.41,
                Phosphorus: 9.95,
                Chromium: 8.57,
                Manganese: 7.87,
                Arsenic: 2.43,
                Cadmium: 1.48,
                Ruthenium: 1.18,
                Tungsten: 1.05
            },
            updateTime: "2025-01-13 17:49:24"
        },
        {
            id: 235193044,
            id64: 324259257225024218n,
            bodyId: 9,
            name: "24 Comae Berenices ABC 1 c",
            discovery: {
                commander: "nebularprism",
                date: "2020-08-31 10:08:50"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Null: 8
                },
                {
                    Planet: 5
                },
                {
                    Null: 0
                }
            ],
            distanceToArrival: 1117,
            isLandable: true,
            gravity: 0.12737022948450882,
            earthMasses: 0.003638,
            radius: 1077.9085,
            surfaceTemperature: 703,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 90.95,
                Metal: 9.05,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 2.129245411469907,
            semiMajorAxis: 4.2637325689489245e-5,
            orbitalEccentricity: 0.018375,
            orbitalInclination: 3.305308,
            argOfPeriapsis: 70.27791,
            rotationalPeriod: 3.0805522581018514,
            rotationalPeriodTidallyLocked: true,
            axialTilt: -0.442071,
            materials: {
                Iron: 19.14,
                Sulphur: 18.56,
                Carbon: 15.61,
                Nickel: 14.48,
                Phosphorus: 9.99,
                Chromium: 8.61,
                Manganese: 7.91,
                Zirconium: 2.22,
                Cadmium: 1.49,
                Antimony: 1.16,
                Mercury: 0.84
            },
            updateTime: "2025-01-13 17:49:50"
        },
        {
            id: 235193050,
            id64: 360288054243988186n,
            bodyId: 10,
            name: "24 Comae Berenices ABC 1 d",
            discovery: {
                commander: "nebularprism",
                date: "2020-08-31 10:08:52"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Null: 8
                },
                {
                    Planet: 5
                },
                {
                    Null: 0
                }
            ],
            distanceToArrival: 1117,
            isLandable: true,
            gravity: 0.12356663174521354,
            earthMasses: 0.003328,
            radius: 1046.7080625,
            surfaceTemperature: 703,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 90.95,
                Metal: 9.05,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 2.129245411469907,
            semiMajorAxis: 4.6610053323793734e-5,
            orbitalEccentricity: 0.018375,
            orbitalInclination: 3.305308,
            argOfPeriapsis: 250.277905,
            rotationalPeriod: 2.946346942488426,
            rotationalPeriodTidallyLocked: true,
            axialTilt: -0.41251,
            materials: {
                Iron: 18.51,
                Sulphur: 17.95,
                Carbon: 15.1,
                Nickel: 14,
                Phosphorus: 9.67,
                Chromium: 8.33,
                Manganese: 7.65,
                Zinc: 5.03,
                Cadmium: 1.44,
                Molybdenum: 1.21,
                Antimony: 1.12
            },
            updateTime: "2025-01-13 17:49:46"
        },
        {
            id: 235193022,
            id64: 432345648281916122n,
            bodyId: 12,
            name: "24 Comae Berenices ABC 1 e",
            discovery: {
                commander: "nebularprism",
                date: "2020-08-31 10:08:44"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Null: 11
                },
                {
                    Planet: 5
                },
                {
                    Null: 0
                }
            ],
            distanceToArrival: 1112,
            isLandable: true,
            gravity: 0.145777547583554,
            earthMasses: 0.005367,
            radius: 1223.784625,
            surfaceTemperature: 701,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 90.48,
                Metal: 9.52,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 1.7934896879745372,
            semiMajorAxis: 2.951115778125176e-5,
            orbitalEccentricity: 0.108067,
            orbitalInclination: -5.648875,
            argOfPeriapsis: 241.205159,
            rotationalPeriod: 1.5152081361921297,
            rotationalPeriodTidallyLocked: false,
            axialTilt: -0.865713,
            materials: {
                Iron: 20.06,
                Sulphur: 19.28,
                Carbon: 16.21,
                Nickel: 15.18,
                Phosphorus: 10.38,
                Manganese: 8.29,
                Germanium: 5.67,
                Zirconium: 2.33,
                Tin: 1.2,
                Mercury: 0.88,
                Polonium: 0.52
            },
            updateTime: "2025-01-13 17:50:00"
        },
        {
            id: 235193011,
            id64: 468374445300880090n,
            bodyId: 13,
            name: "24 Comae Berenices ABC 1 f",
            discovery: {
                commander: "nebularprism",
                date: "2020-08-31 10:08:42"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Null: 11
                },
                {
                    Planet: 5
                },
                {
                    Null: 0
                }
            ],
            distanceToArrival: 1112,
            isLandable: true,
            gravity: 0.11780117971146253,
            earthMasses: 0.002893,
            radius: 999.5025625,
            surfaceTemperature: 701,
            surfacePressure: 0,
            volcanismType: "Minor Rocky Magma",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 90.95,
                Metal: 9.05,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 1.7934896879745372,
            semiMajorAxis: 5.4743266692719043e-5,
            orbitalEccentricity: 0.108067,
            orbitalInclination: -5.648875,
            argOfPeriapsis: 61.205165,
            rotationalPeriod: 2.225001238101852,
            rotationalPeriodTidallyLocked: true,
            axialTilt: 0.422482,
            materials: {
                Iron: 19.61,
                Sulphur: 19.02,
                Carbon: 15.99,
                Nickel: 14.83,
                Phosphorus: 10.24,
                Chromium: 8.82,
                Vanadium: 4.82,
                Selenium: 2.98,
                Niobium: 1.34,
                Yttrium: 1.17,
                Tin: 1.17
            },
            updateTime: "2025-01-13 17:49:38"
        },
        {
            id: 235193027,
            id64: 504403242319844058n,
            bodyId: 14,
            name: "24 Comae Berenices ABC 1 g",
            discovery: {
                commander: "nebularprism",
                date: "2020-08-31 10:08:46"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 5
                },
                {
                    Null: 0
                }
            ],
            distanceToArrival: 1134,
            isLandable: true,
            gravity: 0.10897276162223449,
            earthMasses: 0.0023,
            radius: 926.5939375,
            surfaceTemperature: 698,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 90.95,
                Metal: 9.05,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 35.307988248483795,
            semiMajorAxis: 0.030940060825214007,
            orbitalEccentricity: 0.000167,
            orbitalInclination: -2.531546,
            argOfPeriapsis: 321.54223,
            rotationalPeriod: 35.30851361538195,
            rotationalPeriodTidallyLocked: true,
            axialTilt: 0.040026,
            materials: {
                Iron: 20.26,
                Sulphur: 19.65,
                Carbon: 16.52,
                Nickel: 15.32,
                Phosphorus: 10.58,
                Manganese: 8.37,
                Selenium: 3.07,
                Arsenic: 2.59,
                Molybdenum: 1.32,
                Yttrium: 1.21,
                Tungsten: 1.11
            },
            updateTime: "2025-01-13 17:50:10"
        },
        {
            id: 235192941,
            id64: 648518430395699930n,
            bodyId: 18,
            name: "24 Comae Berenices ABC 2",
            discovery: {
                commander: "nebularprism",
                date: "2020-08-31 10:08:09"
            },
            type: "Planet",
            subType: "Class IV gas giant",
            parents: [
                {
                    Null: 0
                }
            ],
            distanceToArrival: 1552,
            isLandable: false,
            gravity: 14.792803838839474,
            earthMasses: 1958.137695,
            radius: 73380.536,
            surfaceTemperature: 973,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: {
                Hydrogen: 73.26,
                Helium: 26.74
            },
            solidComposition: null,
            terraformingState: "Not terraformable",
            orbitalPeriod: 1605.409714910764,
            semiMajorAxis: 3.0525034071590564,
            orbitalEccentricity: 0.003117,
            orbitalInclination: -0.445072,
            argOfPeriapsis: 39.386624,
            rotationalPeriod: 0.4396842166319444,
            rotationalPeriodTidallyLocked: false,
            axialTilt: 0.809442,
            rings: [
                {
                    name: "24 Comae Berenices ABC 2 A Ring",
                    type: "Rocky",
                    mass: 318480000000,
                    innerRadius: 121080,
                    outerRadius: 161350
                },
                {
                    name: "24 Comae Berenices ABC 2 B Ring",
                    type: "Metal Rich",
                    mass: 5101900000000,
                    innerRadius: 161450,
                    outerRadius: 447080
                }
            ],
            reserveLevel: "Pristine",
            updateTime: "2025-01-13 17:43:29"
        },
        {
            id: 235192954,
            id64: 756604821452591834n,
            bodyId: 21,
            name: "24 Comae Berenices ABC 2 a",
            discovery: {
                commander: "nebularprism",
                date: "2020-08-31 10:08:12"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 18
                },
                {
                    Null: 0
                }
            ],
            distanceToArrival: 1550,
            isLandable: true,
            gravity: 0.10535359679560681,
            earthMasses: 0.002079,
            radius: 895.9568125,
            surfaceTemperature: 660,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 90.83,
                Metal: 9.17,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 2.6867635962037038,
            semiMajorAxis: 0.0068271558119984655,
            orbitalEccentricity: 0.000901,
            orbitalInclination: -0.012853,
            argOfPeriapsis: 5.996998,
            rotationalPeriod: 2.641844076898148,
            rotationalPeriodTidallyLocked: true,
            axialTilt: 0.461406,
            materials: {
                Iron: 18.63,
                Sulphur: 18.03,
                Carbon: 15.16,
                Nickel: 14.09,
                Phosphorus: 9.7,
                Chromium: 8.38,
                Manganese: 7.69,
                Zinc: 5.06,
                Antimony: 1.12,
                Tin: 1.11,
                Tungsten: 1.02
            },
            updateTime: "2025-01-13 17:43:45"
        },
        {
            id: 235192958,
            id64: 792633618471555802n,
            bodyId: 22,
            name: "24 Comae Berenices ABC 2 b",
            discovery: {
                commander: "nebularprism",
                date: "2020-08-31 10:08:13"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 18
                },
                {
                    Null: 0
                }
            ],
            distanceToArrival: 1549,
            isLandable: true,
            gravity: 0.08513026342529603,
            earthMasses: 0.001109,
            radius: 727.9613125,
            surfaceTemperature: 652,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 90.94,
                Metal: 9.06,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 3.9092268518865736,
            semiMajorAxis: 0.00876625478398537,
            orbitalEccentricity: 0.001815,
            orbitalInclination: -0.948679,
            argOfPeriapsis: 99.526334,
            rotationalPeriod: 3.8585541173263884,
            rotationalPeriodTidallyLocked: true,
            axialTilt: 0.399821,
            materials: {
                Iron: 19.83,
                Sulphur: 19.22,
                Carbon: 16.17,
                Nickel: 15,
                Phosphorus: 10.35,
                Chromium: 8.92,
                Germanium: 5.66,
                Zirconium: 2.3,
                Tin: 1.18,
                Mercury: 0.87,
                Polonium: 0.51
            },
            updateTime: "2025-01-13 17:44:29"
        },
        {
            id: 235192962,
            id64: 828662415490519770n,
            bodyId: 23,
            name: "24 Comae Berenices ABC 2 c",
            discovery: {
                commander: "nebularprism",
                date: "2020-08-31 10:08:15"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 18
                },
                {
                    Null: 0
                }
            ],
            distanceToArrival: 1556,
            isLandable: true,
            gravity: 0.11453205465890667,
            earthMasses: 0.002649,
            radius: 969.9781875,
            surfaceTemperature: 643,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 90.6,
                Metal: 9.4,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 6.487853756111111,
            semiMajorAxis: 0.01228817842363648,
            orbitalEccentricity: 0.000171,
            orbitalInclination: 0.053034,
            argOfPeriapsis: 278.84624,
            rotationalPeriod: -6.4285823731481475,
            rotationalPeriodTidallyLocked: false,
            axialTilt: 3.013076,
            materials: {
                Iron: 19.28,
                Sulphur: 18.57,
                Carbon: 15.61,
                Nickel: 14.58,
                Phosphorus: 10,
                Chromium: 8.67,
                Zinc: 5.24,
                Vanadium: 4.73,
                Cadmium: 1.5,
                Niobium: 1.32,
                Polonium: 0.5
            },
            updateTime: "2025-01-13 17:44:06"
        },
        {
            id: 235192977,
            id64: 864691212509483738n,
            bodyId: 24,
            name: "24 Comae Berenices ABC 2 d",
            discovery: {
                commander: "nebularprism",
                date: "2020-08-31 10:08:24"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 18
                },
                {
                    Null: 0
                }
            ],
            distanceToArrival: 1545,
            isLandable: true,
            gravity: 0.12476013419944414,
            earthMasses: 0.00342,
            radius: 1055.989625,
            surfaceTemperature: 635,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 90.87,
                Metal: 9.13,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 10.883323434328704,
            semiMajorAxis: 0.017348469639197877,
            orbitalEccentricity: 0.001361,
            orbitalInclination: -0.027134,
            argOfPeriapsis: 256.643989,
            rotationalPeriod: -10.813904434594907,
            rotationalPeriodTidallyLocked: false,
            axialTilt: -2.833028,
            materials: {
                Iron: 18.65,
                Sulphur: 18.06,
                Carbon: 15.18,
                Nickel: 14.1,
                Phosphorus: 9.72,
                Chromium: 8.39,
                Manganese: 7.7,
                Vanadium: 4.58,
                Tellurium: 1.38,
                Molybdenum: 1.22,
                Tungsten: 1.02
            },
            updateTime: "2025-01-13 17:44:34"
        },
        {
            id: 235192973,
            id64: 900720009528447706n,
            bodyId: 25,
            name: "24 Comae Berenices ABC 2 e",
            discovery: {
                commander: "nebularprism",
                date: "2020-08-31 10:08:21"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 18
                },
                {
                    Null: 0
                }
            ],
            distanceToArrival: 1562,
            isLandable: true,
            gravity: 0.10850518033401935,
            earthMasses: 0.002271,
            radius: 922.7155625,
            surfaceTemperature: 629,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 90.94,
                Metal: 9.06,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 16.491683544930556,
            semiMajorAxis: 0.022887417667625268,
            orbitalEccentricity: 0.006266,
            orbitalInclination: 0.018835,
            argOfPeriapsis: 142.456853,
            rotationalPeriod: 16.412930138587964,
            rotationalPeriodTidallyLocked: true,
            axialTilt: -0.302011,
            materials: {
                Iron: 18.58,
                Sulphur: 18.02,
                Carbon: 15.15,
                Nickel: 14.06,
                Phosphorus: 9.7,
                Chromium: 8.36,
                Manganese: 7.68,
                Zinc: 5.05,
                Cadmium: 1.44,
                Ruthenium: 1.15,
                Mercury: 0.81
            },
            updateTime: "2025-01-13 17:43:53"
        },
        {
            id: 235192964,
            id64: 972777603566375642n,
            bodyId: 27,
            name: "24 Comae Berenices ABC 2 f",
            discovery: {
                commander: "nebularprism",
                date: "2020-08-31 10:08:18"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 18
                },
                {
                    Null: 0
                }
            ],
            distanceToArrival: 1557,
            isLandable: true,
            gravity: 0.1443323355725391,
            earthMasses: 0.005213,
            radius: 1212.122625,
            surfaceTemperature: 625,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 90.49,
                Metal: 9.51,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 23.4518890027662,
            semiMajorAxis: 0.02894267835890862,
            orbitalEccentricity: 0.003892,
            orbitalInclination: 0.073174,
            argOfPeriapsis: 178.880291,
            rotationalPeriod: -23.365285166921296,
            rotationalPeriodTidallyLocked: false,
            axialTilt: 2.167743,
            materials: {
                Iron: 19.12,
                Sulphur: 18.38,
                Carbon: 15.45,
                Nickel: 14.46,
                Phosphorus: 9.89,
                Chromium: 8.6,
                Manganese: 7.9,
                Arsenic: 2.42,
                Cadmium: 1.48,
                Tin: 1.15,
                Antimony: 1.14
            },
            updateTime: "2025-01-13 17:44:17"
        },
        {
            id: 235192968,
            id64: 1008806400585339610n,
            bodyId: 28,
            name: "24 Comae Berenices ABC 2 f a",
            discovery: {
                commander: "nebularprism",
                date: "2020-08-31 10:08:20"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 27
                },
                {
                    Planet: 18
                },
                {
                    Null: 0
                }
            ],
            distanceToArrival: 1557,
            isLandable: true,
            gravity: 0.05854807946363065,
            earthMasses: 0.000398,
            radius: 525.8595,
            surfaceTemperature: 625,
            surfacePressure: 0,
            volcanismType: "Minor Silicate Vapour Geysers",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 96.81,
                Metal: 3.19,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 1.397274641527778,
            semiMajorAxis: 6.270827383806473e-5,
            orbitalEccentricity: 0,
            orbitalInclination: 63.804376,
            argOfPeriapsis: 208.188346,
            rotationalPeriod: 1.449627154212963,
            rotationalPeriodTidallyLocked: true,
            axialTilt: -0.171918,
            materials: {
                Sulphur: 20.52,
                Iron: 18.32,
                Carbon: 17.26,
                Nickel: 13.86,
                Phosphorus: 11.05,
                Germanium: 6.04,
                Zinc: 4.98,
                Vanadium: 4.5,
                Antimony: 1.28,
                Molybdenum: 1.2,
                Tungsten: 1.01
            },
            updateTime: "2025-01-13 17:44:22"
        },
        {
            id: 235192980,
            id64: 1044835197604303578n,
            bodyId: 29,
            name: "24 Comae Berenices ABC 2 g",
            discovery: {
                commander: "nebularprism",
                date: "2020-08-31 10:08:26"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 18
                },
                {
                    Null: 0
                }
            ],
            distanceToArrival: 1567,
            isLandable: true,
            gravity: 0.10385334822396951,
            earthMasses: 0.001996,
            radius: 884.2081875,
            surfaceTemperature: 620,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 90.94,
                Metal: 9.06,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 39.8255263765625,
            semiMajorAxis: 0.041196579639655256,
            orbitalEccentricity: 0.007139,
            orbitalInclination: -0.094619,
            argOfPeriapsis: 288.992974,
            rotationalPeriod: 39.72601956165509,
            rotationalPeriodTidallyLocked: true,
            axialTilt: 0.288011,
            materials: {
                Iron: 19.65,
                Sulphur: 19.05,
                Carbon: 16.02,
                Nickel: 14.86,
                Phosphorus: 10.25,
                Chromium: 8.84,
                Zinc: 5.34,
                Selenium: 2.98,
                Niobium: 1.34,
                Tin: 1.17,
                Polonium: 0.51
            },
            updateTime: "2025-01-13 17:43:59"
        },
        {
            id: 235192868,
            id64: 1441151964812907226n,
            bodyId: 40,
            name: "24 Comae Berenices ABC 3",
            discovery: {
                commander: "nebularprism",
                date: "2020-08-31 10:07:44"
            },
            type: "Planet",
            subType: "Class IV gas giant",
            parents: [
                {
                    Null: 39
                },
                {
                    Null: 0
                }
            ],
            distanceToArrival: 2039,
            isLandable: false,
            gravity: 27.368686358298795,
            earthMasses: 3079.275635,
            radius: 67652.184,
            surfaceTemperature: 1198,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: {
                Hydrogen: 73.26,
                Helium: 26.74
            },
            solidComposition: null,
            terraformingState: "Not terraformable",
            orbitalPeriod: 131.34474003756944,
            semiMajorAxis: 0.0005301517554926602,
            orbitalEccentricity: 0.032189,
            orbitalInclination: 4.274483,
            argOfPeriapsis: 46.418877,
            rotationalPeriod: 1.0355831189699074,
            rotationalPeriodTidallyLocked: false,
            axialTilt: -0.635424,
            rings: [
                {
                    name: "24 Comae Berenices ABC 3 A Ring",
                    type: "Metal Rich",
                    mass: 227010000000,
                    innerRadius: 102800,
                    outerRadius: 172830
                },
                {
                    name: "24 Comae Berenices ABC 3 B Ring",
                    type: "Rocky",
                    mass: 2665700000000,
                    innerRadius: 172930,
                    outerRadius: 506480
                }
            ],
            reserveLevel: "Pristine",
            updateTime: "2025-01-13 17:46:25"
        },
        {
            id: 235192875,
            id64: 1549238355869799130n,
            bodyId: 43,
            name: "24 Comae Berenices ABC 3 a",
            discovery: {
                commander: "nebularprism",
                date: "2020-08-31 10:07:46"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 40
                },
                {
                    Null: 39
                },
                {
                    Null: 0
                }
            ],
            distanceToArrival: 2041,
            isLandable: true,
            gravity: 0.11085053996199545,
            earthMasses: 0.002418,
            radius: 941.9845,
            surfaceTemperature: 653,
            surfacePressure: 0,
            volcanismType: "Minor Metallic Magma",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 90.95,
                Metal: 9.05,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 1.2199037053009258,
            semiMajorAxis: 0.004689974837194859,
            orbitalEccentricity: 0.000162,
            orbitalInclination: -0.222519,
            argOfPeriapsis: 357.179999,
            rotationalPeriod: 1.2199063645949075,
            rotationalPeriodTidallyLocked: true,
            axialTilt: 0.300092,
            materials: {
                Iron: 20.21,
                Sulphur: 19.6,
                Carbon: 16.48,
                Nickel: 15.29,
                Phosphorus: 10.55,
                Manganese: 8.35,
                Selenium: 3.07,
                Zirconium: 2.35,
                Cadmium: 1.57,
                Molybdenum: 1.32,
                Antimony: 1.22
            },
            updateTime: "2025-01-13 17:46:51"
        },
        {
            id: 235192884,
            id64: 1585267152888763098n,
            bodyId: 44,
            name: "24 Comae Berenices ABC 3 b",
            discovery: {
                commander: "nebularprism",
                date: "2020-08-31 10:07:48"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 40
                },
                {
                    Null: 39
                },
                {
                    Null: 0
                }
            ],
            distanceToArrival: 2035,
            isLandable: true,
            gravity: 0.09035764318932366,
            earthMasses: 0.001324,
            radius: 772.051125,
            surfaceTemperature: 602,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 90.95,
                Metal: 9.05,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 4.984621165532407,
            semiMajorAxis: 0.011986938397077734,
            orbitalEccentricity: 0.009578,
            orbitalInclination: -0.985515,
            argOfPeriapsis: 263.386486,
            rotationalPeriod: 4.984632231747685,
            rotationalPeriodTidallyLocked: true,
            axialTilt: 0.340503,
            materials: {
                Iron: 18.68,
                Sulphur: 18.11,
                Carbon: 15.23,
                Nickel: 14.13,
                Phosphorus: 9.75,
                Chromium: 8.4,
                Manganese: 7.71,
                Zinc: 5.08,
                Molybdenum: 1.22,
                Tungsten: 1.03,
                Technetium: 0.67
            },
            updateTime: "2025-01-13 17:46:42"
        },
        {
            id: 235192899,
            id64: 1621295949907727066n,
            bodyId: 45,
            name: "24 Comae Berenices ABC 3 c",
            discovery: {
                commander: "nebularprism",
                date: "2020-08-31 10:07:56"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 40
                },
                {
                    Null: 39
                },
                {
                    Null: 0
                }
            ],
            distanceToArrival: 2042,
            isLandable: true,
            gravity: 0.09454113321710307,
            earthMasses: 0.001513,
            radius: 806.8514375,
            surfaceTemperature: 591,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 90.95,
                Metal: 9.05,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 7.449157398055555,
            semiMajorAxis: 0.015668409924927493,
            orbitalEccentricity: 0.008518,
            orbitalInclination: 2.883151,
            argOfPeriapsis: 231.643045,
            rotationalPeriod: 7.449173763414351,
            rotationalPeriodTidallyLocked: true,
            axialTilt: -0.390843,
            materials: {
                Iron: 19.23,
                Sulphur: 18.65,
                Carbon: 15.68,
                Nickel: 14.55,
                Phosphorus: 10.04,
                Chromium: 8.65,
                Zinc: 5.23,
                Vanadium: 4.72,
                Cadmium: 1.49,
                Tungsten: 1.06,
                Technetium: 0.69
            },
            updateTime: "2025-01-13 17:46:45"
        },
        {
            id: 235192844,
            id64: 1657324746926691034n,
            bodyId: 46,
            name: "24 Comae Berenices ABC 4",
            discovery: {
                commander: "nebularprism",
                date: "2020-08-31 10:07:31"
            },
            type: "Planet",
            subType: "Class III gas giant",
            parents: [
                {
                    Null: 39
                },
                {
                    Null: 0
                }
            ],
            distanceToArrival: 2003,
            isLandable: false,
            gravity: 0.6054562357116183,
            earthMasses: 15.429915,
            radius: 32197.704,
            surfaceTemperature: 538,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: {
                Hydrogen: 73.26,
                Helium: 26.74
            },
            solidComposition: null,
            terraformingState: "Not terraformable",
            orbitalPeriod: 131.34474003756944,
            semiMajorAxis: 0.10579082945236733,
            orbitalEccentricity: 0.032189,
            orbitalInclination: 4.274483,
            argOfPeriapsis: 226.418855,
            rotationalPeriod: 131.67344614435186,
            rotationalPeriodTidallyLocked: true,
            axialTilt: -0.126356,
            rings: [
                {
                    name: "24 Comae Berenices ABC 4 A Ring",
                    type: "Rocky",
                    mass: 265480000000,
                    innerRadius: 79391,
                    outerRadius: 122960
                }
            ],
            reserveLevel: "Pristine",
            updateTime: "2025-01-13 17:42:48"
        },
        {
            id: 235192854,
            id64: 1729382340964618970n,
            bodyId: 48,
            name: "24 Comae Berenices ABC 4 a",
            discovery: {
                commander: "nebularprism",
                date: "2020-08-31 10:07:37"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 46
                },
                {
                    Null: 39
                },
                {
                    Null: 0
                }
            ],
            distanceToArrival: 2003,
            isLandable: false,
            gravity: 0.05894199607001801,
            earthMasses: 0.000372,
            radius: 506.6914375,
            surfaceTemperature: 545,
            surfacePressure: 0,
            volcanismType: "Rocky Magma",
            atmosphereType: "Sulphur dioxide",
            atmosphereComposition: {
                "Sulphur dioxide": 90,
                Silicates: 5,
                Oxygen: 3
            },
            solidComposition: {
                Rock: 90.95,
                Metal: 9.05,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 2.0105833946527776,
            semiMajorAxis: 0.0011198304731087994,
            orbitalEccentricity: 0.000437,
            orbitalInclination: 0.002994,
            argOfPeriapsis: 190.298923,
            rotationalPeriod: 2.0106739205439816,
            rotationalPeriodTidallyLocked: true,
            axialTilt: 0.49342,
            updateTime: "2025-01-13 17:43:03"
        },
        {
            id: 235192847,
            id64: 1765411137983582938n,
            bodyId: 49,
            name: "24 Comae Berenices ABC 4 b",
            discovery: {
                commander: "nebularprism",
                date: "2020-08-31 10:07:35"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 46
                },
                {
                    Null: 39
                },
                {
                    Null: 0
                }
            ],
            distanceToArrival: 2003,
            isLandable: true,
            gravity: 0.05915933842353789,
            earthMasses: 0.000377,
            radius: 509.14740625,
            surfaceTemperature: 545,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 90.95,
                Metal: 9.05,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 3.2444318273495374,
            semiMajorAxis: 0.0015406241378819973,
            orbitalEccentricity: 0.000601,
            orbitalInclination: 0.000307,
            argOfPeriapsis: 172.39435,
            rotationalPeriod: 3.244577619652778,
            rotationalPeriodTidallyLocked: true,
            axialTilt: 0.387963,
            materials: {
                Iron: 19.27,
                Sulphur: 18.69,
                Carbon: 15.72,
                Nickel: 14.58,
                Phosphorus: 10.06,
                Manganese: 7.96,
                Zinc: 5.24,
                Vanadium: 4.73,
                Niobium: 1.32,
                Molybdenum: 1.26,
                Antimony: 1.16
            },
            updateTime: "2025-01-13 17:43:10"
        },
        {
            id: 235193189,
            id64: 1801439935002546906n,
            bodyId: 50,
            name: "24 Comae Berenices ABC 5",
            discovery: {
                commander: "nebularprism",
                date: "2020-08-31 10:09:58"
            },
            type: "Planet",
            subType: "Class III gas giant",
            parents: [
                {
                    Null: 0
                }
            ],
            distanceToArrival: 4212,
            isLandable: false,
            gravity: 1.5132130492641198,
            earthMasses: 118.80162,
            radius: 56512.648,
            surfaceTemperature: 383,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: {
                Hydrogen: 73.26,
                Helium: 26.74
            },
            solidComposition: null,
            terraformingState: "Not terraformable",
            orbitalPeriod: 6144.244016872454,
            semiMajorAxis: 7.468692205134442,
            orbitalEccentricity: 0.16296,
            orbitalInclination: -6.972298,
            argOfPeriapsis: 152.377835,
            rotationalPeriod: 0.8511316212384259,
            rotationalPeriodTidallyLocked: false,
            axialTilt: 0.340962,
            updateTime: "2025-01-13 17:44:59"
        },
        {
            id: 235193195,
            id64: 1837468732021510874n,
            bodyId: 51,
            name: "24 Comae Berenices ABC 5 a",
            discovery: {
                commander: "nebularprism",
                date: "2020-08-31 10:10:00"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 50
                },
                {
                    Null: 0
                }
            ],
            distanceToArrival: 4212,
            isLandable: true,
            gravity: 0.1636988338490832,
            earthMasses: 0.007581,
            radius: 1372.539875,
            surfaceTemperature: 381,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 90.95,
                Metal: 9.05,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 7.882243988136573,
            semiMajorAxis: 0.005498022323083105,
            orbitalEccentricity: 0.00131,
            orbitalInclination: 0.10286,
            argOfPeriapsis: 256.568007,
            rotationalPeriod: 7.883036600081018,
            rotationalPeriodTidallyLocked: true,
            axialTilt: -0.050754,
            materials: {
                Iron: 18.71,
                Sulphur: 18.15,
                Carbon: 15.26,
                Nickel: 14.15,
                Phosphorus: 9.77,
                Chromium: 8.41,
                Manganese: 7.73,
                Vanadium: 4.59,
                Niobium: 1.28,
                Antimony: 1.13,
                Mercury: 0.82
            },
            updateTime: "2025-01-13 17:45:30"
        },
        {
            id: 235193206,
            id64: 1909526326059438810n,
            bodyId: 53,
            name: "24 Comae Berenices ABC 5 b",
            discovery: {
                commander: "nebularprism",
                date: "2020-08-31 10:10:09"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Null: 52
                },
                {
                    Planet: 50
                },
                {
                    Null: 0
                }
            ],
            distanceToArrival: 4207,
            isLandable: true,
            gravity: 0.09707350334550825,
            earthMasses: 0.001636,
            radius: 827.991375,
            surfaceTemperature: 380,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 90.95,
                Metal: 9.05,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 2.7640742008333334,
            semiMajorAxis: 3.7018805124563844e-5,
            orbitalEccentricity: 0.004411,
            orbitalInclination: -2.470128,
            argOfPeriapsis: 246.45234,
            rotationalPeriod: 4.075373349861111,
            rotationalPeriodTidallyLocked: true,
            axialTilt: 0.35893,
            materials: {
                Iron: 18.59,
                Sulphur: 18.03,
                Carbon: 15.16,
                Nickel: 14.06,
                Phosphorus: 9.7,
                Chromium: 8.36,
                Manganese: 7.68,
                Vanadium: 4.56,
                Cadmium: 1.44,
                Niobium: 1.27,
                Ruthenium: 1.15
            },
            updateTime: "2025-01-13 17:45:18"
        },
        {
            id: 235193203,
            id64: 1945555123078402778n,
            bodyId: 54,
            name: "24 Comae Berenices ABC 5 c",
            discovery: {
                commander: "nebularprism",
                date: "2020-08-31 10:10:07"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Null: 52
                },
                {
                    Planet: 50
                },
                {
                    Null: 0
                }
            ],
            distanceToArrival: 4207,
            isLandable: true,
            gravity: 0.0919670442910496,
            earthMasses: 0.001394,
            radius: 785.23525,
            surfaceTemperature: 380,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 90.95,
                Metal: 9.05,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 2.7640742008333334,
            semiMajorAxis: 4.3455532206542294e-5,
            orbitalEccentricity: 0.004411,
            orbitalInclination: -2.470128,
            argOfPeriapsis: 66.452345,
            rotationalPeriod: 3.7614571535300927,
            rotationalPeriodTidallyLocked: true,
            axialTilt: 0.451577,
            materials: {
                Iron: 18.58,
                Sulphur: 18.02,
                Carbon: 15.15,
                Nickel: 14.05,
                Phosphorus: 9.7,
                Chromium: 8.35,
                Manganese: 7.67,
                Zinc: 5.05,
                Niobium: 1.27,
                Ruthenium: 1.15,
                Tungsten: 1.02
            },
            updateTime: "2025-01-13 17:45:22"
        },
        {
            id: 235193209,
            id64: 1981583920097366746n,
            bodyId: 55,
            name: "24 Comae Berenices ABC 5 d",
            discovery: {
                commander: "nebularprism",
                date: "2020-08-31 10:10:11"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 50
                },
                {
                    Null: 0
                }
            ],
            distanceToArrival: 4218,
            isLandable: true,
            gravity: 0.09336914440069564,
            earthMasses: 0.001457,
            radius: 796.732625,
            surfaceTemperature: 380,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 90.95,
                Metal: 9.05,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 34.78183169607639,
            semiMajorAxis: 0.014791364498736144,
            orbitalEccentricity: 3.2e-5,
            orbitalInclination: 1.696448,
            argOfPeriapsis: 192.713753,
            rotationalPeriod: 34.785331202222224,
            rotationalPeriodTidallyLocked: true,
            axialTilt: 0.348973,
            materials: {
                Iron: 18.49,
                Sulphur: 17.93,
                Carbon: 15.08,
                Nickel: 13.98,
                Phosphorus: 9.65,
                Chromium: 8.31,
                Manganese: 7.64,
                Germanium: 5.28,
                Tellurium: 1.37,
                Niobium: 1.26,
                Tungsten: 1.02
            },
            updateTime: "2025-01-13 17:45:34"
        },
        {
            id: 235193198,
            id64: 2017612717116330714n,
            bodyId: 56,
            name: "24 Comae Berenices ABC 5 e",
            discovery: {
                commander: "nebularprism",
                date: "2020-08-31 10:10:01"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 50
                },
                {
                    Null: 0
                }
            ],
            distanceToArrival: 4219,
            isLandable: true,
            gravity: 0.11606836810056329,
            earthMasses: 0.002769,
            radius: 985.1198125,
            surfaceTemperature: 380,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 90.95,
                Metal: 9.05,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 51.306160511793976,
            semiMajorAxis: 0.019166945978731097,
            orbitalEccentricity: 0.002489,
            orbitalInclination: 0.540455,
            argOfPeriapsis: 218.759232,
            rotationalPeriod: 51.31131736004629,
            rotationalPeriodTidallyLocked: true,
            axialTilt: 0.373401,
            materials: {
                Iron: 18.52,
                Sulphur: 17.96,
                Carbon: 15.1,
                Nickel: 14.01,
                Phosphorus: 9.67,
                Chromium: 8.33,
                Manganese: 7.65,
                Germanium: 5.28,
                Niobium: 1.27,
                Antimony: 1.12,
                Tin: 1.1
            },
            updateTime: "2025-01-13 17:45:11"
        },
        {
            id: 235193200,
            id64: 2053641514135294682n,
            bodyId: 57,
            name: "24 Comae Berenices ABC 5 f",
            discovery: {
                commander: "nebularprism",
                date: "2020-08-31 10:10:03"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 50
                },
                {
                    Null: 0
                }
            ],
            distanceToArrival: 4222,
            isLandable: true,
            gravity: 0.10494980633781391,
            earthMasses: 0.002058,
            radius: 893.1335,
            surfaceTemperature: 380,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 90.95,
                Metal: 9.05,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 77.72576270832175,
            semiMajorAxis: 0.02528229944604686,
            orbitalEccentricity: 0.00968,
            orbitalInclination: 1.10552,
            argOfPeriapsis: 233.897776,
            rotationalPeriod: 77.7335770426736,
            rotationalPeriodTidallyLocked: true,
            axialTilt: -0.49599,
            materials: {
                Iron: 19.08,
                Sulphur: 18.5,
                Carbon: 15.56,
                Nickel: 14.43,
                Phosphorus: 9.96,
                Chromium: 8.58,
                Germanium: 5.44,
                Vanadium: 4.68,
                Tellurium: 1.41,
                Niobium: 1.3,
                Tungsten: 1.05
            },
            updateTime: "2025-01-13 17:45:38"
        },
        {
            id: 235193213,
            id64: 2125699108173222618n,
            bodyId: 59,
            name: "24 Comae Berenices ABC 5 g",
            discovery: {
                commander: "nebularprism",
                date: "2020-08-31 10:10:12"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 50
                },
                {
                    Null: 0
                }
            ],
            distanceToArrival: 4228,
            isLandable: true,
            gravity: 0.1209617000487455,
            earthMasses: 0.003126,
            radius: 1025.3096875,
            surfaceTemperature: 379,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 90.95,
                Metal: 9.05,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 142.63003788612266,
            semiMajorAxis: 0.037894885945815804,
            orbitalEccentricity: 0.012187,
            orbitalInclination: -0.450104,
            argOfPeriapsis: 192.502209,
            rotationalPeriod: 2.899964340104167,
            rotationalPeriodTidallyLocked: false,
            axialTilt: 0.001735,
            materials: {
                Iron: 20.28,
                Sulphur: 19.66,
                Carbon: 16.53,
                Nickel: 15.34,
                Phosphorus: 10.59,
                Chromium: 9.12,
                Arsenic: 2.59,
                Zirconium: 2.35,
                Antimony: 1.22,
                Tin: 1.21,
                Tungsten: 1.11
            },
            updateTime: "2025-01-13 17:45:41"
        },
        {
            id: 235192817,
            id64: 108086475111240410n,
            bodyId: 3,
            name: "24 Comae Berenices B",
            discovery: {
                commander: "nebularprism",
                date: "2020-08-31 10:07:17"
            },
            type: "Star",
            subType: "M (Red dwarf) Star",
            parents: [
                {
                    Null: 1
                },
                {
                    Null: 0
                }
            ],
            distanceToArrival: 105,
            isMainStar: false,
            isScoopable: true,
            age: 5224,
            spectralClass: "M2",
            luminosity: "Va",
            absoluteMagnitude: 8.754364,
            solarMasses: 0.355469,
            solarRadius: 0.5342712178289001,
            surfaceTemperature: 3203,
            orbitalPeriod: 38.62369598613426,
            semiMajorAxis: 0.15507511749186947,
            orbitalEccentricity: 0.083796,
            orbitalInclination: -59.26203,
            argOfPeriapsis: 81.460494,
            rotationalPeriod: 2.0207517984837966,
            rotationalPeriodTidallyLocked: false,
            axialTilt: 0,
            updateTime: "2025-01-13 17:40:06"
        },
        {
            id: 235192818,
            id64: 144115272130204378n,
            bodyId: 4,
            name: "24 Comae Berenices C",
            discovery: {
                commander: "nebularprism",
                date: "2020-08-31 10:07:17"
            },
            type: "Star",
            subType: "M (Red dwarf) Star",
            parents: [
                {
                    Null: 0
                }
            ],
            distanceToArrival: 205,
            isMainStar: false,
            isScoopable: true,
            age: 5224,
            spectralClass: "M2",
            luminosity: "Va",
            absoluteMagnitude: 8.570297,
            solarMasses: 0.363281,
            solarRadius: 0.5840758705966931,
            surfaceTemperature: 3196,
            orbitalPeriod: 80.38364833703703,
            semiMajorAxis: 0.309674351260656,
            orbitalEccentricity: 0.105364,
            orbitalInclination: -17.978882,
            argOfPeriapsis: 233.716957,
            rotationalPeriod: 2.067679819224537,
            rotationalPeriodTidallyLocked: false,
            axialTilt: 0,
            updateTime: "2025-01-13 17:40:06"
        }
    ]
};

export const berenices2: SystemBodiesResponse = {
    id: 53494504,
    id64: 1323435196,
    name: "24 Comae Berenices",
    url: "https://www.edsm.net/en/system/bodies/id/53494504/name/24+Comae+Berenices",
    bodyCount: 16,
    bodies: [
        {
            id: 234280398,
            id64: 1323435196,
            bodyId: 0,
            name: "24 Comae Berenices",
            discovery: {
                commander: "expugnax",
                date: "2020-08-27 23:45:26"
            },
            type: "Star",
            subType: "A (Blue-White) Star",
            parents: null,
            distanceToArrival: 0,
            isMainStar: true,
            isScoopable: true,
            age: 1384,
            spectralClass: "A3",
            luminosity: "V",
            absoluteMagnitude: -2.62825,
            solarMasses: 1.972656,
            solarRadius: 1.5516356923076924,
            surfaceTemperature: 9015,
            orbitalPeriod: null,
            semiMajorAxis: null,
            orbitalEccentricity: null,
            orbitalInclination: null,
            argOfPeriapsis: null,
            rotationalPeriod: 0.8100136998032408,
            rotationalPeriodTidallyLocked: false,
            axialTilt: 0,
            updateTime: "2020-08-27 23:45:26"
        },
        {
            id: 234281061,
            id64: 36028798342399164n,
            bodyId: 1,
            name: "24 Comae Berenices 1",
            discovery: {
                commander: "expugnax",
                date: "2020-08-27 23:50:05"
            },
            type: "Planet",
            subType: "Class V gas giant",
            parents: [
                {
                    Star: 0
                }
            ],
            distanceToArrival: 239,
            isLandable: false,
            gravity: 3.524159506024019,
            earthMasses: 476.215881,
            radius: 74141.04,
            surfaceTemperature: 2039,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: {
                Hydrogen: 71.89,
                Helium: 28.11
            },
            solidComposition: null,
            terraformingState: "Not terraformable",
            orbitalPeriod: 86.38078898743056,
            semiMajorAxis: 0.4799913981864516,
            orbitalEccentricity: 0.01,
            orbitalInclination: -2.68039,
            argOfPeriapsis: 171.338243,
            rotationalPeriod: 86.47242944377315,
            rotationalPeriodTidallyLocked: true,
            axialTilt: -0.099779,
            updateTime: "2024-10-05 16:39:21"
        },
        {
            id: 234280732,
            id64: 252201580456182972n,
            bodyId: 7,
            name: "24 Comae Berenices 2",
            discovery: {
                commander: "expugnax",
                date: "2020-08-27 23:47:42"
            },
            type: "Planet",
            subType: "Class III gas giant",
            parents: [
                {
                    Star: 0
                }
            ],
            distanceToArrival: 3251,
            isLandable: false,
            gravity: 3.487637794833565,
            earthMasses: 475.843628,
            radius: 74499.088,
            surfaceTemperature: 603,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: {
                Hydrogen: 71.89,
                Helium: 28.11
            },
            solidComposition: null,
            terraformingState: "Not terraformable",
            orbitalPeriod: 4277.8341168606485,
            semiMajorAxis: 6.472985828613001,
            orbitalEccentricity: 0.018948,
            orbitalInclination: 0.135888,
            argOfPeriapsis: 176.554752,
            rotationalPeriod: 0.5250201226157407,
            rotationalPeriodTidallyLocked: false,
            axialTilt: -0.127314,
            rings: [
                {
                    name: "24 Comae Berenices 2 A Ring",
                    type: "Rocky",
                    mass: 45945000000,
                    innerRadius: 129300,
                    outerRadius: 271790
                }
            ],
            reserveLevel: "Pristine",
            updateTime: "2024-10-05 16:39:17"
        },
        {
            id: 234280797,
            id64: 324259174494110908n,
            bodyId: 9,
            name: "24 Comae Berenices 2 a",
            discovery: {
                commander: "expugnax",
                date: "2020-08-27 23:48:17"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 7
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 3250,
            isLandable: true,
            gravity: 0.10527959957549898,
            earthMasses: 0.002079,
            radius: 896.271625,
            surfaceTemperature: 566,
            surfacePressure: 0,
            volcanismType: "Minor Metallic Magma",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 90.99,
                Metal: 9.01,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 1.1202547354282408,
            semiMajorAxis: 0.0023777979914373876,
            orbitalEccentricity: 0.000676,
            orbitalInclination: -0.000259,
            argOfPeriapsis: 282.922439,
            rotationalPeriod: -1.120276747824074,
            rotationalPeriodTidallyLocked: false,
            axialTilt: -2.984975,
            materials: {
                Iron: 20.46,
                Sulphur: 19.96,
                Carbon: 16.78,
                Nickel: 15.48,
                Phosphorus: 10.75,
                Germanium: 5.87,
                Vanadium: 5.03,
                Arsenic: 2.63,
                Niobium: 1.4,
                Tungsten: 1.12,
                Polonium: 0.53
            },
            updateTime: "2024-10-05 16:39:52"
        },
        {
            id: 234280791,
            id64: 360287971513074876n,
            bodyId: 10,
            name: "24 Comae Berenices 2 b",
            discovery: {
                commander: "expugnax",
                date: "2020-08-27 23:48:13"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 7
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 3252,
            isLandable: false,
            gravity: 0.06542142078454845,
            earthMasses: 0.000509,
            radius: 562.578875,
            surfaceTemperature: 563,
            surfacePressure: 0,
            volcanismType: "Major Rocky Magma",
            atmosphereType: "Sulphur dioxide",
            atmosphereComposition: {
                "Sulphur dioxide": 90,
                Silicates: 5,
                Oxygen: 3
            },
            solidComposition: {
                Rock: 91.04,
                Metal: 8.96,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 1.808466458761574,
            semiMajorAxis: 0.003272181643569744,
            orbitalEccentricity: 0.002898,
            orbitalInclination: -0.007754,
            argOfPeriapsis: 77.540464,
            rotationalPeriod: 1.8085018431712963,
            rotationalPeriodTidallyLocked: true,
            axialTilt: -0.373731,
            updateTime: "2024-10-05 16:39:54"
        },
        {
            id: 234280809,
            id64: 396316768532038844n,
            bodyId: 11,
            name: "24 Comae Berenices 2 c",
            discovery: {
                commander: "expugnax",
                date: "2020-08-27 23:48:22"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 7
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 3247,
            isLandable: true,
            gravity: 0.13983615299906166,
            earthMasses: 0.00479,
            radius: 1180.43625,
            surfaceTemperature: 557,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 91.04,
                Metal: 8.96,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 7.3093687080671295,
            semiMajorAxis: 0.008302655529924598,
            orbitalEccentricity: 0.005143,
            orbitalInclination: 0.026562,
            argOfPeriapsis: 184.139981,
            rotationalPeriod: 7.309512134224537,
            rotationalPeriodTidallyLocked: true,
            axialTilt: -0.010473,
            materials: {
                Iron: 19.76,
                Sulphur: 19.29,
                Carbon: 16.22,
                Nickel: 14.94,
                Phosphorus: 10.38,
                Chromium: 8.89,
                Vanadium: 4.85,
                Arsenic: 2.54,
                Yttrium: 1.18,
                Tungsten: 1.08,
                Mercury: 0.86
            },
            updateTime: "2024-10-05 16:39:51"
        },
        {
            id: 234280832,
            id64: 432345565551002812n,
            bodyId: 12,
            name: "24 Comae Berenices 2 d",
            discovery: {
                commander: "expugnax",
                date: "2020-08-27 23:48:36"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 7
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 3253,
            isLandable: true,
            gravity: 0.12981807924668867,
            earthMasses: 0.003849,
            radius: 1098.223875,
            surfaceTemperature: 556,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 90.97,
                Metal: 9.03,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 11.935571415555556,
            semiMajorAxis: 0.011513107796367184,
            orbitalEccentricity: 0.00349,
            orbitalInclination: -0.047809,
            argOfPeriapsis: 332.394342,
            rotationalPeriod: 11.935804944942129,
            rotationalPeriodTidallyLocked: false,
            axialTilt: -0.253089,
            materials: {
                Iron: 19.05,
                Sulphur: 18.58,
                Carbon: 15.62,
                Nickel: 14.41,
                Phosphorus: 10,
                Chromium: 8.57,
                Germanium: 5.46,
                Zinc: 5.18,
                Niobium: 1.3,
                Tin: 1.13,
                Technetium: 0.68
            },
            updateTime: "2024-10-05 16:39:50"
        },
        {
            id: 234280821,
            id64: 504403159588930748n,
            bodyId: 14,
            name: "24 Comae Berenices 2 e",
            discovery: {
                commander: "expugnax",
                date: "2020-08-27 23:48:28"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Null: 13
                },
                {
                    Planet: 7
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 3248,
            isLandable: true,
            gravity: 0.1032865203957755,
            earthMasses: 0.001966,
            radius: 879.9428125,
            surfaceTemperature: 555,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 91.04,
                Metal: 8.96,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 1.6638611753819446,
            semiMajorAxis: 2.391803210480455e-5,
            orbitalEccentricity: 0.103304,
            orbitalInclination: 0.170503,
            argOfPeriapsis: 258.183008,
            rotationalPeriod: 2.6143663305208333,
            rotationalPeriodTidallyLocked: true,
            axialTilt: 0.429169,
            materials: {
                Iron: 18.45,
                Sulphur: 18.01,
                Carbon: 15.14,
                Nickel: 13.95,
                Phosphorus: 9.69,
                Chromium: 8.3,
                Manganese: 7.62,
                Zinc: 5.01,
                Cadmium: 1.43,
                Niobium: 1.26,
                Ruthenium: 1.14
            },
            updateTime: "2024-10-05 16:39:48"
        },
        {
            id: 234280825,
            id64: 540431956607894716n,
            bodyId: 15,
            name: "24 Comae Berenices 2 f",
            discovery: {
                commander: "expugnax",
                date: "2020-08-27 23:48:31"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Null: 13
                },
                {
                    Planet: 7
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 3248,
            isLandable: false,
            gravity: 0.09064488016255302,
            earthMasses: 0.001338,
            radius: 774.8915625,
            surfaceTemperature: 555,
            surfacePressure: 0,
            volcanismType: "Rocky Magma",
            atmosphereType: "Sulphur dioxide",
            atmosphereComposition: {
                "Sulphur dioxide": 90,
                Silicates: 5,
                Oxygen: 3
            },
            solidComposition: {
                Rock: 91.04,
                Metal: 8.96,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 1.6638611753819446,
            semiMajorAxis: 3.51325562236963e-5,
            orbitalEccentricity: 0.103304,
            orbitalInclination: 0.170503,
            argOfPeriapsis: 78.183014,
            rotationalPeriod: 2.1571200597569447,
            rotationalPeriodTidallyLocked: true,
            axialTilt: -0.151126,
            updateTime: "2024-10-05 16:39:46"
        },
        {
            id: 234281022,
            id64: 648518347664786620n,
            bodyId: 18,
            name: "24 Comae Berenices 3",
            discovery: {
                commander: "expugnax",
                date: "2020-08-27 23:49:43"
            },
            type: "Planet",
            subType: "Class III gas giant",
            parents: [
                {
                    Null: 17
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 4331,
            isLandable: false,
            gravity: 3.205969617723569,
            earthMasses: 424.838776,
            radius: 73420.424,
            surfaceTemperature: 518,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: {
                Hydrogen: 71.89,
                Helium: 28.11
            },
            solidComposition: null,
            terraformingState: "Not terraformable",
            orbitalPeriod: 161.04812837309026,
            semiMajorAxis: 0.00030327320339878345,
            orbitalEccentricity: 0.094739,
            orbitalInclination: -6.087661,
            argOfPeriapsis: 157.115999,
            rotationalPeriod: 0.797075370486111,
            rotationalPeriodTidallyLocked: false,
            axialTilt: 0.252949,
            rings: [
                {
                    name: "24 Comae Berenices 3 A Ring",
                    type: "Metallic",
                    mass: 235400000000,
                    innerRadius: 121140,
                    outerRadius: 152850
                },
                {
                    name: "24 Comae Berenices 3 B Ring",
                    type: "Rocky",
                    mass: 1579400000000,
                    innerRadius: 152950,
                    outerRadius: 280030
                }
            ],
            reserveLevel: "Pristine",
            updateTime: "2024-10-05 16:39:13"
        },
        {
            id: 234281033,
            id64: 756604738721678524n,
            bodyId: 21,
            name: "24 Comae Berenices 3 a",
            discovery: {
                commander: "expugnax",
                date: "2020-08-27 23:49:50"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 18
                },
                {
                    Null: 17
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 4331,
            isLandable: true,
            gravity: 0.1570986493267374,
            earthMasses: 0.006733,
            radius: 1320.391125,
            surfaceTemperature: 488,
            surfacePressure: 0,
            volcanismType: "Metallic Magma",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 91.04,
                Metal: 8.96,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 1.0357769620138888,
            semiMajorAxis: 0.0021730130799807565,
            orbitalEccentricity: 0.002297,
            orbitalInclination: -0.00287,
            argOfPeriapsis: 351.568179,
            rotationalPeriod: 0.9497934262847223,
            rotationalPeriodTidallyLocked: false,
            axialTilt: 0.104808,
            materials: {
                Iron: 19.07,
                Sulphur: 18.62,
                Carbon: 15.65,
                Nickel: 14.42,
                Phosphorus: 10.02,
                Chromium: 8.58,
                Germanium: 5.48,
                Vanadium: 4.68,
                Niobium: 1.3,
                Yttrium: 1.14,
                Tungsten: 1.05
            },
            updateTime: "2024-10-05 16:39:35"
        },
        {
            id: 234280973,
            id64: 792633535740642492n,
            bodyId: 22,
            name: "24 Comae Berenices 3 b",
            discovery: {
                commander: "expugnax",
                date: "2020-08-27 23:49:28"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 18
                },
                {
                    Null: 17
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 4328,
            isLandable: true,
            gravity: 0.1426736034801134,
            earthMasses: 0.005047,
            radius: 1199.580375,
            surfaceTemperature: 481,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 90.58,
                Metal: 9.42,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 4.802785054953704,
            semiMajorAxis: 0.006042457861660126,
            orbitalEccentricity: 0.014286,
            orbitalInclination: -0.073632,
            argOfPeriapsis: 333.941073,
            rotationalPeriod: 4.6672084273611105,
            rotationalPeriodTidallyLocked: false,
            axialTilt: -0.487152,
            materials: {
                Iron: 19.11,
                Sulphur: 18.49,
                Carbon: 15.55,
                Nickel: 14.45,
                Phosphorus: 9.95,
                Chromium: 8.59,
                Germanium: 5.44,
                Vanadium: 4.69,
                Niobium: 1.31,
                Molybdenum: 1.25,
                Ruthenium: 1.18
            },
            updateTime: "2024-10-05 16:39:29"
        },
        {
            id: 234280989,
            id64: 828662332759606460n,
            bodyId: 23,
            name: "24 Comae Berenices 3 b a",
            discovery: {
                commander: "expugnax",
                date: "2020-08-27 23:49:32"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 22
                },
                {
                    Planet: 18
                },
                {
                    Null: 17
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 4328,
            isLandable: true,
            gravity: 0.058470071502560984,
            earthMasses: 0.000397,
            radius: 525.5486875,
            surfaceTemperature: 481,
            surfacePressure: 0,
            volcanismType: "Major Silicate Vapour Geysers",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 96.85,
                Metal: 3.15,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 0.43987452431712964,
            semiMajorAxis: 2.8729622986057644e-5,
            orbitalEccentricity: 0,
            orbitalInclination: -30.585775,
            argOfPeriapsis: 209.138743,
            rotationalPeriod: 0.4568521583564815,
            rotationalPeriodTidallyLocked: false,
            axialTilt: 0.146595,
            materials: {
                Sulphur: 19.54,
                Iron: 17.34,
                Carbon: 16.43,
                Nickel: 13.12,
                Phosphorus: 10.52,
                Chromium: 7.8,
                Manganese: 7.16,
                Zinc: 4.71,
                Cadmium: 1.35,
                Ruthenium: 1.07,
                Tungsten: 0.95
            },
            updateTime: "2024-10-05 16:39:31"
        },
        {
            id: 234280951,
            id64: 864691129778570428n,
            bodyId: 24,
            name: "24 Comae Berenices 3 c",
            discovery: {
                commander: "expugnax",
                date: "2020-08-27 23:49:21"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 18
                },
                {
                    Null: 17
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 4334,
            isLandable: true,
            gravity: 0.12873021740208024,
            earthMasses: 0.003759,
            radius: 1089.884375,
            surfaceTemperature: 479,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 91.04,
                Metal: 8.96,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 8.946735066944445,
            semiMajorAxis: 0.009148036733173234,
            orbitalEccentricity: 0.039777,
            orbitalInclination: 0.49567,
            argOfPeriapsis: 25.572081,
            rotationalPeriod: 8.785523433391203,
            rotationalPeriodTidallyLocked: true,
            axialTilt: 0.179026,
            materials: {
                Iron: 19.51,
                Sulphur: 19.05,
                Carbon: 16.02,
                Nickel: 14.76,
                Phosphorus: 10.26,
                Chromium: 8.78,
                Zinc: 5.3,
                Zirconium: 2.27,
                Cadmium: 1.52,
                Niobium: 1.33,
                Ruthenium: 1.21
            },
            updateTime: "2024-10-05 16:39:36"
        },
        {
            id: 234280916,
            id64: 900719926797534396n,
            bodyId: 25,
            name: "24 Comae Berenices 4",
            discovery: {
                commander: "expugnax",
                date: "2020-08-27 23:49:12"
            },
            type: "Planet",
            subType: "High metal content world",
            parents: [
                {
                    Null: 17
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 4314,
            isLandable: true,
            gravity: 1.483469206800528,
            earthMasses: 2.056956,
            radius: 7510.308,
            surfaceTemperature: 473,
            surfacePressure: 0,
            volcanismType: "Minor Metallic Magma",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 67,
                Metal: 33,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 161.04812837309026,
            semiMajorAxis: 0.06263110345075319,
            orbitalEccentricity: 0.094739,
            orbitalInclination: -6.087661,
            argOfPeriapsis: 337.115994,
            rotationalPeriod: 80.71879704749999,
            rotationalPeriodTidallyLocked: false,
            axialTilt: -0.49988,
            materials: {
                Iron: 22.88,
                Nickel: 17.31,
                Sulphur: 16.21,
                Carbon: 13.63,
                Phosphorus: 8.73,
                Zinc: 6.22,
                Vanadium: 5.62,
                Germanium: 4.77,
                Cadmium: 1.78,
                Molybdenum: 1.49,
                Yttrium: 1.37
            },
            rings: [
                {
                    name: "24 Comae Berenices 4 A Ring",
                    type: "Metal Rich",
                    mass: 17414000000,
                    innerRadius: 46524,
                    outerRadius: 52281
                },
                {
                    name: "24 Comae Berenices 4 B Ring",
                    type: "Rocky",
                    mass: 100640000000,
                    innerRadius: 52381,
                    outerRadius: 77592
                }
            ],
            reserveLevel: "Pristine",
            updateTime: "2024-10-05 16:39:42"
        },
        {
            id: 234280889,
            id64: 1008806317854426300n,
            bodyId: 28,
            name: "24 Comae Berenices 4 a",
            discovery: {
                commander: "expugnax",
                date: "2020-08-27 23:49:02"
            },
            type: "Planet",
            subType: "Rocky body",
            parents: [
                {
                    Planet: 25
                },
                {
                    Null: 17
                },
                {
                    Star: 0
                }
            ],
            distanceToArrival: 4314,
            isLandable: true,
            gravity: 0.04669475168129113,
            earthMasses: 0.000186,
            radius: 402.5380625,
            surfaceTemperature: 473,
            surfacePressure: 0,
            volcanismType: "No volcanism",
            atmosphereType: "No atmosphere",
            atmosphereComposition: null,
            solidComposition: {
                Rock: 91.04,
                Metal: 8.96,
                Ice: 0
            },
            terraformingState: "Not terraformable",
            orbitalPeriod: 4.646769897256944,
            semiMajorAxis: 0.001000000721212939,
            orbitalEccentricity: 0.000414,
            orbitalInclination: 2.383869,
            argOfPeriapsis: 44.710504,
            rotationalPeriod: 4.647109598472222,
            rotationalPeriodTidallyLocked: true,
            axialTilt: -0.120898,
            materials: {
                Iron: 18.55,
                Sulphur: 18.11,
                Carbon: 15.23,
                Nickel: 14.03,
                Phosphorus: 9.75,
                Chromium: 8.34,
                Manganese: 7.66,
                Germanium: 5.33,
                Cadmium: 1.44,
                Tin: 1.1,
                Polonium: 0.48
            },
            updateTime: "2024-10-05 16:39:40"
        }
    ]
};

export const shinrartaDezhraStations: SystemStationsResponse = {
    id: 4345,
    id64: 3932277478106,
    name: "Shinrarta Dezhra",
    url: "https://www.edsm.net/en/system/stations/id/4345/name/Shinrarta+Dezhra",
    stations: [
        {
            id: 285,
            marketId: 128679815,
            type: "Planetary Outpost",
            name: "Jameson Base",
            body: {
                id: 7058,
                name: "Shinrarta Dezhra A 1",
                latitude: 27.469,
                longitude: -18.4903
            },
            distanceToArrival: 40,
            allegiance: "Independent",
            government: "Workshop (Engineer)",
            economy: "Colony",
            secondEconomy: "Colony",
            haveMarket: true,
            haveShipyard: false,
            haveOutfitting: true,
            otherServices: [
                "Restock",
                "Refuel",
                "Repair",
                "Contacts",
                "Universal Cartographics",
                "Tuning",
                "Search and Rescue"
            ],
            controllingFaction: {
                id: null,
                name: "Lori Jameson"
            },
            updateTime: {
                information: "2025-09-06 08:35:18",
                market: "2025-09-06 07:00:18",
                shipyard: null,
                outfitting: "2025-09-06 07:00:18"
            }
        },
        {
            id: 84681,
            marketId: 3922272256,
            type: "Odyssey Settlement",
            name: "Hardy Tourism Resort",
            body: {
                id: 8138622,
                name: "Shinrarta Dezhra AB 3 a",
                latitude: -76.0239,
                longitude: -78.0375
            },
            distanceToArrival: 5711,
            allegiance: "Independent",
            government: "Prison colony",
            economy: "Tourism",
            secondEconomy: null,
            haveMarket: true,
            haveShipyard: false,
            haveOutfitting: false,
            otherServices: [
                "Refuel",
                "Repair",
                "Contacts",
                "Missions",
                "Crew Lounge",
                "Search and Rescue"
            ],
            controllingFaction: {
                id: 189,
                name: "Los Chupacabras"
            },
            updateTime: {
                information: "2025-09-05 22:33:52",
                market: "2025-08-26 00:07:05",
                shipyard: null,
                outfitting: null
            }
        }
    ]
};

export const jamesonMemorialMarket: StationMarketResponse = {
    id: 4345,
    id64: 3932277478106,
    name: "Shinrarta Dezhra",
    marketId: 128666762,
    sId: 65,
    sName: "Jameson Memorial",
    url: "https://www.edsm.net/en/system/stations/id/4345/name/Shinrarta+Dezhra/details/facility/market/idS/65/nameS/Jameson+Memorial",
    commodities: [
        {
            id: "advancedcatalysers",
            name: "Advanced Catalysers",
            buyPrice: 2242,
            stock: 33857,
            sellPrice: 2164,
            demand: 1,
            stockBracket: 3
        },
        {
            id: "advancedmedicines",
            name: "Advanced Medicines",
            buyPrice: 0,
            stock: 0,
            sellPrice: 1464,
            demand: 29034,
            stockBracket: 0
        }
    ]
};

export const jamesonMemorialShipyard: StationShipyardResponse = {
    id: 4345,
    id64: 3932277478106,
    name: "Shinrarta Dezhra",
    marketId: 128666762,
    sId: 65,
    sName: "Jameson Memorial",
    url: "https://www.edsm.net/en/system/stations/id/4345/name/Shinrarta+Dezhra/details/facility/shipyard/idS/65/nameS/Jameson+Memorial",
    ships: [
        {
            id: 128049249,
            name: "Sidewinder"
        },
        {
            id: 128049255,
            name: "Eagle"
        }
    ]
};

export const jamesonMemorialOutfitting: StationOutfittingResponse = {
    id: 4345,
    id64: 3932277478106,
    name: "Shinrarta Dezhra",
    marketId: 128666762,
    sId: 65,
    sName: "Jameson Memorial",
    url: "https://www.edsm.net/en/system/stations/id/4345/name/Shinrarta+Dezhra/details/facility/outfitting/idS/65/nameS/Jameson+Memorial",
    outfitting: [
        {
            id: "adder_armour_grade1",
            name: "1I Lightweight Alloy"
        },
        {
            id: "adder_armour_grade2",
            name: "1I Reinforced Alloy"
        },
        {
            id: "adder_armour_grade3",
            name: "1I Military Grade Composite"
        }
    ]
};

export const shinrartaDezhraFactions: SystemFactionsResponse = {
    id: 4345,
    id64: 3932277478106,
    name: "Shinrarta Dezhra",
    url: "https://www.edsm.net/en/system/id/4345/name/Shinrarta+Dezhra",
    controllingFaction: {
        id: 81923,
        name: "Pilots' Federation Local Branch",
        allegiance: "Pilots Federation",
        government: "Democracy"
    },
    factions: [
        {
            id: 434,
            name: "LTT 4487 Industry",
            allegiance: "Federation",
            government: "Corporate",
            influence: 0.275724,
            influenceHistory: {
                1749215868: 0.259036,
                1749242409: 0.26506,
                1749334521: 0.268342
            },
            state: "Civil liberty",
            stateHistory: {
                1750602980: "Boom",
                1750603085: "None",
                1750603227: "Boom"
            },
            activeStates: [
                {
                    state: "Civil liberty"
                }
            ],
            activeStatesHistory: {
                1749648608: [
                    {
                        state: "Boom"
                    }
                ],
                1750516536: [
                    {
                        state: "Boom"
                    },
                    {
                        state: "Civil liberty"
                    }
                ]
            },
            recoveringStates: [],
            recoveringStatesHistory: {
                1750602980: [
                    {
                        state: "Civil liberty",
                        trend: 0
                    }
                ],
                1750603085: [
                    {
                        state: "Boom",
                        trend: 0
                    }
                ]
            },
            pendingStates: [],
            pendingStatesHistory: {
                1749648608: [
                    {
                        state: "Civil liberty",
                        trend: 0
                    }
                ],
                1753536579: [
                    {
                        state: "Civil liberty",
                        trend: 0
                    }
                ]
            },
            happiness: "Happy",
            happinessHistory: {
                1749242409: "Happy",
                1749242428: "None",
                1749243215: "Happy",
                1749243225: "None",
                1749243884: "Happy",
                1749243944: "None"
            },
            isPlayer: false,
            lastUpdate: 1757160605
        }
    ]
};

export const shinrartaDezhraTraffic: SystemTrafficResponse = {
    id: 4345,
    id64: 3932277478106,
    name: "Shinrarta Dezhra",
    url: "https://www.edsm.net/en/system/id/4345/name/Shinrarta+Dezhra",
    discovery: {
        commander: "Wu Ye",
        date: "2014-11-22 13:39:56"
    },
    traffic: {
        total: 31157,
        week: 891,
        day: 169
    },
    breakdown: {
        Anaconda: 16,
        "Asp Explorer": 4,
        "Asp Scout": 1,
        "Beluga Liner": 1,
        "Cobra Mk III": 2,
        "Cobra Mk IV": 1,
        "Cobra Mk V": 12,
        Corsair: 11,
        "Diamondback Explorer": 7,
        "Diamondback Scout": 1,
        Dolphin: 1,
        "Federal Corvette": 3,
        "Federal Dropship": 1,
        "Fer-de-Lance": 1,
        Hauler: 1,
        "Imperial Cutter": 4,
        Keelback: 1,
        "Krait Mk II": 8,
        "Krait Phantom": 2,
        Mandalay: 65,
        "Panther Clipper Mk II": 7,
        Python: 1,
        "Python Mk II": 2,
        Sidewinder: 5,
        "Type-8 Transporter": 7
    }
};
