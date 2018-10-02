/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'texture-min',
                            type: 'image',
                            rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"texture-min.jpg",'50%','50%','1920px','auto', 'no-repeat']
                        },
                        {
                            id: 'gomez-morin',
                            type: 'image',
                            rect: ['16px', '-11px', '100.9%', '103.2%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"gomez-morin.png",'156.9%','106.8%','39.6%','auto', 'no-repeat'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, -4, 0]
                        },
                        {
                            id: 'item1',
                            type: 'image',
                            rect: ['0%', '-4.1%', '37.9%', '37%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"item1.svg",'0%','0%','95.6%','auto', 'no-repeat']
                        },
                        {
                            id: 'item2',
                            type: 'image',
                            rect: ['-1.8%', '0.5%', '37.9%', '31.9%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted.svg",'24.51%','21.72%','47.04%','auto', 'no-repeat']
                        },
                        {
                            id: 'Pasted2',
                            type: 'image',
                            rect: ['-54.5%', '40.5%', '51%', '22.2%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted2.svg",'0%','0%'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'Pasted3',
                            type: 'image',
                            rect: ['-0.5%', '81.3%', '14.1%', '10.9%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted3.svg",'0%','0%','99.63%','100%', 'no-repeat']
                        },
                        {
                            id: 'Pasted4',
                            type: 'image',
                            rect: ['-6000px', '996px', '830px', '614px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted4.svg",'0px','0px']
                        },
                        {
                            id: 'hector-teran-min',
                            type: 'image',
                            rect: ['0%', '-1%', '100.4%', '101.6%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"hector-teran-min.png",'190.4%','100.2%','45.3%','auto', 'no-repeat']
                        },
                        {
                            id: 'rosas-magallan2',
                            type: 'image',
                            rect: ['0%', '0%', '100.9%', '103.2%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"rosas-magallan.png",'158.1%','142.3%','37%','auto', 'no-repeat']
                        },
                        {
                            id: 'blacky',
                            type: 'image',
                            rect: ['0%', '0.6%', '100%', '100%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted5.svg",'111.26%','114.2%','52%','auto', 'no-repeat']
                        },
                        {
                            id: 'Pasted9',
                            type: 'image',
                            rect: ['-47.9%', '34.6%', '41.5%', '36.2%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted9.svg",'0%','0%']
                        },
                        {
                            id: 'g-morin-text',
                            type: 'image',
                            rect: ['0%', '52.7%', '100.4%', '47.9%', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Pasted10.svg",'96.9%','84.9%','19.09%','17.41%', 'no-repeat']
                        },
                        {
                            id: 'hector_teran',
                            type: 'image',
                            rect: ['0%', '61.6%', '100%', '38.4%', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Pasted11.svg",'97.9%','77%','18.02%','16.39%', 'no-repeat']
                        },
                        {
                            id: 'Pasted14',
                            type: 'image',
                            rect: ['-50.9%', '34.8%', '48.3%', '31.5%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted14.svg",'0px','0px']
                        },
                        {
                            id: 'rosas-mag-text',
                            type: 'image',
                            rect: ['0%', '68.5%', '100%', '31.5%', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Pasted15.svg",'97.6%','81.4%','22.809999465942383%','25.59000015258789%', 'no-repeat']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '100%', '100%', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 13750,
                    autoPlay: true,
                    data: [
                        [
                            "eid86",
                            "opacity",
                            0,
                            0,
                            "easeOutCubic",
                            "${hector_teran}",
                            '0',
                            '0'
                        ],
                        [
                            "eid87",
                            "opacity",
                            3250,
                            0,
                            "easeOutCubic",
                            "${hector_teran}",
                            '0',
                            '0'
                        ],
                        [
                            "eid89",
                            "opacity",
                            3345,
                            945,
                            "easeOutCubic",
                            "${hector_teran}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid136",
                            "opacity",
                            7750,
                            0,
                            "easeOutCubic",
                            "${hector_teran}",
                            '1',
                            '1'
                        ],
                        [
                            "eid138",
                            "opacity",
                            7880,
                            505,
                            "easeOutCubic",
                            "${hector_teran}",
                            '1',
                            '0'
                        ],
                        [
                            "eid22",
                            "left",
                            0,
                            1000,
                            "easeOutCubic",
                            "${Pasted2}",
                            '-51.56%',
                            '6.74%'
                        ],
                        [
                            "eid46",
                            "left",
                            3000,
                            345,
                            "easeOutCubic",
                            "${Pasted2}",
                            '6.74%',
                            '-54.49%'
                        ],
                        [
                            "eid118",
                            "background-position",
                            1205,
                            0,
                            "easeOutCubic",
                            "${g-morin-text}",
                            [96.9,84.9],
                            [96.9,84.9],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid184",
                            "background-position",
                            9395,
                            0,
                            "linear",
                            "${rosas-mag-text}",
                            [97.6,81.4],
                            [97.6,81.4],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid188",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${rosas-magallan2}",
                            [159.1,142.3],
                            [159.1,142.3],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid189",
                            "background-position",
                            7880,
                            0,
                            "linear",
                            "${rosas-magallan2}",
                            [159.1,142.3],
                            [159.1,142.3],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid190",
                            "background-position",
                            8340,
                            0,
                            "linear",
                            "${rosas-magallan2}",
                            [159.1,142.3],
                            [159.1,142.3],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid192",
                            "background-position",
                            8435,
                            914,
                            "easeOutQuad",
                            "${rosas-magallan2}",
                            [159.1,142.3],
                            [98.7,142.3],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid195",
                            "background-position",
                            12750,
                            1000,
                            "easeOutCubic",
                            "${rosas-magallan2}",
                            [98.7,142.3],
                            [158.1,142.3],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid171",
                            "opacity",
                            0,
                            0,
                            "easeOutCubic",
                            "${rosas-mag-text}",
                            '0',
                            '0'
                        ],
                        [
                            "eid172",
                            "opacity",
                            8385,
                            0,
                            "easeOutCubic",
                            "${rosas-mag-text}",
                            '0',
                            '0'
                        ],
                        [
                            "eid174",
                            "opacity",
                            8435,
                            960,
                            "easeOutCubic",
                            "${rosas-mag-text}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid196",
                            "opacity",
                            10905,
                            0,
                            "easeOutCubic",
                            "${rosas-mag-text}",
                            '1',
                            '1'
                        ],
                        [
                            "eid198",
                            "opacity",
                            12750,
                            1000,
                            "easeOutCubic",
                            "${rosas-mag-text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid169",
                            "top",
                            8435,
                            914,
                            "easeOutCubic",
                            "${Pasted14}",
                            '34.78%',
                            '34.85%'
                        ],
                        [
                            "eid200",
                            "top",
                            12250,
                            0,
                            "easeOutCubic",
                            "${Pasted14}",
                            '34.85%',
                            '34.85%'
                        ],
                        [
                            "eid203",
                            "top",
                            12750,
                            1000,
                            "easeOutCubic",
                            "${Pasted14}",
                            '34.85%',
                            '34.78%'
                        ],
                        [
                            "eid121",
                            "top",
                            4290,
                            0,
                            "linear",
                            "${g-morin-text}",
                            '52.72%',
                            '52.72%'
                        ],
                        [
                            "eid60",
                            "background-position",
                            3345,
                            945,
                            "easeOutCubic",
                            "${hector-teran-min}",
                            [183.6,100.2],
                            [99.4,100.2],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid125",
                            "background-position",
                            7880,
                            505,
                            "easeOutQuad",
                            "${hector-teran-min}",
                            [99.4,100.2],
                            [190.4,100.2],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid75",
                            "left",
                            3345,
                            945,
                            "easeOutCubic",
                            "${Pasted9}",
                            '-47.95%',
                            '9.32%'
                        ],
                        [
                            "eid132",
                            "left",
                            7750,
                            0,
                            "easeOutQuad",
                            "${Pasted9}",
                            '9.32%',
                            '9.32%'
                        ],
                        [
                            "eid134",
                            "left",
                            7880,
                            505,
                            "easeOutQuad",
                            "${Pasted9}",
                            '9.32%',
                            '-44.06%'
                        ],
                        [
                            "eid103",
                            "left",
                            1205,
                            0,
                            "easeOutCubic",
                            "${g-morin-text}",
                            '0%',
                            '0%'
                        ],
                        [
                            "eid24",
                            "background-position",
                            0,
                            1000,
                            "easeOutCubic",
                            "${gomez-morin}",
                            [157.1,106.8],
                            [97.7,106.8],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid37",
                            "background-position",
                            3000,
                            345,
                            "easeOutCubic",
                            "${gomez-morin}",
                            [97.7,106.8],
                            [156.9,106.8],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid106",
                            "height",
                            1205,
                            0,
                            "easeOutCubic",
                            "${g-morin-text}",
                            '47.87%',
                            '47.87%'
                        ],
                        [
                            "eid81",
                            "opacity",
                            0,
                            1000,
                            "easeOutCubic",
                            "${g-morin-text}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid82",
                            "opacity",
                            2955,
                            0,
                            "easeOutCubic",
                            "${g-morin-text}",
                            '1',
                            '1'
                        ],
                        [
                            "eid84",
                            "opacity",
                            3000,
                            345,
                            "easeOutCubic",
                            "${g-morin-text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid168",
                            "left",
                            8435,
                            914,
                            "easeOutCubic",
                            "${Pasted14}",
                            '-50.92%',
                            '5.66%'
                        ],
                        [
                            "eid199",
                            "left",
                            12250,
                            0,
                            "easeOutCubic",
                            "${Pasted14}",
                            '5.66%',
                            '5.66%'
                        ],
                        [
                            "eid204",
                            "left",
                            12750,
                            1000,
                            "easeOutCubic",
                            "${Pasted14}",
                            '5.66%',
                            '-52.48%'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Orgullo-azul_edgeActions.js");
})("EDGE-606305343");
